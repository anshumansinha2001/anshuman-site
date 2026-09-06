import type { MetadataRoute } from "next";
import { profile } from "@/lib/content";
import { siteDescription } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} | SEO Specialist & Engineer`,
    short_name: profile.name,
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#07080a",
    theme_color: "#07080a",
    icons: [
      {
        src: "/anshuman-sinha.jpg",
        sizes: "748x748",
        type: "image/jpeg",
      },
    ],
  };
}
