# Image guidelines

## 1. Available source images

Six generated PNG project images were originally supplied in the repository
under:

```text
public/mockimages/
```

The original files are now preserved under:

```text
assets/source-images/projects/
```

They are approved temporary project images for the current website version. Do not generate new images, do not use the hero banner as a project fallback, and do not add mock flags, mock modes, preview-only content, or visible mock disclaimers.

The initial rebuild review verified:

1. The input directory contained exactly six readable PNG files.
2. Every source filename and image dimension was recorded.
3. The filenames and visual content were inspected.
4. Each source image was mapped to one of the six approved project entries.
5. The mapping is reported in the pull request.

If filenames are ambiguous, use visual inspection and the project descriptions in `docs/PAGE_COPY.md`. Do not silently duplicate one image across projects.

## 2. Source and public output locations

The `public/mockimages/*.png` files were source assets supplied by the repository owner. The rebuild:

- preserved the original PNG files by moving them to `assets/source-images/projects/`;
- created optimized public WebP files under `public/images/projects/`;
- updated project data to reference only the final WebP paths;
- removed the now-empty `public/mockimages/` directory from the public output.

Do not delete the preserved sources under `assets/source-images/projects/`.

Final public files:

```text
public/images/projects/project-pvc-windows.webp
public/images/projects/project-aluminium-windows.webp
public/images/projects/project-entrance-door.webp
public/images/projects/project-balcony-doors.webp
public/images/projects/project-sliding-system.webp
public/images/projects/project-custom-window.webp
```

## 3. Required semantic mapping

Map one unique PNG to each project:

1. White PVC windows → `project-pvc-windows.webp`
2. Anthracite aluminium windows → `project-aluminium-windows.webp`
3. Aluminium entrance door → `project-entrance-door.webp`
4. White PVC balcony doors → `project-balcony-doors.webp`
5. Aluminium sliding system → `project-sliding-system.webp`
6. Special-shaped window → `project-custom-window.webp`

The project titles, cities, descriptions, and translated alt text are defined in `docs/PAGE_COPY.md`.

## 4. Output requirements

- Format: WebP
- Preferred aspect ratio: 3:2 landscape
- Maximum width: approximately 1600 px
- Quality: approximately 82
- Auto-rotate using source orientation
- Never upscale
- Strip metadata from public outputs
- Keep filenames lowercase kebab-case
- Preserve the original source PNGs outside `public/`

If a source is not exactly 3:2, create the public image with a visually sensible 3:2 crop while preserving the untouched PNG source. Prefer subject-aware or attention-based cropping and verify that the window or door remains the clear focus.

## 5. Optimization script

Create `scripts/optimize-images.mjs` using `sharp`.

Expected behavior:

- accept a source directory and output directory;
- support JPG, JPEG, PNG, and WebP input;
- auto-rotate;
- never upscale;
- create a consistent 3:2 WebP output when requested;
- use maximum width around 1600 px and quality around 82;
- remove metadata from public output;
- create output directories;
- preserve source files;
- print source, output, dimensions, and byte sizes;
- return a non-zero exit code for missing, unreadable, unsupported, or corrupt input.

Document an invocation equivalent to:

```bash
npm run images:optimize -- assets/source-images/projects public/images/projects
```

The agent may first normalize the six source filenames in `assets/source-images/projects/` so the script produces the required final names.

## 6. Rendering

- Project cards: consistent 3:2 containers with `object-cover`.
- Lightbox: `object-contain`, preserving the complete optimized image.
- The home, Projects, About, Contacts, Privacy and Cookies heroes, plus the
  Open Graph image, use the optimized `public/images/hero/hero-banner.webp`.
- Windows and Doors keep their product-specific project images in the hero.
- Preserve its original source at
  `assets/source-images/hero/hero-banner.png`.
- Keep the wide source composition for Open Graph; the existing hero container
  may crop it responsively with `object-cover`.
- Use translated alt text from `docs/PAGE_COPY.md`.
- Never use filenames as alt text.
- Avoid loading all lightbox images eagerly.

## 7. Review requirements

Before completion:

- verify all six final WebP files exist;
- verify every project references a unique final file;
- verify no project image path points to `public/mockimages`;
- verify the cards crop correctly on desktop and mobile;
- verify the lightbox shows the full image;
- verify generated public files are materially smaller than the source PNGs where practical;
- include the source-to-output mapping in the final report.
