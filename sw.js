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
    "url": "assets/abap-42d5eca7.js",
    "revision": null
  }, {
    "url": "assets/apex-7148dbcf.js",
    "revision": null
  }, {
    "url": "assets/app-2231754e.js",
    "revision": null
  }, {
    "url": "assets/azcli-ad3d7346.js",
    "revision": null
  }, {
    "url": "assets/bat-0217c0bc.js",
    "revision": null
  }, {
    "url": "assets/bicep-0cadb30a.js",
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
    "url": "assets/cameligo-ac55f854.js",
    "revision": null
  }, {
    "url": "assets/clojure-388a0d58.js",
    "revision": null
  }, {
    "url": "assets/codicon-bff90e92.ttf",
    "revision": null
  }, {
    "url": "assets/coffee-7e7a2971.js",
    "revision": null
  }, {
    "url": "assets/cpp-840d082a.js",
    "revision": null
  }, {
    "url": "assets/csharp-b3429875.js",
    "revision": null
  }, {
    "url": "assets/csp-83442b86.js",
    "revision": null
  }, {
    "url": "assets/css-7a34b8c3.js",
    "revision": null
  }, {
    "url": "assets/css.worker-968828ae.js",
    "revision": null
  }, {
    "url": "assets/css.worker-b170d031.js",
    "revision": null
  }, {
    "url": "assets/cssMode-7ab651bb.js",
    "revision": null
  }, {
    "url": "assets/cypher-cc9c23cc.js",
    "revision": null
  }, {
    "url": "assets/dart-00a58d1c.js",
    "revision": null
  }, {
    "url": "assets/dockerfile-668ee825.js",
    "revision": null
  }, {
    "url": "assets/ecl-b42ffd48.js",
    "revision": null
  }, {
    "url": "assets/edit-0bd70166.css",
    "revision": null
  }, {
    "url": "assets/edit-c746b671.js",
    "revision": null
  }, {
    "url": "assets/editor-0f9ebfae.css",
    "revision": null
  }, {
    "url": "assets/editor.main-92111c62.js",
    "revision": null
  }, {
    "url": "assets/editor.worker-6aeb88a5.js",
    "revision": null
  }, {
    "url": "assets/editor.worker-d809e5e3.js",
    "revision": null
  }, {
    "url": "assets/elixir-b9ceca92.js",
    "revision": null
  }, {
    "url": "assets/flow9-7e9b2e50.js",
    "revision": null
  }, {
    "url": "assets/freemarker2-474c65ec.js",
    "revision": null
  }, {
    "url": "assets/fsharp-cdc5b8f1.js",
    "revision": null
  }, {
    "url": "assets/go-4c92fa5c.js",
    "revision": null
  }, {
    "url": "assets/graphql-67842079.js",
    "revision": null
  }, {
    "url": "assets/handlebars-112f7f36.js",
    "revision": null
  }, {
    "url": "assets/hcl-59febf1c.js",
    "revision": null
  }, {
    "url": "assets/Header-99986b8c.js",
    "revision": null
  }, {
    "url": "assets/html-eb0f767e.js",
    "revision": null
  }, {
    "url": "assets/htmlMode-76f73851.js",
    "revision": null
  }, {
    "url": "assets/index-5ffe2786.css",
    "revision": null
  }, {
    "url": "assets/index-8629620c.js",
    "revision": null
  }, {
    "url": "assets/ini-1cf2ce67.js",
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
    "url": "assets/java-e4fb14c6.js",
    "revision": null
  }, {
    "url": "assets/javascript-c937f6ac.js",
    "revision": null
  }, {
    "url": "assets/jsonMode-65559260.js",
    "revision": null
  }, {
    "url": "assets/julia-0402747e.js",
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
    "url": "assets/kotlin-b66c14ff.js",
    "revision": null
  }, {
    "url": "assets/less-8dc8685d.js",
    "revision": null
  }, {
    "url": "assets/lexon-59c0b911.js",
    "revision": null
  }, {
    "url": "assets/liquid-5a1f7a69.js",
    "revision": null
  }, {
    "url": "assets/lua-3f4d9098.js",
    "revision": null
  }, {
    "url": "assets/m3-82a8c502.js",
    "revision": null
  }, {
    "url": "assets/markdown-07c3fa1e.js",
    "revision": null
  }, {
    "url": "assets/mips-59ddf2f4.js",
    "revision": null
  }, {
    "url": "assets/msdax-12ec689c.js",
    "revision": null
  }, {
    "url": "assets/mysql-2958efa4.js",
    "revision": null
  }, {
    "url": "assets/objective-c-08d94025.js",
    "revision": null
  }, {
    "url": "assets/pascal-b686b438.js",
    "revision": null
  }, {
    "url": "assets/pascaligo-96457e5f.js",
    "revision": null
  }, {
    "url": "assets/perl-b938bdad.js",
    "revision": null
  }, {
    "url": "assets/pgsql-42970e97.js",
    "revision": null
  }, {
    "url": "assets/php-7476401f.js",
    "revision": null
  }, {
    "url": "assets/pla-aaf0caa2.js",
    "revision": null
  }, {
    "url": "assets/postiats-759ff404.js",
    "revision": null
  }, {
    "url": "assets/powerquery-a33a8de4.js",
    "revision": null
  }, {
    "url": "assets/powershell-ec154f36.js",
    "revision": null
  }, {
    "url": "assets/protobuf-e42d83dc.js",
    "revision": null
  }, {
    "url": "assets/pug-04b2d67c.js",
    "revision": null
  }, {
    "url": "assets/python-269207c7.js",
    "revision": null
  }, {
    "url": "assets/qsharp-5376e9d1.js",
    "revision": null
  }, {
    "url": "assets/r-d212ba98.js",
    "revision": null
  }, {
    "url": "assets/razor-529861c1.js",
    "revision": null
  }, {
    "url": "assets/redis-51e44009.js",
    "revision": null
  }, {
    "url": "assets/redshift-8de2cfdc.js",
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
    "url": "assets/restructuredtext-3f99254a.js",
    "revision": null
  }, {
    "url": "assets/resumes-18e979de.css",
    "revision": null
  }, {
    "url": "assets/resumes-dc4fb0c3.js",
    "revision": null
  }, {
    "url": "assets/ruby-64a73e64.js",
    "revision": null
  }, {
    "url": "assets/rust-2a0390f1.js",
    "revision": null
  }, {
    "url": "assets/sb-4d8fa557.js",
    "revision": null
  }, {
    "url": "assets/scala-00d62260.js",
    "revision": null
  }, {
    "url": "assets/scheme-a0903f29.js",
    "revision": null
  }, {
    "url": "assets/scss-3e25f7ad.js",
    "revision": null
  }, {
    "url": "assets/shell-9c442847.js",
    "revision": null
  }, {
    "url": "assets/solidity-6b3049ed.js",
    "revision": null
  }, {
    "url": "assets/sophia-f4a2b303.js",
    "revision": null
  }, {
    "url": "assets/sparql-1d37a384.js",
    "revision": null
  }, {
    "url": "assets/sql-946641be.js",
    "revision": null
  }, {
    "url": "assets/st-806617f8.js",
    "revision": null
  }, {
    "url": "assets/swift-06592b81.js",
    "revision": null
  }, {
    "url": "assets/systemverilog-b5ba493c.js",
    "revision": null
  }, {
    "url": "assets/tcl-3fe51e69.js",
    "revision": null
  }, {
    "url": "assets/toast-23b586a0.js",
    "revision": null
  }, {
    "url": "assets/toast-c71f958d.css",
    "revision": null
  }, {
    "url": "assets/tsMode-ed93d893.js",
    "revision": null
  }, {
    "url": "assets/twig-ee0f3b03.js",
    "revision": null
  }, {
    "url": "assets/typescript-cb8cd17e.js",
    "revision": null
  }, {
    "url": "assets/vb-e7e59935.js",
    "revision": null
  }, {
    "url": "assets/w7-ac4be974.ttf",
    "revision": null
  }, {
    "url": "assets/w9-6f2841e9.ttf",
    "revision": null
  }, {
    "url": "assets/xml-af17cdfe.js",
    "revision": null
  }, {
    "url": "assets/yaml-76f1bf8d.js",
    "revision": null
  }, {
    "url": "edit.html",
    "revision": "8c8992f5bff1a91a09e90625b57dbcd0"
  }, {
    "url": "index.html",
    "revision": "55e41aff24d1cf3e129187907565465c"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "resumes.html",
    "revision": "4b2d647de78d53d0e9de390077485c6f"
  }, {
    "url": "zh-cn/edit.html",
    "revision": "e674a486587a0e8729727fcb4b2c07ec"
  }, {
    "url": "zh-cn/index.html",
    "revision": "9ca932447a6438f86d723456b243d66e"
  }, {
    "url": "zh-cn/resumes.html",
    "revision": "e335327af546d5d744fa9a4f59afae87"
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
    "revision": "e073c488d6c460ca6d8244da5293aab9"
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
