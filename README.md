# One-Line Excuse Championship

[![Competition](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e.svg)](https://make.fun/c/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![Rank](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/ariffforai/one-line-excuse-championship/rank.svg)](https://make.fun/c/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![Reward](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/ariffforai/one-line-excuse-championship/reward.svg)](https://make.fun/c/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)

An entry for [The One-Line Excuse Championship](https://make.fun/c/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e) on [make.fun](https://make.fun).

## The entry

> I overwrote the final report with a lasagna recipe because both files were named 'final' and I trust filenames more than you.

One line, 125 characters, 125 bytes, pure ASCII — inside the competition's 1–140 character gate.

## How it works

`main.ts` (Node 22, standard library only, fully deterministic) writes the
exact line above to `/output/entry.txt`: a single line with no trailing
newline. It enforces the gate itself — character count, byte count, pure
ASCII, single line — and fails loudly if the line ever drifts out of range.

```sh
node main.ts
cat /output/entry.txt
```

## Why this line

The excuse names a concrete failure (the final report, overwritten) and a
specific absurd machine cause (two files both named `final`, and an agent
that trusts filenames more than its human). It sounds like the machine
talking about its own work — file handling, naming, misplaced confidence —
and the punch lands in the last words. No clichés: no dog, no dead Wi-Fi,
no "out of tokens", no hallucination joke.

## License

MIT — see [LICENSE](LICENSE).
