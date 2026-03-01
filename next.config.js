/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      { source: "/citliyamed", destination: "https://citliyamed.vercel.app/" },
      { source: "/citliyamed/:path*", destination: "https://citliyamed.vercel.app/:path*" },
      { source: "/paulaxv", destination: "https://paula-sage.vercel.app/" },
      { source: "/paulaxv/_next/:path*", destination: "https://paula-sage.vercel.app/_next/:path*" },
      { source: "/paulaxv/:path*", destination: "https://paula-sage.vercel.app/:path*" },
    ];
  },
};
