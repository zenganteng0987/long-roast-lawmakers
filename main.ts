// The Long Roast: Lawmakers and the File They Cannot Convert
// Writes a single satirical sentence to /output/entry.txt.
// Deterministic: no network, no randomness, no input.
// The sentence sets up the lawmaker's authority (drafted the AI bill),
// then undercuts it with the one file he cannot convert, landing the
// punch on the last few words: the Export button.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The congressman who drafted the bill to govern artificial intelligence emailed his staff a Word file titled FINAL_final_v3 asking them to 'turn it into a PDF for me,' because apparently the only technology he refuses to regulate is the Export button.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
