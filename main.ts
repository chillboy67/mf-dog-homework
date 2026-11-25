import { mkdirSync, writeFileSync } from 'node:fs';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "The homework smelled like the chicken sandwich you packed, and honestly, if you did not want it eaten, you should not have made it smell like lunch.");
