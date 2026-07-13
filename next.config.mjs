/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', 
      },
      {
        protocol: 'https',
        // Make sure this matches your exact pub-xxx... domain from your .env file
        hostname: 'pub-bfc2a263b2ef4af5af9aa7eeefd308fd.r2.dev', 
      },
    ],
  },
};

// CHANGE THIS LINE: Swap module.exports for export default
export default nextConfig;