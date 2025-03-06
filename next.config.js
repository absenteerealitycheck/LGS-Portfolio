/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/absenteerealitycheck/absenteerealitycheck.github.io/*",
        search: "",
      },
    ],
  },
};

module.exports = nextConfig;
