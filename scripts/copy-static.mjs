import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const rootDir = process.cwd();
const distDir = resolve(rootDir, 'dist');
const staticDirs = ['assets', 'demo_assets'];
const builtIndexPath = resolve(distDir, 'index.html');

mkdirSync(distDir, { recursive: true });

for (const directory of staticDirs) {
  const sourceDir = resolve(rootDir, directory);
  const targetDir = resolve(distDir, directory);

  if (!existsSync(sourceDir)) {
    continue;
  }

  cpSync(sourceDir, targetDir, { recursive: true, force: true });
}

if (existsSync(builtIndexPath)) {
  const builtIndexHtml = readFileSync(builtIndexPath, 'utf8');
  const scriptMatch = builtIndexHtml.match(/<script[^>]+src="([^"]+\.js)"[^>]*><\/script>/i);
  const appScriptSrc = scriptMatch?.[1] ?? '/assets/index.js';

  const appShellHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="thumbnail" content="assets/images/ico_template_thumbnail.webp" />
    <meta name="description" content="Coinpay - Site Template" />
    <meta name="keywords" content="Crypto Currency Bootstrap Site Template" />
    <meta name="author" content="xpressbuddy" />
    <title>Coinpay - Crypto Currency Site Template</title>
    <link rel="shortcut icon" href="/assets/images/site_logo/favicon_1.svg" />
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/assets/css/fontawesome.css" />
    <link rel="stylesheet" href="/assets/css/cursor.css" />
    <link rel="stylesheet" href="/assets/css/animate.min.css" />
    <link rel="stylesheet" href="/assets/css/aos.css" />
    <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
    <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
    <link rel="stylesheet" href="/assets/css/odometer.min.css" />
    <link rel="stylesheet" href="/assets/css/style.css" />
    <link rel="stylesheet" href="/demo_assets/style.css" />
    <script type="module" src="${appScriptSrc}"></script>
  </head>
  <body class="index_ico">
    <div id="root"></div>
  </body>
</html>
`;

  writeFileSync(builtIndexPath, appShellHtml, 'utf8');
  writeFileSync(resolve(distDir, '404.html'), appShellHtml, 'utf8');
}

const routeManifest = [
  '/',
  '/index',
  '/index_ico',
  '/index_memecoin',
  '/index_pepecoin',
  '/blog',
  '/blog_details',
  '/contact',
  '/sign_in',
  '/sign_up'
];

writeFileSync(resolve(distDir, 'routes.json'), JSON.stringify(routeManifest, null, 2), 'utf8');
