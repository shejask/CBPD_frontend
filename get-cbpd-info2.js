const fs = require('fs');

fetch('https://www.cbpd.co.uk/')
  .then(res => res.text())
  .then(html => {
    const logos = html.match(/src=["']([^"']*logo[^"']*)["']/gi);
    const colors = html.match(/#[0-9a-fA-F]{6}/g);
    const colorCounts = {};
    if(colors) colors.forEach(c => { colorCounts[c.toLowerCase()] = (colorCounts[c.toLowerCase()] || 0) + 1; });
    const sortedColors = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
    
    fs.writeFileSync('cbpd-info.json', JSON.stringify({
      logos: logos ? [...new Set(logos)] : "None found",
      colors: sortedColors.slice(0, 10)
    }, null, 2));
  })
  .catch(console.error);
