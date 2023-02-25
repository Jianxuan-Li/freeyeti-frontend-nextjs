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
  async rewrites() {
    return [
      {
        source: '/api/:path*/',
        destination: IS_PROD ? '/backend/api/:path*/' : 'http://localhost:8000/api/:path*/',
      },
    ]
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    config.plugins.push(
      new webpack.DefinePlugin({
        'API_PREFIX': IS_PROD ? JSON.stringify('/backend/api') : JSON.stringify('/api'),
      })
    );
    return config
  },
}

module.exports = nextConfig
