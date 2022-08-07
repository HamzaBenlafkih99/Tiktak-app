/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["st.depositphotos.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
