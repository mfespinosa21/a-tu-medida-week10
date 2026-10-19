# DEMO — Fernanda Espinosa
Record 3 minutes walking the actual live URL, then 30 seconds of reflection. This is a script, not a recorded MP4. Speak naturally; pause while clicking. Only use fictional data. The site is owner-private until the owner arranges evaluator access.

## 0:00–0:30 — Introduction, camera and landing
Hi, I’m Fernanda Espinosa. This is A tu medida, my Week 10 operator prototype. It helps a buyer organize two questions about one refrigerator listing before paying. It does not choose a product, recommend a seller, or buy anything. The goal is a clear purchase note that separates the buyer’s limits, source statements, and missing information.

## 0:30–1:05 — Load example and explain constraints
Click “Probar con un ejemplo”. Show model, questions, 12000 budget and 70 cm available width.
The example is fictional. The buyer chooses these two questions and sets their own limits. I enter twelve thousand pesos and seventy centimeters of available width. We do not connect accounts or ask for payment details. The form stays in this browser tab’s memory; it is not stored as a customer record.

## 1:05–1:40 — Source log and identity gate
Show source text, price 11490, width 68; keep ventilation blank. Scroll to model confirmation and mark it manually.
The source log preserves the supplied text and context. The prototype does not verify a live listing. Here, the required ventilation clearance is missing, so it must remain unknown. Before preparing the note, I must confirm that the source refers to the exact model. In a real case, I would stop here if that identity was uncertain. The AI draft is explicitly simulated.

## 1:40–2:15 — Prepare note and explain limits
Click “Preparar mi nota”. Show buyer data, source statement and comparisons.
The note preserves my original budget. The refrigerator is sixty-eight centimeters wide and the space is seventy, leaving a two-centimeter difference. That does not prove that installation is possible, because ventilation, height, depth and access still need checking. The published price is below my chosen limit, but the final cost and whether I can afford it are not established.

## 2:15–2:45 — Demonstrate edit and repaired calculation
Enter shipping 600; show review reset, regenerate and read subtotal 12090.
If I add six hundred pesos for delivery, the known subtotal becomes twelve thousand ninety pesos, which is ninety pesos above my limit. Other charges remain unconfirmed. This is one of the bugs I fixed: the first version ignored entered shipping and overwrote the budget with an explanation. The repaired version keeps the numbers separate, and all fourteen core tests pass.

## 2:45–3:00 — Export and autonomy
Mark review; click print and show save-as-PDF dialog, then cancel if needed. Point to clear and free checklist.
After reviewing, I can save the note as a PDF or clear the case. The free checklist remains available. I tested a synthetic persona in a fresh session using screen text; the required screenshot-based pass is still pending. This prototype does not prove reduced regret or demand.

## 3:00–3:30 — What changed my mind, camera on
What changed my mind was realizing that a clear interface can still create false confidence. A two-centimeter width difference looked useful, but without the manufacturer’s clearance it could not establish fit. My synthetic review also showed that changing a buyer’s budget field could undermine the entire note. I moved from a broad review service to a narrow, traceable note: preserve the buyer’s data, show what remains unknown, and leave the decision with the buyer. Human help and willingness to pay still need comparison against a free checklist.

## Submission checklist
Live URL; actual GitHub repository URL; recorded DEMO_FernandaEspinosa.mp4; PACKET_FernandaEspinosa.pdf; PERSONA_FernandaEspinosa.pdf with outstanding screenshot evidence completed; BUILDCHAT_FernandaEspinosa.pdf as full exported conversation. Current development-evidence PDF is not a full conversation export. Never rename this script as MP4 or present generated screens as an actual walkthrough.
