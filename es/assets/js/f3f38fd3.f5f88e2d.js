exports.id = 49085;
exports.ids = [49085];
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

/***/ 88903:
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
var properties_WebArea_exports = {};
__export(properties_WebArea_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(properties_WebArea_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "propertiesWebArea",
  title: "Web Area"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormObjects/propertiesWebArea",
  "id": "version-18/FormObjects/propertiesWebArea",
  "title": "Web Area",
  "description": "---",
  "source": "@site/versioned_docs/version-18/FormObjects/properties_WebArea.md",
  "sourceDirName": "FormObjects",
  "slug": "/FormObjects/propertiesWebArea",
  "permalink": "/docs/es/18/FormObjects/propertiesWebArea",
  "draft": false,
  "tags": [],
  "version": "18",
  "frontMatter": {
    "id": "propertiesWebArea",
    "title": "Web Area"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Text and Picture",
    "permalink": "/docs/es/18/FormObjects/propertiesTextAndPicture"
  },
  "next": {
    "title": "Overview",
    "permalink": "/docs/es/18/Menus/overview"
  }
};
const assets = {};
const toc = [{
  value: "Access 4D methods",
  id: "access-4d-methods",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported",
  level: 4
}, {
  value: "Progression",
  id: "progression",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-1",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-1",
  level: 4
}, {
  value: "URL",
  id: "url",
  level: 2
}, {
  value: "URL Variable and WA OPEN URL command",
  id: "url-variable-and-wa-open-url-command",
  level: 3
}, {
  value: "JSON Grammar",
  id: "json-grammar-2",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-2",
  level: 4
}, {
  value: "Use embedded Web rendering engine",
  id: "use-embedded-web-rendering-engine",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-3",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-3",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "access-4d-methods"
    }
  }, `Access 4D methods`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can call 4D methods from the JavaScript code executed in a Web area and get values in return. To be able to call 4D methods from a Web area, you must activate the 4D methods accessibility property ("all").`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This property is only available if the Web area `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#use-embedded-web-rendering-engine"
    }
  }, `uses the embedded Web rendering engine`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this property is on, a special JavaScript object named `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$4d`), ` is instantiated in the Web area, which you can `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/18/FormObjects/webAreaOverview#4d-object"
    }
  }, `use to manage calls to 4D project methods`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar"
    }
  }, `JSON Grammar`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Possible Values`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `methodsAccessibility`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"none" (default), "all"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/18/FormObjects/webAreaOverview"
    }
  }, `Web Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "progression"
    }
  }, `Progression`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Name of a Longint type variable. This variable will receive a value between 0 and 100, representing the page load completion percentage in the Web area. Automatically updated by 4D, cannot be modified manually.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-1"
    }
  }, `JSON Grammar`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Possible Values`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `progressSource`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name of a Longint variable`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-1"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/18/FormObjects/webAreaOverview"
    }
  }, `Web Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "url"
    }
  }, `URL`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A String type variable that designates the URL loaded or being loading by the associated Web area. The association between the variable and the Web area works in both directions:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the user assigns a new URL to the variable, this URL is automatically loaded by the Web area.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Any browsing done within the Web area will automatically update the contents of the variable.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Schematically, this variable functions like the address area of a Web browser. You can represent it via a text area above the Web area.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "url-variable-and-wa-open-url-command"
    }
  }, `URL Variable and WA OPEN URL command`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The URL variable produces the same effects as the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html"
    }
  }, `WA OPEN URL`), ` command. The following differences should nevertheless be noted:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `For access to documents, this variable only accepts URLs that are RFC-compliant ("file://c:/My%20Doc") and not system pathnames ("c:\\MyDoc"). The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html"
    }
  }, `WA OPEN URL`), ` command accepts both notations.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the URL variable contains an empty string, the Web area does not attempt to load the URL. The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html"
    }
  }, `WA OPEN URL`), ` command generates an error in this case.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the URL variable does not contain a protocol (http, mailto, file, etc.), the Web area adds "http://", which is not the case for the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html"
    }
  }, `WA OPEN URL`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When the Web area is not displayed in the form (when it is located on another page of the form), executing the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html"
    }
  }, `WA OPEN URL`), ` command has no effect, whereas assigning a value to the URL variable can be used to update the current URL.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-2"
    }
  }, `JSON Grammar`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Possible Values`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `urlSource`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `A URL.`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-2"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/18/FormObjects/webAreaOverview"
    }
  }, `Web Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "use-embedded-web-rendering-engine"
    }
  }, `Use embedded Web rendering engine`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option allows choosing between two rendering engines for the Web area, depending on the specifics of your application:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `unchecked`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `JSON value: system`), ` (default): In this case, 4D uses the "best" engine corresponding to the system. On Windows, 4D automatically uses the most recent version of the browser found on the machine (IE11, MS Edge, etc.). On macOS, 4D uses the current version of WebKit (Safari).
This means that you automatically benefit from the latest advances in Web rendering, through HTML5 or JavaScript. However, you may notice some rendering differences between Internet Explorer/Edge implementations and Web Kit ones.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `checked`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `JSON value: embedded`), `: In this case, 4D uses Blink engine from Google. Using the embedded Web engine means that Web area rendering and their functioning in your application are identical regardless of the platform used to run 4D (slight variations of pixels or differences related to network implementation may nevertheless be observed). When this option is chosen, you no longer benefit from automatic updates of the Web engine performed by the operating system; however, new versions of the engines are provided through 4D.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that the Blink engine has the following limitations:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `*   [WA SET PAGE CONTENT](https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PAGE-CONTENT.301-5232965.en.html): using this command requires that at least one page is already loaded in the area (through a call to [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18.4/WA-OPEN-URL.301-5232954.en.html) or an assignment to the URL variable associated to the area).
*   Execution of JavaScript is always enabled; execution of Java applets and plug-ins is always disabled. These settings cannot be modified in Blink. The following selectors of the [WA SET PREFERENCE](https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PREFERENCE.301-5232962.en.html) and [WA GET PREFERENCE](https://doc.4d.com/4Dv18/4D/18.4/WA-GET-PREFERENCE.301-5232945.en.html) commands are ignored:
    *   \`WA enable Java applets\`
    *   \`WA enable JavaScript\`
    *   \`WA enable plugins\`
*   When URL drops are enabled by the \`WA enable URL drop\` selector of the [WA SET PREFERENCE](https://doc.4d.com/4Dv18/4D/18.4/WA-SET-PREFERENCE.301-5232962.en.html) command, the first drop must be preceded by at least one call to [WA OPEN URL](https://doc.4d.com/4Dv18/4D/18.4/WA-OPEN-URL.301-5232954.en.html) or one assignment to the URL variable associated to the area.
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-3"
    }
  }, `JSON Grammar`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Possible Values`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `webEngine`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"embedded", "system"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-3"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/18/FormObjects/webAreaOverview"
    }
  }, `Web Area`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;