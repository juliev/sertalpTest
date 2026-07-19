import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const root = process.cwd();
const publicImages = path.join(root, "public", "images");
const sourceRoots = ["src"];
const allowedName = /^[a-z0-9][a-z0-9/-]*\.webp$/;

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const target = path.join(directory, entry.name);
      return entry.isDirectory() ? filesUnder(target) : [target];
    }),
  );
  return nested.flat();
}

const failures = [];
const imageFiles = await filesUnder(publicImages);

for (const file of imageFiles) {
  const relative = path.relative(publicImages, file);
  if (!allowedName.test(relative)) {
    failures.push(`Invalid public image filename or format: ${relative}`);
    continue;
  }

  const metadata = await sharp(file).metadata();
  if (!metadata.width || !metadata.height) {
    failures.push(`Missing dimensions: ${relative}`);
  }
  for (const field of ["exif", "xmp", "iptc", "icc"]) {
    if (metadata[field]) {
      failures.push(`Embedded ${field.toUpperCase()} metadata: ${relative}`);
    }
  }
}

for (const sourceRoot of sourceRoots) {
  for (const file of await filesUnder(path.join(root, sourceRoot))) {
    const fileStat = await stat(file);
    if (!fileStat.isFile()) continue;
    const contents = await readFile(file, "utf8");
    if (
      contents.includes("tmp/door/") ||
      contents.includes("tmp/window/") ||
      contents.includes("tmp/project/")
    ) {
      failures.push(`Temporary source referenced by application: ${file}`);
    }
  }
}

const outputDirectory = path.join(root, "out");
try {
  for (const file of await filesUnder(outputDirectory)) {
    if (/\.(?:jpe?g|png)$/i.test(file)) {
      failures.push(`Original raster format published: ${file}`);
    }
    if (file.includes(`${path.sep}tmp${path.sep}`)) {
      failures.push(`Temporary source published: ${file}`);
    }
  }
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(
  `Verified ${imageFiles.length} public WebP images: valid names, dimensions, and no EXIF/GPS or embedded metadata.`,
);
