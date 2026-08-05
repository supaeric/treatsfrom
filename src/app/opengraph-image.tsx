import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Treats From: international snack boxes shipped within North America";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F5F0E6",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#6B6355" }}>
          IMPORTED IN BULK · PACKED IN OHIO · SHIPPED IN 2-4 DAYS
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", fontSize: 118, fontWeight: 800, color: "#17150F", lineHeight: 1 }}>
          <span>TREATS FROM&nbsp;</span>
          <span style={{ backgroundColor: "#F2A900", padding: "4px 20px" }}>
            SOUTH AFRICA
          </span>
        </div>
        <div style={{ display: "flex", height: 18, width: "100%", background: "repeating-linear-gradient(-45deg, #C8102E 0 18px, #F5F0E6 18px 36px, #003DA5 36px 54px, #F5F0E6 54px 72px)" }} />
      </div>
    ),
    size
  );
}
