fetch('https://www.cbpd.co.uk/')
  .then(res => res.text())
  .then(html => {
    const logos = html.match(/src=["']([^"']*logo[^"']*)["']/gi);
    const colors = html.match(/#[0-9a-fA-F]{6}/g);
    const colorCounts = {};
    if(colors) colors.forEach(c => { colorCounts[c.toLowerCase()] = (colorCounts[c.toLowerCase()] || 0) + 1; });
    const sortedColors = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
    
    // Also checking for external CSS files
    const cssFiles = html.match(/href=["']([^"']*\.css)["']/gi);

    console.log("LOGOS:", logos ? [...new Set(logos)] : "None found");
    console.log("COLORS:", sortedColors.slice(0, 10));
    console.log("CSS FILES:", cssFiles ? [...new Set(cssFiles)] : "None found");
  })
  .catch(console.error);
