# Validation — advisory

Current candidate includes the restored original on-page Formspree form in both languages. Email is a fallback, not a replacement. The earlier mailto-only choice was a capability regression and has been corrected before final review.

## Build and structure

- Hugo Extended 0.147.9 minified builds pass. The site root is jo-qu.com.
- python3 tests/check_site.py jo-qu.com/public checks 37 generated Hugo HTML files. It verifies one H1/main, EN/NL language, image alt attributes, local files/fragments, same-tab internal/mail links, safe external new-tab rel, footer locale, intended approach layout and contact form contract.
- Form action https://formspree.io/f/mzzjknzr, POST method, required name/email/message fields, six-row message and text _gotcha honeypot are preserved from original main. Explicit labels/IDs, autocomplete and keyboard exclusion of the hidden honeypot are accessibility additions, not endpoint/recipient changes. No hidden routing config is added.
- git diff --check and existing Cloudflare JavaScript syntax checks pass. Original static/files and functions content remains unchanged.

## Actual browser checks

Chrome/156.0.8078.73, measured 320×844, 390×844, 768×1000 and 1440×1000 CSS pixels, DPR1. These are headless desktop-Chromium viewports, not physical mobile or Safari/Firefox tests.

- 48 core route/viewport checks and40 historical project layout checks per option. No document overflow, broken loaded core images, missing image alt, duplicate H1/main or core page JavaScript exceptions.
- Exact approved Dutch hero/label/CTA copy and exact supplied service descriptions in English/Dutch are asserted as rendered text. Shared bilingual data is byte-identical across options.
- 16 real approach/body and footer contact clicks per option preserve EN/NL locale across all measured widths. Skip/focus, reduced motion and primary navigation checks pass.
- Eight contact validation cases per option: EN/NL at all four widths. Empty submit and malformed-email submit are activated only while invalid; native validation blocks both. A valid form state is inspected with checkValidity but NEVER submitted. Explicit label association, field types/required state, exact form data names, hidden honeypot, keyboard order and visible focus outlines are checked. Every submit-event count is zero; no enquiry request is triggered.
- The request interceptor aborts Formspree and /api/analyze as a safety guard, not a mocked backend response. Final runs encounter zero such requests. No paid API or real enquiry is sent.
- Contact screenshots include both languages at320/390/1440; desktop/mobile form composition is visually inspected.
- Targeted core text/background contrast pairs exceed4.5:1. Input borders use the contrast-tested secondary-text token; labels and focus indicators are visible. This is not a WCAG compliance certification.

## Regressions corrected

The approach-page Section heuristic was replaced by an explicit content flag after a content-specific test exposed incorrect layout selection. Dutch body/footer CTA retention is tested. Markdown internal/mail links stay in the current tab; external HTTP(S) new-tab links have noopener noreferrer. New shell does not load legacy theme scripts or hardcoded duplicate CSS. README accurately describes tracked theme files, not an active submodule.

## Not verified

Formspree delivery, account/recipient configuration, provider success/error screens, spam filtering, actual email delivery, live /api/analyze functionality, remote branch/Cloudflare previews, deployment, external link availability, Safari/Firefox, assistive technology and field performance. Existing CV/historical project claims are not independently revalidated. No fake success state is implemented. No authenticated writes, pushes, PRs, merge or production deployment have occurred; main is untouched. Independent final delta/QA acceptance remains pending.

Current full results, exact clean candidate commits, source patches and separately saved frozen built sites are provided in the handoff.

## Final Business Assistant delta

Audit confirms the current shared data already uses the exact label Bestaande websoftware verbeteren and exact description Laat je systemen samenwerken en beperk terugkerend handmatig werk. The new static regression check requires both on Dutch home/services output and rejects the two superseded phrases throughout generated Dutch pages. The current harness asserts one restored contact form, not zero, and runs explicit labels/required/email-type/invalid-focus/keyboard/focus-outline/request-safety checks.

Advisory now omits the hero portrait. It retains one homepage portrait only in the personal introduction after services, using a distinct editorial headline/copy split rather than the other options’ service-map hero. Browser assertions verify zero hero images, exactly one homepage portrait and services before that portrait at every tested viewport.
