import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abdur Rozaq Fakhruddin",
    short_name: "Abdur Rozaq F",
    description:
      "Website Real Estate, landing page, residential, commercial, industrial, raw land, and special use",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
