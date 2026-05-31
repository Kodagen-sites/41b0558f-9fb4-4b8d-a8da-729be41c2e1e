import manifest from "@/content/asset-manifest.json";
import frames from "@/content/frames-manifest.json";
import { resolveImage } from "@/lib/image-fallback";

const images = (manifest.images ?? {}) as Record<string, string>;

/**
 * Resolve an image slot (e.g. "service-capital") to its CDN URL from the
 * asset manifest. Falls back to a brand-gradient data URL when a slot is
 * missing — service-technology depleted credits mid-build, so it relies on
 * this fallback rather than shipping a broken slot.
 */
export function asset(slot: string, keyword?: string): string {
  return resolveImage({
    src: images[slot],
    industry: "consulting",
    keyword: keyword ?? slot,
    brandColor: "#3f5e3a",
  });
}

export const heroFrames = {
  frameCount: frames.frameCount as number,
  pattern: (frames.frameUrlTemplate as string) ?? "/frames/frame-{n}.jpg",
  padLength: 4,
};

export const ogImage = images["og-image"] ?? undefined;
