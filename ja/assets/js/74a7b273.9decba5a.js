exports.id = 78223;
exports.ids = [78223];
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

/***/ 62960:
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
var onBeginDragOver_exports = {};
__export(onBeginDragOver_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(onBeginDragOver_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "onBeginDragOver",
  title: "On Begin Drag Over"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Events/onBeginDragOver",
  "id": "version-19/Events/onBeginDragOver",
  "title": "On Begin Drag Over",
  "description": "|Code|Can be called by|Definition|",
  "source": "@site/versioned_docs/version-19/Events/onBeginDragOver.md",
  "sourceDirName": "Events",
  "slug": "/Events/onBeginDragOver",
  "permalink": "/docs/ja/19/Events/onBeginDragOver",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "onBeginDragOver",
    "title": "On Begin Drag Over"
  },
  "sidebar": "docs",
  "previous": {
    "title": "On Before Keystroke",
    "permalink": "/docs/ja/19/Events/onBeforeKeystroke"
  },
  "next": {
    "title": "On Begin URL Loading",
    "permalink": "/docs/ja/19/Events/onBeginUrlLoading"
  }
};
const assets = {};
const toc = [{
  value: "Description",
  id: "description",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Code`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Can be called by`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Definition`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `17`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "FormObjects/writeProArea_overview"
    }
  }, `4D Write Pro area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/buttonGridOverview"
    }
  }, `Button Grid`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/checkboxOverview"
    }
  }, `Check Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/dropdownListOverview"
    }
  }, `Dropdown list`), ` - Form - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/listOverview#overview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/inputOverview"
    }
  }, `Input`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/listboxOverview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/pictureButtonOverview"
    }
  }, `Picture Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/picturePopupMenuOverview"
    }
  }, `Picture Pop up menu`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/pluginAreaOverview#overview"
    }
  }, `Plug-in Area`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/progressIndicator"
    }
  }, `Progress Indicators`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/radiobuttonOverview"
    }
  }, `Radio Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/ruler"
    }
  }, `Ruler`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/spinner"
    }
  }, `Spinner`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/splitters"
    }
  }, `Splitter`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/stepper"
    }
  }, `Stepper`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/ja/19/FormObjects/tabControl"
    }
  }, `Tab control`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `An object is being dragged`)))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "description"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Begin Drag Over`), ` form event can be selected for any form objects that can be dragged. It is generated in every case where the object has the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/FormObjects/propertiesAction#draggable"
    }
  }, `Draggable`), ` property. It can be called from the method of the source object or the form method of the source object.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Unlike the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/19/Events/onDragOver"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `On Drag Over`)), ` form event, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Begin Drag Over`), ` is called within the context of the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `source object`), ` of the drag action.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Begin Drag Over`), ` event is useful for preparing of the drag action. It can be used to:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Add data and signatures to the pasteboard (via the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `APPEND DATA TO PASTEBOARD`), ` command).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Use a custom icon during the drag action (via the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `SET DRAG ICON`), ` command).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Accept or refuse dragging via $0 in the method of the dragged object. `, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To indicate that drag actions are accepted, the method of the source object must return 0 (zero); you must therefore execute `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `$0:=0`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To indicate that drag actions are refused, the method of the source object must return -1 (minus one); you must therefore execute `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `$0:=-1`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If no result is returned, 4D considers that drag actions are accepted.`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D data are put in the pasteboard before calling the event. For example, in the case of dragging without the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Automatic Drag`), ` action, the dragged text is already in the pasteboard when the event is called.`));
}
;
MDXContent.isMDXComponent = true;


/***/ })

};
;