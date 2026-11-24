// Fortune Cookie Wisdom for Developers — make.fun entry.
// Writes one line (at most 120 characters) to /output/entry.txt: a
// fortune-cookie line for a software developer. The bug you cannot
// reproduce is not hiding from you. It is waiting for the demo.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "The bug you cannot reproduce is not hiding from you. It is waiting for the demo.";

// Gate guard: the entry must be 1–120 characters and not only whitespace.
if (entry.length < 1 || entry.length > 120 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-120`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
