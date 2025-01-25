'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1fe89e272ff3ad925ff9f53101a8adae",
"assets/AssetManifest.bin.json": "f54691e253d2f6e43526d9c9164438fc",
"assets/AssetManifest.json": "1ab0e4cec48cb0714a032f008494c8e3",
"assets/assets/audio/alarm1.mp3": "03215ef29ae0c09e1875ce384dbbb70c",
"assets/assets/audio/alarm2.mp3": "adc16ba0153ccaa212257cfeb01963e8",
"assets/assets/images/Brazil.png": "4f66444228c57ee0a5dda66918f6b404",
"assets/assets/images/buffer.gif": "fdd8709bd2e7626d68d0bcb85888bc25",
"assets/assets/images/buffering.gif": "bd5c8247cd4838f280ea241ca72dec4b",
"assets/assets/images/hotel1.png": "7bc5863bf4c0ad1b33abc2466df8efa7",
"assets/assets/images/hotel2.png": "f823d97ebebe382cafaf9a149653da0a",
"assets/assets/images/hotel3.png": "bee99731f623bad1086e5a8f86775abc",
"assets/assets/images/hotel4.png": "9cbbb7015751f96ddf24938f0c1d0d1e",
"assets/assets/images/hotel5.png": "7f5e1bdd642c7f902316b6bd389c5467",
"assets/assets/images/hotel6.png": "93c0184e91169e5979bc621f118f595f",
"assets/assets/images/iep1.png": "a22f66cd7a54bed30bfbb382aa3941d4",
"assets/assets/images/iep2.png": "8a1ca62af8b07f7c99868e767f2680df",
"assets/assets/images/Korea.png": "2ce783ebb4ad03d2e339b0139b44d107",
"assets/assets/images/shuttle_bus.png": "2892f889fe2a0814cd7a8a1dcc6253bb",
"assets/assets/images/Spain.png": "16120402be1e4022f97b4835eac3a6ac",
"assets/assets/logo.png": "b359d7f4f83bd18fcfd61c3b62314866",
"assets/assets/sample.pdf": "4903257498e1f6cdff202406f298f3cb",
"assets/FontManifest.json": "a27150d233e20c5c5d64129919d39a7a",
"assets/fonts/MaterialIcons-Regular.otf": "7e8460a86e2f2635de2a69932f7fcfab",
"assets/NOTICES": "e5781c7c7b5eaa3a7add8d953f0f48e4",
"assets/packages/alarm/assets/long_blank.mp3": "d632dd58e2137a2e67849c108d5eb4b6",
"assets/packages/alarm/assets/not_blank.mp3": "71ac239a121767241ccfcc1b625d44e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6edf3715253800304fc0e2fdadcd630e",
"assets/packages/hugeicons/lib/fonts/hgi-stroke-rounded.ttf": "7b7e29353cabc1555d2720eb496b805e",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "d1ee6ccd3369a12d3ddd1a7d35b4e513",
"canvaskit/canvaskit.wasm": "c47f2490643e54daa144f61f3d753385",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e3dc58952b91cdfaac8c98eb2a77e1fd",
"canvaskit/chromium/canvaskit.wasm": "adf5b249c0b10cb77b41e0f6aed56cb8",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "48f5755fe41624ab333ee4285fab9022",
"canvaskit/skwasm.wasm": "3a50c96f2c6c266925c5a3bec7db87e4",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "4b928f86ba105a3bc972bc4ab93502b7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a189b68a687a74b47d4a0a8ad0596e3c",
"/": "a189b68a687a74b47d4a0a8ad0596e3c",
"main.dart.js": "88d203f2c3dc7319f3fc461d18edd858",
"manifest.json": "be08062450ae1eca95eb096aec34015d",
"version.json": "98920a23573114dfd35016f4a32d1b38"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
