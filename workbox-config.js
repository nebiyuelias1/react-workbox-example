module.exports = {
  globDirectory: 'dist/org',
  swDest: 'dist/org/service-worker.js',
  clientsClaim: true,
  skipWaiting: true,
  offlineGoogleAnalytics: true,
  cleanupOutdatedCaches: true,
  navigateFallback: '/offline', // Replace with the correct URL of your offline page route
  navigateFallbackDenylist: [new RegExp('^/_'), new RegExp('/[^/?]+\\.[^/]+$')],
  runtimeCaching: [
    {
      urlPattern: /\/assets\/fallback\.html$/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'html-cache',
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    // Add other routes for precaching other assets
  ],
};
