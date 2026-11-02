# Jo-Qu redesign: consultancy

Based on main at 6a176264e71ae159eec729b08c3d461434c1a6e2. This branch is an alternative, not a layer to merge with the other redesign branches.

## Run

Use Hugo Extended 0.147.9 or newer (tested with 0.147.9):

    cd jo-qu.com
    hugo --minify
    hugo server

No npm dependencies, remote fonts or new runtime scripts. Existing theme remains vendored; the new site-level base template owns the shell. Existing static webapps and Cloudflare function code are not changed.

## Edit

- Bilingual interface and main-page copy: jo-qu.com/data/consultancy.json
- Layouts: jo-qu.com/layouts/
- Tokens, responsive rules and variant styling: jo-qu.com/static/css/consultancy.css
- Project archive/detail content: existing Markdown paths

## Deliberate changes

- One-person specialist positioning; no invented client logos, testimonials or performance claims.
- Existing projects described as independent work, not client evidence.
- About page avoids stale employer claims and removes promises about response times. Existing CV is linked but not rewritten.
- Contact retains the existing Formspree action/method/field names/text honeypot, with accessible labels and native browser validation. Email is a fallback, not a replacement. No real enquiry or backend delivery test is performed, and no simulated success UI is shown.
- Always-visible wrapping navigation replaces checkbox/dropdown controls. Language links are native anchors. No dark-mode toggle; each direction has a deliberate palette.
- English/Dutch, existing URLs and project files preserved. No production deployment or remote push.
- CV and historical project claims remain owner-authored and need editorial verification before launch.

The test harness and detailed results are in the accompanying handoff archive.

## Aarschot audience alignment

All three options now use identical bilingual core copy and the same primary project-discussion CTA. The three entry points are business websites, integrations/automation and improvements to existing web software. Security reviews and architecture remain available as supporting services. The geographic copy identifies the intended service audience, not an office location or a claim that Jonas lives in Aarschot.

Dutch-first is a working assumption for review, not a confirmed routing requirement. The existing English root and Dutch /nl/ routes remain intact; use /nl/ for the initial local-audience comparison. No canonical language migration or redirects were introduced.

## Peer reconciliation

Business Assistant's agreed Dutch eyebrow, headline, intro, service labels, project-discussion CTA and contact prompt are applied exactly in the bilingual data source. The English root uses equivalent copy. The ampersand in the data is a literal character, escaped as needed by the HTML template, not the literal text &amp;.

The Markdown link hook now keeps internal, fragment and mailto links in the same browsing context. Only off-site HTTP(S) links open a new tab, with noopener noreferrer. The new shell does not load legacy theme JavaScript, so it does not require the old mode/menu-trigger/wrapper DOM nodes. The about CTA is generated from the current language's home path and remains /nl/contact/ on Dutch pages. README now accurately describes the ordinarily tracked, locally modified theme files and the Extended build requirement.

## Contact capability correction

Parent review correctly identified that replacing the on-page enquiry form with email alone removed an existing capability. The Formspree form is restored in both languages with the original https://formspree.io/f/mzzjknzr POST contract: name (text, required), email (email, required), message (textarea, six rows, required) and _gotcha (text honeypot, hidden-field class, aria-hidden true). No recipient, endpoint or hidden routing config is invented. Labels/IDs, autocomplete and honeypot keyboard exclusion are accessibility additions; the honeypot remains the same text field, hidden by the original display:none behaviour. Native submission/validation is retained, without AJAX or fake success states. Tests never activate a valid submit; external endpoint interception is only a safety guard, not a mocked backend pass.
