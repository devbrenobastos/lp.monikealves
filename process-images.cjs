const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputDir = path.join(__dirname, 'imgs');
const outputDir = path.join(__dirname, 'src', 'assets');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imagesToProcess = [
  {
    input: 'ChatGPT Image 10 de jun. de 2026, 01_57_52.png',
    outputBase: 'solucao-trafego'
  },
  {
    input: 'ChatGPT Image 10 de jun. de 2026, 01_57_20.png',
    outputBase: 'solucao-time'
  },
  {
    input: 'ChatGPT Image 10 de jun. de 2026, 01_55_24.png',
    outputBase: 'solucao-conteudo'
  }
];

const widths = [480, 768, 1100];

async function processImages() {
  for (const img of imagesToProcess) {
    const inputPath = path.join(inputDir, img.input);
    if (!fs.existsSync(inputPath)) {
      console.error(`Input file not found: ${inputPath}`);
      continue;
    }

    console.log(`Processing: ${img.input}`);

    for (const width of widths) {
      const height = Math.round((width * 3) / 4); // 4:3 aspect ratio

      // WebP output
      const webpOutPath = path.join(outputDir, `${img.outputBase}-${width}.webp`);
      await sharp(inputPath)
        .resize(width, height, { fit: 'cover', position: 'center' })
        .webp({ quality: 80 })
        .toFile(webpOutPath);
      console.log(`Saved: ${webpOutPath}`);

      // AVIF output
      const avifOutPath = path.join(outputDir, `${img.outputBase}-${width}.avif`);
      await sharp(inputPath)
        .resize(width, height, { fit: 'cover', position: 'center' })
        .avif({ quality: 75 })
        .toFile(avifOutPath);
      console.log(`Saved: ${avifOutPath}`);
    }
  }
  console.log('Image processing completed.');
}

processImages().catch(err => {
  console.error('Error during image processing:', err);
});
