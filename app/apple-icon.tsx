import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const font = await readFile(
    path.join(
      process.cwd(),
      "node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff",
    ),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#2d6a4f",
          color: "#fbfbf8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 160,
          fontFamily: "Instrument Serif",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          paddingBottom: 18,
        }}
      >
        a
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: font, style: "normal", weight: 400 },
      ],
    },
  );
}
