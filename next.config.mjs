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
  ];
}

export default nextConfig;
