/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // EXACTO /citliyamed
      {
        source: "/citliyamed",
        destination: "https://citliyamed.vercel.app/",
      },
      // TODO lo que cuelgue de /citliyamed/...
      {
        source: "/citliyamed/:path*",
        destination: "https://citliyamed.vercel.app/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
