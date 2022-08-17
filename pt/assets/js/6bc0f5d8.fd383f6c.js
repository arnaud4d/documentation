exports.id = 37204;
exports.ids = [37204];
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

/***/ 56361:
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
var properties_FormProperties_exports = {};
__export(properties_FormProperties_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(properties_FormProperties_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "propertiesForm",
  title: "Form Properties"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormEditor/propertiesForm",
  "id": "FormEditor/propertiesForm",
  "title": "Form Properties",
  "description": "---",
  "source": "@site/docs/FormEditor/properties_FormProperties.md",
  "sourceDirName": "FormEditor",
  "slug": "/FormEditor/propertiesForm",
  "permalink": "/docs/pt/next/FormEditor/propertiesForm",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "propertiesForm",
    "title": "Form Properties"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Action",
    "permalink": "/docs/pt/next/FormEditor/action"
  },
  "next": {
    "title": "Form Size",
    "permalink": "/docs/pt/next/FormEditor/formSize"
  }
};
const assets = {};
const toc = [{
  value: "Color Scheme",
  id: "color-scheme",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar",
  level: 4
}, {
  value: "Pages",
  id: "pages",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-1",
  level: 4
}, {
  value: "Form Name",
  id: "form-name",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-2",
  level: 4
}, {
  value: "Form Type",
  id: "form-type",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-3",
  level: 4
}, {
  value: "Inherited Form Name",
  id: "inherited-form-name",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-4",
  level: 4
}, {
  value: "Inherited Form Table",
  id: "inherited-form-table",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-5",
  level: 4
}, {
  value: "Published as Subform",
  id: "published-as-subform",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-6",
  level: 4
}, {
  value: "Save Geometry",
  id: "save-geometry",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-7",
  level: 4
}, {
  value: "See also",
  id: "see-also",
  level: 4
}, {
  value: "Window Title",
  id: "window-title",
  level: 2
}, {
  value: "JSON Grammar",
  id: "json-grammar-8",
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
      "id": "color-scheme"
    }
  }, `Color Scheme`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Color scheme property is only applied on macOS.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property defines the color scheme for the form. By default when the property is not set, the value for a color scheme is `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `inherited`), ` (the form uses the scheme defined at the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page1762.html"
    }
  }, `application level`), `). This can be changed for the form to one of the following two options:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `dark - light text on a dark background `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `light - dark text on a light background`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `A defined color scheme can not be overridden by a CSS.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `colorScheme`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"dark", "light"`)))), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "pages"
    }
  }, `Pages`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each form has is made of at least two pages:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a page 0 (background page)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a page 1 (main page)`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information, please refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormEditor/forms#form-pages"
    }
  }, `Form pages`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `pages`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `collection`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Collection of pages (each page is an object, page 0 is the first element`)))), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "form-name"
    }
  }, `Form Name`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property is the name of the form itself and is used to refer to the form by name using the 4D language. The form name must comply with the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/Concepts/identifiers"
    }
  }, `rules specified for identifiers`), ` in 4D.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "json-grammar-2"
    }
  }, `JSON Grammar`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The form name is defined by the name of the folder that contains the form.4Dform file. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/Project/architecture#sources-folder"
    }
  }, `project architecture`), ` for more information.`), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "form-type"
    }
  }, `Form Type`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The form type, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `i.e.`), ` its destination, defines the features that will be available to the form. For example, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormEditor/markers"
    }
  }, `markers`), ` can only be set for list (output) table forms.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each table in a database generally has at least two table forms. One for listing records on-screen and the other for displaying one record at a time (used for data entry and modifications):`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Output form - the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `output form`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `list form`), ` displays a list of records, with a single line per record. The results of queries are shown in an output form and users can double-click a line to display the input form for that record.
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(12389)/* ["default"] */ .Z),
    width: "475",
    height: "260"
  }), `	`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Input form - used for data entry. It displays a single record per screen and typically has buttons for saving and canceling modifications to the record and for navigating from record to record (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `i.e.`), `, First Record, Last Record, Previous Record, Next Record).
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(68544)/* ["default"] */ .Z),
    width: "711",
    height: "261"
  }), `
`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Supported types depend on the form category:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Form Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `JSON grammar`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Supported with`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Detail Form`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `detailScreen`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `A display form for data entry and modification`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Project forms - Table forms`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Detail Form for Printing`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `detailPrinter`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `A printed report with one page per record, such as an invoice`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Project forms - Table forms`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `List Form`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `listScreen`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `A form for listing records on the screen`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Table forms`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `List Form for Printing`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `listPrinter`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `A printed report that list records`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Table forms`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `None`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `no destination`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `A form with no specific feature`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Project forms - Table forms`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `destination`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `"detailScreen", "listScreen", "detailPrinter", "listPrinter"`)))), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "inherited-form-name"
    }
  }, `Inherited Form Name`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property designates the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormEditor/forms#inherited-forms"
    }
  }, `form to inherit`), ` in the current form. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To inherit from a table form, set the table in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#inherited-form-table"
    }
  }, `Inherited Form Table`), ` property.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To remove inheritance, select `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<None>`), ` in the Property List (or " " in JSON).`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `inheritedForm`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Name of table or project form OR a POSIX path to a .json file describing the form OR an object describing the form`)))), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "inherited-form-table"
    }
  }, `Inherited Form Table`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This property specifies the database table from which to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormEditor/forms#inherited-forms"
    }
  }, `inherit a form`), ` in the current form.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Set to `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<None>`), ` in the Property List (or " " in JSON) to inherited from a project form.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `inheritedFormTable`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string or number`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `table name or table number`)))), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "published-as-subform"
    }
  }, `Published as Subform`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For a component form to be selected as a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/subformOverview"
    }
  }, `subform`), ` in a host application, it must have been explicitly shared. When this property is selected, the form will be published in the host application. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Only project forms can be specified as published subforms. `), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `shared`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `boolean`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `true, false`)))), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "save-geometry"
    }
  }, `Save Geometry`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the option is used, if the window is opened using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Open form window`), ` command with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `*`), ` parameter, several form parameters are automatically saved by 4D when the window is closed, regardless of how they were modified during the session:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the current page,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the position, size and visibility of each form object (including the size and visibility of list box columns).`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This option does not take into account objects generated using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OBJECT DUPLICATE`), ` command. In order for a user to recover their environment when using this command, the developer must repeat the sequence of creation, definition and positioning of the objects. `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is selected, the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/propertiesObject#save-value"
    }
  }, `Save Value`), ` option is available for certain objects. `), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `memorizeGeometry`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
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
      "id": "see-also"
    }
  }, `See also`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/next/FormObjects/propertiesObject#save-value"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Save Value`))), /* @__PURE__ */ (0, import_react2.mdx)("hr", null), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "window-title"
    }
  }, `Window Title`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The window title is used when the form is opened using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Open form window`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Open window`), ` 4D commands in Application environment. The window title appears in the Title bar of the window.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can use dynamic references to set the window titles for forms, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `i.e.`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A standard XLIFF reference stored in the Resources folder.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A table or field label: The syntax to apply is `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `<?[TableNum]FieldNum>`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `<?[TableName]FieldName>`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A variable or a field: The syntax to apply is `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `\\<VariableName>`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `<[TableName]FieldName>`), `. The current value of the field or variable will be displayed in the window title.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The number of characters for a window title is limited to 31.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
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
  }, `windowTitle`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `string`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `The name of the window as plain text or as a reference`)))));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 68544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAscAAAEFCAIAAACAXN1bAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACKfSURBVHhe7d37lxT1ue/x+SOy9nKt40/5QT1ny/5BDfus7JVkH69na2ISs0OiKE6MuI+u4CVXAXVAEsd4Q90q4gWigoqjbuJlKygMIhpAHa5yV5EZGFFERYxrzQxwPlX1dE119bdrvj1T3dPdvF/rWaynqr/1rWoyzvOZGSAtRwAAAPIQpIqOhFMAAAAyHXvsscccc4xFh1A6VWjRqaeeumjRou7u7ug1AACAUgMDA9v37vsfp539jX/4hyhFROctVShSzJw5s6en5/4X1lIURVEURQ1Z6z//esGmnVGwKEoVp556qiLF7BfWURRFURRFedZr+7869t/HF6WKU045ZdGiRbNfXEdRFEVRFFVRPbv34DHHHFOUKrq7ux/47/UURVEURVEV1VN7vzr22GOLUsXXX3/94EsbKIqiKIqiKqrHew8qSBSlCv368MsbKYqiKIqiKqpH9rhSxZxFGymKoiiKoiqqh3a7UsXcxZsoiqIoiqIqqlk9X5EqKIqiKGrTXU+t+NW02RdddXPupW21eS3v8pfHX73oOz847RvfzL20rTaP7lJa7lTxyCubfWrOoi1PLn/v+VU7VWp0mFpAURRFUY1SE39/56LX137w0YHcS9tq81re5YfHfWvxAw8e3PB27qVttXl0l9K6e5frJyCPvrolux5ZsmXJ2l3d69f+femCgefvU6npXr9GJ/VSajFFURRF1X9dfPWfNZtf39ibe2lbbV7Lu5z2jW9+uW713gUP5V7aVptHdymt2z+sPFU8tmTbpne3H3lp9pG7Wgfaz+u/KSg1Ojzy37P1khakLqEoiqKoOq/Wa255v/fAaxt6cy9tq81reRcN/gNdK3sfn/3RE2GpCSs6o1+DJqrwMF7w0eMPqOxC9dG1iU20bcWpYt7SreXq0c5tmzZuO7JgxsCfftD/55/23/zT/pt+FNZ5/e3/rpNHFtyoBVqWupCiKIqi6rl+YfN+T+6lbbW5z11uuvORn4y7rFzp1dT6ZCXvosH/+Vsr9jx6b1E9Zs2sKdfFe86aMlXni89cF69M1e5H79W22jy6S2m173Slivmd28rVq2s+PPLiff0zzum/+Sf97ef1/3ncwLxpA/OnD8xr67/rF/1//IFe0oIlXR+mLizUKxf9Y4v5x6l3pF8drXroVHumwKk3p14dWd38s2DTCt5sff4WURRFNXn94te3vtd7oHNDb+6lbbW5z1001AfK06up9clK3kWD/7OVr/XMubPn4aC65wQV9SrtE879gPr7/jA5dUYXduuqwvpgn6gevlPbavPoLqU1431Xqnhi2Q5nze98r7vrrSO3/zz6/kTfjHMOvfXS4TVL++deO7B47uGebYdemKWTR277uZZpceryJ+Zfd1xLy2l/HjycEPde9fBpLSdNmJ86mVH+6z1XVvoAKl2SeMtDlu9v0TCehKIoisqqS35zmwbz0g29udeO3i+1uc9dNNGjAOGkV1Prk6Vt47to8H+6Ysmu+2/9cHZY998WVNAEh/f+7g/a6lBBqterWrMrvDD69cPZuva2qNe22jy6S2ld/54rVTz52nvOenblrr8vnjcw7az+P53bN/3/DnTccmR/78DSx/uu+9e+608bmDft8N8P9s++euCG079aPE+Liy9fevGJLaffkjxTaT18estJFz+eOplR/us9V1b6AKqKLvH/LRrGk1AURVFZFc77L5du+Cj3ilJFfJcdwfcqPnJWnCrUJCs+mVqfrORdolTxwb3tH9zTrl93hhU1wa/3tN/z299pt75iOqPzwVXRyntsfVy6MEoV0V1Ka/IOV6pY8Pp7znqpq3vg2Tv6287oazuj/5GpA0/MONz16qHOJ4JUMeP7fdPPOtz7wcDLD/dN/hcte6lrV9HlT15/XMv5k5Nn4gpeMqffGp0Mp+aV50cnj7tyaXim4NyHtWbyuXYUHYYVTOXI6bem1idfihYnK7zdkyVnsh4gWHD6uSe1tJx0nKJAvOet57eceP1dg5uYcIey7zTc5/zJ5X+Lit9s6kmS2xYuL5w57srrB99a1t0z3gVFUdRRUb/87e0r3+25/69vO+s30++NBryz9GpqfbK0rTb3uYu22htSk32ytJJ30eDf+sAdL592Ykbd+INz4p1Fvc6k1pSWttXm0V1K6zfbv3Skio4VHzjrZaWKZ27vn/rd/gd/fajr1f6Hfnv43TcOr+vsv+2Cvmln9t1w+uFdmw89f1/ftd8+9PQti9f0FF3+5A3HnXjDfybPWM09o6XljNvCXmtaTmp90k62nDs3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");

/***/ }),

/***/ 12389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;