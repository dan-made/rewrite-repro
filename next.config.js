const config = {
    async rewrites() {
        return [
            {
                // destination: `https://madeincookware.com/:path*`,
                destination: '/shopify',
                has: [{ key: 'x-forwarded-for', type: 'header', value: "^.*[13579abc]$" }],
                source: `/:path*`,
            },
            {
                // destination: `https://kitchen.madeincookware.com/:path*`,
                destination: '/headless',
                has: [{ key: 'x-forwarded-for', type: 'header', value: "^.*[02468def]$" }],
                source: `/:path*`,
            },
            {
                // destination: `https://example.com/:path*`,
                destination: '/fallback',
                source: '/:path*',
            },
        ]
    } 
}

module.exports = config
