const IS_PROD = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
  publicRuntimeConfig: {
    API_PREFIX: IS_PROD ? '/backend/api' : '/api',
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    config.plugins.push(
      new webpack.DefinePlugin({
        'API_PREFIX': IS_PROD ? JSON.stringify('https://freeyeti.net/backend/api') : JSON.stringify('http://localhost:3000/api'),
      })
    );
    return config
  },
}

if (IS_PROD) {
  nextConfig.output = "standalone";
}

if (!IS_PROD) {
  nextConfig.rewrites = async () => {
    return [
      {
        source: '/api/:path*/',
        destination: 'http://localhost:8000/api/:path*/',
      },
      {
        source: '/media/:path*',
        destination: 'http://localhost:8000/media/:path*',
      }
    ]
  }
}

module.exports = nextConfig
