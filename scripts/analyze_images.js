import fs from 'fs';
import { execSync } from 'child_process';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI();

const files = [
  'Captura de pantalla 2025-08-29 114331.png',
  'Captura de pantalla 2025-10-12 185341.png',
  'Captura de pantalla 2025-10-12 220642.png',
  'Captura de pantalla 2025-10-19 174637.png',
  'Captura de pantalla 2026-05-07 114651.png',
  'Captura de pantalla 2026-05-12 133052.png',
  'Captura de pantalla 2026-05-27 104941.png',
  'Captura de pantalla 2026-05-27 111427.png',
  'Captura de pantalla 2026-06-01 215625.png',
  'Captura de pantalla 2026-06-07 202728.png',
  'Captura de pantalla 2026-06-16 220318.png',
  'Captura de pantalla 2026-06-21 170102.png',
  'Captura de pantalla 2026-06-21 171244.png',
  'Captura de pantalla 2026-08-24 210450.png'
];

async function run() {
  const parts = [];
  parts.push({
    text: `You are an image processing assistant for an art studio website.
We have 14 student work screenshots from online art classes and workshops.
For each image (labeled image_0 through image_13):
1. Give a nice short title in Spanish (e.g. "Acuarela Botánica", "Cómic de Superhéroes", "Cuento Ilustrado", "Escultura de Papel", etc.)
2. Give a brief Spanish description (1 sentence) describing the student's artwork and technique.
3. Detect ANY human faces (children or adult teacher). For each face found:
   - type: "child" | "adult"
   - box_2d: [ymin, xmin, ymax, xmax] on a 0-1000 scale.
Be very precise and thorough with child faces because the user requested: "pixela las caras de los niños o tápalas sin que quede desarmónico".

Respond ONLY with a JSON array:
[
  {
    "index": 0,
    "filename": "...",
    "title": "...",
    "description": "...",
    "has_child_face": true/false,
    "faces": [
      { "type": "child", "box_2d": [ymin, xmin, ymax, xmax] }
    ]
  }
]`
  });

  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    execSync(`convert "public/${f}" -resize "640x" "/tmp/thumb_${i}.jpg"`);
    const data = fs.readFileSync(`/tmp/thumb_${i}.jpg`);
    parts.push({ text: `Label: image_${i} (original filename: ${f})` });
    parts.push({
      inlineData: {
        mimeType: 'image/jpeg',
        data: data.toString('base64')
      }
    });
  }

  console.log('Sending request to gemini-3.5-flash...');
  const res = await ai.models.generateContent({
    model: 'gemini-3.5-flash',
    contents: parts
  });

  let jsonText = res.text.trim();
  if (jsonText.startsWith('```json')) {
    jsonText = jsonText.replace(/^```json\s*/, '').replace(/```$/, '').trim();
  } else if (jsonText.startsWith('```')) {
    jsonText = jsonText.replace(/^```\s*/, '').replace(/```$/, '').trim();
  }

  fs.writeFileSync('student_analysis.json', jsonText);
  console.log('Success! Saved to student_analysis.json');
}

run().catch(console.error);
