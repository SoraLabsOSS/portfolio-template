export interface ShioriProps {
  background: string;
  brand: string;
  brandColor: string;
  logo: string;
  title: string;
  titleColor: string;
}

export const Shiori = ({
  title,
  background,
  titleColor,
  logo,
  brand,
  brandColor,
}: ShioriProps) => (
  <div
    style={{
      backgroundColor: background,
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: "60px",
      position: "relative",
      width: "100%",
    }}
  >
    {/* Satori/ImageResponse only supports <img>, not next/image */}
    {/* biome-ignore lint/performance/noImgElement: OG ImageResponse requires native img */}
    <img
      alt=""
      height={96}
      src={logo}
      style={{
        borderRadius: "50%",
        objectFit: "cover",
      }}
      width={96}
    />

    <div
      style={{
        alignItems: "center",
        bottom: "60px",
        display: "flex",
        gap: "48px",
        left: "60px",
        position: "absolute",
        right: "60px",
      }}
    >
      <div
        style={{
          color: brandColor,
          fontSize: "64px",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
        }}
      >
        {brand}
      </div>

      <div
        style={{
          color: titleColor,
          display: "flex",
          flexDirection: "column",
          fontSize: "64px",
          fontWeight: 500,
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
          whiteSpace: "pre-line",
        }}
      >
        {title}
      </div>
    </div>
  </div>
);
