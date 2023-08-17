/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname:
                    "dev-cryptanz-private-testing.s3.us-east-1.amazonaws.com",
            },
        ],
    },
};

module.exports = nextConfig;
