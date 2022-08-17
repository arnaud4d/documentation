exports.id = 67004;
exports.ids = [67004];
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

/***/ 16340:
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
var onAlternativeClick_exports = {};
__export(onAlternativeClick_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(onAlternativeClick_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "onAlternativeClick",
  title: "On Alternative Click"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Events/onAlternativeClick",
  "id": "version-19-R6/Events/onAlternativeClick",
  "title": "On Alternative Click",
  "description": "|Code|Can be called by|Definition|",
  "source": "@site/versioned_docs/version-19-R6/Events/onAlternativeClick.md",
  "sourceDirName": "Events",
  "slug": "/Events/onAlternativeClick",
  "permalink": "/docs/pt/Events/onAlternativeClick",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "onAlternativeClick",
    "title": "On Alternative Click"
  },
  "sidebar": "docs",
  "previous": {
    "title": "On After Sort",
    "permalink": "/docs/pt/Events/onAfterSort"
  },
  "next": {
    "title": "On Before Data Entry",
    "permalink": "/docs/pt/Events/onBeforeDataEntry"
  }
};
const assets = {};
const toc = [{
  value: "Description",
  id: "description",
  level: 2
}, {
  value: "Buttons",
  id: "buttons",
  level: 3
}, {
  value: "List box",
  id: "list-box",
  level: 3
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
  }, `38`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/pt/FormObjects/buttonOverview"
    }
  }, `Button`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/pt/FormObjects/listboxOverview"
    }
  }, `List Box`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/pt/FormObjects/listboxOverview#list-box-columns"
    }
  }, `List Box Column`)), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", null, `Buttons: The "arrow" area of a button is clicked`), /* @__PURE__ */ (0, import_react2.mdx)("li", null, `List boxes: In a column of an object array, an ellipsis button ("alternateButton" attribute) is clicked`))))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "description"
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "buttons"
    }
  }, `Buttons`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Some button styles can be `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesTextAndPicture#with-pop-up-menu"
    }
  }, `linked to a pop-up menu`), ` and display an triangle. Clicking on this triangle causes a selection pop-up to appear that provides a set of alternative actions in relation to the primary button action.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D allows you to manage this type of button using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Alternative Click`), ` event. This event is generated when the user clicks on the triangle (as soon as the mouse button is held down):`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the pop-up menu is `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `separated`), `,the event is only generated when a click occurs on the portion of the button with the arrow.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the pop-up menu is `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `linked`), `, the event is generated when a click occurs on any part of the button. Note that the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/pt/Events/onLongClick"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `On Long Click`)), ` event cannot be generated with this type of button.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(79378)/* ["default"] */ .Z),
    width: "446",
    height: "169"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "list-box"
    }
  }, `List box`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This event is generated in columns of `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/listboxOverview#object-arrays-in-columns-4d-view-pro"
    }
  }, `object array type list boxes`), `, when the user clicks on a widget ellipsis button ("alternateButton" attribute).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(13564)/* ["default"] */ .Z),
    width: "199",
    height: "42"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `See the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/listboxOverview#alternatebutton"
    }
  }, `description of the "alternateButton" attribute`), `.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 79378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 13564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAAqCAIAAACIvdjNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAeWSURBVHhe7Zn7U5PZGcf7b/TH/gedQQHRbZdty+roCli73dLqOjtu7WjXYae7ulcZwQWXiQQpUu6QQO6WBAVDEMIl3CQJJIQg1wJyRxTDVcg63z7vm5eQUJyGaaizk/OZ7w/xvM+5zLyfOee8+BMwGMGGWcUIPswqRvBhVjGCz06rXuzG4NBIndG0/nJjeWWNJZRDDrhcS7Nz814ZBG/82YtV6xtLy6ssoRyS6YXLNTM775VB8MafPVi1tr7hWlphCeXQZrX4wjU9M0c/PC2CN/7sySphIJaQTZCtqjEYJyYmxsafsIRyOAfGxoaHR+iXp0Xwxp9ArTLUNswyGP+B4I0/gVqledCicrxiYVE5fmgedb98+dLlci0vLwve+BOoVZnKlrA8sLBQPtW/Ip8mJydnZmYEb/xhVoViwnM3fpk1/c7tsejM0UBClW9nTUXmrHq6M6tYdiY8dzMmczDx+u3U1NSUwKDKz5PFsaJHEf9YpxGYVSw785vMwSvXRRKJZH5+3u12/xAAz5490+l011Iz4tI5DZhVLDtzNKM3Qyymz7eNjQ2SYykA6G6+sLBQVlZ+Oq2WRtgXq4qmkGtAfPH2QhOqoRjHDfl2i28+rodsEN/I8GsZ7j5H1l28XbCzZj+SNYL8BiSU+DX6roEK0qpx0udpKORdUU9mZmbgShFUub6+rlKpTn1XQyPsi1UVLiiM+J3P2zpnQO0Cbqu2W3zziQn6SaQpEKNAgxtSLd75v1glmYW6DedK/Rp910AF2Qac8nkaConhrdrc3HTtBdquyKr4G3oagVnFrNoZskosFtNeJbzdwPDsVW/OqjKIuqBwQuNE0j0ce51VEnzZinK+rLAVf1Vsj0ZJqMO1ezjJC3FGj6QmfEi/CxCtxJ1GRFJ3KZI7Iee75zXhvIyrpPHTHLhpgroXFyXQeK0qxpkalDih6EZJM7NKsIru4IGztra271ZZRqHuRp5FiHYYdt6q8EJc7YHeCWkX8vqhaMWn8t2tutiO6iHoHMizQdcPnRlnfDaV021osuIiaVqGZBs6R5FdiQgJ/tSIAQcOFyLRivphaHqQZ0f1ADfRByX4rQ6mDXT1odCCj0qh2rLqfT2K+9HQj3wLp/uIG2Ueq8aRpsfxrUlDJB6r6ER7uhdWV1f33SrHJAyPuX3CE+MT9JFVakTJ0O5GRy/utCLNDlMfMvW7WSWFZh732/GRhNtILrageoS7QXunCKtE+yC+rsSJBxD1wD4IbRtilUh+jAYjoqQwLEHbiN+TiCW4YkbVY6SpOaua1/gC/oQVTkAZrlugH8RVBSJL8WEznmxZldOHK/fwK++koRGPVbT3kBaBQ3d2pVL5Jk5ADQ5rMeBG/wRaRmGk2PFl5W5Wabj64q3T51Q1sh2QVG0PGFYO9b9wqwbftUPcCVkn7jrxRSW0k0iVI0KDRyu4oxO2mT88RL6N28zIqroVFKgRmc+1C1ZpkG6B2ix86/nul5/U44wSv/BOGhohqzIyMsiSob1Ah6BCoXgTVqlxWIMeN0oqcaxw++kuVilQ9RTyBnxAZQX440MU9+FOxXYXytdOyDpg7MWtRlwyQPwYkiZYhxGXjwNymJZR8gBxfPfzTZDYka55jVUqpNIZbcfZYhwsRFwlrFtWndDgWCmifCYNhXitGhCwmqoMza1WW5/d3NTQUGsy9zodXW31FYZWx0C/UDPw5qxS4VARlIsYHEBiJWIViC1HdPHu96os2sl6kXQfsVqk2bjz9M9bo3nynhHVkxgeQGolov+JL+zoHEGzSXhaNINGGz6jWXT4uxPaLpzLe41VpUhsh+EJyurwvg5JTiy5Uc6vIWRv62SVy+VyCkj+9vOjl7+VaB/dy7n08fnjn+U0NRtk1xN++u63Bqe9Vyiiq5VcLt9Hq5TPIK3DaZ+/gp6twf1Z3FIijF6nCs2LWNzEKoVeWy0uNUE3jhQ5YuQwrKGwAtF075GjfBzzfJltAF/xH3F+4QuqzLggRVgpLphg9kzhearkZlzgu3f0ILGMazylxYNF5KgEqwonITPhLN291EhxcpWLL+Ds2V4DFYhrEO+dMTTisWpxcbFHQPJ5xMnEJElFmy7n8l8uxF3NMTbqZSlnf/beNX1Pl10ompub21+raEOib/uDPgs9WMA1RvDvksSKKsKRYrxF4SvDt54eoEfF3Cs/wJdRo6eMvunCPX19wxccou78P2kQGlaYYuupp3sUdecbD/KNHqUokXx3bp35iCjkKo8UcXN510AFtDxuMaEUj1XPnz+3C3RbHpkt1u5uW3eXxWIxW7tsNlu31dzRabUJFcTs7Oz+WsXyo87RWw6yampqipzg/AmAiYmJ6elpqVS6j/8PyPKjToy4/6sUkUajIVE8f4v6r5A9er0+Jf12/PfNNAKzimVnDuUsx4s6vrkhys3NzQsMqky+KU743nAke4FGYFax7JLInJXjIuvJ9LYTN1sCCVcpsryV/dTTPWhWFakfXpb0srBQ8uvHgmPV/SqDlcHgGRoaCo5VxsYWoYIR8rx6FaQTkFnF8MKsYgQfZhUj+OzZKgbjf4dZxQg+zCpG8GFWMYIPs4oRbIB/A93xPN2WiIH6AAAAAElFTkSuQmCC");

/***/ })

};
;