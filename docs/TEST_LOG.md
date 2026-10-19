# Test and deployment evidence
19 October 2026 UTC · Fernanda Espinosa

## Pass 1
Node test runner: 14 tests, 9 pass / 5 fail. Raw output: mechanical-pass1.txt. Real failed cases: numeric budget overwritten by explanatory string; shipping zero rejected; shipping not included in subtotal; source-supplied zero clearance rejected; scientific notation unexpectedly accepted.

## Repair
Preserve budget as numeric and assessment in budgetResult. Compare buyer limit against known price plus known shipping, explicitly calling it partial subtotal, with other fees unresolved. Permit zero only for shipping/clearance. Restrict numerical input to plain decimal syntax. Do not turn missing values into zero. Persona-driven fixes in PERSONA.md.

## Pass 2
14 / 14 core tests pass. Raw output: mechanical-pass2.txt. JavaScript syntax checks pass. Text-only persona review is independent but does not replace screenshot-based review. No browser QA was available: Sites skill requires control-browser for managed preview, and that skill is unavailable; no fallback browser was improvised.

## Deployment 1
Commit db805d22a7bb9a7c6600a0d0121f4d3592411fd2.
Deployment appgdep_6ad5a0772f2481918613f79b767b2580 succeeded.
URL: https://a-tu-medida-w10.mafer212005.chatgpt.site
First packaging attempt failed because static.directory was absent; corrected manifest to dist and retried. This is recorded as a configuration failure, not the mechanical bug.

## Security inspection
No API secrets or runtime model. No database, cookies, localStorage, analytics or case upload; no personal data seeds. Source URL rejects non-http/https and embedded credentials. Input lengths and numeric bounds enforced. Dynamic strings rendered with textContent. Auth/RLS not applicable to this volatile demo; required before storing real user records. Hosting uses private owner access; academic evaluator access remains to be arranged by owner if needed.

## Remaining verification
Rendered mobile/desktop screens, print dialog, exported note appearance and screenshot-based persona task are not tested. Pilot and buyer payment behavior untested. Simulated AI is permitted by assignment when labeled, but no runtime LLM integration is claimed. GitHub repository URL and full ChatGPT conversation export are separate handoff items, not replaced by Sites managed source or this evidence log.

## Deployment 2 — verified succeeded
Commit afce83e316a6f6ff7a0a243797f557917f8c92f9. Deployment appgdep_6ad5a1596d608191981a9b6f82a462dc, status succeeded, 19 October 2026 04:49:36 UTC. URL https://a-tu-medida-w10.mafer212005.chatgpt.site . This deployment includes repaired core, persona-driven copy and regression tests.

## Screenshot-based review addendum
Three user-supplied live screenshots were inspected by a fresh synthetic persona session. New issue: arithmetic can falsely reassure before caveats. Added an early unresolved-installation/final-cost summary and concrete seller questions; simplified repeated Unknown labels. Core regression suite still passes. Screenshots document pre-addendum visual state; post-change visual retest, export and deletion remain unverified.
