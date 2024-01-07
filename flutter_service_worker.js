'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/Asset/Data/adhkar.json": "06182312fe19231c19fbb288f506e4f2",
"assets/Asset/Data/AI-Hussein.json": "399e51e0008e8872b00d867e0cccc6ba",
"assets/Asset/Data/Al-Baqir.json": "a7e80497cab5d2fd1b81f781fcd67146",
"assets/Asset/Data/Al-Hassan.json": "1818ad6e21c011b555064fecb23585fc",
"assets/Asset/Data/Al-Kazem.json": "20536191e8676abfc8e874c0723e8a8a",
"assets/Asset/Data/aleaskariu.json": "0c2137fda33576f7d028b7e342a4d29b",
"assets/Asset/Data/alhadi.json": "72ffc382e1942c16406b8247112c037b",
"assets/Asset/Data/aljawad.json": "083b87034bd37fce22d0ca54f1ef1129",
"assets/Asset/Data/alrida.json": "65a4e3de282b5da2c310530f30856437",
"assets/Asset/Data/alsaadiq.json": "d58f64c3b793c8b8abbfc4a5b2af3a84",
"assets/Asset/Data/alsajaad.json": "794233fd1ea23432385788ac054e4fb4",
"assets/Asset/Data/dataDoa.json": "f33ec9f3a7eab11237e8deb59a0cf135",
"assets/Asset/Data/dataDoa3.json": "7d409d6337a6a2ab032db4d7e64869c6",
"assets/Asset/Data/dataDon2.json": "3c3ff7c986ffd4dae9b9357d4fb4fe71",
"assets/Asset/Data/dataQuran.json": "4bcd35aee560f1ec55a71db7ec9e5e0e",
"assets/Asset/Data/Prophet_Muhammad.json": "4348bcd0d92eb2577487ff14c3ec6e8c",
"assets/Asset/fonts/Al-QuranAlKareem.ttf": "60b9f9d3674a0dd451e7a483edaafad3",
"assets/Asset/fonts/ar.ttf": "250374d460315bb98c30627f1dc7ca2b",
"assets/Asset/image/1.svg": "c9da37a209960106d6c3407031b95408",
"assets/Asset/image/3.svg": "5ce110a6549e017df19f279e2387e37f",
"assets/Asset/image/4.svg": "a2738f1ccb0d148bb91356842fdb6ae9",
"assets/Asset/image/6.svg": "73764b3ed315f60480c579e837abd45c",
"assets/Asset/image/8.svg": "73c3a10b54061dfe4cb6ff135a7e9471",
"assets/Asset/image/Alpsmala.svg": "d0aec937d3980e5888e2adc8a70a27a8",
"assets/Asset/image/cloud-computing%25201.png": "c8412217d5f69e7638a3ed37433e8d79",
"assets/Asset/image/cloudy-night.png": "80c5ccb368498b2a6990e9ae2a5fab57",
"assets/Asset/image/icon.png": "fae45973dab7467ada1d36942512e91e",
"assets/Asset/image/location.png": "0c94a8b522daa0a5bc3c29467053f9be",
"assets/Asset/image/Logo.png": "a9ca0f978a7e07376c90eea5e4f107ad",
"assets/Asset/image/Qr.svg": "dccdde31c40df41b4fd362a501beb0bb",
"assets/Asset/image/st.png": "0a67163fcbee19ebf35d9dfb2a12f0e5",
"assets/Asset/image/sun.png": "6ec0db48489dbe6bc3801a5d41d30966",
"assets/Asset/image/sunrise.png": "2d2abcee4e197ff39c4c54603c7c843f",
"assets/Asset/image/Time.png": "0aab54a33eebbd7f3ade5883bfc20290",
"assets/Asset/image/Vector.svg": "c75c15b5800cbdfdb20b56f471a98f2d",
"assets/AssetManifest.bin": "a1a72fb749163e898462eca64cabef38",
"assets/AssetManifest.json": "62a77cc0001df7967431d3df5f4cff67",
"assets/FontManifest.json": "9cd71691d73501d83bc94667bb39c150",
"assets/fonts/MaterialIcons-Regular.otf": "5fce74a79347f4c39ae2c92658f3978a",
"assets/NOTICES": "c131ad72efd51aa4c8647c8ca8717509",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2b7636d2bc33b99689a33fb89bd81e80",
"/": "2b7636d2bc33b99689a33fb89bd81e80",
"main.dart.js": "6166872106e2eccec8ebb2c027d3efbb",
"manifest.json": "209b2aec6fe4d75958e12ade5f159123",
"splash/img/dark-1x.png": "c2abeed0434842472014f8f7d42f45ce",
"splash/img/dark-2x.png": "f9b73a615d357ef3e6c9af8de999cc4c",
"splash/img/dark-3x.png": "9b5a15f9da2bac14ac60a3dc7ba17107",
"splash/img/dark-4x.png": "2b0139518777508e57bc1a78ddc045e2",
"splash/img/light-1x.png": "c2abeed0434842472014f8f7d42f45ce",
"splash/img/light-2x.png": "f9b73a615d357ef3e6c9af8de999cc4c",
"splash/img/light-3x.png": "9b5a15f9da2bac14ac60a3dc7ba17107",
"splash/img/light-4x.png": "2b0139518777508e57bc1a78ddc045e2",
"version.json": "4c0518c0a394b6c6d682d7fd59aeec9d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
