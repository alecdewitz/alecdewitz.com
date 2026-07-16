import { ImageResponse } from "next/og";

export const alt = "AD monogram";
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
          padding: 36,
          background: "#ffffff",
          color: "#111111",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #d7d7d7",
            fontSize: 360,
            fontWeight: 500,
            letterSpacing: "-0.07em",
            lineHeight: 1,
          }}
        >
          AD
        </div>
      </div>
    ),
    size,
  );
}
