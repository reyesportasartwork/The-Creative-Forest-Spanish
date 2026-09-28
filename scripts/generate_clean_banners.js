import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Generate clean, high-resolution banners with ZERO pixelation, showcasing the 5 categories:
// 1. Escultura (Clase de Clay & Bubbles and Clay)
// 2. Pintura (Acuarelas & Mezclas)
// 3. Estampación (Clase de Estampación)
// 4. Ciencias y Lengua Española (Summer Camp de Cocina & Rimas)
// 5. Material de Repaso (Láminas de Fichas & Ejercicios para Clase)

const dir = path.join(process.cwd(), 'public', 'student_works');
const publicDir = path.join(process.cwd(), 'public');

console.log('Generating crisp collage banners without any blur or pixelation...');

// Select 6 prime representative photos from the 5 categories
const keyPhotos = [
  { file: 'Captura de pantalla 2026-06-16 220318.png', label: 'Pintura: Barco en Acuarela' },
  { file: 'WhatsApp Image 2026-09-25 at 16.18.49.jpeg', label: 'Escultura: Clase de Clay' },
  { file: 'WhatsApp Image 2026-09-25 at 16,18,04-1.jpeg', label: 'Estampación: Sellos Botánicos' },
  { file: 'WhatsApp Image 2026-09-25 at 16.20.10.jpeg', label: 'Ciencias & Lengua: Summer Camp de Cocina' },
  { file: 'Material repaso 23_11_25 (Jan 31, 2026 at 8_42 PM).jpg', label: 'Material de Repaso: Ejercicios para Clase' },
  { file: 'Captura de pantalla 2025-10-19 174637-1.png', label: 'Pintura: El Gato Verde Fantástico' },
];

// Resize each tile cleanly with high quality
const tiles = [];
keyPhotos.forEach((item, idx) => {
  const src = path.join(dir, item.file);
  const out = `/tmp/banner_tile_${idx}.jpg`;
  // Clean resize to 400x300 with high quality
  execSync(`convert "${src}" -auto-orient -resize 400x300^ -gravity center -extent 400x300 -quality 95 "${out}"`);
  tiles.push(out);
});

// Create 1200x600 grid banner (2 rows of 3 columns)
const row1 = `/tmp/banner_row_1.jpg`;
const row2 = `/tmp/banner_row_2.jpg`;
execSync(`convert "${tiles[0]}" "${tiles[1]}" "${tiles[2]}" +append "${row1}"`);
execSync(`convert "${tiles[3]}" "${tiles[4]}" "${tiles[5]}" +append "${row2}"`);

const bannerOut = path.join(publicDir, 'student_creations_banner.png');
const collageOut = path.join(publicDir, 'student_creations_collage.png');

execSync(`convert "${row1}" "${row2}" -append "${bannerOut}"`);
// Copy to collageOut as well
fs.copyFileSync(bannerOut, collageOut);

console.log('Successfully created:');
console.log(' - ' + bannerOut);
console.log(' - ' + collageOut);
