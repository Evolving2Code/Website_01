import type { ImageMetadata } from 'astro';
import type { PhotoName } from './photos';

// Photos saved in src/assets/photos/, keyed by slot name (file name without
// its extension, lowercased).
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
);

const bySlot = new Map(
  Object.entries(files).map(([path, load]) => [
    path.split('/').pop()!.replace(/\.[^.]+$/, '').toLowerCase(),
    load,
  ]),
);

export const hasPhoto = (name: PhotoName) => bySlot.has(name);

export async function loadPhoto(name: PhotoName) {
  const load = bySlot.get(name);
  return load ? (await load()).default : undefined;
}
