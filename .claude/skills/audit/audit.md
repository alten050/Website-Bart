---
name: audit
description: >
  Volledige site-audit voor de Smits & Wouters website. Gebruik na implementatie of voor een release.
  Combineert visuele QA (screenshots), SEO, security, toegankelijkheid, i18n-volledigheid en performance
  in één rapport. Trigger bij termen als 'audit', 'check', 'test', 'review', 'klopt dit',
  'is alles goed', 'controleer de site', 'qa', 'kwaliteitscheck', 'seo', 'security' of 'voor ik push'.
---

# Site Audit

Voer altijd alle stappen uit in volgorde. Sla geen stap over. Geef aan het einde een gestructureerd
eindrapport met status per categorie.

---

## Stap 1: Screenshots

Server moet draaien op `http://localhost:3000`. Start indien nodig via Bash:
```bash
source "/Users/richardaltena/.venv/bin/activate" && python3 - <<'EOF'
from playwright.sync_api import sync_playwright
import os

base = "/Users/richardaltena/Projects/Website Bart/temporary screenshots"
pages = [
    ("http://localhost:3000", "index"),
    ("http://localhost:3000/about.html", "about"),
    ("http://localhost:3000/services.html", "services"),
    ("http://localhost:3000/projects.html", "projects"),
    ("http://localhost:3000/opportunities.html", "opportunities"),
    ("http://localhost:3000/mandate.html", "mandate"),
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

## Stap 3: SEO-check

Analyseer de HTML van elke pagina op:

### Meta-tags
- `<title>` aanwezig? Lengte 30–60 tekens?
- `<meta name="description">` aanwezig? Lengte 120–155 tekens?
- `<link rel="canonical">` aanwezig?
- `<html lang="...">` ingesteld?
- `hreflang` voor EN/NL/ES/TR + x-default?

### Open Graph & Social
- `og:title`, `og:description`, `og:image`, `og:url` aanwezig?
- `twitter:card` aanwezig?

### Structuur
- Precies één `<h1>` per pagina?
- Logische heading-hiërarchie (h1 → h2 → h3)?
- Semantische elementen: `<main>`, `<nav>`, `<footer>`, `<header>`?
- Alle niet-decoratieve afbeeldingen hebben beschrijvend `alt`-attribuut?

### Structured data
- JSON-LD aanwezig op relevante pagina's?
- Correct `@type` (Organization, RealEstateAgent, FAQPage)?

### Technische SEO
- `robots.txt` aanwezig en correct?
- `sitemap.xml` bevat alle pagina's inclusief opportunities.html en mandate.html?
- `llms.txt` aanwezig?
- GPTBot, PerplexityBot, ClaudeBot toegestaan in robots.txt?

### Performance (SEO-impact)
- Scripts laden met `defer` of `async`?
- Afbeeldingen met `loading="lazy"` buiten viewport?
- Moderne afbeeldingsformaten (.webp) gebruikt waar mogelijk?

---

## Stap 4: Security-check

Haal HTTP-headers op via:
```bash
curl -sI http://localhost:3000 | head -30
```

Controleer aanwezigheid van:
| Header | Verwacht |
|--------|----------|
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Content-Security-Policy` | aanwezig |
| `Referrer-Policy` | aanwezig |
| `Permissions-Policy` | aanwezig |

Controleer ook in de broncode:
- Geen API keys of Formspree IDs als `YOUR_FORM_ID` (placeholder)?
- Geen wachtwoorden of secrets in HTML/JS?
- Formulieren gebruiken honeypot-veld?
- Formulieren hebben `maxlength` op alle velden?
- `novalidate` + client-side validatie aanwezig op formulieren?
- Externe scripts geladen via HTTPS?

---

## Stap 5: Code review

### Functionaliteit
- Formspree endpoints ingevuld (niet `YOUR_*_FORM_ID`)?
- Alle interne links verwijzen naar bestaande pagina's?

### Toegankelijkheid (WCAG)
- `aria-expanded` op hamburger en FAQ-toggles?
- `aria-label` op knoppen zonder zichtbare tekst?
- Geen `outline-none` op focusbare elementen?

### i18n volledigheid
- Alle tekstelementen hebben `data-i18n` of `data-i18n-html`?
- Keys aanwezig in `js/i18n.js` voor EN, NL, ES én TR?
- Geen ontbrekende keys (undefined in output)?

### Code kwaliteit
- Geen `transition-all` gebruik?
- Geen hardcoded kleuren buiten brand-palet (#0A1628 t/m #F0F6FC)?

---

## Stap 6: Eindrapport

### Samenvatting
| Categorie | Score | Oordeel |
|-----------|-------|---------|
| Visueel | X/9 pagina's | ✅/⚠️/❌ |
| SEO & Vindbaarheid | X/10 | ✅/⚠️/❌ |
| Security | X/10 | ✅/⚠️/❌ |
| Toegankelijkheid | X/10 | ✅/⚠️/❌ |
| i18n | X/10 | ✅/⚠️/❌ |
| Performance | X/10 | ✅/⚠️/❌ |

### Per pagina (visueel)
- **Status**: PASS / FAIL / WAARSCHUWING
- **Bevindingen**: specifiek
- **Actie**: concreet

### Kritieke issues (bugs, security, broken functionaliteit)
1. ...

### Waarschuwingen (SEO, a11y, i18n, performance)
1. ...

### Prioriteit actielijst
Hoogste impact eerst:
1. ...
