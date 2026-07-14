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
        hostname: 'photos.srisiddhiacademyofart.in', 
      },
    ],
  },
};

// CHANGE THIS LINE: Swap module.exports for export default
export default nextConfig;