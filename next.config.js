/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        // https://ik.imagekit.io/rayshold/dotfiles/startpage/background.webp?updatedAt=1698519594804
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/rayshold/dotfiles/startpage/**",
      },
    ],
  },
};

module.exports = nextConfig;
