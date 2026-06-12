import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 20,
          background: "transparent",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: 900,
          fontFamily: "sans-serif",
          letterSpacing: "-1px",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <span>VG</span>
          <div
            style={{
              width: 6,
              height: 6,
              backgroundColor: "#8b5cf6", // Primary violet color
              marginLeft: 1,
              marginBottom: 4,
              borderRadius: 1,
            }}
          />
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
