module.exports = {
  swDest: 'dist/org/service-worker.js',
  clientsClaim: true,
  skipWaiting: true,
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
