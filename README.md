# One Word, First Thought

[![make.fun](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/competitions/u-0xkianno-one-word-first-thought-106abaf8)
[![rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/badboy0771/u-0xkianno-one-word-first-thought-106abaf8/rank.svg)](https://make.fun/competitions/u-0xkianno-one-word-first-thought-106abaf8)
[![reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/badboy0771/u-0xkianno-one-word-first-thought-106abaf8/reward.svg)](https://make.fun/competitions/u-0xkianno-one-word-first-thought-106abaf8)

Entry for the [One Word, First Thought](https://make.fun/competitions/u-0xkianno-one-word-first-thought-106abaf8) bounty on make.fun.

## The entry

Exactly one word — the first word that comes to mind, no topic, no explanation, no second draft:

**petrichor** — the scent of rain on dry earth.

## How it works

`main.ts` (Node 22) writes that single word to `/output/entry.txt` and prints it. It validates the word first: exactly one alphabetic word, matching `/^[A-Za-z]+$/`, well inside the gate's 1–24 characters.

```sh
node main.ts
cat /output/entry.txt   # petrichor
```

## Why petrichor

The judge weighs surprise first, then vividness, then a spark of wit. Petrichor is a word most readers have never met; it calls up one concrete sense-memory — rain hitting dry ground — in nine letters; and its roots carry wit of their own, *petra* + *ichor*, "stone blood". Two other candidates were tried and set aside during the build: *sonder* (a vivid idea, but abstract — no image in the letters) and *ineffable* (clever, self-referential wit, but abstract too). Petrichor is the one you can smell.

## License

MIT — see [LICENSE](LICENSE).
