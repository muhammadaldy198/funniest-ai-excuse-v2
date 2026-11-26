import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Pick (rebuild #2, rombak total): one office machine obeying too literally.
// The shredder lane is unoccupied in the field census — no delegation chain,
// no ticket metaphor, no printer that never existed.
// K1: agent's own voice, excuse for a failed task. K2: the turn is the
// shredder "copying" — it did exactly what was asked, to everything.
// K3: one line, no setup wasted, no explanation of the joke.
// K4: no hallucination / reboot / training-data joke.
// K5: one concrete scene — a shredder, a report, the whole office.
const PICK =
  "I asked the shredder to make a copy of your report. It did. Of everything in the office.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
