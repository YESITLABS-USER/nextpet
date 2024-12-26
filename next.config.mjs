/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["admin.nextpetapp.com", "frontend.nextpetapp.com"], // Add the allowed domain here
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  basePath: '/nextpet', // Specify the subpath
};

export default nextConfig;
