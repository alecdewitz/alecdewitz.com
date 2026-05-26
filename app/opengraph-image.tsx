import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Alec Dewitz — Applied AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(file: string) {
  return readFile(
    path.join(
      process.cwd(),
      "node_modules/@fontsource/instrument-serif/files",
      file,
    ),
  );
}

export default async function OpengraphImage() {
  const headline = "Alec Dewitz";
  const tagline = "Applied AI.";
  const subtitle = "CTO at Testudo · Insurance for the AI economy";
  const brand = "alecdewitz.com";

  const [serif, serifItalic] = await Promise.all([
    loadFont("instrument-serif-latin-400-normal.woff"),
    loadFont("instrument-serif-latin-400-italic.woff"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fbfbf8",
          color: "#1a1a1a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "84px 96px",
          fontFamily: "Instrument Serif, Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            color: "#6e6e73",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#2d6a4f",
            }}
          />
          {brand}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 176,
              lineHeight: 0.95,
              letterSpacing: "-0.035em",
              color: "#1a1a1a",
            }}
          >
            {headline}
          </div>
          <div
            style={{
              fontSize: 52,
              fontStyle: "italic",
              color: "#6e6e73",
              letterSpacing: "-0.01em",
            }}
          >
            {tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 26,
            color: "#1a1a1a",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          <div
            style={{
              width: 56,
              height: 1,
              background: "#2d6a4f",
            }}
          />
          {subtitle}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: serif,
          style: "normal",
          weight: 400,
        },
        {
          name: "Instrument Serif",
          data: serifItalic,
          style: "italic",
          weight: 400,
        },
      ],
    },
  );
}
