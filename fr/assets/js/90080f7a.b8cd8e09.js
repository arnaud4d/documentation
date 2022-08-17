exports.id = 51000;
exports.ids = [51000];
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

/***/ 58300:
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
var quickTour_exports = {};
__export(quickTour_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(quickTour_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "quickTour",
  title: "A Quick Tour in ORDA"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "ORDA/quickTour",
  "id": "ORDA/quickTour",
  "title": "A Quick Tour in ORDA",
  "description": "Since ORDA is object-based, using ORDA requires basic knowledge in object programmming.",
  "source": "@site/docs/ORDA/quickTour.md",
  "sourceDirName": "ORDA",
  "slug": "/ORDA/quickTour",
  "permalink": "/docs/fr/next/ORDA/quickTour",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "quickTour",
    "title": "A Quick Tour in ORDA"
  }
};
const assets = {};
const toc = [{
  value: "Exploring the datastore",
  id: "exploring-the-datastore",
  level: 2
}, {
  value: "Adding data",
  id: "adding-data",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Since ORDA is object-based, using ORDA requires basic knowledge in object programmming.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "exploring-the-datastore"
    }
  }, `Exploring the datastore`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The ORDA datastore is automatically based upon a 4D database structure, provided it complies with the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/next/ORDA/overview#orda-prerequisites"
    }
  }, `ORDA prerequisites`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This example will use the following simple 4D database structure:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(98361)/* ["default"] */ .Z),
    width: "313",
    height: "157"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To know what is exposed as the datastore, create a new project method, write the following line:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-code4d"
    }
  }, `TRACE
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Execute the method -- it simply calls the debugger window.
In the Expression area, double-click to insert an expression and enter `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ds`), `. It returns the datastore object.
Deploy the object, you can see that tables and fields are automatically exposed by ORDA as properties of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ds`), ` object:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(34849)/* ["default"] */ .Z),
    width: "458",
    height: "202"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `It means for example that, whenever you need to refer to the city field of the `, `[Company]`, ` table, in ORDA you just need to write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-code4d"
    }
  }, `ds.Company.city //returns the name of the city
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `In the ORDA world, ds.Company is a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `dataclass`), `. ds.Company.city is an `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `attribute`), `. `)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `ORDA is case sensitive. `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ds.company.city`), ` will not refer to the ds.Company.city attribute. `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You have also noticed the extra `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `hires`), ` property in the ds.Company dataclass. It does not correspond to a field. `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `hires`), ` is actually the name of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `One to many`), ` relation between Company and Employee:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(67727)/* ["default"] */ .Z),
    width: "271",
    height: "101"
  }), `
`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Name of the relation as defined in the Inspector`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `It means that, whenever you need to access the list of employees working for a company, in ORDA you just need to write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-code4d"
    }
  }, `ds.Company.hires //returns the list of employees
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `But don't go too fast. Let's see now how to record data in ORDA dataclasses. `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "adding-data"
    }
  }, `Adding data`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In ORDA, you can add a record to a dataclass using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `new()`), ` command. `), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `In the ORDA world, a record is an `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `entity`), ` -- an entity is itself an object. A command that is attached to a specific object is called a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `member method`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-code4d"
    }
  }, `$entity:=ds.Company.new() //create a new entity reference
//in the Company dataclass  
//and assign it to the $entity variable
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A new entity object contains a "copy" of all attributes of its parent dataclass, thus you can assign values to them:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-code4d"
    }
  }, `$entity.name:="ACME, inc."  
$entity.city:="London"  
//$entity.ID is automatically filled
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Right now, the entity only exists in memory. To store it in the data file, you need to save it using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `save()`), ` member method:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-code4d"
    }
  }, `$status:=$entity.save()
`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 34849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 98361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/struc-04ac739c93b9cc629d0798ae09c7841e.png");

/***/ }),

/***/ 67727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;