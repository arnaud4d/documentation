exports.id = 47581;
exports.ids = [47581];
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

/***/ 47110:
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
var getting_started_exports = {};
__export(getting_started_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(getting_started_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "getting-started",
  title: "Getting Started"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "ViewPro/getting-started",
  "id": "version-19-R6/ViewPro/getting-started",
  "title": "Getting Started",
  "description": "4D View Pro is a 4D component that includes a 4D form area and specific methods. It allows you to embed advanced spreadsheet features in your projects.",
  "source": "@site/versioned_docs/version-19-R6/ViewPro/getting-started.md",
  "sourceDirName": "ViewPro",
  "slug": "/ViewPro/getting-started",
  "permalink": "/docs/fr/ViewPro/getting-started",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "getting-started",
    "title": "Getting Started"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Overview",
    "permalink": "/docs/fr/Extensions/overview"
  },
  "next": {
    "title": "Configuring 4D View Pro Areas",
    "permalink": "/docs/fr/ViewPro/configuring"
  }
};
const assets = {};
const toc = [{
  value: "Installation and activation",
  id: "installation-and-activation",
  level: 2
}, {
  value: "Inserting a 4D View Pro area",
  id: "inserting-a-4d-view-pro-area",
  level: 2
}, {
  value: "Selection, Input and Navigation Basics",
  id: "selection-input-and-navigation-basics",
  level: 2
}, {
  value: "Selecting cells, columns and rows",
  id: "selecting-cells-columns-and-rows",
  level: 3
}, {
  value: "Entering data",
  id: "entering-data",
  level: 3
}, {
  value: "Using the Context Menu",
  id: "using-the-context-menu",
  level: 3
}, {
  value: "Using 4D View Pro methods",
  id: "using-4d-view-pro-methods",
  level: 2
}, {
  value: "Addressing a 4D View Pro area",
  id: "addressing-a-4d-view-pro-area",
  level: 3
}, {
  value: "Using range objects",
  id: "using-range-objects",
  level: 3
}, {
  value: "Importing and exporting documents",
  id: "importing-and-exporting-documents",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D View Pro is a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Concepts/components"
    }
  }, `4D component`), ` that includes a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/FormObjects/viewProAreaOverview"
    }
  }, `4D form area`), ` and specific `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/ViewPro/method-list"
    }
  }, `methods`), `. It allows you to embed advanced spreadsheet features in your projects.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(39998)/* ["default"] */ .Z),
    width: "723",
    height: "543"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A spreadsheet is an application containing a grid of cells into which you can enter information, execute calculations, or display pictures. 4D View Pro is powered by the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://www.grapecity.com/spreadjs/docs/versions/v14/online/overview.html"
    }
  }, `SpreadJS spreadsheet solution`), ` integrated in 4D.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Embedding 4D View Pro areas in your forms allows you to import and export spreadsheets documents using the 4D View Pro commands.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "installation-and-activation"
    }
  }, `Installation and activation`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D View Pro features are directly included in 4D, making it easy to deploy and manage. No additional installation is required.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `However, 4D View Pro requires a license. You need to activate this license in your application in order to use its features. When using this component without a license, the contents of an object that requires a 4D View Pro feature are not displayed at runtime, an error message is displayed instead:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(56457)/* ["default"] */ .Z),
    width: "534",
    height: "412"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "inserting-a-4d-view-pro-area"
    }
  }, `Inserting a 4D View Pro area`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D View Pro documents are displayed and edited manually in a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/FormObjects/viewProAreaOverview"
    }
  }, `4D form object`), ` named 4D View Pro. To select this object, click on the last tool in the object bar:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(2226)/* ["default"] */ .Z),
    width: "260",
    height: "142"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also select a preconfigured 4D View Pro area in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/FormEditor/objectLibrary"
    }
  }, `Object library`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `4D View Pro areas can also be `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/ViewPro/method-list#vp-run-offscreen-area"
    }
  }, `created and used offscreen`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/ViewPro/configuring"
    }
  }, `configure the area`), ` using the Property List and 4D View Pro methods.  `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "selection-input-and-navigation-basics"
    }
  }, `Selection, Input and Navigation Basics`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Spreadsheets are composed of rows and columns. A number is associated with each row. A letter (or group of letters once the number of columns surpasses the number of letters in the alphabet) is associated with each column. The intersection of a row and a column makes a cell. Cells can be selected and their contents edited.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "selecting-cells-columns-and-rows"
    }
  }, `Selecting cells, columns and rows`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `To select a cell, simply click on it or use the direction arrows on the keyboard. Its content (or formula) is displayed within the cell.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `To select several continuous cells, drag the mouse from one end of the selection to the other. You can also click on the two ends of the selection while holding down the Shift key.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `To select all cells in the spreadsheet, click on the cell at the top left of the area:
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(66062)/* ["default"] */ .Z),
    width: "83",
    height: "40"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `To select a column, click on the corresponding letter (or set of letters).`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `To select a row, click on the corresponding number.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `To select a group of cells that are not continuous, hold down the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Ctrl`), ` key (Windows) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Command`), ` key (Mac) and click on each cell to be selected.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `To deselect cells, simply click anywhere within the spreadsheet.`))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "entering-data"
    }
  }, `Entering data`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Double-clicking on a cell allows passing into input mode in the relevant cell. If the cell is not empty, the insertion cursor is placed after the content of the cell.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(13395)/* ["default"] */ .Z),
    width: "173",
    height: "68"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Data can be entered directly once a cell is already selected, even if the insertion cursor is not visible. The input then
replaces the content of the cell.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Tab`), ` key validates the cell input and selects the cell to its right. Combining the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Shift + Tab`), ` keys validates the cell input and selects the cell to its left.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Carriage return`), ` key validates the cell input and selects the cell below it. Combining the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Shift + Carriage return`), ` keys validates the cell input and selects the cell above it.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The direction keys (arrows) allow you to move a cell in the direction indicated by the arrow.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-the-context-menu"
    }
  }, `Using the Context Menu`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D View Pro areas benefit from an automatic context menu that offers standard editing features such as copy and paste, but also basic spreadsheet features:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(58370)/* ["default"] */ .Z),
    width: "303",
    height: "345"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The Copy/Cut and Paste features of the context menu only work within the spreadsheet area, they do not have access to the system pasteboard. System shortcuts such as `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Ctrl+c/Ctrl+v`), ` works however and can be used to exchange data between the area and other applications.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, ` Depending on the clicked area, the following options are also available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `click on a column or row header: `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Insert`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Delete`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Hide`), `, or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Unhide`), ` the contents`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `click on a cell or a cell range:`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Filter`), `: allows hiding row through filters (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://www.grapecity.com/spreadjs/docs/versions/v14/online/filter.html"
    }
  }, `Filtering rows`), ` in the SpreadJS documentation).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Sort`), `: sorts the column contents.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Insert Comment`), `: allows user to enter a comment for an area. When a comment has been entered for an area, the top left cell of the area displays a small red triangle:`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "li"
  }), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(98117)/* ["default"] */ .Z),
    width: "258",
    height: "45"
  }))))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "using-4d-view-pro-methods"
    }
  }, `Using 4D View Pro methods`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D View Pro methods can be used in the 4D Code Editor, just like 4D language commands.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Since 4D View Pro is a built-in 4D component, you can access its list of methods from the Explorer, in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Component Methods`), ` section:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "component-methods",
    src: (__webpack_require__(31682)/* ["default"] */ .Z),
    width: "328",
    height: "277"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For a detailed list of component methods, see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/ViewPro/method-list"
    }
  }, `Method list`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "addressing-a-4d-view-pro-area"
    }
  }, `Addressing a 4D View Pro area`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A 4D View Pro area handles several objects and elements.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(72128)/* ["default"] */ .Z),
    width: "970",
    height: "456"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Most of 4D View Pro methods require a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `vpAreaName`), ` parameter, which is the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/FormObjects/viewProAreaOverview"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `4D View Pro form area name`)), ` (4D form object). This name is the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/FormObjects/propertiesObject#object-name"
    }
  }, `object name`), ` property.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, if you want to set the total number of columns of an area named "myVpArea", you write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `VP SET COLUMN COUNT("myVpArea";5)
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `When loading a 4D View Pro object in a form area, 4D generates the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/Events/onVpReady"
    }
  }, `On VP Ready`), ` form event once the whole area is loaded. You must execute any 4D View Pro code handling the area in this event, otherwise an error is returned.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-range-objects"
    }
  }, `Using range objects`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Some 4D View Pro methods require a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `rangeObj`), ` parameter. In 4D View Pro, a range is an object that references an area in a spreadsheet. This area can be composed of one or several cells. Using 4D View Pro methods, you can create ranges and pass them to other methods to read from or write to specific locations in your document.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, to create a range object for the following cells:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(83661)/* ["default"] */ .Z),
    width: "382",
    height: "201"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/ViewPro/method-list#vp-cells"
    }
  }, `VP Cells`), ` method:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $myRange : Object
$myRange:=VP Cells("ViewProArea";2;4;2;3) // C5 to D7
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can then pass `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$myRange`), ` to another 4D View Pro method to modify these cells (for example add a border to the set of cells with `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/ViewPro/method-list#vp-set-border"
    }
  }, `VP SET BORDER`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D View Pro range objects are composed of several properties:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `area - The name of the 4D View Pro area`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `ranges - A collection of range object(s). Available properties within each range object depend on the range object type. For example, a column range object will only include the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `.column`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `.sheet`), ` properties.`)), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
  }), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Available for`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `area`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `4D View Pro area form object name`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `always available`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `ranges`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `collection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Collection of range(s)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `always available`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }, `[`, ` ].name`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `text`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Range name`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `name`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }, `[`, ` ].sheet`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Sheet index (current sheet index by default) (counting begins at 0)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `cell, cells, row, rows, column, columns, all, name`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }, `[`, ` ].row`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Row index (counting begins at 0)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `cell, cells, row, rows`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }, `[`, ` ].rowCount`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Row count`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `cells, rows`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }, `[`, ` ].column`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Column index (counting begins at 0)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `cell, cells, column, columns`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
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
  }, `[`, ` ].columnCount`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Column count`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `cells, columns`)))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "importing-and-exporting-documents"
    }
  }, `Importing and exporting documents`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D View Pro supports the import and export of several document formats:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `.4vp`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `.xlsx`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `.txt and .csv`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `.pdf (for export only)`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more details, check out the description of `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/ViewPro/method-list#vp-import-document"
    }
  }, `VP IMPORT DOCUMENT`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/ViewPro/method-list#vp-export-document"
    }
  }, `VP EXPORT DOCUMENT`), `.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 31682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/explorer-methods-59a216e3d52dce52a092aed93c285d6c.png");

/***/ }),

/***/ 56457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 83661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/vp-cells-26675b438af7918a3907254783172e87.png");

/***/ }),

/***/ 2226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 58370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/vpContext-0c8d3f2b104c596f7fe9e2a2dcccf25b.PNG");

/***/ }),

/***/ 98117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 72128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/vpDocument-046046a835f35c37715de0262c9de971.PNG");

/***/ }),

/***/ 13395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 66062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAoCAYAAACCV8YCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKOSURBVGhD7ZlZa/JAFED7/3+EC4qI/pDiTvvQpz5+NG00max+bjide+OkN2YZW/Nk7oEDQaE0h8yS8UkytcExa4Rj1gjHrBGOWSMcs0ZyMT3PY38hhWPeKYVj3imFY94phWPeKYVj3inFGDOKIrndbhttEAQyDMPC7yjGmPv9/vJNc4njWG7/Z8MVwTFLgBF5Op2S61iNTo75N3a7nVwsFji0gTAKZbyN8boKjkk4n894vxCy3+9L27bx8yAKOOZvgSdyPp/LTqcjW61WGtMPfRzqJjjmBVhkIGSv18OQ1zHDOBnyVXBMBWx9IORgMEhD0phe4OG8aaLxMeEeIeRwOMyEpDGFL3DeNNHomEIIDDkajXIhaUzXd3Gom2hsTB1yPB4XhgTTmB7HLAXuazabVYYEdUzHc3DeNNG4mL7vY8iyoU3VMTdiI0Ug8LqKRsWENxoIWbTYFKljrsWaY2rgzQZOeKbTaW77U6WOabs2LkImHj4mDUk35LeoY365X9LxHbyu4uFj6pDtdrswWJVpTEfFVIuQiYeOCXMkhOx2u4WxTOqYn86n3HgbvK7iYWPCqj2ZTPD0pyjULeqY1sbCRcjEw8Y8Ho/4/1uW9WcPhwP+LWvd8Jh18rH+kLZIntIqjDFh3oGDUTiiosL5HholwqmKFg4F0PBHeB1LDXx8o6DCPg71E2ErklO91sFCkCoc3FBT4QlKdde4rbkWVmdYVLQwJ1ItRz2Zamhr3/+9y9e3V7larXJSjDHLfp3EwCRyGvdKGjkTmsTOhL7ohT+hc8GVblAQWwlbGPQSHBaOIjPRlaXRlS9vL/J58ozv8tdSeJjfAPyMsVwuc21ACse8AY5ZIxyzRjhmjdwWU8pv0r115Ent6b8AAAAASUVORK5CYII=");

/***/ }),

/***/ 39998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/vpSpreadsheet-e6b04b1da691bb08ce254e55b738a5c4.png");

/***/ })

};
;