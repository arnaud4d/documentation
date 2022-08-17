exports.id = 15848;
exports.ids = [15848];
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

/***/ 38140:
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
var asArray_exports = {};
__export(asArray_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(asArray_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "asArray",
  title: "$asArray"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "REST/asArray",
  "id": "version-19-R6/REST/asArray",
  "title": "$asArray",
  "description": "Returns the result of a query in an array (i.e. a collection) instead of a JSON object.",
  "source": "@site/versioned_docs/version-19-R6/REST/$asArray.md",
  "sourceDirName": "REST",
  "slug": "/REST/asArray",
  "permalink": "/docs/ja/REST/asArray",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "asArray",
    "title": "$asArray"
  },
  "sidebar": "docs",
  "previous": {
    "title": "dataClass",
    "permalink": "/docs/ja/REST/dataClass"
  },
  "next": {
    "title": "$atomic/$atonce",
    "permalink": "/docs/ja/REST/atomic_$atonce"
  }
};
const assets = {};
const toc = [{
  value: "Description",
  id: "description",
  level: 2
}, {
  value: "Example",
  id: "example",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Returns the result of a query in an array (i.e. a collection) instead of a JSON object.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "description"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you want to receive the response in an array, you just have to add `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$asArray`), ` to your REST request (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `e.g.`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$asArray=true`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "example"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here is an example or how to receive the response in an array.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `GET  /rest/Company/?$filter="name begin a"&$top=3&$asArray=true`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Response`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `[
    {
        "__KEY": 15,
        "__STAMP": 0,
        "ID": 15,
        "name": "Alpha North Yellow",
        "creationDate": "!!0000-00-00!!",
        "revenues": 82000000,
        "extra": null,
        "comments": "",
        "__GlobalStamp": 0
    },
    {
        "__KEY": 34,
        "__STAMP": 0,
        "ID": 34,
        "name": "Astral Partner November",
        "creationDate": "!!0000-00-00!!",
        "revenues": 90000000,
        "extra": null,
        "comments": "",
        "__GlobalStamp": 0
    },
    {
        "__KEY": 47,
        "__STAMP": 0,
        "ID": 47,
        "name": "Audio Production Uniform",
        "creationDate": "!!0000-00-00!!",
        "revenues": 28000000,
        "extra": null,
        "comments": "",
        "__GlobalStamp": 0
    }
]
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The same data in its default JSON format:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `{
    "__entityModel": "Company",
    "__GlobalStamp": 50,
    "__COUNT": 52,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "15",
            "__TIMESTAMP": "2018-03-28T14:38:07.434Z",
            "__STAMP": 0,
            "ID": 15,
            "name": "Alpha North Yellow",
            "creationDate": "0!0!0",
            "revenues": 82000000,
            "extra": null,
            "comments": "",
            "__GlobalStamp": 0,
            "employees": {
                "__deferred": {
                    "uri": "/rest/Company(15)/employees?$expand=employees"
                }
            }
        },
        {
            "__KEY": "34",
            "__TIMESTAMP": "2018-03-28T14:38:07.439Z",
            "__STAMP": 0,
            "ID": 34,
            "name": "Astral Partner November",
            "creationDate": "0!0!0",
            "revenues": 90000000,
            "extra": null,
            "comments": "",
            "__GlobalStamp": 0,
            "employees": {
                "__deferred": {
                    "uri": "/rest/Company(34)/employees?$expand=employees"
                }
            }
        },
        {
            "__KEY": "47",
            "__TIMESTAMP": "2018-03-28T14:38:07.443Z",
            "__STAMP": 0,
            "ID": 47,
            "name": "Audio Production Uniform",
            "creationDate": "0!0!0",
            "revenues": 28000000,
            "extra": null,
            "comments": "",
            "__GlobalStamp": 0,
            "employees": {
                "__deferred": {
                    "uri": "/rest/Company(47)/employees?$expand=employees"
                }
            }
        }
    ],
"__SENT": 3
}
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;