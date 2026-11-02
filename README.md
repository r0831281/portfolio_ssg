# Jo-Qu — Independent software consultancy

This branch is the consultancy design alternative for Jo-Qu. It is not deployed. Compare it with the other redesign branches rather than merging the alternatives together.

## Stack and build

The Hugo site root is jo-qu.com. Use Hugo Extended 0.147.9 or newer (tested with 0.147.9); the vendored theme includes Sass assets. No npm installation is needed for this redesign's site shell.

    cd jo-qu.com
    hugo --minify
    hugo server

The default language remains English at /, with Dutch at /nl/. Dutch-first is a working review assumption for the local audience, not a confirmed request to change canonical/default routes.

## Check the output

From the repository root after building:

    python3 tests/check_site.py jo-qu.com/public

This checks generated Hugo HTML structure, language attributes, image alt attributes, local assets and internal anchor targets. See TESTING.md and the separate candidate handoff report for the browser checks already performed and their limitations.

## Edit the site

- jo-qu.com/data/consultancy.json: shared English/Dutch main-page copy.
- jo-qu.com/layouts/index.html: site-level homepage override. It works with the base template, not merely the vendored theme homepage.
- jo-qu.com/layouts/_default/baseof.html: page shell, metadata, header and footer; intentionally does not load legacy theme.js or duplicated fingerprint stylesheets.
- jo-qu.com/layouts/: other templates, partials and Markdown link render hook.
- jo-qu.com/static/css/consultancy.css: layout tokens, responsive rules and design direction.
- jo-qu.com/content/other-projects/: preserved historical project articles.
- jo-qu.com/static/: existing images, documents and standalone applications.

The theme at jo-qu.com/themes/hugo-blog-awesome is tracked as ordinary repository files, including local edits. It is not an active Git submodule despite the stale nested .gitmodules file. Do not run a submodule update or replace the theme as part of installing or reviewing this option.

## Functional boundaries

Contact preserves the original on-page Formspree POST action, field names and honeypot, with native browser validation and an explained email fallback. No valid enquiry is submitted during QA; Formspree delivery and provider success/error handling remain unverified. No fake success UI is implemented. Existing standalone tools and Cloudflare Pages Functions are preserved; the Disinfo tool's /api/analyze backend is not verified by a static Hugo build. If deployment happens later, keep its existing approved Cloudflare function/secrets configuration; no credentials should be committed.

No remote push, pull request, production deployment or main-branch change is included in this redesign. Follow the parent-coordinated code and QA review before requesting user review or publishing branches through approved GitHub access.

## More context

REDESIGN.md explains design choices and intentional behaviour changes. TESTING.md summarises validation. Existing project/CV content is owner-authored historical material and was not independently reverified. No new client endorsements, business metrics or team claims were added.

The vendored hugo-blog-awesome theme retains its original MIT license. This repository otherwise retains the original personal-use status.
