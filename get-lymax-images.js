const fs = require('fs');
fetch('https://lymaxlearning.com/')
  .then(res => res.text())
  .then(html => {
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    const images = [];
    let match;
    while ((match = imgRegex.exec(html)) !== null) {
      images.push(match[1]);
    }
    fs.writeFileSync('lymax-images.json', JSON.stringify([...new Set(images)], null, 2));
  })
  .catch(console.error);
