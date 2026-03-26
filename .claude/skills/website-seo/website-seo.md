---
name: website-seo
description: >
  SEO, vindbaarheid en AI-zoekmachine optimalisatie voor bedrijfswebsites en landingspagina's.
  Gebruik deze skill altijd wanneer er gewerkt wordt aan een website en vindbaarheid,
  zoekmachineoptimalisatie, Google-ranking, AI-zoekmachines, ChatGPT-vindbaarheid, Perplexity,
  meta-tags, sitemap, structured data, of Open Graph aan bod komen. Ook inzetten bij het bouwen van
  nieuwe pagina's, het verbeteren van bestaande HTML, of wanneer de gebruiker wil dat zijn site beter
  gevonden wordt via Google, ChatGPT, Perplexity, of andere AI-tools. Trigger ook bij termen als
  'SEO', 'vindbaarheid', 'Google ranking', 'ChatGPT vindbaarheid', 'AI zoeken', 'AEO', 'GEO',
  'zoekmachine', 'meta description', 'og:tags', 'sitemap', 'llms.txt' of 'structured data'.
---

# Website SEO Skill

Deze skill helpt Claude om bedrijfswebsites en landingspagina's te bouwen (of te verbeteren) met
sterke SEO-fundamenten, zodat ze goed vindbaar zijn in zoekmachines zoals Google.

## Wat deze skill doet

Wanneer je aan een website werkt, zorg je altijd — standaard, zonder dat de gebruiker erom hoeft
te vragen — dat de volgende SEO-elementen aanwezig en correct zijn. Dit zijn de bouwstenen van
goede vindbaarheid.

---

## 1. Meta-tags in de `<head>`

Elke pagina heeft deze tags nodig:

```html
<!-- Paginatitel: max 60 tekens, bevat het belangrijkste zoekwoord -->
<title>Bedrijfsnaam | Korte omschrijving van dienst/product</title>

<!-- Meta description: max 155 tekens, aantrekkelijk voor klikken -->
<meta name="description" content="Korte beschrijving van wat de pagina biedt, inclusief een call-to-action.">

<!-- Canonical: voorkomt duplicate content -->
<link rel="canonical" href="https://www.jouwdomein.nl/paginanaam">

<!-- Viewport (ook goed voor mobile-first indexing) -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Taal van de pagina -->
<html lang="nl">
```

**Waarom:** Google gebruikt de titel en description als preview in zoekresultaten. Goede titels
verhogen de klikratio (CTR), wat een positief signaal is voor ranking.

---

## 2. Open Graph tags (voor social media)

Deze tags zorgen dat de pagina er goed uitziet wanneer iemand hem deelt via WhatsApp, LinkedIn,
Facebook of X (Twitter):

```html
<meta property="og:title" content="Paginatitel">
<meta property="og:description" content="Korte beschrijving">
<meta property="og:image" content="https://www.jouwdomein.nl/afbeelding.jpg">
<meta property="og:url" content="https://www.jouwdomein.nl/paginanaam">
<meta property="og:type" content="website">
<meta property="og:locale" content="nl_NL">
```

**Waarom:** Sociale signalen en backlinks via social media helpen indirect bij SEO, en een goede
preview zorgt voor meer kliks.

---

## 3. Semantische HTML-structuur

Gebruik altijd de juiste HTML-elementen voor de inhoudsstructuur:

- **Één `<h1>` per pagina** — bevat het hoofdzoekwoord
- **`<h2>` en `<h3>`** voor subsecties — logisch genest, niet overgeslagen
- **`<main>`, `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`** — gebruik semantische elementen
- **`<img>`-tags** hebben altijd een beschrijvend `alt`-attribuut

```html
<!-- Goed -->
<img src="logo.png" alt="Logo van Bedrijfsnaam">

<!-- Fout -->
<img src="logo.png" alt="">
```

**Waarom:** Google leest de HTML-structuur om te begrijpen waar een pagina over gaat. Semantische
HTML maakt dit makkelijker.

---

## 4. Structured Data (JSON-LD)

Voeg altijd structured data toe voor bedrijfswebsites. Dit helpt Google rijke snippets te tonen
(zoals sterren, openingstijden, adres) in zoekresultaten:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bedrijfsnaam",
  "url": "https://www.jouwdomein.nl",
  "description": "Korte beschrijving van het bedrijf",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Straatnaam 1",
    "addressLocality": "Stad",
    "postalCode": "1234 AB",
    "addressCountry": "NL"
  },
  "telephone": "+31-xx-xxxxxxx",
  "openingHours": "Mo-Fr 09:00-17:00"
}
</script>
```

Pas het `@type` aan op het soort bedrijf: gebruik `"Organization"` voor algemene bedrijven,
`"LocalBusiness"` voor fysieke locaties, `"ProfessionalService"` voor dienstverleners.

---

## 5. robots.txt

Zorg dat er een `robots.txt` is in de root van de website:

```
User-agent: *
Allow: /

Sitemap: https://www.jouwdomein.nl/sitemap.xml
```

**Waarom:** Dit vertelt zoekmachines welke pagina's ze mogen indexeren en waar de sitemap staat.

---

## 6. Sitemap (sitemap.xml)

Maak een sitemap met alle belangrijke pagina's:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.jouwdomein.nl/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.jouwdomein.nl/over-ons</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

**Waarom:** Een sitemap helpt Google om alle pagina's te ontdekken, ook als ze niet goed intern
gelinkt zijn.

---

## 7. Paginasnelheid en Core Web Vitals

Houd rekening met laadtijd — dit is een officiële rankingfactor van Google:

- Afbeeldingen optimaliseren: gebruik `width` en `height` attributen, voeg `loading="lazy"` toe
  voor afbeeldingen die niet direct zichtbaar zijn
- CSS vóór `</head>`, JavaScript vóór `</body>` of met `defer`
- Vermijd grote, ongecomprimeerde afbeeldingen (gebruik .webp waar mogelijk)

```html
<!-- Goed -->
<img src="foto.webp" alt="Beschrijving" width="800" height="600" loading="lazy">

<!-- Script laden zonder de pagina te blokkeren -->
<script src="script.js" defer></script>
```

---

---

## 8. AI Search Optimalisatie (AEO/GEO)

Steeds meer mensen zoeken niet via Google, maar via ChatGPT, Perplexity, Google AI Overviews,
of andere AI-tools. Om ook daar gevonden te worden, zijn andere technieken nodig dan klassieke SEO.

### llms.txt (nieuw standaard voor AI-crawlers)

Maak een `llms.txt` aan in de root van je website. Dit is een opkomende standaard die AI-tools
vertelt wat jouw website is en wat ze mogen gebruiken:

```markdown
# Bedrijfsnaam

> Korte, duidelijke omschrijving van wat het bedrijf doet en voor wie.

## Diensten
- [Dienst 1](https://www.jouwdomein.nl/dienst-1): Korte uitleg
- [Dienst 2](https://www.jouwdomein.nl/dienst-2): Korte uitleg

## Over ons
- [Over ons](https://www.jouwdomein.nl/over-ons): Achtergrond en missie
- [Contact](https://www.jouwdomein.nl/contact): Contactgegevens en locatie

## Optioneel: pagina's die AI-tools niet hoeven te gebruiken
- [Privacybeleid](https://www.jouwdomein.nl/privacy)
```

**Waarom:** ChatGPT, Perplexity en andere AI-tools lezen dit bestand om te begrijpen wat je
website doet, zodat ze je kunnen aanbevelen bij relevante vragen.

### FAQ-sectie met directe antwoorden

Voeg een FAQ toe met vragen die potentiële klanten stellen. AI-tools houden van directe,
feitelijke antwoorden — geen marketingtaal:

```html
<section id="faq">
  <h2>Veelgestelde vragen</h2>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">Wat doet [bedrijfsnaam]?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">
        [Bedrijfsnaam] is een [type bedrijf] in [stad] dat [dienst/product] aanbiedt aan
        [doelgroep]. We helpen klanten met [specifiek probleem oplossen].
      </p>
    </div>
  </div>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">Hoe kan ik contact opnemen?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">
        U kunt ons bereiken via [telefoonnummer], [e-mail], of het contactformulier op onze website.
        We zijn bereikbaar op [dagen en tijden].
      </p>
    </div>
  </div>
</section>
```

Voeg ook FAQ structured data toe zodat Google en AI-tools dit formeel begrijpen:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat doet Bedrijfsnaam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bedrijfsnaam is een ... dat ... aanbiedt aan ..."
      }
    }
  ]
}
</script>
```

### Heldere, feitelijke content voor AI

AI-tools citeren pagina's die duidelijke, betrouwbare informatie geven. Schrijf content zo:

- **Gebruik directe antwoorden** — begin een alinea met het antwoord, dan de uitleg
- **Vermeld feiten en cijfers** — "al 15 jaar actief", "meer dan 500 klanten", "gevestigd in Amsterdam"
- **Consistente NAP** — Naam, Adres en Telefoonnummer moeten overal op de site exact hetzelfde zijn
- **Vermeld het dienstgebied expliciet** — "Wij zijn actief in Amsterdam, Amstelveen en omgeving"
- **Gebruik de naam van je bedrijf en diensten letterlijk** — AI-tools zoeken op exacte termen

### robots.txt uitbreiden voor AI-crawlers

Voeg toe welke AI-crawlers de site mogen indexeren:

```
User-agent: *
Allow: /

# AI-zoekmachines toestaan
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Googlebot
Allow: /

Sitemap: https://www.jouwdomein.nl/sitemap.xml
```

**Waarom:** Sommige AI-tools respecteren robots.txt. Door ze expliciet toe te staan, zorg je dat
ze jouw site kunnen lezen en in hun antwoorden kunnen verwerken.

---

## Werkwijze

Wanneer je aan een nieuwe pagina werkt:
1. Begin met de HTML-structuur en voeg meteen de juiste `<head>`-tags toe
2. Vraag de gebruiker om het hoofdzoekwoord of de kern van hun bedrijf als je dit niet weet
3. Voeg structured data toe op basis van het type bedrijf
4. Genereer robots.txt (met AI-crawlers), sitemap.xml én llms.txt als die nog niet bestaan
5. Voeg een FAQ-sectie toe met directe antwoorden op veelgestelde vragen
6. Controleer of alle afbeeldingen `alt`-tekst hebben

Wanneer je een bestaande pagina verbetert:
1. Scan eerst op ontbrekende meta-tags, alt-teksten, heading-structuur en llms.txt
2. Geef een korte samenvatting van wat er verbeterd wordt en waarom
3. Pas aan en leg uit wat je hebt gedaan
