/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true, // Ativa o suporte nativo ao styled-components
  },
};

module.exports = nextConfig;
