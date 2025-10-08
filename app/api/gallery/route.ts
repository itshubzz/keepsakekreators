import { NextResponse } from "next/server";
import { readdir } from "node:fs/promises";
import path from "node:path";

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");
const ALLOWED = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

export async function GET() {
  try {
    const files = await readdir(GALLERY_DIR, { withFileTypes: true });
    const images = files
      .filter((f) => f.isFile() && ALLOWED.has(path.extname(f.name).toLowerCase()))
      .map((f) => `/gallery/${f.name}`)
      .sort();
    return NextResponse.json({ images });
  } catch (e) {
    return NextResponse.json({ images: [] });
  }
}


