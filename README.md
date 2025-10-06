# Keepsake Kreators

A modern, responsive Next.js website for a photo booth business. Built with Tailwind CSS.

## Requirements
- Node.js 18+

## Getting Started
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Add Images
Place files under `public/`:
- `public/logo.jpg`
- `public/packages.jpg`
- `public/gallery/image1.jpg` ... `image8.jpg`

Recommended: compress JPEGs to ~1600px wide, quality ~75.

## Build
```bash
npm run build
npm start
```

## Static Export (optional)
```bash
npm run export
```
This outputs `out/` which can be uploaded to static hosting. For full Next.js features, deploy the Node build (`.next`) on a Node-compatible host.

## Namecheap Hosting Notes
- For Stellar shared hosting (static): use `npm run export` and upload `out/` to `public_html/`.
- For Node app hosting: use Namecheap's Node app with `npm run build && npm start` command.

## Customize
- Update phone placeholder in `components/Contact.tsx`.
- Edit content in `components/*` and `app/page.tsx`.
