/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    // dangerouslyAllowSVG: true,
    // contentDispositionType: 'attachment',
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // formats: ['image/webp'],
  }
};

export default nextConfig;
