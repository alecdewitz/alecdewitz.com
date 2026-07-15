import { ImageResponse } from "next/og";

export const alt = "Alec Dewitz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#ffffff",
          color: "#111111",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: 24,
            borderBottom: "2px solid #111111",
            fontSize: 18,
          }}
        >
          <span>Alec Dewitz</span>
          <span style={{ color: "#767676" }}>San Francisco, CA</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              maxWidth: 760,
              fontSize: 76,
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "-0.05em",
            }}
          >
            CTO at Testudo.
          </div>
          <div style={{ color: "#767676", fontSize: 24 }}>
            CTO at Testudo
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 22,
            borderTop: "1px solid #d8d8d8",
            color: "#767676",
            fontSize: 17,
          }}
        >
          <span>San Francisco</span>
          <span>alecdewitz.com</span>
        </div>
      </div>
    ),
    size,
  );
}
