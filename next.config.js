module.exports = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['radx-images.s3.amazonaws.com'],
  },
  async redirects() {
    return [
      {
        source: '/:slug*',
        destination: 'https://radx-hub.nih.gov/info',
        permanent: true,
      },
    ]
  },
}
