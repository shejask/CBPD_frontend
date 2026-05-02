const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const srcDir = path.join(__dirname, '../src');
const publicImagesDir = path.join(__dirname, '../public/images/external');
const publicVideosDir = path.join(__dirname, '../public/videos/external');

// Ensure directories exist
if (!fs.existsSync(publicImagesDir)) fs.mkdirSync(publicImagesDir, { recursive: true });
if (!fs.existsSync(publicVideosDir)) fs.mkdirSync(publicVideosDir, { recursive: true });

function getAllFiles(dir, extFilter = ['.ts', '.tsx']) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFiles(file, extFilter));
        } else {
            if (extFilter.includes(path.extname(file))) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = getAllFiles(srcDir);
const externalUrls = new Set();
const urlRegex = /https?:\/\/[^\s"'`)]+/gi;

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = urlRegex.exec(content)) !== null) {
        const url = match[0];
        // Filter for images/videos
        if (url.includes('images.unsplash.com') || 
            url.includes('lymaxlearning.com/img') || 
            url.includes('videos.pexels.com') || 
            url.includes('cbpd.co.uk/_next/image')) {
            externalUrls.add(url);
        }
    }
});

const urlsToProcess = Array.from(externalUrls);
console.log(`Found ${urlsToProcess.length} external URLs.`);

const mapping = {};

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const protocol = url.startsWith('https') ? https : http;
        
        // Handle _next/image query parameters safely
        let reqUrl = url;
        if (url.includes('_next/image?url=')) {
            const parsedUrl = new URL(url);
            const decodedUrl = decodeURIComponent(parsedUrl.searchParams.get('url'));
            reqUrl = 'https://www.cbpd.co.uk' + decodedUrl;
        }

        const request = protocol.get(reqUrl, function(response) {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', function() {
                    file.close(resolve);
                });
            } else if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                // follow redirect
                downloadFile(response.headers.location, dest).then(resolve).catch(reject);
            } else {
                file.close();
                fs.unlink(dest, () => {});
                reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
            }
        }).on('error', function(err) {
            fs.unlink(dest, () => {});
            reject(err.message);
        });
    });
}

async function processUrls() {
    let count = 0;
    for (const url of urlsToProcess) {
        count++;
        console.log(`Downloading ${count}/${urlsToProcess.length}: ${url}`);
        
        let isVideo = url.includes('videos.pexels.com');
        let filename = '';
        
        if (url.includes('images.unsplash.com')) {
            // Extract the photo ID
            const match = url.match(/photo-([a-zA-Z0-9-]+)/);
            if (match) {
                filename = match[1] + '.jpg';
            } else {
                filename = 'unsplash-' + Math.random().toString(36).substring(7) + '.jpg';
            }
        } else if (url.includes('lymaxlearning.com')) {
            filename = url.split('/').pop();
        } else if (isVideo) {
            const match = url.match(/video-files\/(\d+)/);
            filename = match ? match[1] + '.mp4' : 'video-' + Math.random().toString(36).substring(7) + '.mp4';
        } else if (url.includes('_next/image')) {
            const parsedUrl = new URL(url);
            const decodedUrl = decodeURIComponent(parsedUrl.searchParams.get('url'));
            filename = decodedUrl.split('/').pop() || 'cbpd-' + Math.random().toString(36).substring(7) + '.png';
            if (!filename.includes('.')) filename += '.png';
        } else {
            filename = 'asset-' + Math.random().toString(36).substring(7) + '.jpg';
        }

        const targetDir = isVideo ? publicVideosDir : publicImagesDir;
        const destPath = path.join(targetDir, filename);
        
        try {
            await downloadFile(url, destPath);
            mapping[url] = (isVideo ? '/videos/external/' : '/images/external/') + filename;
        } catch (err) {
            console.error(`Failed to download ${url}: ${err}`);
        }
    }

    console.log('\n--- Replacing URLs in Files ---');
    for (const file of files) {
        let content = fs.readFileSync(file, 'utf8');
        let changed = false;
        
        for (const [originalUrl, newLocalPath] of Object.entries(mapping)) {
            if (content.includes(originalUrl)) {
                // Use a simple replaceAll logic (split and join) to replace all occurrences
                content = content.split(originalUrl).join(newLocalPath);
                changed = true;
            }
        }
        
        if (changed) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated ${path.relative(srcDir, file)}`);
        }
    }
    
    fs.writeFileSync(path.join(__dirname, 'asset-mapping.json'), JSON.stringify(mapping, null, 2));
    console.log('Done!');
}

processUrls().catch(console.error);
