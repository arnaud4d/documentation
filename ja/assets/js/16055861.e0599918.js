exports.id = 28092;
exports.ids = [28092];
exports.modules = {

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDXContext": () => (/* binding */ MDXContext),
/* harmony export */   "MDXProvider": () => (/* binding */ MDXProvider),
/* harmony export */   "mdx": () => (/* binding */ createElement),
/* harmony export */   "useMDXComponents": () => (/* binding */ useMDXComponents),
/* harmony export */   "withMDXComponents": () => (/* binding */ withMDXComponents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 17086:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var webServerAdmin_exports = {};
__export(webServerAdmin_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(webServerAdmin_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "webServerAdmin",
  title: "Administration"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "WebServer/webServerAdmin",
  "id": "version-19/WebServer/webServerAdmin",
  "title": "Administration",
  "description": "4D provides several integrated tools to start, stop, or monitor the integrated web server.",
  "source": "@site/versioned_docs/version-19/WebServer/webServerAdmin.md",
  "sourceDirName": "WebServer",
  "slug": "/WebServer/webServerAdmin",
  "permalink": "/docs/ja/19/WebServer/webServerAdmin",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "webServerAdmin",
    "title": "Administration"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Configuration",
    "permalink": "/docs/ja/19/WebServer/webServerConfig"
  },
  "next": {
    "title": "Web Server object",
    "permalink": "/docs/ja/19/WebServer/webServerObject"
  }
};
const assets = {};
const toc = [{
  value: "Starting the 4D Web Server",
  id: "starting-the-4d-web-server",
  level: 2
}, {
  value: "Stopping the 4D Web Server",
  id: "stopping-the-4d-web-server",
  level: 2
}, {
  value: "Testing the 4D Web Server",
  id: "testing-the-4d-web-server",
  level: 2
}, {
  value: "Clearing the Cache",
  id: "clearing-the-cache",
  level: 2
}, {
  value: "Runtime Explorer",
  id: "runtime-explorer",
  level: 2
}, {
  value: "Administration URLs",
  id: "administration-urls",
  level: 2
}, {
  value: "/4DSTATS",
  id: "4dstats",
  level: 3
}, {
  value: "/4DHTMLSTATS",
  id: "4dhtmlstats",
  level: 3
}, {
  value: "/4DCACHECLEAR",
  id: "4dcacheclear",
  level: 3
}, {
  value: "/4DWEBTEST",
  id: "4dwebtest",
  level: 3
}, {
  value: "Logs",
  id: "logs",
  level: 2
}, {
  value: "HTTPDebugLog.txt",
  id: "httpdebuglogtxt",
  level: 3
}, {
  value: "logweb.txt",
  id: "logwebtxt",
  level: 3
}, {
  value: "CLF/DLF",
  id: "clfdlf",
  level: 4
}, {
  value: "ELF/WLF",
  id: "elfwlf",
  level: 4
}, {
  value: "Configuring the fields",
  id: "configuring-the-fields",
  level: 5
}, {
  value: "Backup Frequency",
  id: "backup-frequency",
  level: 4
}, {
  value: "Backup Parameters",
  id: "backup-parameters",
  level: 4
}];
const layoutProps = {
  toc
};
const MDXLayout = "wrapper";
function MDXContent({
  components,
  ...props
}) {
  return /* @__PURE__ */ (0, import_react2.mdx)(MDXLayout, {
    ...layoutProps,
    ...props,
    components,
    mdxType: "MDXLayout"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D provides several integrated tools to start, stop, or monitor the integrated web server.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "starting-the-4d-web-server"
    }
  }, `Starting the 4D Web Server`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `To be able to launch the web server of 4D or 4D Server, you must have a "4D Web Application" license. For more information, please refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://www.4d.com"
    }
  }, `4D Web site`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A 4D project can start and monitor a web server for the main (host) application as well as for each hosted component.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The main 4D web server can be started in different ways:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Using a button/menu command.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `4D: `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Run`, `>`, `Start Web Server`), ` menu`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(53329)/* ["default"] */ .Z),
    width: "348",
    height: "278"
  })), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `4D Server: `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Start HTTP server`), ` button of the HTTP Server page`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(60765)/* ["default"] */ .Z),
    width: "1030",
    height: "699"
  })))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Automatically starting it each time the 4D application is opened. To do this, display the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Web\\/Configuration`), ` page of the Settings and select the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Launch Web Server at Startup`), ` check box:`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(11405)/* ["default"] */ .Z),
    width: "898",
    height: "746"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Programmatically, by calling the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/API/WebServerClass#start"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `webServer.start()`)), ` function or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB START SERVER`), ` command.`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The web server of any component can be launched by calling the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/API/WebServerClass#start"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `webServer.start()`)), ` function on the component's web server object.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You do not need to relaunch the 4D application to start or stop the web server.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "stopping-the-4d-web-server"
    }
  }, `Stopping the 4D Web Server`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The main 4D web server can be stopped in different ways:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Using the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Run`, `>`, `Stop Web Server`), ` menu of 4D or the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Stop HTTP server`), ` button of the HTTP Server page of 4D Server (both items show `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Start...`), ` when the server is not already started).`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Programmatically, by calling the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/API/WebServerClass#stop"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `webServer.stop()`)), ` function or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB STOP SERVER`), ` command.`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The web server of any component can be stopped by calling the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `webServer.stop()`), ` function on the component's web server object.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "testing-the-4d-web-server"
    }
  }, `Testing the 4D Web Server`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Test Web Server`), ` command can be used to make sure the built-in web server is functioning correctly (4D only). This command is accessible in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Run`), ` menu when the web server is launched:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(2707)/* ["default"] */ .Z),
    width: "355",
    height: "284"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you select this command, the home page of the website published by the 4D application is displayed in a window of your default web browser:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(94537)/* ["default"] */ .Z),
    width: "715",
    height: "377"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This command lets you verify that the web server, home page display, etc. work correctly. The page is called using the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `localhost`), ` URL, which is the standard shortcut designating the IP address of the machine on which the web browser is executed. The command takes into account the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#http-port"
    }
  }, `TCP publication port`), ` number specified in the settings.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "clearing-the-cache"
    }
  }, `Clearing the Cache`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To do so, you just have to click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Clear Cache`), ` button in the Web/Options (I) page of the Settings dialog box. The cache is then immediately cleared.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can also use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#cacheclear"
    }
  }, `/4DCACHECLEAR`), ` URL.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "runtime-explorer"
    }
  }, `Runtime Explorer`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Watch`), ` page (`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Web`), ` heading) in the Runtime Explorer displays web server information, particularly:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Web Cache Usage`), `: indicates the number of pages present in the web cache as well as its use percentage. This information is only available if the web server is active and if the cache size is greater than 0.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Web Server Elapsed Time`), `: indicates the duration of use (in hours:minutes:seconds format) of the Web server. This information is only available if the web server is active.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Web Hits Count`), `: indicates the total number of HTTP requests received since the web server boot, as well as an instantaneous number of requests per second (measure taken between two Runtime Explorer updates). This information is only available if the web server is active.`))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "administration-urls"
    }
  }, `Administration URLs`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Website administration URLS allow you to control the website published on your server. 4D Web Server accepts four particular URLs: `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `/4DSTATS`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `/4DHTMLSTATS`), `, /`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `4DCACHECLEAR`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `/4DWEBTEST`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `/4DSTATS`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `/4DHTMLSTATS`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `/4DCACHECLEAR`), ` are only available to the Designer and Administrator of the database. If the 4D password system has not been activated, these URLs are available to all the users. /4DWEBTEST is always available.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "4dstats"
    }
  }, `/4DSTATS`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `/4DSTATS`), ` URL returns several items of information in an HTML table (displayable in a browser):`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Item`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Description`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Cache Current Size`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Current size of web server cache (in bytes)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Cache Max Size`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Maximum size of cache (in bytes)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Cached Object Max Size`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Maximum size of each object in the cache (in bytes)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Cache Use`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Percentage of cache used`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Cached Objects`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Number of objects found in the cache, `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `including pictures`))))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This information can allow you to check the functioning of your server and eventually adapt the corresponding parameters.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB GET STATISTICS`), ` command allows you to also obtain information about how the cache is being used for static pages.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "4dhtmlstats"
    }
  }, `/4DHTMLSTATS`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `/4DHTMLSTATS`), ` URL returns, also as an HTML table, the same information as the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `/4DSTATS`), ` URL. The difference is that the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Cached Objects`), ` field only counts HTML pages (without counting picture files). Moreover, this URL returns the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Filtered Objects`), ` field.`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Item`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Description`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Cache Current Size`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Current size of web server cache (in bytes)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Cache Max Size`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Maximum size of cache (in bytes)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Cached Object Max Size`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Maximum size of each object in the cache (in bytes)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Cache Use`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Percentage of cache used`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Cached Objects`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Number of objects found in the cache, `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `without pictures`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Filtered Objects`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Number of objects in cache not counted by URL, in particular, pictures`)))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "4dcacheclear"
    }
  }, `/4DCACHECLEAR`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `/4DCACHECLEAR`), ` URL immediately clears the cache of the static pages and images. It allows you to therefore \u201Cforce\u201D the update of the pages that have been modified.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "4dwebtest"
    }
  }, `/4DWEBTEST`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `/4DWEBTEST`), ` URL is designed to check the web server status. When this URL is called, 4D returns a text file with the following HTTP fields filled:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `HTTP Field`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Example`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Date`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `current date at the RFC 822 format`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Mon, 7 Dec 2020 13:12:50 GMT`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Server`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `4D/version number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `4D/18.5.0 (Build 18R5.257368)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `User-Agent`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `name and version @ IP client address`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36 @ 127.0.0.1`)))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "logs"
    }
  }, `Logs`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D allows you to generate two logs of web requests:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a debug log, useful in the web server development phase (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `HTTPDebugLog.txt`), `),`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a standardized web request log, rather used for statistic purposes (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `logweb.txt`), `).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Both log files are automatically created in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Logs`), ` folder of the application project.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "httpdebuglogtxt"
    }
  }, `HTTPDebugLog.txt`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/WebServer/webServerConfig#debug-log"
    }
  }, `http debug file`), ` can be enabled using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/WebServer/webServerObject"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `web server`), ` object`), ` or the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB SET OPTION`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This log file records each HTTP request and each response in raw mode. Whole requests, including headers, are logged; optionally, body parts can be logged as well.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following fields are logged for both Request and Response:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Field name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Description`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `SocketID`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `ID of socket used for communication`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `PeerIP`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `IPv4 address of host (client)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `PeerPort`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Port used by host (client)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `TimeStamp`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Timestamp in milliseconds (since system startup)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `ConnectionID`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Connection UUID (UUID of VTCPSocket used for communication)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `SequenceNumber`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Unique and sequential operation number in the logging session`)))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "logwebtxt"
    }
  }, `logweb.txt`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/WebServer/webServerConfig#log-recording"
    }
  }, `web log recording file`), ` can be enabled using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/WebServer/webServerObject"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `web server`), ` object`), `, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `WEB SET OPTION`), ` command, or the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Web/Log (type)`), ` page of the settings. You need to select the log format.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "clfdlf"
    }
  }, `CLF/DLF`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each line of the file represents a request, such as:
`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `host rfc931 user `, `[`, `DD/MMM/YYYY:HH:MM:SS] "request" state length`), `
Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `DLF (Combined Log Format) format is similar to CLF (Common Log Format) format and uses exactly the same structure. It simply adds two additional HTTP fields at the end of each request: Referer and User-agent. Here is the description of CLF/DLF formats (not customizable):`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Field name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Description`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `host`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `IP address of the client (ex. 192.100.100.10)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `rfc931`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `information not generated by 4D, it\u2019s always - (a minus sign`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `user`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `user name as it is authenticated, or else it is - (a minus sign). If the user name contains spaces, they will be replaced by _ (an underscore).`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `DD/MMM/YYYY:HH:MM:SS`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `DD: day, MMM: a 3-letter abbreviation for the month name (Jan, Feb,...), YYYY: year, HH: hour, MM: minutes, SS: seconds. The date and time are local to the server.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `request`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `request sent by the client (ex. GET /index.htm HTTP/1.0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `state`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `reply given by the server`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `length`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `size of the data returned (except the HTTP header) or 0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Referer`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `DLF only- Contains the URL of the page pointing to the requested document.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `User-agent`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `DLF only- Contains the name and version of the browser or software of the client at the origin of the request`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "elfwlf"
    }
  }, `ELF/WLF`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The ELF (Extended Log Format) format is very widespread in the world of HTTP browsers. It can be used to build sophisticated logs that meet specific needs. For this reason, the ELF format can be customized: it is possible to choose the fields to be recorded as well as their order of insertion into the file.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The WLF (WebStar Log Format) was developed specifically for the 4D WebSTAR server.`), /* @__PURE__ */ (0, import_react2.mdx)("h5", {
    ...{
      "id": "configuring-the-fields"
    }
  }, `Configuring the fields`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you choose the ELF or WLF format, the \u201CWeb Log Token Selection\u201D area displays the fields available for the chosen format. You will need to select each field to be included in the log. To do so, check the desired fields.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You cannot select the same field twice.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following table lists the fields available for each format (in alphabetical order) and describes its contents:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Field`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `ELF`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `WLF`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Value`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `BYTES_RECEIVED`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Number of bytes received by the server`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `BYTES_SENT`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Number of bytes sent by the server to the client`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `C_DNS`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `IP address of the DNS (ELF: field identical to the C_IP field)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `C_IP`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `IP address of the client (for example 192.100.100.10)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CONNECTION_ID`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Connection ID number`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CS(COOKIE)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Information about cookies contained in the HTTP request`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CS(HOST)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Host field of the HTTP request`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CS(REFERER)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `URL of the page pointing to the requested document`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CS(USER_AGENT)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Information about the software and operating system of the client`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CS_SIP`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `IP address of the server`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CS_URI`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `URI on which the request is made`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CS_URI_QUERY`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Request query parameters`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CS_URI_STEM`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Part of request without query parameters`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `DATE`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `DD: day, MMM: 3-letter abbreviation for month (Jan, Feb, etc.), YYYY: year`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `METHOD`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `HTTP method used for the request sent to the server`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `PATH_ARGS`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `CGI parameters: string located after the \u201C$\u201D character`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `STATUS`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Reply provided by the server`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `TIME`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `HH: hour, MM: minutes, SS: seconds`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `TRANSFER_TIME`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Time requested by server to generate the reply`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `USER`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `User name if authenticated; otherwise - (minus sign). If the user name contains spaces, they are replaced by _ (underlines)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `URL`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `URL requested by the client`)))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Dates and times are given in GMT.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "backup-frequency"
    }
  }, `Backup Frequency`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Since a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `logweb.txt`), ` file can become considerably large, it is possible to set up an automatic archiving mechanism. The triggering of a backup can be based on a certain period of time (expressed in hours, days, week or months), or based on the file size; when the set deadline (or file size) is reached, 4D automatically closes and archives the current log file and creates a new one.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the web log file backup is triggered, the log file is archived in a folder named "Logweb Archives," which is created at the same level as the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `logweb.txt`), ` file.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The archived file is renamed based on the following example: \u201CDYYYY_MM_DD_Thh_mm_ss.txt.\u201D For instance, for a file archived on September 4, 2020 at 3:50 p.m. and 7 seconds: \u201CD2020_09_04_T15_50_07.txt.\u201D`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "backup-parameters"
    }
  }, `Backup Parameters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The automatic backup parameters for the logweb.txt are set on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Web/Log (backup)`), ` page of the Settings:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(1785)/* ["default"] */ .Z),
    width: "892",
    height: "744"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. You must then specify the precise moment of the backup if necessary.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `No Backup`), `: The scheduled backup function is deactivated.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Every X hour(s)`), `: This option is used to program backups on an hourly basis. You can enter a value between 1 and 24 .`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `starting at`), `: Used to set the time at which the first back up will begin.`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Every X day(s) at X`), `: This option is used to program backups on a daily basis. Enter 1 if you want to perform a daily backup. When this option is checked, you must indicate the time when the backup must be started.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Every X week(s), day at X`), `: This option is used to program backups on a weekly basis. Enter 1 if you want to perform a weekly backup. When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started. You can select several days of the week if desired. For example, you can use this option to set two weekly backups: one on Wednesdays and one on Fridays.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Every X month(s), Xth day at X`), `: This option is used to program backups on a monthly basis. Enter 1 if you want to perform a monthly backup. When this option is checked, you must indicate the day of the month and the time when the backup must be started.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Every X MB`), `: This option is used to program backups based on the size of the current request log file. A backup is automatically triggered when the file reaches the set size. You can set a size limit of 1, 10, 100 or 1000 MB.`))));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 1785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/backup-3e2ce28198f88353388eb9da4d066201.png");

/***/ }),

/***/ 11405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/config-19ca17de0819a74ac217b0eedbf78a54.png");

/***/ }),

/***/ 94537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/defaultHomePage-eb66eb028958666ee85f607fce668470.png");

/***/ }),

/***/ 53329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 60765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/start2-f6faa3a009acbe7a976f11cf44837653.png");

/***/ }),

/***/ 2707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;