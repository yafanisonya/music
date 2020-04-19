// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/icons.js":[function(require,module,exports) {
!function (s) {
  var t,
      a = '<svg><symbol id="icon-download" viewBox="0 0 1024 1024"><path d="M748.8 342.4c-9.6 0-19.2 0-32 3.2C678.4 233.6 579.2 160 467.2 160c-140.8 0-259.2 118.4-268.8 268.8-96 19.2-166.4 108.8-166.4 217.6C32 764.8 124.8 864 236.8 864h118.4c19.2 0 32-12.8 32-32s-12.8-32-32-32H236.8C160 800 96 729.6 96 646.4c0-83.2 60.8-153.6 137.6-153.6 9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-16 9.6-22.4v-9.6c0-124.8 92.8-224 204.8-224 92.8 0 172.8 67.2 198.4 166.4 3.2 9.6 6.4 16 16 19.2 6.4 3.2 16 6.4 25.6 3.2 16-6.4 32-6.4 44.8-6.4 99.2 0 179.2 86.4 179.2 195.2 0 108.8-80 198.4-176 198.4h-64c-19.2 0-32 12.8-32 32s12.8 32 32 32h67.2c131.2 0 236.8-118.4 236.8-262.4-6.4-147.2-115.2-262.4-249.6-262.4z"  ></path><path d="M662.4 681.6c-12.8-12.8-32-12.8-44.8 0L544 755.2V544c0-19.2-12.8-32-32-32s-32 12.8-32 32v211.2l-73.6-73.6c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8l128 128c6.4 6.4 16 9.6 22.4 9.6s16-3.2 22.4-9.6l128-128c12.8-12.8 12.8-32 0-44.8z"  ></path></symbol><symbol id="icon-like" viewBox="0 0 1024 1024"><path d="M704 128a256 256 0 0 0-192 89.28A256 256 0 0 0 320 128a232.32 232.32 0 0 0-234.56 234.56c0 160 144.96 292.8 364.8 492.48L512 911.04l61.76-56.32c219.84-199.36 364.8-330.56 364.8-491.84A232.32 232.32 0 0 0 704 128z"  ></path></symbol><symbol id="icon-comment" viewBox="0 0 1024 1024"><path d="M785.198545 784.128h-108.334545l1.256727 0.814545C413.975273 784.942545 220.276364 884.363636 220.276364 884.363636v-99.421091c0.069818-0.930909 0.232727-1.698909 0.302545-2.629818C148.805818 773.352727 93.090909 713.425455 93.090909 640V330.333091C93.090909 250.717091 158.324364 186.181818 238.778182 186.181818h546.443636C865.652364 186.181818 930.909091 250.717091 930.909091 330.333091V640c0 79.592727-65.233455 144.128-145.710546 144.128zM336.686545 430.545455c-30.161455 0-54.644364 23.691636-54.644363 52.922181s24.482909 52.922182 54.644363 52.922182c30.184727 0 54.644364-23.691636 54.644364-52.922182S366.871273 430.545455 336.686545 430.545455z m188.974546 0c-29.556364 0-53.504 23.691636-53.504 52.922181s23.970909 52.922182 53.504 52.922182c29.556364 0 53.504-23.691636 53.504-52.922182s-23.970909-52.922182-53.527273-52.922181z m188.974545 0c-30.184727 0-54.644364 23.691636-54.644363 52.922181s24.436364 52.922182 54.621091 52.922182 54.644364-23.691636 54.644363-52.922182-24.459636-52.922182-54.644363-52.922181z"  ></path></symbol><symbol id="icon-more" viewBox="0 0 1024 1024"><path d="M509.49688889 792.91733333c51.76888889 0.11377778 93.52533333 41.87022222 93.41155556 93.75288889-0.11377778 51.65511111-42.09777778 93.63911111-93.86666667 93.52533333-51.54133333 0-93.52533333-42.21155554-93.41155556-93.98044444 0.11377778-51.65511111 41.984-93.29777778 93.86666667-93.29777778z m-93.75288889-656.49777778c0-51.76888889 41.87022222-93.86666667 93.52533333-93.86666665 51.65511111-0.11377778 93.75288889 41.87022222 93.75288889 93.63911111 0 51.88266667-41.64266667 93.75288889-93.52533333 93.75288889s-93.75288889-41.64266667-93.75288889-93.52533335zM603.02222222 511.54488889c0 51.65511111-42.43911111 93.98044445-93.75288889 93.75288889-51.76888889-0.34133333-93.52533333-42.21155554-93.52533333-93.98044445 0-51.65511111 42.21155554-93.86666667 93.75288889-93.63911111 51.65511111 0.11377778 93.52533333 42.09777778 93.52533333 93.86666667z"  ></path></symbol><symbol id="icon-pause" viewBox="0 0 1024 1024"><path d="M514.422677 4.632507C233.00017001 4.632507 4.863263 232.768391 4.863263 514.190899s228.136907 509.56043799 509.55839101 509.560438c281.41943801 0 509.556345-228.136907 509.55634499-509.560438 0.001023-281.422508-228.136907-509.558391-509.555322-509.558392z m0 968.158181c-253.27954 0-458.602859-205.322295-458.60285901-458.600813 0-253.27749399 205.322295-458.601836 458.60285901-458.601836 253.280564 0 458.600813 205.323319 458.60081301 458.601836S767.70221799 972.790688 514.422677 972.790688z"  ></path><path d="M430.93521801 697.78124c0 27.948539-23.27203001 50.61067799-52.03307401 50.61067799-28.760021 0-52.03307401-22.662139-52.033073-50.61067799V330.60464999c0-27.948539 23.273053-50.61067799 52.033073-50.61067799 28.761044 0 52.03307401 22.662139 52.03307399 50.61067799v367.17659001z m271.037996 0c0 27.948539-23.27203001 50.61067799-52.03307301 50.61067799S597.90809001 725.728756 597.90809001 697.78124V330.60464999c0-27.948539 23.27203001-50.61067799 52.03307399-50.61067799s52.03307401 22.662139 52.033073 50.61067799v367.17659001h-0.00102299z"  ></path></symbol><symbol id="icon-play" viewBox="0 0 1085 1024"><path d="M549.23093333-14.82026667C252.944-14.82026667 12.75733333 225.36746667 12.75733333 521.65333333c0 296.29013333 240.18666667 536.47786667 536.47466667 536.47786667 296.28586667 0 536.47573333-240.18773333 536.47573333-536.47786667 0-296.28586667-240.18986667-536.47466667-536.47573333-536.47466666z m0 1019.3024c-266.65813333 0-482.8288-216.17066667-482.8288-482.8288 0-266.656 216.17066667-482.82666667 482.8288-482.82666666s482.82666667 216.17066667 482.82666667 482.82666666c0 266.65813333-216.16746667 482.8288-482.82666667 482.8288z m243.52-520.84906666C709.26506667 426.82773333 557.87946667 341.80266667 471.68 289.11786667c-35.3408-22.28693333-65.06026667-13.33653333-67.91146667 26.02666666-2.0672 105.42933333 0 308.85333333 0 416.10773334 1.792 39.95946667 37.024 45.22986667 67.6 29.18613333L791.9968 566.18666667c-0.56426667-0.34346667 65.70666667-36.7936 0.75413333-82.55253334z"  ></path></symbol><symbol id="icon-previous" viewBox="0 0 1024 1024"><path d="M195.59375 174.5L195.59375 854.7734375C195.59375 869.3356314 207.39874195 881.140625 221.9609375 881.140625 236.52313305 881.140625 248.328125 869.33563141 248.328125 854.77343749L248.328125 174.50000001C248.328125 159.93780446 236.52313305 148.1328125 221.9609375 148.1328125 207.39874195 148.1328125 195.59375 159.93780445 195.59375 174.5L195.59375 174.5Z"  ></path><path d="M727.90453266 208.60819741L727.90453266 208.60819741 394.72828092 481.41793847C372.16611258 499.89218256 372.12248972 529.93848096 394.72828092 548.44844433L727.90453266 821.25818457C750.46670017 839.73242864 768.8359361 831.14847952 768.8359361 802.0056182L768.8359361 227.86076462C768.8359361 198.48908554 750.5103222 190.09823404 727.90453266 208.60819741L727.90453266 208.60819741ZM694.49565815 167.80670923L694.49565815 167.80670923C751.44863483 121.17275137 821.5703111 153.88453595 821.5703111 227.86076462L821.5703111 802.00561819C821.5703111 875.73645898 751.41671734 908.66749661 694.49565815 862.05967193L361.3194064 589.2499317C312.95247833 549.64636087 312.9836872 480.19446637 361.3194064 440.61645112L694.49565815 167.80670923Z"  ></path></symbol><symbol id="icon-order" viewBox="0 0 1293 1024"><path d="M1063.63965727 548.59097783c-21.95458656 0-36.59097783 14.63639126-36.59097713 36.59097782v36.59097782c0 80.50015095-65.86375968 146.36391062-146.36391131 146.36391064H441.59303627c-80.50015095 0-146.36391062-65.86375968-146.36391062-146.36391063v-146.36391131c0-80.50015095 65.86375968-146.36391062 146.36391062-146.36391063h537.88737276l-29.27278253 29.27278186c-10.97729329 10.97729329-10.97729329 32.93187983 0 43.90917312s32.93187983 10.97729329 43.90917311 0l87.81834693-87.81834623c10.97729329-10.97729329 10.97729329-32.93187983 0-43.90917312L994.11679961 182.68120025c-10.97729329-10.97729329-32.93187983-10.97729329-43.90917311 0s-10.97729329 32.93187983 0 43.90917379l29.27278253 29.27278186H441.59303627c-120.75022676 0-219.54586628 98.79563952-219.54586627 219.54586627v146.3639113c0 120.75022676 98.79563952 219.54586628 219.54586627 219.54586629h439.09173256c120.75022676 0 219.54586628-98.79563952 219.54586628-219.54586629v-36.59097782c0-21.95458656-14.63639126-36.59097783-36.59097783-36.59097782z"  ></path></symbol><symbol id="icon-list" viewBox="0 0 1024 1024"><path d="M399.5 766.99999971A107.25000029 107.25000029 0 0 1 287 849.5a104.24999971 104.24999971 0 0 1-112.5-93.75000029A104.24999971 104.24999971 0 0 1 287 662.00000029a132.75 132.75 0 0 1 37.50000029 5.24999971V284.37499971a43.875 43.875 0 0 1 29.62499942-41.99999942l215.62500058-66.00000058A42.37499971 42.37499971 0 0 1 624.5 218.375v65.99999971A45.37500029 45.37500029 0 0 1 586.99999971 324.50000029q-37.50000029 8.62499971-187.49999971 37.49999942v395.62500058a51.37499971 51.37499971 0 0 1 0 9.37499942z"  ></path><path d="M662.00000029 399.5h149.99999942a37.50000029 37.50000029 0 0 1 0 74.99999971h-149.99999942a37.50000029 37.50000029 0 0 1 0-74.99999971z m-75.00000058 150.00000029h225a37.50000029 37.50000029 0 0 1 0 74.99999971h-225a37.50000029 37.50000029 0 0 1 0-74.99999971z m0 149.99999942h225a37.50000029 37.50000029 0 0 1 0 75.00000058h-225a37.50000029 37.50000029 0 0 1 0-75.00000058z"  ></path></symbol><symbol id="icon-next" viewBox="0 0 1024 1024"><path d="M828.40625 849.5L828.40625 169.2265625C828.40625 154.6643686 816.60125805 142.859375 802.0390625 142.859375 787.47686695 142.859375 775.671875 154.66436859 775.671875 169.22656251L775.671875 849.49999999C775.671875 864.06219554 787.47686695 875.8671875 802.0390625 875.8671875 816.60125805 875.8671875 828.40625 864.06219555 828.40625 849.5L828.40625 849.5Z"  ></path><path d="M296.09546734 815.39180259L296.09546734 815.39180259 629.27171908 542.58206153C651.83388742 524.10781744 651.87751028 494.06151904 629.27171908 475.55155567L296.09546734 202.74181543C273.53329983 184.26757136 255.1640639 192.85152048 255.1640639 221.9943818L255.1640639 796.13923538C255.1640639 825.51091446 273.4896778 833.90176596 296.09546734 815.39180259L296.09546734 815.39180259ZM329.50434185 856.19329077L329.50434185 856.19329077C272.55136517 902.82724863 202.4296889 870.11546405 202.4296889 796.13923538L202.4296889 221.99438181C202.4296889 148.26354102 272.58328266 115.33250339 329.50434185 161.94032807L662.6805936 434.7500683C711.04752167 474.35363913 711.0163128 543.80553363 662.6805936 583.38354888L329.50434185 856.19329077Z"  ></path></symbol><symbol id="icon-share" viewBox="0 0 1024 1024"><path d="M751.968 624.096c-55.68 0-103.456 31.968-127.392 78.24l-257.216-156.288c10.336-19.872 16.736-42.08 16.736-66.016 0-16.352-3.328-31.776-8.32-46.432L645.28 288c26.368 29.312 64.192 48.096 106.688 48.096 79.552 0 144-64.48 144-144s-64.448-144-144-144c-79.488 0-144 64.48-144 144 0 13.952 2.592 27.168 6.304 39.904l-271.84 146.848c-26.08-26.4-62.272-42.816-102.368-42.816-79.52 0-144 64.48-144 144s64.48 144 144 144c32.064 0 61.408-10.848 85.344-28.576l282.656 171.744c0 0.32-0.096 0.608-0.096 0.864 0 79.52 64.512 144 144 144 79.552 0 144-64.48 144-144S831.52 624.096 751.968 624.096zM751.968 112.096c44.128 0 80 35.904 80 80s-35.872 80-80 80-80-35.904-80-80S707.84 112.096 751.968 112.096zM240.064 560.032c-44.096 0-80-35.904-80-80s35.904-80 80-80 80 35.904 80 80S284.192 560.032 240.064 560.032zM751.968 848.096c-44.128 0-80-35.872-80-80s35.872-80 80-80 80 35.872 80 80S796.096 848.096 751.968 848.096z"  ></path></symbol></svg>',
      e = (t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss");

  if (e && !s.__iconfont__svg__cssinject__) {
    s.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (t) {
      console && console.log(t);
    }
  }

  !function (t) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(t, 0);else {
        var e = function e() {
          document.removeEventListener("DOMContentLoaded", e, !1), t();
        };

        document.addEventListener("DOMContentLoaded", e, !1);
      }
    } else document.attachEvent && (o = t, i = s.document, n = !1, (_a = function a() {
      try {
        i.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(_a, 50);
      }

      c();
    })(), i.onreadystatechange = function () {
      "complete" == i.readyState && (i.onreadystatechange = null, c());
    });

    function c() {
      n || (n = !0, o());
    }

    var o, i, n, _a;
  }(function () {
    var t, e, c, o, i, n;
    (t = document.createElement("div")).innerHTML = a, a = null, (e = t.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", c = e, (o = document.body).firstChild ? (i = c, (n = o.firstChild).parentNode.insertBefore(i, n)) : o.appendChild(c));
  });
}(window);
},{}],"C:/Users/fanison/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "3599" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/fanison/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/icons.js"], null)
//# sourceMappingURL=/icons.3ba10e46.js.map