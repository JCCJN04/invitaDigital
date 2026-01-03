/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      { source: "/citliyamed", destination: "https://citliyamed.vercel.app/" },
      { source: "/citliyamed/:path*", destination: "https://citliyamed.vercel.app/:path*" },
    ];
  },
};
