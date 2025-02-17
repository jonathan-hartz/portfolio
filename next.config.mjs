/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  redirects,
  images: {
    remotePatterns: [],
  },
};

export async function redirects() {
  return [
    {
      source: "/",
      destination: "/portfolio",
      permanent: true,
    },
    {
      source: "/:path*", // Catch all paths
      has: [
        {
          type: "host",
          value: "www.jonathan-hartz.dev",
        },
      ],
      destination: "https://jonathan-hartz.dev/:path*",
      permanent: true,
    },
  ];
}

export default nextConfig;
