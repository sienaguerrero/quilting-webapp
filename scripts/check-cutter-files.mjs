import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { SIZES, DEFAULT_SIZE } from '../src/cutters/geometry.js';

const filesDir = fileURLToPath(new URL('../src/cutters/files/', import.meta.url));
const folderFor = (size) => `stl-${size}mm`;

const list = (size) => {
  try {
    return readdirSync(filesDir + folderFor(size)).filter((f) => !f.startsWith('.')).sort();
  } catch {
    return null;
  }
};

const reference = list(DEFAULT_SIZE);
const errors = [];

if (!reference) {
  errors.push(`${folderFor(DEFAULT_SIZE)} is missing, so there is nothing to compare against`);
} else {
  for (const size of SIZES) {
    if (size === DEFAULT_SIZE) continue;
    const found = list(size);
    if (!found) {
      errors.push(`${folderFor(size)} is missing`);
      continue;
    }
    const missing = reference.filter((f) => !found.includes(f));
    const extra = found.filter((f) => !reference.includes(f));
    if (missing.length) errors.push(`${folderFor(size)} is missing ${missing.join(', ')}`);
    if (extra.length) errors.push(`${folderFor(size)} has files ${folderFor(DEFAULT_SIZE)} lacks: ${extra.join(', ')}`);
  }
}

if (errors.length) {
  console.error('Cutter STL folders do not match SIZES in src/cutters/geometry.js:');
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(`Cutter STL folders OK: ${SIZES.map(folderFor).join(', ')}`);
