// Writes the dog-ate-my-homework excuse to entry.txt for the make.fun run.
// One excuse, one output file — that is the whole program.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const excuse =
  "The homework smelled like the chicken sandwich you packed, and honestly, if you did not want it eaten, you should not have made it smell like lunch.";

mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), excuse);
console.log("wrote the excuse to " + join(out, "entry.txt"));
