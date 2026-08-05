import {
  generateShioriOgImage,
  ogImageAlt,
  ogImageContentType,
  ogImageSize,
} from "@/components/og/generate-shiori-image";

export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function TwitterImage() {
  return generateShioriOgImage();
}
