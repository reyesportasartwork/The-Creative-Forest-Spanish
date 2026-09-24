import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Precise crops for each of the 14 artworks:
// GUARANTEE: Zero child faces. ONLY Reyes visible. Artworks take center stage!
const artworks = [
  {
    id: 1,
    file: 'Captura de pantalla 2026-06-16 220318.png',
    crop: [0, 0, 1000, 1000],
    titleEs: 'Un Barco en el Mar al Amanecer',
    titleEn: 'Sailboat at Sunrise',
    tag: 'Acuarela',
    hasReyes: false
  },
  {
    id: 2,
    file: 'Captura de pantalla 2026-08-24 210450.png',
    crop: [0, 0, 1000, 1000],
    titleEs: 'Los Cuatro Elementos y Estaciones',
    titleEn: 'The Four Elements & Seasons',
    tag: 'Técnica Mixta',
    hasReyes: false
  },
  {
    id: 3,
    file: 'Captura de pantalla 2026-05-12 133052.png',
    crop: [0, 0, 1000, 1000],
    titleEs: 'La Ventana de Flores & Mandala de Girasol',
    titleEn: 'Flower Window & Sunflower Mandala',
    tag: 'Botánica',
    hasReyes: true
  },
  {
    id: 4,
    file: 'Captura de pantalla 2026-06-21 171244.png',
    // Top half showing Reyes and the clock drawing, 100% child excluded
    crop: [0, 0, 492, 1000],
    titleEs: 'El Reloj Mágico del Taller',
    titleEn: 'The Magic Studio Clock',
    tag: 'Volumen',
    hasReyes: true
  },
  {
    id: 5,
    file: 'Captura de pantalla 2026-05-07 114651.png',
    // Left half showing Reyes holding Spiderman superhero mask, 100% child excluded
    crop: [160, 0, 880, 495],
    titleEs: 'Máscara de Superhéroe y Personajes',
    titleEn: 'Superhero & Character Mask',
    tag: 'Disfraz',
    hasReyes: true
  },
  {
    id: 6,
    file: 'Captura de pantalla 2026-05-27 104941.png',
    // Pure artwork crop: ymin=250 ensures ZERO hair or forehead is visible, only the drawing!
    crop: [255, 95, 1000, 905],
    titleEs: 'Las Lluvias de Abril y Flores de Mayo',
    titleEn: 'April Showers & May Flowers',
    tag: 'Caligrafía',
    hasReyes: false
  },
  {
    id: 7,
    file: 'Captura de pantalla 2025-10-19 174637.png',
    crop: [0, 0, 1000, 1000],
    titleEs: 'Collage del Gato Verde Fantástico',
    titleEn: 'The Fantastic Green Cat Collage',
    tag: 'Collage',
    hasReyes: true
  },
  {
    id: 8,
    file: 'Captura de pantalla 2026-06-01 215625.png',
    crop: [0, 0, 1000, 1000],
    titleEs: 'El Vuelo de las Mariposas',
    titleEn: 'The Flight of the Butterflies',
    tag: 'Papel',
    hasReyes: true
  },
  {
    id: 9,
    file: 'Captura de pantalla 2026-05-27 111427.png',
    crop: [0, 0, 1000, 1000],
    titleEs: 'El Oso Panda y sus Amigos del Bosque',
    titleEn: 'Panda Bear & Forest Companions',
    tag: 'Dibujo',
    hasReyes: true
  },
  {
    id: 10,
    file: 'Captura de pantalla 2025-08-29 114331.png',
    // Top half showing the overhead painting board on left and Reyes on right, children excluded
    crop: [0, 0, 517, 1000],
    titleEs: 'Pintura Táctil y Creatividad Libre',
    titleEn: 'Tactile Painting & Free Exploration',
    tag: 'Pintura',
    hasReyes: true
  },
  {
    id: 11,
    file: 'Captura de pantalla 2025-10-12 185341.png',
    // Top half showing palette and paints + Reyes with puppet, child at bottom excluded
    crop: [0, 0, 510, 1000],
    titleEs: 'Mesa de Pigmentos y Expresión Plástica',
    titleEn: 'Color Palette & Creative Expression',
    tag: 'Taller',
    hasReyes: true
  },
  {
    id: 12,
    file: 'Captura de pantalla 2026-06-07 202728.png',
    // Top half showing Reyes with puppet Felpa and song lyrics on right, child excluded
    crop: [0, 0, 545, 1000],
    titleEs: 'Canción y Rimas de Tiggy la Gatita',
    titleEn: 'Tiggy the Kitten Song & Rhymes',
    tag: 'Poesía',
    hasReyes: true
  },
  {
    id: 13,
    file: 'Captura de pantalla 2025-10-12 220642.png',
    crop: [0, 0, 1000, 1000],
    titleEs: 'Flores de Papel y Jardinería Artística',
    titleEn: 'Paper Blooms & Botanical Craft',
    tag: 'Flores',
    hasReyes: true
  },
  {
    id: 14,
    file: 'Captura de pantalla 2026-06-21 170102.png',
    crop: [0, 0, 1000, 1000],
    titleEs: 'El Sol Radiante y las Emociones',
    titleEn: 'The Radiant Sun & Feelings',
    tag: 'Emociones',
    hasReyes: true
  }
];

const outDir = path.join(process.cwd(), 'public', 'student_works');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('--- Generating individual artwork cards (960x600 px) ---');

artworks.forEach((item) => {
  const src = path.join(process.cwd(), 'public', item.file);
  const buf = fs.readFileSync(src);
  const W = buf.readUInt32BE(16);
  const H = buf.readUInt32BE(20);
  const [ymin, xmin, ymax, xmax] = item.crop;
  const x = Math.round((xmin / 1000) * W);
  const y = Math.round((ymin / 1000) * H);
  const w = Math.round(((xmax - xmin) / 1000) * W);
  const h = Math.round(((ymax - ymin) / 1000) * H);

  const rawCrop = `/tmp/crop_clean_${item.id}.png`;
  execSync(`convert "${src}" -crop ${w}x${h}+${x}+${y} +repage "${rawCrop}"`);

  // Render to standard 960x600 card
  const outPath = path.join(outDir, `student_work_${item.id}.png`);
  const aspect = w / h;
  if (aspect >= 1.45 && aspect <= 1.8) {
    execSync(`convert "${rawCrop}" -resize 960x600^ -gravity center -extent 960x600 "${outPath}"`);
  } else {
    // Elegant warm matte backing
    execSync(`convert "${rawCrop}" -resize 960x600^ -gravity center -extent 960x600 -blur 0x24 -fill "#FAF7F2" -colorize 30% /tmp/bg_${item.id}.png`);
    execSync(`convert "${rawCrop}" -resize 920x560\\> /tmp/art_${item.id}.png`);
    execSync(`convert /tmp/bg_${item.id}.png /tmp/art_${item.id}.png -gravity center -composite "${outPath}"`);
  }
  console.log(`[OK] Card #${item.id}: ${item.titleEs}`);
});

console.log('--- Generating Master Panoramic Collage (1800 x 650) ---');

// Build a rich studio collage containing artworks pinned on a studio wall:
// We select key works representing all domains:
// - Sailboat watercolor (#1)
// - The Four Elements (#2)
// - Reyes holding the Superhero Mask (#5)
// - Sunflower mandala & botany (#3)
// - Green cat collage with Reyes (#7)
// - Spring flowers and raindrops poster (#6)
// - The studio clock (#4)
// - Butterfly symmetry craft (#8)

// Prepare Polaroid-style framed assets with soft shadows:
const collageItems = [
  { id: 1, rot: -3, w: 320, h: 220, x: 40,  y: 60  },
  { id: 5, rot: 2,  w: 300, h: 250, x: 330, y: 30  },
  { id: 2, rot: -2, w: 320, h: 240, x: 600, y: 70  },
  { id: 3, rot: 3,  w: 320, h: 230, x: 890, y: 40  },
  { id: 6, rot: -2, w: 290, h: 250, x: 1180, y: 65 },
  { id: 7, rot: 2,  w: 310, h: 230, x: 1440, y: 50 },

  // Bottom row overlapping cards
  { id: 8,  rot: 2,  w: 290, h: 210, x: 140,  y: 360 },
  { id: 4,  rot: -3, w: 310, h: 210, x: 440,  y: 370 },
  { id: 9,  rot: 1,  w: 290, h: 210, x: 740,  y: 380 },
  { id: 10, rot: -2, w: 300, h: 210, x: 1040, y: 360 },
  { id: 14, rot: 3,  w: 300, h: 210, x: 1330, y: 370 }
];

collageItems.forEach((c, idx) => {
  const cardPath = path.join(outDir, `student_work_${c.id}.png`);
  // Add crisp white photo border, subtle inner border, and soft drop shadow
  execSync(`convert "${cardPath}" -resize ${c.w}x${c.h}^ -gravity center -extent ${c.w}x${c.h} \\
    -bordercolor "#FFFFFF" -border 10x10 \\
    -bordercolor "#E2DDD3" -border 1x1 \\
    \\( +clone -background black -shadow 60x5+3+5 \\) +swap -background none -flatten \\
    -background none -rotate ${c.rot} \\
    /tmp/coll_card_${idx}.png`);
});

// Build canvas (1800 x 680) with warm studio texture and pin accents
let compositeCmd = `convert -size 1800x680 xc:"#F5F2EB" \\
  -fill "#EFE9DD" -draw "circle 900,340 900,680" -blur 0x50 \\
  -fill "#EAE3D4" -draw "circle 200,200 200,450" -blur 0x40 \\
  -fill "#EAE3D4" -draw "circle 1600,400 1600,650" -blur 0x40 `;

collageItems.forEach((c, idx) => {
  compositeCmd += ` /tmp/coll_card_${idx}.png -geometry +${c.x}+${c.y} -composite `;
});

const bannerCollageFile = path.join(process.cwd(), 'public', 'student_creations_collage.png');
compositeCmd += ` "${bannerCollageFile}"`;

execSync(compositeCmd);
console.log('[OK] Generated student_creations_collage.png');

// Also update student_creations_banner.png and creaciones_banner.png so all banner links reflect the collage!
execSync(`cp "${bannerCollageFile}" "${path.join(process.cwd(), 'public', 'student_creations_banner.png')}"`);
execSync(`cp "${bannerCollageFile}" "${path.join(process.cwd(), 'public', 'Captura de pantalla 2026-09-22 195801.png')}"`);
execSync(`cp "${bannerCollageFile}" "${path.join(process.cwd(), 'public', 'creaciones_banner.png')}"`);

// Generate also a Studio Wall Full Collage (1600 x 1100) featuring ALL 14 works in a rich moodboard
console.log('--- Generating Full Wall Collage with all 14 works ---');
const wall14 = [
  // Row 1
  { id: 1, rot: -2.5, w: 340, h: 230, x: 50,  y: 60 },
  { id: 5, rot: 2,   w: 320, h: 250, x: 420, y: 40 },
  { id: 2, rot: -1.5, w: 340, h: 240, x: 770, y: 70 },
  { id: 3, rot: 2.5,  w: 340, h: 240, x: 1140, y: 50 },

  // Row 2
  { id: 6, rot: 2,    w: 310, h: 240, x: 70,  y: 380 },
  { id: 7, rot: -2,   w: 330, h: 230, x: 410, y: 390 },
  { id: 4, rot: 2,    w: 320, h: 230, x: 770, y: 370 },
  { id: 8, rot: -2.5, w: 330, h: 230, x: 1120, y: 390 },

  // Row 3
  { id: 9,  rot: -1.5, w: 330, h: 230, x: 80,  y: 710 },
  { id: 10, rot: 2.5,  w: 330, h: 220, x: 440, y: 720 },
  { id: 11, rot: -2,   w: 320, h: 220, x: 790, y: 700 },
  { id: 14, rot: 2,    w: 320, h: 220, x: 1140, y: 710 },
  
  // Floating highlights
  { id: 12, rot: -3,   w: 290, h: 200, x: 260, y: 550 },
  { id: 13, rot: 3,    w: 290, h: 200, x: 960, y: 540 }
];

wall14.forEach((c, idx) => {
  const cardPath = path.join(outDir, `student_work_${c.id}.png`);
  execSync(`convert "${cardPath}" -resize ${c.w}x${c.h}^ -gravity center -extent ${c.w}x${c.h} \\
    -bordercolor "#FFFFFF" -border 9x9 \\
    -bordercolor "#DDD7CC" -border 1x1 \\
    \\( +clone -background black -shadow 55x5+2+4 \\) +swap -background none -flatten \\
    -background none -rotate ${c.rot} \\
    /tmp/wall_card_${idx}.png`);
});

let wallCmd = `convert -size 1550x1050 xc:"#F6F3EC" \\
  -fill "#ECE5D8" -draw "circle 775,525 775,1050" -blur 0x60 `;

wall14.forEach((c, idx) => {
  wallCmd += ` /tmp/wall_card_${idx}.png -geometry +${c.x}+${c.y} -composite `;
});

const wallCollageFile = path.join(process.cwd(), 'public', 'student_wall_collage.png');
wallCmd += ` "${wallCollageFile}"`;
execSync(wallCmd);
console.log('[OK] Generated student_wall_collage.png');

console.log('All master collages and artwork cards completed successfully!');
