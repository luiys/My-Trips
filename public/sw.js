if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,n,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return r;case"module":return i;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Qd_q76XprZwMC8OWVwKLo/_buildManifest.js",revision:"Qd_q76XprZwMC8OWVwKLo"},{url:"/_next/static/Qd_q76XprZwMC8OWVwKLo/_ssgManifest.js",revision:"Qd_q76XprZwMC8OWVwKLo"},{url:"/_next/static/chunks/0b7b90cd.29e69a5732431035a8f0.js",revision:"Qd_q76XprZwMC8OWVwKLo"},{url:"/_next/static/chunks/13.8efb14ff39d2cf6f1f96.js",revision:"Qd_q76XprZwMC8OWVwKLo"},{url:"/_next/static/chunks/612a5669ed7988766ff3084011b359dc5de30d6c.21e3491cd146883c2536.js",revision:"Qd_q76XprZwMC8OWVwKLo"},{url:"/_next/static/chunks/bb9a4470b984507ac537ac1324ab5e51b615490f.24f12a6f9816d548f1d0.js",revision:"Qd_q76XprZwMC8OWVwKLo"},{url:"/_next/static/chunks/commons.8c5206c6341c6f4d9fef.js",revision:"Qd_q76XprZwMC8OWVwKLo"},{url:"/_next/static/chunks/framework.349d8128c43083da4feb.js",revision:"Qd_q76XprZwMC8OWVwKLo"},{url:"/_next/static/chunks/main-66267b0c80018694abbe.js",revision:"Qd_q76XprZwMC8OWVwKLo"},{url:"/_next/static/chunks/pages/%5Bslug%5D-a86cad264b8bd2dfa078.js",revision:"Qd_q76XprZwMC8OWVwKLo"},{url:"/_next/static/chunks/pages/_app-9ec06e38ea8772ef3441.js",revision:"Qd_q76XprZwMC8OWVwKLo"},{url:"/_next/static/chunks/pages/_error-2d2615b7fdecac93a933.js",revision:"Qd_q76XprZwMC8OWVwKLo"},{url:"/_next/static/chunks/pages/index-e5045e7c81372b8cf853.js",revision:"Qd_q76XprZwMC8OWVwKLo"},{url:"/_next/static/chunks/pages/place/%5Bslug%5D-9e54e2ec49529e6aed30.js",revision:"Qd_q76XprZwMC8OWVwKLo"},{url:"/_next/static/chunks/polyfills-6f7c72e370684550d611.js",revision:"Qd_q76XprZwMC8OWVwKLo"},{url:"/_next/static/chunks/webpack-3076c11faee91d18408b.js",revision:"Qd_q76XprZwMC8OWVwKLo"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/images/hero-illustration.svg",revision:"9e5d25692b936c7a72053351e1700924"},{url:"/images/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/images/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/images/logo.svg",revision:"ed9ceee9d7cb068e102309e1f8dcd6c8"},{url:"/images/my-trips-cover.JPG",revision:"8fbc990d6f327f0e97ccac0274c96ec4"},{url:"/manifest.json",revision:"c39feddb853c0b8a83b591b4dd8f0f8f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:r,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
