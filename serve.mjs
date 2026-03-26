import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.txt':  'text/plain; charset=utf-8',
  '.xml':  'application/xml',
};

// Security headers applied to every response
const SECURITY_HEADERS = {
  // Prevent clickjacking — site cannot be embedded in iframes
  'X-Frame-Options': 'DENY',

  // Prevent MIME-type sniffing attacks
  'X-Content-Type-Options': 'nosniff',

  // Control referrer information sent to other sites
  'Referrer-Policy': 'strict-origin-when-cross-origin',

  // Disable dangerous browser features
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()',

  // Prevent cross-origin information leaks
  'Cross-Origin-Opener-Policy': 'same-origin',

  // Block cross-site resource sharing by default
  'Cross-Origin-Resource-Policy': 'same-site',

  // Disallow Flash/PDF cross-domain policies
  'X-Permitted-Cross-Domain-Policies': 'none',

  // Content Security Policy — restrict what can be loaded
  // 'unsafe-inline' is required for Tailwind CDN and Google Fonts
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob:",
    "connect-src 'self' https://formspree.io",
    "frame-src 'none'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://formspree.io",
  ].join('; '),
};

const server = http.createServer((req, res) => {
  // Block path traversal attacks (e.g. ../../etc/passwd)
  const rawPath = req.url.split('?')[0];
  let decodedPath;
  try { decodedPath = decodeURIComponent(rawPath); } catch { decodedPath = rawPath; }
  const safePath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, '');
  let urlPath = safePath === '/' ? '/index.html' : safePath;

  const filePath = path.join(__dirname, urlPath);

  // Ensure the resolved path stays within the project root
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain', ...SECURITY_HEADERS });
    res.end('403 Forbidden');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain', ...SECURITY_HEADERS });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain', ...SECURITY_HEADERS });
        res.end('500 Internal Server Error');
      }
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType, ...SECURITY_HEADERS });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Smits & Wouters dev server running at http://localhost:${PORT}`);
});
