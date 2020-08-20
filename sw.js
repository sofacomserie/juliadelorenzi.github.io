"use strict";var CACHE_NAME="juliadelorenzi-0.0.0",CACHED_URLS=["/assets/js/site/scripts.js?v=0.1.0","/assets/scss/site/style.css?v=0.1.0","https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=swap","/assets/img/site/global/favicon.ico","/assets/img/site/global/transparent.png","/offline/index.html","/offline/image.jpg","/404.html","/404.gif"];// Cache on install
// Clear cache on activate
// Serve from Cache
self.addEventListener("beforeinstallprompt",function(a){a.userChoice.then(function(a){"dismissed"==a.outcome})}),self.addEventListener("install",function(a){self.skipWaiting(),a.waitUntil(caches.open(CACHE_NAME).then(function(a){return a.addAll(CACHED_URLS)}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){a.waitUntil(caches.keys().then(function(a){return Promise.all(a.filter(function(a){return a.includes("juliadelorenzi")&&a!==CACHE_NAME}).map(function(a){return caches["delete"](a)}))}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){a.respondWith(caches.match(a.request).then(function(b){return b?b:fetch(a.request).then(function(a){return 404===a.status?caches.match("/404.html"):a})})["catch"](function(){return caches.match("/offline/index.html")}))});
