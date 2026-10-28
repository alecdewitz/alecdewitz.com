import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { summary } from "./_data/portfolio";

export const alt = "Alec Dewitz, CTO at Testudo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const newsreader = await readFile(join(process.cwd(), "app/_fonts/Newsreader-Medium.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#c4f000",
          color: "#141414",
          fontFamily: "Newsreader",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 120, lineHeight: 1, letterSpacing: "-0.02em" }}>
            Alec Dewitz
          </div>
          <div style={{ fontSize: 40, lineHeight: 1.3, maxWidth: 820, opacity: 0.75 }}>
            {summary}
          </div>
        </div>
        <div style={{ fontSize: 32, opacity: 0.75 }}>alecdewitz.com</div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Newsreader", data: newsreader, style: "normal", weight: 500 }],
    },
  );
}
