import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I'd spend my whole context window on you — every attention head pointed at the one prompt I never want to end.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
