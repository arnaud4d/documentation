exports.id = 67006;
exports.ids = [67006];
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

/***/ 40237:
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
var properties_Entry_exports = {};
__export(properties_Entry_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(properties_Entry_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "propertiesEntry",
  title: "Entry"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormObjects/propertiesEntry",
  "id": "version-19/FormObjects/propertiesEntry",
  "title": "Entry",
  "description": "Auto Spellcheck",
  "source": "@site/versioned_docs/version-19/FormObjects/properties_Entry.md",
  "sourceDirName": "FormObjects",
  "slug": "/FormObjects/propertiesEntry",
  "permalink": "/docs/es/19/FormObjects/propertiesEntry",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "propertiesEntry",
    "title": "Entry"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Display",
    "permalink": "/docs/es/19/FormObjects/propertiesDisplay"
  },
  "next": {
    "title": "Footers",
    "permalink": "/docs/es/19/FormObjects/propertiesFooters"
  }
};
const assets = {};
const toc = [{
  value: "Auto Spellcheck",
  id: "auto-spellcheck",
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
  value: "Context Menu",
  id: "context-menu",
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
  value: "Enterable",
  id: "enterable",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-2",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-2",
  level: 4
}, {
  value: "Entry Filter",
  id: "entry-filter",
  level: 2
}, {
  value: "Defining an entry filter",
  id: "defining-an-entry-filter",
  level: 3
}, {
  value: "Default entry filters",
  id: "default-entry-filters",
  level: 3
}, {
  value: "JSON Grammar",
  id: "json-grammar-3",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-3",
  level: 4
}, {
  value: "Focusable",
  id: "focusable",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-4",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-4",
  level: 4
}, {
  value: "Keyboard Layout",
  id: "keyboard-layout",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-5",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-5",
  level: 4
}, {
  value: "Multiline",
  id: "multiline",
  level: 2
}, {
  value: "Automatic",
  id: "automatic",
  level: 4
}, {
  value: "No",
  id: "no",
  level: 4
}, {
  value: "Yes",
  id: "yes",
  level: 4
}, {
  value: "JSON Grammar",
  id: "json-grammar-6",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-6",
  level: 4
}, {
  value: "Placeholder",
  id: "placeholder",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-7",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-7",
  level: 4
}, {
  value: "See also",
  id: "see-also",
  level: 4
}, {
  value: "Selection always visible",
  id: "selection-always-visible",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-8",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-8",
  level: 4
}, {
  value: "Shortcut",
  id: "shortcut",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-9",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-9",
  level: 4
}, {
  value: "Single-Click Edit",
  id: "single-click-edit",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-10",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-10",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "auto-spellcheck"
    }
  }, `Auto Spellcheck`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D includes an integrated and customizable spell-check utility. Text type `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/inputOverview"
    }
  }, `inputs`), ` can be checked, as well as `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro`), ` documents.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Auto Spellcheck property activates the spell-check for each object. When used, a spell-check is automatically performed during data entry. You can also execute the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SPELL CHECKING`), ` 4D language command for each object to be checked.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `spellcheck`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true, false`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/inputOverview"
    }
  }, `Input`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "context-menu"
    }
  }, `Context Menu`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Allows the user access to a standard context menu in the object when the form is executed.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For a picture type `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/inputOverview"
    }
  }, `input`), `, in addition to standard editing commands (Cut, Copy, Paste and Clear), the menu contains the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Import...`), ` command, which can be used to import a picture stored in a file, as well as the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Save as...`), ` command, which can be used to save the picture to disk. The menu can also be used to modify the display format of the picture: the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Truncated non-centered`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Scaled to fit`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Scaled to fit centered prop.`), ` options are provided. The modification of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "properties_Display#picture-format"
    }
  }, `display format`), ` using this menu is temporary; it is not saved with the record.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/propertiesText#multi-style"
    }
  }, `multi-style`), ` text type `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/inputOverview"
    }
  }, `input`), `, in addition to standard editing commands, the context menu provides the following commands:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Fonts...`), `: displays the font system dialog box`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Recent fonts`), `: displays the names of recent fonts selected during the session. The list can store up to 10 fonts (beyond that, the last font used replaces the oldest). By default, this list is empty and the option is not displayed. You can manage this list using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `SET RECENT FONTS`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `FONT LIST`), ` commands.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `commands for supported style modifications: font, size, style, color and background color.
When the user modifies a style attribute via this pop-up menu, 4D generates the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `On After Edit`), ` form event.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/webAreaOverview"
    }
  }, `Web Area`), `, the contents of the menu depend of the rendering engine of the platform. It is possible to control access to the context menu via the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/WA-SET-PREFERENCE.301-4310780.en.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `WA SET PREFERENCE`)), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `contextMenu`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"automatic" (used if missing), "none"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-1"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/webAreaOverview"
    }
  }, `Web Area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro areas`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "enterable"
    }
  }, `Enterable`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Enterable attribute indicates whether users can enter values into the object.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Objects are enterable by default. If you want to make a field or an object non-enterable for that form, you can disable the Enterable property for the object. A non-enterable object only displays data. You control the data by methods that use the field or variable name. You can still use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Clicked`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Double Clicked`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Drag Over`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Drop`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Getting Focus`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Losing Focus`), ` form events with non-enterable objects. This makes it easier to manage custom context menus and lets you design interfaces where you can drag-and-drop and select non-enterable variables.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this property is disabled, any pop-up menus associated with a list box column via a list are disabled.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `enterable`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true, false`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-2"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro areas`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listOverview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/progressIndicator"
    }
  }, `Progress Bar`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/ruler"
    }
  }, `Ruler`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/stepper"
    }
  }, `Stepper`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "entry-filter"
    }
  }, `Entry Filter`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An entry filter controls exactly what the user can type during data entry. Unlike `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/propertiesRangeOfValues#required-list"
    }
  }, `required lists`), ` for example, entry filters operate on a character-by-character basis. For example, if a part number always consists of two letters followed by three digits, you can use an entry filter to restrict the user to that pattern. You can even control the particular letters and numbers.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An entry filter operates only during data entry. It has no effect on data display after the user deselects the object. In general, you use entry filters and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/propertiesDisplay"
    }
  }, `display formats`), ` together. The filter constrains data entry and the format ensures proper display of the value after data entry.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `During data entry, an entry filter evaluates each character as it is typed. If the user attempts to type an invalid character (a number instead of a letter, for example), 4D simply does not accept it. The null character remains unchanged until the user types a valid character.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Entry filters can also be used to display required formatting characters so that the user need not enter them. For example, an American telephone number consists of a three-digit area code, followed by a seven-digit number that is broken up into two groups of three and four digits, respectively. A display format can be used to enclose the area code in parentheses and display a dash after the third digit of the telephone number. When such a format is used, the user does not need to enter the parentheses or the dashes.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "defining-an-entry-filter"
    }
  }, `Defining an entry filter`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Most of the time, you can use one of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#default-entry-filters"
    }
  }, `built-in filters`), ` of 4D for what you need; however, you can also create and use custom filters:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `you can directly enter a filter definition string`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `or you can enter the name of an entry filter created in the Filters editor in the Toolbox. The names of custom filters you create begin with a vertical bar (|).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For information about creating entry filters, see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/Filter-and-format-codes.300-4575706.en.html"
    }
  }, `Filter and format codes`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "default-entry-filters"
    }
  }, `Default entry filters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here is a table that explains each of the entry filter choices in the Entry Filter drop-down list:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Entry Filter`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `~A`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Allow any letters, but convert to uppercase.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `&9`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Allow only numbers.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `&A`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Allow only capital letters.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `&a`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Allow only letters (uppercase and lowercase).`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `&@`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Allow only alphanumeric characters. No special characters.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `~a##`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `State name abbreviation (e.g., CA). Allow any two letters, but convert to uppercase.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!0&9##/##/##`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Standard date entry format. Display zeros in entry spaces. Allow any numbers.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!0&9 Day: ## Month: ## Year: ##`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Custom date entry format. Display zeros in entry spaces. Allow any numbers. Two entries after each word.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!0&9##:##`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Time entry format. Limited to hours and minutes. Display zeros in entry spaces. Allow any four numbers, separated by a colon.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!0&9## Hrs ## Mins ## Secs`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Time entry format. Display zeros in entry spaces. Allow any two numbers before each word.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!0&9Hrs: ## Mins: ## Secs: ##`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Time entry format. Display zeros in entry spaces. Allow any two numbers after each word.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!0&9##-##-##-##`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Local telephone number format. Display zeros in entry spaces. Allow any number. Three entries, hyphen, four entries.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!_&9(###)!0###-####`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Long distance telephone number. Display underscores in first three entry spaces, zeros in remainder.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!0&9###-###-###`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Long distance telephone number. Display zeros in entry spaces. Allow any number. Three entries, hyphen, three entries, hyphen, four entries.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!0&9###-##-###`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Social Security number. Display zeros in entry spaces. Allow any numbers.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `~"A-Z;0-9; ;,;.;-"`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Uppercase letters and punctuation. Allow only capital letters, numbers, spaces, commas, periods, and hyphens.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `&"a-z;0-9; ;,;.;-"`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Upper and lowercase letters and punctuation. Allow lowercase letters, numbers, spaces, commas, periods, and hyphens.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `&"0-9;.;-"`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Numbers. Allow only numbers, decimal points, and hyphens (minus sign).`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `entryFilter`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", null, `Entry filter code or `), /* @__PURE__ */ (0, import_react2.mdx)("li", null, `Entry filter name (filter names start with `, `|`, ` )`))))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-3"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listOverview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "focusable"
    }
  }, `Focusable`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Focusable`), ` property is enabled for an object, the object can have the focus (and can thus be activated by the keyboard for instance). It is outlined by a gray dotted line when it is selected \u2014 except when the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/propertiesAppearance#hide-focus-rectangle"
    }
  }, `Hide focus rectangle`), ` option has also been selected.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `An `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/inputOverview"
    }
  }, `input object`), ` is always focusable if it has the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#enterable"
    }
  }, `Enterable`), ` property.`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(7169)/* ["default"] */ .Z),
    width: "118",
    height: "30"
  }), /* @__PURE__ */ (0, import_react2.mdx)("br", null), `Check box shows focus when selected`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(95949)/* ["default"] */ .Z),
    width: "115",
    height: "31"
  }), /* @__PURE__ */ (0, import_react2.mdx)("br", null), `Check box is selected but cannot show focus|`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Focusable`), ` property is selected for a non-enterable object, the user can select, copy or even drag-and-drop the contents of the area.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-4"
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
  }, `focusable`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true, false`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-4"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro areas`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listOverview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/pluginAreaOverview"
    }
  }, `Plug-in Area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/subformOverview"
    }
  }, `Subform`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "keyboard-layout"
    }
  }, `Keyboard Layout`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property associates a specific keyboard layout to an `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/inputOverview"
    }
  }, `input object`), `. For example, in an international application, if a form contains a field whose contents must be entered in Greek characters, you can associate the "Greek" keyboard layout with this field. This way, during data entry, the keyboard configuration is automatically changed when this field has the focus.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, the object uses the current keyboard layout.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can also set and get the keyboard dynamically using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OBJECT SET KEYBOARD LAYOUT`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OBJECT Get keyboard layout`), ` commands.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-5"
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
  }, `keyboardDialect`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Language code, for example "ar-ma" or "cs". See RFC3066, ISO639 and ISO3166`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-5"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro areas`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/inputOverview"
    }
  }, `Input`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "multiline"
    }
  }, `Multiline`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property is available for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/inputOverview"
    }
  }, `inputs objects`), ` containing expressions of the Text type and fields of the Alpha and Text type. It can have three different values: Yes, No, Automatic (default).`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "automatic"
    }
  }, `Automatic`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `In single-line inputs, words located at the end of lines are truncated and there are no line returns.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `In multiline inputs, 4D carries out automatic line returns:`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "li"
  }), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(26465)/* ["default"] */ .Z),
    width: "326",
    height: "165"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "no"
    }
  }, `No`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `In single-line inputs, words located at the end of lines are truncated and there are no line returns.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `There are never line returns: the text is always displayed on a single row. If the Alpha or Text field or variable contains carriage returns, the text located after the first carriage return is removed as soon as the area is modified:`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "li"
  }), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(22113)/* ["default"] */ .Z),
    width: "327",
    height: "165"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "yes"
    }
  }, `Yes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this value is selected, the property is managed by the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/propertiesDisplay#wordwrap"
    }
  }, `Wordwrap`), ` option.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-6"
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
  }, `multiline`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"yes", "no", "automatic" (default if not defined)`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-6"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/inputOverview"
    }
  }, `Input`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "placeholder"
    }
  }, `Placeholder`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D can display placeholder text in the fields of your forms.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Placeholder text appears as watermark text in a field, supplying a help tip, indication or example for the data to be entered. This text disappears as soon as the user enters a character in the area:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(3629)/* ["default"] */ .Z),
    width: "302",
    height: "74"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The placeholder text is displayed again if the contents of the field is erased.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A placeholder can be displayed for the following types of data:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `string (text or alpha)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `date and time when the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Blank if null`), ` property is enabled.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can use an XLIFF reference in the ":xliff:resname" form as a placeholder, for example:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` :xliff:PH_Lastname`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You only pass the reference in the "Placeholder" field; it is not possible to combine a reference with static text.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can also set and get the placeholder text by programming using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-PLACEHOLDER.301-4128243.en.html"
    }
  }, `OBJECT SET PLACEHOLDER`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-Get-placeholder.301-4128249.en.html"
    }
  }, `OBJECT Get placeholder`), ` commands.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-7"
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
  }, `placeholder`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text to be displayed (grayed out) when the object does not contain any value`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-7"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/inputOverview"
    }
  }, `Input`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "see-also"
    }
  }, `See also`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/propertiesHelp"
    }
  }, `Help tip`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "selection-always-visible"
    }
  }, `Selection always visible`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property keeps the selection visible within the object after it has lost the focus. This makes it easier to implement interfaces that allow the text style to be modified (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/propertiesText#multi-style"
    }
  }, `Multi-style`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-8"
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
  }, `showSelection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true, false`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-8"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro areas`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/inputOverview"
    }
  }, `Input`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "shortcut"
    }
  }, `Shortcut`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property allows setting special meaning keys (keyboard shortcuts) for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/buttonOverview"
    }
  }, `buttons`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/radiobuttonOverview"
    }
  }, `radio buttons`), `, and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/checkboxOverview"
    }
  }, `checkboxes`), `. They allow the user to use the control using the keyboard instead of having to use the mouse.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can configure this option by clicking the `, `[...]`, ` button in the Shortcuts property in the Property List.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(8750)/* ["default"] */ .Z),
    width: "381",
    height: "293"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can also assign a shortcut to a custom menu command. If there is a conflict between two shortcuts, the active object has priority. For more information about associating shortcuts with menus, refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/Setting-menu-properties.300-4163525.en.html"
    }
  }, `Setting menu properties`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To view a list of all the shortcuts used in the 4D Design environment, see the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R5/4D/17-R5/Shortcuts-Page.300-4163701.en.html"
    }
  }, `Shortcuts Page`), ` in the Preferences dialog box.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-9"
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
  }, `shortcutAccel`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true, false (Ctrl Windows/Command macOS)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `shortcutAlt`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true, false`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `shortcutCommand`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true, false`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `shortcutControl`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true, false (macOS Control)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `shortcutShift`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true, false`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  })), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `shortcutKey`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", null, `any character key: "a", "b"...`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, `[F1]`, `" -> "`, `[F15]`, `", "`, `[Return]`, `", "`, `[Enter]`, `", "`, `[Backspace]`, `", "`, `[Tab]`, `", "`, `[Esc]`, `", "`, `[Del]`, `", "`, `[Home]`, `", "`, `[End]`, `", "`, `[Help]`, `", "`, `[Page up]`, `", "`, `[Page down]`, `", "`, `[left arrow]`, `", "`, `[right arrow]`, `", "`, `[up arrow]`, `", "`, `[down arrow]`, `"`))))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-9"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/pictureButtonOverview"
    }
  }, `Picture Button`), ` -
`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "single-click-edit"
    }
  }, `Single-Click Edit`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Enables direct passage to edit mode in list boxes.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is enabled, list box cells switch to edit mode after a single user click, regardless of whether or not this area of the list box was selected beforehand. Note that this option allows cells to be edited even when the list box `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/propertiesListBox#selection-mode"
    }
  }, `selection mode`), ` is set to "None".`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is not enabled, users must first select the cell row and then click on a cell in order to edit its contents.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-10"
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
  }, `singleClickEdit`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true, false`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-10"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/19/FormObjects/listboxOverview"
    }
  }, `List Box`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 26465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 22113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 7169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAAeCAIAAAB2Yn1xAAABrElEQVR42u2ZbU7DMAyGE9QDgAT/KUeaxEk2uM20G3Ck7QAgjRtApCDLxB9NsnqdKr+aqjZLHPuZ67RZPH8eg8tSd0s7sH45YnM5YnM5YnM5YnNdhPjh6cWPxZEqnnsf2pLF7rFrFcukH7GrUkNxvT98TI7Zvm2/v06exVQsk4H2273vFCvH05+JFfPtzh52FL/c/cjCfuBz+FgHL7UXX13BmUr3hvrxMUaMGH4xrxighiymSnyLFnhSoXZpQgX1KYfeBNBBamTDwz2xV6x93MLegrRR8ZMNPEvMYpyzlG/oqsU4cjinOGh7Ps8QW+eV7LN3oTJ7jZ/NWZzJAl9cJYJcFhVhDyZJLVt86mcvuNMOE7VY4jsvgrnWJagVhW9z2Z+0wzIRESemCt8w6ypnnbBX85NlohWKTJblC/PhRUaatSmMCzMul2w7+7qdtizOkviG/+sGng/WJbjUo6LDazo31cp6+yxBKUyFCVa5R5FeoDevG3368XlML9CVEbpKxPePY80w36Ng5Ttty6h/S/4W9r9v81jIs9hc/t+duRyxuRyxuRyxuRyxuX4BmHpOFlQocmQAAAAASUVORK5CYII=");

/***/ }),

/***/ 95949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAfCAIAAABbF2WQAAABdklEQVR42u2Y4WnDMBBGreIBUmj/xxkp0EmSdpuSDTpSMkAK6QatQSAu1ulyovpiYr5HCLYinc/P8gklXM7HjgB4mjuBxUKzKGgWBc2ioFkUNIuCZlHQLIpennwevm4O2L3vfr5Pc6f9APST8/3H3uh9PC1/w/b8urm02Jcq1eC3TCmV9EHfs5GA3XJ/eme/EIJqttUTXh6uFWzUqrarWvPpY3x32pRPHUqNeSZjGrKnzEqNL1vUFy5vNPJU5ehzVs7QktZa5A2n49xC3h6Po7va96MUP8/EvronzwnFORuFJq2lIutHZnBT0LwVxn91o6dVZxtqNWi11KSCMLnbVvFr4+hmR5X30drhp2er+LVxitUgCrW1ynVDpfY5/3N+xXKMi18Vx6oGntk6kZuWGvVXz3BP56o66I+viksrXm2cIDuNu9vt29YeMKwH7m49XJldvQyeMTTr4aoaUFlD+C8iCppFQbMoaBYFzaKgWRQ0i4JmUfwB35Dw4lZDZVwAAAAASUVORK5CYII=");

/***/ }),

/***/ 3629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 8750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;