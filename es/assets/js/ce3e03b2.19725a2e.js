exports.id = 12410;
exports.ids = [12410];
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

/***/ 58225:
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
var user_settings_exports = {};
__export(user_settings_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(user_settings_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "user-settings",
  title: "User Settings"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Desktop/user-settings",
  "id": "Desktop/user-settings",
  "title": "User Settings",
  "description": "4D provides two modes of operation for project Settings:",
  "source": "@site/docs/Desktop/user-settings.md",
  "sourceDirName": "Desktop",
  "slug": "/Desktop/user-settings",
  "permalink": "/docs/es/next/Desktop/user-settings",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "user-settings",
    "title": "User Settings"
  },
  "sidebar": "docs",
  "previous": {
    "title": "SDI mode on Windows",
    "permalink": "/docs/es/next/Menus/sdi"
  },
  "next": {
    "title": "Build Application",
    "permalink": "/docs/es/next/Desktop/building"
  }
};
const assets = {};
const toc = [{
  value: "Enabling User settings",
  id: "enabling-user-settings",
  level: 2
}, {
  value: "User Settings and User Settings for Data file",
  id: "user-settings-and-user-settings-for-data-file",
  level: 2
}, {
  value: "<code>SET DATABASE PARAMETER</code> and user settings",
  id: "set-database-parameter-and-user-settings",
  level: 2
}, {
  value: "settings.4DSettings files",
  id: "settings4dsettings-files",
  level: 2
}, {
  value: "User Settings (standard)",
  id: "user-settings-standard",
  level: 3
}, {
  value: "User Settings for Data File",
  id: "user-settings-for-data-file",
  level: 3
}, {
  value: "Priority of settings",
  id: "priority-of-settings",
  level: 2
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D provides two modes of operation for project Settings:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Standard`), ` mode: all `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/next/settings/overview"
    }
  }, `settings`), ` are stored in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/next/Project/architecture#sources"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "a"
  }, `settings.4DSettings`), ` file at the project level`), ` and are applied in all cases. This is the default mode, suitable for development phase (all applications).`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `User settings`), ` mode: part of the custom settings are stored in a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `settings.4DSettings`), ` file `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/next/Project/architecture#settings-1"
    }
  }, `in the Settings folder`), ` (for all data files) or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/next/Project/architecture#settings"
    }
  }, `in the Data folder`), ` (for this data file) and are used instead of the structure settings. This mode is suitable for deployment phase for Desktop applications. You enable this mode using an option located on the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/next/settings/security"
    }
  }, `Security page`), ` of the Settings. `))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By defining user settings, you can keep custom settings between updates of your 4D applications, or manage different settings for the same 4D application deployed on several different sites. It also makes it possible to use programming to manage setting files using XML.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D can generate and use two types of user settings:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `User Settings (standard)`), `: They are used instead of structure settings for any data file opened with the application.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `User Settings for Data file`), `: They can be defined specifically for each data file used with your application, configuring for example the port ID or the server cache.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `With this option, you can easily deploy and update several copies of the same desktop application with several data files, each containing different settings. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Consider for example the following configuration, where an application is duplicated and each copy uses a different Port ID setting. If this user setting is linked to the data file, you will be able to update the application without having to manually change the Port ID:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(59970)/* ["default"] */ .Z),
    width: "350",
    height: "228"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "enabling-user-settings"
    }
  }, `Enabling User settings`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To enable user settings, you need to check the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Settings`), ` > `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Security`), ` > `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Enable User Settings`), ` option:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(7521)/* ["default"] */ .Z),
    width: "822",
    height: "173"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you check this option, the settings are separated into three dialog boxes: `), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Structure Settings`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `User Settings`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `User Settings for Data file`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can access these dialog boxes using the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Design > Settings...`), ` menu or the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Settings`), ` button in the toolbar:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(20383)/* ["default"] */ .Z),
    width: "233",
    height: "128"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also access these dialog boxes using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19R/help/command/en/page903.html"
    }
  }, `OPEN SETTINGS WINDOW`), ` command with the appropriate `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `settingsType`), ` selector.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Structure Settings dialog box is identical to the standard Settings, and provides access to all its properties (which can be overriden by user settings). `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "user-settings-and-user-settings-for-data-file"
    }
  }, `User Settings and User Settings for Data file`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `User Settings`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `User Settings for Data File`), ` dialog boxes contain a selection of relevant properties that can be defined for all data files or a single data file:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(15048)/* ["default"] */ .Z),
    width: "862",
    height: "722"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following table lists the pages of settings found in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `User Settings`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `User Settings for Data File`), ` dialog boxes and describes their main differences with respect to standard settings:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "th"
  }, `Page of Structure Settings`)), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "th"
  }, `Page of User Settings`)), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "th"
  }, `Page of User Settings for Data File`)))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/general"
    }
  }, `General page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `N/a`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `N/a`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/interface"
    }
  }, `Interface page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/compiler"
    }
  }, `Compiler page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `N/a`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `N/a`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/database#data-storage"
    }
  }, `Database/Data storage page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `N/a`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `N/a`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/database#memory"
    }
  }, `Database/Memory page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/backup#scheduler"
    }
  }, `Backup/Scheduler page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `N/a`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/backup#configuration"
    }
  }, `Backup/Configuration page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `N/a`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/backup#backup-restore"
    }
  }, `Backup/Backup & Restore page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `N/a`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/client-server#network-options"
    }
  }, `Client-server/Network options page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/client-server#ip-configuration"
    }
  }, `Client-server/IP configuration page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/web#configuration"
    }
  }, `Web/Configuration page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/web#options"
    }
  }, `Web/Options (I) page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/web#options-ii"
    }
  }, `Web/Options (II) page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/web#log"
    }
  }, `Web/Log (type) page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/web#log"
    }
  }, `Web/Log (backup) page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/web#web-services"
    }
  }, `Web/Web Services page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Method prefixing option not available`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Method prefixing option not available`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/sql"
    }
  }, `SQL page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/php"
    }
  }, `PHP page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Identical to standard settings`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/security"
    }
  }, `Security page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `N/a`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `N/a`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/es/next/settings/compatibility"
    }
  }, `Compatibility page`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `N/a`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `N/a`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you edit settings in this dialog box, they are automatically stored in the corresponding `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `settings.4DSettings`), ` file (see below).`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "set-database-parameter-and-user-settings"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h2"
  }, `SET DATABASE PARAMETER`), ` and user settings`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Some of the user settings are also available through the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19R/help/command/en/page642.html"
    }
  }, `SET DATABASE PARAMETER`), ` command. User settings are parameters with the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Kept between two sessions`), ` property set to `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Yes`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `User Settings`), ` feature is enabled, user settings edited by the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19R/help/command/en/page642.html"
    }
  }, `SET DATABASE PARAMETER`), ` command are automatically saved in the user settings for the data file.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Table sequence number`), ` is an exception; this setting value is always saved in the data file itself.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "settings4dsettings-files"
    }
  }, `settings.4DSettings files`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#enabling-user-settings"
    }
  }, `check the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Enable User Settings`), ` option`), `, user settings files are automatically created. Their location depends on the type of user settings defined.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "user-settings-standard"
    }
  }, `User Settings (standard)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The standard user settings file is automatically created and placed in a settings folder at the following location:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/next/Project/architecture#settings-1"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `ProjectFolder/Settings/settings.4DSettings`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `... where `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `ProjectFolder`), ` is the name of the folder containing the project structure file.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In merged applications, the user settings file is placed at the following location:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `In single-user versions: ProjectFolder/Database/Settings/settings.4DSettings`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `In client/server versions: ProjectFolder/Server Database/Settings/settings.4DSettings`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "user-settings-for-data-file"
    }
  }, `User Settings for Data File`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The user settings file linked to the data file is automatically created and placed in a settings folder at the following location:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/next/Project/architecture#settings"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Data/Settings/settings.4DSettings`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `... where `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Data`), ` is the name of the folder containing the current data file of the application.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `When the data file is located at the same level as the project structure file, structure-based and data-based user settings files share the same location and file. The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `User Settings for Data File...`), ` menu command is not proposed.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Settings files are XML files; they can be read and modified using integrated 4D XML commands or using an XML editor. This means that you can manage settings by programming, particularly in the context of applications compiled and merged with 4D Volume Desktop. When you modify this file by programming, the changes are only taken into account the next time the database is opened. `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "priority-of-settings"
    }
  }, `Priority of settings`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Settings can be stored at three levels. Each setting defined at one level overrides the same setting defined at a previous level, if any:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "th"
  }, `Priority level`)), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "th"
  }, `Name`)), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "th"
  }, `Location`)), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "th"
  }, `Comments`)))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `3 (lowest)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Structure settings (or Settings when "User settings" feature not enabled)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "strong"
  }, `settings.4DSettings`)), ` file in the Sources folder (project databases) or in the Settings folder as the same level as the structure file (binary databases)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Unique location when user settings are not enabled. Applied to all copies of the application.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `2`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `User settings (all data files)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "strong"
  }, `settings.4DSettings`)), ` file in the Settings folder at the same level as the Project folder`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Overrides Structure settings. Stored within the application package.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1 (highest)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `User settings (current data file)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "strong"
  }, `settings.4DSettings`)), ` file in the Settings folder at the same level as the data file`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Overrides Structure settings and User settings. Applied only when the linked data file is used with the application.`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Keep in mind that user settings files only contain a subset of relevant settings, while the structure file contains all custom settings, including core settings.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 15048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/user-settings-2-d5bae457dfa8f5aba0868be2f2f312a4.png");

/***/ }),

/***/ 59970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/user-settings-config-2056e51f0b96b9a9a0012d72010e05bb.png");

/***/ }),

/***/ 20383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAACACAIAAABhrtkmAAAMD0lEQVR42u2dUUwTeR7HZ0rxBEVRwiXGXVYqt+bQxMhR1pgQH1aU6D6cD2T1RUlMPPpwGyKSyOmLybGYcLsaL1nAJ+SF2/PBu0Q3KquJMfE8yja5RDGIFg7P8wyyVEBaEeH+/5lpO53OTDudTmem/X6i5T8z//9/fv/pt7/5zfT/67CBQIBhmPHx8YmJifn5ecbmFBYWlpWVbdq0yWxDgOE4yf+xsbHXr1/X1tauXr3abHv0Mjc3NzQ0tLy8XF5ebrYtwFiodonH3b17N/FYCwsLZtujl1WrVrnd7rt370K7WQ/VbjAYJMINhUJmG5MGPnz4QMZCRmS2IcBwnJHS0tKS2cYAoIGodonHSqH9pUuXyOvx48eNqwCALIJ2ycVNan53fHycUfXZ+itohYzFkEMFLEZ6YoaEbfVXAEBC1O/qcVcJ26pUOHv2bDI9pNEYkB049XeRMl6vd3p6OrK4bt06t9tt9gEBtsFM7RLhVlVVRRZ9Pp/ZRwPYiWjMYMrunz9/Pjk5SQqlpaXp6hMxQ44gaPfVq1epfanW0tJCXmdmZtSrKVUgwt25cycpPHjwIJl+kiE7vmQBCUk9Znj06NHs7GxksaioaOvWrVo7Ie6WVy0p8A4YgCRJXbtEuPqjVYnfBSB5dF2r6Y9W4XdBygjadXBobUzUtmvXLlK4f/8+30l8ndbWVpUePuaI9JaCDfGkpRNgfXT5XeIsedXKes2HDx+Kr73WrFmzbds2cQWyRhxpkEWzjwawE7q0K/G7Eohw1QNiiZQB0ISBfpdJLiDu7OxkEoUWAMQjaJdl2by8PK2NJdFqfA9kZW1tLSncu3ePvKrsIoW9K0HGYvhhAxYgdb8riVbXrl0bX4e4W161uI0A0k7q2t2+fXvCOhK/C0Aa0TsX59y5c+T11KlTslvhd4FxCNp1Op16prAoRasJA+KEPahQVlYWv3JiYoKMxcgjBqyCgW8ziYATBsR6IDKVyJesMW44wGoYqN0dO3YYbb1YvhBurmH416ftHMb1z0sWws1BovMZ9NxhTdhWfwUVXrx4IV7EfIYcQW/MQE7Z6hd5+isAIIte7TY2NhpdAQBZcHoFdgXaBXYl+t2E2Zakb0hZNBagAvwusCvQLrAr0C6wK0JomJeXlzW/xJjGaezAyiTtd2+3lArs7/Er1YhskpRbbps9TpB9JHdJ7u/Zf+jxH/85+TtXCrv4/JvJz80eJshCko93f10hFW7YFVOvSsqH+hjvmc+Iv+0Rlf0iH8wVelrivLfQD7dNWE0+LJGuAZBF0C6JER0qVHi62h8fKi09eSe67s7JQ+z3U1NTQ+2Pv7n077rzU98fZdztQ1M3PB5RucLhoKmPLO2eFLxnRg+QNmS798x3d8L9PCZVp6a62L/3CTXvfHemkvY9db7OoRnEuzlCsn63vOkGURzzZUlJffcYXfHjD5eZy2SxpPq01/vkWZLduNt/v4f+3bP/KDP8dIzvx/3bfeXcLk4eFapt/tR9+csTP5p9cICl0XSPbM+3xMsyp/8siMrNuUvKt3vSaxX9pAx9+qeSEugXKJLy/V3iGr1/uzmm2wBRP9SVRylv6mp3874ZABkE7bLqjPfUl/BUn6786/k6ssrl6f6aOV3NrTxxm1aqO3DUS1bU94zHltlI/+Idhcuifn5gjgorb58Q9tXqcbEpYPZRBZmADQQCN27c+OKLL0x/mPBY977fXD34080mnQ8CXrFixbVr1+rr680dDjAa86dcUcn+wcsV3V//pFe4IHcwX7vlTTd/bjLbCGBDqHYLCgpCodDKlSsXFxfNtkf3eJxOMhYyIrMNAYZDtVtWVubz+aqrq7PgLQ8Gg2Qssj+ZA7IMeq1G/vj9/omJiSx4uhM5exDhulypTLwA9kLQLgC2g8YM/f39ZpsBgAYOHz5MXp2jo6Pkz5EjR8y2B4Ck6Ovr40Xr9Hg8x44dM9seADRAREtenV6vt7u7m1+V3ntkb2ZmPv7oozdv3pg9UpAl5Ofn8wUiWvLq7Ln+L7NNAkAbvGidLMPih+yAvXgXnM/LczoZTLoCduPN9OsVv1jpxIxBYDsm/zuxak0xtAvsB/G7DMvyqZAZZKC5WKB5wOxDkB7D/F17i/d2+TW1Abp4/y704f1CZqVL3uYG5kqAw7flKdUIkYyeN15ncxXD1PclKrs8twK3PJhAkUGWl5fIC4kZMviTZM9GBmu2bObLLo+F3m/LGgbk4BK7HJmNGeoONA62NUX9JPFeDb3MYFsVf6Kmzqy5eS+3oODkuDN0+NQu0zyuibjP2NZqhsXtKsbUZoX9coUuIfaIng7C/XDb+NVKdoCkYBmq2gz/DmTdhYDv4NWq8HtGFq80MjUdvkDgQh1XYXB4S3dkIQ7yllddPejjz+0X6uKbyxLpc6A50voK0xmjVIlhDCOtvFm0rwvK+x1sGznANSGfhYsDQj9tlVw40s1c7RX6viisUjccqOLI+H0GGh4GfB3DDbIup+bgPuUTtv/m1cHGVs1n9HCf/qfDvLMkNPQOjkh+ECXWsASVFffV8RUnRuLImeGnfq6f8DqXp7WRr7V5S01vA67vUoc6Xi5oMGHfLk93R03v9cyfLxsFd6fk8WIMS1RZx/BvUTfchJghNfhfMsis3x3oioStxIVGro7kIK4p7OwGrvfy61z7Dtb0diq6K7kmYlwVlYxC83jDVCprgvQTjh78XZ1iq4iAfR011DnT6DcSjscWgBz0F+5YhrjdDIa8dRUj/Fm4mMaA3I0l7iqpKt7/0BNsbwNX9zrTGFl560qlcCIXImZRc9kmMbu/4Otgws1j9ihnWFxl8b6UzJbb6RXBqibmoGBV+F4y2Zn2EAgwnM91sH+5+2x6+BY/9xxzII2FXmqOtOLyLFX4OZB9fX3/ePifkl9uyKjbzXEGLrapx0kgWRz0nxPiNRjqbNsG+TK5+EOIkAZYhqjWgbk4RkPvKXjMNiLLoKKl12qm3CMDQAf0JoMJ88gA0A331QR3r8FsSwDQRvi7CcQMwHbQeDfD36sBkA446TIId4EtYc2YRwaAXlg+ZoDjBbaDd7rwu8CGcKLNsHYlqZG6MyWR3JuTcHMgWcdnn6ww25JUQXJvrvLJeuevSp3mP+cndZDcm9tY5Eu1uLxZ6YrYdF8eJPfmNtbQrjRvVjahNz6FGMm9OY01tCvJm5XP0ZVNIUZyb+6SYe2S91+0RKVWWeGSzZvVkqOL5N6cJMPa5bJmwyEqzYFpPBDRVzRvNskcXST35jaZjhnE2bcNwx0+3jVK82aVE3pj+kJyb05Dnw3Y39+PPGFFkNxrGSJ5wtPT0xs3brTGtZqFQXKvZbHzdxMGguReGwDtyoLkXhuAmAHYFWgX2BVoF9gVaBfYFWgX2BVoF9gVaBfYFWgX2BVoF9iVDGs3S/OEeTO09Rc1XXPThGZER5emZ9ZaEjv7XavkCQ80N/TSGe+a++MSkLhkI/oAGMVPX5L6E5mRG1nQdtauJE/YzEmKOmea0WnH6XjcXG5NeLOIdu2bJxzdhdA2WkuUARpvvATu0XHXw0MVtZc8M1kpSpKYIeeqsy7N2RratXGecPSZxtxJOtqQywCNCEj9OckxkB75ATTS9CXpM5NjtyqZIXOIlZ+lbFesod2syROmBoRT8GjLiAmqz0kOmyGc8QXXSvyoHOpb1QxL4chYGuQJJ42hecI0W5Q7FNELUBICx1dT3ZoAw46MSSBPWNHMBHnCSg2Z8IeIthQNT3UkXKTBCSpyAUrHFFdRfav6iCRHxv55zsgTVjAzxTxhasAw/0xjGl+q+7fwSby4c4sv7ArrvhIG0DRSKXhWkdkyW1M48FlytYY84UQgT9gyIE9YG8gTtizItZQFecI2ANqVBXnCNgAxA7Ar0C6wK84nw/fNtgEAbUz+b4xdnnPOzMxFVjnT+viJkvXr5+fn+fsaAKSRUGghOB9yzM3NmG0JANp4txAKhYLOx0/Gi9dt7OvrM9seAJLl1eTP7xYW2eXlZcmG2dnZly9fjo6Okte3b98uLS2ZbSoAMRQVFW3YsEEmwCVRb2FhYUlJCUMDi1C8uAEwl4KCAqJPGb/7/v37YDA4MzNDrrQWFxehXWA18vPziXv9P+mndBLlJd66AAAAAElFTkSuQmCC");

/***/ }),

/***/ 7521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;