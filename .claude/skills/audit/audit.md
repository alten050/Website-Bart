---
name: audit
description: >
  Volledige site-audit voor de Smits & Wouters website. Gebruik na implementatie of voor een release.
  Combineert visuele QA (screenshots), code review, toegankelijkheid, i18n-volledigheid, security en
  performance in één rapport. Trigger bij termen als 'audit', 'check', 'test', 'review', 'klopt dit',
  'is alles goed', 'controleer de site', 'qa', 'kwaliteitscheck' of 'voor ik push'.
---

# Site Audit

Voer altijd alle stappen uit in volgorde. Sla geen stap over. Geef aan het einde een gestructureerd
eindrapport met status per pagina en per categorie.

---

## Stap 1: Screenshots

Server moet draaien op `http://localhost:3000`. Start indien nodig:
```bash
node serve.mjs
```

Maak screenshots via Playwright Python (node is beschikbaar als
`/Users/richardaltena/.venv/lib/python3.13/site-packages/playwright/driver/node`):

```python
source "/Users/richardaltena/.venv/bin/activate" && python3 - <<'EOF'
from playwright.sync_api import sync_playwright
import os

base = "/Users/richardaltena/Projects/Website Bart/temporary screenshots"
pages = [
    ("http://localhost:3000", "index"),
    ("http://localhost:3000/about.html", "about"),
    ("http://localhost:3000/services.html", "services"),
    ("http://localhost:3000/projects.html", "projects"),
    ("http://localhost:3000/contact.html", "contact"),
    ("http://localhost:3000/privacy.html", "privacy"),
    ("http://localhost:3000/404.html", "404page"),
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    for url, label in pages:
        page.goto(url, wait_until="networkidle")
        page.wait_for_timeout(600)
        path = os.path.join(base, f"screenshot-{label}.png")
        page.screenshot(path=path, full_page=True)
        print(f"  ✓ {label}")
    browser.close()
EOF
```

Lees elke screenshot met de Read tool en beoordeel visueel.

---

## Stap 2: Visuele checklist (per pagina)

- Header correct: logo + navigatie uitlijning
- Actief nav-item gemarkeerd
- Hero volledig zichtbaar, geen layout-breuk
- Taalswitch (EN/NL/ES/TR) zichtbaar in desktop-header
- Footer volledig: 3 kolommen (logo, navigatie, adres)
- Geen gebroken afbeeldingen (alt-tekst zichtbaar = broken)
- Geen overlappende elementen
- Scroll-progress bar zichtbaar bovenaan

---

## Stap 3: Code review

Controleer met Grep en Read op:

### Functionaliteit
- Formspree endpoint ingevuld (niet `YOUR_FORM_ID`)?
- Alle links verwijzen naar bestaande pagina's?

### Toegankelijkheid (WCAG)
- `aria-expanded` op hamburger en FAQ-toggles?
- `aria-label` op knoppen zonder zichtbare tekst?
- Geen `outline-none` op focusbare elementen?
- Afbeeldingen met ontbrekende `alt` (niet-decoratief)?

### i18n volledigheid
- Alle tekstelementen hebben `data-i18n` of `data-i18n-html`?
- Keys aanwezig in `js/i18n.js` voor EN, NL, ES en TR?

### Code kwaliteit
- Geen `transition-all` gebruik?
- Geen hardcoded kleuren buiten het brand-palet (#0A1628 t/m #F0F6FC)?
- Geen API keys of secrets zichtbaar?

### Performance
- Scripts laden met `defer`?
- Afbeeldingen met `loading="lazy"` buiten viewport?

---

## Stap 4: Eindrapport

### Samenvatting
| Categorie | Score | Oordeel |
|-----------|-------|---------|
| Visueel | X/7 pagina's | ✅/⚠️/❌ |
| Toegankelijkheid | X/10 | ✅/⚠️/❌ |
| i18n | X/10 | ✅/⚠️/❌ |
| Code kwaliteit | X/10 | ✅/⚠️/❌ |
| Performance | X/10 | ✅/⚠️/❌ |

### Per pagina (visueel)
- **Status**: PASS / FAIL / WAARSCHUWING
- **Bevindingen**: specifiek (bijv. "footer mist derde kolom op mobile")
- **Actie**: concreet wat te doen

### Kritieke issues (bugs, broken functionaliteit)
1. ...

### Waarschuwingen (a11y, i18n, performance)
1. ...

### Prioriteit actielijst
Hoogste impact eerst:
1. ...
