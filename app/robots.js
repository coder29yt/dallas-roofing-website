export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.dallasroofing.org/sitemap.xml",
    host: "https://www.dallasroofing.org",
  };
}
