import { execSync } from 'child_process';
import fs from 'fs';

const f = 'public/Captura de pantalla 2026-06-21 171244.png';
const buf = fs.readFileSync(f);
const W = buf.readUInt32BE(16);
const H = buf.readUInt32BE(20);

// Bounding box for 12: [496, 526, 819, 746]
const ymin = 496, xmin = 526, ymax = 819, xmax = 746;
let bx = Math.round((xmin / 1000) * W);
let by = Math.round((ymin / 1000) * H);
let bw = Math.round(((xmax - xmin) / 1000) * W);
let bh = Math.round(((ymax - ymin) / 1000) * H);
const padx = Math.round(bw * 0.15);
const pady = Math.round(bh * 0.15);
bx = Math.max(0, bx - padx);
by = Math.max(0, by - pady);
bw = Math.min(W - bx, bw + padx * 2);
bh = Math.min(H - by, bh + pady * 2);

console.log('Region:', bx, by, bw, bh);

// 1. Soft Frosted Gaussian Blur
execSync(`convert "${f}" -crop ${bw}x${bh}+${bx}+${by} -blur 0x24 /tmp/face_blurred.png`);
// Create soft feathered elliptical mask
execSync(`convert -size ${bw}x${bh} xc:black -fill white -draw "ellipse ${bw/2},${bh/2} ${bw*0.48},${bh*0.48} 0,360" -blur 0x8 /tmp/face_mask.png`);
// Composite back
execSync(`convert "${f}" \\( /tmp/face_blurred.png /tmp/face_mask.png -alpha off -compose CopyOpacity -composite \\) -geometry +${bx}+${by} -composite /tmp/test_frosted.png`);

// 2. Pixelated version
execSync(`convert "${f}" -crop ${bw}x${bh}+${bx}+${by} -scale 8% -scale ${bw}x${bh}! /tmp/face_pix.png`);
execSync(`convert "${f}" \\( /tmp/face_pix.png /tmp/face_mask.png -alpha off -compose CopyOpacity -composite \\) -geometry +${bx}+${by} -composite /tmp/test_pixelated.png`);

console.log('Done generating test_frosted.png and test_pixelated.png');
