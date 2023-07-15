module.exports = {
  globDirectory: 'dist/org',
  globPatterns: ['**/*.{txt,ico,html,js}'],
  swDest: 'dist/org/service-worker.js',
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|gif|svg|woff|woff2)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
        },
      },
    },
  ],
  offlineGoogleAnalytics: true,
  cleanupOutdatedCaches: true,
  navigateFallback: '/offline', // Replace with the correct URL of your offline page route
  navigateFallbackDenylist: [new RegExp('^/_'), new RegExp('/[^/?]+\\.[^/]+$')],
  // Customize the following to match your project structure and offline page requirements
  additionalManifestEntries: [
    {
      url: '/offline', // Replace with the correct URL of your offline page route
      revision: null,
    },
  ],
};
