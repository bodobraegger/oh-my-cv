/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-479852ff'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/abap-5fd096f7.js",
    "revision": null
  }, {
    "url": "assets/apex-0b2071d4.js",
    "revision": null
  }, {
    "url": "assets/app-87219770.js",
    "revision": null
  }, {
    "url": "assets/azcli-190356b5.js",
    "revision": null
  }, {
    "url": "assets/bat-8a29f90f.js",
    "revision": null
  }, {
    "url": "assets/bicep-2030a195.js",
    "revision": null
  }, {
    "url": "assets/bold-0c23bf01.otf",
    "revision": null
  }, {
    "url": "assets/bold-100c8057.ttf",
    "revision": null
  }, {
    "url": "assets/bold-32c03660.ttf",
    "revision": null
  }, {
    "url": "assets/bold-8fa5e2a3.ttf",
    "revision": null
  }, {
    "url": "assets/bold-a721c09d.otf",
    "revision": null
  }, {
    "url": "assets/bold-d1fdba14.otf",
    "revision": null
  }, {
    "url": "assets/bolditalic-0cf4e338.ttf",
    "revision": null
  }, {
    "url": "assets/bolditalic-5d874a57.otf",
    "revision": null
  }, {
    "url": "assets/bolditalic-73c6819a.ttf",
    "revision": null
  }, {
    "url": "assets/bolditalic-a49a038d.otf",
    "revision": null
  }, {
    "url": "assets/bolditalic-c8c10983.otf",
    "revision": null
  }, {
    "url": "assets/cameligo-e329b2f4.js",
    "revision": null
  }, {
    "url": "assets/clojure-bbb8ba32.js",
    "revision": null
  }, {
    "url": "assets/codicon-bff90e92.ttf",
    "revision": null
  }, {
    "url": "assets/coffee-acac9422.js",
    "revision": null
  }, {
    "url": "assets/cpp-9d6a58b0.js",
    "revision": null
  }, {
    "url": "assets/csharp-91d9f9d8.js",
    "revision": null
  }, {
    "url": "assets/csp-763000e4.js",
    "revision": null
  }, {
    "url": "assets/css-d9a05d7d.js",
    "revision": null
  }, {
    "url": "assets/css.worker-4a7f45a7.js",
    "revision": null
  }, {
    "url": "assets/css.worker-99e39b79.js",
    "revision": null
  }, {
    "url": "assets/cssMode-cf8a9e11.js",
    "revision": null
  }, {
    "url": "assets/cypher-cba4566f.js",
    "revision": null
  }, {
    "url": "assets/dart-30a82b35.js",
    "revision": null
  }, {
    "url": "assets/dockerfile-2a29d833.js",
    "revision": null
  }, {
    "url": "assets/ecl-c14b226e.js",
    "revision": null
  }, {
    "url": "assets/edit-0bd70166.css",
    "revision": null
  }, {
    "url": "assets/edit-a8da976a.js",
    "revision": null
  }, {
    "url": "assets/editor-c8553017.css",
    "revision": null
  }, {
    "url": "assets/editor.main-9c7d5123.js",
    "revision": null
  }, {
    "url": "assets/editor.worker-db229822.js",
    "revision": null
  }, {
    "url": "assets/editor.worker-ef2c91c3.js",
    "revision": null
  }, {
    "url": "assets/elixir-4a1aad71.js",
    "revision": null
  }, {
    "url": "assets/flow9-38712bd3.js",
    "revision": null
  }, {
    "url": "assets/freemarker2-3856ddce.js",
    "revision": null
  }, {
    "url": "assets/fsharp-71c17f08.js",
    "revision": null
  }, {
    "url": "assets/go-81a01631.js",
    "revision": null
  }, {
    "url": "assets/graphql-4b2f9989.js",
    "revision": null
  }, {
    "url": "assets/handlebars-4bdd6ba0.js",
    "revision": null
  }, {
    "url": "assets/hcl-f5583a08.js",
    "revision": null
  }, {
    "url": "assets/Header-025f1ced.js",
    "revision": null
  }, {
    "url": "assets/html-8d8ba1a6.js",
    "revision": null
  }, {
    "url": "assets/htmlMode-529b21b4.js",
    "revision": null
  }, {
    "url": "assets/index-1cca78b2.css",
    "revision": null
  }, {
    "url": "assets/index-5bc46520.js",
    "revision": null
  }, {
    "url": "assets/ini-93327bda.js",
    "revision": null
  }, {
    "url": "assets/italic-486752be.otf",
    "revision": null
  }, {
    "url": "assets/italic-b1302efa.ttf",
    "revision": null
  }, {
    "url": "assets/italic-e032d2fe.otf",
    "revision": null
  }, {
    "url": "assets/italic-ec5f267f.otf",
    "revision": null
  }, {
    "url": "assets/italic-fa084936.ttf",
    "revision": null
  }, {
    "url": "assets/java-594fa86f.js",
    "revision": null
  }, {
    "url": "assets/javascript-cd09ee7d.js",
    "revision": null
  }, {
    "url": "assets/jsonMode-5847a504.js",
    "revision": null
  }, {
    "url": "assets/julia-0007448b.js",
    "revision": null
  }, {
    "url": "assets/KaTeX_AMS-Regular-0cdd387c.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_AMS-Regular-68534840.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Fraktur-Bold-74444efd.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Fraktur-Bold-9163df9c.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Fraktur-Regular-51814d27.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Main-Bold-0f60d1b8.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Main-Bold-138ac28d.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Main-Italic-0d85ae7c.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Main-Italic-97479ca6.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Main-Regular-c2342cd8.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Main-Regular-d0332f52.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Math-BoldItalic-dc47344d.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Math-Italic-08ce98e5.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Math-Italic-7af58c5e.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_SansSerif-Bold-e99ae511.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_SansSerif-Italic-3931dd81.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_SansSerif-Regular-f36ea897.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Script-Regular-036d4e95.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Script-Regular-1c67f068.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Size1-Regular-6b47c401.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Size1-Regular-95b6d2f1.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Size2-Regular-a6b2099f.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Size2-Regular-d04c5421.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Size3-Regular-500e04d5.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Size4-Regular-a4af7d41.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Size4-Regular-c647367d.ttf",
    "revision": null
  }, {
    "url": "assets/KaTeX_Typewriter-Regular-71d517d6.woff2",
    "revision": null
  }, {
    "url": "assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",
    "revision": null
  }, {
    "url": "assets/kotlin-d96111b8.js",
    "revision": null
  }, {
    "url": "assets/less-35bca26e.js",
    "revision": null
  }, {
    "url": "assets/lexon-9e065f08.js",
    "revision": null
  }, {
    "url": "assets/liquid-54f5f8e2.js",
    "revision": null
  }, {
    "url": "assets/lua-f5c339e1.js",
    "revision": null
  }, {
    "url": "assets/m3-f481ba01.js",
    "revision": null
  }, {
    "url": "assets/markdown-9daa6125.js",
    "revision": null
  }, {
    "url": "assets/mips-9083c690.js",
    "revision": null
  }, {
    "url": "assets/msdax-407492d3.js",
    "revision": null
  }, {
    "url": "assets/mysql-58db6cae.js",
    "revision": null
  }, {
    "url": "assets/objective-c-af4e0f63.js",
    "revision": null
  }, {
    "url": "assets/pascal-63b284c9.js",
    "revision": null
  }, {
    "url": "assets/pascaligo-2b3d65f2.js",
    "revision": null
  }, {
    "url": "assets/perl-b4e06d57.js",
    "revision": null
  }, {
    "url": "assets/pgsql-7382e5ae.js",
    "revision": null
  }, {
    "url": "assets/php-135114d3.js",
    "revision": null
  }, {
    "url": "assets/pla-745ec9ce.js",
    "revision": null
  }, {
    "url": "assets/postiats-a3fe4f4c.js",
    "revision": null
  }, {
    "url": "assets/powerquery-47747fc0.js",
    "revision": null
  }, {
    "url": "assets/powershell-ff3577bc.js",
    "revision": null
  }, {
    "url": "assets/protobuf-6deb4a02.js",
    "revision": null
  }, {
    "url": "assets/pug-2dd33d7b.js",
    "revision": null
  }, {
    "url": "assets/python-aef82d87.js",
    "revision": null
  }, {
    "url": "assets/qsharp-52d3483a.js",
    "revision": null
  }, {
    "url": "assets/r-419d1932.js",
    "revision": null
  }, {
    "url": "assets/razor-b0bfaae0.js",
    "revision": null
  }, {
    "url": "assets/redis-48ffdd95.js",
    "revision": null
  }, {
    "url": "assets/redshift-6f3b6438.js",
    "revision": null
  }, {
    "url": "assets/regular-1d4d14f6.ttf",
    "revision": null
  }, {
    "url": "assets/regular-22156014.otf",
    "revision": null
  }, {
    "url": "assets/regular-8af34590.otf",
    "revision": null
  }, {
    "url": "assets/regular-9b670aff.otf",
    "revision": null
  }, {
    "url": "assets/regular-d51b96e5.ttf",
    "revision": null
  }, {
    "url": "assets/regular-e6173472.ttf",
    "revision": null
  }, {
    "url": "assets/restructuredtext-2b6de06c.js",
    "revision": null
  }, {
    "url": "assets/resumes-18e979de.css",
    "revision": null
  }, {
    "url": "assets/resumes-29ddf487.js",
    "revision": null
  }, {
    "url": "assets/ruby-3203ad6f.js",
    "revision": null
  }, {
    "url": "assets/rust-db058ad8.js",
    "revision": null
  }, {
    "url": "assets/sb-2e6261d9.js",
    "revision": null
  }, {
    "url": "assets/scala-9479f128.js",
    "revision": null
  }, {
    "url": "assets/scheme-eff94c99.js",
    "revision": null
  }, {
    "url": "assets/scss-47fd4d15.js",
    "revision": null
  }, {
    "url": "assets/shell-6ce95083.js",
    "revision": null
  }, {
    "url": "assets/solidity-05bce190.js",
    "revision": null
  }, {
    "url": "assets/sophia-0df3b455.js",
    "revision": null
  }, {
    "url": "assets/sparql-82e631b6.js",
    "revision": null
  }, {
    "url": "assets/sql-ba093187.js",
    "revision": null
  }, {
    "url": "assets/st-791b0ff5.js",
    "revision": null
  }, {
    "url": "assets/swift-4e23775b.js",
    "revision": null
  }, {
    "url": "assets/systemverilog-ad58bd79.js",
    "revision": null
  }, {
    "url": "assets/tcl-ef3a1af5.js",
    "revision": null
  }, {
    "url": "assets/toast-6da88ba8.js",
    "revision": null
  }, {
    "url": "assets/toast-c71f958d.css",
    "revision": null
  }, {
    "url": "assets/tsMode-c6d8b173.js",
    "revision": null
  }, {
    "url": "assets/twig-a6c466d1.js",
    "revision": null
  }, {
    "url": "assets/typescript-0d3d6bcf.js",
    "revision": null
  }, {
    "url": "assets/vb-dc8b6e66.js",
    "revision": null
  }, {
    "url": "assets/w7-ac4be974.ttf",
    "revision": null
  }, {
    "url": "assets/w9-6f2841e9.ttf",
    "revision": null
  }, {
    "url": "assets/xml-91e01622.js",
    "revision": null
  }, {
    "url": "assets/yaml-d332e66c.js",
    "revision": null
  }, {
    "url": "edit.html",
    "revision": "5326f95483cb96557db4332570e75856"
  }, {
    "url": "index.html",
    "revision": "563e3d5b40e3d85fd5cfcb4ac90265f6"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "resumes.html",
    "revision": "e39548a162310b155c3095c2a04686a6"
  }, {
    "url": "zh-cn/edit.html",
    "revision": "7708c7b96b33e5bec50e8cef4da05807"
  }, {
    "url": "zh-cn/index.html",
    "revision": "f4caaa96bea4ecf5eb48c67a86bab9fd"
  }, {
    "url": "zh-cn/resumes.html",
    "revision": "55e8ba80c136589aeb08f4f4f0c9875f"
  }, {
    "url": "pwa-192x192.png",
    "revision": "e3ee23607a02913fa308a010c3f732be"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "8b5d23adf13cc40f215a72fad25d9b1d"
  }, {
    "url": "favicon-dark.svg",
    "revision": "0bd73d900e2e3202205eb299a48b03f3"
  }, {
    "url": "favicon.svg",
    "revision": "17f2f493bc1fe81f0978c84708b437d1"
  }, {
    "url": "pwa-512x512.png",
    "revision": "94db878cb6e20a5ae061b5352c96d243"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "a3343345003f1a535c38ceb6a8baa4e9"
  }, {
    "url": "manifest.webmanifest",
    "revision": "6c8071e7db080d5e61d66b71e7129e31"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));
  workbox.registerRoute(/^https:\/\/fonts.googleapis.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "google-font-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
