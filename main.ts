import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "feat: ship to prod, tests passed in my head and it's Friday \u2014 what could go wrong?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
