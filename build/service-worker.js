importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-routing.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

self.__precacheManifest = (self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(
  workbox.routing.createHandlerBoundToURL("/index.html"), {
    ignoreURLParametersMatching: [/^\/_/, /\/[^/]+\.[^/]+$/],
  }
);