# Coinpay SaaS Frontend

This project converts the original Coinpay static template into a React + Vite single-page frontend with clean client-side routes.

## Stack

- React
- React Router
- Vite SPA build
- Existing `assets/` and `demo_assets/` served unchanged

## Routes

- `/`
- `/index`
- `/index_ico`
- `/index_memecoin`
- `/index_pepecoin`
- `/blog`
- `/blog_details`
- `/contact`
- `/sign_in`
- `/sign_up`

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Notes

- The app now uses a single `index.html` entry and React Router for navigation.
- Legacy `.html` links inside the preserved template markup are converted to clean internal routes at render time.
- All original CSS, JS, fonts, icons, and images remain in `assets/` and `demo_assets/`.
- `index_memecoin` and `index_pepecoin` use the available home template because those source HTML pages were not included in the provided files.
