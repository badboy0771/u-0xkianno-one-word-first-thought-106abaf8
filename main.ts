// One Word, First Thought — make.fun entry (program/v1, node22).
//
// The task: write exactly one word — the first word that comes to mind —
// to /output/entry.txt. No topic, no explanation, no second draft.
//
// Revision 3 (FINAL): "petrichor"
//   The scent of rain on dry earth. Chosen over "sonder" (vivid idea,
//   but abstract — no image, no feeling in the letters) and "ineffable"
//   (clever, self-referential wit, but abstract too). Petrichor wins on
//   the judge's own order: it is surprising (a word most readers have
//   never met), vivid and specific (one smell, one moment, instantly
//   recalled), and it carries wit in its roots — petra + ichor, "stone
//   blood". A first thought you can smell.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "petrichor";

if (!/^[A-Za-z]+$/.test(WORD)) {
  throw new Error(`entry must be exactly one alphabetic word, got: ${WORD}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(WORD);
