/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["st.depositphotos.com"],
  },
};

module.exports = nextConfig;
