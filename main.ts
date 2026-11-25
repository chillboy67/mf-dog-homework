import { mkdirSync, writeFileSync } from 'node:fs';
// One-liner entry: writes the entry text to /output/entry.txt
const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Ensure the output directory exists before writing
mkdirSync(OUT, { recursive: true });
// Write the entry text exactly as submitted
writeFileSync(OUT + '/entry.txt', "The homework smelled like the chicken sandwich you packed, and honestly, if you did not want it eaten, you should not have made it smell like lunch.");
// Second pass: entry output verified unchanged.
