/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/user/Documents/blog/githubBlog/public/2018/07/06/threeyear/index.html","01af5f03fe08931b29369f13db7b2d91"],["C:/Users/user/Documents/blog/githubBlog/public/2018/11/18/2018-arm-design-contest/index.html","bf63de7ed32a5e5532b50a76acc7b465"],["C:/Users/user/Documents/blog/githubBlog/public/2018/11/24/graduated/index.html","67fc9f23a92b540263b7d1b90baffd49"],["C:/Users/user/Documents/blog/githubBlog/public/2019/10/02/hello-world/index.html","33d2e9cdabbf35aff2f24ecc67b61c47"],["C:/Users/user/Documents/blog/githubBlog/public/2019/10/03/C-education-1/index.html","4f699cafac4ded351f2ecdbf190c0031"],["C:/Users/user/Documents/blog/githubBlog/public/2019/10/11/C-education-2/index.html","6e3c99a5e726f09ab01a2398341fd3f9"],["C:/Users/user/Documents/blog/githubBlog/public/about/index.html","6699b257969dd5444eed0d89d9ee6ab6"],["C:/Users/user/Documents/blog/githubBlog/public/about/me.html","0a2415feb3dc70257fe7ce0e520f8ff4"],["C:/Users/user/Documents/blog/githubBlog/public/archives/2018/07/index.html","fe81d074544d598f43bb8f339c3d6e5e"],["C:/Users/user/Documents/blog/githubBlog/public/archives/2018/11/index.html","8ad67910d34380ddc1e15a6b297a5b63"],["C:/Users/user/Documents/blog/githubBlog/public/archives/2018/index.html","7f896da4ac795a8ac7fca76560fefc34"],["C:/Users/user/Documents/blog/githubBlog/public/archives/2019/10/index.html","ffe4f0dc8b9e1e26144c206cc2b12b6d"],["C:/Users/user/Documents/blog/githubBlog/public/archives/2019/index.html","a7a1c27643b0a175ea787b8d89a500e8"],["C:/Users/user/Documents/blog/githubBlog/public/archives/index.html","a7d668d04d81240b3a2f15109a195987"],["C:/Users/user/Documents/blog/githubBlog/public/categories/index.html","41930c50849a432dbb0a8fe52a23a47c"],["C:/Users/user/Documents/blog/githubBlog/public/categories/中正大學/index.html","253aba85ceb1625a7f2f25b144a7570d"],["C:/Users/user/Documents/blog/githubBlog/public/categories/中正大學/資工系/index.html","55ff384707d14dea3ee5257ff2580dbf"],["C:/Users/user/Documents/blog/githubBlog/public/categories/中正大學/資工系/畢業季/index.html","42cf0c1c06e9398bde91146e9c887126"],["C:/Users/user/Documents/blog/githubBlog/public/categories/小技術分享/index.html","c7e0142bd2885c63f21799039427562b"],["C:/Users/user/Documents/blog/githubBlog/public/categories/教學/index.html","51d2a1c612abb13efe0001e0ca9e8ac7"],["C:/Users/user/Documents/blog/githubBlog/public/categories/教學/程式/index.html","1c62ea5be9748435cfc8f5ecd6323fdc"],["C:/Users/user/Documents/blog/githubBlog/public/categories/比賽/index.html","a54150e046c98c34a5b8fe2d35639cb9"],["C:/Users/user/Documents/blog/githubBlog/public/css/index.css","97386956746f9ed62dbc9435cf532d17"],["C:/Users/user/Documents/blog/githubBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/user/Documents/blog/githubBlog/public/gallery/index.html","2ad4b557b1b98970a39c4f890832e801"],["C:/Users/user/Documents/blog/githubBlog/public/games/index.html","de719fab19843e28f433443db383bf99"],["C:/Users/user/Documents/blog/githubBlog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["C:/Users/user/Documents/blog/githubBlog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/user/Documents/blog/githubBlog/public/img/alipay.jpg","9d7d25339256096f77b7a3634bcd6e33"],["C:/Users/user/Documents/blog/githubBlog/public/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["C:/Users/user/Documents/blog/githubBlog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["C:/Users/user/Documents/blog/githubBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/user/Documents/blog/githubBlog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["C:/Users/user/Documents/blog/githubBlog/public/img/selfie.jpg","e8cddfa36cb94f8635a78a0c7d0ea7a5"],["C:/Users/user/Documents/blog/githubBlog/public/img/wechat.jpg","67599109276ad864d53e34817dbc0d72"],["C:/Users/user/Documents/blog/githubBlog/public/index.html","8ed1d19f0570a41bca35f6badc0ec14f"],["C:/Users/user/Documents/blog/githubBlog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["C:/Users/user/Documents/blog/githubBlog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["C:/Users/user/Documents/blog/githubBlog/public/js/main.js","10f97e1001bd4f1f7d2360e8c29d6ab5"],["C:/Users/user/Documents/blog/githubBlog/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["C:/Users/user/Documents/blog/githubBlog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["C:/Users/user/Documents/blog/githubBlog/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["C:/Users/user/Documents/blog/githubBlog/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["C:/Users/user/Documents/blog/githubBlog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/user/Documents/blog/githubBlog/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["C:/Users/user/Documents/blog/githubBlog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["C:/Users/user/Documents/blog/githubBlog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/Users/user/Documents/blog/githubBlog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/user/Documents/blog/githubBlog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/user/Documents/blog/githubBlog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["C:/Users/user/Documents/blog/githubBlog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["C:/Users/user/Documents/blog/githubBlog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["C:/Users/user/Documents/blog/githubBlog/public/link/index.html","7c7e4caa77c098e144b37b4507bc44da"],["C:/Users/user/Documents/blog/githubBlog/public/movies/index.html","eba2b12aa9e431271161b8416bb83bb9"],["C:/Users/user/Documents/blog/githubBlog/public/music/index.html","cf403a56594897dcc8f9955f9a763c2f"],["C:/Users/user/Documents/blog/githubBlog/public/tags/Arm-Design-Contest/index.html","ad474456a200e914e86bb5cc24311d72"],["C:/Users/user/Documents/blog/githubBlog/public/tags/C/index.html","059bd47af76aaa958411bee837da58c8"],["C:/Users/user/Documents/blog/githubBlog/public/tags/Github-page/index.html","edcabf77dcc7cf87334f794a0bdd9394"],["C:/Users/user/Documents/blog/githubBlog/public/tags/Hexo/index.html","593e3338cadeda6ce6adf1ac49464887"],["C:/Users/user/Documents/blog/githubBlog/public/tags/STM32F469/index.html","1c7cfea1f6a1d081959c176d4be76d21"],["C:/Users/user/Documents/blog/githubBlog/public/tags/Voice-Conversion/index.html","3b9fac0e9cd6b18140401b45b809f875"],["C:/Users/user/Documents/blog/githubBlog/public/tags/index.html","721164c133b62309698c5285e3a23777"],["C:/Users/user/Documents/blog/githubBlog/public/tags/learning/index.html","f9e776bf4ad4e60a04bb123fbbaa104d"],["C:/Users/user/Documents/blog/githubBlog/public/tags/programming/index.html","77273a2b716dc7e6a163502fd4ee7d3b"],["C:/Users/user/Documents/blog/githubBlog/public/tags/大學/index.html","f33b87e9da182a408614ce0e0afb3f80"],["C:/Users/user/Documents/blog/githubBlog/public/tags/柯南領結/index.html","6b37c8636c7622d3e3f236bd93e1f239"],["C:/Users/user/Documents/blog/githubBlog/public/tags/畢業/index.html","6ac090b4fe85f022c72503c42c0bd8c0"],["C:/Users/user/Documents/blog/githubBlog/public/tags/變聲器/index.html","3c32b1ce02be7d7020311d0754c54318"],["C:/Users/user/Documents/blog/githubBlog/public/tags/資工系/index.html","f1c090cd9e34cf3c6a73dad6cf059101"],["C:/Users/user/Documents/blog/githubBlog/public/tags/趣事/index.html","e0cc2afc604928cbbdeb6e900d6660c3"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







