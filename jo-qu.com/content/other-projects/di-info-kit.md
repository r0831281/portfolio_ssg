+++
title = "Disinfo Defense Kit"
type = "fun"
date = "2025-08-19"
draft = false
description = "Interactive toolkit to recognize and counter common disinformation and bad-faith debate tactics."
+++

# Disinfo Defense Kit

An interactive, educational toolkit that catalogues common bad‑faith debate and disinformation tactics (e.g. Gish Gallop, Straw Man, Tone Policing) and shows practical, concise counter‑responses. Built as a single self‑contained HTML experience with a clean, accessible design and responsive layout.

## Highlights
- 10+ categorized tactics with clear names, plain‑language explanations, and realistic examples
- Color‑coded callouts that differentiate tactic description, example usage, and recommended response
- Mobile friendly typography and layout (fluid container, large tap targets)
- Lightweight: pure HTML/CSS/JS—no external build tooling beyond a Google Font import
- Reusable design tokens via CSS custom properties for fast theming

## Purpose
The kit helps learners, moderators, and discussion facilitators quickly identify derailment patterns and keep conversations productive. Rather than encouraging confrontation, it promotes confident, minimal, good‑faith replies that redirect to substance.

## Implementation Notes
- Semantic HTML sections for accessibility
- Custom CSS variables (color, spacing, shadows, radii) ensure visual consistency
- Responsive breakpoints for headings and spacing on narrow screens
- Progressive enhancement: fully readable with CSS disabled

## Try It
[Open the interactive kit](/files/Di-info-kit.html)

<iframe src="/files/Di-info-kit.html" title="Disinfo Defense Kit" style="width:100%;height:1400px;border:1px solid #e2e8f0;border-radius:8px;margin-top:1rem;"></iframe>

## Future Ideas
- Search/filter tactics
- Dark mode toggle
- Printable / PDF export
- Localization (initial Dutch version published below in separate page)

---
**Note:** The embedded frame above loads the static HTML from `static/files/Di-info-kit.html`. If it doesn't display correctly in some environments, use the direct link instead.
