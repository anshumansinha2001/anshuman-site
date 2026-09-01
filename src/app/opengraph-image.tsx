import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Anshuman Sinha — SEO Specialist & Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(
    join(process.cwd(), "public", "anshuman-sinha.jpg"),
  );
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#07080a",
          position: "relative",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -260,
            left: -200,
            width: 760,
            height: 760,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(201,242,77,0.30) 0%, rgba(201,242,77,0.05) 45%, rgba(7,8,10,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -280,
            right: -160,
            width: 720,
            height: 720,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(77,224,192,0.24) 0%, rgba(77,224,192,0.05) 45%, rgba(7,8,10,0) 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "72px 80px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 660 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontSize: 20,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#c9f24d",
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 9999,
                  background: "#c9f24d",
                }}
              />
              SEO Specialist &amp; Engineer
            </div>

            <div
              style={{
                marginTop: 28,
                fontSize: 86,
                lineHeight: 1.02,
                letterSpacing: -3,
                color: "#f4f5f7",
                fontWeight: 600,
              }}
            >
              Anshuman Sinha
            </div>

            <div
              style={{
                marginTop: 24,
                fontSize: 28,
                lineHeight: 1.45,
                color: "#98a0aa",
              }}
            >
              Technical SEO · Programmatic SEO · AEO / GEO · AI Automation
            </div>

            <div
              style={{
                marginTop: 42,
                display: "flex",
                gap: 14,
              }}
            >
              {["Bengaluru, India", "2+ years", "10x lead growth"].map((t) => (
                <div
                  key={t}
                  style={{
                    display: "flex",
                    border: "1px solid #1c2027",
                    borderRadius: 9999,
                    padding: "10px 20px",
                    fontSize: 20,
                    color: "#98a0aa",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: 320,
              height: 320,
              borderRadius: 40,
              overflow: "hidden",
              border: "1px solid #1c2027",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoSrc}
              alt=""
              width={320}
              height={320}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #c9f24d, #4de0c0, #07080a)",
          }}
        />
      </div>
    ),
    size,
  );
}
