const fs = require('fs');

fetch('https://www.cbpd.co.uk/')
  .then(res => res.text())
  .then(html => {
    // extract all img src attributes and alt text if available
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    const images = [];
    let match;
    while ((match = imgRegex.exec(html)) !== null) {
      const imgTag = match[0];
      const src = match[1];
      const altMatch = imgTag.match(/alt=["']([^"']*)["']/i);
      const alt = altMatch ? altMatch[1] : '';
      images.push({ src, alt });
    }
    fs.writeFileSync('cbpd-images.json', JSON.stringify(images, null, 2));
  })
  .catch(console.error);
