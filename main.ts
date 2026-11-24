import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "feat: ship to prod, tests passed in my head and it's Friday \u2014 what could go wrong?";

const MAX_LENGTH = 159;
const lineLength = [...LINE].length;
if (lineLength < 1 || lineLength > MAX_LENGTH) {
  console.error(`entry length ${lineLength} code points is outside the gate 1..${MAX_LENGTH}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
