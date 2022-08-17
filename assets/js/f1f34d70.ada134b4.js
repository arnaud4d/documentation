exports.id = 11508;
exports.ids = [11508];
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

/***/ 22401:
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
var formulas_exports = {};
__export(formulas_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(formulas_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "formulas",
  title: "Formulas and Functions"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "ViewPro/formulas",
  "id": "version-19-R6/ViewPro/formulas",
  "title": "Formulas and Functions",
  "description": "Using formulas",
  "source": "@site/versioned_docs/version-19-R6/ViewPro/formulas.md",
  "sourceDirName": "ViewPro",
  "slug": "/ViewPro/formulas",
  "permalink": "/docs/ViewPro/formulas",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "formulas",
    "title": "Formulas and Functions"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Configuring 4D View Pro Areas",
    "permalink": "/docs/ViewPro/configuring"
  },
  "next": {
    "title": "Method List",
    "permalink": "/docs/ViewPro/method-list"
  }
};
const assets = {};
const toc = [{
  value: "Using formulas",
  id: "using-formulas",
  level: 2
}, {
  value: "Entering formulas",
  id: "entering-formulas",
  level: 3
}, {
  value: "Operators and Operands",
  id: "operators-and-operands",
  level: 3
}, {
  value: "Values and operators",
  id: "values-and-operators",
  level: 2
}, {
  value: "Comparison operators",
  id: "comparison-operators",
  level: 3
}, {
  value: "Operator precedence",
  id: "operator-precedence",
  level: 3
}, {
  value: "Cell references",
  id: "cell-references",
  level: 2
}, {
  value: "Reference Notation",
  id: "reference-notation",
  level: 3
}, {
  value: "Built-in functions",
  id: "built-in-functions",
  level: 2
}, {
  value: "4D functions",
  id: "4d-functions",
  level: 2
}, {
  value: "Hello World example",
  id: "hello-world-example",
  level: 3
}, {
  value: "Parameters",
  id: "parameters",
  level: 3
}, {
  value: "Example",
  id: "example",
  level: 4
}, {
  value: "Compatibility",
  id: "compatibility",
  level: 2
}, {
  value: "Referencing fields using the virtual structure",
  id: "referencing-fields-using-the-virtual-structure",
  level: 3
}, {
  value: "Requirements",
  id: "requirements",
  level: 4
}, {
  value: "Calling a virtual field in a formula",
  id: "calling-a-virtual-field-in-a-formula",
  level: 4
}, {
  value: "Example",
  id: "example-1",
  level: 4
}, {
  value: "Declaring allowed methods",
  id: "declaring-allowed-methods",
  level: 3
}, {
  value: "Requirements",
  id: "requirements-1",
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
      "id": "using-formulas"
    }
  }, `Using formulas`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A spreadsheet formula is an expression that calculates the value of a cell.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "entering-formulas"
    }
  }, `Entering formulas`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To enter a formula in a 4D View Pro area:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Select the cell into which you will enter the formula or function.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Enter = (the equal sign).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Type the formula and hit the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Enter`), ` key.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When writing a formula, you can use different shortcuts:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `click on a cell to enter its reference in the formula:`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(14870)/* ["default"] */ .Z),
    width: "157",
    height: "78"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `type the first letter of a function to enter. A pop-up menu listing the available functions and references appears, allowing you to select the desired elements:`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(32569)/* ["default"] */ .Z),
    width: "260",
    height: "169"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also create named formulas that can be called via their name. To do so, enter these formulas using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ViewPro/method-list#vp-add-formula-name"
    }
  }, `VP ADD FORMULA NAME`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "operators-and-operands"
    }
  }, `Operators and Operands`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All formulas have operands and operators:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Operators`), `: see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#values-and-operators"
    }
  }, `Values and operators`), ` below.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Operands`), ` include several categories:`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#values-and-operators"
    }
  }, `values`), ` (5 data types are supported)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#cell-references"
    }
  }, `references to other cells`), ` (relative, absolute, mixed or by name)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#using-functions"
    }
  }, `standard spreadsheet functions`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#4d-functions"
    }
  }, `4D functions`), ` based upon 4D formulas and providing access to 4D variables, fields, methods, commands, or expressions.`)))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "values-and-operators"
    }
  }, `Values and operators`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D View Pro supports five types of data. For each data type, specific literal values and operators are supported.`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data types`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Values`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Operators`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
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
      "href": "/docs/Concepts/number"
    }
  }, `Number`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1.2`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `1.2 E3`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `1.2E-3`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `10.3x`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `+ (addition)`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `- (subtraction)`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `* (multiplication)`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `/ (division)`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `^ (exponent, the number of times to multiply a number by itself)`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `% (percentage -- divide the number before the operator by one hundred)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/Concepts/date"
    }
  }, `Date`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `10/24/2017`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `+ (date + number of days -> date)`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `+ (date + time -> date + time of day)`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `- (date - number of days -> date)`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `- (date - date -> number of days between the two)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/Concepts/time"
    }
  }, `Time`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `10:12:10`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Duration operators: + (addition)`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `- (subtraction)`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `(duration`), ` number -> duration)`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), `/ (duration / number -> duration)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/Concepts/string"
    }
  }, `String`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `'Sophie' or "Sophie"`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `& (concatenation)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/Concepts/boolean"
    }
  }, `Boolean`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `TRUE or FALSE`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-`)))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "comparison-operators"
    }
  }, `Comparison operators`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following operators can be used with two operands of the same type:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Operator`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Comparison`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `=`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `equal to`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `<>`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `different than`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `>`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `greater than`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `<`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `less than`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `>=`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `greater than or equal to`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `<=`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `less than or equal to`)))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "operator-precedence"
    }
  }, `Operator precedence`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `List of operators from most to least important:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Operator`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `()`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Parenthesis (for grouping)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `-`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Negate`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `+`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Plus`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `%`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Percent`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }, `Exponent`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `* and /`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Multiply and divide`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `+ and -`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Add and Subtract`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `&`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Concatenate`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `=  > < >= <= <>`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Compare`)))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "cell-references"
    }
  }, `Cell references`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Formulas often refer to other cells by cell addresses. You can copy these formulas into other cells. For example, the following formula, entered in cell C8, adds the values in the two cells above it and displays the result.`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `= C6 + C7
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This formula refers to cells C6 and C7. That is, 4D View Pro is instructed to refer to these other cells for values to use in the formula.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you copy or move these formulas to new locations, each cell address in that formula will either change or stay the same, depending on how it is typed.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A reference that changes is called a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `relative reference`), `, and refers to a cell by how far left/right and up/down it is from the cell with the formula.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A reference that always points to a particular cell is called an `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `absolute reference`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You can also create a mixed reference which always points to a fixed row or column.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "reference-notation"
    }
  }, `Reference Notation`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you use only cell coordinates, for example, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `C5`), `, 4D View Pro interprets the reference as relative. You may make the reference an absolute reference by putting a dollar sign in front of the letter and the number, as in `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$C$5`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can mix absolute and relative references by inserting a dollar sign in front of the letter or the number alone, for example, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$C5`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `C$5`), `. A mixed reference allows you to specify either the row or the column as absolute, while allowing the other portion of the address to refer relatively.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A convenient, fast and accurate way to specify an absolute reference is to name the cell and use that name in place of the cell address. A reference to a named cell is always absolute. You can create or modify named cells or named cell ranges using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ViewPro/method-list#vp-add-range-name"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `VP ADD RANGE NAME`)), ` method.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following table shows the effect of the different notations:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type of reference`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `C5`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Relative`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Reference is to the relative location of cell C5, depending on the location of the cell in which the reference is first used`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$C$5`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Absolute`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Reference is absolute. Will always refer to cell C5 no matter where it is used.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$C5`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Mixed`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Reference is always to column C, but the row reference is relative to the location of the cell in which the reference is first used.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `C$5`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Mixed`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Reference is always to row 5, but the column reference is relative to the location of the cell in which the reference is first used`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Cell name`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Absolute`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Reference is absolute. Will always refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ViewPro/method-list#vp-add-range-name"
    }
  }, `named cell or range`), ` no matter where the reference is used.`)))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "built-in-functions"
    }
  }, `Built-in functions`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Spreadsheet functions are preset formulas used to calculate cell values. When you type the first letter of the function to enter, a pop-up menu listing the available functions and references appears, allowing you to select the desired elements:  `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(93687)/* ["default"] */ .Z),
    width: "297",
    height: "187"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://www.grapecity.com/spreadjs/docs/v14/online/FormulaFunctions.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `SpreadJS's extented list of functions`)), ` for details and examples.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4d-functions"
    }
  }, `4D functions`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D View Pro allows you to define and call `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `4D custom functions`), `, which execute `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/API/FunctionClass"
    }
  }, `4D formulas`), `. Using 4D custom functions extends the possibilities of your 4D View Pro documents and allows powerful interactions with the 4D database.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D custom functions provide access, from within your 4D View Pro formulas, to:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `4D process variables,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `fields,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `project methods,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `4D language commands,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `or any valid 4D expression.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D custom functions can receive `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#parameters"
    }
  }, `parameters`), ` from the 4D View Pro area, and return values.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You declare all your functions using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ViewPro/method-list#vp-set-custom-functions"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `VP SET CUSTOM FUNCTIONS`)), ` method. Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `o:=New object

//Name of the function in 4D View Pro: "DRIVERS_LICENCE"
$o.DRIVERS_LICENCE:=New object

//process variable
$o.DRIVERS_LICENCE.formula:=Formula(DriverLicence)

//table field
$o.DRIVERS_LICENCE.formula:=Formula([Users]DriverLicence)

//project method
$o.DRIVERS_LICENCE.formula:=Formula(DriverLicenceState)

//4D command
$o.DRIVERS_LICENCE:=Formula(Choose(DriverLicence; "Obtained"; "Failed"))

//4D expression and parameter
$o.DRIVERS_LICENCE.formula:=Formula(ds.Users.get($1).DriverLicence)
$o.DRIVERS_LICENCE.parameters:=New collection
$o.DRIVERS_LICENCE.parameters.push(New object("name"; "ID"; "type"; Is longint))
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `See also`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://blog.4d.com/4d-view-pro-use-4d-formulas-in-your-spreadsheet/"
    }
  }, `4D View Pro: Use 4D formulas in your spreadsheet (blog post)`))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "hello-world-example"
    }
  }, `Hello World example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `We want to print "Hello World" in a 4D View Pro area cell using a 4D project method:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Create a "myMethod" project method with the following code:  `)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` #DECLARE->$hw Text
 $hw:="Hello World"

`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 2
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Execute the following code before opening any form that contains a 4D View Pro area:`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  Case of
    :(Form event code=On Load)
       var $o : Object
       $o:=New object
  // Define "vpHello" function from the "myMethod" method
       $o.vpHello:=New object
       $o.vpHello.formula:=Formula(myMethod)
       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)
 End case
`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 3
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Edit the content of a cell in a 4D View Pro area and type:  `), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(27732)/* ["default"] */ .Z),
    width: "164",
    height: "48"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `"myMethod" is then called by 4D and the cell displays:`), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(75538)/* ["default"] */ .Z),
    width: "165",
    height: "46"
  })))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "parameters"
    }
  }, `Parameters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Parameters can be passed to 4D functions that call project methods using the following syntax:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `=METHODNAME(param1,param2,...,paramN)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `These parameters are received in `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `methodName`), ` in $1, $2...$N.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that the ( ) are mandatory, even if no parameters are passed:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `=METHODWITHOUTNAME()
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can declare the name, type, and number of parameters through the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `parameters`), ` collection of the function you declared using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ViewPro/method-list#vp-set-custom-functions"
    }
  }, `VP SET CUSTOM FUNCTIONS`), ` method. Optionally, you can control the number of parameters passed by the user through `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `minParams`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `maxParams`), ` properties.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information on supported incoming parameter types, please refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ViewPro/method-list#vp-set-custom-functions"
    }
  }, `VP SET CUSTOM FUNCTIONS`), ` method description.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If you do not declare parameters, values can be sequentially passed to methods (they will be received in $1, $2...) and their type will be automatically converted. Dates in `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `jstype`), ` will be passed as `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/object"
    }
  }, `object`), ` in 4D code with two properties:
|Property| Type| Description|
|---|---|---|
|value| Date| Date value|
|time |Real| Time in seconds|`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D project methods can also return values in the 4D View Pro cell formula via $0. The following data types are supported for returned parameters:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/string"
    }
  }, `text`), ` (converted to string in 4D View Pro)`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/number"
    }
  }, `real`), `/`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/number"
    }
  }, `longint`), ` (converted to number in 4D View Pro)`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/date"
    }
  }, `date`), ` (converted to JS Date type in 4D View Pro - hour, minute, sec = 0)`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/time"
    }
  }, `time`), ` (converted to JS Date type in 4D View Pro - date in base date, i.e. 12/30/1899)`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/boolean"
    }
  }, `boolean`), ` (converted to bool in 4D View Pro)`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/picture"
    }
  }, `picture`), ` (jpg,png,gif,bmp,svg other types converted into png) creates a URI (data:image/png;base64,xxxx) and then used as the background in 4D View Pro in the cell where the formula is executed`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Concepts/object"
    }
  }, `object`), ` with the following two properties (allowing passing a date and time):`), /* @__PURE__ */ (0, import_react2.mdx)("table", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Property`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `value`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Date`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Date value`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `time`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Real`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Time in seconds`)))))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the 4D method returns nothing, an empty string is automatically returned.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An error is returned in the 4D View Pro cell if:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the 4D method returns another type other than those listed above,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `an error occurred during 4D method execution (when user clicks on "abort" button).`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $o : Object

$o.BIRTH_INFORMATION:=New object
$o.BIRTH_INFORMATION.formula:=Formula(BirthInformation)
$o.BIRTH_INFORMATION.parameters:=New collection
$o.BIRTH_INFORMATION.parameters.push(New object("name";"First name";"type";Is text))
$o.BIRTH_INFORMATION.parameters.push(New object("name";"Birthday";"type";Is date))
$o.BIRTH_INFORMATION.parameters.push(New object("name";"Time of birth";"type";Is time))
$o.BIRTH_INFORMATION.summary:="Returns a formatted string from given information"

VP SET CUSTOM FUNCTIONS("ViewProArea"; $o)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(44079)/* ["default"] */ .Z),
    width: "481",
    height: "356"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "compatibility"
    }
  }, `Compatibility`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Alternate solutions are available to declare fields or methods as functions in your 4D View Pro areas. These solutions are maintained for compatibility reasons and can be used in specific cases. However, using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ViewPro/method-list#vp-set-custom-functions"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `VP SET CUSTOM FUNCTIONS`)), ` method is recommended.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "referencing-fields-using-the-virtual-structure"
    }
  }, `Referencing fields using the virtual structure`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D View Pro allows you to reference 4D fields using the virtual structure of the database, i.e. declared through the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page601.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `SET TABLE TITLES`)), ` and/or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page602.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `SET FIELD TITLES`)), ` commands with the `, `*`, ` parameter. This alternate solution could be useful if your application already relies on a virtual structure (otherwise, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#4d-functions"
    }
  }, `using `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `VP SET CUSTOM FUNCTIONS`)), ` is recommended).`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `WARNING:`), ` You cannot use the virtual structure and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `VP SET CUSTOM FUNCTIONS`), ` simultaneously. As soon as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `VP SET CUSTOM FUNCTIONS`), ` is called, the functions based upon `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET TABLE TITLES`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET FIELD TITLES`), ` commands are ignored in the 4D View Pro area.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "requirements"
    }
  }, `Requirements`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The field must belong to the virtual structure of the database, i.e. it must be declared through the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page601.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `SET TABLE TITLES`)), ` and/or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page602.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `SET FIELD TITLES`)), ` commands with the `, `*`, ` parameter (see example),`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Table and field names must be ECMA compliant (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://www.ecma-international.org/ecma-262/5.1/#sec-7.6"
    }
  }, `ECMA Script standard`), `),`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The field type must be supported by 4D View Pro (see above).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An error is returned in the 4D View Pro cell if the formula calls a field which is not compliant.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "calling-a-virtual-field-in-a-formula"
    }
  }, `Calling a virtual field in a formula`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To insert a reference to a virtual field in a formula, enter the field with the following syntax:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `TABLENAME_FIELDNAME()
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, if you declared the "Name" field of the "People" table in the virtual structure, you can call the following functions:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `=PEOPLE_NAME()
=LEN(PEOPLE_NAME())
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If a field has the same name as a `, `[4D method]`, `, it takes priority over the method.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-1"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `We want to print the name of a person in a 4D View Pro area cell using a 4D virtual field:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Create an "Employee" table with a "L_Name" field:  `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(70237)/* ["default"] */ .Z),
    width: "157",
    height: "150"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 2
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Execute the following code to initialize a virtual structure:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `ARRAY TEXT($tableTitles;1)
ARRAY LONGINT($tableNum;1)
$tableTitles{1}:="Emp"
$tableNum{1}:=2
SET TABLE TITLES($tableTitles;$tableNum;*)
 
ARRAY TEXT($fieldTitles;1)
ARRAY LONGINT($fieldNum;1)
$fieldTitles{1}:="Name"
$fieldNum{1}:=2 //last name
SET FIELD TITLES([Employee];$fieldTitles;$fieldNum;*)
`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Edit the content of a cell in the 4D View Pro area and enter "=e":`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(41169)/* ["default"] */ .Z),
    width: "374",
    height: "135"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 4
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Select EMP_NAME (use the Tab key) and enter the closing ).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(79202)/* ["default"] */ .Z),
    width: "249",
    height: "77"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 5
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Validate the field to display the name of the current employee:`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(17494)/* ["default"] */ .Z),
    width: "280",
    height: "73"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The `, `[`, `Employee] table must have a current record.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "declaring-allowed-methods"
    }
  }, `Declaring allowed methods`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can call directly 4D project methods from within your 4D View Pro formulas. For security reasons, you must declare explicitly methods that can be called by the user with the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ViewPro/method-list#vp-set-allowed-methods"
    }
  }, `VP SET ALLOWED METHODS`), ` method.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "requirements-1"
    }
  }, `Requirements`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To be called in a 4D View Pro formula, a project method must be:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Allowed`), `: it was explicitly declared using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ViewPro/method-list#vp-set-allowed-methods"
    }
  }, `VP SET ALLOWED METHODS`), ` method.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Runnable`), `: it belongs to the host project or a loaded component with the "Shared by components and host project" option enabled (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/Concepts/components#sharing-of-project-methods"
    }
  }, `Sharing of project methods`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Not in conflict`), ` with an existing 4D View Pro spreadsheet function: if you call a project method with the same name as a 4D View Pro built-in function, the function is called.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If neither the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ViewPro/method-list#vp-set-custom-functions"
    }
  }, `VP SET CUSTOM FUNCTIONS`), ` nor the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ViewPro/method-list#vp-set-allowed-methods"
    }
  }, `VP SET ALLOWED METHODS`), ` method has been executed during the session, 4D View Pro custom functions rely on allowed methods defined by 4D's generic `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET ALLOWED METHODS`), ` command. In this case, the project method names must comply with JavaScript Identifier Grammar (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://www.ecma-international.org/ecma-262/5.1/#sec-7.6"
    }
  }, `ECMA Script standard`), `). The global filtering option in the Settings dialog box (see `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Data Access`), `) is ignored in all cases.`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 32569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 14870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAABOCAIAAAC17oMAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAhXSURBVHhe7ZztS1RZHMfvH1AQvlto8UUvZN8tvZmgIMUe3JosxJg20XXBHigsJHqR7q7mqx0h0wW3lMgMyWq3dJKVNHxKHdMmRh1xbKzGlWZKtyZr1TFN3a/+bpfrOA8O68Nx+n34MZ177jlH8XN/54GuSjN+6e7ulkuMMCxGCntde7DX0IS9hibsNTRhr6HJ//UqSfOCWV2C0iFBvi88BuIQKmRJPggiXzmECv/wPLxmCEoHe10zBKUjwP3FDMGsJIs0wl7XGOw1NGGvIjI1NVVXV7d79+7s7Gy5amZmcnLy8uXLERER69evP3jwoM1mQ+X09HR5eblGo5EkKTo6urW1lRqzV+Fwu90ZGRk3btw4d+6c2mtZWVlCQsKrV68guKSkRKfTuVyu5ubmXbt2PX36FI/CgwcPULbb7WjMXsUFUhWvHz58SExMrKmpoUuHw4Fsbm9vh3skMVVSG4PBgDJ7FRe116GhIcy9VquVLkdHR1NSUm7fvo3PxsZGqsScnJmZmZubizJ7FRe1197eXsyx+KTLsbGxY8eOIVORtZiKqRIoXdiruCiSAPL1wIEDnZ2ddEleKysrka/K5AzQnqZl9iouaq/Dw8Px8fHq9VWr1ZpMprS0NI/1ldqwV3FRe8XamZeXl5ycjMQdHx8vLCxEviJrKyoqYmJi+vr6sB/GjgnuBwcH0Z69CgfNsTiPKuj1etSPjIxkZWWFh4eHhYUdP34cBx5UehxqlY0Vew1NlsArDaEEs7oEpYO9rhmC0uHXa5Y0L+aPy7HSMV+HLMkHft9vmj8Qh1AhS/JBMPnKIVLIknwQhFfnv06OVQwPHbIkH7DXNRMeOmRJPgh0m40KFouRCtjrGgv2GprBXoWLgXcDV25d0ezQSOulnXE7q5qqlHr97/pN325a99W6fYf3tXS1oNLxwXH1j6ubt29G423fbatsqKTG7FW4aOpoOpt91tJvgciLVy5GxUZ1/92N+kull+J+iOt43oH6/Kv5sQmx1pdWQ51hu3Z7c2fzy/cvb1XdQrmtpw2N2avQAcdQhU/bK1v8j/E3/7pJ9eZn5sh9kUjl1PRUJDFVUptrd66hzF6FDqQjptxeRy/SF4WH5odU/3zo+eFjhwtvFOLz7oO7VIk5+UzWmawLWSizV3Hj2eCzxBOJmH5RVhKXbr345wVuIVORtXBPlQhM4AgU2KuggUU049cMBAq4RL7GHIypba+lu+S15G4J8lWZnBGQStMyexUxoA0z6qmMU0hZqsFUrP1eq15fsVW+33L/6JmjHusrtWGvwgVcpqSlwCvsKpVYO7MvZutSdEjc/rf9OZdykK9oUPxnMTbMRosR+2HsmOC+y96F9uxVuMAZFCdUnEeVuFB0AfXwDdkbv9m44esNSSeTcOBBpcehVtlYLZ3XTAnPFIcgAR2I6TlkSd7w6RXdaAjpFznwBHGsYigiKD59+jQ1NeVLsHevaIo+s/1/lqSfJCljNjBdcKxiSOmSHHM63G73x48fJycnya5s7jNevJLUiYmJuN/cHCLH+/fvx8bGYGqhWi+vyVgsls7OzidPnniMwiFa1NfXG41GmIIvWJP9zeElXyEfCY5ngTrLtYxIkJq+vj6n0wlT8AVr8r05PL0inbEgY+5++/ataF5n33Rl5iA1HR0ddrsdpuAL1tRTsXevmLWHhobYq7CQmra2NpvNBlPwFdgrtlijo6OvX79mr8JCalpaWqxWK0zBF6wF9joyMsJeRYbUNDU19fT0wBR8sddQYHm9GgwG/KyJ6Ojo2tpaGnpgYOD06dNhYWHh4eF6vR6jUfuFYCOXlpZGI6D9kSNH0Bf1GAejYUzUazSa8vJy1KBMvZjl9VpaWkq/XI1NdnV1dVRUVH9/P+pzc3NrampQicu9e/eiGbUHLpcrKSkJG3S6pF/1pQYonz9/Hpoh+82bN+np6djs0chbt25FF/aqsEJeUYaJ2NhYk8lEtxTUv3MP0OzQoUMef/5EEd/c3BwfHz88PEyXhMPhiIuLQxf2qrA0XrGfxiSJH6tCamrq+Pi4Ol8xJyckJCAdaRyCtNEflCL8eMUXRY7m5eWpvz80KCoqOnnyJO7i68q1XzxL49UX8EGaAZbSgoICaJDvzYE1UqfT4YCFMhZaueln8HC8e/cOXuVrScJM3tDQQN+f8jBFRkaazWZUojw3KrOC87DT6UxOTlZnG77k/v378UmXhJ98RdIbjUYspY8fP6a7AJWtra1btmypqKhgrwpL4zXgPEx91ZdYaPfs2QNPdEvB//rqcalAizS+rnz9xbM0Xn2hFonJFqcUytfGxsYdO3Ys3EMBP/thdGxvb8esi3y12Ww5OTmDg4OoRFmr1XK+qller+rza0RERH5+Pjy53e4TJ07ItXNg1aS/SbQQ9fkVKIdgjIPRMCYqcX4tKyvDd4Wy3O2LZ3m9rjDsVYG9hibL6RU/5eLi2QI+F1P2SjCDsFeF5fQKfAjwWfaKr8YLyuxVIbBX+X2Yz9DLTdiRYk8b2CuzSpCa69ev37t3D6bgy+MVJ+/5qv5/dQ5hI7j/V/d4D4ZD2AjuPRi0oPfW7Hb7nTt3MIlXV1dXVlbitMqIQEFBAYzASxDvrYGpz++ZOp3OqqoqdMZzgZTHQIwIlJaWwgi8BPGeKYB2TNZIbZfLVV9fjycCyY55HFsvRgQwd8IIvEAqHMGUx+IKvHuF/ImJCXR49OgR0hwzOBZnRhCwAYYRePH3exzyv/MhtXgKzGYz5m50xo4LhyRGBEwmE4zAC6ZfOFooFXj3CtAUdHV1YUEG6M8IAo6qJIWMAtmZCp9eCZxwqScjDhaLhQqyJG8E9iqXGGEILGVm5j+7mqmUTTM1DwAAAABJRU5ErkJggg==");

/***/ }),

/***/ 44079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/params-89752a28079fce74367c8ac8d6dc0fa3.png");

/***/ }),

/***/ 70237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/vpFieldMeth1-db36fbbfd24f5523dbeecc55e74608b2.PNG");

/***/ }),

/***/ 41169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 79202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 17494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABJCAYAAADmKzlqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA/XSURBVHhe7Z33cxTnGcfzq3/zf+BJMnjsTGaScSa2J/HEJWODsZ2MGwHTbAzyGBtDKMIYiAV2ZNOLKRHdpg14QPQmRJNEEUiAkJB0vZ9Op14pwk/2++j2OEkrcUWnXUnPd+Yzd7e3dyft7X7ufd99931/Rb2cwowUSskoDD1KPPx+KSm0vvfeUiKR9FHCgqmrqxMEQdAk3ohgBEF4JPFGBCMIwiOJN10E4/P5yWK1CYIghIk3XQRTUHiT9mUepUNHTgmCIDDxRlMw53MuUXNLiyAIAhNvNAWTm5cfWiqRSCTxRwQjkUiSFhGMRCJJWkQwEokkaRHBSCSSpEUEI5FIkhYRjEQiSVpEMBKJJGlJSDC//PILPXjwQBCEAU68SUgwLS0t5HQ6BUEY4MSbhATT3NxMNpuNX9fY2Cj0ALZRRUUFf1l2u12IEo/HQ1VVVZrbVNCmoaGBAoFArx6X8SZhwWAnuH//fmiJpLtgG1VXV5Pb7e7y6yB0D6Tc1NQU2oqSaIIqTW1tLd27dy+0RL+IYJKYtrY2bqdC7t2/R8GqoAgmRvwVfmpsiv8XdDAGgqmuqRbBDORALPX19XT37l1+LIKJD7/fTw2NDbwNJdFFFczde+37np4RwSQhKLlALmg/UIv3+DUJBAPkcrs0DyRBG5/fJ4KJMW0P2ihYHQz/uOkZEUwvB9sCcvF6veRwOMINZBBMRbBCBBMjXr+X6hvqeRtKogsEU1ldKYIZaFHl4vP5eLuASMH4K/0imBjx+rxU1xD/mLCDMSyYqkq6c/dOaIl+EcH0UtRqUaRcIgWD+rAv4COXyziCsSslrIKSG5R19QIdvZxNp5Tb2+YyXq61vh54fB6qqzeGYO7cucNtQkVFRR0wm81UU1MTbtDXO9gXUR0XwQyQqA26qBZFyqWzYLwBr6EEY7KaaXHmRnol/SN6avab9LdvxtKhi1m8XGt9PXD73FRbX8vbUO+ggX7Tpk302muv0fDhw8N89tlndOzYMRaQEQLB+IN+EcxASGSDLtpcuhWMUh/2+D2GEszlWwX0xdZv6YVvxrBcnkwdTuuO7aDC20Wa6+uB2+ummroa3oZ6B4LZsWMHTZkyha5evUoWi4Vu3LhBP/30E02fPp0KCgoM0WcH+yRKy613WkNL9IsIJoGobS5qg25nuQBVMPg1cfvd5HRpH0h6sC/nGE3431c06ocZNGv7YvrdnH/QjJ8WUfa1XM319cDlcRlKMLt27aJZs2ZxVRjfP46B8+fPU2pqKh05coQ7U+odCAalZRFMP44ql85tLp2JFIzLp5ReDCAYtLGUW8y08Oc1NHbdbPp6zyradfYgvZz+IY1YNY12nztEVptV87V9DQRTXaf/QYv0JJi5c+dSdnY296DVOxCMJ+ARwfTXqNWiR8kFRArG6VMOGgMIxqLI41LRNXpv5VQapwhmS9bPlHP9Mk3aMJ9e/u+HtCRzo1JNuqn52j7H46Sq2irehnpHrSJNnjyZLly4wA28ly5doi1bttCXX37JVSYjtMPcb7tP7go3tdyJf7qR3ooIJsb01KCrhSqY1rutZPfaDSGY26Yy2nv+KL2wcAxN3DCPDuSdpBtlxbTi8FZ6Lm0kTciYS/tzT2i+tq9xuB2GEgwaeV999VUaOnQoDRs2jBk1ahQtXbqUq0f48dE7EIzL7xLB9LeoJZfuGnS1iBSMzWMzhGCuldygr3Yt58bdtD2rldLMVSqzmPhU9bDFKfTWssm0+siPSknHovn6vsTutlOwJsjbUO+oJZjPP/+cLl++TOXl5WS1WrmKtGzZMlq1ahWPLqC3ZCAYlJZbWkUw/Sb4Hx/VoKtFpGCsbis5nPr2MbHabdzv5e0VU+gPc9+mYYsm0cdKieXTTWlcXXpm/rv07Nf/otQdi6nAANUku8tOlTWVvA31jlYbDIJ9Yu/evTR16lS6fv267j1oIRiHz0HNrc2hJfpFBBNFVLlE0+bSmbBg7rSSxW3RXTDF5bdpR3Ym/Wn+e/S6UlqBXKb9mB7m/VXT6PkFo2jsulQu0Wi9R19ic9koUB3gbah3ehLMnj17aNq0aYYRDKrjIph+kFgadLWIFIzZZdZVMCh55dy4Qgv3rqEhs16nBT+vodyb+R3WwRmkd1Z+wSWblYe3cYlHz7/Z6rRSRXUFb0O9o1aR0LEuNzeXiouLqaysjM8eoYq0Zs0a/s6NUEVCdVwEY/DE2qCrhSoYNLiZnCZdD1acPdp59iC9o1SPnlFKMNuz99MtpUQTuU6eIpzJm9O4sXfs2lS6UXqLbIpkItfpS1gwVcYRzObNm7mRN5KRI0dyIy+On0TGr+2t4Hi0eqzU1KJ/pz8RTDdRSy6xtrl0JlIw5Y5y3UswJaZSlsjZgjy+b1P+xsh10LB7pbiQzhVe5FPZkIuuUnRayF/l522od1D1wfCdJpOpA2jYxch7epdc1GDsIVTHRTAGDf6f3pALiBRMmb2M7M6OB7TQM2aHmXxBH29DSXSBYFAdF8EYNPh/IAb8WiWK2vEK9eFSe6kIJkYgGG/Qy9tQEl0gGFTHG1vaf9z0jAimD1LVWEvXrLfo0JWTdOrqecq6liNEybH8bDp76yKZK5yGGQ7B6IFgyp3lIpjBkq05mfTbmUPpN0JcYNu9vvQTuqscOJJHZ0AJBg1ctXW1PKwhU1/PAwSptypYRwVXxzK17VTXVvMgxaCqRqlahEAPzg5UB3koQKaq/TZQFQiDISlxxgFgPAymsh1fpS+Mt9LbfhvwhsHFYUyFh6/jiMRV4eKu18DpV4ruIRx+B3dosvvsfKveZ7zttzavjZYe2US/nvGakAAvpH1AJ7JO8ilhoWfOnj9LReYiyrmYo/l8PMSbhAWDrtIY1hCDM6OviBZ4vgte5aD2Kgd0JzD+B+PpGVxlG8bdjtOtHPjdgGtawri6gh6jYZwdsTltXcDpU8YRIvK+gsVhCbPk4EY+SIakvk7Ljm+j7XmHhCgZuW4mbztchFlaXka4oFDoGbPFTCVlJWQymzSfj4d4k7Bg8OE406LVQCe0s/zgFj5IMGqcSSn1SKJPWuZa3nZDl6RIFSnKYPxndABUz2DqGRFMHyCCiT8imNgjghlkiGDijwgm9ohgBhkimPgjgok9IphBhggm/ohgYo8IZpBhVMHg2prS0lK+KtgIO6NWRDCxRwSTJBwK5VYzXblVwMMSYOS2zhfz6YGWYNA5EUMs4uAGGB0NF8xh50g02LHQPSAYDIYvwMPEYPi8lpaHo5zh+169ejUtWbKEv0MjRgQTe0QwSQJX/h69lM2DJv35PyN4lLaismKyO/SVjJZgMEPghg0b6LHHHmOGDBlC8+bN43mTEgm60584cYIHP1qxYgV3eMQyDDOAz8N8PmpEMAMzIpgkkF98ndL3rac3l35Kv5/zTx4OcmLGPLppQMHgIkgMXDRhwgRav349ZWVl0blz52j//v20b98+vkAyketuUFLB94LxS1BSwntBLvisK1euhNYSwQzUiGB6Gczhg+EdUXLBiPh/T/+Ink8baVjBoPqydu1aGjduHN28eZNaW1t5p4AQUF2CFLBtL168yOJBqWPRokU0c+ZMHjUNU2Vgu0MYs2fPpu+//57OnDnD74NgUHI8xuvR0xrrvfHGG/TKK6/w4Ejp6el8iUcgEGDBLFy4kKc+Xbx4MQ8HiWX5+fmGuMZMBBN7RDC9DEZqO1OQS/N2r+QJxCCWF78dZ1jBoISxc+dOmjRpEo/xWllZ2WWwIkzghQN9zpw5lJGRwTMHjh49mqfIwDKUSDDZ1/jx4+n9999nSWCeHpRWMC4sSiWoFt2+fZsF9NJLL9Gzzz7L02zgvdQ2H1SjMBUqbiGrMWPG8GdgCEgjlGpEMLFHBJMk8HcUlZXQtG3phhYMdgCM6YoSybvvvkuHDx9mEUA0eA6BYL777jsaO3Ysl3ZQOsH3g6EZMeH6xIkTuRSCnQjVLUgDIsKQjapgMGeyWt3qroqEUgs+AzLDZ6DNBrLBCPmHDh0KralfRDCxRwSTJPqLYBCUWLDt0LD7xBNP0FNPPUXz588PN/JCMDjQIQqsh0AUmZmZLBlICTLBsry8PBYFhISzRJiEPVrBQCyofkV+BsSyYMECnmRM74hgYo8IJkn0J8EgOPgxng4EgYN5xowZPAUpJIPSDASzfPlyfg81Bw8epJUrV/KZIjVok4FQ0LaC7yRWwWBdbDs1OTk5PInYxo0bQ0v0iwgm9ohgkkR/E0xkIBrIBNWVwsJCPo2tl2Awa+G6detEMP00Ipgk0V8Egw5w+FshETVYhknUU1JSuLE2GYLB6zBpuxoRzMCMCKaXwee39+AtpFP552nShvn014WjafSaWXQy/xxdLb5OJuV5vabf6CwYCGD37t083ajZbGZwOhoHOtph0P6CvjK9KRg0BKelpdHWrVv5/dCgi969IpiBFxFMLwN57Ms5TkMXTaI/znuHnkwdzuO4YvZCdLj7YM1MOpB3kvvLaL0+2XQWDBpijx8/TiNGjKDHH3+cefrpp7n9BfPsoPFWbeTtDcEgkNj06dO5xzBOV0MiGFVQBDPwIoLpZVAFulVeQscun2GRZOaeCIPHWVdzeAZDvf7OzoJBiQJ9YdDJ7vTp0wxOW0MCamc5dHJDYy9ery5DUJXCcpRw1OB7w3pox8HZqYaGBn6MapY60yDeA/LC50BIeA3kg859nT8Dp6rRWQ8C0jsimNgjghlkRNPIK9HO8WvnaNGBjbT3yglqM8C0rP0hIphBhggmtjS0NtHxohw6evMC7Tx3kLafPcD3QU1TfWgtSXcRwQwyRDCxpcxn43Y0bLPOXLMXh9aSdBcRzCBDBBNbRDCJZUAJBlfr4qrcymAl9z4NVAaYyPt4viJQEcYf8LdT0Y6vwtc+r5KC1+/tgMfvYfi+T7kfgudO8rXj8ro64PQqBzbwOMnhcXTA7rGT3d0Vm8sWxuqydsDitITBXMlmZzsmh0kbu4nK7eVhFh3I4IPjtzOH0Xs//JvGb5gjdMOKI9voTEEeDelGMEcuneYfNKF70NhfUlLCx6bW8/EQbxIWDC64a2pqopbWloe0dLqv0NzS3IWm5qYuNDY3PqRJm4amBmpoVMBt6H59Y30X6hqV/6kTtQ21TF3Dw/uR1NTXdKG6vrqduhDK/aq6qh4J1gYpWKeg3P5wcrvmwSJ0Zcq2b+lSSUG3JZjT13P5x0voHlwlj4tncSZQ6/l4iDcJC0bmpn50sksu00cZX9Fb6Z/Qxxvn0SdbFwjdsC3ngFSREsyAqiKJYKIL+q9gxDr0MZH0HEvARS+mj6e/fDOanksbyeA+KHKVh9aSdBcRzCCMCCb6tD1oo6rGWqbEUk63TKXhx/fbZF97VEQwgzAimPiC4UXRliCJPiKYQRgRTHwRwcQe4wiG6P+W+xh+6pcS+wAAAABJRU5ErkJggg==");

/***/ }),

/***/ 93687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 27732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 75538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;