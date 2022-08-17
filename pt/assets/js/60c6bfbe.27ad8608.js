exports.id = 86527;
exports.ids = [86527];
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

/***/ 82264:
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
var FunctionClass_exports = {};
__export(FunctionClass_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(FunctionClass_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "FunctionClass",
  title: "Formula"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "API/FunctionClass",
  "id": "version-19-R6/API/FunctionClass",
  "title": "Formula",
  "description": "The Formula and Formula from string commands allow you to create native 4D.Function objects to execute any 4D expression or code expressed as text.",
  "source": "@site/versioned_docs/version-19-R6/API/FunctionClass.md",
  "sourceDirName": "API",
  "slug": "/API/FunctionClass",
  "permalink": "/docs/pt/API/FunctionClass",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "FunctionClass",
    "title": "Formula"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Folder",
    "permalink": "/docs/pt/API/FolderClass"
  },
  "next": {
    "title": "HTTPRequest",
    "permalink": "/docs/pt/API/HTTPRequestClass"
  }
};
const assets = {};
const toc = [{
  value: "Formula Objects",
  id: "formula-objects",
  level: 3
}, {
  value: "Passing parameters",
  id: "passing-parameters",
  level: 4
}, {
  value: "Parameters to a single method",
  id: "parameters-to-a-single-method",
  level: 4
}, {
  value: "About 4D.Function objects",
  id: "about-4dfunction-objects",
  level: 3
}, {
  value: "Summary",
  id: "summary",
  level: 3
}, {
  value: "Formula",
  id: "formula",
  level: 2
}, {
  value: "Description",
  id: "description",
  level: 4
}, {
  value: "Example 1",
  id: "example-1",
  level: 4
}, {
  value: "Example 2",
  id: "example-2",
  level: 4
}, {
  value: "Example 3",
  id: "example-3",
  level: 4
}, {
  value: "Example 4",
  id: "example-4",
  level: 4
}, {
  value: "Example 5",
  id: "example-5",
  level: 4
}, {
  value: "Example 6",
  id: "example-6",
  level: 4
}, {
  value: "Formula from string",
  id: "formula-from-string",
  level: 2
}, {
  value: "Description",
  id: "description-1",
  level: 4
}, {
  value: "Example",
  id: "example",
  level: 4
}, {
  value: ".apply()",
  id: "apply",
  level: 2
}, {
  value: "Description",
  id: "description-2",
  level: 4
}, {
  value: "Example 1",
  id: "example-1-1",
  level: 4
}, {
  value: "Example 2",
  id: "example-2-1",
  level: 4
}, {
  value: ".call()",
  id: "call",
  level: 2
}, {
  value: "Description",
  id: "description-3",
  level: 4
}, {
  value: "Example 1",
  id: "example-1-2",
  level: 4
}, {
  value: "Example 2",
  id: "example-2-2",
  level: 4
}, {
  value: ".source",
  id: "source",
  level: 2
}, {
  value: "Description",
  id: "description-4",
  level: 4
}, {
  value: "Example",
  id: "example-7",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#formula"
    }
  }, `Formula`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#formula-from-string"
    }
  }, `Formula from string`), ` commands allow you to create native `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#about-4dfunction-objects"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `4D.Function`), ` objects`), ` to execute any 4D expression or code expressed as text.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "formula-objects"
    }
  }, `Formula Objects`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Formula objects can be encapsulated in object properties:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` var $f : 4D.Function
 $f:=New object
 $f.message:=Formula(ALERT("Hello world"))
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property is an "object function", i.e. a function which is bound to its parent object. To execute a function stored in an object property, use the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `()`), ` operator after the property name, such as:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $f.message() //displays "Hello world"
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Syntax with brackets is also supported:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $f["message"]() //displays "Hello world"
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that, even if it does not have parameters (see below), an object function to be executed must be called with ( ) parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $o:=$f.message //returns the formula object in $o
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also execute a function using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#apply"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `apply()`)), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#call"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `call()`)), ` functions:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $f.message.apply() //displays "Hello world"
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "passing-parameters"
    }
  }, `Passing parameters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can pass parameters to your formulas using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/Concepts/parameters#sequential-parameters"
    }
  }, `sequential parameter syntax`), ` based upon $1, $2...$n. For example, you can write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` var $f : Object
 $f:=New object
 $f.message:=Formula(ALERT("Hello "+$1))
 $f.message("John") //displays "Hello John"
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Or using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#call"
    }
  }, `.call()`), ` function:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` var $f : Object
 $f:=Formula($1+" "+$2)
 $text:=$f.call(Null;"Hello";"World") //returns "Hello World"
 $text:=$f.call(Null;"Welcome to";String(Year of(Current date))) //returns "Welcome to 2019" (for example)
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "parameters-to-a-single-method"
    }
  }, `Parameters to a single method`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more convenience, when the formula is made of a single project method, parameters can be omitted in the formula object initialization. They can just be passed when the formula is called. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` var $f : 4D.Function

 $f:=Formula(myMethod)
  //Writing Formula(myMethod($1;$2)) is not necessary
 $text:=$f.call(Null;"Hello";"World") //returns "Hello World"
 $text:=$f.call() //returns "How are you?"

  //myMethod
 #DECLARE ($param1 : Text; $param2 : Text)->$return : Text
 If(Count parameters=2)
    $return:=$param1+" "+$param2
 Else
    $return:="How are you?"
 End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Parameters are received within the method, in the order they are specified in the call.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "about-4dfunction-objects"
    }
  }, `About 4D.Function objects`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4D.Function`), ` object contains a piece of code that can be executed from an object, either using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `()`), ` operator, or using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#apply"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `apply()`)), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#call"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `call()`)), ` functions. 4D proposes three kinds of Function objects:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `native functions, i.e. built-in functions from various 4D classes such as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `collection.sort()`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `file.copyTo()`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `user functions, created in user `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/pt/Concepts/classes"
    }
  }, `classes`), ` using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/pt/Concepts/classes#function"
    }
  }, `Function keyword`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `formula functions, i.e. functions that can execute any 4D formula.  `)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "summary"
    }
  }, `Summary`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
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
      "href": "#apply"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#call"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "#source"
    }
  }), `\xA0`, `\xA0`, `\xA0`, `\xA0`)))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "formula"
    }
  }, `Formula`), /* @__PURE__ */ (0, import_react2.mdx)("details", null, /* @__PURE__ */ (0, import_react2.mdx)("summary", null, "History"), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Version`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Changes`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `v17 R6`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Renamed (New formula -> Formula)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `v17 R3`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Added`))))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Formula`), ` ( `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `formulaExp`), ` : Expression ) : 4D.Function`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Parameter`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `formulaExp`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Expression`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `->`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Formula to be returned as object`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Result`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `4D.Function`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `<-`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Native function encapsulating the formula`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Formula`), ` command `, `creates a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `4D Function`), ` object based upon the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `formulaExp`), ` expression`, `. `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `formulaExp`), ` can be as simple as a single value or complex, such as a project method with parameters.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Having a formula as an object allows it to be passed as a parameter (calculated attribute) to commands or methods or to be executed from various components without needing to declare them as "shared by components and host database". When called, the formula object is evaluated within the context of the database or component that created it.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The returned formula can be called with:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#call"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.call()`)), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#apply"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.apply()`)), ` methods, or`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `object notation syntax (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#formula-object"
    }
  }, `formula object`), `).`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` var $f : 4D.Function
 $f:=Formula(1+2)
 $o:=New object("myFormula";$f)

  //three different ways to call the formula
 $f.call($o) //returns 3
 $f.apply($o) //returns 3
 $o.myFormula() //returns 3
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can pass `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#passing-parameters"
    }
  }, `parameters`), ` to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Formula`), `, as seen below in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#example-4"
    }
  }, `example 4`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can specify the object on which the formula is executed, as seen in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#example-5"
    }
  }, `example 5`), `. The properties of the object can then be accessed via the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `This`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `formulaExp`), ` uses local variables, their values are copied and stored in the returned formula object when it is created. When executed, the formula uses these copied values rather than the current value of the local variables. Note that using arrays as local variables is not supported.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The object created by `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Formula`), ` can be saved, for example, in a database field or in a blob document.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-1"
    }
  }, `Example 1`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A simple formula:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` var $f : 4D.Function
 $f:=Formula(1+2)

 var $o : Object
 $o:=New object("f";$f)

 $result:=$o.f() // returns 3
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-2"
    }
  }, `Example 2`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A formula using local variables:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `

 $value:=10
 $o:=New object("f";Formula($value))
 $value:=20

 $result:=$o.f() // returns 10
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-3"
    }
  }, `Example 3`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A simple formula using parameters:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $o:=New object("f";Formula($1+$2))
 $result:=$o.f(10;20) //returns 30
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-4"
    }
  }, `Example 4`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A formula using a project method with parameters:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $o:=New object("f";Formula(myMethod))
 $result:=$o.f("param1";"param2") // equivalent to $result:=myMethod("param1";"param2")
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-5"
    }
  }, `Example 5`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `This`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $o:=New object("fullName";Formula(This.firstName+" "+This.lastName))
 $o.firstName:="John"
 $o.lastName:="Smith"
 $result:=$o.fullName() //returns "John Smith"
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-6"
    }
  }, `Example 6`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Calling a formula using object notation:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` var $feta; $robot : Object
 var $calc : 4D.Function
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

  //sets the formula to object properties
 $feta.calc:=$calc
 $robot.calc:=$calc

  //call the formula
 $feta.calc() // $feta={name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object Formula]"}
 $robot.calc() // $robot={name:Robot,price:543,quantity:2,total:1086,calc:"[object Formula]"}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "formula-from-string"
    }
  }, `Formula from string`), /* @__PURE__ */ (0, import_react2.mdx)("details", null, /* @__PURE__ */ (0, import_react2.mdx)("summary", null, "History"), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Version`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Changes`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `v17 R6`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Renamed New formula from string -> Formula from string`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `v17 R3`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Added`))))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Formula from string`), `( `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `formulaString`), ` : Text ) : 4D.Function`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Parameter`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `formulaString`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `->`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Text formula to be returned as object`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Result`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `4D.Function`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `<-`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Native object encapsulating the formula`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-1"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Formula from string`), ` command `, `creates a 4D.Function object based upon the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `formulaString`), `.  `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `formulaString`), ` can be as simple as a single value or complex, such as a project method with parameters.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This command is similar to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#formula"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Formula`)), `, except that it handles a text-based formula. In most cases, it is recommended to use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Formula`), ` command. `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Formula from string`), ` should only be used when the original formula was expressed as text (e.g., stored externally in a JSON file). In this context, using syntax with tokens is highly advised.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Because local variable contents can not be accessed by name in compiled mode, they can not be used in `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `formulaString`), `. An attempt to access a local variable with `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Formula from string`), ` will result in an error (-10737).`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following code will create a dialog accepting a formula in text format:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` var $textFormula : Text
 var $f : 4D.Function
 $textFormula:=Request("Please type a formula")
 If(ok=1)
    $f:=Formula from string($textFormula)
    ALERT("Result = "+String($f.call()))
 End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(77216)/* ["default"] */ .Z),
    width: "438",
    height: "217"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `...and execute the formula:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(73703)/* ["default"] */ .Z),
    width: "532",
    height: "304"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "apply"
    }
  }, `.apply()`), /* @__PURE__ */ (0, import_react2.mdx)("details", null, /* @__PURE__ */ (0, import_react2.mdx)("summary", null, "History"), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Version`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Changes`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `v17 R3`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Added`))))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.apply`), `() : any`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.apply`), `( `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `thisObj`), ` : Object { ; `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `formulaParams`), ` : Collection } ) : any`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Parameter`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `thisObj`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `->`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object to be returned by the This command in the formula`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `formulaParams`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Collection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `->`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Collection of values to be passed as $1...$n when `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `formula`), ` is executed`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Result`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `any`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": "center"
    }
  }, `<-`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Value from formula execution`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-2"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.apply()`), ` function `, `executes the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `formula`), ` object to which it is applied and returns the resulting value`, `. The formula object can be created using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Formula`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Formula from string`), ` commands.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `thisObj`), ` parameter, you can pass a reference to the object to be used as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `This`), ` within the formula.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also pass a collection to be used as $1...$n parameters in the formula using the optional `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `formulaParams`), ` parameter.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.apply()`), ` is similar to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#call"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.call()`)), ` except that parameters are passed as a collection. This can be useful for passing calculated results.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-1-1"
    }
  }, `Example 1`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` var $f : 4D.Function
 $f:=Formula($1+$2+$3)

 $c:=New collection(10;20;30)
 $result:=$f.apply(Null;$c) // returns 60
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-2-1"
    }
  }, `Example 2`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` var $calc : 4D.Function
 var $feta; $robot : Object
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

 $calc.apply($feta) // $feta={name:Feta,price:12.5,quantity:5,total:62.5}
 $calc.apply($robot) // $robot={name:Robot,price:543,quantity:2,total:1086}
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "call"
    }
  }, `.call()`), /* @__PURE__ */ (0, import_react2.mdx)("details", null, /* @__PURE__ */ (0, import_react2.mdx)("summary", null, "History"), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Version`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Changes`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `v17 R3`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Added`))))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.call`), `() : any`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.call`), `( `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `thisObj`), ` : Object { ; ...`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `params`), ` : any } ) : any`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Parameter`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("th", {
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
  }, `thisObj`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `->`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object to be returned by the This command in the formula`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `params`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `any`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `->`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Value(s) to be passed as $1...$n when formula is executed`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Result`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `any`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `<-`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Value from formula execution`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-3"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.call()`), ` function `, `executes the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `formula`), ` object to which it is applied and returns the resulting value`, `. The formula object can be created using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Formula`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Formula from string`), ` commands.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `thisObj`), ` parameter, you can pass a reference to the object to be used as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `This`), ` within the formula.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also pass values to be used as `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$1...$n`), ` parameters in the formula using the optional `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `params`), ` parameter(s).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.call()`), ` is similar to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#apply"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.apply()`)), ` except that parameters are passed directly.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-1-2"
    }
  }, `Example 1`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` var $f : 4D.Function
 $f:=Formula(Uppercase($1))
 $result:=$f.call(Null;"hello") // returns "HELLO"
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-2-2"
    }
  }, `Example 2`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $o:=New object("value";50)
 $f:=Formula(This.value*2)
 $result:=$f.call($o) // returns 100
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "source"
    }
  }, `.source`), /* @__PURE__ */ (0, import_react2.mdx)("details", null, /* @__PURE__ */ (0, import_react2.mdx)("summary", null, "History"), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Version`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Changes`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `v18 R2`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Added`))))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `.source`), ` : Text `), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "description-4"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.source`), ` property `, `contains the source expression of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `formula`), ` as text`, `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property is `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `read-only`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "example-7"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` var $of : 4D.Function
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 73703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 77216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;