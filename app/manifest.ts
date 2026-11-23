
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aşk yeniden başlar",
    short_name: "Aşk yeniden",
    description: "Online şüşə oyunu",
    start_url: "/",
    display: "standalone",
    background_color: "#120b18",
    theme_color: "#120b18",
    lang: "az"
  };
}
