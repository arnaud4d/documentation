exports.id = 60147;
exports.ids = [60147];
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

/***/ 2046:
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
var properties_DataSource_exports = {};
__export(properties_DataSource_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(properties_DataSource_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "propertiesDataSource",
  title: "Data Source"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormObjects/propertiesDataSource",
  "id": "FormObjects/propertiesDataSource",
  "title": "Data Source",
  "description": "Automatic Insertion",
  "source": "@site/docs/FormObjects/properties_DataSource.md",
  "sourceDirName": "FormObjects",
  "slug": "/FormObjects/propertiesDataSource",
  "permalink": "/docs/ja/next/FormObjects/propertiesDataSource",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "propertiesDataSource",
    "title": "Data Source"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Crop",
    "permalink": "/docs/ja/next/FormObjects/propertiesCrop"
  },
  "next": {
    "title": "Display",
    "permalink": "/docs/ja/next/FormObjects/propertiesDisplay"
  }
};
const assets = {};
const toc = [{
  value: "Automatic Insertion",
  id: "automatic-insertion",
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
  value: "Choice List",
  id: "choice-list",
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
  value: "Choice List (static list)",
  id: "choice-list-static-list",
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
  value: "Current item",
  id: "current-item",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-3",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-3",
  level: 4
}, {
  value: "Current item position",
  id: "current-item-position",
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
  value: "Data Type (expression type)",
  id: "data-type-expression-type",
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
  value: "Data Type (list)",
  id: "data-type-list",
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
  value: "Default (list of) values",
  id: "default-list-of-values",
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
  value: "Expression",
  id: "expression",
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
  value: "Master Table",
  id: "master-table",
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
  value: "Save as",
  id: "save-as",
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
  value: "Selected Items",
  id: "selected-items",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-11",
  level: 4
}, {
  value: "Objects Supported",
  id: "objects-supported-11",
  level: 4
}, {
  value: "Selection Name",
  id: "selection-name",
  level: 2
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "automatic-insertion"
    }
  }, `Automatic Insertion`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is selected, if a user enters a value that is not found in the list associated with the object, this value is automatically added to the list stored in memory.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `automatic insertion`), ` option is not set (default), the value entered is stored in the form object but not in the list in memory.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property is supported by:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/comboBoxOverview"
    }
  }, `Combo box`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `list box column`), ` form objects associated to a choice list.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/comboBoxOverview"
    }
  }, `Combo box`), ` form objects whose associated list is filled by their array or object datasource.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, given a choice list containing "France, Germany, Italy" that is associated with a "Countries" combo box: if the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `automatic insertion`), ` property is set and a user enters "Spain", then the value "Spain" is automatically added to the list in memory:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(88803)/* ["default"] */ .Z),
    width: "485",
    height: "109"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If the choice list was created from a list defined in Design mode, the original list is not modified.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `automaticInsertion`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
      "href": "/docs/ja/next/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "choice-list"
    }
  }, `Choice List`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Associates a choice list with an object. It can be a choice list name (a list reference) or a collection of default values.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also associate choice lists to objects using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page237.html"
    }
  }, `OBJECT SET LIST BY NAME`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page1266.html"
    }
  }, `OBJECT SET LIST BY REFERENCE`), ` commands.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `choiceList`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `list, collection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `A list of possible values`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `list`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `list, collection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `A list of possible values (hierarchical lists only)`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-1"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/dropdownListOverview"
    }
  }, `Drop-down List`), ` -
`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/comboBoxOverview"
    }
  }, `Combo Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listOverview#overview"
    }
  }, `Hierarchical List`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "choice-list-static-list"
    }
  }, `Choice List (static list)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `List of static values to use as labels for the tab control object.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `labels`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `list, collection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `A list of values to fill the tab control`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-2"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/tabControl"
    }
  }, `Tab Control`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "current-item"
    }
  }, `Current item`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Collection or entity selection list boxes`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Specifies a variable or expression that will be assigned the collection element/entity selected by the user. You must use an object variable or an assignable expression that accepts objects. If the user does not select anything or if you used a collection of scalar values, the Null value is assigned.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This property is "read-only", it is automatically updated according to user actions in the list box. You cannot edit its value to modify the list box selection status.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `currentItemSource`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Object expression`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-3"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "current-item-position"
    }
  }, `Current item position`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Collection or entity selection list boxes`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Specifies a variable or expression that will be assigned a longint indicating the position of the collection element/entity selected by the user.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `if no element/entity is selected, the variable or expression receives zero,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `if a single element/entity is selected, the variable or expression receives its location,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `if multiple elements/entities are selected, the variable or expression receives the position of element/entity that was last selected.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This property is "read-only", it is automatically updated according to user actions in the list box. You cannot edit its value to modify the list box selection status.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `currentItemPositionSource`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Number expression`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-4"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview"
    }
  }, `List Box`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "data-type-expression-type"
    }
  }, `Data Type (expression type)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Defines the data type for the displayed expression. This property is used with:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List box columns`), ` of the selection and collection types.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/dropdownListOverview"
    }
  }, `Drop-down lists`), ` associated to objects or arrays.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `See also `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesObject#expression-type"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Expression Type`)), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `dataSourceTypeHint`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
  }, `list box columns:`), ` "boolean", "number", "picture", "text", date", "time". `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `Array/selection list box only`), `: "integer", "object"`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `drop-down lists:`), ` "object", "arrayText", "arrayDate", "arrayTime", "arrayNumber"`))))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-5"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/dropdownListOverview"
    }
  }, `Drop-down Lists`), ` associated to objects or arrays - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box column`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "data-type-list"
    }
  }, `Data Type (list)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Defines the type of data to save in the field or variable associated to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/dropdownListOverview"
    }
  }, `drop-down list`), `. This property is used with:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Drop-down lists `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/dropdownListOverview#using-a-choice-list"
    }
  }, `associated to a choice list`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Drop-down lists `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/dropdownListOverview#using-a-hierarchical-choice-list"
    }
  }, `associated to a hierarchical choice list`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Three options are available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `List reference`), `: declares that the drop-down list is hierarchical. It means that the drop-down list can display up to two hierarchical levels and its contents can be managed by the 4D language commands of the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Hierarchical Lists`), ` theme.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Selected item value`), ` (default): the drop-down list is not hierarchical and the value of the item chosen in the list by the user is saved directly. For example, if the user chooses the value "Blue", then this value is saved in the field.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Selected item reference`), `: the drop-down list is not hierarchical and the reference of the choice list item is saved in the object. This reference is the numeric value associated with each item either through the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `itemRef`), ` parameter of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page376.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `APPEND TO LIST`)), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page385.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `SET LIST ITEM`)), ` commands, or in the list editor. This option lets you optimize memory usage: storing numeric values in fields uses less space than storing strings. It also makes it easier to translate applications: you just create multiple lists in different languages but with the same item references, then load the list based on the language of the application.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Selected item reference`), ` option requires compliance with the following principles:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To be able to store the reference, the field or variable data source must be of the Number type (regardless of the type of value displayed in the list). The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesObject#expression-type"
    }
  }, `expression`), ` property is automatically set.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Valid and unique references must be associated with list items.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The drop-down list must be associated with a field or a variable.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `saveAs`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"value", "reference"`)))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Setting only `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `"dataSourceTypeHint" : "integer"`), ` with a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `"type": "dropdown"`), ` form object will declare a hierarchical drop-down list.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-6"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/dropdownListOverview"
    }
  }, `Drop-down Lists`), ` associated to lists`), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "default-list-of-values"
    }
  }, `Default (list of) values`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `List of values that will be used as default values for the list box column (array type only). These values are automatically available in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesObject#variable-or-expression"
    }
  }, `array variable`), ` associated with this column when the form is executed. Using the language, you can manage the object by referring to this array.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Do not make confusion between this property and the "`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesRangeOfValues#default-list-of-values"
    }
  }, `default value`), `" property that allows to define a field value in new records.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You must enter a list of values. In the Form editor, a specific dialog box allows you to enter values separated by carriage returns:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(35016)/* ["default"] */ .Z),
    width: "396",
    height: "335"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can also define a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesDataSource#choice-list"
    }
  }, `choice list`), ` with the list box column. However, a choice list will be used as list of selectable values for each column row, whereas the default list fill all column rows.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `values`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `collection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `A collection of default values (strings), ex: "a", "b", "c", "d"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-7"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column (array type only)`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "expression"
    }
  }, `Expression`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This description is specific to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#selection-list-boxes"
    }
  }, `selection`), `
and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#collection-or-entity-selection-list-boxes"
    }
  }, `collection`), ` type list box columns. See also `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "strong",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesObject#variable-or-expression"
    }
  }, `Variable or Expression`)), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A 4D expression to be associated with a column. You can enter:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `A `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `simple variable`), ` (in this case, it must be explicitly declared for compilation). You can use any type of variable except BLOBs and arrays. The value of the variable will be generally calculated in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Display Detail`), ` event.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `A `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `field`), ` using the standard `, `[Table]`, `Field syntax (`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#selection-list-boxes"
    }
  }, `selection type list box`), `
only), for example: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `[Employees]LastName`), `. The following types of fields can be used:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `String`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Numeric`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Date`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Time`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Picture`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Boolean`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "li"
  }), `You can use fields from the Master Table or from other tables.`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `A `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `4D expression`), ` (simple expression, formula or 4D method). The expression must return a value. The value will be evaluated in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Display Detail`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Data Change`), ` events. The result of the expression will be automatically displayed when you switch to Application mode. The expression will be evaluated for each record of the selection (current or named) of the Master Table (for selection type list boxes), each element of the collection (for collection type list boxes) or each entity of the selection (for entity selection list boxes). If it is empty, the column will not display any results.
The following expression types are supported:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `String`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Numeric`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Date`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Picture`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Boolean`), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `For collection/entity selection list boxes, Null or unsupported types are displayed as empty strings.`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "p"
  }), `
`, `When using collections or entity selections, you will usually declare the element property or entity attribute associated to a column within an expression containing `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html"
    }
  }, `This`), `. `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `This`), ` is a dedicated 4D command that returns a reference to the currently processed element. For example, you can use `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `This.\\<propertyPath>`), ` where `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<propertyPath>`), ` is the path of a property in the collection or an entity attribute path to access the current value of each element/entity.
If you use a collection of scalar values, 4D will create an object for each collection element with a single property (named "value"), filled with the element value. In this case, you will use `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `This.value`), ` as expression.`), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `If a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/Concepts/quick-tour#expressions"
    }
  }, `non-assignable expression`), ` is used (e.g. `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `[Person]FirstName+" "+[Person]LastName`), `), the column is never enterable even if the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesEntry#enterable"
    }
  }, `Enterable`), ` property is enabled.`))))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If a field, a variable, or an assignable expression (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `e.g. Person.lastName`), `) is used, the column can be enterable or not depending on the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesEntry#enterable"
    }
  }, `Enterable`), ` property.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `dataSource`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `A 4D variable, field name, or an arbitrary complex language expression.`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-8"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "master-table"
    }
  }, `Master Table`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Current selection list boxes`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Specifies the table whose current selection will be used. This table and its current selection will form the reference for the fields associated with the columns of the list box (field references or expressions containing fields). Even if some columns contain fields from other tables, the number of rows displayed will be defined by the master table.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All database tables can be used, regardless of whether the form is related to a table (table form) or not (project form).`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `table`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Table number`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-9"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "save-as"
    }
  }, `Save as`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property is available in the following conditions:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#choice-list"
    }
  }, `choice list`), ` is associated with the object`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/inputOverview"
    }
  }, `inputs`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#list-box-columns"
    }
  }, `list box columns`), `, a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesRangeOfValues#required-list"
    }
  }, `required list`), ` is also defined for the object (both options should use usually the same list), so that only values from the list can be entered by the user.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property specifies, in the context of a field or variable associated with a list of values, the type of contents to save:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Save as Value`), ` (default option): the value of the item chosen in the list by the user is saved directly. For example, if the user chooses the value "Blue", then this value is saved in the field.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Save as Reference`), `: the reference of the choice list item is saved in the object. This reference is the numeric value associated with each item either through the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `itemRef`), ` parameter of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page376.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `APPEND TO LIST`)), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page385.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `SET LIST ITEM`)), ` commands, or in the list editor.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option lets you optimize memory usage: storing numeric values in fields uses less space than storing strings. It also makes it easier to translate applications: you just create multiple lists in different languages but with the same item references, then load the list based on the language of the application.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using this property requires compliance with the following principles:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To be able to store the reference, the field or variable data source must be of the Number type (regardless of the type of value displayed in the list). The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/next/FormObjects/propertiesObject#expression-type"
    }
  }, `expression`), ` property is automatically set.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Valid and unique references must be associated with list items.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `saveAs`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"value", "reference"`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-10"
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
  }, `List Box Column`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "selected-items"
    }
  }, `Selected Items`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Collection or entity selection list boxes`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Specifies a variable or expression that will be assigned the elements or entities selected by the user.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `for a collection list box, you must use a collection variable or an assignable expression that accepts collections,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `for an entity selection list box, an entity selection object is built. You must use an object variable or an assignable expression that accepts objects.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This property is "read-only", it is automatically updated according to user actions in the list box. You cannot edit its value to modify the list box selection status.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `selectedItemsSource`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Collection expression`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-11"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`)), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "selection-name"
    }
  }, `Selection Name`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Named selection list boxes`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Specifies the named selection to be used. You must enter the name of a valid named selection. It can be a process or interprocess named selection. The contents of the list box will be based on this selection. The named selection chosen must exist and be valid at the time the list box is displayed, otherwise the list box will be displayed blank.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Named selections are ordered lists of records. They are used to keep the order and current record of a selection in memory. For more information, refer to `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Named Selections`), ` section in the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `4D Language Reference manual`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `namedSelection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Named selection name`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "objects-supported-12"
    }
  }, `Objects Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/next/FormObjects/listboxOverview#overview"
    }
  }, `List Box`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 88803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 35016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;