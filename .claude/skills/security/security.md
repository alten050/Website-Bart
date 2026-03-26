---
name: security
description: >
  Security skill voor bedrijfswebsites en landingspagina's. Gebruik deze skill altijd wanneer er
  gewerkt wordt aan een website en veiligheid, beveiliging, security headers, XSS, HTTPS, formulieren,
  inputvalidatie, of bescherming tegen aanvallen ter sprake komt. Ook inzetten bij het bouwen of
  verbeteren van contactformulieren, loginpagina's, of elke pagina die gebruikersinvoer verwerkt.
  Trigger ook bij termen als 'security', 'beveiliging', 'veiligheid', 'hacker', 'XSS', 'HTTPS',
  'CSP', 'formulier beveiligen', 'wachtwoord', of 'cookiebeleid'.
---

# Website Security Skill

Deze skill helpt Claude om bedrijfswebsites te bouwen met goede basisbeveiliging — zodat bezoekers
veilig zijn, gegevens beschermd zijn, en de website niet kwetsbaar is voor veelvoorkomende aanvallen.

## Wat deze skill doet

Wanneer je aan een website werkt, voeg je standaard de volgende beveiligingsmaatregelen toe —
zonder dat de gebruiker er specifiek om hoeft te vragen. Goede beveiliging is geen optie, maar een
onderdeel van elke professionele website.

---

## 1. HTTPS en veilige verbinding

Zorg altijd dat de website over HTTPS draait. Voeg in de serverconfig of `.htaccess` een redirect
toe van HTTP naar HTTPS:

```apache
# .htaccess (Apache)
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Voor een Nginx-server:
```nginx
server {
    listen 80;
    server_name jouwdomein.nl www.jouwdomein.nl;
    return 301 https://$host$request_uri;
}
```

**Waarom:** HTTPS versleutelt alle communicatie tussen de bezoeker en de server. Browsers tonen
een waarschuwing bij HTTP-sites, en Google rankt HTTPS-sites hoger.

---

## 2. Security Headers

Voeg deze HTTP-headers toe — ze beschermen bezoekers tegen veel veelvoorkomende aanvallen:

```apache
# .htaccess (Apache)
<IfModule mod_headers.c>
    # Voorkomt dat de site in een iframe geladen kan worden (clickjacking)
    Header always set X-Frame-Options "SAMEORIGIN"

    # Voorkomt MIME-type sniffing
    Header always set X-Content-Type-Options "nosniff"

    # Verplicht HTTPS voor 1 jaar (HSTS)
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"

    # Beperkt welke bronnen geladen mogen worden (Content Security Policy)
    Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'"

    # Beperkt welke referrer-informatie wordt gedeeld
    Header always set Referrer-Policy "strict-origin-when-cross-origin"

    # Beperkt browserfuncties (bijv. camera, microfoon)
    Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
</IfModule>
```

**Waarom:** Deze headers zijn de eerste verdedigingslinie. Ze voorkomen clickjacking, XSS-aanvallen
en het inladen van schadelijke externe scripts.

---

## 3. Formulierbeveiliging

Elk contactformulier of invoerveld is een potentieel aanvalspunt. Beveilig formulieren altijd:

### HTML-kant (basis validatie)
```html
<form method="POST" action="/contact" novalidate>
    <!-- CSRF-token: voorkomt dat andere sites het formulier kunnen versturen -->
    <input type="hidden" name="csrf_token" value="{{ csrf_token }}">

    <!-- Honeypot: veld dat mensen leeg laten maar bots invullen -->
    <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">

    <label for="naam">Naam *</label>
    <input
        type="text"
        id="naam"
        name="naam"
        required
        maxlength="100"
        pattern="[A-Za-zÀ-ÿ\s\-]+"
        autocomplete="name">

    <label for="email">E-mailadres *</label>
    <input
        type="email"
        id="email"
        name="email"
        required
        maxlength="255"
        autocomplete="email">

    <label for="bericht">Bericht *</label>
    <textarea
        id="bericht"
        name="bericht"
        required
        maxlength="2000"
        rows="5"></textarea>

    <button type="submit">Verstuur</button>
</form>
```

### Server-kant (PHP voorbeeld)
```php
<?php
// Nooit gebruikersinput direct verwerken zonder opschoning
$naam = htmlspecialchars(strip_tags($_POST['naam'] ?? ''), ENT_QUOTES, 'UTF-8');
$email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
$bericht = htmlspecialchars(strip_tags($_POST['bericht'] ?? ''), ENT_QUOTES, 'UTF-8');

// Valideer email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die('Ongeldig e-mailadres');
}

// Controleer honeypot
if (!empty($_POST['website'])) {
    die('Bot gedetecteerd');
}
?>
```

**Waarom:** Zonder validatie kan iemand schadelijke code in een formulier plaatsen (XSS), of het
formulier misbruiken om spam te sturen via jouw server.

---

## 4. Veilige cookies

Als de website cookies gebruikt (bijv. voor sessies of analytics), stel ze dan altijd veilig in:

```php
// PHP: Veilige sessie-instellingen
ini_set('session.cookie_httponly', 1);    // Cookie niet toegankelijk via JavaScript
ini_set('session.cookie_secure', 1);      // Cookie alleen via HTTPS
ini_set('session.cookie_samesite', 'Strict'); // Voorkomt CSRF via cookies
session_start();
```

Of via headers:
```
Set-Cookie: sessie=waarde; HttpOnly; Secure; SameSite=Strict; Path=/
```

**Waarom:** Zonder `HttpOnly` kunnen aanvallers via XSS session-cookies stelen. Zonder `Secure`
worden cookies ook via HTTP verstuurd.

---

## 5. Geen gevoelige data in de broncode

Controleer altijd dat het volgende NIET in HTML, JavaScript of andere publieke bestanden staat:

- Wachtwoorden of API-sleutels
- Database-verbindingsstrings
- Interne e-mailadressen (tenzij bedoeld)
- Paden naar interne bestanden of mappen
- Commentaar met gevoelige informatie

```html
<!-- FOUT: nooit dit doen -->
<!-- Database: mysql://user:wachtwoord@localhost/db -->
<!-- API key: sk-1234567890abcdef -->

<!-- GOED: gevoelige data hoort in server-side config, niet in HTML -->
```

**Waarom:** Iedereen kan de broncode van een website bekijken. Gevoelige data in de broncode is
direct toegankelijk voor aanvallers.

---

## 6. Bestanden en mappen beschermen

Voorkom dat gevoelige bestanden toegankelijk zijn via de browser:

```apache
# .htaccess: Bescherm configuratiebestanden
<FilesMatch "\.(env|log|sql|bak|config|json|md|yaml|yml)$">
    Order Allow,Deny
    Deny from all
</FilesMatch>

# Verhinder directory listing (tonen van mapinhoud)
Options -Indexes
```

**Waarom:** Een `.env`-bestand of database-backup die via de browser toegankelijk is, kan
wachtwoorden en andere gevoelige informatie blootleggen.

---

## 7. Privacymelding en cookiebanner

Als de website bezoekers trackt of cookies plaatst die niet strikt noodzakelijk zijn, is een
cookiebanner wettelijk verplicht (AVG/GDPR):

```html
<!-- Eenvoudige cookiebanner -->
<div id="cookie-banner" style="display:none; position:fixed; bottom:0; width:100%;
     background:#1a1a1a; color:#fff; padding:1rem; text-align:center; z-index:9999;">
    <p>Wij gebruiken cookies om de website te verbeteren.
       <a href="/privacybeleid" style="color:#fff;">Meer info</a></p>
    <button onclick="acceptCookies()">Akkoord</button>
    <button onclick="rejectCookies()">Weigeren</button>
</div>

<script>
function acceptCookies() {
    localStorage.setItem('cookies_accepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
    // Hier analytics inschakelen indien geaccepteerd
}
function rejectCookies() {
    localStorage.setItem('cookies_accepted', 'false');
    document.getElementById('cookie-banner').style.display = 'none';
}
if (!localStorage.getItem('cookies_accepted')) {
    document.getElementById('cookie-banner').style.display = 'block';
}
</script>
```

**Waarom:** De AVG (Algemene Verordening Gegevensbescherming) verplicht Nederlande websites om
toestemming te vragen voor niet-functionele cookies.

---

## Werkwijze

Wanneer je aan een nieuwe website werkt:
1. Voeg altijd `.htaccess` met security headers toe als de site op Apache draait
2. Controleer formulieren op inputvalidatie en sanitization
3. Controleer dat er geen gevoelige data in de broncode staat
4. Voeg een cookiebanner toe als de site analytics of trackingcookies gebruikt
5. Genereer een privacypagina als die nog niet bestaat

Wanneer je een bestaande site verbetert:
1. Scan op ontbrekende security headers, onveilige formulieren en exposed data
2. Leg kort uit welke risico's je aanpakt en waarom
3. Implementeer de fixes en geef een samenvatting
