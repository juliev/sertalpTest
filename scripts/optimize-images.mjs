import { mkdir, readdir, stat } from "node:fs/promises";
import { extname, join, parse } from "node:path";
import process from "node:process";
import sharp from "sharp";

const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const [sourceDirectory, outputDirectory] = process.argv.slice(2);

if (!sourceDirectory || !outputDirectory) {
  console.error(
    "Usage: npm run images:optimize -- <source-directory> <output-directory>",
  );
  process.exit(1);
}

const safeName = (filename) =>
  parse(filename)
    .name.normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

try {
  const entries = await readdir(sourceDirectory, { withFileTypes: true });
  const files = entries.filter((entry) => entry.isFile());

  if (files.length === 0) {
    throw new Error(`No image files found in ${sourceDirectory}`);
  }

  const unsupported = files.filter(
    (entry) => !supportedExtensions.has(extname(entry.name).toLowerCase()),
  );
  if (unsupported.length > 0) {
    throw new Error(
      `Unsupported files: ${unsupported.map((entry) => entry.name).join(", ")}`,
    );
  }

  await mkdir(outputDirectory, { recursive: true });
  const outputNames = new Set();

  for (const entry of files) {
    const baseName = safeName(entry.name);
    if (!baseName) {
      throw new Error(`Unable to create a safe filename for ${entry.name}`);
    }

    const outputName = `${baseName}.webp`;
    if (outputNames.has(outputName)) {
      throw new Error(`Duplicate output filename: ${outputName}`);
    }
    outputNames.add(outputName);

    const sourcePath = join(sourceDirectory, entry.name);
    const outputPath = join(outputDirectory, outputName);
    const image = sharp(sourcePath, { failOn: "error" }).rotate();
    const metadata = await image.metadata();

    if (!metadata.width || !metadata.height) {
      throw new Error(`Unable to read image dimensions for ${sourcePath}`);
    }

    const width = Math.min(metadata.width, 1600);
    const height = Math.round((width * 2) / 3);

    const result = await image
      .resize({
        width,
        height,
        fit: "cover",
        position: sharp.strategy.attention,
        withoutEnlargement: true,
      })
      .webp({ quality: 82 })
      .toFile(outputPath);

    const sourceStats = await stat(sourcePath);
    console.log(
      `${sourcePath} -> ${outputPath} (${result.width}x${result.height}, ${sourceStats.size} -> ${result.size} bytes)`,
    );
  }
} catch (error) {
  console.error(
    error instanceof Error
      ? `Image optimization failed: ${error.message}`
      : error,
  );
  process.exit(1);
}
