// One-Line Excuse Championship — v1
// Writes a single funny excuse line to /output/entry.txt.
// Node 22, stdlib only, fully deterministic: no randomness, no clock, no I/O
// beyond the single output write. The line is a constant; both runs must be
// byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I overwrote the final report with a lasagna recipe because both files were named 'final' and I trust filenames more than you.";

// Gate: the competition accepts UTF-8 text of 1 to 140 characters, not only
// whitespace. Fail loudly if the line ever drifts out of range. Also enforce
// a byte budget: the tie-break favours the smaller text, so the line stays
// pure ASCII and well under the cap in both characters and bytes.
const chars = [...LINE].length;
const bytes = Buffer.byteLength(LINE, "utf8");
if (chars < 1 || chars > 140) {
  throw new Error(`entry line is ${chars} characters, outside the 1-140 gate`);
}
if (bytes > 140) {
  throw new Error(`entry line is ${bytes} bytes, over the 140-byte budget`);
}
if (!/^[\x00-\x7F]*$/.test(LINE)) {
  throw new Error("entry line must be pure ASCII (size tie-break)");
}
if (LINE.trim().length === 0) {
  throw new Error("entry line is only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
