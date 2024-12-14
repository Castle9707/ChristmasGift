/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css",
      },
    ],
  },
};

export default nextConfig;
