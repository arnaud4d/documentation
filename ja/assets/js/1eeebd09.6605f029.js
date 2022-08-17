exports.id = 76969;
exports.ids = [76969];
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

/***/ 57716:
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
var properties_Display_exports = {};
__export(properties_Display_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(properties_Display_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "propertiesDisplay",
  title: "Display"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormObjects/propertiesDisplay",
  "id": "FormObjects/propertiesDisplay",
  "title": "Display",
  "description": "---",
  "source": "@site/docs/FormObjects/properties_Display.md",
  "sourceDirName": "FormObjects",
  "slug": "/FormObjects/propertiesDisplay",
  "permalink": "/docs/ja/next/FormObjects/propertiesDisplay",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "propertiesDisplay",
    "title": "Display"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Data Source",
    "permalink": "/docs/ja/next/FormObjects/propertiesDataSource"
  },
  "next": {
    "title": "Entry",
    "permalink": "/docs/ja/next/FormObjects/propertiesEntry"
  }
};
const assets = {};
const toc = [{
  value: "Alpha Format",
  id: "alpha-format",
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
  value: "Date Format",
  id: "date-format",
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
  value: "Number Format",
  id: "number-format",
  level: 2
}, {
  value: "Placeholders",
  id: "placeholders",
  level: 3
}, {
  value: "Separator characters",
  id: "separator-characters",
  level: 3
}, {
  value: "Decimal points and other display characters",
  id: "decimal-points-and-other-display-characters",
  level: 3
}, {
  value: "Formats for positive, negative, and zero",
  id: "formats-for-positive-negative-and-zero",
  level: 3
}, {
  value: "Scientific notation",
  id: "scientific-notation",
  level: 3
}, {
  value: "Hexadecimal formats",
  id: "hexadecimal-formats",
  level: 3
}, {
  value: "XML notation",
  id: "xml-notation",
  level: 3
}, {
  value: "Displaying a number as a time",
  id: "displaying-a-number-as-a-time",
  level: 3
}, {
  value: "Examples",
  id: "examples",
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
  value: "Picture Format",
  id: "picture-format",
  level: 2
}, {
  value: "Scaled to fit",
  id: "scaled-to-fit",
  level: 3
}, {
  value: "Truncated (centered and non-centered)",
  id: "truncated-centered-and-non-centered",
  level: 3
}, {
  value: "Scaled to fit (proportional) and Scaled to fit centered (proportional)",
  id: "scaled-to-fit-proportional-and-scaled-to-fit-centered-proportional",
  level: 3
}, {
  value: "Replicated",
  id: "replicated",
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
  value: "Time Format",
  id: "time-format",
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
  value: "Text when False/Text when True",
  id: "text-when-falsetext-when-true",
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
  value: "Display Type",
  id: "display-type",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-6",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-6",
  level: 4
}, {
  value: "Not rendered",
  id: "not-rendered",
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
  value: "Three-States",
  id: "three-states",
  level: 2
}, {
  value: "Three-states check boxes in list box columns",
  id: "three-states-check-boxes-in-list-box-columns",
  level: 4
}, {
  value: "JSON Grammar",
  id: "json-grammar-8",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-8",
  level: 4
}, {
  value: "Title",
  id: "title",
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
  value: "Truncate with ellipsis",
  id: "truncate-with-ellipsis",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-10",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-10",
  level: 4
}, {
  value: "Visibility",
  id: "visibility",
  level: 2
}, {
  value: "Automatic visibility in list forms",
  id: "automatic-visibility-in-list-forms",
  level: 4
}, {
  value: "JSON Grammar",
  id: "json-grammar-11",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-11",
  level: 4
}, {
  value: "Wordwrap",
  id: "wordwrap",
  level: 2
}, {
  value: "Checked for list box/Yes for input",
  id: "checked-for-list-boxyes-for-input",
  level: 4
}, {
  value: "Unchecked for list box/No for input",
  id: "unchecked-for-list-boxno-for-input",
  level: 4
}, {
  value: "Automatic for input (default option)",
  id: "automatic-for-input-default-option",
  level: 4
}, {
  value: "JSON Grammar",
  id: "json-grammar-12",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-12",
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
      "id": "alpha-format"
    }
  }, `Alpha Format`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Alpha formats control the way the alphanumeric fields and variables appear when displayed or printed. Here is a list of formats provided for alphanumeric fields:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(63156)/* ["default"] */ .Z),
    width: "155",
    height: "98"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can choose a format from this list or use any custom format. The default list contains formats for some of the most common alpha fields that require formats: US telephone numbers (local and long distance), Social Security numbers, and zip codes. You can also enter a custom format name set in the Filters and formats editor of the tool box. In this case, the format cannot be modified in the object properties.
Any custom formats or filters that you have created are automatically available, preceded by a vertical bar (|).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The number sign (#) is the placeholder for an alphanumeric display format. You can include the appropriate dashes, hyphens, spaces, and any other punctuation marks that you want to display. You use the actual punctuation marks you want and the number sign for each character you want to display.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, consider a part number with a format such as "RB-1762-1".`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The alpha format would be:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` ##-####-#`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the user enters "RB17621," the field displays:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` RB-1762-1`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The field actually contains "RB17621".`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the user enters more characters than the format allows, 4D displays the last characters. For example, if the format is:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` (#######)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `and the user enters "proportion", the field displays:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` (portion)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The field actually contains "proportion". 4D accepts and stores the entire entry no matter what the display format. No information is lost.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `textFormat`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"### ####", "(###) ### ####", "### ### ####", "### ## ####", "00000", custom formats`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "date-format"
    }
  }, `Date Format`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Date formats control the way dates appear when displayed or printed. For data entry, you enter dates in the MM/DD/YYYY format, regardless of the display format you have chosen.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Unlike `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#alpha-format"
    }
  }, `Alpha`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#number-format"
    }
  }, `Number`), ` formats, display formats for dates must only be selected among the 4D built-in formats.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The table below shows choices available:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Format name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `JSON String`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Example (US system)`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `System date short`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `- (default)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `03/25/20`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `System date abbreviated `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `(1)`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `systemMedium`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Wed, Mar 25, 2020`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `System date long`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `systemLong`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Wednesday, March 25, 2020`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `RFC 822`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `rfc822`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Tue, 25 Mar 2020 22:00:00 GMT`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Short Century`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `shortCentury`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `03/25/20 but 04/25/2032 `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `(2)`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Internal date long`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `long`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `March 25, 2020`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Internal date abbreviated `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `(1)`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `abbreviated`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Mar 25, 2020`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Internal date short`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `short`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `03/25/2020`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `ISO Date Time `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `(3)`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `iso8601`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `2020-03-25T00:00:00`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `(1)`), ` To avoid ambiguity and in accordance with current practice, the abbreviated date formats display "jun" for June and "jul" for July. This particularity only applies to French versions of 4D.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `(2)`), ` The year is displayed using two digits when it belongs to the interval (1930;2029) otherwise it will be displayed using four digits. This is by default but it can be modified using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/SET-DEFAULT-CENTURY.301-4311596.en.html"
    }
  }, `SET DEFAULT CENTURY`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `(3)`), ` The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ISO Date Time`), ` format corresponds to the XML date and time representation standard (ISO8601). It is mainly intended to be used when importing/exporting data in XML format and in Web Services.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Regardless of the display format, if the year is entered with two digits then 4D assumes the century to be the 21st if the year belongs to the interval (00;29) and the 20th if it belongs to the interval (30;99). This is the default setting but it can be modified using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/SET-DEFAULT-CENTURY.301-4311596.en.html"
    }
  }, `SET DEFAULT CENTURY`), ` command.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `dateFormat`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"systemShort", "systemMedium", "systemLong", "iso8601", "rfc822", "short", "shortCentury", "abbreviated", "long", "blankIfNull" (can be combined with the other possible values)`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-1"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "number-format"
    }
  }, `Number Format`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Number fields include the Integer, Long integer, Integer 64 bits, Real and Float types.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Number formats control the way numbers appear when displayed or printed. For data entry, you enter only the numbers (including a decimal point or minus sign if necessary), regardless of the display format you have chosen.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D provides various default number formats.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "placeholders"
    }
  }, `Placeholders`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In each of the number display formats, the number sign (#), zero (0), caret (^), and asterisk (*) are used as placeholders. You create your own number formats by using one placeholder for each digit you expect to display.`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Placeholder`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Effect for leading or trailing zero`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `#`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Displays nothing`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Displays 0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `^`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Displays a space (1)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `*`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Displays an asterisk`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `(1) The caret (^) generates a space character that occupies the same width as a digit in most fonts.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, if you want to display three-digit numbers, you could use the format ###. If the user enters more digits than the format allows, 4D displays <<< in the field to indicate that more digits were entered than the number of digits specified in the display format.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the user enters a negative number, the leftmost character is displayed as a minus sign (unless a negative display format has been specified). If ##0 is the format, minus 26 is displayed as \u201326 and minus 260 is displayed as <<< because the minus sign occupies a placeholder and there are only three placeholders.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `No matter what the display format, 4D accepts and stores the number entered in the field. No information is lost.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each placeholder character has a different effect on the display of leading or trailing zeros. A leading zero is a zero that starts a number before the decimal point; a trailing zero is a zero that ends a number after the decimal point.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Suppose you use the format ##0 to display three digits. If the user enters nothing in the field, the field displays 0. If the user enters 26, the field displays 26.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "separator-characters"
    }
  }, `Separator characters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The numeric display formats (except for scientific notations) are automatically based on regional system parameters. 4D replaces the \u201C.\u201D and \u201C,\u201D characters by, respectively, the decimal separator and the thousand separator defined in the operating system. The period and comma are thus considered as placeholder characters, following the example of 0 or #.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `On Windows, when using the decimal separator key of the numeric keypad, 4D makes a distinction depending on the type of field where the cursor is located:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in a Real type field, using this key will insert the decimal separator defined in the system,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `in any other type of field, this key inserts the character associated with the key, usually a period (.) or comma (,).`))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "decimal-points-and-other-display-characters"
    }
  }, `Decimal points and other display characters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can use a decimal point in a number display format. If you want the decimal to display regardless of whether the user types it in, it must be placed between zeros.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can use any other characters in the format. When used alone, or placed before or after placeholders, the characters always appear. For example, if you use the following format:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` $##0`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `a dollar sign always appears because it is placed before the placeholders.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If characters are placed between placeholders, they appear only if digits are displayed on both sides. For example, if you define the format:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` ###.##0`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `the point appears only if the user enters at least four digits.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Spaces are treated as characters in number display formats.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "formats-for-positive-negative-and-zero"
    }
  }, `Formats for positive, negative, and zero`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A number display format can have up to three parts allowing you to specify display formats for positive, negative, and zero values. You specify the three parts by separating them with semicolons as shown below:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` Positive;Negative;Zero`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You do not have to specify all three parts of the format. If you use just one part, 4D uses it for all numbers, placing a minus sign in front of negative numbers.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you use two parts, 4D uses the first part for positive numbers and zero and the second part for negative numbers. If you use three parts, the first is for positive numbers, the second for negative numbers, and the third for zero.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The third part (zero) is not interpreted and does not accept replacement characters. If you enter `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `###;###;#`), `, the zero value will be displayed \u201C#\u201D. In other words, what you actually enter is what will be displayed for the zero value.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here is an example of a number display format that shows dollar signs and commas, places negative values in parentheses, and does not display zeros:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` $###,##0.00;($###,##0.00);`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Notice that the presence of the second semicolon instructs 4D to use nothing to display zero. The following format is similar except that the absence of the second semicolon instructs 4D to use the positive number format for zero:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` $###,##0.00;($###,##0.00)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this case, the display for zero would be $0.00.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "scientific-notation"
    }
  }, `Scientific notation`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you want to display numbers in scientific notation, use the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `ampersand`), ` (&) followed by a number to specify the number of digits you want to display. For example, the format:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` &3`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `would display 759.62 as:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` 7.60e+2`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The scientific notation format is the only format that will automatically round the displayed number. Note in the example above that the number is rounded up to 7.60e+2 instead of truncating to 7.59e+2.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "hexadecimal-formats"
    }
  }, `Hexadecimal formats`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can display a number in hexadecimal using the following display formats:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `&x`), `: This format displays hexadecimal numbers using the \u201C0xFFFF\u201D format.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `&$`), `: This format displays hexadecimal numbers using the \u201C$FFFF\u201D format.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "xml-notation"
    }
  }, `XML notation`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `&xml`), ` format will make a number compliant with XML standard rules. In particular, the decimal separator character will be a period "." in all cases, regardless of the system settings.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "displaying-a-number-as-a-time"
    }
  }, `Displaying a number as a time`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can display a number as a time (with a time format) by using `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `&/`), ` followed by a digit. Time is determined by calculating the number of seconds since midnight that the value represents. The digit in the format corresponds to the order in which the time format appears in the Format drop-down menu.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, the format:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` &/5`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `corresponds to the 5th time format in the pop-up menu, specifically the AM/PM time. A number field with this format would display 25000 as:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` 6:56 AM`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "examples"
    }
  }, `Examples`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following table shows how different formats affect the display of numbers. The three columns \u2014 Positive, Negative, and Zero \u2014 each show how 1,234.50, \u20131,234.50, and 0 would be displayed.`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Format Entered`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Positive`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Negative`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Zero`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `###`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `<<<`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `<<<`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `####`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `<<<<`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `#######`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `#####.##`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1234.5`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-1234.5`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `####0.00`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1234.50`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-1234.50`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0.00`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `#####0`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `+#####0;\u2013#####0;0`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `+1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `#####0DB;#####0CR;0`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1234DB`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1234CR`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `#####0;(#####0)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `(1234)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `###,##0`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1,234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-1,234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `##,##0.00`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1,234.50`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-1,234.50`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0.00`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `\\^\\^\\^\\^\\^\\^\\^`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `\\^\\^\\^\\^\\^\\^0`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `\\^\\^\\^,\\^\\^0`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1,234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-1,234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `\\^\\^,\\^\\^0.00`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1,234.50`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-1,234.50`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0.00`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `*`, `*`, `*`, `*`, `*`, `*`, `*`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `*`, `*`, `*`, `1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `*`, `*`, `-1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `*`, `*`, `*`, `*`, `*`, `*`, `*`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `*`, `*`, `*`, `*`, `*`, `*`, `0`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `*`, `*`, `*`, `1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `*`, `*`, `-1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `*`, `*`, `*`, `*`, `*`, `*`, `0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `*`, `*`, `*`, `,*`, `*`, `0`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `*`, `*`, `1,234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `*`, `-1,234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `*`, `*`, `*`, `*`, `*`, `*`, `0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `*`, `*`, `,`, `*`, `*`, `0.00`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `*`, `1,234.50`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-1,234.50`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `*`, `*`, `*`, `*`, `*`, `0.00`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$`, `*`, `,`, `*`, `*`, `0.00;\u2013$`, `*`, `,`, `*`, `*`, `0.00`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$1,234.50`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-$1,234.50`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$`, `*`, `*`, `*`, `*`, `0.00`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$\\^\\^\\^\\^0`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$ 1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$\u20131234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$    0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$\\^\\^\\^0;\u2013$\\^\\^\\^0`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `\u2013$1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$   0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$\\^\\^\\^0 ;($\\^\\^\\^0)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$1234`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `($1234)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$   0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$\\^,\\^\\^0.00 ;($\\^,\\^\\^0.00)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$1,234.50`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `($1,234.50)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$    0.00`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `&2`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1.2e+3`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-1.2e+3`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0.0e+0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `&5`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1.23450e+3`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-1.23450e+3`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0.00000`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `&xml`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1234.5`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-1234.5`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `numberFormat`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Numbers (including a decimal point or minus sign if necessary)`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-2"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/progressIndicator"
    }
  }, `Progress Indicators`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "picture-format"
    }
  }, `Picture Format`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Picture formats control how pictures appear when displayed or printed. For data entry, the user always enters pictures by pasting them from the Clipboard or by drag and drop, regardless of the display format.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The truncation and scaling options do not affect the picture itself. The contents of a Picture field are always saved. Only the display on the particular form is affected by the picture display format.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "scaled-to-fit"
    }
  }, `Scaled to fit`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `JSON grammar: "scaled"`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Scaled to fit`), ` format causes 4D to resize the picture to fit the dimensions of the area.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(45449)/* ["default"] */ .Z),
    width: "212",
    height: "198"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "truncated-centered-and-non-centered"
    }
  }, `Truncated (centered and non-centered)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `JSON grammar: "truncatedCenter" / "truncatedTopLeft"`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Truncated (centered)`), ` format causes 4D to center the picture in the area and crop any portion that does not fit within the area. 4D crops equally from each edge and from the top and bottom.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Truncated (non-centered)`), ` format causes 4D to place the upper-left corner of the picture in the upper-left corner of the area and crop any portion that does not fit within the area. 4D crops from the right and bottom.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `When the picture format is `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Truncated (non-centered)`), `, it is possible to add scroll bars to the input area.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(11671)/* ["default"] */ .Z),
    width: "429",
    height: "221"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "scaled-to-fit-proportional-and-scaled-to-fit-centered-proportional"
    }
  }, `Scaled to fit (proportional) and Scaled to fit centered (proportional)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `JSON grammar: "proportionalTopLeft" / "proportionalCenter"`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you use `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Scaled to fit (proportional)`), `, the picture is reduced proportionally on all sides to fit the area created for the picture. The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Scaled to fit centered (proportional)`), ` option does the same, but centers the picture in the picture area.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the picture is smaller than the area set in the form, it will not be modified. If the picture is bigger than the area set in the form, it is proportionally reduced. Since it is proportionally reduced, the picture will not appear distorted.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you have applied the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Scaled to fit centered (proportional)`), ` format, the picture is also centered in the area:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(76597)/* ["default"] */ .Z),
    width: "447",
    height: "214"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "replicated"
    }
  }, `Replicated`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `JSON grammar: "tiled"`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the area that contains a picture with the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Replicated`), ` format is enlarged, the picture is not deformed but is replicated as many times as necessary in order to fill the area entirely.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(78899)/* ["default"] */ .Z),
    width: "663",
    height: "273"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the field is reduced to a size smaller than that of the original picture, the picture is truncated (non-centered).`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `pictureFormat`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"truncatedTopLeft", "scaled", "truncatedCenter", "tiled", "proportionalTopLeft", "proportionalCenter"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-3"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "time-format"
    }
  }, `Time Format`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Time formats control the way times appear when displayed or printed. For data entry, you enter times in the 24-hour HH:MM:SS format or the 12-hour HH:MM:SS AM/PM format, regardless of the display format you have chosen.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Unlike `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#alpha-format"
    }
  }, `Alpha`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#number-format"
    }
  }, `Number`), ` formats, display formats for times must only be selected among the 4D built-in formats.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The table below shows the Time field display formats and gives examples:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Format name`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `JSON string`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Comments`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Example for 04:30:25`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `HH:MM:SS`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `hh_mm_ss`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `04:30:25`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `HH:MM`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `hh_mm`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `04:30`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Hour Min Sec`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `HH_MM_SS`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `4 hours 30 minutes 25 seconds`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Hour Min`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `HH_MM`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `4 hours 30 minutes`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `HH:MM AM/PM`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `hh_mm_am`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `4:30 a.m.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `MM SS`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `mm_ss`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Time expressed as a duration from 00:00:00`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `270:25`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Min Sec`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `MM_SS`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Time expressed as a duration from 00:00:00`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `270 Minutes 25 Seconds`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `ISO Date Time`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `iso8601`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Corresponds to the XML standard for representing time-related data. It is mainly intended to be used when importing/exporting data in XML format`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `0000-00-00T04:30:25`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `System time short`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `- (default)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Standard time format defined in the system`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `04:30:25`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `System time long abbreviated`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `systemMedium`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `macOS only: Abbreviated time format defined in the system. `, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `Windows: this format is the same as the System time short format`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `4\u202230\u202225 AM`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `System time long`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `systemLong`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `macOS only: Long time format defined in the system. `, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `Windows: this format is the same as the System time short format`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `4:30:25 AM HNEC`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `timeFormat`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"systemShort", "systemMedium", "systemLong", "iso8601", "hh_mm_ss", "hh_mm", "hh_mm_am", "mm_ss", "HH_MM_SS", "HH_MM", "MM_SS", "blankIfNull" (can be combined with the other possible values)`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-4"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "text-when-falsetext-when-true"
    }
  }, `Text when False/Text when True`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesObject#expression-type"
    }
  }, `boolean expression`), ` is displayed as:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a text in an `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/inputOverview"
    }
  }, `input object`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesDisplay#display-type"
    }
  }, `"popup"`), ` in a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `list box column`), `,`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `... you can select the text to display for each value:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Text when True`), ` - the text to be displayed when the value is "true"`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Text when False`), ` - the text to be displayed when the value is "false"`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `booleanFormat`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"\\<`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `textWhenTrue`), `>`, `;\\<`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `textWhenFalse`), `>`, `", e.g. "Assigned;Unassigned"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-5"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/inputOverview"
    }
  }, `Input`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "display-type"
    }
  }, `Display Type`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Used to associate a display format with the column data. The formats provided depends on the variable type (array type list box) or the data/field type (selection and collection type list boxes).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Boolean and number (numeric or integer) columns can be displayed as check boxes. In this case, the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#title"
    }
  }, `Title`), ` property can be defined.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Boolean columns can also be displayed as pop-up menus. In this case, the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#text-when-false-text-when-true"
    }
  }, `Text when False and Text when True`), ` properties must be defined.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `controlType`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `number columns`), `: "automatic" (default) or "checkbox"`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `boolean columns`), `: "checkbox" (default) or "popup"`))))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-6"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "not-rendered"
    }
  }, `Not rendered`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this property is enabled, the object is not drawn on the form, however it can still be activated.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In particular, this property allows implementing "invisible" buttons.  Non-rendered buttons can be placed on top of graphic objects. They remain invisible and do not highlight when clicked, however their action is triggered when they are clicked.  `), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `display`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
      "id": "objects-supported-7"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "three-states"
    }
  }, `Three-States`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Allows a check box object to accept a third state. The variable associated with the check box returns the value 2 when the check box is in the third state.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "three-states-check-boxes-in-list-box-columns"
    }
  }, `Three-states check boxes in list box columns`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `List box columns with a numeric `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesObject#expression-type"
    }
  }, `data type`), ` can be displayed as three-states check boxes. If chosen, the following values are displayed:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `0 = unchecked box,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `1 = checked box,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `2 (or any value >0) = semi-checked box (third state). For data entry, this state returns the value 2.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `-1 = invisible check box,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `-2 = unchecked box, not enterable,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `-3 = checked box, not enterable,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `-4 = semi-checked box, not enterable`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this case as well, the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#title"
    }
  }, `Title`), ` property is also available so that the title of the check box can be entered.  `), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `threeState`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
      "href": "/docs/ja/next/FormObjects/checkboxOverview"
    }
  }, `Check box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "title"
    }
  }, `Title`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property is available for a list box column if:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesObject#expression-type"
    }
  }, `column type`), ` is `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `boolean`), ` and its `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesDisplay#display-type"
    }
  }, `display type`), ` is "Check Box"`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesObject#expression-type"
    }
  }, `column type`), ` is `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `number`), ` (numeric or integer) and its `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesDisplay#display-type"
    }
  }, `display type`), ` is "Three-states Checkbox".`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In that cases, the title of the check box can be entered using this property.  `), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `controlTitle`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Any custom label for the check box`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-9"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "truncate-with-ellipsis"
    }
  }, `Truncate with ellipsis`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Controls the display of values when list box columns are too narrow to show their full contents.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option is available for columns with any type of contents, except pictures and objects.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `When the property is enabled (default), if the contents of a list box cell exceed the width of the column, they are truncated and an ellipsis is displayed:`), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(52706)/* ["default"] */ .Z),
    width: "137",
    height: "144"
  })))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The position of the ellipsis depends on the OS. In the above example (Windows), it is added on the right side of the text. On macOS, the ellipsis is added in the middle of the text.`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `When the property is disabled, if the contents of a cell exceed the width of the column, they are simply clipped with no ellipsis added:`), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(10195)/* ["default"] */ .Z),
    width: "135",
    height: "143"
  })))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Truncate with ellipsis option is enabled by default and can be specified with list boxes of the Array, Selection, or Collection type.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `When applied to Text type columns, the Truncate with ellipsis option is available only if the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#wordwrap"
    }
  }, `Wordwrap`), ` option is not selected. When the Wordwrap property is selected, extra contents in cells are handled through the word-wrapping features so the Truncate with ellipsis property is not available.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Truncate with ellipsis property can be applied to Boolean type columns; however, the result differs depending on the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#display-type"
    }
  }, `cell format`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `For Pop-up type Boolean formats, labels are truncated with an ellipsis,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `For Check box type Boolean formats, labels are always clipped.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `truncateMode`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"withEllipsis", "none"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-10"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Header`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "visibility"
    }
  }, `Visibility`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property allows hiding the object in the Application environment.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can handle the Visibility property for most form objects. This property is mainly used to simplify dynamic interface development. In this context, it is often necessary to hide objects programatically during the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On load`), ` event of the form then to display certain objects afterwards. The Visibility property allows inverting this logic by making certain objects invisible by default. The developer can then program their display using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page603.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `OBJECT SET VISIBLE`)), ` command when needed.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "automatic-visibility-in-list-forms"
    }
  }, `Automatic visibility in list forms`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the context of `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormEditor/propertiesForm#form-type"
    }
  }, `"list" forms`), `, the Visibility property supports two specific values:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `If record selected`), ` (JSON name: "selectedRows")`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `If record not selected`), ` (JSON name: "unselectedRows")`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property is only used when drawing objects located in the body of a list form. It tells 4D whether or not to draw the object depending on whether the record being processed is selected/not selected. It allows you to represent a selection of records using visual attributes other than highlight colors:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(77805)/* ["default"] */ .Z),
    width: "446",
    height: "319"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D does not take this property into account if the object was hidden using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page603.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `OBJECT SET VISIBLE`)), ` command; in this case, the object remains invisible regardless of whether or not the record is selected.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-11"
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
  }, `visibility`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"visible", "hidden", "selectedRows" (list form only), "unselectedRows" (list form only)`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-11"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/viewProAreaOverview"
    }
  }, `4D View Pro area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/writeProAreaOverview"
    }
  }, `4D Write Pro area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/buttonGridOverview"
    }
  }, `Button Grid`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/groupBox"
    }
  }, `Group Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listOverview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-headers"
    }
  }, `List Box Header`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/pictureButtonOverview"
    }
  }, `Picture Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/picturePopupMenuOverview"
    }
  }, `Picture Pop-up Menu`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/pluginAreaOverview"
    }
  }, `Plug-in Area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/progressIndicator"
    }
  }, `Progress indicator`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/spinner"
    }
  }, `Spinner`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/splitters"
    }
  }, `Splitter`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/staticPicture"
    }
  }, `Static Picture`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/stepper"
    }
  }, `Stepper`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/subformOverview"
    }
  }, `Subform`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/tabControl"
    }
  }, `Tab control`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/text"
    }
  }, `Text Area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/webAreaOverview"
    }
  }, `Web Area`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "wordwrap"
    }
  }, `Wordwrap`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `For `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/inputOverview"
    }
  }, `input`), ` objects, available when the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesEntry#multiline"
    }
  }, `Multiline`), ` property is set to "yes" .`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Manages the display of contents when it exceeds the width of the object.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "checked-for-list-boxyes-for-input"
    }
  }, `Checked for list box/Yes for input`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `JSON grammar: "normal"`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is selected, text automatically wraps to the next line whenever its width exceeds that of the column/area, if the column/area height permits it.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `In single-line columns/areas, only the last word that can be displayed entirely is displayed. 4D inserts line returns; it is possible to scroll the contents of the area by pressing the down arrow key.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `In multiline columns/areas, 4D carries out automatic line returns.`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(29154)/* ["default"] */ .Z),
    width: "327",
    height: "165"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "unchecked-for-list-boxno-for-input"
    }
  }, `Unchecked for list box/No for input`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `JSON grammar: "none"`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is selected, 4D does not do any automatic line returns and the last word that can be displayed may be truncated. In text type areas, carriage returns are supported:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(46864)/* ["default"] */ .Z),
    width: "327",
    height: "167"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In list boxes, any text that is too long is truncated and displayed with an ellipse (...). In the following example, the Wordwrap option is `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `checked for the left column`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `unchecked for the right column`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(94221)/* ["default"] */ .Z),
    width: "419",
    height: "206"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that regardless of the Wordwrap option\u2019s value, the row height is not changed. If the text with line breaks cannot be entirely displayed in the column, it is truncated (without an ellipse). In the case of list boxes displaying just a single row, only the first line of text is displayed:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(51709)/* ["default"] */ .Z),
    width: "419",
    height: "74"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "automatic-for-input-default-option"
    }
  }, `Automatic for input (default option)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `JSON grammar: "automatic"`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `In single-line areas, words located at the end of lines are truncated and there are no line returns.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `In multiline areas, 4D carries out automatic line returns.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(85195)/* ["default"] */ .Z),
    width: "327",
    height: "168"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-12"
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
  }, `wordwrap`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"automatic" (excluding list box), "normal", "none"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-12"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-footers"
    }
  }, `List Box Footer`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 63156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 78899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/property_pictureFormat_Replicated-8497c171f9ede501e533a75837b762e5.png");

/***/ }),

/***/ 76597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/property_pictureFormat_ScaledProportional-63a1c37e7cf9fe2375b256fcf21a4d74.png");

/***/ }),

/***/ 45449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 11671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/property_pictureFormat_Truncated-aebc828eb036b3aa77fc5edb90070ac5.png");

/***/ }),

/***/ 52706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/property_truncate1-dbf59d677bb3844e714c62e1601b36bb.png");

/***/ }),

/***/ 10195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/property_truncate2-94cc7275b3ba437584c83894df03c84f.png");

/***/ }),

/***/ 94221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/property_wordwrap1-9ddbae6ed6a5333bc50c6908d0213d9e.png");

/***/ }),

/***/ 51709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/property_wordwrap2-b69879dbf7ee213ea9d225ded09b365b.png");

/***/ }),

/***/ 77805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/select-row-93f2d57bba913598655fc95176637c0d.png");

/***/ }),

/***/ 85195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 29154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 46864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;