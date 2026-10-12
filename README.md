# Pandora-AI · StudyMate

A source-grounded, adaptive study companion built for **Multimodal AI Hackathon 2026, Track D: Personalized Tutoring & Adaptive Learning** (brief: [`Track D.pdf`](Track%20D.pdf)).

StudyMate turns lecture transcripts, textbook pages and slides into a cited knowledge base, answers questions only from that material, quizzes the student adaptively, and tracks per-topic mastery.

## Run it

No build step or server. Open the file in a browser:

```
StudyMate – Source-Grounded Adaptive Study Companion.html
```

1. **Library** → click *Load sample course* (a small ML course), or upload your own `.txt/.md/.vtt/.srt` files.
2. **Tutor** → ask a question. Try "What is gradient descent?" and then "How do I bake sourdough?" (it should refuse).
3. **Assess** → run the *Diagnostic* quiz, then regular quizzes.
4. **Dashboard** → mastery per topic, course flow map, weak topics, study schedule.
5. **Evaluate** → retrieval/generation metrics and simulated-student runs.

State (sources + learner model) is saved in the browser's `localStorage`.

## Input format

Sources must already be converted to text. Markers define the source location of each unit:

| Marker | Meaning |
|---|---|
| `## Topic > Prereq1, Prereq2` | Declares a topic and its prerequisites |
| `[p.12]`, `[slide 4]`, `[00:12:30]` | Page / slide / video timestamp for the text that follows |
| `.vtt` / `.srt` cues | Timestamps taken automatically, grouped 4 cues per unit |
| `Figure: …` | Indexes a diagram caption as searchable text |
| `Q: … \| A: 7` | Adds a numerical problem with its answer key |

Text without headings goes into a `General` topic.

## What works today vs. the Track D brief

| Requirement | Status |
|---|---|
| Source-linked knowledge base (topics, prerequisites, page/slide/timestamp) | Done for pre-converted text |
| Ingest video, PDF, slides **without manual preprocessing** | **Partial**: `.pdf` (per-page) and `.pptx` (per-slide) upload directly; video still needs a `.vtt`/`.srt` transcript; scanned PDFs (no text layer) are rejected with a warning |
| Extract information from images/diagrams | **Partial**: PPTX picture alt-text and hand-written `Figure:` captions are indexed; pixels are not analysed |
| Cited answers that open the exact source | Done (click a 🔗 chip to see the highlighted excerpt) |
| Decline off-material queries | Done (coverage threshold on key-term overlap) |
| MCQ / short answer / numerical quizzes with topic, source, difficulty tags | Done; MCQ and short answer are fill-in-the-blank only |
| Answer verification / cross-model validation | **Partial**: self-check that the answer appears in the source sentence; no second model |
| No repeated questions | Done (`asked` list) |
| Cited feedback, post-quiz report, misconceptions | Done (heuristic misconceptions) |
| Learner model + diagnostic for new students | Done (Bayesian knowledge tracing per topic) |
| Evaluation with RAGAS / DeepEval / TruLens | **Not done**: built-in lightweight proxies only |
| Simulated students (mastery gain, repetition rate) | Done (3 synthetic profiles vs. random baseline) |
| Course flow map, study schedule | Done |
| Hindi / Indian-language support, audio tutoring, revision material | Not done |
| Documentation | This README + [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) |
| Demo video | Not done |

## Docs

- [Architecture, grounding method and learner model](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
