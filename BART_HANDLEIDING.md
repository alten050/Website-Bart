# Smits & Wouters — Website Handleiding voor Bart

Dit document legt uit hoe de website werkt en wat jij moet aanleveren of instellen om de site volledig jouw eigen te maken.

---

## 1. Wat de site doet

De website bestaat uit 9 pagina's:

| Pagina | URL | Doel |
|---|---|---|
| Home | `/` | Eerste indruk, hero, diensten samenvatting, FAQ |
| Diensten | `/services.html` | Wat jullie aanbieden |
| Projecten | `/projects.html` | Portfolio van uitgevoerde of lopende projecten |
| Over Ons | `/about.html` | Achtergrond van het bedrijf |
| Opportunities | `/opportunities.html` | Anonieme deal teasers achter een e-mailgate |
| Mandaat | `/mandate.html` | Formulier voor beleggers om hun profiel op te geven |
| Contact | `/contact.html` | Contactformulier |
| Privacy | `/privacy.html` | Privacyverklaring |
| 404 | `/404.html` | Pagina niet gevonden |

De site is beschikbaar in **4 talen**: Nederlands, Engels, Spaans en Turks. De taalswitch staat rechtsboven in de header.

---

## 2. Wat direct geregeld moet worden

### 2.1 Formspree — Formulieren activeren

Er zijn **3 contactformulieren** op de site. Die werken nog niet totdat je ze activeert op [formspree.io](https://formspree.io).

**Stap 1:** Maak een account aan op formspree.io (gratis plan is voldoende)
**Stap 2:** Maak 3 aparte formulieren aan en kopieer het ID (de code na `/f/`)
**Stap 3:** Stuur de 3 IDs door, dan worden ze in de code gezet

| Formulier | Bestand | Wat het doet |
|---|---|---|
| Contactformulier | `contact.html` | Algemene berichten van bezoekers |
| Mandaat formulier | `mandate.html` | Beleggersprofiel van investeerders |
| Opportunities gate | `opportunities.html` | E-mailadres van geïnteresseerden (e-maillijst) |

Zodra de IDs zijn ingesteld ontvang je alle inzendingen direct in je inbox.

---

## 3. Wat jij moet aanleveren

### 3.1 Projectenpagina — 12 projectkaarten

Op `/projects.html` staan momenteel **12 projectkaarten** met willekeurige stockfoto's en fictieve namen. Dit moeten echte projecten worden die jullie hebben begeleid of uitgevoerd.

**Per project heb ik nodig:**

- **Foto** — een goede foto van het pand of de locatie (jpg/webp, minimaal 800×600px)
- **Naam** — bijv. "Business Park Rotterdam" of "Kantoorgebouw Utrecht"
- **Type** — bijv. Kantoor, Logistiek, Wonen, Gemengd, Grond, Retail
- **Locatie** — stad + land
- **Jaar** — wanneer afgerond of gestart
- **Korte omschrijving** — 1-2 zinnen wat jullie rol was

Je hoeft niet alle 12 te vullen — ook 6 of 8 echte projecten is prima. De rest verwijder ik dan.

> **Let op:** Als een project vertrouwelijk is, geef dan alleen globale informatie (bijv. "Kantoorcomplex, Amsterdam regio, 2023"). De naam van de opdrachtgever hoeft er niet bij.

---

### 3.2 Opportunities pagina — 6 deal teasers

Op `/opportunities.html` staan **6 fictieve deals**. Dit zijn de anonieme teasers die bezoekers zien nadat ze hun e-mailadres hebben achtergelaten.

**Per deal heb ik nodig:**

- **Type** — bijv. Office, Logistics, Residential, Land, Mixed-Use
- **Status** — Available / Under Review / In Negotiation
- **Titel** — bijv. "Office Park Development" (geen naam opdrachtgever)
- **Locatie** — bijv. "Netherlands" of "Spain — Costa del Sol"
- **Datum** — bijv. "March 2026" (wanneer de deal beschikbaar is)
- **Oppervlakte** — bijv. "22,000 m²" (optioneel, weglaten als niet van toepassing)
- **Ticket** — prijsrange bijv. "€18M – €24M"
- **Bruto aanvangsrendement** — bijv. "7.2%" (optioneel)
- **Structuur** — bijv. "Direct acquisition" of "JV / Partnership"
- **Korte beschrijving** — 1-2 zinnen, volledig anoniem

Heb je nu nog geen echte deals? Dan kunnen de huidige fictieve kaarten voorlopig blijven staan. Je kunt ze later één voor één aanpassen.

---

### 3.3 Foto's op andere pagina's

| Pagina | Huidige foto | Wat zou beter zijn |
|---|---|---|
| Home (hero) | Stockfoto kantoor | Foto van jullie kantoor of een mooi pand |
| Mandate (hero) | Dubai luxe villa | Foto die past bij investeren / discreet vastgoed |
| Opportunities (hero) | Stadsgezicht | Prima te houden, of een eigen foto |
| About (hero) | `kantoor.png` | Foto van jullie kantoor of team |

Alle foto's kunnen worden aangeleverd als jpg of webp. Ik zet ze dan op de juiste plek.

---

## 4. Optioneel maar aanbevolen

### 4.1 Domein & hosting

De site staat momenteel alleen lokaal. Om hem online te zetten heb je nodig:

- Een **webhostingpakket** dat statische HTML serveert (bijv. Netlify, Vercel of een gewone webhost)
- Het domein **smitsenwouters.com** koppelen aan die hosting
- Een **SSL-certificaat** (https://) — bij Netlify/Vercel gratis inbegrepen

De beveiligingsheaders die de site al heeft (Content-Security-Policy, X-Frame-Options etc.) werken alleen correct als de server ze ondersteunt. De huidige lokale server doet dat al. Bij deployment naar een live host moet dit worden nagebouwd.

### 4.2 Google Analytics / tracking

Momenteel geen tracking ingebouwd. Als je bezoekersdata wilt bijhouden kan ik Google Analytics 4 of een privacy-vriendelijk alternatief (bijv. Plausible) toevoegen.

### 4.3 Taalinhoud controleren

De Nederlandse teksten zijn geschreven op basis van de informatie die beschikbaar was. De Engelse vertaling klopt inhoudelijk. De Spaanse en Turkse vertalingen zijn functioneel correct maar kunnen worden nagekeken door een native speaker als dat gewenst is.

### 4.4 FAQ uitbreiden

Op de homepage staat een FAQ-sectie. De huidige vragen zijn algemeen. Je kunt vragen aanleveren die jij vaak krijgt van klanten — die zet ik er dan in, in alle 4 talen.

---

## 5. Wat er al wél klopt

Je hoeft hier niets aan te doen:

- Logo en huisstijl zijn verwerkt (kleurenpalet, typografie)
- Privacyverklaring is compleet en AVG-conform
- Alle formulieren hebben spam-beveiliging (honeypot, maxlength)
- SEO is ingericht (meta titles, descriptions, hreflang, sitemap, robots.txt)
- De site werkt op mobiel, tablet en desktop
- Taalswitch werkt voor alle pagina's en alle content
- Navigatie is compleet: Opportunities in de header, Mandaat in de footer

---

## 6. Samenvatting: actielijst voor Bart

| Prioriteit | Actie | Wat jij doet |
|---|---|---|
| 🔴 Kritiek | Formspree IDs instellen | Account aanmaken op formspree.io, 3 IDs doorsturen |
| 🔴 Kritiek | Projecten aanleveren | Foto + naam + type + locatie + jaar per project |
| 🟡 Belangrijk | Opportunities deals aanleveren | Anonieme dealinfo per deal (zie §3.2) |
| 🟡 Belangrijk | Hosting regelen | Domein koppelen aan webhostingpakket |
| 🟢 Optioneel | Betere foto's aanleveren | Hero-foto's vervangen door eigen materiaal |
| 🟢 Optioneel | FAQ uitbreiden | Vragen aanleveren die je vaak krijgt |
| 🟢 Optioneel | Tracking toevoegen | Laten weten of je dat wilt |
