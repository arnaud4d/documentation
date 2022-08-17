exports.id = 42514;
exports.ids = [42514];
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

/***/ 77973:
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
var pictures_exports = {};
__export(pictures_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(pictures_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "pictures",
  title: "Pictures"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormEditor/pictures",
  "id": "version-19/FormEditor/pictures",
  "title": "Pictures",
  "description": "4D includes specific support for pictures used in your forms.",
  "source": "@site/versioned_docs/version-19/FormEditor/pictures.md",
  "sourceDirName": "FormEditor",
  "slug": "/FormEditor/pictures",
  "permalink": "/docs/19/FormEditor/pictures",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "pictures",
    "title": "Pictures"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Style sheets",
    "permalink": "/docs/19/FormEditor/stylesheets"
  },
  "next": {
    "title": "JSON property list",
    "permalink": "/docs/19/FormEditor/jsonReference"
  }
};
const assets = {};
const toc = [{
  value: "Native Formats Supported",
  id: "native-formats-supported",
  level: 2
}, {
  value: "Unavailable picture format",
  id: "unavailable-picture-format",
  level: 3
}, {
  value: "High Resolution Pictures",
  id: "high-resolution-pictures",
  level: 2
}, {
  value: "Scale factor (macOS only)",
  id: "scale-factor-macos-only",
  level: 3
}, {
  value: "DPI (macOS and Windows)",
  id: "dpi-macos-and-windows",
  level: 3
}, {
  value: "Dark mode pictures (macOS only)",
  id: "dark-mode-pictures-macos-only",
  level: 2
}, {
  value: "Mouse Coordinates in a Picture",
  id: "mouse-coordinates-in-a-picture",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D includes specific support for pictures used in your forms.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "native-formats-supported"
    }
  }, `Native Formats Supported`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D integrates native management of picture formats. This means that pictures will be displayed and stored in their original format, without any interpretation in 4D. The specific features of the different formats (shading, transparent areas, etc.) will be retained when they are copied and pasted, and will be displayed without alteration. This native support is valid for all pictures stored in 4D forms: `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/19/FormObjects/staticPicture"
    }
  }, `static pictures`), ` pasted in Design mode, pictures pasted into `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/19/FormObjects/inputOverview"
    }
  }, `inputs objects`), ` at runtime, etc.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The most common picture formats are supported of both platforms: .jpeg, .gif, .png, .tiff, .bmp, etc. On macOS, the .pdf format is also available for encoding and decoding.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The full list of supported formats varies according to the operating system and the custom codecs that are installed on the machines. To find out which codecs are available, you must use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `PICTURE CODEC LIST`), ` command (see also the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/19/Concepts/picture"
    }
  }, `picture data type`), ` description).`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "unavailable-picture-format"
    }
  }, `Unavailable picture format`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A specific icon is displayed for pictures saved in a format that is not available on the machine. The extension of the missing format is shown at the bottom of the icon:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(73181)/* ["default"] */ .Z),
    width: "136",
    height: "67"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The icon is automatically used wherever the picture is meant to be displayed:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(33818)/* ["default"] */ .Z),
    width: "392",
    height: "221"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This icon indicates that the picture cannot be displayed or manipulated locally -- but it can be saved without alteration so that it can be displayed on other machines. This is the case, for example, for PDF pictures on Windows, or for PICT format pictures.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "high-resolution-pictures"
    }
  }, `High Resolution Pictures`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D supports high resolution pictures on both macOS and Windows platforms. High resolution pictures can be defined by either scale factor or dpi.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "scale-factor-macos-only"
    }
  }, `Scale factor (macOS only)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `High resolution displays have a higher pixel density than traditional standard displays. For pictures to render correctly on high resolution displays, the number of pixels in the picture must be multiplied by the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `scale factor`), ` (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `i.e.`), `, two times larger, three times larger, etc.).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When using high resolution pictures, you can specify the scale factor by adding "@nx" in the picture's name (where `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `n`), ` designates the scale factor). In the table below, you can see that the scale factor is indicated in the names of the high resolution pictures, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "em",
    ...{
      "href": "mailto:circle@2x.png"
    }
  }, `circle@2x.png`)), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "em",
    ...{
      "href": "mailto:circle@3x.png"
    }
  }, `circle@3x.png`)), `.`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Display Type`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Scale Factor`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Example`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Standard Resolution`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1:1 pixel density.`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `1x`), /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(91817)/* ["default"] */ .Z),
    width: "152",
    height: "155"
  }), ` `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `circle.png`))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `High Resolution`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Pixel density increased by a factor of 2 or 3.`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("th", null, `2x`), /* @__PURE__ */ (0, import_react2.mdx)("th", null, `3x`), /* @__PURE__ */ (0, import_react2.mdx)("tr", null, /* @__PURE__ */ (0, import_react2.mdx)("td", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(69266)/* ["default"] */ .Z),
    width: "156",
    height: "152"
  }), /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "em",
    ...{
      "href": "mailto:circle@2x.png"
    }
  }, `circle@2x.png`))), /* @__PURE__ */ (0, import_react2.mdx)("td", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(36716)/* ["default"] */ .Z),
    width: "156",
    height: "152"
  }), /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "em",
    ...{
      "href": "mailto:circle@3x.png"
    }
  }, `circle@3x.png`))))))))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `High resolution pictures with the @nx convention can be used in the following objects:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/19/FormObjects/staticPicture"
    }
  }, `Static pictures`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/19/FormObjects/buttonOverview"
    }
  }, `Buttons`), `/`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/19/FormObjects/radiobuttonOverview"
    }
  }, `radio`), `/`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/19/FormObjects/checkboxOverview"
    }
  }, `check boxes`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/19/FormObjects/pictureButtonOverview"
    }
  }, `Picture buttons`), `/`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/19/FormObjects/picturePopupMenuOverview"
    }
  }, `Picture pop-ups`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/19/FormObjects/tabControl"
    }
  }, `Tab controls`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/19/FormObjects/listboxOverview#list-box-headers"
    }
  }, `List box headers`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/19/Menus/properties#item-icon"
    }
  }, `Menu icons`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D automatically prioritizes pictures with the highest resolution.`), /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("br", null), " **Example**: When using two screens (one high resolution display, one standard display) and you move a form from one screen to another, 4D  automatically renders the highest possible resolution of the picture. Even if a command or property specifies *circle.png*, *circle@3x.png* will be used (if it exists).", /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Note that resolution prioritization occurs only for displaying pictures onscreen, there is no automatic prioritization made when printing.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "dpi-macos-and-windows"
    }
  }, `DPI (macOS and Windows)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `While 4D automatically prioritizes the highest resolution,  there are, however, some behavioral differences depending on screen and image dpi`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `(`, `*`, `)`), `, and picture format:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
  }, `Behavior`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Drop or Paste`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `If the picture has:`, /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `72dpi or 96dpi`), ` - The picture is "`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/19/FormObjects/propertiesPicture#center--truncated-non-centered"
    }
  }, `Center`), `" formatted and the object containing the picture has the same number of pixels.`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `Other dpi`), ` - The picture is "`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/19/FormObjects/propertiesPicture#scaled-to-fit"
    }
  }, `Scaled to fit`), `" formatted and the object containing the picture is equal to (picture's number of pixels * screen dpi) / (picture's dpi)`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("li", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `No dpi`), ` - The picture is "`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/19/FormObjects/propertiesPicture#scaled-to-fit"
    }
  }, `Scaled to fit`), `" formatted.`)))), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/Setting-object-display-properties.300-4575725.en.html#148057"
    }
  }, `Automatic Size`), ` (Form Editor context menu)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `If the picture's display format  is:`, /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "strong",
    ...{
      "href": "/docs/19/FormObjects/propertiesPicture#scaled-to-fit"
    }
  }, `Scaled`)), ` - The object containing the picture is resized according to (picture's number of pixels * screen dpi) / (picture's dpi) `), ` `, /* @__PURE__ */ (0, import_react2.mdx)("li", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `Not scaled`), ` - The object containing the picture has the same number of pixels as the picture.`)))))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `(`, `*`, `) Typically,  macOS = 72dpi, Windows = 96dpi`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "dark-mode-pictures-macos-only"
    }
  }, `Dark mode pictures (macOS only)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can define specific pictures and icons to be used instead of standard pictures when `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/19/FormEditor/propertiesForm#color-scheme"
    }
  }, `forms use the dark scheme`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A dark mode picture is defined in the following way:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `dark mode picture has the same name as the standard (light scheme) version with the suffix "`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `_dark`), `"`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `dark mode picture is stored next to the standard version.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `At runtime, 4D will automatically load the light or dark image according to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/1761.html"
    }
  }, `current form color scheme`), `.  `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(22290)/* ["default"] */ .Z),
    width: "758",
    height: "246"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "mouse-coordinates-in-a-picture"
    }
  }, `Mouse Coordinates in a Picture`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D lets you retrieve the local coordinates of the mouse in an `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/19/FormObjects/inputOverview"
    }
  }, `input object`), ` associated with a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/19/FormObjects/propertiesObject#expression-type"
    }
  }, `picture expression`), `, in case of a click or a hovering, even if a scroll or zoom has been applied to the picture. This mechanism, similar to that of a picture map, can be used, for example, to handle scrollable button bars or the interface of cartography software.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The coordinates are returned in the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `MouseX`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `MouseY`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.en.html"
    }
  }, `System Variables`), `. The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0). If the mouse is outside of the picture coordinates system, -1 is returned in `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `MouseX`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `MouseY`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can get the value of these variables as part of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/19/Events/onClicked"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `On Clicked`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/19/Events/onDoubleClicked"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `On Double Clicked`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/19/Events/onMouseUp"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `On Mouse up`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/19/Events/onMouseEnter"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `On Mouse Enter`)), `, or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/19/Events/onMouseMove"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `On Mouse Move`)), ` form events.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 22290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/darkicon-a6428b1f55bb92aa93a9efcd2e556455.png");

/***/ }),

/***/ 73181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 33818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/picNoFormat2-ad015882b591ae364c3361325b40b6fe.png");

/***/ }),

/***/ 91817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/pictureScale1-6a3c795f192d157b724aa32aff50e77e.png");

/***/ }),

/***/ 69266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/pictureScale2-237c92c0209bcecc58087d7cc02cf0d0.png");

/***/ }),

/***/ 36716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/pictureScale3-cf162d1062562b17012494226b938198.png");

/***/ })

};
;