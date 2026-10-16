/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Modern formats + responsive srcset, served by the built-in optimizer.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [96, 160, 256, 384, 480, 640],
    minimumCacheTTL: 2678400,
  },
  async headers() {
    return [
      {
        // Originals are content-stable; immutable = zero revalidation on repeat visits.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
