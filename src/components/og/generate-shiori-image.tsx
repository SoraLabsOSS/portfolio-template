import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { Shiori } from "@/components/og/shiori";

export const ogImageAlt = "Axyl — Building interfaces that feel alive";
export const ogImageSize = {
  height: 630,
  width: 1200,
};
export const ogImageContentType = "image/png";

export async function generateShioriOgImage() {
  const logoData = await readFile(join(process.cwd(), "public/og-avatar.jpg"));
  const logoSrc = `data:image/jpeg;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    <Shiori
      background="#F9F7F2"
      brand="Axyl"
      brandColor="#111111"
      logo={logoSrc}
      title={"Building interfaces\nthat feel alive"}
      titleColor="#8D8076"
    />,
    { ...ogImageSize }
  );
}
