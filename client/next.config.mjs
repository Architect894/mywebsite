/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192, // Adjust this value if you want to inline SVGs below a certain size
                        name: '[name].[ext]'
                    }
                },
                'svgo-loader' // Optional if you want to optimize SVGs
            ]
        });
        return config
    },
};

export default nextConfig;