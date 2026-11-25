// The Meeting That Should Have Been an Email
// Entry program for make.fun competition
// u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9
//
// Writes a single one-line joke about a meeting that should have
// been an email to /output/entry.txt. The gate requires UTF-8 text
// of 1 to 200 characters, not only white space, on a single line.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Nine people, one unmuted mic, zero decisions \u2014 the email would have been three sentences and a shrug.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function checkGate(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} characters, gate needs 1-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  const text = ENTRY.trim();
  checkGate(text);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
  console.log(`wrote ${text.length} characters to ${OUTPUT_PATH}`);
}

main();
