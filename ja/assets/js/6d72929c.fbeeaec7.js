exports.id = 12861;
exports.ids = [12861];
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

/***/ 11678:
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
var dt_date_exports = {};
__export(dt_date_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(dt_date_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "date",
  title: "Date"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Concepts/date",
  "id": "version-19/Concepts/date",
  "title": "Date",
  "description": "A Date field, variable or expression can be in the range of 1/1/100 to 12/31/32,767.",
  "source": "@site/versioned_docs/version-19/Concepts/dt_date.md",
  "sourceDirName": "Concepts",
  "slug": "/Concepts/date",
  "permalink": "/docs/ja/19/Concepts/date",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "date",
    "title": "Date"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Collection",
    "permalink": "/docs/ja/19/Concepts/collection"
  },
  "next": {
    "title": "Null and Undefined",
    "permalink": "/docs/ja/19/Concepts/null-undefined"
  }
};
const assets = {};
const toc = [{
  value: "Date literals",
  id: "date-literals",
  level: 2
}, {
  value: "Date operators",
  id: "date-operators",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A Date field, variable or expression can be in the range of 1/1/100 to 12/31/32,767.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Although the representation mode for dates by can work with dates up to the year 32 767, certain operations passing through the system impose a lower limit.  `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` In the 4D Language Reference manual, Date parameters in command descriptions are denoted as Date, except when marked otherwise.  `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "date-literals"
    }
  }, `Date literals`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A date literal constant is enclosed by exclamation marks (!\u2026!). A date must be structured using the ISO format (!YYYY-MM-DD!). Here are some examples of date constants:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `!1976-01-01!
!2004-09-29!
!2015-12-31!
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A null date is specified by `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `!00-00-00!`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Tip:`), ` The Method Editor includes a shortcut for entering a null date. To type a null date, enter the exclamation (!) character and press Enter.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Notes:`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `For compatibility reasons, 4D accepts two-digit years to be entered. A two-digit year is assumed to be in the 20th or 21st century based on whether it is greater or less than 30, unless this default setting has been changed using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `SET DEFAULT CENTURY`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If you have checked the "Use regional system settings" option (see Methods Page), you must use the date format defined in your system. Generally, in a US environment, dates are entered in the form month/day/year, with a slash "/" separating the values.
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "date-operators"
    }
  }, `Date operators`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Operation`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Syntax`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Returns`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Expression`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `Date difference`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Date \u2013 Date`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!2017-01-20! - !2017-01-01!`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `19`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Day addition`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Date + Number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Date`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!2017-01-20! + 9`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!2017-01-29!`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Day subtraction`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Date \u2013 Number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Date`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!2017-01-20! - 9`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!2017-01-11!`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Equality`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Date = Date`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!2017-01-01! =!2017-01-01!`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `True`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!2017-01-20! = !2017-01-01!`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `False`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Inequality`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Date # Date`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!2017-01-20! # !2017-01-01!`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `True`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!2017-01-20! # !2017-01-20!`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `False`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Greater than`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Date > Date`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!2017-01-20! > !2017-01-01!`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `True`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!2017-01-20! > !2017-01-20!`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `False`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Less than`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Date < Date`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!2017-01-01! < !2017-01-20!`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `True`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!2017-01-20! < !2017-01-20!`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `False`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Greater than or equal to`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Date >= Date`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!2017-01-20! >=!2017-01-01!`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `True`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!2017-01-01!>=!2017-01-20!`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `False`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Less than or equal to`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Date \\<= Date`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!2017-01-01!\\<=!2017-01-20!`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `True`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!2017-01-20!\\<=!2017-01-01!`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `False`)))));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;