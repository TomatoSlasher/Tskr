// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6mXFT":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "d1860b281e773ef683ae2c3ffc70f76c";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
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
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
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
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
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
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"4QWci":[function(require,module,exports) {
var _shopifyDraggable = require("@shopify/draggable");
var _templates = require("./templates");
require("url:./svg/edit-regular.svg");
var _urlSvgPenSolidSvg = require("url:./svg/pen-solid.svg");
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _urlSvgPenSolidSvgDefault = _parcelHelpers.interopDefault(_urlSvgPenSolidSvg);
var _urlSvgPlusSolidSvg = require("url:./svg/plus-solid.svg");
var _urlSvgPlusSolidSvgDefault = _parcelHelpers.interopDefault(_urlSvgPlusSolidSvg);
var _urlSvgTrashAltSolidSvg = require("url:./svg/trash-alt-solid.svg");
var _urlSvgTrashAltSolidSvgDefault = _parcelHelpers.interopDefault(_urlSvgTrashAltSolidSvg);
var _urlSvgEllipsisHSolidSvg = require("url:./svg/ellipsis-h-solid.svg");
var _urlSvgEllipsisHSolidSvgDefault = _parcelHelpers.interopDefault(_urlSvgEllipsisHSolidSvg);
var _urlSvgClockRegularSvg = require("url:./svg/clock-regular.svg");
var _urlSvgClockRegularSvgDefault = _parcelHelpers.interopDefault(_urlSvgClockRegularSvg);
var _urlSvgTimesSolidSvg = require("url:./svg/times-solid.svg");
var _urlSvgTimesSolidSvgDefault = _parcelHelpers.interopDefault(_urlSvgTimesSolidSvg);
var _urlSvgCheckSolidSvg = require("url:./svg/check-solid.svg");
var _urlSvgCheckSolidSvgDefault = _parcelHelpers.interopDefault(_urlSvgCheckSolidSvg);
var _urlSvgCheckCircleSolidSvg = require("url:./svg/check-circle-solid.svg");
var _urlSvgCheckCircleSolidSvgDefault = _parcelHelpers.interopDefault(_urlSvgCheckCircleSolidSvg);
var _urlSvgTimesCircleSolidSvg = require("url:./svg/times-circle-solid.svg");
var _urlSvgTimesCircleSolidSvgDefault = _parcelHelpers.interopDefault(_urlSvgTimesCircleSolidSvg);
// imported html element
const documentName = document.querySelector(".document-name");
const lists = document.querySelector(".list-container");
const list = document.querySelectorAll(".list");
const newList = document.querySelector(".new-list");
const newListContainer = document.querySelector(".newlist-container");
const listContainer = document.querySelector(".list-container");
const listItem = document.querySelectorAll(".list-item");
const listTitle = document.querySelectorAll(".list-title");
const listClear = document.querySelector(".trash-btn");
const addTask = document.querySelectorAll(".add-task");
const fullList = document.querySelectorAll(".full-list");
const app = document.querySelector(".app");
const sortBtn = document.querySelector(".sort-btn");
const sortTab = document.querySelector(".sort-tab");
const sortItemContainer = document.querySelector(".sort-item-container");
const templateBtn = document.querySelector(".template-btn");
const templateTab = document.querySelector(".template-tab");
const templatesAll = document.querySelector(".templates-all");
const templateHeader = document.querySelector(".template-header");
const templateH2 = document.querySelector(".template-h2");
const templateContainer = document.querySelectorAll(".template-container");
const templateTitle = document.querySelectorAll(".template-title");
const templateColumns = document.querySelectorAll(".template-columns");
const templateImg = document.querySelectorAll(".template-img");
const kanban = document.querySelector(".kanban");
const priorities = document.querySelector(".priorities");
const review = document.querySelector(".review");
const progressReview = document.querySelector(".progress-review");
const deleteListsWrapper = document.querySelector(".delete-lists-wrapper");
const deleteLists = document.querySelector(".delete-lists");
const deleteMsg = document.querySelector(".delete-msg");
const deleteBtnContainer = document.querySelector(".delete-btn-container");
const deleteOkBtn = document.querySelector(".delete-ok-btn");
const deleteCancelBtn = document.querySelector(".delete-cancel-btn");
const templateWrapper = document.querySelector(".template-wrapper");
const templateLists = document.querySelector(".template-lists");
const TemplateMsg = document.querySelector(".template-msg");
const templateBtnContainer = document.querySelector(".template-btn-container");
const templateOkBtn = document.querySelector(".template-ok-btn");
const templateCancelBtn = document.querySelector(".template-cancel-btn");
// get current date
const date = new Date();
const month = date.toLocaleString("default", {
  month: "short"
});
const day = date.getUTCDate();
const currentDate = `${day} ${month}`;
// get randome color from string
String.prototype.toColor = function () {
  var colors = ["#ff3f3f", "#f2ab23", "#ef4f91", "#ff1a0a", "#f9ea13", "#5a49d8", "#5cc4ed", "#7216af", "#ba0754", "#32af1f", "#1fa52f", "#500da3", "#a572cc", "#f7ada3", "#e57214", "#424241"];
  var hash = 0;
  if (this.length === 0) return hash;
  for (var i = 0; i < this.length; i++) {
    hash = this.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  hash = (hash % colors.length + colors.length) % colors.length;
  return colors[hash];
};
// update local storage to current page inner html
function updateStorage() {
  let listsHtml = document.querySelector(".list-container").innerHTML;
  const entry = {
    listUL: listsHtml
  };
  localStorage.setItem("entry", JSON.stringify(entry));
}
let items = JSON.parse(localStorage.getItem("entry"));
// inserting localstorage inner html when refreshing
if (items) {
  lists.insertAdjacentHTML("afterbegin", items.listUL);
}
function updateProjectName() {
  let listsHtml = document.querySelector(".document-name").innerText;
  const entry = {
    listUL: listsHtml
  };
  localStorage.setItem("documentTitle", JSON.stringify(entry));
}
let documentStorage = JSON.parse(localStorage.getItem("documentTitle"));
console.log(documentStorage.listUL);
documentName.addEventListener("input", () => {
  updateProjectName();
});
if (documentStorage) {
  documentName.innerText = documentStorage.listUL;
}
// // allowing task items to be sortable
let sortable = new _shopifyDraggable.Sortable(document.querySelectorAll(".li-container"), {
  draggable: ".full-item",
  mirror: {
    constrainDimensions: true
  },
  SwapAnimation: {
    duration: 200,
    easingFunction: "ease-in-out"
  },
  plugins: [_shopifyDraggable.Plugins["SwapAnimation"]]
});
// make the task items hidden when starting to drag
sortable.on("drag:move", e => {
  e.source.style.backgroundColor = "#cbcdd1";
  e.source.childNodes[1].style.visibility = "hidden";
});
sortable.on("drag:stopped", e => {
  updateStorage();
});
// reasigning the task items to the sortable library when they get destroyed
const updateSort = function () {
  sortable.destroy();
  sortable = new _shopifyDraggable.Sortable(document.querySelectorAll(".li-container"), {
    draggable: ".full-item",
    mirror: {
      constrainDimensions: true
    },
    SwapAnimation: {
      duration: 200,
      easingFunction: "ease-in-out"
    },
    plugins: [_shopifyDraggable.Plugins["SwapAnimation"]]
  });
  sortable.on("drag:start", e => {
    let ListTab = document.querySelectorAll(".list-tab");
    ListTab.forEach(el => {
      if (el) {
        if (el.classList.contains("display-block")) {
          el.classList.remove("display-block");
        }
      }
    });
  });
  sortable.on("drag:move", e => {
    e.source.style.backgroundColor = "#cbcdd1";
    e.source.childNodes[1].style.visibility = "hidden";
  });
  // updating storage and re-asigning the lists to the sortable library
  sortable.on("drag:stopped", e => {
    updateStorage();
  });
};
const taskTitleMarkup = `
  <div class="text-tag-add text-list-add">
                              <textarea class='tags-text list-textarea' name="tags-text" id="task-text" placeholder="Enter List Name"></textarea>
                              <div class="add-cancel-btn">
                                <p class="add-tag-btn tag-btn">Add List</p>
                                <p class="cancel-tag-btn tag-btn">Cancel</p>
                              </div>


                            </div>
  `;
const textareaMarkup = `
  <div class="text-tag-add text-task-add">
                              <textarea class='tags-text task-textarea' name="tags-text" id="task-text" placeholder="Enter Task"></textarea>
                              <div class="add-cancel-btn">
                                <p class="add-tag-btn tag-btn">Add Task</p>
                                <p class="cancel-tag-btn tag-btn">Cancel</p>
                              </div>


                            </div>
  `;
const gitTextareaMarkup = value => {
  const textareaValue = `
<div class="text-tag-add text-task-add">
                              <textarea class='tags-text task-textarea' name="tags-text" id="task-text" placeholder="Enter Task">${value}</textarea>
                              <div class="add-cancel-btn">
                                <p class="add-tag-btn tag-btn">Add Task</p>
                                <p class="cancel-tag-btn tag-btn">Cancel</p>
                              </div>


                            </div>
`;
  return textareaValue;
};
const gitTaskMarkup = value => {
  const listItemText = `<p class='list-item-text'>${value}</p>`;
  return listItemText;
};
const gitListEditMarkup = value => {
  const listText = `<h2 class='list-title'>${value}</h2>`;
  return listText;
};
const gitLiMarkup = value => {
  const newListItemMarkup = `
           <div class='full-item'>

                      <li  class="list-item">
                      <div class='completed-container'>
                      <div class="completed">
                      <img
                        class="check-icon"
                        src="${_urlSvgCheckSolidSvgDefault.default}"
                        alt=""
                      />
                      <p>Completed</p>
                      </div>
                    </div>

                        <div class="task-header">
                           <div class="tags">
                           <p class="add-tag tags-el">Add Tag +</p>

                           </div>
                         <img id='edit-con' class= 'edit-icon-li' src="${_urlSvgEllipsisHSolidSvgDefault.default}"/>
                        </div>

                         <p class='list-item-text'>${value}</p>

                        <div class="task-footer">
                         <p class="created"> <img class="clock" src="${_urlSvgClockRegularSvgDefault.default}" alt="">${currentDate}</p>
                         <p class="created"></p>
                        </div>



                      </li>

                      <div id = 'tab' class='li-edit-tab'>
                          <div class='tab-icon tab-pen'>
                             <img class= 'edit-pen-li tab-img' src="${_urlSvgPenSolidSvgDefault.default}"/>
                             <p class='tab-text-pen'> Edit task </p>
                          </div>

                          <div class='tab-icon tab-trash'>
                            <img class= 'edit-trash-li tab-img' src="${_urlSvgTrashAltSolidSvgDefault.default}"/> <p class='tab-text-trash'> Remove task </p>
                          </div>

                          <div class='check-container'>
                            <div class='tab-icon tab-check'>
                              <img class= 'edit-check-li tab-img' src="${_urlSvgCheckCircleSolidSvgDefault.default}"/> <p class='tab-text-check'> Mark as complete </p>
                            </div>
                          </div>

                          <div class='uncheck-container'>
                            <div class='tab-icon tab-uncheck'>
                              <img class= 'edit-uncheck-li tab-img' src="${_urlSvgTimesCircleSolidSvgDefault.default}"/> <p class='tab-text-uncheck'> Unmark as complete </p>
                            </div>
                          </div>


                      </div>
                    </div>
          `;
  return newListItemMarkup;
};
const gitListMarkup = value => {
  const newListMarkup = `
        <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>${value}</h2><img class= 'edit-icon'src="${_urlSvgEllipsisHSolidSvgDefault.default}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                  <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${_urlSvgPenSolidSvgDefault.default}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${_urlSvgTrashAltSolidSvgDefault.default}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${_urlSvgPlusSolidSvgDefault.default}"/> </span>  Add task</p>


         </div>

        `;
  return newListMarkup;
};
const tagTextMarkup = `
  <div class="text-tag-add">
                              <textarea class='tags-text' name="tags-text" id="task-text" placeholder="Enter Tag"></textarea>
                              <div class="add-cancel-btn">
                                <p class="add-tag-btn tag-btn">Add Tag</p>
                                <p class="cancel-tag-btn tag-btn">Cancel</p>
                              </div>


                            </div>
  `;
const tagMarkup = value => {
  const markup = `
   <p class="tags-el tags-all">${value}<img class = 'tag-delete' src="${_urlSvgTimesSolidSvgDefault.default}" alt=""></p>
  `;
  return markup;
};
const insertTag = (value, el) => {
  el.insertAdjacentHTML("afterend", tagMarkup(value));
  el.remove();
  updateStorage();
  updateSort();
  tagsColors();
};
// add new tags
const tagTextHandler = el => {
  el.insertAdjacentHTML("beforeBegin", tagTextMarkup);
  const tagTextareaAll = document.querySelector(".text-tag-add");
  const tagTextarea = document.querySelector(".tags-text");
  const tagCancel = document.querySelector(".cancel-tag-btn");
  const tagAdd = document.querySelector(".add-tag-btn");
  tagTextarea.focus();
  // move cursor to the end of the word
  tagTextarea.setSelectionRange(tagTextarea.value.length, tagTextarea.value.length);
  tagCancel.addEventListener("click", () => {
    tagTextareaAll.remove();
    updateSort();
  });
  tagAdd.addEventListener("click", () => {
    const tagTextValue = tagTextarea.value.toLowerCase();
    if (tagTextValue) {
      insertTag(tagTextValue, tagTextareaAll);
    }
    if (!tagTextValue) {
      tagTextareaAll.remove();
    }
    updateSort();
    removeSortItem();
    sortTabHandler();
  });
  tagTextarea.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      const tagTextValue = tagTextarea.value.toLowerCase();
      if (tagTextValue) {
        insertTag(tagTextValue, tagTextareaAll);
      }
      if (!tagTextValue) {
        tagTextareaAll.remove();
      }
      updateSort();
      removeSortItem();
      sortTabHandler();
    }
  });
  window.addEventListener("mousedown", e => {
    if (e.target != tagCancel) {
      tagTextarea.addEventListener("blur", e => {
        const tagTextValue = tagTextarea.value.toLowerCase();
        if (tagTextValue) {
          insertTag(tagTextValue, tagTextareaAll);
        }
        if (!tagTextValue) {
          tagTextareaAll.remove();
        }
        updateSort();
        removeSortItem();
        sortTabHandler();
      });
    }
  }, {
    once: true
  });
};
lists.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.matches(".add-tag")) {
    const addTagEl = e.path[0];
    tagTextHandler(addTagEl);
  }
  if (e.target.matches(".tag-delete")) {
    const tagEl = e.path[1];
    tagEl.remove();
    restoreTags();
    removeSortItem();
    sortTabHandler();
    updateStorage();
    updateSort();
  }
});
const tagsColors = () => {
  const tagsAll = document.querySelectorAll(".tags-all");
  tagsAll.forEach(el => {
    const tagText = el.innerText;
    const color = `${tagText}`.toColor();
    el.style.backgroundColor = `${color}`;
  });
};
tagsColors();
const listTextareaHandler = first => {
  const el = document.querySelector(".list-textarea");
  const textListAdd = document.querySelector(".text-list-add");
  const tagCancel = document.querySelector(".cancel-tag-btn");
  const tagAdd = document.querySelector(".add-tag-btn");
  el.focus();
  textListAdd.scrollIntoView({
    behavior: "smooth"
  });
  // adding text area text to a new task item when pressing enter
  tagCancel.addEventListener("mousedown", e => {
    e.preventDefault();
    textListAdd.remove();
    updateSort();
  });
  tagAdd.addEventListener("click", () => {
    const textValue = el.value;
    // only adding new task item if the textarea box containes text
    if (textValue) {
      first.insertAdjacentHTML("beforeend", gitListMarkup(textValue));
      textListAdd.remove();
      updateStorage();
      updateSort();
    }
    if (!textValue) {
      textListAdd.remove();
    }
    updateStorage();
    updateSort();
  });
  el.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      const textValue = el.value;
      textListAdd.remove();
      // only adding new task item if the textarea box containes text
      if (textValue) {
        first.insertAdjacentHTML("beforeend", gitListMarkup(textValue));
        updateStorage();
      }
      updateSort();
    }
  });
  window.addEventListener("mousedown", e => {
    if (e.target != tagCancel) {
      el.addEventListener("blur", e => {
        const textValue = el.value;
        if (textValue) {
          first.insertAdjacentHTML("beforeend", gitListMarkup(textValue));
          textListAdd.remove();
          updateStorage();
          updateSort();
        }
        if (!textValue) {
          textListAdd.remove();
        }
        updateSort();
      });
    }
  }, {
    once: true
  });
};
// creating new lists
newList.addEventListener("click", e => {
  e.preventDefault();
  lists.insertAdjacentHTML("beforeend", taskTitleMarkup);
  listTextareaHandler(lists);
  // animation scroll when you click the add new list button
  newListContainer.scrollIntoView({
    behavior: "smooth"
  });
});
// switching between the list and task item to be draggable (only 1 part of the elements can be drggable)
lists.addEventListener("mousedown", e => {
  if (e.target.matches(".add-task")) {
    sortable.destroy();
  }
  if (e.target.matches(".edit-icon-li")) {
    sortable.destroy();
  }
  if (e.target.matches(".full-item")) {
    sortable.destroy();
  }
  if (e.target.matches(".task-textarea")) {
    sortable.destroy();
  }
  if (e.target.matches(".task-header")) {}
  if (e.target.matches(".add-tag")) {
    sortable.destroy();
  }
  if (e.target.matches(".tag-delete")) {
    sortable.destroy();
  }
});
lists.addEventListener("mouseup", e => {
  if (e.target.matches(".tag-delete")) {
    updateSort();
  }
});
// update sorting list when scrolling is stoped
// update sortList
window.addEventListener("mousedown", function (e) {
  if (e.target.matches(".full-item")) {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      updateSort();
    }, 50);
  }
}, true);
app.addEventListener("click", e => {
  if (e.target.matches(".edit-icon")) {
    const listTab = e.path[2].nextElementSibling;
    listTab.classList.toggle("display-block");
  }
});
const removingEl = el => {
  el.remove();
  restoreTags();
  removeSortItem();
  sortTabHandler();
  updateStorage();
  updateSort();
};
window.addEventListener("click", e => {
  let ListTab = document.querySelectorAll(".list-tab");
  ListTab.forEach(el => {
    if (el) {
      const iconLi = el.previousElementSibling.firstElementChild.lastElementChild;
      if (el.classList.contains("display-block")) {
        if (e.target != el && e.target != iconLi) {
          el.classList.remove("display-block");
          updateSort();
        }
      }
    }
  });
});
// removing list when click on the remove list
lists.addEventListener("click", e => {
  if (e.target.matches(".list-remove-icon")) {
    const liSibling = e.path[2];
    removingEl(liSibling);
  }
  if (e.target.matches(".list-remove-tab-img ")) {
    const liSibling = e.path[3];
    removingEl(liSibling);
  }
  if (e.target.matches(".list-remove-tab-text")) {
    const liSibling = e.path[3];
    removingEl(liSibling);
  }
});
lists.addEventListener("click", e => {
  if (e.target.matches(".list-edit-icon")) {
    const liSibling = e.path[1].previousElementSibling.childNodes[1].firstElementChild;
    editEl(liSibling, gitListEditMarkup);
  }
  if (e.target.matches(".list-edit-tab-img ")) {
    const liSibling = e.path[2].previousElementSibling.childNodes[1].firstElementChild;
    editEl(liSibling, gitListEditMarkup);
  }
  if (e.target.matches(".list-edit-tab-text")) {
    const liSibling = e.path[2].previousElementSibling.childNodes[1].firstElementChild;
    editEl(liSibling, gitListEditMarkup);
  }
});
// adding the editing tab when you click the pencil inside the task items
lists.addEventListener("click", e => {
  if (e.target.matches(".edit-icon-li")) {
    const getEl = e.path[2].nextElementSibling;
    const fullItem = e.path[3];
    if (getEl) {
      getEl.classList.toggle("display-block");
    }
    if (getEl.classList.contains("display-block")) {
      fullItem.scrollIntoView({
        behavior: "smooth"
      });
    }
    if (!getEl.classList.contains("display-block")) {
      updateSort();
    }
  }
});
// removing task tab when clicking outside
window.addEventListener("click", e => {
  let tabTrash = document.querySelectorAll(".li-edit-tab");
  tabTrash.forEach(el => {
    if (el) {
      const iconLi = el.previousElementSibling.childNodes[3].childNodes[3];
      if (el.classList.contains("display-block")) {
        if (e.target != el && e.target != iconLi) {
          el.classList.remove("display-block");
          updateSort();
        }
      }
    }
  });
});
// logic for removing task items when clicking remove item button in the tabs menu
lists.addEventListener("click", e => {
  if (e.target.matches(".tab-trash")) {
    const liSibling = e.path[2];
    removingEl(liSibling);
  }
  if (e.target.matches(".edit-trash-li")) {
    const liSibling = e.path[3];
    removingEl(liSibling);
  }
  if (e.target.matches(".tab-text-trash")) {
    const liSibling = e.path[3];
    removingEl(liSibling);
  }
});
// adding complete element and switch edit tab to unmark as complete
const checkTaskHandler = (complete, tabUncheck, tabCheck, editTab) => {
  complete.style.display = "block";
  tabUncheck.style.display = "block";
  tabCheck.style.display = "none";
  editTab.style.top = "5.5rem";
};
lists.addEventListener("click", e => {
  if (e.target.matches(".tab-check")) {
    const completeEl = e.path[3].childNodes[1].childNodes[1];
    const tabUncheckEl = e.path[1].nextElementSibling;
    const tabCheckEl = e.path[1];
    const editTab = e.path[2];
    checkTaskHandler(completeEl, tabUncheckEl, tabCheckEl, editTab);
    updateStorage();
  }
  if (e.target.matches(".edit-check-li")) {
    const completeEl = e.path[4].childNodes[1].childNodes[1];
    const tabUncheckEl = e.path[2].nextElementSibling;
    const tabCheckEl = e.path[2];
    const editTab = e.path[3];
    checkTaskHandler(completeEl, tabUncheckEl, tabCheckEl, editTab);
    updateStorage();
  }
  if (e.target.matches(".tab-text-check")) {
    const completeEl = e.path[4].childNodes[1].childNodes[1];
    const tabUncheckEl = e.path[2].nextElementSibling;
    const tabCheckEl = e.path[2];
    const editTab = e.path[3];
    checkTaskHandler(completeEl, tabUncheckEl, tabCheckEl, editTab);
    updateStorage();
  }
});
// removing complete element and switch edit tab to mark as complete
const uncheckTaskHandler = (complete, tabUncheck, tabCheck, editTab) => {
  complete.style.display = "none";
  tabUncheck.style.display = "none";
  tabCheck.style.display = "block";
  editTab.style.top = "2.5rem";
};
lists.addEventListener("click", e => {
  if (e.target.matches(".tab-uncheck")) {
    const completeEl = e.path[3].childNodes[1].childNodes[1];
    const tabUncheckEl = e.path[1];
    const tabCheckEl = e.path[1].previousElementSibling;
    const editTab = e.path[2];
    uncheckTaskHandler(completeEl, tabUncheckEl, tabCheckEl, editTab);
    updateStorage();
  }
  if (e.target.matches(".edit-uncheck-li")) {
    const completeEl = e.path[4].childNodes[1].childNodes[1];
    const tabUncheckEl = e.path[2];
    const tabCheckEl = e.path[2].previousElementSibling;
    const editTab = e.path[3];
    uncheckTaskHandler(completeEl, tabUncheckEl, tabCheckEl, editTab);
    updateStorage();
  }
  if (e.target.matches(".tab-text-uncheck")) {
    const completeEl = e.path[4].childNodes[1].childNodes[1];
    const tabUncheckEl = e.path[2];
    const tabCheckEl = e.path[2].previousElementSibling;
    const editTab = e.path[3];
    uncheckTaskHandler(completeEl, tabUncheckEl, tabCheckEl, editTab);
    updateStorage();
  }
});
// task name edit
const editEl = (element, text) => {
  element.style.display = "none";
  // get the text of the list item
  const liInnerText = element.innerText;
  element.insertAdjacentHTML("afterend", gitTextareaMarkup(liInnerText));
  const taskTextarea = document.querySelector(".task-textarea");
  const taskTextareaAll = document.querySelector(".text-task-add");
  const tagCancel = document.querySelector(".cancel-tag-btn");
  const tagAdd = document.querySelector(".add-tag-btn");
  taskTextarea.focus();
  // move cursor to the end of the word
  taskTextarea.setSelectionRange(taskTextarea.value.length, taskTextarea.value.length);
  // adding text area text to a new task item when pressing enter
  tagCancel.addEventListener("mousedown", e => {
    e.preventDefault();
    taskTextareaAll.remove();
    updateSort();
    element.style.display = "block";
  });
  taskTextarea.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      const textValue = taskTextarea.value;
      // only adding new task item if the textarea box containes text
      if (textValue) {
        taskTextareaAll.insertAdjacentHTML("afterend", text(textValue));
        element.remove();
        taskTextareaAll.remove();
      }
      if (!textValue) {
        taskTextareaAll.insertAdjacentHTML("afterend", text(liInnerText));
        taskTextareaAll.remove();
      }
      updateStorage();
      updateSort();
    }
  });
  window.addEventListener("mousedown", e => {
    if (e.target != tagCancel) {
      taskTextarea.addEventListener("blur", e => {
        const textValue = taskTextarea.value;
        // only adding new task item if the textarea box containes text
        if (textValue) {
          taskTextareaAll.insertAdjacentHTML("afterend", text(textValue));
          element.remove();
          taskTextareaAll.remove();
        }
        if (!textValue) {
          taskTextareaAll.insertAdjacentHTML("afterend", text(liInnerText));
          taskTextareaAll.remove();
        }
        updateStorage();
      });
    }
  }, {
    once: true
  });
};
// logic for editing task items when clicking edit task button in the tabs menu
lists.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.matches(".tab-pen")) {
    const tab = e.path[2].childNodes[1].childNodes[3].nextElementSibling;
    editEl(tab, gitTaskMarkup);
  }
  if (e.target.matches(".edit-pen-li")) {
    const tab = e.path[3].childNodes[1].childNodes[5];
    editEl(tab, gitTaskMarkup);
  }
  if (e.target.matches(".tab-text-pen")) {
    const tab = e.path[3].childNodes[1].childNodes[3].nextElementSibling;
    editEl(tab, gitTaskMarkup);
  }
});
const textareaHandler = first => {
  const el = document.querySelector(".task-textarea");
  const textTaskAdd = document.querySelector(".text-task-add");
  const tagCancel = document.querySelector(".cancel-tag-btn");
  const tagAdd = document.querySelector(".add-tag-btn");
  el.focus();
  textTaskAdd.scrollIntoView({
    behavior: "smooth"
  });
  // adding text area text to a new task item when pressing enter
  tagCancel.addEventListener("mousedown", e => {
    e.preventDefault();
    textTaskAdd.remove();
    updateSort();
  });
  tagAdd.addEventListener("click", () => {
    const textValue = el.value;
    // only adding new task item if the textarea box containes text
    if (textValue) {
      first.insertAdjacentHTML("beforeend", gitLiMarkup(textValue));
      textTaskAdd.remove();
      updateStorage();
      updateSort();
    }
    if (!textValue) {
      textTaskAdd.remove();
    }
    restoreTags();
    removeSortItem();
    sortTabHandler();
    updateStorage();
    updateSort();
  });
  el.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      const textValue = el.value;
      textTaskAdd.remove();
      // only adding new task item if the textarea box containes text
      if (textValue) {
        first.insertAdjacentHTML("beforeend", gitLiMarkup(textValue));
        updateStorage();
      }
      restoreTags();
      removeSortItem();
      sortTabHandler();
      updateStorage();
      updateSort();
    }
  });
  window.addEventListener("mousedown", e => {
    if (e.target != tagCancel) {
      el.addEventListener("blur", e => {
        const textValue = el.value;
        if (textValue) {
          first.insertAdjacentHTML("beforeend", gitLiMarkup(textValue));
          textTaskAdd.remove();
          updateStorage();
          updateSort();
        }
        if (!textValue) {
          textTaskAdd.remove();
        }
        restoreTags();
        removeSortItem();
        sortTabHandler();
        updateStorage();
        updateSort();
      });
    }
  }, {
    once: true
  });
};
// adding new task
lists.addEventListener("click", e => {
  if (e.target.matches(".add-task")) {
    const getEl = e.path[1].firstChild.nextSibling;
    const firstChild = getEl.childNodes[3];
    // entering teaxtarea box when click the add task button
    firstChild.insertAdjacentHTML("beforeend", textareaMarkup);
    // const taskTextarea = document.querySelector(".task-textarea");
    textareaHandler(firstChild);
  }
  if (e.target.matches(".add-task-img")) {
    const getEl = e.path[3].childNodes[1];
    const firstChild = getEl.childNodes[3];
    // entering teaxtarea box when click the add task button
    firstChild.insertAdjacentHTML("beforeend", textareaMarkup);
    // const taskTextarea = document.querySelector(".task-textarea");
    textareaHandler(firstChild);
  }
});
const removeSortItem = () => {
  const sortItem = document.querySelectorAll(".sort-item");
  sortItem.forEach(x => x.remove());
};
const restoreTags = () => {
  const liContainer = document.querySelectorAll(".li-container");
  const fullItem = document.querySelectorAll(".full-item");
  const sortingByCancel = document.querySelector(".sorting-by");
  fullItem.forEach(x => x.style.display = "block");
  if (sortingByCancel) {
    sortingByCancel.remove();
  }
  liContainer.forEach(x => x.style.maxHeight = "55vh");
};
sortBtn.addEventListener("click", e => {
  sortTab.classList.toggle("display-block");
});
window.addEventListener("click", e => {
  if (!e.target.matches(".sort-h2") && !e.target.matches(".sort-item-container") && e.target != sortBtn && e.target != sortTab) {
    sortTab.classList.remove("display-block");
  }
});
const sortTabHandler = () => {
  const noTags = document.querySelector(".no-tags");
  const tags = document.querySelectorAll(".tags-all");
  const tagsInnerText = Array.from(tags, x => x.innerText);
  const tagsUnique = [...new Set(tagsInnerText)];
  if (tagsUnique.length > 0) {
    noTags.style.display = "none";
  }
  if (tagsUnique.length === 0) {
    noTags.style.display = "block";
  }
  const tagsTabMarkup = tagsUnique.map(x => `<p class="sort-item">${x}</p>`).join("");
  sortItemContainer.insertAdjacentHTML("afterbegin", tagsTabMarkup);
  const sortItem = document.querySelectorAll(".sort-item");
  sortItem.forEach(x => {
    const color = `${x.innerText}`.toColor();
    x.style.backgroundColor = `${color}`;
  });
};
sortTabHandler();
// hidding list item that doesn't contain the value string
const sortByTag = value => {
  const tagsAll = document.querySelectorAll(".tags-all");
  const fullItem = document.querySelectorAll(".full-item");
  // hide all list items
  fullItem.forEach(x => {
    x.style.display = "none";
  });
  // unhidding list item if they the match the value
  [...tagsAll].map(x => {
    if (x.innerText == value) {
      x.closest(".full-item").style.display = "block";
    }
  });
};
// add sorting by text with the sorted by tag
const sortingByTextMarkup = value => {
  return ` <h2 class="sorting-by">
        Sorting By (${value}) <img class ='sorting-by-cancel' src="${_urlSvgTimesSolidSvgDefault.default}" alt="" />
      </h2>`;
};
// sorting and adding
sortTab.addEventListener("click", e => {
  if (e.target.matches(".sort-item")) {
    const liContainer = document.querySelectorAll(".li-container");
    const sortTagText = e.path[0].innerText;
    const sortingBy = document.querySelector(".sorting-by");
    if (sortingBy) {
      sortingBy.remove();
    }
    sortByTag(sortTagText);
    app.insertAdjacentHTML("afterbegin", sortingByTextMarkup(sortTagText));
    liContainer.forEach(x => x.style.maxHeight = "43vh");
  }
});
app.addEventListener("click", e => {
  if (e.target.matches(".sorting-by-cancel")) {
    restoreTags();
    updateStorage();
  }
});
restoreTags();
removeSortItem();
sortTabHandler();
templateBtn.addEventListener("click", () => {
  templateTab.classList.toggle("display-block");
});
const insertingTemplate = template => {
  return listContainer.insertAdjacentHTML("afterbegin", template);
};
window.addEventListener("click", e => {
  if (e.target != templatesAll && e.target != templateBtn && e.target != templateHeader && e.target != templateH2 && e.target != templateTab) {
    templateTab.classList.remove("display-block");
  }
});
const templatePopupHandler = template => {
  window.localStorage.clear();
  lists.innerHTML = "";
  insertingTemplate(template);
  updateStorage();
};
const templateOkBtnHandler = templateName => {
  const fullList = document.querySelectorAll(".full-list");
  if (fullList.length > 0) {
    templateWrapper.classList.add("display-block");
    templateOkBtn.addEventListener("click", () => {
      templatePopupHandler(templateName);
      templateWrapper.classList.remove("display-block");
    });
    templateCancelBtn.addEventListener("click", () => {
      templateWrapper.classList.remove("display-block");
    });
    window.addEventListener("click", e => {
      if (!e.target.matches(".template-title") && !e.target.matches(".template-lists") && !e.target.matches(".template-msg") && !e.target.matches(".template-btn-container") && !e.target.matches(".template-columns") && !e.target.matches(".template-img") && !e.target.matches(".template-container")) {
        templateWrapper.classList.remove("display-block");
      }
    });
  } else {
    templatePopupHandler(templateName);
  }
};
kanban.addEventListener("click", e => {
  templateOkBtnHandler(_templates.kanban);
});
priorities.addEventListener("click", e => {
  templateOkBtnHandler(_templates.priorities);
});
review.addEventListener("click", e => {
  templateOkBtnHandler(_templates.review);
});
progressReview.addEventListener("click", e => {
  templateOkBtnHandler(_templates.progressReview);
});
// clear button for deleting localstorage
listClear.addEventListener("click", () => {
  const fullList = document.querySelectorAll(".full-list");
  if (fullList.length > 0) {
    deleteListsWrapper.classList.add("display-block");
  }
  window.addEventListener("click", e => {
    if (e.target != listClear && e.target != deleteLists && e.target != deleteMsg && e.target != deleteBtnContainer) {
      deleteListsWrapper.classList.remove("display-block");
    }
  });
});
const deleteOkBtnHandler = e => {
  window.localStorage.clear();
  lists.innerHTML = "";
  deleteListsWrapper.classList.remove("display-block");
};
deleteOkBtn.addEventListener("click", e => {
  deleteOkBtnHandler();
});
deleteCancelBtn.addEventListener("click", e => {
  deleteListsWrapper.classList.remove("display-block");
});

},{"@shopify/draggable":"17KMZ","url:./svg/edit-regular.svg":"46RNM","url:./svg/pen-solid.svg":"3Prps","url:./svg/plus-solid.svg":"391mc","url:./svg/trash-alt-solid.svg":"1WHsQ","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","url:./svg/ellipsis-h-solid.svg":"2D1v6","url:./svg/clock-regular.svg":"14V3c","url:./svg/times-solid.svg":"5CAO8","url:./svg/check-solid.svg":"1QBx3","url:./svg/check-circle-solid.svg":"1FRdW","url:./svg/times-circle-solid.svg":"426f6","./templates":"3UM1n"}],"17KMZ":[function(require,module,exports) {
var define;
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(); else if (typeof define === 'function' && define.amd) define("Draggable", [], factory); else if (typeof exports === 'object') exports["Draggable"] = factory(); else root["Draggable"] = factory();
})(window, function () {
  return (
    /******/
    (function (modules) {
      // webpackBootstrap
      /******/
      // The module cache
      /******/
      var installedModules = {};
      /******/
      /******/
      // The require function
      /******/
      function __webpack_require__(moduleId) {
        /******/
        /******/
        // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
        }
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,
          /******/
          l: false,
          /******/
          exports: {}
        };
        /******/
        /******/
        // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/
        // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/
        // Return the exports of the module
        /******/
        return module.exports;
      }
      /******/
      /******/
      /******/
      // expose the modules object (__webpack_modules__)
      /******/
      __webpack_require__.m = modules;
      /******/
      /******/
      // expose the module cache
      /******/
      __webpack_require__.c = installedModules;
      /******/
      /******/
      // define getter function for harmony exports
      /******/
      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
        }
      };
      /******/
      /******/
      // define __esModule on exports
      /******/
      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
      };
      /******/
      /******/
      // create a fake namespace object
      /******/
      // mode & 1: value is a module id, require it
      /******/
      // mode & 2: merge all properties of value into the ns
      /******/
      // mode & 4: return value when already ns object
      /******/
      // mode & 8|1: behave like require
      /******/
      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, (function (key) {
          return value[key];
        }).bind(null, key));
        /******/
        return ns;
      };
      /******/
      /******/
      // getDefaultExport function for compatibility with non-harmony modules
      /******/
      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ? /******/
        function getDefault() {
          return module['default'];
        } : /******/
        function getModuleExports() {
          return module;
        };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
      };
      /******/
      /******/
      // Object.prototype.hasOwnProperty.call
      /******/
      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/
      // __webpack_public_path__
      /******/
      __webpack_require__.p = "";
      /******/
      /******/
      /******/
      // Load entry module and return exports
      /******/
      return __webpack_require__(__webpack_require__.s = 72);
    })(/************************************************************************/
    /******/
    [/*0*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _AbstractPlugin = __webpack_require__(66);
      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _AbstractPlugin2.default;
    }, /*1*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _AbstractEvent = __webpack_require__(70);
      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _AbstractEvent2.default;
    }, /*2*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _closest = __webpack_require__(57);
      Object.defineProperty(exports, 'closest', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_closest).default;
        }
      });
      var _requestNextAnimationFrame = __webpack_require__(55);
      Object.defineProperty(exports, 'requestNextAnimationFrame', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_requestNextAnimationFrame).default;
        }
      });
      var _distance = __webpack_require__(53);
      Object.defineProperty(exports, 'distance', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_distance).default;
        }
      });
      var _touchCoords = __webpack_require__(51);
      Object.defineProperty(exports, 'touchCoords', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_touchCoords).default;
        }
      });
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
    }, /*3*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _SensorEvent = __webpack_require__(46);
      Object.keys(_SensorEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _SensorEvent[key];
          }
        });
      });
    }, /*4*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _Sensor = __webpack_require__(49);
      var _Sensor2 = _interopRequireDefault(_Sensor);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _Sensor2.default;
    }, /*5*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _DragEvent = __webpack_require__(14);
      Object.keys(_DragEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _DragEvent[key];
          }
        });
      });
      var _DraggableEvent = __webpack_require__(13);
      Object.keys(_DraggableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _DraggableEvent[key];
          }
        });
      });
      var _Plugins = __webpack_require__(12);
      Object.keys(_Plugins).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _Plugins[key];
          }
        });
      });
      var _Sensors = __webpack_require__(6);
      Object.keys(_Sensors).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _Sensors[key];
          }
        });
      });
      var _Draggable = __webpack_require__(39);
      var _Draggable2 = _interopRequireDefault(_Draggable);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _Draggable2.default;
    }, /*6*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _Sensor = __webpack_require__(4);
      Object.defineProperty(exports, 'Sensor', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_Sensor).default;
        }
      });
      var _MouseSensor = __webpack_require__(48);
      Object.defineProperty(exports, 'MouseSensor', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_MouseSensor).default;
        }
      });
      var _TouchSensor = __webpack_require__(45);
      Object.defineProperty(exports, 'TouchSensor', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_TouchSensor).default;
        }
      });
      var _DragSensor = __webpack_require__(43);
      Object.defineProperty(exports, 'DragSensor', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_DragSensor).default;
        }
      });
      var _ForceTouchSensor = __webpack_require__(41);
      Object.defineProperty(exports, 'ForceTouchSensor', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_ForceTouchSensor).default;
        }
      });
      var _SensorEvent = __webpack_require__(3);
      Object.keys(_SensorEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _SensorEvent[key];
          }
        });
      });
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
    }, /*7*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _SnappableEvent = __webpack_require__(20);
      Object.keys(_SnappableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _SnappableEvent[key];
          }
        });
      });
    }, /*8*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _CollidableEvent = __webpack_require__(25);
      Object.keys(_CollidableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _CollidableEvent[key];
          }
        });
      });
    }, /*9*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _SortableEvent = __webpack_require__(29);
      Object.keys(_SortableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _SortableEvent[key];
          }
        });
      });
    }, /*10*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _SwappableEvent = __webpack_require__(32);
      Object.keys(_SwappableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _SwappableEvent[key];
          }
        });
      });
    }, /*11*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _DroppableEvent = __webpack_require__(35);
      Object.keys(_DroppableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _DroppableEvent[key];
          }
        });
      });
    }, /*12*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _Announcement = __webpack_require__(68);
      Object.defineProperty(exports, 'Announcement', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_Announcement).default;
        }
      });
      Object.defineProperty(exports, 'defaultAnnouncementOptions', {
        enumerable: true,
        get: function () {
          return _Announcement.defaultOptions;
        }
      });
      var _Focusable = __webpack_require__(65);
      Object.defineProperty(exports, 'Focusable', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_Focusable).default;
        }
      });
      var _Mirror = __webpack_require__(63);
      Object.defineProperty(exports, 'Mirror', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_Mirror).default;
        }
      });
      Object.defineProperty(exports, 'defaultMirrorOptions', {
        enumerable: true,
        get: function () {
          return _Mirror.defaultOptions;
        }
      });
      var _Scrollable = __webpack_require__(59);
      Object.defineProperty(exports, 'Scrollable', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_Scrollable).default;
        }
      });
      Object.defineProperty(exports, 'defaultScrollableOptions', {
        enumerable: true,
        get: function () {
          return _Scrollable.defaultOptions;
        }
      });
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
    }, /*13*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _DraggableEvent = __webpack_require__(69);
      Object.keys(_DraggableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _DraggableEvent[key];
          }
        });
      });
    }, /*14*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _DragEvent = __webpack_require__(71);
      Object.keys(_DragEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _DragEvent[key];
          }
        });
      });
    }, /*15*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;
      var _extends = Object.assign || (function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      });
      var _AbstractPlugin = __webpack_require__(0);
      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      const onSortableSorted = Symbol('onSortableSorted');
      const onSortableSort = Symbol('onSortableSort');
      /**
      * SortAnimation default options
      * @property {Object} defaultOptions
      * @property {Number} defaultOptions.duration
      * @property {String} defaultOptions.easingFunction
      * @type {Object}
      */
      const defaultOptions = exports.defaultOptions = {
        duration: 150,
        easingFunction: 'ease-in-out'
      };
      /**
      * SortAnimation plugin adds sort animation for sortable
      * @class SortAnimation
      * @module SortAnimation
      * @extends AbstractPlugin
      */
      class SortAnimation extends _AbstractPlugin2.default {
        /**
        * SortAnimation constructor.
        * @constructs SortAnimation
        * @param {Draggable} draggable - Draggable instance
        */
        constructor(draggable) {
          super(draggable);
          /**
          * SortAnimation options
          * @property {Object} options
          * @property {Number} defaultOptions.duration
          * @property {String} defaultOptions.easingFunction
          * @type {Object}
          */
          this.options = _extends({}, defaultOptions, this.getOptions());
          /**
          * Last animation frame
          * @property {Number} lastAnimationFrame
          * @type {Number}
          */
          this.lastAnimationFrame = null;
          this.lastElements = [];
          this[onSortableSorted] = this[onSortableSorted].bind(this);
          this[onSortableSort] = this[onSortableSort].bind(this);
        }
        /**
        * Attaches plugins event listeners
        */
        attach() {
          this.draggable.on('sortable:sort', this[onSortableSort]);
          this.draggable.on('sortable:sorted', this[onSortableSorted]);
        }
        /**
        * Detaches plugins event listeners
        */
        detach() {
          this.draggable.off('sortable:sort', this[onSortableSort]);
          this.draggable.off('sortable:sorted', this[onSortableSorted]);
        }
        /**
        * Returns options passed through draggable
        * @return {Object}
        */
        getOptions() {
          return this.draggable.options.sortAnimation || ({});
        }
        /**
        * Sortable sort handler
        * @param {SortableSortEvent} sortableEvent
        * @private
        */
        [onSortableSort]({dragEvent}) {
          const {sourceContainer} = dragEvent;
          const elements = this.draggable.getDraggableElementsForContainer(sourceContainer);
          this.lastElements = Array.from(elements).map(el => {
            return {
              domEl: el,
              offsetTop: el.offsetTop,
              offsetLeft: el.offsetLeft
            };
          });
        }
        /**
        * Sortable sorted handler
        * @param {SortableSortedEvent} sortableEvent
        * @private
        */
        [onSortableSorted]({oldIndex, newIndex}) {
          if (oldIndex === newIndex) {
            return;
          }
          const effectedElements = [];
          let start;
          let end;
          let num;
          if (oldIndex > newIndex) {
            start = newIndex;
            end = oldIndex - 1;
            num = 1;
          } else {
            start = oldIndex + 1;
            end = newIndex;
            num = -1;
          }
          for (let i = start; i <= end; i++) {
            const from = this.lastElements[i];
            const to = this.lastElements[i + num];
            effectedElements.push({
              from,
              to
            });
          }
          cancelAnimationFrame(this.lastAnimationFrame);
          // Can be done in a separate frame
          this.lastAnimationFrame = requestAnimationFrame(() => {
            effectedElements.forEach(element => animate(element, this.options));
          });
        }
      }
      exports.default = SortAnimation;
      /**
      * Animates two elements
      * @param {Object} element
      * @param {Object} element.from
      * @param {Object} element.to
      * @param {Object} options
      * @param {Number} options.duration
      * @param {String} options.easingFunction
      * @private
      */
      function animate({from, to}, {duration, easingFunction}) {
        const domEl = from.domEl;
        const x = from.offsetLeft - to.offsetLeft;
        const y = from.offsetTop - to.offsetTop;
        domEl.style.pointerEvents = 'none';
        domEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        requestAnimationFrame(() => {
          domEl.addEventListener('transitionend', resetElementOnTransitionEnd);
          domEl.style.transition = `transform ${duration}ms ${easingFunction}`;
          domEl.style.transform = '';
        });
      }
      /**
      * Resets animation style properties after animation has completed
      * @param {Event} event
      * @private
      */
      function resetElementOnTransitionEnd(event) {
        event.target.style.transition = '';
        event.target.style.pointerEvents = '';
        event.target.removeEventListener('transitionend', resetElementOnTransitionEnd);
      }
    }, /*16*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;
      var _SortAnimation = __webpack_require__(15);
      var _SortAnimation2 = _interopRequireDefault(_SortAnimation);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _SortAnimation2.default;
      exports.defaultOptions = _SortAnimation.defaultOptions;
    }, /*17*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;
      var _extends = Object.assign || (function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      });
      var _AbstractPlugin = __webpack_require__(0);
      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      const onSortableSorted = Symbol('onSortableSorted');
      /**
      * SwapAnimation default options
      * @property {Object} defaultOptions
      * @property {Number} defaultOptions.duration
      * @property {String} defaultOptions.easingFunction
      * @property {Boolean} defaultOptions.horizontal
      * @type {Object}
      */
      const defaultOptions = exports.defaultOptions = {
        duration: 150,
        easingFunction: 'ease-in-out',
        horizontal: false
      };
      /**
      * SwapAnimation plugin adds swap animations for sortable
      * @class SwapAnimation
      * @module SwapAnimation
      * @extends AbstractPlugin
      */
      class SwapAnimation extends _AbstractPlugin2.default {
        /**
        * SwapAnimation constructor.
        * @constructs SwapAnimation
        * @param {Draggable} draggable - Draggable instance
        */
        constructor(draggable) {
          super(draggable);
          /**
          * SwapAnimation options
          * @property {Object} options
          * @property {Number} defaultOptions.duration
          * @property {String} defaultOptions.easingFunction
          * @type {Object}
          */
          this.options = _extends({}, defaultOptions, this.getOptions());
          /**
          * Last animation frame
          * @property {Number} lastAnimationFrame
          * @type {Number}
          */
          this.lastAnimationFrame = null;
          this[onSortableSorted] = this[onSortableSorted].bind(this);
        }
        /**
        * Attaches plugins event listeners
        */
        attach() {
          this.draggable.on('sortable:sorted', this[onSortableSorted]);
        }
        /**
        * Detaches plugins event listeners
        */
        detach() {
          this.draggable.off('sortable:sorted', this[onSortableSorted]);
        }
        /**
        * Returns options passed through draggable
        * @return {Object}
        */
        getOptions() {
          return this.draggable.options.swapAnimation || ({});
        }
        /**
        * Sortable sorted handler
        * @param {SortableSortedEvent} sortableEvent
        * @private
        */
        [onSortableSorted]({oldIndex, newIndex, dragEvent}) {
          const {source, over} = dragEvent;
          cancelAnimationFrame(this.lastAnimationFrame);
          // Can be done in a separate frame
          this.lastAnimationFrame = requestAnimationFrame(() => {
            if (oldIndex >= newIndex) {
              animate(source, over, this.options);
            } else {
              animate(over, source, this.options);
            }
          });
        }
      }
      exports.default = SwapAnimation;
      /**
      * Animates two elements
      * @param {HTMLElement} from
      * @param {HTMLElement} to
      * @param {Object} options
      * @param {Number} options.duration
      * @param {String} options.easingFunction
      * @param {String} options.horizontal
      * @private
      */
      function animate(from, to, {duration, easingFunction, horizontal}) {
        for (const element of [from, to]) {
          element.style.pointerEvents = 'none';
        }
        if (horizontal) {
          const width = from.offsetWidth;
          from.style.transform = `translate3d(${width}px, 0, 0)`;
          to.style.transform = `translate3d(-${width}px, 0, 0)`;
        } else {
          const height = from.offsetHeight;
          from.style.transform = `translate3d(0, ${height}px, 0)`;
          to.style.transform = `translate3d(0, -${height}px, 0)`;
        }
        requestAnimationFrame(() => {
          for (const element of [from, to]) {
            element.addEventListener('transitionend', resetElementOnTransitionEnd);
            element.style.transition = `transform ${duration}ms ${easingFunction}`;
            element.style.transform = '';
          }
        });
      }
      /**
      * Resets animation style properties after animation has completed
      * @param {Event} event
      * @private
      */
      function resetElementOnTransitionEnd(event) {
        event.target.style.transition = '';
        event.target.style.pointerEvents = '';
        event.target.removeEventListener('transitionend', resetElementOnTransitionEnd);
      }
    }, /*18*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;
      var _SwapAnimation = __webpack_require__(17);
      var _SwapAnimation2 = _interopRequireDefault(_SwapAnimation);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _SwapAnimation2.default;
      exports.defaultOptions = _SwapAnimation.defaultOptions;
    }, /*19*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _AbstractPlugin = __webpack_require__(0);
      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
      var _SnappableEvent = __webpack_require__(7);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      const onDragStart = Symbol('onDragStart');
      const onDragStop = Symbol('onDragStop');
      const onDragOver = Symbol('onDragOver');
      const onDragOut = Symbol('onDragOut');
      const onMirrorCreated = Symbol('onMirrorCreated');
      const onMirrorDestroy = Symbol('onMirrorDestroy');
      /**
      * Snappable plugin which snaps draggable elements into place
      * @class Snappable
      * @module Snappable
      * @extends AbstractPlugin
      */
      class Snappable extends _AbstractPlugin2.default {
        /**
        * Snappable constructor.
        * @constructs Snappable
        * @param {Draggable} draggable - Draggable instance
        */
        constructor(draggable) {
          super(draggable);
          /**
          * Keeps track of the first source element
          * @property {HTMLElement|null} firstSource
          */
          this.firstSource = null;
          /**
          * Keeps track of the mirror element
          * @property {HTMLElement} mirror
          */
          this.mirror = null;
          this[onDragStart] = this[onDragStart].bind(this);
          this[onDragStop] = this[onDragStop].bind(this);
          this[onDragOver] = this[onDragOver].bind(this);
          this[onDragOut] = this[onDragOut].bind(this);
          this[onMirrorCreated] = this[onMirrorCreated].bind(this);
          this[onMirrorDestroy] = this[onMirrorDestroy].bind(this);
        }
        /**
        * Attaches plugins event listeners
        */
        attach() {
          this.draggable.on('drag:start', this[onDragStart]).on('drag:stop', this[onDragStop]).on('drag:over', this[onDragOver]).on('drag:out', this[onDragOut]).on('droppable:over', this[onDragOver]).on('droppable:out', this[onDragOut]).on('mirror:created', this[onMirrorCreated]).on('mirror:destroy', this[onMirrorDestroy]);
        }
        /**
        * Detaches plugins event listeners
        */
        detach() {
          this.draggable.off('drag:start', this[onDragStart]).off('drag:stop', this[onDragStop]).off('drag:over', this[onDragOver]).off('drag:out', this[onDragOut]).off('droppable:over', this[onDragOver]).off('droppable:out', this[onDragOut]).off('mirror:created', this[onMirrorCreated]).off('mirror:destroy', this[onMirrorDestroy]);
        }
        /**
        * Drag start handler
        * @private
        * @param {DragStartEvent} event - Drag start event
        */
        [onDragStart](event) {
          if (event.canceled()) {
            return;
          }
          this.firstSource = event.source;
        }
        /**
        * Drag stop handler
        * @private
        * @param {DragStopEvent} event - Drag stop event
        */
        [onDragStop]() {
          this.firstSource = null;
        }
        /**
        * Drag over handler
        * @private
        * @param {DragOverEvent|DroppableOverEvent} event - Drag over event
        */
        [onDragOver](event) {
          if (event.canceled()) {
            return;
          }
          const source = event.source || event.dragEvent.source;
          if (source === this.firstSource) {
            this.firstSource = null;
            return;
          }
          const snapInEvent = new _SnappableEvent.SnapInEvent({
            dragEvent: event,
            snappable: event.over || event.droppable
          });
          this.draggable.trigger(snapInEvent);
          if (snapInEvent.canceled()) {
            return;
          }
          if (this.mirror) {
            this.mirror.style.display = 'none';
          }
          source.classList.remove(...this.draggable.getClassNamesFor('source:dragging'));
          source.classList.add(...this.draggable.getClassNamesFor('source:placed'));
          // Need to cancel this in drag out
          setTimeout(() => {
            source.classList.remove(...this.draggable.getClassNamesFor('source:placed'));
          }, this.draggable.options.placedTimeout);
        }
        /**
        * Drag out handler
        * @private
        * @param {DragOutEvent|DroppableOutEvent} event - Drag out event
        */
        [onDragOut](event) {
          if (event.canceled()) {
            return;
          }
          const source = event.source || event.dragEvent.source;
          const snapOutEvent = new _SnappableEvent.SnapOutEvent({
            dragEvent: event,
            snappable: event.over || event.droppable
          });
          this.draggable.trigger(snapOutEvent);
          if (snapOutEvent.canceled()) {
            return;
          }
          if (this.mirror) {
            this.mirror.style.display = '';
          }
          source.classList.add(...this.draggable.getClassNamesFor('source:dragging'));
        }
        /**
        * Mirror created handler
        * @param {MirrorCreatedEvent} mirrorEvent
        * @private
        */
        [onMirrorCreated]({mirror}) {
          this.mirror = mirror;
        }
        /**
        * Mirror destroy handler
        * @param {MirrorDestroyEvent} mirrorEvent
        * @private
        */
        [onMirrorDestroy]() {
          this.mirror = null;
        }
      }
      exports.default = Snappable;
    }, /*20*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SnapOutEvent = exports.SnapInEvent = exports.SnapEvent = undefined;
      var _AbstractEvent = __webpack_require__(1);
      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
      * Base snap event
      * @class SnapEvent
      * @module SnapEvent
      * @extends AbstractEvent
      */
      class SnapEvent extends _AbstractEvent2.default {
        /**
        * Drag event that triggered this snap event
        * @property dragEvent
        * @type {DragEvent}
        * @readonly
        */
        get dragEvent() {
          return this.data.dragEvent;
        }
        /**
        * Snappable element
        * @property snappable
        * @type {HTMLElement}
        * @readonly
        */
        get snappable() {
          return this.data.snappable;
        }
      }
      exports.SnapEvent = SnapEvent;
      /**
      * Snap in event
      * @class SnapInEvent
      * @module SnapInEvent
      * @extends SnapEvent
      */
      SnapEvent.type = 'snap';
      class SnapInEvent extends SnapEvent {}
      exports.SnapInEvent = SnapInEvent;
      /**
      * Snap out event
      * @class SnapOutEvent
      * @module SnapOutEvent
      * @extends SnapEvent
      */
      SnapInEvent.type = 'snap:in';
      SnapInEvent.cancelable = true;
      class SnapOutEvent extends SnapEvent {}
      exports.SnapOutEvent = SnapOutEvent;
      SnapOutEvent.type = 'snap:out';
      SnapOutEvent.cancelable = true;
    }, /*21*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _SnappableEvent = __webpack_require__(7);
      Object.keys(_SnappableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _SnappableEvent[key];
          }
        });
      });
      var _Snappable = __webpack_require__(19);
      var _Snappable2 = _interopRequireDefault(_Snappable);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _Snappable2.default;
    }, /*22*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;
      var _extends = Object.assign || (function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      });
      var _AbstractPlugin = __webpack_require__(0);
      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
      var _utils = __webpack_require__(2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      const onMirrorCreated = Symbol('onMirrorCreated');
      const onMirrorDestroy = Symbol('onMirrorDestroy');
      const onDragOver = Symbol('onDragOver');
      const resize = Symbol('resize');
      /**
      * ResizeMirror default options
      * @property {Object} defaultOptions
      * @type {Object}
      */
      const defaultOptions = exports.defaultOptions = {};
      /**
      * The ResizeMirror plugin resizes the mirror element to the dimensions of the draggable element that the mirror is hovering over
      * @class ResizeMirror
      * @module ResizeMirror
      * @extends AbstractPlugin
      */
      class ResizeMirror extends _AbstractPlugin2.default {
        /**
        * ResizeMirror constructor.
        * @constructs ResizeMirror
        * @param {Draggable} draggable - Draggable instance
        */
        constructor(draggable) {
          super(draggable);
          /**
          * ResizeMirror options
          * @property {Object} options
          * @type {Object}
          */
          this.options = _extends({}, defaultOptions, this.getOptions());
          /**
          * ResizeMirror remembers the last width when resizing the mirror
          * to avoid additional writes to the DOM
          * @property {number} lastWidth
          */
          this.lastWidth = 0;
          /**
          * ResizeMirror remembers the last height when resizing the mirror
          * to avoid additional writes to the DOM
          * @property {number} lastHeight
          */
          this.lastHeight = 0;
          /**
          * Keeps track of the mirror element
          * @property {HTMLElement} mirror
          */
          this.mirror = null;
          this[onMirrorCreated] = this[onMirrorCreated].bind(this);
          this[onMirrorDestroy] = this[onMirrorDestroy].bind(this);
          this[onDragOver] = this[onDragOver].bind(this);
        }
        /**
        * Attaches plugins event listeners
        */
        attach() {
          this.draggable.on('mirror:created', this[onMirrorCreated]).on('drag:over', this[onDragOver]).on('drag:over:container', this[onDragOver]);
        }
        /**
        * Detaches plugins event listeners
        */
        detach() {
          this.draggable.off('mirror:created', this[onMirrorCreated]).off('mirror:destroy', this[onMirrorDestroy]).off('drag:over', this[onDragOver]).off('drag:over:container', this[onDragOver]);
        }
        /**
        * Returns options passed through draggable
        * @return {Object}
        */
        getOptions() {
          return this.draggable.options.resizeMirror || ({});
        }
        /**
        * Mirror created handler
        * @param {MirrorCreatedEvent} mirrorEvent
        * @private
        */
        [onMirrorCreated]({mirror}) {
          this.mirror = mirror;
        }
        /**
        * Mirror destroy handler
        * @param {MirrorDestroyEvent} mirrorEvent
        * @private
        */
        [onMirrorDestroy]() {
          this.mirror = null;
        }
        /**
        * Drag over handler
        * @param {DragOverEvent | DragOverContainer} dragEvent
        * @private
        */
        [onDragOver](dragEvent) {
          this[resize](dragEvent);
        }
        /**
        * Resize function for
        * @param {DragOverEvent | DragOverContainer} dragEvent
        * @private
        */
        [resize]({overContainer, over}) {
          requestAnimationFrame(() => {
            if (!this.mirror.parentNode) {
              return;
            }
            if (this.mirror.parentNode !== overContainer) {
              overContainer.appendChild(this.mirror);
            }
            const overElement = over || this.draggable.getDraggableElementsForContainer(overContainer)[0];
            if (!overElement) {
              return;
            }
            (0, _utils.requestNextAnimationFrame)(() => {
              const overRect = overElement.getBoundingClientRect();
              if (this.lastHeight === overRect.height && this.lastWidth === overRect.width) {
                return;
              }
              this.mirror.style.width = `${overRect.width}px`;
              this.mirror.style.height = `${overRect.height}px`;
              this.lastWidth = overRect.width;
              this.lastHeight = overRect.height;
            });
          });
        }
      }
      exports.default = ResizeMirror;
    }, /*23*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;
      var _ResizeMirror = __webpack_require__(22);
      var _ResizeMirror2 = _interopRequireDefault(_ResizeMirror);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _ResizeMirror2.default;
      exports.defaultOptions = _ResizeMirror.defaultOptions;
    }, /*24*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _AbstractPlugin = __webpack_require__(0);
      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
      var _utils = __webpack_require__(2);
      var _CollidableEvent = __webpack_require__(8);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      const onDragMove = Symbol('onDragMove');
      const onDragStop = Symbol('onDragStop');
      const onRequestAnimationFrame = Symbol('onRequestAnimationFrame');
      /**
      * Collidable plugin which detects colliding elements while dragging
      * @class Collidable
      * @module Collidable
      * @extends AbstractPlugin
      */
      class Collidable extends _AbstractPlugin2.default {
        /**
        * Collidable constructor.
        * @constructs Collidable
        * @param {Draggable} draggable - Draggable instance
        */
        constructor(draggable) {
          super(draggable);
          /**
          * Keeps track of currently colliding elements
          * @property {HTMLElement|null} currentlyCollidingElement
          * @type {HTMLElement|null}
          */
          this.currentlyCollidingElement = null;
          /**
          * Keeps track of currently colliding elements
          * @property {HTMLElement|null} lastCollidingElement
          * @type {HTMLElement|null}
          */
          this.lastCollidingElement = null;
          /**
          * Animation frame for finding colliding elements
          * @property {Number|null} currentAnimationFrame
          * @type {Number|null}
          */
          this.currentAnimationFrame = null;
          this[onDragMove] = this[onDragMove].bind(this);
          this[onDragStop] = this[onDragStop].bind(this);
          this[onRequestAnimationFrame] = this[onRequestAnimationFrame].bind(this);
        }
        /**
        * Attaches plugins event listeners
        */
        attach() {
          this.draggable.on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
        }
        /**
        * Detaches plugins event listeners
        */
        detach() {
          this.draggable.off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
        }
        /**
        * Returns current collidables based on `collidables` option
        * @return {HTMLElement[]}
        */
        getCollidables() {
          const collidables = this.draggable.options.collidables;
          if (typeof collidables === 'string') {
            return Array.prototype.slice.call(document.querySelectorAll(collidables));
          } else if (collidables instanceof NodeList || collidables instanceof Array) {
            return Array.prototype.slice.call(collidables);
          } else if (collidables instanceof HTMLElement) {
            return [collidables];
          } else if (typeof collidables === 'function') {
            return collidables();
          } else {
            return [];
          }
        }
        /**
        * Drag move handler
        * @private
        * @param {DragMoveEvent} event - Drag move event
        */
        [onDragMove](event) {
          const target = event.sensorEvent.target;
          this.currentAnimationFrame = requestAnimationFrame(this[onRequestAnimationFrame](target));
          if (this.currentlyCollidingElement) {
            event.cancel();
          }
          const collidableInEvent = new _CollidableEvent.CollidableInEvent({
            dragEvent: event,
            collidingElement: this.currentlyCollidingElement
          });
          const collidableOutEvent = new _CollidableEvent.CollidableOutEvent({
            dragEvent: event,
            collidingElement: this.lastCollidingElement
          });
          const enteringCollidable = Boolean(this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement);
          const leavingCollidable = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);
          if (enteringCollidable) {
            if (this.lastCollidingElement) {
              this.draggable.trigger(collidableOutEvent);
            }
            this.draggable.trigger(collidableInEvent);
          } else if (leavingCollidable) {
            this.draggable.trigger(collidableOutEvent);
          }
          this.lastCollidingElement = this.currentlyCollidingElement;
        }
        /**
        * Drag stop handler
        * @private
        * @param {DragStopEvent} event - Drag stop event
        */
        [onDragStop](event) {
          const lastCollidingElement = this.currentlyCollidingElement || this.lastCollidingElement;
          const collidableOutEvent = new _CollidableEvent.CollidableOutEvent({
            dragEvent: event,
            collidingElement: lastCollidingElement
          });
          if (lastCollidingElement) {
            this.draggable.trigger(collidableOutEvent);
          }
          this.lastCollidingElement = null;
          this.currentlyCollidingElement = null;
        }
        /**
        * Animation frame function
        * @private
        * @param {HTMLElement} target - Current move target
        * @return {Function}
        */
        [onRequestAnimationFrame](target) {
          return () => {
            const collidables = this.getCollidables();
            this.currentlyCollidingElement = (0, _utils.closest)(target, element => collidables.includes(element));
          };
        }
      }
      exports.default = Collidable;
    }, /*25*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CollidableOutEvent = exports.CollidableInEvent = exports.CollidableEvent = undefined;
      var _AbstractEvent = __webpack_require__(1);
      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
      * Base collidable event
      * @class CollidableEvent
      * @module CollidableEvent
      * @extends AbstractEvent
      */
      class CollidableEvent extends _AbstractEvent2.default {
        /**
        * Drag event that triggered this colliable event
        * @property dragEvent
        * @type {DragEvent}
        * @readonly
        */
        get dragEvent() {
          return this.data.dragEvent;
        }
      }
      exports.CollidableEvent = CollidableEvent;
      /**
      * Collidable in event
      * @class CollidableInEvent
      * @module CollidableInEvent
      * @extends CollidableEvent
      */
      CollidableEvent.type = 'collidable';
      class CollidableInEvent extends CollidableEvent {
        /**
        * Element you are currently colliding with
        * @property collidingElement
        * @type {HTMLElement}
        * @readonly
        */
        get collidingElement() {
          return this.data.collidingElement;
        }
      }
      exports.CollidableInEvent = CollidableInEvent;
      /**
      * Collidable out event
      * @class CollidableOutEvent
      * @module CollidableOutEvent
      * @extends CollidableEvent
      */
      CollidableInEvent.type = 'collidable:in';
      class CollidableOutEvent extends CollidableEvent {
        /**
        * Element you were previously colliding with
        * @property collidingElement
        * @type {HTMLElement}
        * @readonly
        */
        get collidingElement() {
          return this.data.collidingElement;
        }
      }
      exports.CollidableOutEvent = CollidableOutEvent;
      CollidableOutEvent.type = 'collidable:out';
    }, /*26*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _CollidableEvent = __webpack_require__(8);
      Object.keys(_CollidableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _CollidableEvent[key];
          }
        });
      });
      var _Collidable = __webpack_require__(24);
      var _Collidable2 = _interopRequireDefault(_Collidable);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _Collidable2.default;
    }, /*27*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _Collidable = __webpack_require__(26);
      Object.defineProperty(exports, 'Collidable', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_Collidable).default;
        }
      });
      var _ResizeMirror = __webpack_require__(23);
      Object.defineProperty(exports, 'ResizeMirror', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_ResizeMirror).default;
        }
      });
      Object.defineProperty(exports, 'defaultResizeMirrorOptions', {
        enumerable: true,
        get: function () {
          return _ResizeMirror.defaultOptions;
        }
      });
      var _Snappable = __webpack_require__(21);
      Object.defineProperty(exports, 'Snappable', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_Snappable).default;
        }
      });
      var _SwapAnimation = __webpack_require__(18);
      Object.defineProperty(exports, 'SwapAnimation', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_SwapAnimation).default;
        }
      });
      Object.defineProperty(exports, 'defaultSwapAnimationOptions', {
        enumerable: true,
        get: function () {
          return _SwapAnimation.defaultOptions;
        }
      });
      var _SortAnimation = __webpack_require__(16);
      Object.defineProperty(exports, 'SortAnimation', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_SortAnimation).default;
        }
      });
      Object.defineProperty(exports, 'defaultSortAnimationOptions', {
        enumerable: true,
        get: function () {
          return _SortAnimation.defaultOptions;
        }
      });
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
    }, /*28*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _extends = Object.assign || (function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      });
      var _Draggable = __webpack_require__(5);
      var _Draggable2 = _interopRequireDefault(_Draggable);
      var _SortableEvent = __webpack_require__(9);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      const onDragStart = Symbol('onDragStart');
      const onDragOverContainer = Symbol('onDragOverContainer');
      const onDragOver = Symbol('onDragOver');
      const onDragStop = Symbol('onDragStop');
      /**
      * Returns announcement message when a Draggable element has been sorted with another Draggable element
      * or moved into a new container
      * @param {SortableSortedEvent} sortableEvent
      * @return {String}
      */
      function onSortableSortedDefaultAnnouncement({dragEvent}) {
        const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'sortable element';
        if (dragEvent.over) {
          const overText = dragEvent.over.textContent.trim() || dragEvent.over.id || 'sortable element';
          const isFollowing = dragEvent.source.compareDocumentPosition(dragEvent.over) & Node.DOCUMENT_POSITION_FOLLOWING;
          if (isFollowing) {
            return `Placed ${sourceText} after ${overText}`;
          } else {
            return `Placed ${sourceText} before ${overText}`;
          }
        } else {
          // need to figure out how to compute container name
          return `Placed ${sourceText} into a different container`;
        }
      }
      /**
      * @const {Object} defaultAnnouncements
      * @const {Function} defaultAnnouncements['sortable:sorted']
      */
      const defaultAnnouncements = {
        'sortable:sorted': onSortableSortedDefaultAnnouncement
      };
      /**
      * Sortable is built on top of Draggable and allows sorting of draggable elements. Sortable will keep
      * track of the original index and emits the new index as you drag over draggable elements.
      * @class Sortable
      * @module Sortable
      * @extends Draggable
      */
      class Sortable extends _Draggable2.default {
        /**
        * Sortable constructor.
        * @constructs Sortable
        * @param {HTMLElement[]|NodeList|HTMLElement} containers - Sortable containers
        * @param {Object} options - Options for Sortable
        */
        constructor(containers = [], options = {}) {
          super(containers, _extends({}, options, {
            announcements: _extends({}, defaultAnnouncements, options.announcements || ({}))
          }));
          /**
          * start index of source on drag start
          * @property startIndex
          * @type {Number}
          */
          this.startIndex = null;
          /**
          * start container on drag start
          * @property startContainer
          * @type {HTMLElement}
          * @default null
          */
          this.startContainer = null;
          this[onDragStart] = this[onDragStart].bind(this);
          this[onDragOverContainer] = this[onDragOverContainer].bind(this);
          this[onDragOver] = this[onDragOver].bind(this);
          this[onDragStop] = this[onDragStop].bind(this);
          this.on('drag:start', this[onDragStart]).on('drag:over:container', this[onDragOverContainer]).on('drag:over', this[onDragOver]).on('drag:stop', this[onDragStop]);
        }
        /**
        * Destroys Sortable instance.
        */
        destroy() {
          super.destroy();
          this.off('drag:start', this[onDragStart]).off('drag:over:container', this[onDragOverContainer]).off('drag:over', this[onDragOver]).off('drag:stop', this[onDragStop]);
        }
        /**
        * Returns true index of element within its container during drag operation, i.e. excluding mirror and original source
        * @param {HTMLElement} element - An element
        * @return {Number}
        */
        index(element) {
          return this.getSortableElementsForContainer(element.parentNode).indexOf(element);
        }
        /**
        * Returns sortable elements for a given container, excluding the mirror and
        * original source element if present
        * @param {HTMLElement} container
        * @return {HTMLElement[]}
        */
        getSortableElementsForContainer(container) {
          const allSortableElements = container.querySelectorAll(this.options.draggable);
          return [...allSortableElements].filter(childElement => {
            return childElement !== this.originalSource && childElement !== this.mirror && childElement.parentNode === container;
          });
        }
        /**
        * Drag start handler
        * @private
        * @param {DragStartEvent} event - Drag start event
        */
        [onDragStart](event) {
          this.startContainer = event.source.parentNode;
          this.startIndex = this.index(event.source);
          const sortableStartEvent = new _SortableEvent.SortableStartEvent({
            dragEvent: event,
            startIndex: this.startIndex,
            startContainer: this.startContainer
          });
          this.trigger(sortableStartEvent);
          if (sortableStartEvent.canceled()) {
            event.cancel();
          }
        }
        /**
        * Drag over container handler
        * @private
        * @param {DragOverContainerEvent} event - Drag over container event
        */
        [onDragOverContainer](event) {
          if (event.canceled()) {
            return;
          }
          const {source, over, overContainer} = event;
          const oldIndex = this.index(source);
          const sortableSortEvent = new _SortableEvent.SortableSortEvent({
            dragEvent: event,
            currentIndex: oldIndex,
            source,
            over
          });
          this.trigger(sortableSortEvent);
          if (sortableSortEvent.canceled()) {
            return;
          }
          const children = this.getSortableElementsForContainer(overContainer);
          const moves = move({
            source,
            over,
            overContainer,
            children
          });
          if (!moves) {
            return;
          }
          const {oldContainer, newContainer} = moves;
          const newIndex = this.index(event.source);
          const sortableSortedEvent = new _SortableEvent.SortableSortedEvent({
            dragEvent: event,
            oldIndex,
            newIndex,
            oldContainer,
            newContainer
          });
          this.trigger(sortableSortedEvent);
        }
        /**
        * Drag over handler
        * @private
        * @param {DragOverEvent} event - Drag over event
        */
        [onDragOver](event) {
          if (event.over === event.originalSource || event.over === event.source) {
            return;
          }
          const {source, over, overContainer} = event;
          const oldIndex = this.index(source);
          const sortableSortEvent = new _SortableEvent.SortableSortEvent({
            dragEvent: event,
            currentIndex: oldIndex,
            source,
            over
          });
          this.trigger(sortableSortEvent);
          if (sortableSortEvent.canceled()) {
            return;
          }
          const children = this.getDraggableElementsForContainer(overContainer);
          const moves = move({
            source,
            over,
            overContainer,
            children
          });
          if (!moves) {
            return;
          }
          const {oldContainer, newContainer} = moves;
          const newIndex = this.index(source);
          const sortableSortedEvent = new _SortableEvent.SortableSortedEvent({
            dragEvent: event,
            oldIndex,
            newIndex,
            oldContainer,
            newContainer
          });
          this.trigger(sortableSortedEvent);
        }
        /**
        * Drag stop handler
        * @private
        * @param {DragStopEvent} event - Drag stop event
        */
        [onDragStop](event) {
          const sortableStopEvent = new _SortableEvent.SortableStopEvent({
            dragEvent: event,
            oldIndex: this.startIndex,
            newIndex: this.index(event.source),
            oldContainer: this.startContainer,
            newContainer: event.source.parentNode
          });
          this.trigger(sortableStopEvent);
          this.startIndex = null;
          this.startContainer = null;
        }
      }
      exports.default = Sortable;
      function index(element) {
        return Array.prototype.indexOf.call(element.parentNode.children, element);
      }
      function move({source, over, overContainer, children}) {
        const emptyOverContainer = !children.length;
        const differentContainer = source.parentNode !== overContainer;
        const sameContainer = over && source.parentNode === over.parentNode;
        if (emptyOverContainer) {
          return moveInsideEmptyContainer(source, overContainer);
        } else if (sameContainer) {
          return moveWithinContainer(source, over);
        } else if (differentContainer) {
          return moveOutsideContainer(source, over, overContainer);
        } else {
          return null;
        }
      }
      function moveInsideEmptyContainer(source, overContainer) {
        const oldContainer = source.parentNode;
        overContainer.appendChild(source);
        return {
          oldContainer,
          newContainer: overContainer
        };
      }
      function moveWithinContainer(source, over) {
        const oldIndex = index(source);
        const newIndex = index(over);
        if (oldIndex < newIndex) {
          source.parentNode.insertBefore(source, over.nextElementSibling);
        } else {
          source.parentNode.insertBefore(source, over);
        }
        return {
          oldContainer: source.parentNode,
          newContainer: source.parentNode
        };
      }
      function moveOutsideContainer(source, over, overContainer) {
        const oldContainer = source.parentNode;
        if (over) {
          over.parentNode.insertBefore(source, over);
        } else {
          // need to figure out proper position
          overContainer.appendChild(source);
        }
        return {
          oldContainer,
          newContainer: source.parentNode
        };
      }
    }, /*29*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SortableStopEvent = exports.SortableSortedEvent = exports.SortableSortEvent = exports.SortableStartEvent = exports.SortableEvent = undefined;
      var _AbstractEvent = __webpack_require__(1);
      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
      * Base sortable event
      * @class SortableEvent
      * @module SortableEvent
      * @extends AbstractEvent
      */
      class SortableEvent extends _AbstractEvent2.default {
        /**
        * Original drag event that triggered this sortable event
        * @property dragEvent
        * @type {DragEvent}
        * @readonly
        */
        get dragEvent() {
          return this.data.dragEvent;
        }
      }
      exports.SortableEvent = SortableEvent;
      /**
      * Sortable start event
      * @class SortableStartEvent
      * @module SortableStartEvent
      * @extends SortableEvent
      */
      SortableEvent.type = 'sortable';
      class SortableStartEvent extends SortableEvent {
        /**
        * Start index of source on sortable start
        * @property startIndex
        * @type {Number}
        * @readonly
        */
        get startIndex() {
          return this.data.startIndex;
        }
        /**
        * Start container on sortable start
        * @property startContainer
        * @type {HTMLElement}
        * @readonly
        */
        get startContainer() {
          return this.data.startContainer;
        }
      }
      exports.SortableStartEvent = SortableStartEvent;
      /**
      * Sortable sort event
      * @class SortableSortEvent
      * @module SortableSortEvent
      * @extends SortableEvent
      */
      SortableStartEvent.type = 'sortable:start';
      SortableStartEvent.cancelable = true;
      class SortableSortEvent extends SortableEvent {
        /**
        * Index of current draggable element
        * @property currentIndex
        * @type {Number}
        * @readonly
        */
        get currentIndex() {
          return this.data.currentIndex;
        }
        /**
        * Draggable element you are hovering over
        * @property over
        * @type {HTMLElement}
        * @readonly
        */
        get over() {
          return this.data.over;
        }
        /**
        * Draggable container element you are hovering over
        * @property overContainer
        * @type {HTMLElement}
        * @readonly
        */
        get overContainer() {
          return this.data.dragEvent.overContainer;
        }
      }
      exports.SortableSortEvent = SortableSortEvent;
      /**
      * Sortable sorted event
      * @class SortableSortedEvent
      * @module SortableSortedEvent
      * @extends SortableEvent
      */
      SortableSortEvent.type = 'sortable:sort';
      SortableSortEvent.cancelable = true;
      class SortableSortedEvent extends SortableEvent {
        /**
        * Index of last sorted event
        * @property oldIndex
        * @type {Number}
        * @readonly
        */
        get oldIndex() {
          return this.data.oldIndex;
        }
        /**
        * New index of this sorted event
        * @property newIndex
        * @type {Number}
        * @readonly
        */
        get newIndex() {
          return this.data.newIndex;
        }
        /**
        * Old container of draggable element
        * @property oldContainer
        * @type {HTMLElement}
        * @readonly
        */
        get oldContainer() {
          return this.data.oldContainer;
        }
        /**
        * New container of draggable element
        * @property newContainer
        * @type {HTMLElement}
        * @readonly
        */
        get newContainer() {
          return this.data.newContainer;
        }
      }
      exports.SortableSortedEvent = SortableSortedEvent;
      /**
      * Sortable stop event
      * @class SortableStopEvent
      * @module SortableStopEvent
      * @extends SortableEvent
      */
      SortableSortedEvent.type = 'sortable:sorted';
      class SortableStopEvent extends SortableEvent {
        /**
        * Original index on sortable start
        * @property oldIndex
        * @type {Number}
        * @readonly
        */
        get oldIndex() {
          return this.data.oldIndex;
        }
        /**
        * New index of draggable element
        * @property newIndex
        * @type {Number}
        * @readonly
        */
        get newIndex() {
          return this.data.newIndex;
        }
        /**
        * Original container of draggable element
        * @property oldContainer
        * @type {HTMLElement}
        * @readonly
        */
        get oldContainer() {
          return this.data.oldContainer;
        }
        /**
        * New container of draggable element
        * @property newContainer
        * @type {HTMLElement}
        * @readonly
        */
        get newContainer() {
          return this.data.newContainer;
        }
      }
      exports.SortableStopEvent = SortableStopEvent;
      SortableStopEvent.type = 'sortable:stop';
    }, /*30*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _SortableEvent = __webpack_require__(9);
      Object.keys(_SortableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _SortableEvent[key];
          }
        });
      });
      var _Sortable = __webpack_require__(28);
      var _Sortable2 = _interopRequireDefault(_Sortable);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _Sortable2.default;
    }, /*31*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _extends = Object.assign || (function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      });
      var _Draggable = __webpack_require__(5);
      var _Draggable2 = _interopRequireDefault(_Draggable);
      var _SwappableEvent = __webpack_require__(10);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      const onDragStart = Symbol('onDragStart');
      const onDragOver = Symbol('onDragOver');
      const onDragStop = Symbol('onDragStop');
      /**
      * Returns an announcement message when the Draggable element is swapped with another draggable element
      * @param {SwappableSwappedEvent} swappableEvent
      * @return {String}
      */
      function onSwappableSwappedDefaultAnnouncement({dragEvent, swappedElement}) {
        const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'swappable element';
        const overText = swappedElement.textContent.trim() || swappedElement.id || 'swappable element';
        return `Swapped ${sourceText} with ${overText}`;
      }
      /**
      * @const {Object} defaultAnnouncements
      * @const {Function} defaultAnnouncements['swappabled:swapped']
      */
      const defaultAnnouncements = {
        'swappabled:swapped': onSwappableSwappedDefaultAnnouncement
      };
      /**
      * Swappable is built on top of Draggable and allows swapping of draggable elements.
      * Order is irrelevant to Swappable.
      * @class Swappable
      * @module Swappable
      * @extends Draggable
      */
      class Swappable extends _Draggable2.default {
        /**
        * Swappable constructor.
        * @constructs Swappable
        * @param {HTMLElement[]|NodeList|HTMLElement} containers - Swappable containers
        * @param {Object} options - Options for Swappable
        */
        constructor(containers = [], options = {}) {
          super(containers, _extends({}, options, {
            announcements: _extends({}, defaultAnnouncements, options.announcements || ({}))
          }));
          /**
          * Last draggable element that was dragged over
          * @property lastOver
          * @type {HTMLElement}
          */
          this.lastOver = null;
          this[onDragStart] = this[onDragStart].bind(this);
          this[onDragOver] = this[onDragOver].bind(this);
          this[onDragStop] = this[onDragStop].bind(this);
          this.on('drag:start', this[onDragStart]).on('drag:over', this[onDragOver]).on('drag:stop', this[onDragStop]);
        }
        /**
        * Destroys Swappable instance.
        */
        destroy() {
          super.destroy();
          this.off('drag:start', this._onDragStart).off('drag:over', this._onDragOver).off('drag:stop', this._onDragStop);
        }
        /**
        * Drag start handler
        * @private
        * @param {DragStartEvent} event - Drag start event
        */
        [onDragStart](event) {
          const swappableStartEvent = new _SwappableEvent.SwappableStartEvent({
            dragEvent: event
          });
          this.trigger(swappableStartEvent);
          if (swappableStartEvent.canceled()) {
            event.cancel();
          }
        }
        /**
        * Drag over handler
        * @private
        * @param {DragOverEvent} event - Drag over event
        */
        [onDragOver](event) {
          if (event.over === event.originalSource || event.over === event.source || event.canceled()) {
            return;
          }
          const swappableSwapEvent = new _SwappableEvent.SwappableSwapEvent({
            dragEvent: event,
            over: event.over,
            overContainer: event.overContainer
          });
          this.trigger(swappableSwapEvent);
          if (swappableSwapEvent.canceled()) {
            return;
          }
          // swap originally swapped element back
          if (this.lastOver && this.lastOver !== event.over) {
            swap(this.lastOver, event.source);
          }
          if (this.lastOver === event.over) {
            this.lastOver = null;
          } else {
            this.lastOver = event.over;
          }
          swap(event.source, event.over);
          const swappableSwappedEvent = new _SwappableEvent.SwappableSwappedEvent({
            dragEvent: event,
            swappedElement: event.over
          });
          this.trigger(swappableSwappedEvent);
        }
        /**
        * Drag stop handler
        * @private
        * @param {DragStopEvent} event - Drag stop event
        */
        [onDragStop](event) {
          const swappableStopEvent = new _SwappableEvent.SwappableStopEvent({
            dragEvent: event
          });
          this.trigger(swappableStopEvent);
          this.lastOver = null;
        }
      }
      exports.default = Swappable;
      function withTempElement(callback) {
        const tmpElement = document.createElement('div');
        callback(tmpElement);
        tmpElement.parentNode.removeChild(tmpElement);
      }
      function swap(source, over) {
        const overParent = over.parentNode;
        const sourceParent = source.parentNode;
        withTempElement(tmpElement => {
          sourceParent.insertBefore(tmpElement, source);
          overParent.insertBefore(source, over);
          sourceParent.insertBefore(over, tmpElement);
        });
      }
    }, /*32*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SwappableStopEvent = exports.SwappableSwappedEvent = exports.SwappableSwapEvent = exports.SwappableStartEvent = exports.SwappableEvent = undefined;
      var _AbstractEvent = __webpack_require__(1);
      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
      * Base swappable event
      * @class SwappableEvent
      * @module SwappableEvent
      * @extends AbstractEvent
      */
      class SwappableEvent extends _AbstractEvent2.default {
        /**
        * Original drag event that triggered this swappable event
        * @property dragEvent
        * @type {DragEvent}
        * @readonly
        */
        get dragEvent() {
          return this.data.dragEvent;
        }
      }
      exports.SwappableEvent = SwappableEvent;
      /**
      * Swappable start event
      * @class SwappableStartEvent
      * @module SwappableStartEvent
      * @extends SwappableEvent
      */
      SwappableEvent.type = 'swappable';
      class SwappableStartEvent extends SwappableEvent {}
      exports.SwappableStartEvent = SwappableStartEvent;
      /**
      * Swappable swap event
      * @class SwappableSwapEvent
      * @module SwappableSwapEvent
      * @extends SwappableEvent
      */
      SwappableStartEvent.type = 'swappable:start';
      SwappableStartEvent.cancelable = true;
      class SwappableSwapEvent extends SwappableEvent {
        /**
        * Draggable element you are over
        * @property over
        * @type {HTMLElement}
        * @readonly
        */
        get over() {
          return this.data.over;
        }
        /**
        * Draggable container you are over
        * @property overContainer
        * @type {HTMLElement}
        * @readonly
        */
        get overContainer() {
          return this.data.overContainer;
        }
      }
      exports.SwappableSwapEvent = SwappableSwapEvent;
      /**
      * Swappable swapped event
      * @class SwappableSwappedEvent
      * @module SwappableSwappedEvent
      * @extends SwappableEvent
      */
      SwappableSwapEvent.type = 'swappable:swap';
      SwappableSwapEvent.cancelable = true;
      class SwappableSwappedEvent extends SwappableEvent {
        /**
        * The draggable element that you swapped with
        * @property swappedElement
        * @type {HTMLElement}
        * @readonly
        */
        get swappedElement() {
          return this.data.swappedElement;
        }
      }
      exports.SwappableSwappedEvent = SwappableSwappedEvent;
      /**
      * Swappable stop event
      * @class SwappableStopEvent
      * @module SwappableStopEvent
      * @extends SwappableEvent
      */
      SwappableSwappedEvent.type = 'swappable:swapped';
      class SwappableStopEvent extends SwappableEvent {}
      exports.SwappableStopEvent = SwappableStopEvent;
      SwappableStopEvent.type = 'swappable:stop';
    }, /*33*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _SwappableEvent = __webpack_require__(10);
      Object.keys(_SwappableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _SwappableEvent[key];
          }
        });
      });
      var _Swappable = __webpack_require__(31);
      var _Swappable2 = _interopRequireDefault(_Swappable);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _Swappable2.default;
    }, /*34*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _extends = Object.assign || (function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      });
      var _utils = __webpack_require__(2);
      var _Draggable = __webpack_require__(5);
      var _Draggable2 = _interopRequireDefault(_Draggable);
      var _DroppableEvent = __webpack_require__(11);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      const onDragStart = Symbol('onDragStart');
      const onDragMove = Symbol('onDragMove');
      const onDragStop = Symbol('onDragStop');
      const dropInDropzone = Symbol('dropInDropZone');
      const returnToOriginalDropzone = Symbol('returnToOriginalDropzone');
      const closestDropzone = Symbol('closestDropzone');
      const getDropzones = Symbol('getDropzones');
      /**
      * Returns an announcement message when the Draggable element is dropped into a dropzone element
      * @param {DroppableDroppedEvent} droppableEvent
      * @return {String}
      */
      function onDroppableDroppedDefaultAnnouncement({dragEvent, dropzone}) {
        const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';
        const dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';
        return `Dropped ${sourceText} into ${dropzoneText}`;
      }
      /**
      * Returns an announcement message when the Draggable element has returned to its original dropzone element
      * @param {DroppableReturnedEvent} droppableEvent
      * @return {String}
      */
      function onDroppableReturnedDefaultAnnouncement({dragEvent, dropzone}) {
        const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';
        const dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';
        return `Returned ${sourceText} from ${dropzoneText}`;
      }
      /**
      * @const {Object} defaultAnnouncements
      * @const {Function} defaultAnnouncements['droppable:dropped']
      * @const {Function} defaultAnnouncements['droppable:returned']
      */
      const defaultAnnouncements = {
        'droppable:dropped': onDroppableDroppedDefaultAnnouncement,
        'droppable:returned': onDroppableReturnedDefaultAnnouncement
      };
      const defaultClasses = {
        'droppable:active': 'draggable-dropzone--active',
        'droppable:occupied': 'draggable-dropzone--occupied'
      };
      const defaultOptions = {
        dropzone: '.draggable-droppable'
      };
      /**
      * Droppable is built on top of Draggable and allows dropping draggable elements
      * into dropzone element
      * @class Droppable
      * @module Droppable
      * @extends Draggable
      */
      class Droppable extends _Draggable2.default {
        /**
        * Droppable constructor.
        * @constructs Droppable
        * @param {HTMLElement[]|NodeList|HTMLElement} containers - Droppable containers
        * @param {Object} options - Options for Droppable
        */
        constructor(containers = [], options = {}) {
          super(containers, _extends({}, defaultOptions, options, {
            classes: _extends({}, defaultClasses, options.classes || ({})),
            announcements: _extends({}, defaultAnnouncements, options.announcements || ({}))
          }));
          /**
          * All dropzone elements on drag start
          * @property dropzones
          * @type {HTMLElement[]}
          */
          this.dropzones = null;
          /**
          * Last dropzone element that the source was dropped into
          * @property lastDropzone
          * @type {HTMLElement}
          */
          this.lastDropzone = null;
          /**
          * Initial dropzone element that the source was drag from
          * @property initialDropzone
          * @type {HTMLElement}
          */
          this.initialDropzone = null;
          this[onDragStart] = this[onDragStart].bind(this);
          this[onDragMove] = this[onDragMove].bind(this);
          this[onDragStop] = this[onDragStop].bind(this);
          this.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
        }
        /**
        * Destroys Droppable instance.
        */
        destroy() {
          super.destroy();
          this.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
        }
        /**
        * Drag start handler
        * @private
        * @param {DragStartEvent} event - Drag start event
        */
        [onDragStart](event) {
          if (event.canceled()) {
            return;
          }
          this.dropzones = [...this[getDropzones]()];
          const dropzone = (0, _utils.closest)(event.sensorEvent.target, this.options.dropzone);
          if (!dropzone) {
            event.cancel();
            return;
          }
          const droppableStartEvent = new _DroppableEvent.DroppableStartEvent({
            dragEvent: event,
            dropzone
          });
          this.trigger(droppableStartEvent);
          if (droppableStartEvent.canceled()) {
            event.cancel();
            return;
          }
          this.initialDropzone = dropzone;
          for (const dropzoneElement of this.dropzones) {
            if (dropzoneElement.classList.contains(this.getClassNameFor('droppable:occupied'))) {
              continue;
            }
            dropzoneElement.classList.add(...this.getClassNamesFor('droppable:active'));
          }
        }
        /**
        * Drag move handler
        * @private
        * @param {DragMoveEvent} event - Drag move event
        */
        [onDragMove](event) {
          if (event.canceled()) {
            return;
          }
          const dropzone = this[closestDropzone](event.sensorEvent.target);
          const overEmptyDropzone = dropzone && !dropzone.classList.contains(this.getClassNameFor('droppable:occupied'));
          if (overEmptyDropzone && this[dropInDropzone](event, dropzone)) {
            this.lastDropzone = dropzone;
          } else if ((!dropzone || dropzone === this.initialDropzone) && this.lastDropzone) {
            this[returnToOriginalDropzone](event);
            this.lastDropzone = null;
          }
        }
        /**
        * Drag stop handler
        * @private
        * @param {DragStopEvent} event - Drag stop event
        */
        [onDragStop](event) {
          const droppableStopEvent = new _DroppableEvent.DroppableStopEvent({
            dragEvent: event,
            dropzone: this.lastDropzone || this.initialDropzone
          });
          this.trigger(droppableStopEvent);
          const occupiedClasses = this.getClassNamesFor('droppable:occupied');
          for (const dropzone of this.dropzones) {
            dropzone.classList.remove(...this.getClassNamesFor('droppable:active'));
          }
          if (this.lastDropzone && this.lastDropzone !== this.initialDropzone) {
            this.initialDropzone.classList.remove(...occupiedClasses);
          }
          this.dropzones = null;
          this.lastDropzone = null;
          this.initialDropzone = null;
        }
        /**
        * Drops a draggable element into a dropzone element
        * @private
        * @param {DragMoveEvent} event - Drag move event
        * @param {HTMLElement} dropzone - Dropzone element to drop draggable into
        */
        [dropInDropzone](event, dropzone) {
          const droppableDroppedEvent = new _DroppableEvent.DroppableDroppedEvent({
            dragEvent: event,
            dropzone
          });
          this.trigger(droppableDroppedEvent);
          if (droppableDroppedEvent.canceled()) {
            return false;
          }
          const occupiedClasses = this.getClassNamesFor('droppable:occupied');
          if (this.lastDropzone) {
            this.lastDropzone.classList.remove(...occupiedClasses);
          }
          dropzone.appendChild(event.source);
          dropzone.classList.add(...occupiedClasses);
          return true;
        }
        /**
        * Moves the previously dropped element back into its original dropzone
        * @private
        * @param {DragMoveEvent} event - Drag move event
        */
        [returnToOriginalDropzone](event) {
          const droppableReturnedEvent = new _DroppableEvent.DroppableReturnedEvent({
            dragEvent: event,
            dropzone: this.lastDropzone
          });
          this.trigger(droppableReturnedEvent);
          if (droppableReturnedEvent.canceled()) {
            return;
          }
          this.initialDropzone.appendChild(event.source);
          this.lastDropzone.classList.remove(...this.getClassNamesFor('droppable:occupied'));
        }
        /**
        * Returns closest dropzone element for even target
        * @private
        * @param {HTMLElement} target - Event target
        * @return {HTMLElement|null}
        */
        [closestDropzone](target) {
          if (!this.dropzones) {
            return null;
          }
          return (0, _utils.closest)(target, this.dropzones);
        }
        /**
        * Returns all current dropzone elements for this draggable instance
        * @private
        * @return {NodeList|HTMLElement[]|Array}
        */
        [getDropzones]() {
          const dropzone = this.options.dropzone;
          if (typeof dropzone === 'string') {
            return document.querySelectorAll(dropzone);
          } else if (dropzone instanceof NodeList || dropzone instanceof Array) {
            return dropzone;
          } else if (typeof dropzone === 'function') {
            return dropzone();
          } else {
            return [];
          }
        }
      }
      exports.default = Droppable;
    }, /*35*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DroppableStopEvent = exports.DroppableReturnedEvent = exports.DroppableDroppedEvent = exports.DroppableStartEvent = exports.DroppableEvent = undefined;
      var _AbstractEvent = __webpack_require__(1);
      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
      * Base droppable event
      * @class DroppableEvent
      * @module DroppableEvent
      * @extends AbstractEvent
      */
      class DroppableEvent extends _AbstractEvent2.default {
        /**
        * Original drag event that triggered this droppable event
        * @property dragEvent
        * @type {DragEvent}
        * @readonly
        */
        get dragEvent() {
          return this.data.dragEvent;
        }
      }
      exports.DroppableEvent = DroppableEvent;
      /**
      * Droppable start event
      * @class DroppableStartEvent
      * @module DroppableStartEvent
      * @extends DroppableEvent
      */
      DroppableEvent.type = 'droppable';
      class DroppableStartEvent extends DroppableEvent {
        /**
        * The initial dropzone element of the currently dragging draggable element
        * @property dropzone
        * @type {HTMLElement}
        * @readonly
        */
        get dropzone() {
          return this.data.dropzone;
        }
      }
      exports.DroppableStartEvent = DroppableStartEvent;
      /**
      * Droppable dropped event
      * @class DroppableDroppedEvent
      * @module DroppableDroppedEvent
      * @extends DroppableEvent
      */
      DroppableStartEvent.type = 'droppable:start';
      DroppableStartEvent.cancelable = true;
      class DroppableDroppedEvent extends DroppableEvent {
        /**
        * The dropzone element you dropped the draggable element into
        * @property dropzone
        * @type {HTMLElement}
        * @readonly
        */
        get dropzone() {
          return this.data.dropzone;
        }
      }
      exports.DroppableDroppedEvent = DroppableDroppedEvent;
      /**
      * Droppable returned event
      * @class DroppableReturnedEvent
      * @module DroppableReturnedEvent
      * @extends DroppableEvent
      */
      DroppableDroppedEvent.type = 'droppable:dropped';
      DroppableDroppedEvent.cancelable = true;
      class DroppableReturnedEvent extends DroppableEvent {
        /**
        * The dropzone element you dragged away from
        * @property dropzone
        * @type {HTMLElement}
        * @readonly
        */
        get dropzone() {
          return this.data.dropzone;
        }
      }
      exports.DroppableReturnedEvent = DroppableReturnedEvent;
      /**
      * Droppable stop event
      * @class DroppableStopEvent
      * @module DroppableStopEvent
      * @extends DroppableEvent
      */
      DroppableReturnedEvent.type = 'droppable:returned';
      DroppableReturnedEvent.cancelable = true;
      class DroppableStopEvent extends DroppableEvent {
        /**
        * The final dropzone element of the draggable element
        * @property dropzone
        * @type {HTMLElement}
        * @readonly
        */
        get dropzone() {
          return this.data.dropzone;
        }
      }
      exports.DroppableStopEvent = DroppableStopEvent;
      DroppableStopEvent.type = 'droppable:stop';
      DroppableStopEvent.cancelable = true;
    }, /*36*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _DroppableEvent = __webpack_require__(11);
      Object.keys(_DroppableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _DroppableEvent[key];
          }
        });
      });
      var _Droppable = __webpack_require__(34);
      var _Droppable2 = _interopRequireDefault(_Droppable);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _Droppable2.default;
    }, /*37*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /**
      * The Emitter is a simple emitter class that provides you with `on()`, `off()` and `trigger()` methods
      * @class Emitter
      * @module Emitter
      */
      class Emitter {
        constructor() {
          this.callbacks = {};
        }
        /**
        * Registers callbacks by event name
        * @param {String} type
        * @param {...Function} callbacks
        */
        on(type, ...callbacks) {
          if (!this.callbacks[type]) {
            this.callbacks[type] = [];
          }
          this.callbacks[type].push(...callbacks);
          return this;
        }
        /**
        * Unregisters callbacks by event name
        * @param {String} type
        * @param {Function} callback
        */
        off(type, callback) {
          if (!this.callbacks[type]) {
            return null;
          }
          const copy = this.callbacks[type].slice(0);
          for (let i = 0; i < copy.length; i++) {
            if (callback === copy[i]) {
              this.callbacks[type].splice(i, 1);
            }
          }
          return this;
        }
        /**
        * Triggers event callbacks by event object
        * @param {AbstractEvent} event
        */
        trigger(event) {
          if (!this.callbacks[event.type]) {
            return null;
          }
          const callbacks = [...this.callbacks[event.type]];
          const caughtErrors = [];
          for (let i = callbacks.length - 1; i >= 0; i--) {
            const callback = callbacks[i];
            try {
              callback(event);
            } catch (error) {
              caughtErrors.push(error);
            }
          }
          if (caughtErrors.length) {
            /*eslint-disable no-console*/
            console.error(`Draggable caught errors while triggering '${event.type}'`, caughtErrors);
          }
          return this;
        }
      }
      exports.default = Emitter;
    }, /*38*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _Emitter = __webpack_require__(37);
      var _Emitter2 = _interopRequireDefault(_Emitter);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _Emitter2.default;
    }, /*39*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;
      var _extends = Object.assign || (function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      });
      var _utils = __webpack_require__(2);
      var _Plugins = __webpack_require__(12);
      var _Emitter = __webpack_require__(38);
      var _Emitter2 = _interopRequireDefault(_Emitter);
      var _Sensors = __webpack_require__(6);
      var _DraggableEvent = __webpack_require__(13);
      var _DragEvent = __webpack_require__(14);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      const onDragStart = Symbol('onDragStart');
      const onDragMove = Symbol('onDragMove');
      const onDragStop = Symbol('onDragStop');
      const onDragPressure = Symbol('onDragPressure');
      /**
      * @const {Object} defaultAnnouncements
      * @const {Function} defaultAnnouncements['drag:start']
      * @const {Function} defaultAnnouncements['drag:stop']
      */
      const defaultAnnouncements = {
        'drag:start': event => `Picked up ${event.source.textContent.trim() || event.source.id || 'draggable element'}`,
        'drag:stop': event => `Released ${event.source.textContent.trim() || event.source.id || 'draggable element'}`
      };
      const defaultClasses = {
        'container:dragging': 'draggable-container--is-dragging',
        'source:dragging': 'draggable-source--is-dragging',
        'source:placed': 'draggable-source--placed',
        'container:placed': 'draggable-container--placed',
        'body:dragging': 'draggable--is-dragging',
        'draggable:over': 'draggable--over',
        'container:over': 'draggable-container--over',
        'source:original': 'draggable--original',
        mirror: 'draggable-mirror'
      };
      const defaultOptions = exports.defaultOptions = {
        draggable: '.draggable-source',
        handle: null,
        delay: {},
        distance: 0,
        placedTimeout: 800,
        plugins: [],
        sensors: [],
        exclude: {
          plugins: [],
          sensors: []
        }
      };
      /**
      * This is the core draggable library that does the heavy lifting
      * @class Draggable
      * @module Draggable
      */
      class Draggable {
        /**
        * Draggable constructor.
        * @constructs Draggable
        * @param {HTMLElement[]|NodeList|HTMLElement} containers - Draggable containers
        * @param {Object} options - Options for draggable
        */
        /**
        * Default plugins draggable uses
        * @static
        * @property {Object} Plugins
        * @property {Announcement} Plugins.Announcement
        * @property {Focusable} Plugins.Focusable
        * @property {Mirror} Plugins.Mirror
        * @property {Scrollable} Plugins.Scrollable
        * @type {Object}
        */
        constructor(containers = [document.body], options = {}) {
          /**
          * Draggable containers
          * @property containers
          * @type {HTMLElement[]}
          */
          if (containers instanceof NodeList || containers instanceof Array) {
            this.containers = [...containers];
          } else if (containers instanceof HTMLElement) {
            this.containers = [containers];
          } else {
            throw new Error('Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`');
          }
          this.options = _extends({}, defaultOptions, options, {
            classes: _extends({}, defaultClasses, options.classes || ({})),
            announcements: _extends({}, defaultAnnouncements, options.announcements || ({})),
            exclude: {
              plugins: options.exclude && options.exclude.plugins || [],
              sensors: options.exclude && options.exclude.sensors || []
            }
          });
          /**
          * Draggables event emitter
          * @property emitter
          * @type {Emitter}
          */
          this.emitter = new _Emitter2.default();
          /**
          * Current drag state
          * @property dragging
          * @type {Boolean}
          */
          this.dragging = false;
          /**
          * Active plugins
          * @property plugins
          * @type {Plugin[]}
          */
          this.plugins = [];
          /**
          * Active sensors
          * @property sensors
          * @type {Sensor[]}
          */
          this.sensors = [];
          this[onDragStart] = this[onDragStart].bind(this);
          this[onDragMove] = this[onDragMove].bind(this);
          this[onDragStop] = this[onDragStop].bind(this);
          this[onDragPressure] = this[onDragPressure].bind(this);
          document.addEventListener('drag:start', this[onDragStart], true);
          document.addEventListener('drag:move', this[onDragMove], true);
          document.addEventListener('drag:stop', this[onDragStop], true);
          document.addEventListener('drag:pressure', this[onDragPressure], true);
          const defaultPlugins = Object.values(Draggable.Plugins).filter(Plugin => !this.options.exclude.plugins.includes(Plugin));
          const defaultSensors = Object.values(Draggable.Sensors).filter(sensor => !this.options.exclude.sensors.includes(sensor));
          this.addPlugin(...[...defaultPlugins, ...this.options.plugins]);
          this.addSensor(...[...defaultSensors, ...this.options.sensors]);
          const draggableInitializedEvent = new _DraggableEvent.DraggableInitializedEvent({
            draggable: this
          });
          this.on('mirror:created', ({mirror}) => this.mirror = mirror);
          this.on('mirror:destroy', () => this.mirror = null);
          this.trigger(draggableInitializedEvent);
        }
        /**
        * Destroys Draggable instance. This removes all internal event listeners and
        * deactivates sensors and plugins
        */
        /**
        * Default sensors draggable uses
        * @static
        * @property {Object} Sensors
        * @property {MouseSensor} Sensors.MouseSensor
        * @property {TouchSensor} Sensors.TouchSensor
        * @type {Object}
        */
        destroy() {
          document.removeEventListener('drag:start', this[onDragStart], true);
          document.removeEventListener('drag:move', this[onDragMove], true);
          document.removeEventListener('drag:stop', this[onDragStop], true);
          document.removeEventListener('drag:pressure', this[onDragPressure], true);
          const draggableDestroyEvent = new _DraggableEvent.DraggableDestroyEvent({
            draggable: this
          });
          this.trigger(draggableDestroyEvent);
          this.removePlugin(...this.plugins.map(plugin => plugin.constructor));
          this.removeSensor(...this.sensors.map(sensor => sensor.constructor));
        }
        /**
        * Adds plugin to this draggable instance. This will end up calling the attach method of the plugin
        * @param {...typeof Plugin} plugins - Plugins that you want attached to draggable
        * @return {Draggable}
        * @example draggable.addPlugin(CustomA11yPlugin, CustomMirrorPlugin)
        */
        addPlugin(...plugins) {
          const activePlugins = plugins.map(Plugin => new Plugin(this));
          activePlugins.forEach(plugin => plugin.attach());
          this.plugins = [...this.plugins, ...activePlugins];
          return this;
        }
        /**
        * Removes plugins that are already attached to this draggable instance. This will end up calling
        * the detach method of the plugin
        * @param {...typeof Plugin} plugins - Plugins that you want detached from draggable
        * @return {Draggable}
        * @example draggable.removePlugin(MirrorPlugin, CustomMirrorPlugin)
        */
        removePlugin(...plugins) {
          const removedPlugins = this.plugins.filter(plugin => plugins.includes(plugin.constructor));
          removedPlugins.forEach(plugin => plugin.detach());
          this.plugins = this.plugins.filter(plugin => !plugins.includes(plugin.constructor));
          return this;
        }
        /**
        * Adds sensors to this draggable instance. This will end up calling the attach method of the sensor
        * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable
        * @return {Draggable}
        * @example draggable.addSensor(ForceTouchSensor, CustomSensor)
        */
        addSensor(...sensors) {
          const activeSensors = sensors.map(Sensor => new Sensor(this.containers, this.options));
          activeSensors.forEach(sensor => sensor.attach());
          this.sensors = [...this.sensors, ...activeSensors];
          return this;
        }
        /**
        * Removes sensors that are already attached to this draggable instance. This will end up calling
        * the detach method of the sensor
        * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable
        * @return {Draggable}
        * @example draggable.removeSensor(TouchSensor, DragSensor)
        */
        removeSensor(...sensors) {
          const removedSensors = this.sensors.filter(sensor => sensors.includes(sensor.constructor));
          removedSensors.forEach(sensor => sensor.detach());
          this.sensors = this.sensors.filter(sensor => !sensors.includes(sensor.constructor));
          return this;
        }
        /**
        * Adds container to this draggable instance
        * @param {...HTMLElement} containers - Containers you want to add to draggable
        * @return {Draggable}
        * @example draggable.addContainer(document.body)
        */
        addContainer(...containers) {
          this.containers = [...this.containers, ...containers];
          this.sensors.forEach(sensor => sensor.addContainer(...containers));
          return this;
        }
        /**
        * Removes container from this draggable instance
        * @param {...HTMLElement} containers - Containers you want to remove from draggable
        * @return {Draggable}
        * @example draggable.removeContainer(document.body)
        */
        removeContainer(...containers) {
          this.containers = this.containers.filter(container => !containers.includes(container));
          this.sensors.forEach(sensor => sensor.removeContainer(...containers));
          return this;
        }
        /**
        * Adds listener for draggable events
        * @param {String} type - Event name
        * @param {...Function} callbacks - Event callbacks
        * @return {Draggable}
        * @example draggable.on('drag:start', (dragEvent) => dragEvent.cancel());
        */
        on(type, ...callbacks) {
          this.emitter.on(type, ...callbacks);
          return this;
        }
        /**
        * Removes listener from draggable
        * @param {String} type - Event name
        * @param {Function} callback - Event callback
        * @return {Draggable}
        * @example draggable.off('drag:start', handlerFunction);
        */
        off(type, callback) {
          this.emitter.off(type, callback);
          return this;
        }
        /**
        * Triggers draggable event
        * @param {AbstractEvent} event - Event instance
        * @return {Draggable}
        * @example draggable.trigger(event);
        */
        trigger(event) {
          this.emitter.trigger(event);
          return this;
        }
        /**
        * Returns class name for class identifier
        * @param {String} name - Name of class identifier
        * @return {String|null}
        */
        getClassNameFor(name) {
          return this.getClassNamesFor(name)[0];
        }
        /**
        * Returns class names for class identifier
        * @return {String[]}
        */
        getClassNamesFor(name) {
          const classNames = this.options.classes[name];
          if (classNames instanceof Array) {
            return classNames;
          } else if (typeof classNames === 'string' || classNames instanceof String) {
            return [classNames];
          } else {
            return [];
          }
        }
        /**
        * Returns true if this draggable instance is currently dragging
        * @return {Boolean}
        */
        isDragging() {
          return Boolean(this.dragging);
        }
        /**
        * Returns all draggable elements
        * @return {HTMLElement[]}
        */
        getDraggableElements() {
          return this.containers.reduce((current, container) => {
            return [...current, ...this.getDraggableElementsForContainer(container)];
          }, []);
        }
        /**
        * Returns draggable elements for a given container, excluding the mirror and
        * original source element if present
        * @param {HTMLElement} container
        * @return {HTMLElement[]}
        */
        getDraggableElementsForContainer(container) {
          const allDraggableElements = container.querySelectorAll(this.options.draggable);
          return [...allDraggableElements].filter(childElement => {
            return childElement !== this.originalSource && childElement !== this.mirror;
          });
        }
        /**
        * Drag start handler
        * @private
        * @param {Event} event - DOM Drag event
        */
        [onDragStart](event) {
          const sensorEvent = getSensorEvent(event);
          const {target, container} = sensorEvent;
          if (!this.containers.includes(container)) {
            return;
          }
          if (this.options.handle && target && !(0, _utils.closest)(target, this.options.handle)) {
            sensorEvent.cancel();
            return;
          }
          // Find draggable source element
          this.originalSource = (0, _utils.closest)(target, this.options.draggable);
          this.sourceContainer = container;
          if (!this.originalSource) {
            sensorEvent.cancel();
            return;
          }
          if (this.lastPlacedSource && this.lastPlacedContainer) {
            clearTimeout(this.placedTimeoutID);
            this.lastPlacedSource.classList.remove(...this.getClassNamesFor('source:placed'));
            this.lastPlacedContainer.classList.remove(...this.getClassNamesFor('container:placed'));
          }
          this.source = this.originalSource.cloneNode(true);
          this.originalSource.parentNode.insertBefore(this.source, this.originalSource);
          this.originalSource.style.display = 'none';
          const dragEvent = new _DragEvent.DragStartEvent({
            source: this.source,
            originalSource: this.originalSource,
            sourceContainer: container,
            sensorEvent
          });
          this.trigger(dragEvent);
          this.dragging = !dragEvent.canceled();
          if (dragEvent.canceled()) {
            this.source.parentNode.removeChild(this.source);
            this.originalSource.style.display = null;
            return;
          }
          this.originalSource.classList.add(...this.getClassNamesFor('source:original'));
          this.source.classList.add(...this.getClassNamesFor('source:dragging'));
          this.sourceContainer.classList.add(...this.getClassNamesFor('container:dragging'));
          document.body.classList.add(...this.getClassNamesFor('body:dragging'));
          applyUserSelect(document.body, 'none');
          requestAnimationFrame(() => {
            const oldSensorEvent = getSensorEvent(event);
            const newSensorEvent = oldSensorEvent.clone({
              target: this.source
            });
            this[onDragMove](_extends({}, event, {
              detail: newSensorEvent
            }));
          });
        }
        /**
        * Drag move handler
        * @private
        * @param {Event} event - DOM Drag event
        */
        [onDragMove](event) {
          if (!this.dragging) {
            return;
          }
          const sensorEvent = getSensorEvent(event);
          const {container} = sensorEvent;
          let target = sensorEvent.target;
          const dragMoveEvent = new _DragEvent.DragMoveEvent({
            source: this.source,
            originalSource: this.originalSource,
            sourceContainer: container,
            sensorEvent
          });
          this.trigger(dragMoveEvent);
          if (dragMoveEvent.canceled()) {
            sensorEvent.cancel();
          }
          target = (0, _utils.closest)(target, this.options.draggable);
          const withinCorrectContainer = (0, _utils.closest)(sensorEvent.target, this.containers);
          const overContainer = sensorEvent.overContainer || withinCorrectContainer;
          const isLeavingContainer = this.currentOverContainer && overContainer !== this.currentOverContainer;
          const isLeavingDraggable = this.currentOver && target !== this.currentOver;
          const isOverContainer = overContainer && this.currentOverContainer !== overContainer;
          const isOverDraggable = withinCorrectContainer && target && this.currentOver !== target;
          if (isLeavingDraggable) {
            const dragOutEvent = new _DragEvent.DragOutEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: container,
              sensorEvent,
              over: this.currentOver,
              overContainer: this.currentOverContainer
            });
            this.currentOver.classList.remove(...this.getClassNamesFor('draggable:over'));
            this.currentOver = null;
            this.trigger(dragOutEvent);
          }
          if (isLeavingContainer) {
            const dragOutContainerEvent = new _DragEvent.DragOutContainerEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: container,
              sensorEvent,
              overContainer: this.currentOverContainer
            });
            this.currentOverContainer.classList.remove(...this.getClassNamesFor('container:over'));
            this.currentOverContainer = null;
            this.trigger(dragOutContainerEvent);
          }
          if (isOverContainer) {
            overContainer.classList.add(...this.getClassNamesFor('container:over'));
            const dragOverContainerEvent = new _DragEvent.DragOverContainerEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: container,
              sensorEvent,
              overContainer
            });
            this.currentOverContainer = overContainer;
            this.trigger(dragOverContainerEvent);
          }
          if (isOverDraggable) {
            target.classList.add(...this.getClassNamesFor('draggable:over'));
            const dragOverEvent = new _DragEvent.DragOverEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: container,
              sensorEvent,
              overContainer,
              over: target
            });
            this.currentOver = target;
            this.trigger(dragOverEvent);
          }
        }
        /**
        * Drag stop handler
        * @private
        * @param {Event} event - DOM Drag event
        */
        [onDragStop](event) {
          if (!this.dragging) {
            return;
          }
          this.dragging = false;
          const dragStopEvent = new _DragEvent.DragStopEvent({
            source: this.source,
            originalSource: this.originalSource,
            sensorEvent: event.sensorEvent,
            sourceContainer: this.sourceContainer
          });
          this.trigger(dragStopEvent);
          this.source.parentNode.insertBefore(this.originalSource, this.source);
          this.source.parentNode.removeChild(this.source);
          this.originalSource.style.display = '';
          this.source.classList.remove(...this.getClassNamesFor('source:dragging'));
          this.originalSource.classList.remove(...this.getClassNamesFor('source:original'));
          this.originalSource.classList.add(...this.getClassNamesFor('source:placed'));
          this.sourceContainer.classList.add(...this.getClassNamesFor('container:placed'));
          this.sourceContainer.classList.remove(...this.getClassNamesFor('container:dragging'));
          document.body.classList.remove(...this.getClassNamesFor('body:dragging'));
          applyUserSelect(document.body, '');
          if (this.currentOver) {
            this.currentOver.classList.remove(...this.getClassNamesFor('draggable:over'));
          }
          if (this.currentOverContainer) {
            this.currentOverContainer.classList.remove(...this.getClassNamesFor('container:over'));
          }
          this.lastPlacedSource = this.originalSource;
          this.lastPlacedContainer = this.sourceContainer;
          this.placedTimeoutID = setTimeout(() => {
            if (this.lastPlacedSource) {
              this.lastPlacedSource.classList.remove(...this.getClassNamesFor('source:placed'));
            }
            if (this.lastPlacedContainer) {
              this.lastPlacedContainer.classList.remove(...this.getClassNamesFor('container:placed'));
            }
            this.lastPlacedSource = null;
            this.lastPlacedContainer = null;
          }, this.options.placedTimeout);
          const dragStoppedEvent = new _DragEvent.DragStoppedEvent({
            source: this.source,
            originalSource: this.originalSource,
            sensorEvent: event.sensorEvent,
            sourceContainer: this.sourceContainer
          });
          this.trigger(dragStoppedEvent);
          this.source = null;
          this.originalSource = null;
          this.currentOverContainer = null;
          this.currentOver = null;
          this.sourceContainer = null;
        }
        /**
        * Drag pressure handler
        * @private
        * @param {Event} event - DOM Drag event
        */
        [onDragPressure](event) {
          if (!this.dragging) {
            return;
          }
          const sensorEvent = getSensorEvent(event);
          const source = this.source || (0, _utils.closest)(sensorEvent.originalEvent.target, this.options.draggable);
          const dragPressureEvent = new _DragEvent.DragPressureEvent({
            sensorEvent,
            source,
            pressure: sensorEvent.pressure
          });
          this.trigger(dragPressureEvent);
        }
      }
      exports.default = Draggable;
      Draggable.Plugins = {
        Announcement: _Plugins.Announcement,
        Focusable: _Plugins.Focusable,
        Mirror: _Plugins.Mirror,
        Scrollable: _Plugins.Scrollable
      };
      Draggable.Sensors = {
        MouseSensor: _Sensors.MouseSensor,
        TouchSensor: _Sensors.TouchSensor
      };
      function getSensorEvent(event) {
        return event.detail;
      }
      function applyUserSelect(element, value) {
        element.style.webkitUserSelect = value;
        element.style.mozUserSelect = value;
        element.style.msUserSelect = value;
        element.style.oUserSelect = value;
        element.style.userSelect = value;
      }
    }, /*40*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _Sensor = __webpack_require__(4);
      var _Sensor2 = _interopRequireDefault(_Sensor);
      var _SensorEvent = __webpack_require__(3);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      const onMouseForceWillBegin = Symbol('onMouseForceWillBegin');
      const onMouseForceDown = Symbol('onMouseForceDown');
      const onMouseDown = Symbol('onMouseDown');
      const onMouseForceChange = Symbol('onMouseForceChange');
      const onMouseMove = Symbol('onMouseMove');
      const onMouseUp = Symbol('onMouseUp');
      const onMouseForceGlobalChange = Symbol('onMouseForceGlobalChange');
      /**
      * This sensor picks up native force touch events and dictates drag operations
      * @class ForceTouchSensor
      * @module ForceTouchSensor
      * @extends Sensor
      */
      class ForceTouchSensor extends _Sensor2.default {
        /**
        * ForceTouchSensor constructor.
        * @constructs ForceTouchSensor
        * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
        * @param {Object} options - Options
        */
        constructor(containers = [], options = {}) {
          super(containers, options);
          /**
          * Draggable element needs to be remembered to unset the draggable attribute after drag operation has completed
          * @property mightDrag
          * @type {Boolean}
          */
          this.mightDrag = false;
          this[onMouseForceWillBegin] = this[onMouseForceWillBegin].bind(this);
          this[onMouseForceDown] = this[onMouseForceDown].bind(this);
          this[onMouseDown] = this[onMouseDown].bind(this);
          this[onMouseForceChange] = this[onMouseForceChange].bind(this);
          this[onMouseMove] = this[onMouseMove].bind(this);
          this[onMouseUp] = this[onMouseUp].bind(this);
        }
        /**
        * Attaches sensors event listeners to the DOM
        */
        attach() {
          for (const container of this.containers) {
            container.addEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
            container.addEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
            container.addEventListener('mousedown', this[onMouseDown], true);
            container.addEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
          }
          document.addEventListener('mousemove', this[onMouseMove]);
          document.addEventListener('mouseup', this[onMouseUp]);
        }
        /**
        * Detaches sensors event listeners to the DOM
        */
        detach() {
          for (const container of this.containers) {
            container.removeEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
            container.removeEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
            container.removeEventListener('mousedown', this[onMouseDown], true);
            container.removeEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
          }
          document.removeEventListener('mousemove', this[onMouseMove]);
          document.removeEventListener('mouseup', this[onMouseUp]);
        }
        /**
        * Mouse force will begin handler
        * @private
        * @param {Event} event - Mouse force will begin event
        */
        [onMouseForceWillBegin](event) {
          event.preventDefault();
          this.mightDrag = true;
        }
        /**
        * Mouse force down handler
        * @private
        * @param {Event} event - Mouse force down event
        */
        [onMouseForceDown](event) {
          if (this.dragging) {
            return;
          }
          const target = document.elementFromPoint(event.clientX, event.clientY);
          const container = event.currentTarget;
          const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
            clientX: event.clientX,
            clientY: event.clientY,
            target,
            container,
            originalEvent: event
          });
          this.trigger(container, dragStartEvent);
          this.currentContainer = container;
          this.dragging = !dragStartEvent.canceled();
          this.mightDrag = false;
        }
        /**
        * Mouse up handler
        * @private
        * @param {Event} event - Mouse up event
        */
        [onMouseUp](event) {
          if (!this.dragging) {
            return;
          }
          const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
            clientX: event.clientX,
            clientY: event.clientY,
            target: null,
            container: this.currentContainer,
            originalEvent: event
          });
          this.trigger(this.currentContainer, dragStopEvent);
          this.currentContainer = null;
          this.dragging = false;
          this.mightDrag = false;
        }
        /**
        * Mouse down handler
        * @private
        * @param {Event} event - Mouse down event
        */
        [onMouseDown](event) {
          if (!this.mightDrag) {
            return;
          }
          // Need workaround for real click
          // Cancel potential drag events
          event.stopPropagation();
          event.stopImmediatePropagation();
          event.preventDefault();
        }
        /**
        * Mouse move handler
        * @private
        * @param {Event} event - Mouse force will begin event
        */
        [onMouseMove](event) {
          if (!this.dragging) {
            return;
          }
          const target = document.elementFromPoint(event.clientX, event.clientY);
          const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
            clientX: event.clientX,
            clientY: event.clientY,
            target,
            container: this.currentContainer,
            originalEvent: event
          });
          this.trigger(this.currentContainer, dragMoveEvent);
        }
        /**
        * Mouse force change handler
        * @private
        * @param {Event} event - Mouse force change event
        */
        [onMouseForceChange](event) {
          if (this.dragging) {
            return;
          }
          const target = event.target;
          const container = event.currentTarget;
          const dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
            pressure: event.webkitForce,
            clientX: event.clientX,
            clientY: event.clientY,
            target,
            container,
            originalEvent: event
          });
          this.trigger(container, dragPressureEvent);
        }
        /**
        * Mouse force global change handler
        * @private
        * @param {Event} event - Mouse force global change event
        */
        [onMouseForceGlobalChange](event) {
          if (!this.dragging) {
            return;
          }
          const target = event.target;
          const dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
            pressure: event.webkitForce,
            clientX: event.clientX,
            clientY: event.clientY,
            target,
            container: this.currentContainer,
            originalEvent: event
          });
          this.trigger(this.currentContainer, dragPressureEvent);
        }
      }
      exports.default = ForceTouchSensor;
    }, /*41*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _ForceTouchSensor = __webpack_require__(40);
      var _ForceTouchSensor2 = _interopRequireDefault(_ForceTouchSensor);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _ForceTouchSensor2.default;
    }, /*42*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _utils = __webpack_require__(2);
      var _Sensor = __webpack_require__(4);
      var _Sensor2 = _interopRequireDefault(_Sensor);
      var _SensorEvent = __webpack_require__(3);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      const onMouseDown = Symbol('onMouseDown');
      const onMouseUp = Symbol('onMouseUp');
      const onDragStart = Symbol('onDragStart');
      const onDragOver = Symbol('onDragOver');
      const onDragEnd = Symbol('onDragEnd');
      const onDrop = Symbol('onDrop');
      const reset = Symbol('reset');
      /**
      * This sensor picks up native browser drag events and dictates drag operations
      * @class DragSensor
      * @module DragSensor
      * @extends Sensor
      */
      class DragSensor extends _Sensor2.default {
        /**
        * DragSensor constructor.
        * @constructs DragSensor
        * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
        * @param {Object} options - Options
        */
        constructor(containers = [], options = {}) {
          super(containers, options);
          /**
          * Mouse down timer which will end up setting the draggable attribute, unless canceled
          * @property mouseDownTimeout
          * @type {Number}
          */
          this.mouseDownTimeout = null;
          /**
          * Draggable element needs to be remembered to unset the draggable attribute after drag operation has completed
          * @property draggableElement
          * @type {HTMLElement}
          */
          this.draggableElement = null;
          /**
          * Native draggable element could be links or images, their draggable state will be disabled during drag operation
          * @property nativeDraggableElement
          * @type {HTMLElement}
          */
          this.nativeDraggableElement = null;
          this[onMouseDown] = this[onMouseDown].bind(this);
          this[onMouseUp] = this[onMouseUp].bind(this);
          this[onDragStart] = this[onDragStart].bind(this);
          this[onDragOver] = this[onDragOver].bind(this);
          this[onDragEnd] = this[onDragEnd].bind(this);
          this[onDrop] = this[onDrop].bind(this);
        }
        /**
        * Attaches sensors event listeners to the DOM
        */
        attach() {
          document.addEventListener('mousedown', this[onMouseDown], true);
        }
        /**
        * Detaches sensors event listeners to the DOM
        */
        detach() {
          document.removeEventListener('mousedown', this[onMouseDown], true);
        }
        /**
        * Drag start handler
        * @private
        * @param {Event} event - Drag start event
        */
        [onDragStart](event) {
          // Need for firefox. "text" key is needed for IE
          event.dataTransfer.setData('text', '');
          event.dataTransfer.effectAllowed = this.options.type;
          const target = document.elementFromPoint(event.clientX, event.clientY);
          this.currentContainer = (0, _utils.closest)(event.target, this.containers);
          if (!this.currentContainer) {
            return;
          }
          const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
            clientX: event.clientX,
            clientY: event.clientY,
            target,
            container: this.currentContainer,
            originalEvent: event
          });
          // Workaround
          setTimeout(() => {
            this.trigger(this.currentContainer, dragStartEvent);
            if (dragStartEvent.canceled()) {
              this.dragging = false;
            } else {
              this.dragging = true;
            }
          }, 0);
        }
        /**
        * Drag over handler
        * @private
        * @param {Event} event - Drag over event
        */
        [onDragOver](event) {
          if (!this.dragging) {
            return;
          }
          const target = document.elementFromPoint(event.clientX, event.clientY);
          const container = this.currentContainer;
          const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
            clientX: event.clientX,
            clientY: event.clientY,
            target,
            container,
            originalEvent: event
          });
          this.trigger(container, dragMoveEvent);
          if (!dragMoveEvent.canceled()) {
            event.preventDefault();
            event.dataTransfer.dropEffect = this.options.type;
          }
        }
        /**
        * Drag end handler
        * @private
        * @param {Event} event - Drag end event
        */
        [onDragEnd](event) {
          if (!this.dragging) {
            return;
          }
          document.removeEventListener('mouseup', this[onMouseUp], true);
          const target = document.elementFromPoint(event.clientX, event.clientY);
          const container = this.currentContainer;
          const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
            clientX: event.clientX,
            clientY: event.clientY,
            target,
            container,
            originalEvent: event
          });
          this.trigger(container, dragStopEvent);
          this.dragging = false;
          this.startEvent = null;
          this[reset]();
        }
        /**
        * Drop handler
        * @private
        * @param {Event} event - Drop event
        */
        [onDrop](event) {
          // eslint-disable-line class-methods-use-this
          event.preventDefault();
        }
        /**
        * Mouse down handler
        * @private
        * @param {Event} event - Mouse down event
        */
        [onMouseDown](event) {
          // Firefox bug for inputs within draggables https://bugzilla.mozilla.org/show_bug.cgi?id=739071
          if (event.target && (event.target.form || event.target.contenteditable)) {
            return;
          }
          const nativeDraggableElement = (0, _utils.closest)(event.target, element => element.draggable);
          if (nativeDraggableElement) {
            nativeDraggableElement.draggable = false;
            this.nativeDraggableElement = nativeDraggableElement;
          }
          document.addEventListener('mouseup', this[onMouseUp], true);
          document.addEventListener('dragstart', this[onDragStart], false);
          document.addEventListener('dragover', this[onDragOver], false);
          document.addEventListener('dragend', this[onDragEnd], false);
          document.addEventListener('drop', this[onDrop], false);
          const target = (0, _utils.closest)(event.target, this.options.draggable);
          if (!target) {
            return;
          }
          this.startEvent = event;
          this.mouseDownTimeout = setTimeout(() => {
            target.draggable = true;
            this.draggableElement = target;
          }, this.delay.drag);
        }
        /**
        * Mouse up handler
        * @private
        * @param {Event} event - Mouse up event
        */
        [onMouseUp]() {
          this[reset]();
        }
        /**
        * Mouse up handler
        * @private
        * @param {Event} event - Mouse up event
        */
        [reset]() {
          clearTimeout(this.mouseDownTimeout);
          document.removeEventListener('mouseup', this[onMouseUp], true);
          document.removeEventListener('dragstart', this[onDragStart], false);
          document.removeEventListener('dragover', this[onDragOver], false);
          document.removeEventListener('dragend', this[onDragEnd], false);
          document.removeEventListener('drop', this[onDrop], false);
          if (this.nativeDraggableElement) {
            this.nativeDraggableElement.draggable = true;
            this.nativeDraggableElement = null;
          }
          if (this.draggableElement) {
            this.draggableElement.draggable = false;
            this.draggableElement = null;
          }
        }
      }
      exports.default = DragSensor;
    }, /*43*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _DragSensor = __webpack_require__(42);
      var _DragSensor2 = _interopRequireDefault(_DragSensor);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _DragSensor2.default;
    }, /*44*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _utils = __webpack_require__(2);
      var _Sensor = __webpack_require__(4);
      var _Sensor2 = _interopRequireDefault(_Sensor);
      var _SensorEvent = __webpack_require__(3);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      const onTouchStart = Symbol('onTouchStart');
      const onTouchEnd = Symbol('onTouchEnd');
      const onTouchMove = Symbol('onTouchMove');
      const startDrag = Symbol('startDrag');
      const onDistanceChange = Symbol('onDistanceChange');
      /**
      * Prevents scrolling when set to true
      * @var {Boolean} preventScrolling
      */
      let preventScrolling = false;
      // WebKit requires cancelable `touchmove` events to be added as early as possible
      window.addEventListener('touchmove', event => {
        if (!preventScrolling) {
          return;
        }
        // Prevent scrolling
        event.preventDefault();
      }, {
        passive: false
      });
      /**
      * This sensor picks up native browser touch events and dictates drag operations
      * @class TouchSensor
      * @module TouchSensor
      * @extends Sensor
      */
      class TouchSensor extends _Sensor2.default {
        /**
        * TouchSensor constructor.
        * @constructs TouchSensor
        * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
        * @param {Object} options - Options
        */
        constructor(containers = [], options = {}) {
          super(containers, options);
          /**
          * Closest scrollable container so accidental scroll can cancel long touch
          * @property currentScrollableParent
          * @type {HTMLElement}
          */
          this.currentScrollableParent = null;
          /**
          * TimeoutID for managing delay
          * @property tapTimeout
          * @type {Number}
          */
          this.tapTimeout = null;
          /**
          * touchMoved indicates if touch has moved during tapTimeout
          * @property touchMoved
          * @type {Boolean}
          */
          this.touchMoved = false;
          /**
          * Save pageX coordinates for delay drag
          * @property {Numbre} pageX
          * @private
          */
          this.pageX = null;
          /**
          * Save pageY coordinates for delay drag
          * @property {Numbre} pageY
          * @private
          */
          this.pageY = null;
          this[onTouchStart] = this[onTouchStart].bind(this);
          this[onTouchEnd] = this[onTouchEnd].bind(this);
          this[onTouchMove] = this[onTouchMove].bind(this);
          this[startDrag] = this[startDrag].bind(this);
          this[onDistanceChange] = this[onDistanceChange].bind(this);
        }
        /**
        * Attaches sensors event listeners to the DOM
        */
        attach() {
          document.addEventListener('touchstart', this[onTouchStart]);
        }
        /**
        * Detaches sensors event listeners to the DOM
        */
        detach() {
          document.removeEventListener('touchstart', this[onTouchStart]);
        }
        /**
        * Touch start handler
        * @private
        * @param {Event} event - Touch start event
        */
        [onTouchStart](event) {
          const container = (0, _utils.closest)(event.target, this.containers);
          if (!container) {
            return;
          }
          const {distance = 0} = this.options;
          const {delay} = this;
          const {pageX, pageY} = (0, _utils.touchCoords)(event);
          Object.assign(this, {
            pageX,
            pageY
          });
          this.onTouchStartAt = Date.now();
          this.startEvent = event;
          this.currentContainer = container;
          document.addEventListener('touchend', this[onTouchEnd]);
          document.addEventListener('touchcancel', this[onTouchEnd]);
          document.addEventListener('touchmove', this[onDistanceChange]);
          container.addEventListener('contextmenu', onContextMenu);
          if (distance) {
            preventScrolling = true;
          }
          this.tapTimeout = window.setTimeout(() => {
            this[onDistanceChange]({
              touches: [{
                pageX: this.pageX,
                pageY: this.pageY
              }]
            });
          }, delay.touch);
        }
        /**
        * Start the drag
        * @private
        */
        [startDrag]() {
          const startEvent = this.startEvent;
          const container = this.currentContainer;
          const touch = (0, _utils.touchCoords)(startEvent);
          const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
            clientX: touch.pageX,
            clientY: touch.pageY,
            target: startEvent.target,
            container,
            originalEvent: startEvent
          });
          this.trigger(this.currentContainer, dragStartEvent);
          this.dragging = !dragStartEvent.canceled();
          if (this.dragging) {
            document.addEventListener('touchmove', this[onTouchMove]);
          }
          preventScrolling = this.dragging;
        }
        /**
        * Touch move handler prior to drag start.
        * @private
        * @param {Event} event - Touch move event
        */
        [onDistanceChange](event) {
          const {distance} = this.options;
          const {startEvent, delay} = this;
          const start = (0, _utils.touchCoords)(startEvent);
          const current = (0, _utils.touchCoords)(event);
          const timeElapsed = Date.now() - this.onTouchStartAt;
          const distanceTravelled = (0, _utils.distance)(start.pageX, start.pageY, current.pageX, current.pageY);
          Object.assign(this, current);
          clearTimeout(this.tapTimeout);
          if (timeElapsed < delay.touch) {
            // moved during delay
            document.removeEventListener('touchmove', this[onDistanceChange]);
          } else if (distanceTravelled >= distance) {
            document.removeEventListener('touchmove', this[onDistanceChange]);
            this[startDrag]();
          }
        }
        /**
        * Mouse move handler while dragging
        * @private
        * @param {Event} event - Touch move event
        */
        [onTouchMove](event) {
          if (!this.dragging) {
            return;
          }
          const {pageX, pageY} = (0, _utils.touchCoords)(event);
          const target = document.elementFromPoint(pageX - window.scrollX, pageY - window.scrollY);
          const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
            clientX: pageX,
            clientY: pageY,
            target,
            container: this.currentContainer,
            originalEvent: event
          });
          this.trigger(this.currentContainer, dragMoveEvent);
        }
        /**
        * Touch end handler
        * @private
        * @param {Event} event - Touch end event
        */
        [onTouchEnd](event) {
          clearTimeout(this.tapTimeout);
          preventScrolling = false;
          document.removeEventListener('touchend', this[onTouchEnd]);
          document.removeEventListener('touchcancel', this[onTouchEnd]);
          document.removeEventListener('touchmove', this[onDistanceChange]);
          if (this.currentContainer) {
            this.currentContainer.removeEventListener('contextmenu', onContextMenu);
          }
          if (!this.dragging) {
            return;
          }
          document.removeEventListener('touchmove', this[onTouchMove]);
          const {pageX, pageY} = (0, _utils.touchCoords)(event);
          const target = document.elementFromPoint(pageX - window.scrollX, pageY - window.scrollY);
          event.preventDefault();
          const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
            clientX: pageX,
            clientY: pageY,
            target,
            container: this.currentContainer,
            originalEvent: event
          });
          this.trigger(this.currentContainer, dragStopEvent);
          this.currentContainer = null;
          this.dragging = false;
          this.startEvent = null;
        }
      }
      exports.default = TouchSensor;
      function onContextMenu(event) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, /*45*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _TouchSensor = __webpack_require__(44);
      var _TouchSensor2 = _interopRequireDefault(_TouchSensor);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _TouchSensor2.default;
    }, /*46*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DragPressureSensorEvent = exports.DragStopSensorEvent = exports.DragMoveSensorEvent = exports.DragStartSensorEvent = exports.SensorEvent = undefined;
      var _AbstractEvent = __webpack_require__(1);
      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
      * Base sensor event
      * @class SensorEvent
      * @module SensorEvent
      * @extends AbstractEvent
      */
      class SensorEvent extends _AbstractEvent2.default {
        /**
        * Original browser event that triggered a sensor
        * @property originalEvent
        * @type {Event}
        * @readonly
        */
        get originalEvent() {
          return this.data.originalEvent;
        }
        /**
        * Normalized clientX for both touch and mouse events
        * @property clientX
        * @type {Number}
        * @readonly
        */
        get clientX() {
          return this.data.clientX;
        }
        /**
        * Normalized clientY for both touch and mouse events
        * @property clientY
        * @type {Number}
        * @readonly
        */
        get clientY() {
          return this.data.clientY;
        }
        /**
        * Normalized target for both touch and mouse events
        * Returns the element that is behind cursor or touch pointer
        * @property target
        * @type {HTMLElement}
        * @readonly
        */
        get target() {
          return this.data.target;
        }
        /**
        * Container that initiated the sensor
        * @property container
        * @type {HTMLElement}
        * @readonly
        */
        get container() {
          return this.data.container;
        }
        /**
        * Trackpad pressure
        * @property pressure
        * @type {Number}
        * @readonly
        */
        get pressure() {
          return this.data.pressure;
        }
      }
      exports.SensorEvent = SensorEvent;
      /**
      * Drag start sensor event
      * @class DragStartSensorEvent
      * @module DragStartSensorEvent
      * @extends SensorEvent
      */
      class DragStartSensorEvent extends SensorEvent {}
      exports.DragStartSensorEvent = DragStartSensorEvent;
      /**
      * Drag move sensor event
      * @class DragMoveSensorEvent
      * @module DragMoveSensorEvent
      * @extends SensorEvent
      */
      DragStartSensorEvent.type = 'drag:start';
      class DragMoveSensorEvent extends SensorEvent {}
      exports.DragMoveSensorEvent = DragMoveSensorEvent;
      /**
      * Drag stop sensor event
      * @class DragStopSensorEvent
      * @module DragStopSensorEvent
      * @extends SensorEvent
      */
      DragMoveSensorEvent.type = 'drag:move';
      class DragStopSensorEvent extends SensorEvent {}
      exports.DragStopSensorEvent = DragStopSensorEvent;
      /**
      * Drag pressure sensor event
      * @class DragPressureSensorEvent
      * @module DragPressureSensorEvent
      * @extends SensorEvent
      */
      DragStopSensorEvent.type = 'drag:stop';
      class DragPressureSensorEvent extends SensorEvent {}
      exports.DragPressureSensorEvent = DragPressureSensorEvent;
      DragPressureSensorEvent.type = 'drag:pressure';
    }, /*47*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _utils = __webpack_require__(2);
      var _Sensor = __webpack_require__(4);
      var _Sensor2 = _interopRequireDefault(_Sensor);
      var _SensorEvent = __webpack_require__(3);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      const onContextMenuWhileDragging = Symbol('onContextMenuWhileDragging');
      const onMouseDown = Symbol('onMouseDown');
      const onMouseMove = Symbol('onMouseMove');
      const onMouseUp = Symbol('onMouseUp');
      const startDrag = Symbol('startDrag');
      const onDistanceChange = Symbol('onDistanceChange');
      /**
      * This sensor picks up native browser mouse events and dictates drag operations
      * @class MouseSensor
      * @module MouseSensor
      * @extends Sensor
      */
      class MouseSensor extends _Sensor2.default {
        /**
        * MouseSensor constructor.
        * @constructs MouseSensor
        * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
        * @param {Object} options - Options
        */
        constructor(containers = [], options = {}) {
          super(containers, options);
          /**
          * Mouse down timer which will end up triggering the drag start operation
          * @property mouseDownTimeout
          * @type {Number}
          */
          this.mouseDownTimeout = null;
          /**
          * Save pageX coordinates for delay drag
          * @property {Numbre} pageX
          * @private
          */
          this.pageX = null;
          /**
          * Save pageY coordinates for delay drag
          * @property {Numbre} pageY
          * @private
          */
          this.pageY = null;
          this[onContextMenuWhileDragging] = this[onContextMenuWhileDragging].bind(this);
          this[onMouseDown] = this[onMouseDown].bind(this);
          this[onMouseMove] = this[onMouseMove].bind(this);
          this[onMouseUp] = this[onMouseUp].bind(this);
          this[startDrag] = this[startDrag].bind(this);
          this[onDistanceChange] = this[onDistanceChange].bind(this);
        }
        /**
        * Attaches sensors event listeners to the DOM
        */
        attach() {
          document.addEventListener('mousedown', this[onMouseDown], true);
        }
        /**
        * Detaches sensors event listeners to the DOM
        */
        detach() {
          document.removeEventListener('mousedown', this[onMouseDown], true);
        }
        /**
        * Mouse down handler
        * @private
        * @param {Event} event - Mouse down event
        */
        [onMouseDown](event) {
          if (event.button !== 0 || event.ctrlKey || event.metaKey) {
            return;
          }
          const container = (0, _utils.closest)(event.target, this.containers);
          if (!container) {
            return;
          }
          const {delay} = this;
          const {pageX, pageY} = event;
          Object.assign(this, {
            pageX,
            pageY
          });
          this.onMouseDownAt = Date.now();
          this.startEvent = event;
          this.currentContainer = container;
          document.addEventListener('mouseup', this[onMouseUp]);
          document.addEventListener('dragstart', preventNativeDragStart);
          document.addEventListener('mousemove', this[onDistanceChange]);
          this.mouseDownTimeout = window.setTimeout(() => {
            this[onDistanceChange]({
              pageX: this.pageX,
              pageY: this.pageY
            });
          }, delay.mouse);
        }
        /**
        * Start the drag
        * @private
        */
        [startDrag]() {
          const startEvent = this.startEvent;
          const container = this.currentContainer;
          const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
            clientX: startEvent.clientX,
            clientY: startEvent.clientY,
            target: startEvent.target,
            container,
            originalEvent: startEvent
          });
          this.trigger(this.currentContainer, dragStartEvent);
          this.dragging = !dragStartEvent.canceled();
          if (this.dragging) {
            document.addEventListener('contextmenu', this[onContextMenuWhileDragging], true);
            document.addEventListener('mousemove', this[onMouseMove]);
          }
        }
        /**
        * Detect change in distance, starting drag when both
        * delay and distance requirements are met
        * @private
        * @param {Event} event - Mouse move event
        */
        [onDistanceChange](event) {
          const {pageX, pageY} = event;
          const {distance} = this.options;
          const {startEvent, delay} = this;
          Object.assign(this, {
            pageX,
            pageY
          });
          if (!this.currentContainer) {
            return;
          }
          const timeElapsed = Date.now() - this.onMouseDownAt;
          const distanceTravelled = (0, _utils.distance)(startEvent.pageX, startEvent.pageY, pageX, pageY) || 0;
          clearTimeout(this.mouseDownTimeout);
          if (timeElapsed < delay.mouse) {
            // moved during delay
            document.removeEventListener('mousemove', this[onDistanceChange]);
          } else if (distanceTravelled >= distance) {
            document.removeEventListener('mousemove', this[onDistanceChange]);
            this[startDrag]();
          }
        }
        /**
        * Mouse move handler
        * @private
        * @param {Event} event - Mouse move event
        */
        [onMouseMove](event) {
          if (!this.dragging) {
            return;
          }
          const target = document.elementFromPoint(event.clientX, event.clientY);
          const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
            clientX: event.clientX,
            clientY: event.clientY,
            target,
            container: this.currentContainer,
            originalEvent: event
          });
          this.trigger(this.currentContainer, dragMoveEvent);
        }
        /**
        * Mouse up handler
        * @private
        * @param {Event} event - Mouse up event
        */
        [onMouseUp](event) {
          clearTimeout(this.mouseDownTimeout);
          if (event.button !== 0) {
            return;
          }
          document.removeEventListener('mouseup', this[onMouseUp]);
          document.removeEventListener('dragstart', preventNativeDragStart);
          document.removeEventListener('mousemove', this[onDistanceChange]);
          if (!this.dragging) {
            return;
          }
          const target = document.elementFromPoint(event.clientX, event.clientY);
          const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
            clientX: event.clientX,
            clientY: event.clientY,
            target,
            container: this.currentContainer,
            originalEvent: event
          });
          this.trigger(this.currentContainer, dragStopEvent);
          document.removeEventListener('contextmenu', this[onContextMenuWhileDragging], true);
          document.removeEventListener('mousemove', this[onMouseMove]);
          this.currentContainer = null;
          this.dragging = false;
          this.startEvent = null;
        }
        /**
        * Context menu handler
        * @private
        * @param {Event} event - Context menu event
        */
        [onContextMenuWhileDragging](event) {
          event.preventDefault();
        }
      }
      exports.default = MouseSensor;
      function preventNativeDragStart(event) {
        event.preventDefault();
      }
    }, /*48*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _MouseSensor = __webpack_require__(47);
      var _MouseSensor2 = _interopRequireDefault(_MouseSensor);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _MouseSensor2.default;
    }, /*49*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _extends = Object.assign || (function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      });
      const defaultDealy = {
        mouse: 0,
        drag: 0,
        touch: 100
      };
      /**
      * Base sensor class. Extend from this class to create a new or custom sensor
      * @class Sensor
      * @module Sensor
      */
      class Sensor {
        /**
        * Sensor constructor.
        * @constructs Sensor
        * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
        * @param {Object} options - Options
        */
        constructor(containers = [], options = {}) {
          /**
          * Current containers
          * @property containers
          * @type {HTMLElement[]}
          */
          this.containers = [...containers];
          /**
          * Current options
          * @property options
          * @type {Object}
          */
          this.options = _extends({}, options);
          /**
          * Current drag state
          * @property dragging
          * @type {Boolean}
          */
          this.dragging = false;
          /**
          * Current container
          * @property currentContainer
          * @type {HTMLElement}
          */
          this.currentContainer = null;
          /**
          * The event of the initial sensor down
          * @property startEvent
          * @type {Event}
          */
          this.startEvent = null;
          /**
          * The delay of each sensor
          * @property delay
          * @type {Object}
          */
          this.delay = calcDelay(options.delay);
        }
        /**
        * Attaches sensors event listeners to the DOM
        * @return {Sensor}
        */
        attach() {
          return this;
        }
        /**
        * Detaches sensors event listeners to the DOM
        * @return {Sensor}
        */
        detach() {
          return this;
        }
        /**
        * Adds container to this sensor instance
        * @param {...HTMLElement} containers - Containers you want to add to this sensor
        * @example draggable.addContainer(document.body)
        */
        addContainer(...containers) {
          this.containers = [...this.containers, ...containers];
        }
        /**
        * Removes container from this sensor instance
        * @param {...HTMLElement} containers - Containers you want to remove from this sensor
        * @example draggable.removeContainer(document.body)
        */
        removeContainer(...containers) {
          this.containers = this.containers.filter(container => !containers.includes(container));
        }
        /**
        * Triggers event on target element
        * @param {HTMLElement} element - Element to trigger event on
        * @param {SensorEvent} sensorEvent - Sensor event to trigger
        */
        trigger(element, sensorEvent) {
          const event = document.createEvent('Event');
          event.detail = sensorEvent;
          event.initEvent(sensorEvent.type, true, true);
          element.dispatchEvent(event);
          this.lastEvent = sensorEvent;
          return sensorEvent;
        }
      }
      exports.default = Sensor;
      /**
      * Calculate the delay of each sensor through the delay in the options
      * @param {undefined|Number|Object} optionsDelay - the delay in the options
      * @return {Object}
      */
      function calcDelay(optionsDelay) {
        const delay = {};
        if (optionsDelay === undefined) {
          return _extends({}, defaultDealy);
        }
        if (typeof optionsDelay === 'number') {
          for (const key in defaultDealy) {
            if (defaultDealy.hasOwnProperty(key)) {
              delay[key] = optionsDelay;
            }
          }
          return delay;
        }
        for (const key in defaultDealy) {
          if (defaultDealy.hasOwnProperty(key)) {
            if (optionsDelay[key] === undefined) {
              delay[key] = defaultDealy[key];
            } else {
              delay[key] = optionsDelay[key];
            }
          }
        }
        return delay;
      }
    }, /*50*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = touchCoords;
      /**
      * Returns the first touch event found in touches or changedTouches of a touch events.
      * @param {TouchEvent} event a touch event
      * @return {Touch} a touch object
      */
      function touchCoords(event = {}) {
        const {touches, changedTouches} = event;
        return touches && touches[0] || changedTouches && changedTouches[0];
      }
    }, /*51*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _touchCoords = __webpack_require__(50);
      var _touchCoords2 = _interopRequireDefault(_touchCoords);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _touchCoords2.default;
    }, /*52*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = distance;
      /**
      * Returns the distance between two points
      * @param  {Number} x1 The X position of the first point
      * @param  {Number} y1 The Y position of the first point
      * @param  {Number} x2 The X position of the second point
      * @param  {Number} y2 The Y position of the second point
      * @return {Number}
      */
      function distance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      }
    }, /*53*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _distance = __webpack_require__(52);
      var _distance2 = _interopRequireDefault(_distance);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _distance2.default;
    }, /*54*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = requestNextAnimationFrame;
      function requestNextAnimationFrame(callback) {
        return requestAnimationFrame(() => {
          requestAnimationFrame(callback);
        });
      }
    }, /*55*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _requestNextAnimationFrame = __webpack_require__(54);
      var _requestNextAnimationFrame2 = _interopRequireDefault(_requestNextAnimationFrame);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _requestNextAnimationFrame2.default;
    }, /*56*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = closest;
      const matchFunction = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
      /**
      * Get the closest parent element of a given element that matches the given
      * selector string or matching function
      *
      * @param {Element} element The child element to find a parent of
      * @param {String|Function} selector The string or function to use to match
      *     the parent element
      * @return {Element|null}
      */
      function closest(element, value) {
        if (!element) {
          return null;
        }
        const selector = value;
        const callback = value;
        const nodeList = value;
        const singleElement = value;
        const isSelector = Boolean(typeof value === 'string');
        const isFunction = Boolean(typeof value === 'function');
        const isNodeList = Boolean(value instanceof NodeList || value instanceof Array);
        const isElement = Boolean(value instanceof HTMLElement);
        function conditionFn(currentElement) {
          if (!currentElement) {
            return currentElement;
          } else if (isSelector) {
            return matchFunction.call(currentElement, selector);
          } else if (isNodeList) {
            return [...nodeList].includes(currentElement);
          } else if (isElement) {
            return singleElement === currentElement;
          } else if (isFunction) {
            return callback(currentElement);
          } else {
            return null;
          }
        }
        let current = element;
        do {
          current = current.correspondingUseElement || current.correspondingElement || current;
          if (conditionFn(current)) {
            return current;
          }
          current = current.parentNode;
        } while (current && current !== document.body && current !== document);
        return null;
      }
    }, /*57*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _closest = __webpack_require__(56);
      var _closest2 = _interopRequireDefault(_closest);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _closest2.default;
    }, /*58*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = exports.scroll = exports.onDragStop = exports.onDragMove = exports.onDragStart = undefined;
      var _extends = Object.assign || (function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      });
      var _AbstractPlugin = __webpack_require__(0);
      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
      var _utils = __webpack_require__(2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      const onDragStart = exports.onDragStart = Symbol('onDragStart');
      const onDragMove = exports.onDragMove = Symbol('onDragMove');
      const onDragStop = exports.onDragStop = Symbol('onDragStop');
      const scroll = exports.scroll = Symbol('scroll');
      /**
      * Scrollable default options
      * @property {Object} defaultOptions
      * @property {Number} defaultOptions.speed
      * @property {Number} defaultOptions.sensitivity
      * @property {HTMLElement[]} defaultOptions.scrollableElements
      * @type {Object}
      */
      const defaultOptions = exports.defaultOptions = {
        speed: 6,
        sensitivity: 50,
        scrollableElements: []
      };
      /**
      * Scrollable plugin which scrolls the closest scrollable parent
      * @class Scrollable
      * @module Scrollable
      * @extends AbstractPlugin
      */
      class Scrollable extends _AbstractPlugin2.default {
        /**
        * Scrollable constructor.
        * @constructs Scrollable
        * @param {Draggable} draggable - Draggable instance
        */
        constructor(draggable) {
          super(draggable);
          /**
          * Scrollable options
          * @property {Object} options
          * @property {Number} options.speed
          * @property {Number} options.sensitivity
          * @property {HTMLElement[]} options.scrollableElements
          * @type {Object}
          */
          this.options = _extends({}, defaultOptions, this.getOptions());
          /**
          * Keeps current mouse position
          * @property {Object} currentMousePosition
          * @property {Number} currentMousePosition.clientX
          * @property {Number} currentMousePosition.clientY
          * @type {Object|null}
          */
          this.currentMousePosition = null;
          /**
          * Scroll animation frame
          * @property scrollAnimationFrame
          * @type {Number|null}
          */
          this.scrollAnimationFrame = null;
          /**
          * Closest scrollable element
          * @property scrollableElement
          * @type {HTMLElement|null}
          */
          this.scrollableElement = null;
          /**
          * Animation frame looking for the closest scrollable element
          * @property findScrollableElementFrame
          * @type {Number|null}
          */
          this.findScrollableElementFrame = null;
          this[onDragStart] = this[onDragStart].bind(this);
          this[onDragMove] = this[onDragMove].bind(this);
          this[onDragStop] = this[onDragStop].bind(this);
          this[scroll] = this[scroll].bind(this);
        }
        /**
        * Attaches plugins event listeners
        */
        attach() {
          this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
        }
        /**
        * Detaches plugins event listeners
        */
        detach() {
          this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
        }
        /**
        * Returns options passed through draggable
        * @return {Object}
        */
        getOptions() {
          return this.draggable.options.scrollable || ({});
        }
        /**
        * Returns closest scrollable elements by element
        * @param {HTMLElement} target
        * @return {HTMLElement}
        */
        getScrollableElement(target) {
          if (this.hasDefinedScrollableElements()) {
            return (0, _utils.closest)(target, this.options.scrollableElements) || document.documentElement;
          } else {
            return closestScrollableElement(target);
          }
        }
        /**
        * Returns true if at least one scrollable element have been defined via options
        * @param {HTMLElement} target
        * @return {Boolean}
        */
        hasDefinedScrollableElements() {
          return Boolean(this.options.scrollableElements.length !== 0);
        }
        /**
        * Drag start handler. Finds closest scrollable parent in separate frame
        * @param {DragStartEvent} dragEvent
        * @private
        */
        [onDragStart](dragEvent) {
          this.findScrollableElementFrame = requestAnimationFrame(() => {
            this.scrollableElement = this.getScrollableElement(dragEvent.source);
          });
        }
        /**
        * Drag move handler. Remembers mouse position and initiates scrolling
        * @param {DragMoveEvent} dragEvent
        * @private
        */
        [onDragMove](dragEvent) {
          this.findScrollableElementFrame = requestAnimationFrame(() => {
            this.scrollableElement = this.getScrollableElement(dragEvent.sensorEvent.target);
          });
          if (!this.scrollableElement) {
            return;
          }
          const sensorEvent = dragEvent.sensorEvent;
          const scrollOffset = {
            x: 0,
            y: 0
          };
          if (('ontouchstart' in window)) {
            scrollOffset.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            scrollOffset.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
          }
          this.currentMousePosition = {
            clientX: sensorEvent.clientX - scrollOffset.x,
            clientY: sensorEvent.clientY - scrollOffset.y
          };
          this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
        }
        /**
        * Drag stop handler. Cancels scroll animations and resets state
        * @private
        */
        [onDragStop]() {
          cancelAnimationFrame(this.scrollAnimationFrame);
          cancelAnimationFrame(this.findScrollableElementFrame);
          this.scrollableElement = null;
          this.scrollAnimationFrame = null;
          this.findScrollableElementFrame = null;
          this.currentMousePosition = null;
        }
        /**
        * Scroll function that does the heavylifting
        * @private
        */
        [scroll]() {
          if (!this.scrollableElement || !this.currentMousePosition) {
            return;
          }
          cancelAnimationFrame(this.scrollAnimationFrame);
          const {speed, sensitivity} = this.options;
          const rect = this.scrollableElement.getBoundingClientRect();
          const bottomCutOff = rect.bottom > window.innerHeight;
          const topCutOff = rect.top < 0;
          const cutOff = topCutOff || bottomCutOff;
          const documentScrollingElement = getDocumentScrollingElement();
          const scrollableElement = this.scrollableElement;
          const clientX = this.currentMousePosition.clientX;
          const clientY = this.currentMousePosition.clientY;
          if (scrollableElement !== document.body && scrollableElement !== document.documentElement && !cutOff) {
            const {offsetHeight, offsetWidth} = scrollableElement;
            if (rect.top + offsetHeight - clientY < sensitivity) {
              scrollableElement.scrollTop += speed;
            } else if (clientY - rect.top < sensitivity) {
              scrollableElement.scrollTop -= speed;
            }
            if (rect.left + offsetWidth - clientX < sensitivity) {
              scrollableElement.scrollLeft += speed;
            } else if (clientX - rect.left < sensitivity) {
              scrollableElement.scrollLeft -= speed;
            }
          } else {
            const {innerHeight, innerWidth} = window;
            if (clientY < sensitivity) {
              documentScrollingElement.scrollTop -= speed;
            } else if (innerHeight - clientY < sensitivity) {
              documentScrollingElement.scrollTop += speed;
            }
            if (clientX < sensitivity) {
              documentScrollingElement.scrollLeft -= speed;
            } else if (innerWidth - clientX < sensitivity) {
              documentScrollingElement.scrollLeft += speed;
            }
          }
          this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
        }
      }
      exports.default = Scrollable;
      /**
      * Returns true if the passed element has overflow
      * @param {HTMLElement} element
      * @return {Boolean}
      * @private
      */
      function hasOverflow(element) {
        const overflowRegex = /(auto|scroll)/;
        const computedStyles = getComputedStyle(element, null);
        const overflow = computedStyles.getPropertyValue('overflow') + computedStyles.getPropertyValue('overflow-y') + computedStyles.getPropertyValue('overflow-x');
        return overflowRegex.test(overflow);
      }
      /**
      * Returns true if the passed element is statically positioned
      * @param {HTMLElement} element
      * @return {Boolean}
      * @private
      */
      function isStaticallyPositioned(element) {
        const position = getComputedStyle(element).getPropertyValue('position');
        return position === 'static';
      }
      /**
      * Finds closest scrollable element
      * @param {HTMLElement} element
      * @return {HTMLElement}
      * @private
      */
      function closestScrollableElement(element) {
        if (!element) {
          return getDocumentScrollingElement();
        }
        const position = getComputedStyle(element).getPropertyValue('position');
        const excludeStaticParents = position === 'absolute';
        const scrollableElement = (0, _utils.closest)(element, parent => {
          if (excludeStaticParents && isStaticallyPositioned(parent)) {
            return false;
          }
          return hasOverflow(parent);
        });
        if (position === 'fixed' || !scrollableElement) {
          return getDocumentScrollingElement();
        } else {
          return scrollableElement;
        }
      }
      /**
      * Returns element that scrolls document
      * @return {HTMLElement}
      * @private
      */
      function getDocumentScrollingElement() {
        return document.scrollingElement || document.documentElement;
      }
    }, /*59*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;
      var _Scrollable = __webpack_require__(58);
      var _Scrollable2 = _interopRequireDefault(_Scrollable);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _Scrollable2.default;
      exports.defaultOptions = _Scrollable.defaultOptions;
    }, /*60*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MirrorDestroyEvent = exports.MirrorMoveEvent = exports.MirrorAttachedEvent = exports.MirrorCreatedEvent = exports.MirrorCreateEvent = exports.MirrorEvent = undefined;
      var _AbstractEvent = __webpack_require__(1);
      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
      * Base mirror event
      * @class MirrorEvent
      * @module MirrorEvent
      * @extends AbstractEvent
      */
      class MirrorEvent extends _AbstractEvent2.default {
        /**
        * Draggables source element
        * @property source
        * @type {HTMLElement}
        * @readonly
        */
        get source() {
          return this.data.source;
        }
        /**
        * Draggables original source element
        * @property originalSource
        * @type {HTMLElement}
        * @readonly
        */
        get originalSource() {
          return this.data.originalSource;
        }
        /**
        * Draggables source container element
        * @property sourceContainer
        * @type {HTMLElement}
        * @readonly
        */
        get sourceContainer() {
          return this.data.sourceContainer;
        }
        /**
        * Sensor event
        * @property sensorEvent
        * @type {SensorEvent}
        * @readonly
        */
        get sensorEvent() {
          return this.data.sensorEvent;
        }
        /**
        * Drag event
        * @property dragEvent
        * @type {DragEvent}
        * @readonly
        */
        get dragEvent() {
          return this.data.dragEvent;
        }
        /**
        * Original event that triggered sensor event
        * @property originalEvent
        * @type {Event}
        * @readonly
        */
        get originalEvent() {
          if (this.sensorEvent) {
            return this.sensorEvent.originalEvent;
          }
          return null;
        }
      }
      exports.MirrorEvent = MirrorEvent;
      /**
      * Mirror create event
      * @class MirrorCreateEvent
      * @module MirrorCreateEvent
      * @extends MirrorEvent
      */
      class MirrorCreateEvent extends MirrorEvent {}
      exports.MirrorCreateEvent = MirrorCreateEvent;
      /**
      * Mirror created event
      * @class MirrorCreatedEvent
      * @module MirrorCreatedEvent
      * @extends MirrorEvent
      */
      MirrorCreateEvent.type = 'mirror:create';
      class MirrorCreatedEvent extends MirrorEvent {
        /**
        * Draggables mirror element
        * @property mirror
        * @type {HTMLElement}
        * @readonly
        */
        get mirror() {
          return this.data.mirror;
        }
      }
      exports.MirrorCreatedEvent = MirrorCreatedEvent;
      /**
      * Mirror attached event
      * @class MirrorAttachedEvent
      * @module MirrorAttachedEvent
      * @extends MirrorEvent
      */
      MirrorCreatedEvent.type = 'mirror:created';
      class MirrorAttachedEvent extends MirrorEvent {
        /**
        * Draggables mirror element
        * @property mirror
        * @type {HTMLElement}
        * @readonly
        */
        get mirror() {
          return this.data.mirror;
        }
      }
      exports.MirrorAttachedEvent = MirrorAttachedEvent;
      /**
      * Mirror move event
      * @class MirrorMoveEvent
      * @module MirrorMoveEvent
      * @extends MirrorEvent
      */
      MirrorAttachedEvent.type = 'mirror:attached';
      class MirrorMoveEvent extends MirrorEvent {
        /**
        * Draggables mirror element
        * @property mirror
        * @type {HTMLElement}
        * @readonly
        */
        get mirror() {
          return this.data.mirror;
        }
        /**
        * Sensor has exceeded mirror's threshold on x axis
        * @type {Boolean}
        * @readonly
        */
        get passedThreshX() {
          return this.data.passedThreshX;
        }
        /**
        * Sensor has exceeded mirror's threshold on y axis
        * @type {Boolean}
        * @readonly
        */
        get passedThreshY() {
          return this.data.passedThreshY;
        }
      }
      exports.MirrorMoveEvent = MirrorMoveEvent;
      /**
      * Mirror destroy event
      * @class MirrorDestroyEvent
      * @module MirrorDestroyEvent
      * @extends MirrorEvent
      */
      MirrorMoveEvent.type = 'mirror:move';
      MirrorMoveEvent.cancelable = true;
      class MirrorDestroyEvent extends MirrorEvent {
        /**
        * Draggables mirror element
        * @property mirror
        * @type {HTMLElement}
        * @readonly
        */
        get mirror() {
          return this.data.mirror;
        }
      }
      exports.MirrorDestroyEvent = MirrorDestroyEvent;
      MirrorDestroyEvent.type = 'mirror:destroy';
      MirrorDestroyEvent.cancelable = true;
    }, /*61*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _MirrorEvent = __webpack_require__(60);
      Object.keys(_MirrorEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function () {
            return _MirrorEvent[key];
          }
        });
      });
    }, /*62*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = exports.getAppendableContainer = exports.onScroll = exports.onMirrorMove = exports.onMirrorCreated = exports.onDragStop = exports.onDragMove = exports.onDragStart = undefined;
      var _extends = Object.assign || (function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      });
      var _AbstractPlugin = __webpack_require__(0);
      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
      var _MirrorEvent = __webpack_require__(61);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
          if (keys.indexOf(i) >= 0) continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
          target[i] = obj[i];
        }
        return target;
      }
      const onDragStart = exports.onDragStart = Symbol('onDragStart');
      const onDragMove = exports.onDragMove = Symbol('onDragMove');
      const onDragStop = exports.onDragStop = Symbol('onDragStop');
      const onMirrorCreated = exports.onMirrorCreated = Symbol('onMirrorCreated');
      const onMirrorMove = exports.onMirrorMove = Symbol('onMirrorMove');
      const onScroll = exports.onScroll = Symbol('onScroll');
      const getAppendableContainer = exports.getAppendableContainer = Symbol('getAppendableContainer');
      /**
      * Mirror default options
      * @property {Object} defaultOptions
      * @property {Boolean} defaultOptions.constrainDimensions
      * @property {Boolean} defaultOptions.xAxis
      * @property {Boolean} defaultOptions.yAxis
      * @property {null} defaultOptions.cursorOffsetX
      * @property {null} defaultOptions.cursorOffsetY
      * @type {Object}
      */
      const defaultOptions = exports.defaultOptions = {
        constrainDimensions: false,
        xAxis: true,
        yAxis: true,
        cursorOffsetX: null,
        cursorOffsetY: null,
        thresholdX: null,
        thresholdY: null
      };
      /**
      * Mirror plugin which controls the mirror positioning while dragging
      * @class Mirror
      * @module Mirror
      * @extends AbstractPlugin
      */
      class Mirror extends _AbstractPlugin2.default {
        /**
        * Mirror constructor.
        * @constructs Mirror
        * @param {Draggable} draggable - Draggable instance
        */
        constructor(draggable) {
          super(draggable);
          /**
          * Mirror options
          * @property {Object} options
          * @property {Boolean} options.constrainDimensions
          * @property {Boolean} options.xAxis
          * @property {Boolean} options.yAxis
          * @property {Number|null} options.cursorOffsetX
          * @property {Number|null} options.cursorOffsetY
          * @property {String|HTMLElement|Function} options.appendTo
          * @type {Object}
          */
          this.options = _extends({}, defaultOptions, this.getOptions());
          /**
          * Scroll offset for touch devices because the mirror is positioned fixed
          * @property {Object} scrollOffset
          * @property {Number} scrollOffset.x
          * @property {Number} scrollOffset.y
          */
          this.scrollOffset = {
            x: 0,
            y: 0
          };
          /**
          * Initial scroll offset for touch devices because the mirror is positioned fixed
          * @property {Object} scrollOffset
          * @property {Number} scrollOffset.x
          * @property {Number} scrollOffset.y
          */
          this.initialScrollOffset = {
            x: window.scrollX,
            y: window.scrollY
          };
          this[onDragStart] = this[onDragStart].bind(this);
          this[onDragMove] = this[onDragMove].bind(this);
          this[onDragStop] = this[onDragStop].bind(this);
          this[onMirrorCreated] = this[onMirrorCreated].bind(this);
          this[onMirrorMove] = this[onMirrorMove].bind(this);
          this[onScroll] = this[onScroll].bind(this);
        }
        /**
        * Attaches plugins event listeners
        */
        attach() {
          this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]).on('mirror:created', this[onMirrorCreated]).on('mirror:move', this[onMirrorMove]);
        }
        /**
        * Detaches plugins event listeners
        */
        detach() {
          this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]).off('mirror:created', this[onMirrorCreated]).off('mirror:move', this[onMirrorMove]);
        }
        /**
        * Returns options passed through draggable
        * @return {Object}
        */
        getOptions() {
          return this.draggable.options.mirror || ({});
        }
        [onDragStart](dragEvent) {
          if (dragEvent.canceled()) {
            return;
          }
          if (('ontouchstart' in window)) {
            document.addEventListener('scroll', this[onScroll], true);
          }
          this.initialScrollOffset = {
            x: window.scrollX,
            y: window.scrollY
          };
          const {source, originalSource, sourceContainer, sensorEvent} = dragEvent;
          // Last sensor position of mirror move
          this.lastMirrorMovedClient = {
            x: sensorEvent.clientX,
            y: sensorEvent.clientY
          };
          const mirrorCreateEvent = new _MirrorEvent.MirrorCreateEvent({
            source,
            originalSource,
            sourceContainer,
            sensorEvent,
            dragEvent
          });
          this.draggable.trigger(mirrorCreateEvent);
          if (isNativeDragEvent(sensorEvent) || mirrorCreateEvent.canceled()) {
            return;
          }
          const appendableContainer = this[getAppendableContainer](source) || sourceContainer;
          this.mirror = source.cloneNode(true);
          const mirrorCreatedEvent = new _MirrorEvent.MirrorCreatedEvent({
            source,
            originalSource,
            sourceContainer,
            sensorEvent,
            dragEvent,
            mirror: this.mirror
          });
          const mirrorAttachedEvent = new _MirrorEvent.MirrorAttachedEvent({
            source,
            originalSource,
            sourceContainer,
            sensorEvent,
            dragEvent,
            mirror: this.mirror
          });
          this.draggable.trigger(mirrorCreatedEvent);
          appendableContainer.appendChild(this.mirror);
          this.draggable.trigger(mirrorAttachedEvent);
        }
        [onDragMove](dragEvent) {
          if (!this.mirror || dragEvent.canceled()) {
            return;
          }
          const {source, originalSource, sourceContainer, sensorEvent} = dragEvent;
          let passedThreshX = true;
          let passedThreshY = true;
          if (this.options.thresholdX || this.options.thresholdY) {
            const {x: lastX, y: lastY} = this.lastMirrorMovedClient;
            if (Math.abs(lastX - sensorEvent.clientX) < this.options.thresholdX) {
              passedThreshX = false;
            } else {
              this.lastMirrorMovedClient.x = sensorEvent.clientX;
            }
            if (Math.abs(lastY - sensorEvent.clientY) < this.options.thresholdY) {
              passedThreshY = false;
            } else {
              this.lastMirrorMovedClient.y = sensorEvent.clientY;
            }
            if (!passedThreshX && !passedThreshY) {
              return;
            }
          }
          const mirrorMoveEvent = new _MirrorEvent.MirrorMoveEvent({
            source,
            originalSource,
            sourceContainer,
            sensorEvent,
            dragEvent,
            mirror: this.mirror,
            passedThreshX,
            passedThreshY
          });
          this.draggable.trigger(mirrorMoveEvent);
        }
        [onDragStop](dragEvent) {
          if (('ontouchstart' in window)) {
            document.removeEventListener('scroll', this[onScroll], true);
          }
          this.initialScrollOffset = {
            x: 0,
            y: 0
          };
          this.scrollOffset = {
            x: 0,
            y: 0
          };
          if (!this.mirror) {
            return;
          }
          const {source, sourceContainer, sensorEvent} = dragEvent;
          const mirrorDestroyEvent = new _MirrorEvent.MirrorDestroyEvent({
            source,
            mirror: this.mirror,
            sourceContainer,
            sensorEvent,
            dragEvent
          });
          this.draggable.trigger(mirrorDestroyEvent);
          if (!mirrorDestroyEvent.canceled()) {
            this.mirror.parentNode.removeChild(this.mirror);
          }
        }
        [onScroll]() {
          this.scrollOffset = {
            x: window.scrollX - this.initialScrollOffset.x,
            y: window.scrollY - this.initialScrollOffset.y
          };
        }
        /**
        * Mirror created handler
        * @param {MirrorCreatedEvent} mirrorEvent
        * @return {Promise}
        * @private
        */
        [onMirrorCreated]({mirror, source, sensorEvent}) {
          const mirrorClasses = this.draggable.getClassNamesFor('mirror');
          const setState = _ref => {
            let {mirrorOffset, initialX, initialY} = _ref, args = _objectWithoutProperties(_ref, ['mirrorOffset', 'initialX', 'initialY']);
            this.mirrorOffset = mirrorOffset;
            this.initialX = initialX;
            this.initialY = initialY;
            this.lastMovedX = initialX;
            this.lastMovedY = initialY;
            return _extends({
              mirrorOffset,
              initialX,
              initialY
            }, args);
          };
          mirror.style.display = 'none';
          const initialState = {
            mirror,
            source,
            sensorEvent,
            mirrorClasses,
            scrollOffset: this.scrollOffset,
            options: this.options,
            passedThreshX: true,
            passedThreshY: true
          };
          return Promise.resolve(initialState).// Fix reflow here
          then(computeMirrorDimensions).then(calculateMirrorOffset).then(resetMirror).then(addMirrorClasses).then(positionMirror({
            initial: true
          })).then(removeMirrorID).then(setState);
        }
        /**
        * Mirror move handler
        * @param {MirrorMoveEvent} mirrorEvent
        * @return {Promise|null}
        * @private
        */
        [onMirrorMove](mirrorEvent) {
          if (mirrorEvent.canceled()) {
            return null;
          }
          const setState = _ref2 => {
            let {lastMovedX, lastMovedY} = _ref2, args = _objectWithoutProperties(_ref2, ['lastMovedX', 'lastMovedY']);
            this.lastMovedX = lastMovedX;
            this.lastMovedY = lastMovedY;
            return _extends({
              lastMovedX,
              lastMovedY
            }, args);
          };
          const initialState = {
            mirror: mirrorEvent.mirror,
            sensorEvent: mirrorEvent.sensorEvent,
            mirrorOffset: this.mirrorOffset,
            options: this.options,
            initialX: this.initialX,
            initialY: this.initialY,
            scrollOffset: this.scrollOffset,
            passedThreshX: mirrorEvent.passedThreshX,
            passedThreshY: mirrorEvent.passedThreshY,
            lastMovedX: this.lastMovedX,
            lastMovedY: this.lastMovedY
          };
          return Promise.resolve(initialState).then(positionMirror({
            raf: true
          })).then(setState);
        }
        /**
        * Returns appendable container for mirror based on the appendTo option
        * @private
        * @param {Object} options
        * @param {HTMLElement} options.source - Current source
        * @return {HTMLElement}
        */
        [getAppendableContainer](source) {
          const appendTo = this.options.appendTo;
          if (typeof appendTo === 'string') {
            return document.querySelector(appendTo);
          } else if (appendTo instanceof HTMLElement) {
            return appendTo;
          } else if (typeof appendTo === 'function') {
            return appendTo(source);
          } else {
            return source.parentNode;
          }
        }
      }
      exports.default = Mirror;
      /**
      * Computes mirror dimensions based on the source element
      * Adds sourceRect to state
      * @param {Object} state
      * @param {HTMLElement} state.source
      * @return {Promise}
      * @private
      */
      function computeMirrorDimensions(_ref3) {
        let {source} = _ref3, args = _objectWithoutProperties(_ref3, ['source']);
        return withPromise(resolve => {
          const sourceRect = source.getBoundingClientRect();
          resolve(_extends({
            source,
            sourceRect
          }, args));
        });
      }
      /**
      * Calculates mirror offset
      * Adds mirrorOffset to state
      * @param {Object} state
      * @param {SensorEvent} state.sensorEvent
      * @param {DOMRect} state.sourceRect
      * @return {Promise}
      * @private
      */
      function calculateMirrorOffset(_ref4) {
        let {sensorEvent, sourceRect, options} = _ref4, args = _objectWithoutProperties(_ref4, ['sensorEvent', 'sourceRect', 'options']);
        return withPromise(resolve => {
          const top = options.cursorOffsetY === null ? sensorEvent.clientY - sourceRect.top : options.cursorOffsetY;
          const left = options.cursorOffsetX === null ? sensorEvent.clientX - sourceRect.left : options.cursorOffsetX;
          const mirrorOffset = {
            top,
            left
          };
          resolve(_extends({
            sensorEvent,
            sourceRect,
            mirrorOffset,
            options
          }, args));
        });
      }
      /**
      * Applys mirror styles
      * @param {Object} state
      * @param {HTMLElement} state.mirror
      * @param {HTMLElement} state.source
      * @param {Object} state.options
      * @return {Promise}
      * @private
      */
      function resetMirror(_ref5) {
        let {mirror, source, options} = _ref5, args = _objectWithoutProperties(_ref5, ['mirror', 'source', 'options']);
        return withPromise(resolve => {
          let offsetHeight;
          let offsetWidth;
          if (options.constrainDimensions) {
            const computedSourceStyles = getComputedStyle(source);
            offsetHeight = computedSourceStyles.getPropertyValue('height');
            offsetWidth = computedSourceStyles.getPropertyValue('width');
          }
          mirror.style.display = null;
          mirror.style.position = 'fixed';
          mirror.style.pointerEvents = 'none';
          mirror.style.top = 0;
          mirror.style.left = 0;
          mirror.style.margin = 0;
          if (options.constrainDimensions) {
            mirror.style.height = offsetHeight;
            mirror.style.width = offsetWidth;
          }
          resolve(_extends({
            mirror,
            source,
            options
          }, args));
        });
      }
      /**
      * Applys mirror class on mirror element
      * @param {Object} state
      * @param {HTMLElement} state.mirror
      * @param {String[]} state.mirrorClasses
      * @return {Promise}
      * @private
      */
      function addMirrorClasses(_ref6) {
        let {mirror, mirrorClasses} = _ref6, args = _objectWithoutProperties(_ref6, ['mirror', 'mirrorClasses']);
        return withPromise(resolve => {
          mirror.classList.add(...mirrorClasses);
          resolve(_extends({
            mirror,
            mirrorClasses
          }, args));
        });
      }
      /**
      * Removes source ID from cloned mirror element
      * @param {Object} state
      * @param {HTMLElement} state.mirror
      * @return {Promise}
      * @private
      */
      function removeMirrorID(_ref7) {
        let {mirror} = _ref7, args = _objectWithoutProperties(_ref7, ['mirror']);
        return withPromise(resolve => {
          mirror.removeAttribute('id');
          delete mirror.id;
          resolve(_extends({
            mirror
          }, args));
        });
      }
      /**
      * Positions mirror with translate3d
      * @param {Object} state
      * @param {HTMLElement} state.mirror
      * @param {SensorEvent} state.sensorEvent
      * @param {Object} state.mirrorOffset
      * @param {Number} state.initialY
      * @param {Number} state.initialX
      * @param {Object} state.options
      * @return {Promise}
      * @private
      */
      function positionMirror({withFrame = false, initial = false} = {}) {
        return _ref8 => {
          let {mirror, sensorEvent, mirrorOffset, initialY, initialX, scrollOffset, options, passedThreshX, passedThreshY, lastMovedX, lastMovedY} = _ref8, args = _objectWithoutProperties(_ref8, ['mirror', 'sensorEvent', 'mirrorOffset', 'initialY', 'initialX', 'scrollOffset', 'options', 'passedThreshX', 'passedThreshY', 'lastMovedX', 'lastMovedY']);
          return withPromise(resolve => {
            const result = _extends({
              mirror,
              sensorEvent,
              mirrorOffset,
              options
            }, args);
            if (mirrorOffset) {
              const x = passedThreshX ? Math.round((sensorEvent.clientX - mirrorOffset.left - scrollOffset.x) / (options.thresholdX || 1)) * (options.thresholdX || 1) : Math.round(lastMovedX);
              const y = passedThreshY ? Math.round((sensorEvent.clientY - mirrorOffset.top - scrollOffset.y) / (options.thresholdY || 1)) * (options.thresholdY || 1) : Math.round(lastMovedY);
              if (options.xAxis && options.yAxis || initial) {
                mirror.style.transform = `translate3d(${x}px, ${y}px, 0)`;
              } else if (options.xAxis && !options.yAxis) {
                mirror.style.transform = `translate3d(${x}px, ${initialY}px, 0)`;
              } else if (options.yAxis && !options.xAxis) {
                mirror.style.transform = `translate3d(${initialX}px, ${y}px, 0)`;
              }
              if (initial) {
                result.initialX = x;
                result.initialY = y;
              }
              result.lastMovedX = x;
              result.lastMovedY = y;
            }
            resolve(result);
          }, {
            frame: withFrame
          });
        };
      }
      /**
      * Wraps functions in promise with potential animation frame option
      * @param {Function} callback
      * @param {Object} options
      * @param {Boolean} options.raf
      * @return {Promise}
      * @private
      */
      function withPromise(callback, {raf = false} = {}) {
        return new Promise((resolve, reject) => {
          if (raf) {
            requestAnimationFrame(() => {
              callback(resolve, reject);
            });
          } else {
            callback(resolve, reject);
          }
        });
      }
      /**
      * Returns true if the sensor event was triggered by a native browser drag event
      * @param {SensorEvent} sensorEvent
      */
      function isNativeDragEvent(sensorEvent) {
        return (/^drag/).test(sensorEvent.originalEvent.type);
      }
    }, /*63*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;
      var _Mirror = __webpack_require__(62);
      var _Mirror2 = _interopRequireDefault(_Mirror);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _Mirror2.default;
      exports.defaultOptions = _Mirror.defaultOptions;
    }, /*64*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _extends = Object.assign || (function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      });
      var _AbstractPlugin = __webpack_require__(0);
      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      const onInitialize = Symbol('onInitialize');
      const onDestroy = Symbol('onDestroy');
      /**
      * Focusable default options
      * @property {Object} defaultOptions
      * @type {Object}
      */
      const defaultOptions = {};
      /**
      * Focusable plugin
      * @class Focusable
      * @module Focusable
      * @extends AbstractPlugin
      */
      class Focusable extends _AbstractPlugin2.default {
        /**
        * Focusable constructor.
        * @constructs Focusable
        * @param {Draggable} draggable - Draggable instance
        */
        constructor(draggable) {
          super(draggable);
          /**
          * Focusable options
          * @property {Object} options
          * @type {Object}
          */
          this.options = _extends({}, defaultOptions, this.getOptions());
          this[onInitialize] = this[onInitialize].bind(this);
          this[onDestroy] = this[onDestroy].bind(this);
        }
        /**
        * Attaches listeners to draggable
        */
        attach() {
          this.draggable.on('draggable:initialize', this[onInitialize]).on('draggable:destroy', this[onDestroy]);
        }
        /**
        * Detaches listeners from draggable
        */
        detach() {
          this.draggable.off('draggable:initialize', this[onInitialize]).off('draggable:destroy', this[onDestroy]);
          // Remove modified elements when detach
          this[onDestroy]();
        }
        /**
        * Returns options passed through draggable
        * @return {Object}
        */
        getOptions() {
          return this.draggable.options.focusable || ({});
        }
        /**
        * Returns draggable containers and elements
        * @return {HTMLElement[]}
        */
        getElements() {
          return [...this.draggable.containers, ...this.draggable.getDraggableElements()];
        }
        /**
        * Intialize handler
        * @private
        */
        [onInitialize]() {
          // Can wait until the next best frame is available
          requestAnimationFrame(() => {
            this.getElements().forEach(element => decorateElement(element));
          });
        }
        /**
        * Destroy handler
        * @private
        */
        [onDestroy]() {
          // Can wait until the next best frame is available
          requestAnimationFrame(() => {
            this.getElements().forEach(element => stripElement(element));
          });
        }
      }
      exports.default = Focusable;
      /**
      * Keeps track of all the elements that are missing tabindex attributes
      * so they can be reset when draggable gets destroyed
      * @const {HTMLElement[]} elementsWithMissingTabIndex
      */
      const elementsWithMissingTabIndex = [];
      /**
      * Decorates element with tabindex attributes
      * @param {HTMLElement} element
      * @return {Object}
      * @private
      */
      function decorateElement(element) {
        const hasMissingTabIndex = Boolean(!element.getAttribute('tabindex') && element.tabIndex === -1);
        if (hasMissingTabIndex) {
          elementsWithMissingTabIndex.push(element);
          element.tabIndex = 0;
        }
      }
      /**
      * Removes elements tabindex attributes
      * @param {HTMLElement} element
      * @private
      */
      function stripElement(element) {
        const tabIndexElementPosition = elementsWithMissingTabIndex.indexOf(element);
        if (tabIndexElementPosition !== -1) {
          element.tabIndex = -1;
          elementsWithMissingTabIndex.splice(tabIndexElementPosition, 1);
        }
      }
    }, /*65*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _Focusable = __webpack_require__(64);
      var _Focusable2 = _interopRequireDefault(_Focusable);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _Focusable2.default;
    }, /*66*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /**
      * All draggable plugins inherit from this class.
      * @abstract
      * @class AbstractPlugin
      * @module AbstractPlugin
      */
      class AbstractPlugin {
        /**
        * AbstractPlugin constructor.
        * @constructs AbstractPlugin
        * @param {Draggable} draggable - Draggable instance
        */
        constructor(draggable) {
          /**
          * Draggable instance
          * @property draggable
          * @type {Draggable}
          */
          this.draggable = draggable;
        }
        /**
        * Override to add listeners
        * @abstract
        */
        attach() {
          throw new Error('Not Implemented');
        }
        /**
        * Override to remove listeners
        * @abstract
        */
        detach() {
          throw new Error('Not Implemented');
        }
      }
      exports.default = AbstractPlugin;
    }, /*67*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;
      var _extends = Object.assign || (function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      });
      var _AbstractPlugin = __webpack_require__(0);
      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      const onInitialize = Symbol('onInitialize');
      const onDestroy = Symbol('onDestroy');
      const announceEvent = Symbol('announceEvent');
      const announceMessage = Symbol('announceMessage');
      const ARIA_RELEVANT = 'aria-relevant';
      const ARIA_ATOMIC = 'aria-atomic';
      const ARIA_LIVE = 'aria-live';
      const ROLE = 'role';
      /**
      * Announcement default options
      * @property {Object} defaultOptions
      * @property {Number} defaultOptions.expire
      * @type {Object}
      */
      const defaultOptions = exports.defaultOptions = {
        expire: 7000
      };
      /**
      * Announcement plugin
      * @class Announcement
      * @module Announcement
      * @extends AbstractPlugin
      */
      class Announcement extends _AbstractPlugin2.default {
        /**
        * Announcement constructor.
        * @constructs Announcement
        * @param {Draggable} draggable - Draggable instance
        */
        constructor(draggable) {
          super(draggable);
          /**
          * Plugin options
          * @property options
          * @type {Object}
          */
          this.options = _extends({}, defaultOptions, this.getOptions());
          /**
          * Original draggable trigger method. Hack until we have onAll or on('all')
          * @property originalTriggerMethod
          * @type {Function}
          */
          this.originalTriggerMethod = this.draggable.trigger;
          this[onInitialize] = this[onInitialize].bind(this);
          this[onDestroy] = this[onDestroy].bind(this);
        }
        /**
        * Attaches listeners to draggable
        */
        attach() {
          this.draggable.on('draggable:initialize', this[onInitialize]);
        }
        /**
        * Detaches listeners from draggable
        */
        detach() {
          this.draggable.off('draggable:destroy', this[onDestroy]);
        }
        /**
        * Returns passed in options
        */
        getOptions() {
          return this.draggable.options.announcements || ({});
        }
        /**
        * Announces event
        * @private
        * @param {AbstractEvent} event
        */
        [announceEvent](event) {
          const message = this.options[event.type];
          if (message && typeof message === 'string') {
            this[announceMessage](message);
          }
          if (message && typeof message === 'function') {
            this[announceMessage](message(event));
          }
        }
        /**
        * Announces message to screen reader
        * @private
        * @param {String} message
        */
        [announceMessage](message) {
          announce(message, {
            expire: this.options.expire
          });
        }
        /**
        * Initialize hander
        * @private
        */
        [onInitialize]() {
          // Hack until there is an api for listening for all events
          this.draggable.trigger = event => {
            try {
              this[announceEvent](event);
            } finally {
              // Ensure that original trigger is called
              this.originalTriggerMethod.call(this.draggable, event);
            }
          };
        }
        /**
        * Destroy hander
        * @private
        */
        [onDestroy]() {
          this.draggable.trigger = this.originalTriggerMethod;
        }
      }
      exports.default = Announcement;
      /**
      * @const {HTMLElement} liveRegion
      */
      const liveRegion = createRegion();
      /**
      * Announces message via live region
      * @param {String} message
      * @param {Object} options
      * @param {Number} options.expire
      */
      function announce(message, {expire}) {
        const element = document.createElement('div');
        element.textContent = message;
        liveRegion.appendChild(element);
        return setTimeout(() => {
          liveRegion.removeChild(element);
        }, expire);
      }
      /**
      * Creates region element
      * @return {HTMLElement}
      */
      function createRegion() {
        const element = document.createElement('div');
        element.setAttribute('id', 'draggable-live-region');
        element.setAttribute(ARIA_RELEVANT, 'additions');
        element.setAttribute(ARIA_ATOMIC, 'true');
        element.setAttribute(ARIA_LIVE, 'assertive');
        element.setAttribute(ROLE, 'log');
        element.style.position = 'fixed';
        element.style.width = '1px';
        element.style.height = '1px';
        element.style.top = '-1px';
        element.style.overflow = 'hidden';
        return element;
      }
      // Append live region element as early as possible
      document.addEventListener('DOMContentLoaded', () => {
        document.body.appendChild(liveRegion);
      });
    }, /*68*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;
      var _Announcement = __webpack_require__(67);
      var _Announcement2 = _interopRequireDefault(_Announcement);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.default = _Announcement2.default;
      exports.defaultOptions = _Announcement.defaultOptions;
    }, /*69*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DraggableDestroyEvent = exports.DraggableInitializedEvent = exports.DraggableEvent = undefined;
      var _AbstractEvent = __webpack_require__(1);
      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
      * Base draggable event
      * @class DraggableEvent
      * @module DraggableEvent
      * @extends AbstractEvent
      */
      class DraggableEvent extends _AbstractEvent2.default {
        /**
        * Draggable instance
        * @property draggable
        * @type {Draggable}
        * @readonly
        */
        get draggable() {
          return this.data.draggable;
        }
      }
      exports.DraggableEvent = DraggableEvent;
      /**
      * Draggable initialized event
      * @class DraggableInitializedEvent
      * @module DraggableInitializedEvent
      * @extends DraggableEvent
      */
      DraggableEvent.type = 'draggable';
      class DraggableInitializedEvent extends DraggableEvent {}
      exports.DraggableInitializedEvent = DraggableInitializedEvent;
      /**
      * Draggable destory event
      * @class DraggableInitializedEvent
      * @module DraggableDestroyEvent
      * @extends DraggableDestroyEvent
      */
      DraggableInitializedEvent.type = 'draggable:initialize';
      class DraggableDestroyEvent extends DraggableEvent {}
      exports.DraggableDestroyEvent = DraggableDestroyEvent;
      DraggableDestroyEvent.type = 'draggable:destroy';
    }, /*70*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _extends = Object.assign || (function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      });
      const canceled = Symbol('canceled');
      /**
      * All events fired by draggable inherit this class. You can call `cancel()` to
      * cancel a specific event or you can check if an event has been canceled by
      * calling `canceled()`.
      * @abstract
      * @class AbstractEvent
      * @module AbstractEvent
      */
      class AbstractEvent {
        /**
        * AbstractEvent constructor.
        * @constructs AbstractEvent
        * @param {object} data - Event data
        */
        /**
        * Event type
        * @static
        * @abstract
        * @property type
        * @type {String}
        */
        constructor(data) {
          this[canceled] = false;
          this.data = data;
        }
        /**
        * Read-only type
        * @abstract
        * @return {String}
        */
        /**
        * Event cancelable
        * @static
        * @abstract
        * @property cancelable
        * @type {Boolean}
        */
        get type() {
          return this.constructor.type;
        }
        /**
        * Read-only cancelable
        * @abstract
        * @return {Boolean}
        */
        get cancelable() {
          return this.constructor.cancelable;
        }
        /**
        * Cancels the event instance
        * @abstract
        */
        cancel() {
          this[canceled] = true;
        }
        /**
        * Check if event has been canceled
        * @abstract
        * @return {Boolean}
        */
        canceled() {
          return Boolean(this[canceled]);
        }
        /**
        * Returns new event instance with existing event data.
        * This method allows for overriding of event data.
        * @param {Object} data
        * @return {AbstractEvent}
        */
        clone(data) {
          return new this.constructor(_extends({}, this.data, data));
        }
      }
      exports.default = AbstractEvent;
      AbstractEvent.type = 'event';
      AbstractEvent.cancelable = false;
    }, /*71*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DragStoppedEvent = exports.DragStopEvent = exports.DragPressureEvent = exports.DragOutContainerEvent = exports.DragOverContainerEvent = exports.DragOutEvent = exports.DragOverEvent = exports.DragMoveEvent = exports.DragStartEvent = exports.DragEvent = undefined;
      var _AbstractEvent = __webpack_require__(1);
      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      /**
      * Base drag event
      * @class DragEvent
      * @module DragEvent
      * @extends AbstractEvent
      */
      class DragEvent extends _AbstractEvent2.default {
        /**
        * Draggables source element
        * @property source
        * @type {HTMLElement}
        * @readonly
        */
        get source() {
          return this.data.source;
        }
        /**
        * Draggables original source element
        * @property originalSource
        * @type {HTMLElement}
        * @readonly
        */
        get originalSource() {
          return this.data.originalSource;
        }
        /**
        * Draggables mirror element
        * @property mirror
        * @type {HTMLElement}
        * @readonly
        */
        get mirror() {
          return this.data.mirror;
        }
        /**
        * Draggables source container element
        * @property sourceContainer
        * @type {HTMLElement}
        * @readonly
        */
        get sourceContainer() {
          return this.data.sourceContainer;
        }
        /**
        * Sensor event
        * @property sensorEvent
        * @type {SensorEvent}
        * @readonly
        */
        get sensorEvent() {
          return this.data.sensorEvent;
        }
        /**
        * Original event that triggered sensor event
        * @property originalEvent
        * @type {Event}
        * @readonly
        */
        get originalEvent() {
          if (this.sensorEvent) {
            return this.sensorEvent.originalEvent;
          }
          return null;
        }
      }
      exports.DragEvent = DragEvent;
      /**
      * Drag start event
      * @class DragStartEvent
      * @module DragStartEvent
      * @extends DragEvent
      */
      DragEvent.type = 'drag';
      class DragStartEvent extends DragEvent {}
      exports.DragStartEvent = DragStartEvent;
      /**
      * Drag move event
      * @class DragMoveEvent
      * @module DragMoveEvent
      * @extends DragEvent
      */
      DragStartEvent.type = 'drag:start';
      DragStartEvent.cancelable = true;
      class DragMoveEvent extends DragEvent {}
      exports.DragMoveEvent = DragMoveEvent;
      /**
      * Drag over event
      * @class DragOverEvent
      * @module DragOverEvent
      * @extends DragEvent
      */
      DragMoveEvent.type = 'drag:move';
      class DragOverEvent extends DragEvent {
        /**
        * Draggable container you are over
        * @property overContainer
        * @type {HTMLElement}
        * @readonly
        */
        get overContainer() {
          return this.data.overContainer;
        }
        /**
        * Draggable element you are over
        * @property over
        * @type {HTMLElement}
        * @readonly
        */
        get over() {
          return this.data.over;
        }
      }
      exports.DragOverEvent = DragOverEvent;
      /**
      * Drag out event
      * @class DragOutEvent
      * @module DragOutEvent
      * @extends DragEvent
      */
      DragOverEvent.type = 'drag:over';
      DragOverEvent.cancelable = true;
      class DragOutEvent extends DragEvent {
        /**
        * Draggable container you are over
        * @property overContainer
        * @type {HTMLElement}
        * @readonly
        */
        get overContainer() {
          return this.data.overContainer;
        }
        /**
        * Draggable element you left
        * @property over
        * @type {HTMLElement}
        * @readonly
        */
        get over() {
          return this.data.over;
        }
      }
      exports.DragOutEvent = DragOutEvent;
      /**
      * Drag over container event
      * @class DragOverContainerEvent
      * @module DragOverContainerEvent
      * @extends DragEvent
      */
      DragOutEvent.type = 'drag:out';
      class DragOverContainerEvent extends DragEvent {
        /**
        * Draggable container you are over
        * @property overContainer
        * @type {HTMLElement}
        * @readonly
        */
        get overContainer() {
          return this.data.overContainer;
        }
      }
      exports.DragOverContainerEvent = DragOverContainerEvent;
      /**
      * Drag out container event
      * @class DragOutContainerEvent
      * @module DragOutContainerEvent
      * @extends DragEvent
      */
      DragOverContainerEvent.type = 'drag:over:container';
      class DragOutContainerEvent extends DragEvent {
        /**
        * Draggable container you left
        * @property overContainer
        * @type {HTMLElement}
        * @readonly
        */
        get overContainer() {
          return this.data.overContainer;
        }
      }
      exports.DragOutContainerEvent = DragOutContainerEvent;
      /**
      * Drag pressure event
      * @class DragPressureEvent
      * @module DragPressureEvent
      * @extends DragEvent
      */
      DragOutContainerEvent.type = 'drag:out:container';
      class DragPressureEvent extends DragEvent {
        /**
        * Pressure applied on draggable element
        * @property pressure
        * @type {Number}
        * @readonly
        */
        get pressure() {
          return this.data.pressure;
        }
      }
      exports.DragPressureEvent = DragPressureEvent;
      /**
      * Drag stop event
      * @class DragStopEvent
      * @module DragStopEvent
      * @extends DragEvent
      */
      DragPressureEvent.type = 'drag:pressure';
      class DragStopEvent extends DragEvent {}
      exports.DragStopEvent = DragStopEvent;
      /**
      * Drag stopped event
      * @class DragStoppedEvent
      * @module DragStoppedEvent
      * @extends DragEvent
      */
      DragStopEvent.type = 'drag:stop';
      class DragStoppedEvent extends DragEvent {}
      exports.DragStoppedEvent = DragStoppedEvent;
      DragStoppedEvent.type = 'drag:stopped';
    }, /*72*/
    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Plugins = exports.Sensors = exports.Sortable = exports.Swappable = exports.Droppable = exports.Draggable = exports.BasePlugin = exports.BaseEvent = undefined;
      var _Draggable = __webpack_require__(5);
      Object.defineProperty(exports, 'Draggable', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_Draggable).default;
        }
      });
      var _Droppable = __webpack_require__(36);
      Object.defineProperty(exports, 'Droppable', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_Droppable).default;
        }
      });
      var _Swappable = __webpack_require__(33);
      Object.defineProperty(exports, 'Swappable', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_Swappable).default;
        }
      });
      var _Sortable = __webpack_require__(30);
      Object.defineProperty(exports, 'Sortable', {
        enumerable: true,
        get: function () {
          return _interopRequireDefault(_Sortable).default;
        }
      });
      var _AbstractEvent = __webpack_require__(1);
      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
      var _AbstractPlugin = __webpack_require__(0);
      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
      var _Sensors = __webpack_require__(6);
      var Sensors = _interopRequireWildcard(_Sensors);
      var _Plugins = __webpack_require__(27);
      var Plugins = _interopRequireWildcard(_Plugins);
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports.BaseEvent = _AbstractEvent2.default;
      exports.BasePlugin = _AbstractPlugin2.default;
      exports.Sensors = Sensors;
      exports.Plugins = Plugins;
    }])
  );
});

},{}],"46RNM":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "edit-regular.6fe9ceae.svg"
},{"./bundle-url":"3seVR"}],"3seVR":[function(require,module,exports) {
"use strict";

/* globals document:readonly */
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.


function getOrigin(url) {
  let matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);

  if (!matches) {
    throw new Error('Origin not found');
  }

  return matches[0];
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;
},{}],"3Prps":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "pen-solid.858afead.svg"
},{"./bundle-url":"3seVR"}],"391mc":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "plus-solid.e31a1dc1.svg"
},{"./bundle-url":"3seVR"}],"1WHsQ":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "trash-alt-solid.42e8710c.svg"
},{"./bundle-url":"3seVR"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"2D1v6":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "ellipsis-h-solid.560fbee8.svg"
},{"./bundle-url":"3seVR"}],"14V3c":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "clock-regular.822ea62c.svg"
},{"./bundle-url":"3seVR"}],"5CAO8":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "times-solid.54ad2219.svg"
},{"./bundle-url":"3seVR"}],"1QBx3":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "check-solid.439cf256.svg"
},{"./bundle-url":"3seVR"}],"1FRdW":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "check-circle-solid.57ca74dc.svg"
},{"./bundle-url":"3seVR"}],"426f6":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "times-circle-solid.6e53a6d2.svg"
},{"./bundle-url":"3seVR"}],"3UM1n":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "kanban", function () {
  return kanban;
});
_parcelHelpers.export(exports, "priorities", function () {
  return priorities;
});
_parcelHelpers.export(exports, "review", function () {
  return review;
});
_parcelHelpers.export(exports, "progressReview", function () {
  return progressReview;
});
var _urlSvgEllipsisHSolidSvg = require("url:./svg/ellipsis-h-solid.svg");
var _urlSvgEllipsisHSolidSvgDefault = _parcelHelpers.interopDefault(_urlSvgEllipsisHSolidSvg);
var _urlSvgPlusSolidSvg = require("url:./svg/plus-solid.svg");
var _urlSvgPlusSolidSvgDefault = _parcelHelpers.interopDefault(_urlSvgPlusSolidSvg);
var _urlSvgPenSolidSvg = require("url:./svg/pen-solid.svg");
var _urlSvgPenSolidSvgDefault = _parcelHelpers.interopDefault(_urlSvgPenSolidSvg);
var _urlSvgTrashAltSolidSvg = require("url:./svg/trash-alt-solid.svg");
var _urlSvgTrashAltSolidSvgDefault = _parcelHelpers.interopDefault(_urlSvgTrashAltSolidSvg);
const kanban = `<div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>To Do</h2><img class= 'edit-icon'src="${_urlSvgEllipsisHSolidSvgDefault.default}"/>
                  </div>

                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${_urlSvgPenSolidSvgDefault.default}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${_urlSvgTrashAltSolidSvgDefault.default}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${_urlSvgPlusSolidSvgDefault.default}"/> </span>  Add task</p>
                </div>

                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>In progress</h2><img class= 'edit-icon'src="${_urlSvgEllipsisHSolidSvgDefault.default}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${_urlSvgPenSolidSvgDefault.default}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${_urlSvgTrashAltSolidSvgDefault.default}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${_urlSvgPlusSolidSvgDefault.default}"/> </span>  Add task</p>
                </div>

                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>Done</h2><img class= 'edit-icon'src="${_urlSvgEllipsisHSolidSvgDefault.default}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${_urlSvgPenSolidSvgDefault.default}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${_urlSvgTrashAltSolidSvgDefault.default}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${_urlSvgPlusSolidSvgDefault.default}"/> </span>  Add task</p>
                </div>
                `;
const priorities = `
<div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>To Do</h2><img class= 'edit-icon'src="${_urlSvgEllipsisHSolidSvgDefault.default}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${_urlSvgPenSolidSvgDefault.default}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${_urlSvgTrashAltSolidSvgDefault.default}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${_urlSvgPlusSolidSvgDefault.default}"/> </span>  Add task</p>
                </div>
                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>High priority</h2><img class= 'edit-icon'src="${_urlSvgEllipsisHSolidSvgDefault.default}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${_urlSvgPenSolidSvgDefault.default}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${_urlSvgTrashAltSolidSvgDefault.default}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${_urlSvgPlusSolidSvgDefault.default}"/> </span>  Add task</p>
                </div>

                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>Low priority</h2><img class= 'edit-icon'src="${_urlSvgEllipsisHSolidSvgDefault.default}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${_urlSvgPenSolidSvgDefault.default}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${_urlSvgTrashAltSolidSvgDefault.default}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${_urlSvgPlusSolidSvgDefault.default}"/> </span>  Add task</p>
                </div>

                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>Done</h2><img class= 'edit-icon'src="${_urlSvgEllipsisHSolidSvgDefault.default}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${_urlSvgPenSolidSvgDefault.default}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${_urlSvgTrashAltSolidSvgDefault.default}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${_urlSvgPlusSolidSvgDefault.default}"/> </span>  Add task</p>
                </div>

`;
const review = `
<div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>To Do</h2><img class= 'edit-icon'src="${_urlSvgEllipsisHSolidSvgDefault.default}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${_urlSvgPenSolidSvgDefault.default}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${_urlSvgTrashAltSolidSvgDefault.default}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${_urlSvgPlusSolidSvgDefault.default}"/> </span>  Add task</p>
                </div>

                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>In review</h2><img class= 'edit-icon'src="${_urlSvgEllipsisHSolidSvgDefault.default}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${_urlSvgPenSolidSvgDefault.default}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${_urlSvgTrashAltSolidSvgDefault.default}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${_urlSvgPlusSolidSvgDefault.default}"/> </span>  Add task</p>
                </div>

                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>Done</h2><img class= 'edit-icon'src="${_urlSvgEllipsisHSolidSvgDefault.default}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${_urlSvgPenSolidSvgDefault.default}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${_urlSvgTrashAltSolidSvgDefault.default}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${_urlSvgPlusSolidSvgDefault.default}"/> </span>  Add task</p>
                </div>`;
const progressReview = `
<div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>To Do</h2><img class= 'edit-icon'src="${_urlSvgEllipsisHSolidSvgDefault.default}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${_urlSvgPenSolidSvgDefault.default}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${_urlSvgTrashAltSolidSvgDefault.default}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${_urlSvgPlusSolidSvgDefault.default}"/> </span>  Add task</p>
                </div>

                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>In progress</h2><img class= 'edit-icon'src="${_urlSvgEllipsisHSolidSvgDefault.default}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${_urlSvgPenSolidSvgDefault.default}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${_urlSvgTrashAltSolidSvgDefault.default}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${_urlSvgPlusSolidSvgDefault.default}"/> </span>  Add task</p>
                </div>

                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>In review</h2><img class= 'edit-icon'src="${_urlSvgEllipsisHSolidSvgDefault.default}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${_urlSvgPenSolidSvgDefault.default}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${_urlSvgTrashAltSolidSvgDefault.default}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${_urlSvgPlusSolidSvgDefault.default}"/> </span>  Add task</p>
                </div>
                <div class="full-list">
                  <ul class="list">
                  <div class='list-header'>
                  <h2 class='list-title'>Done</h2><img class= 'edit-icon'src="${_urlSvgEllipsisHSolidSvgDefault.default}"/>
                  </div>
                  <div class = 'li-container'></div>

                  </ul>
                   <div class='list-tab'>
                    <div class='list-edit-icon tab-icon'>
                      <img class= 'list-edit-tab-img tab-img' src="${_urlSvgPenSolidSvgDefault.default}"/>
                      <p class='list-edit-tab-text'> Edit list</p>
                    </div>

                    <div class='list-remove-icon tab-icon'>
                      <img class= 'list-remove-tab-img tab-img' src="${_urlSvgTrashAltSolidSvgDefault.default}"/> <p class='list-remove-tab-text'> Remove list </p>
                      </div>
                 </div>

                  <p  class="add-task"><span class='task-plus'><img class = 'add-task-img' src="${_urlSvgPlusSolidSvgDefault.default}"/> </span>  Add task</p>
                </div>`;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","url:./svg/ellipsis-h-solid.svg":"2D1v6","url:./svg/plus-solid.svg":"391mc","url:./svg/pen-solid.svg":"3Prps","url:./svg/trash-alt-solid.svg":"1WHsQ"}]},["6mXFT","4QWci"], "4QWci", "parcelRequire1b86")

//# sourceMappingURL=home.fc70f76c.js.map
