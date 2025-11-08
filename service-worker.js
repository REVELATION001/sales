self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('sale-store').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './products.js',
        './products.json',
        './about.html',
        './contact.html',
        './products.html'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
