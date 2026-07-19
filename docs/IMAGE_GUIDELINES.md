# Image guidelines

## Published client work

The website publishes the owner-supplied work photographs as optimized WebP
files under:

```text
public/images/works/windows/
public/images/works/doors/
```

The temporary input folders `tmp/window/` and `tmp/door/` are ignored by Git.
They are source input only: application code must never reference them, the
original JPG files must not be committed or copied to `public/`, and the
owner's files must not be deleted.

The earlier generated project sources remain preserved outside `public/` under
`assets/source-images/projects/`. Their optimized WebP outputs may remain in
`public/images/projects/` for repository history, but current pages and project
data use the real-work images.

## Processing requirements

For every client photograph selected for publication:

- apply EXIF orientation before resizing;
- preserve the original aspect ratio;
- resize to a maximum width of 1600 px without upscaling;
- encode WebP at approximately quality 82;
- strip EXIF, GPS, XMP, IPTC, ICC and other metadata;
- use lowercase ASCII kebab-case filenames;
- record intrinsic width and height in `src/content/images.ts`;
- reuse one optimized output wherever the same source is displayed.

Cards use a fixed 3:2 container with `object-cover` and an image-specific
`object-position`. Lightboxes use `object-contain`. Heroes retain the compact
right-side 3:2 card, are prioritized, and use the image-specific position.
Project and gallery images remain lazy-loaded by `next/image`.

Run the automated output audit after a build:

```bash
npm run images:verify
```

It verifies public image format and filenames, dimensions, embedded metadata,
temporary source references, and the absence of JPG/PNG files in `out`.

## Source-to-output mapping

| Temporary source                   | Public WebP                                                              |
| ---------------------------------- | ------------------------------------------------------------------------ |
| `tmp/door/Adema do Meio.jpg`       | `public/images/works/doors/adema-do-meio-porta-arqueada-aluminio.webp`   |
| `tmp/door/Alegria.jpg`             | `public/images/works/doors/alegria-porta-entrada-aluminio.webp`          |
| `tmp/window/Almoinhas Velhas2.jpg` | `public/images/works/doors/almoinhas-velhas-porta-correr-aluminio.webp`  |
| `tmp/door/Diogo Velasques.jpg`     | `public/images/works/doors/diogo-velasques-porta-envidracada-pvc.webp`   |
| `tmp/door/Infante Santo.jpg`       | `public/images/works/doors/infante-santo-porta-correr-aluminio.webp`     |
| `tmp/door/Macieiras.jpg`           | `public/images/works/doors/macieiras-porta-entrada-aluminio.webp`        |
| `tmp/door/Misericordia.jpg`        | `public/images/works/doors/misericordia-porta-ogival-pvc.webp`           |
| `tmp/door/door1.jpg`               | `public/images/works/doors/porta-arqueada-envidracada-pvc.webp`          |
| `tmp/door/door2.jpg`               | `public/images/works/doors/porta-correr-aluminio-terraco.webp`           |
| `tmp/window/Almoinhas Velhas.jpg`  | `public/images/works/windows/almoinhas-velhas-janela-fixa-aluminio.webp` |
| `tmp/window/Casal do Paúl.jpg`     | `public/images/works/windows/casal-do-paul-envidracado-aluminio.webp`    |
| `tmp/window/Diogo Velasques.jpg`   | `public/images/works/windows/diogo-velasques-janelas-pvc.webp`           |
| `tmp/window/Egas Moniz.jpg`        | `public/images/works/windows/egas-moniz-janelas-pvc.webp`                |
| `tmp/window/Santa Rita.jpg`        | `public/images/works/windows/santa-rita-envidracado-aluminio.webp`       |
| `tmp/window/Sobreda.jpg`           | `public/images/works/windows/sobreda-janela-pvc-portadas.webp`           |

The owner-supplied filenames differed slightly from the originally described
suffixes. Folder context and visual inspection were used to map the 15 actual
files without duplicating outputs.

## Content and data rules

Project image paths, intrinsic dimensions, and crop positions live in
`src/content/images.ts`. Project material assumptions, display orders, and
gallery membership live in `src/content/projects.ts`. Localized titles,
descriptions, and alt text remain synchronized in the Portuguese and English
development dictionaries.

Material values are limited to `PVC` and `Alumínio`. Every new location-based
project carries the non-rendered flag
`materialNeedsClientConfirmation: true`. Unnamed `door1` and `door2` are
product-gallery examples only and must never acquire locations or project
records.

Visible manufacturer or protective-film branding in an original photograph is
acceptable. Do not remove, blur, name, promote, or infer anything from it.
