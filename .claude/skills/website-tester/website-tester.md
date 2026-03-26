---
name: website-tester
description: >
  Volledige website test-agent die een live URL controleert op SEO/vindbaarheid, security/beveiliging,
  werking van de pagina en snelheid/performance. Gebruik deze skill altijd wanneer de gebruiker een
  website wil testen, controleren, auditen of nakijken — ook bij termen als 'check mijn site',
  'klopt dit allemaal', 'test de website', 'wat gaat er mis', 'audit', 'is mijn site veilig',
  'wordt mijn site gevonden', of wanneer een URL wordt opgegeven met de vraag om te controleren.
  Geeft altijd een gestructureerd rapport met bevindingen per categorie en concrete actiepunten.
---

# Website Test Agent

Deze skill voert een volledige check uit op een live website en geeft een rapport met bevindingen
en aanbevelingen op vier gebieden: SEO, security, werking en snelheid.

## Werkwijze

Wanneer de gebruiker een URL opgeeft om te testen, voer je de volgende stappen uit **in volgorde**.
Sla geen stap over. Geef aan het einde altijd een gestructureerd eindrapport.

---

## Stap 1: Pagina ophalen en analyseren

Gebruik `WebFetch` om de URL op te halen. Sla de volledige HTML-inhoud op voor analyse.
Haal ook de HTTP-responsheaders op via een HEAD-request met de Bash-tool:

```bash
curl -sI <URL> 2>&1 | head -50
```

Haal ook robots.txt op:
```bash
curl -s <basis-URL>/robots.txt
```

En llms.txt:
```bash
curl -s <basis-URL>/llms.txt
```

En sitemap.xml:
```bash
curl -s <basis-URL>/sitemap.xml | head -50
```

---

## Stap 2: SEO-check

Analyseer de HTML op de volgende punten en noteer voor elk punt: ✅ aanwezig/goed, ⚠️ aanwezig maar verbeterbaar, of ❌ ontbreekt/fout.

**Meta-tags:**
- `<title>` aanwezig? Lengte tussen 30-60 tekens?
- `<meta name="description">` aanwezig? Lengte tussen 120-155 tekens?
- `<link rel="canonical">` aanwezig?
- `<html lang="...">` ingesteld?
- `<meta name="viewport">` aanwezig?

**Open Graph:**
- `og:title`, `og:description`, `og:image`, `og:url` aanwezig?

**Structuur:**
- Precies één `<h1>`? Bevat het een zoekwoord?
- Logische heading-hiërarchie (h1 → h2 → h3)?
- Semantische elementen gebruikt (`<main>`, `<nav>`, `<footer>` etc.)?
- Afbeeldingen met ontbrekende of lege `alt`-attributen?

**Structured data:**
- JSON-LD aanwezig (`<script type="application/ld+json">`)?
- Welk `@type` wordt gebruikt? Is dat passend?

**Technische SEO:**
- robots.txt aanwezig en correct?
- sitemap.xml aanwezig?
- llms.txt aanwezig? (voor AI-zoekmachines)
- GPTBot en PerplexityBot toegestaan in robots.txt?

---

## Stap 3: Security-check

Controleer de HTTP-headers op de volgende security-maatregelen:

| Header | Verwacht | Risico bij ontbreken |
|--------|----------|----------------------|
| `Strict-Transport-Security` | aanwezig | Site kan via HTTP benaderd worden |
| `X-Frame-Options` | `SAMEORIGIN` of `DENY` | Kwetsbaar voor clickjacking |
| `X-Content-Type-Options` | `nosniff` | MIME-sniffing mogelijk |
| `Content-Security-Policy` | aanwezig | XSS-aanvallen mogelijk |
| `Referrer-Policy` | aanwezig | Privacy-lek via referrer |
| `Permissions-Policy` | aanwezig | Onnodige browserfuncties toegankelijk |

Controleer ook:
- Wordt HTTP automatisch doorgestuurd naar HTTPS? (test met `http://` variant)
- Worden versienummers van software niet prijsgegeven in headers (bijv. `Server: Apache/2.4.51`)?
- Staat er gevoelige informatie in HTML-commentaar?
- Zijn er formulieren? Hebben die een `method="POST"` (niet GET)?

---

## Stap 4: Werkingscheck

Controleer of de pagina correct functioneert:

**Links:**
```bash
# Haal alle interne links op uit de HTML en test er maximaal 10
grep -oP 'href="[^"#]*"' <<< "<HTML>" | head -10
```
Test elke gevonden interne link met `curl -sI <link> | grep "HTTP/"` — geeft het een 200 of een 301/404?

**Afbeeldingen:**
- Hoeveel `<img>`-tags zijn er?
- Hebben ze `width` en `height` attributen (voorkomt layout shift)?
- Wordt `loading="lazy"` gebruikt voor afbeeldingen die niet direct zichtbaar zijn?

**Formulieren:**
- Zijn er `<form>`-elementen?
- Hebben ze een `action` en `method`?
- Zijn `required`-attributen aanwezig op verplichte velden?

**Favicon:**
- Is er een `<link rel="icon">` of `favicon.ico` aanwezig?

---

## Stap 5: Snelheid & performance check

Analyseer de HTML op performance-indicatoren:

**Scripts:**
- Worden scripts geladen met `defer` of `async`? Of blokkeren ze de pagina?
- Hoeveel externe scripts zijn er? (elke externe aanroep vertraagt de pagina)

**Afbeeldingen:**
- Worden moderne formaten gebruikt (`.webp`, `.avif`)? Of alleen `.jpg`/`.png`?
- Staan er `width` en `height` op afbeeldingen?

**CSS:**
- Staat CSS in de `<head>`? Of wordt het inline geladen?
- Worden grote externe CSS-bibliotheken ingeladen?

**Algemeen:**
- Wordt Google Fonts of andere externe fonts geladen? (vertraagt de pagina)
- Is er een `<link rel="preconnect">` voor externe domeinen?

---

## Stap 6: Eindrapport

Geef altijd een rapport in dit formaat:

---

## 🔍 Website Testrapport — [URL]
*Getest op: [datum]*

### 📊 Samenvatting
| Categorie | Score | Oordeel |
|-----------|-------|---------|
| SEO & Vindbaarheid | X/10 | ✅/⚠️/❌ |
| Security | X/10 | ✅/⚠️/❌ |
| Werking | X/10 | ✅/⚠️/❌ |
| Snelheid & Performance | X/10 | ✅/⚠️/❌ |

### 🔎 SEO & Vindbaarheid
[bevindingen per punt met ✅/⚠️/❌]

**Top 3 actiepunten:**
1. ...
2. ...
3. ...

### 🔒 Security
[bevindingen per punt met ✅/⚠️/❌]

**Top 3 actiepunten:**
1. ...
2. ...
3. ...

### ✅ Werking
[bevindingen per punt met ✅/⚠️/❌]

**Actiepunten:**
1. ...

### ⚡ Snelheid & Performance
[bevindingen per punt met ✅/⚠️/❌]

**Top 3 actiepunten:**
1. ...
2. ...
3. ...

### 🎯 Prioriteit actielijst
De belangrijkste dingen om als eerste op te pakken, op volgorde van impact:
1. [hoogste prioriteit]
2. ...
3. ...

---

## Toon en stijl van het rapport

- Schrijf in gewone, begrijpelijke taal — geen technisch jargon tenzij uitgelegd
- Leg kort uit **waarom** iets een probleem is, niet alleen dat het ontbreekt
- Geef voor elk probleem een concrete suggestie hoe het op te lossen
- Wees eerlijk maar constructief — ook als er veel mis is
