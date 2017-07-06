const sharp = require('sharp');

sharp('test.svg', { density: 300 })
  .limitInputPixels(false)
  .resize(1024, 4096)
  .png()
  .toFile('test-sharp.png');
