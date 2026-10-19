# PERSONA TEST — Fernanda Espinosa
Week 10 · 19 October 2026 UTC

## Status and method
Independent fresh synthetic-user session, text-only walkthrough of actual HTML, CSS and JavaScript. No real participant, real user research, browser interaction or screen captures. The required screenshot-based persona test remains incomplete. This log must not be described as a completed screenshot test or empirical validation.

## Persona and task
Lucía, fictional adult aged 42 in Mexico considering a refrigerator. Comfortable with WhatsApp, cautious about unfamiliar apps and ambiguous terms. Wants to know whether it fits and what she will pay. Inferred from the brief's adult buyer and practical-questions context; age, communication habits and hesitation are hypothetical design assumptions.

Fresh-session instruction: Represent Lucía and read index.html, app.js, core.js and style.css. Walk landing, loaded example, generated note, review/export and clear/checklist sequentially. Narrate in Spanish; log confusions, rank worst issue and propose retest acceptance. Do not modify files. Explicitly state text-only limitation, with screenshots outstanding.

## Original reactions and findings
| State | Hypothetical persona reaction | Finding |
|---|---|---|
| Empty landing | “Me tranquiliza que no compren por mí. Pero veo muchos pasos; primero quiero ver cómo queda.” | Example loader offers a starting point. |
| Example | “¿La holgura es dos centímetros de cada lado o dos entre los dos? ¿Por qué ya está marcada la confirmación del modelo?” | Clarify total side clearance; never pre-check confirmation. |
| Generated note | “¿Por qué mi presupuesto ahora es una frase y no los doce mil? ¿Y cuánto pagaré finalmente?” | Numeric budget overwritten by assessment string; shipping ignored. |
| Review/export | “Dice Unknown varias veces. Entiendo que falta algo, pero quiero saber exactamente qué preguntar antes de guardar.” | Plain Spanish and next questions needed; print behavior unverified. |
| Clear/checklist | “Borrar sí me deja claro que el PDF sigue conmigo. Pero ‘salir’ suena a que me llevará a otra pantalla.” | Button did not navigate; rename it. |

## Worst issue fixed
Core returned {...d, fit, budget}, replacing numeric budget with an explanation. A buyer's original constraint became unreadable in the export. Renamed explanation to budgetResult and kept numeric budget; automated regression confirms 12000 remains 12000.

## Other fixes
Known shipping enters a partial subtotal; zero shipping and zero declared clearance accepted, blanks remain Unknown. Example model confirmation starts unchecked. Added “2 cm per side = 4 cm total” explanation, Spanish-first “Por confirmar (Unknown)”, explicit next clarification questions, and “Borrar este caso” instead of a promised exit. No total affordability or installation guarantee is added.

## Retest
Mechanical checks verify original budget 12000; price 11490 + shipping 800 = known subtotal 12290; zero vs missing shipping; blank required clearance prevents installation conclusion. Fresh independent text retest requested after repair. Browser captures, responsive interaction and print/PDF dialog must still be tested. A future real five-shopper comparison against the free checklist remains separate and unperformed.

## Screenshot test to finish
In a fresh chat, use the persona above and upload actual captures of: empty page, edited example, note with missing clearance, reviewed export, and cleared case. Ask for an out-loud attempt at the two-question task. Preserve full responses, fix the worst remaining confusion, retest and append evidence. A mockup is not a screenshot.
