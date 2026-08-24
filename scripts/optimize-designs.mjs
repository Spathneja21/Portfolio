import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import works from '../src/data/worksData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const designWorks = works.filter((work) => work.category === 'graphic');

const MAX_WIDTH = 1000;
const QUALITY = 82;

let totalBefore = 0;
let totalAfter = 0;

for (const work of designWorks) {
    const inputPath = path.join(publicDir, work.src);
    const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

    if (!fs.existsSync(inputPath)) {
        console.warn(`Missing file, skipping: ${inputPath}`);
        continue;
    }

    const beforeSize = fs.statSync(inputPath).size;

    await sharp(inputPath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

    const afterSize = fs.statSync(outputPath).size;
    totalBefore += beforeSize;
    totalAfter += afterSize;

    console.log(
        `${path.basename(inputPath)}: ${(beforeSize / 1024 / 1024).toFixed(2)}MB -> ${(afterSize / 1024 / 1024).toFixed(2)}MB`
    );
}

console.log('---');
console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`);
