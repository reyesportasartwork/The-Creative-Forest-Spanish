import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// All 14 files and their metadata and detected child face coordinates
const studentWorksData = [
  {
    id: 1,
    file: 'Captura de pantalla 2026-06-16 220318.png',
    titleEs: 'Un Barco en el Mar al Amanecer',
    titleEn: 'Sailboat at Sunrise',
    category: 'pintura',
    categoryLabelEs: 'Acuarela & Pintura',
    categoryLabelEn: 'Watercolor & Painting',
    descEs: 'Pintura al amanecer con velero sobre el mar, aprendiendo vocabulario marino y mezclas de luz.',
    descEn: 'Sunrise seascape with a sailboat, exploring marine vocabulary and morning light palettes.',
    childFaces: []
  },
  {
    id: 2,
    file: 'Captura de pantalla 2026-08-24 210450.png',
    titleEs: 'Los Cuatro Elementos y Estaciones',
    titleEn: 'The Four Elements & Seasons',
    category: 'naturaleza',
    categoryLabelEs: 'Naturaleza & Ciencia',
    categoryLabelEn: 'Nature & Gentle Science',
    descEs: 'Composición en cuatro cuadrantes representando aire, agua, tierra y fuego con texturas pictóricas.',
    descEn: 'Four-quadrant composition capturing air, water, earth, and fire with expressive paint textures.',
    childFaces: []
  },
  {
    id: 3,
    file: 'Captura de pantalla 2026-05-12 133052.png',
    titleEs: 'La Ventana de Flores y Girasol',
    titleEn: 'The Flower Window & Sunflower Mandala',
    category: 'naturaleza',
    categoryLabelEs: 'Naturaleza & Arte',
    categoryLabelEn: 'Nature & Botanicals',
    descEs: 'Mandala botánico y estudio en acuarela de un girasol con anotaciones de partes de la flor.',
    descEn: 'Botanical mandala and sunflower watercolor study naming parts of the blossom in Spanish.',
    childFaces: []
  },
  {
    id: 4,
    file: 'Captura de pantalla 2026-06-21 171244.png',
    titleEs: 'El Reloj Mágico del Taller',
    titleEn: 'The Magic Studio Clock',
    category: 'manualidades',
    categoryLabelEs: 'Manualidades & Volumen',
    categoryLabelEn: 'Crafts & Hands-on',
    descEs: 'Creación de un reloj artesanal sobre plato de papel para aprender las horas y números en español.',
    descEn: 'Handmade paper plate clock crafted to explore hours and numbers naturally in Spanish.',
    // Child face at [496, 526, 819, 746]
    childFaces: [[496, 526, 819, 746]]
  },
  {
    id: 5,
    file: 'Captura de pantalla 2026-05-07 114651.png',
    titleEs: 'Máscaras de Animales y Superhéroes',
    titleEn: 'Animal & Superhero Masks',
    category: 'personajes',
    categoryLabelEs: 'Personajes & Disfraz',
    categoryLabelEn: 'Characters & Drama',
    descEs: 'Máscaras ilustradas de animales del bosque y superhéroes para juegos de rol y diálogos teatrales.',
    descEn: 'Hand-painted woodland creature and superhero masks used for roleplay and expressive dialogue.',
    // Child face behind mask: [357, 712, 506, 808]
    childFaces: [[357, 712, 506, 808]]
  },
  {
    id: 6,
    file: 'Captura de pantalla 2026-05-27 104941.png',
    titleEs: 'Las Lluvias de Abril y las Flores de Mayo',
    titleEn: 'April Showers & May Flowers',
    category: 'historias',
    categoryLabelEs: 'Cuentos & Letras',
    categoryLabelEn: 'Stories & Rhymes',
    descEs: 'Lámina ilustrada con refranes populares, arcoíris y flores de primavera.',
    descEn: 'Illustrated proverb poster with springtime rainbows, wildflowers, and handwritten verses.',
    // Child face at top edge: [10, 222, 231, 472]
    childFaces: [[10, 222, 231, 472]]
  },
  {
    id: 7,
    file: 'Captura de pantalla 2025-10-19 174637.png',
    titleEs: 'Collage del Gato Verde Fantástico',
    titleEn: 'The Fantastic Green Cat Collage',
    category: 'personajes',
    categoryLabelEs: 'Personajes & Collage',
    categoryLabelEn: 'Characters & Collage',
    descEs: 'Recorte de siluetas, ensamblaje de personaje felino y descripción de sus aventuras en español.',
    descEn: 'Silhouette cutting, feline character construction, and storytelling describing quirky adventures.',
    childFaces: []
  },
  {
    id: 8,
    file: 'Captura de pantalla 2026-06-01 215625.png',
    titleEs: 'El Vuelo de las Mariposas',
    titleEn: 'The Flight of the Butterflies',
    category: 'manualidades',
    categoryLabelEs: 'Manualidades & Papel',
    categoryLabelEn: 'Paper Crafts & Flight',
    descEs: 'Diseño simétrico de alas de mariposa con degradados de color y patronajes naturales.',
    descEn: 'Symmetrical butterfly wing crafts exploring color gradients and pattern naming.',
    childFaces: []
  },
  {
    id: 9,
    file: 'Captura de pantalla 2026-05-27 111427.png',
    titleEs: 'El Oso Panda y sus Amigos del Bosque',
    titleEn: 'Panda Bear & Forest Companions',
    category: 'personajes',
    categoryLabelEs: 'Dibujo & Animales',
    categoryLabelEn: 'Drawing & Wildlife',
    descEs: 'Bocetos paso a paso de animales orientales y del bosque, con emociones y personalidades.',
    descEn: 'Step-by-step sketching of forest creatures and pandas, connecting traits and emotions.',
    childFaces: []
  },
  {
    id: 10,
    file: 'Captura de pantalla 2025-08-29 114331.png',
    titleEs: 'Pintura Táctil y Creatividad Libre',
    titleEn: 'Tactile Painting & Free Exploration',
    category: 'pintura',
    categoryLabelEs: 'Pintura & Texturas',
    categoryLabelEn: 'Painting & Textures',
    descEs: 'Exploración de pigmentos sobre cartón, mezclando tonos terrosos y experimentando texturas.',
    descEn: 'Pigment and tactile cardboard painting, blending earth tones and experimenting freely.',
    // Child faces at [520, 158, 686, 252] and [542, 600, 898, 734]
    childFaces: [[520, 158, 686, 252], [542, 600, 898, 734]]
  },
  {
    id: 11,
    file: 'Captura de pantalla 2025-10-12 185341.png',
    titleEs: 'Juegos de Aire y Movimiento',
    titleEn: 'Air Games & Creative Movement',
    category: 'manualidades',
    categoryLabelEs: 'Juego & Creatividad',
    categoryLabelEn: 'Play & Movement',
    descEs: 'Dinámicas con globos, colores y ritmo para soltar el habla y conectar palabras en movimiento.',
    descEn: 'Creative dynamics with colors and balloon play, encouraging spontaneous speech in movement.',
    // Child face at [623, 491, 845, 606]
    childFaces: [[623, 491, 845, 606]]
  },
  {
    id: 12,
    file: 'Captura de pantalla 2026-06-07 202728.png',
    titleEs: 'Canción y Poema de Tiggy la Gatita',
    titleEn: 'Tiggy the Kitten Song & Poem',
    category: 'historias',
    categoryLabelEs: 'Música & Poesía',
    categoryLabelEn: 'Music & Story Poetry',
    descEs: 'Lectura rimada, ritmo vocal y entonación en español con rimas de animales traviesos.',
    descEn: 'Rhyming verses, vocal rhythm, and expressive Spanish intonation with animal poetry.',
    // Child face at [666, 115, 855, 216]
    childFaces: [[666, 115, 855, 216]]
  },
  {
    id: 13,
    file: 'Captura de pantalla 2025-10-12 220642.png',
    titleEs: 'Flores de Papel y Jardinería Artística',
    titleEn: 'Paper Blooms & Botanical Craft',
    category: 'manualidades',
    categoryLabelEs: 'Manualidades & Flores',
    categoryLabelEn: 'Flower Crafting',
    descEs: 'Modelado en papel seda y cartulina de flores silvestres para decorar el cuaderno de campo.',
    descEn: 'Silk paper and cardstock wild bloom modeling to decorate personal nature journals.',
    childFaces: []
  },
  {
    id: 14,
    file: 'Captura de pantalla 2026-06-21 170102.png',
    titleEs: 'El Sol Radiante y las Emociones',
    titleEn: 'The Radiant Sun & Feelings',
    category: 'personajes',
    categoryLabelEs: 'Emociones & Arte',
    categoryLabelEn: 'Feelings & Art',
    descEs: 'Construcción plástica de rostros solares que expresan diferentes estados de ánimo y calma.',
    descEn: 'Sculpting sunshine faces expressing emotional nuances, joy, and calm focus in Spanish.',
    childFaces: []
  }
];

// Target uniform dimensions for all student artwork cards
const CARD_WIDTH = 960;
const CARD_HEIGHT = 600;

const outputDir = path.join(process.cwd(), 'public', 'student_works');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('--- Processing 14 Student Work Photos ---');

studentWorksData.forEach((work, idx) => {
  const srcPath = path.join(process.cwd(), 'public', work.file);
  const outCardPath = path.join(outputDir, `student_work_${work.id}.png`);
  
  // 1. Read dimensions of original
  const buf = fs.readFileSync(srcPath);
  const origW = buf.readUInt32BE(16);
  const origH = buf.readUInt32BE(20);

  let currentWorkingImg = `/tmp/temp_work_${work.id}_masked.png`;
  execSync(`cp "${srcPath}" "${currentWorkingImg}"`);

  // 2. Pixelate & apply soft circular frosted mask over all child faces
  if (work.childFaces && work.childFaces.length > 0) {
    for (let fIdx = 0; fIdx < work.childFaces.length; fIdx++) {
      const [ymin, xmin, ymax, xmax] = work.childFaces[fIdx];
      let bx = Math.round((xmin / 1000) * origW);
      let by = Math.round((ymin / 1000) * origH);
      let bw = Math.round(((xmax - xmin) / 1000) * origW);
      let bh = Math.round(((ymax - ymin) / 1000) * origH);

      // Add generous padding (20%) so the child face is safely covered
      const padx = Math.round(bw * 0.20);
      const pady = Math.round(bh * 0.20);
      bx = Math.max(0, bx - padx);
      by = Math.max(0, by - pady);
      bw = Math.min(origW - bx, bw + padx * 2);
      bh = Math.min(origH - by, bh + pady * 2);

      const faceBlurPath = `/tmp/face_blur_${work.id}_${fIdx}.png`;
      const faceMaskPath = `/tmp/face_mask_${work.id}_${fIdx}.png`;

      // Pixelated + frosted blur combo:
      // scale down to 6%, scale back up, plus gentle blur for maximum aesthetic privacy
      execSync(`convert "${currentWorkingImg}" -crop ${bw}x${bh}+${bx}+${by} -scale 6% -scale ${bw}x${bh}! -blur 0x6 "${faceBlurPath}"`);

      // Soft feathered elliptical mask so the edges blend imperceptibly
      const rx = (bw * 0.48).toFixed(1);
      const ry = (bh * 0.48).toFixed(1);
      const cx = (bw / 2).toFixed(1);
      const cy = (bh / 2).toFixed(1);
      execSync(`convert -size ${bw}x${bh} xc:black -fill white -draw "ellipse ${cx},${cy} ${rx},${ry} 0,360" -blur 0x8 "${faceMaskPath}"`);

      // Composite onto image
      execSync(`convert "${currentWorkingImg}" \\( "${faceBlurPath}" "${faceMaskPath}" -alpha off -compose CopyOpacity -composite \\) -geometry +${bx}+${by} -composite "${currentWorkingImg}"`);
    }
  }

  // 3. Format to uniform aspect ratio (960x600 px)
  // For artwork display:
  // If the aspect ratio is within 10% of 16:10 (1.6), we do a clean center crop.
  // If it's wider (like panoramic 2.1) or taller (like 4:3), we create a studio matte background
  // (blurred, soft-tone studio background) with the full artwork crisply rendered in center!
  const aspect = origW / origH;
  if (aspect >= 1.5 && aspect <= 1.8) {
    // Perfect ratio range for direct clean crop
    execSync(`convert "${currentWorkingImg}" -resize ${CARD_WIDTH}x${CARD_HEIGHT}^ -gravity center -extent ${CARD_WIDTH}x${CARD_HEIGHT} "${outCardPath}"`);
  } else {
    // Beautiful studio matte: soft warm blurred background with drop shadow for the centered artwork
    execSync(`convert "${currentWorkingImg}" -resize ${CARD_WIDTH}x${CARD_HEIGHT}^ -gravity center -extent ${CARD_WIDTH}x${CARD_HEIGHT} -blur 0x28 -fill "#FAF7F2" -colorize 35% /tmp/bg_${work.id}.png`);
    execSync(`convert "${currentWorkingImg}" -resize ${CARD_WIDTH - 40}x${CARD_HEIGHT - 36}\\> /tmp/art_${work.id}.png`);
    execSync(`convert /tmp/bg_${work.id}.png /tmp/art_${work.id}.png -gravity center -composite "${outCardPath}"`);
  }

  console.log(`[OK] Processed student work #${work.id}: ${work.titleEs}`);
});

console.log('--- Generating Composite Studio Banner (1600 x 540) ---');

// Build a panoramic composite banner using 5 standout student works:
// Work 1 (Sailboat), Work 2 (Four Elements), Work 3 (Sunflower & Window), Work 4 (Clock), Work 5 (Masks)
// Each displayed in a tasteful Polaroid/gallery card layout with warm natural backdrop!

const bannerPath = path.join(process.cwd(), 'public', 'student_creations_banner.png');
const oldBannerPath1 = path.join(process.cwd(), 'public', 'Captura de pantalla 2026-09-22 195801.png');
const oldBannerPath2 = path.join(process.cwd(), 'public', 'creaciones_banner.png');
const srcAssetsBanner = path.join(process.cwd(), 'src', 'assets', 'images', 'creaciones_banner.png');

// Create 5 cards for the panorama:
// Card width: 340x440
const cardW = 340;
const cardH = 440;
const featuredIds = [1, 2, 3, 4, 5];

featuredIds.forEach((id, i) => {
  const cardSrc = path.join(outputDir, `student_work_${id}.png`);
  execSync(`convert "${cardSrc}" -resize ${cardW}x${cardH}^ -gravity center -extent ${cardW}x${cardH} -bordercolor "#FFFFFF" -border 8x8 -bordercolor "#E5E2DC" -border 1x1 /tmp/bcard_${i}.png`);
});

// Composite the 5 cards onto a 1600x520 warm textured canvas with subtle rotation and overlaps
execSync(`convert -size 1600x520 xc:"#F4F1EA" \\
  -fill "#EAE5DA" -draw "circle 800,260 800,500" -blur 0x40 \\
  /tmp/bcard_0.png -geometry +30+40 -composite \\
  /tmp/bcard_1.png -geometry +340+35 -composite \\
  /tmp/bcard_2.png -geometry +650+45 -composite \\
  /tmp/bcard_3.png -geometry +960+30 -composite \\
  /tmp/bcard_4.png -geometry +1250+40 -composite \\
  "${bannerPath}"`);

// Overwrite all legacy banner paths so existing references automatically show the new student works!
execSync(`cp "${bannerPath}" "${oldBannerPath1}"`);
execSync(`cp "${bannerPath}" "${oldBannerPath2}"`);
if (fs.existsSync(path.dirname(srcAssetsBanner))) {
  execSync(`cp "${bannerPath}" "${srcAssetsBanner}"`);
}

console.log('All student works and banner created successfully!');
