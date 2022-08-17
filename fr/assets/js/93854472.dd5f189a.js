exports.id = 9127;
exports.ids = [9127];
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

/***/ 32039:
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
var licenses_exports = {};
__export(licenses_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(licenses_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "licenses",
  title: "Managing 4D Licenses"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Admin/licenses",
  "id": "version-19/Admin/licenses",
  "title": "Managing 4D Licenses",
  "description": "Once installed on your disk, you must activate your 4D products in order to be able to use them. Usually, the activation is automatic if you sign in using your 4D account in the Welcome Wizard.",
  "source": "@site/versioned_docs/version-19/Admin/licenses.md",
  "sourceDirName": "Admin",
  "slug": "/Admin/licenses",
  "permalink": "/docs/fr/19/Admin/licenses",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "licenses",
    "title": "Managing 4D Licenses"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Web Data Explorer",
    "permalink": "/docs/fr/19/Admin/dataExplorer"
  },
  "next": {
    "title": "TLS Protocol (HTTPS)",
    "permalink": "/docs/fr/19/Admin/tls"
  }
};
const assets = {};
const toc = [{
  value: "First activation",
  id: "first-activation",
  level: 2
}, {
  value: "Instant Activation",
  id: "instant-activation",
  level: 3
}, {
  value: "Deferred Activation",
  id: "deferred-activation",
  level: 3
}, {
  value: "Emergency Activation",
  id: "emergency-activation",
  level: 3
}, {
  value: "Adding licenses",
  id: "adding-licenses",
  level: 2
}, {
  value: "4D Online Store",
  id: "4d-online-store",
  level: 2
}, {
  value: "License Management",
  id: "license-management",
  level: 3
}, {
  value: "Troubleshooting",
  id: "troubleshooting",
  level: 2
}, {
  value: "Contacts",
  id: "contacts",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once installed on your disk, you must activate your 4D products in order to be able to use them. Usually, the activation is automatic if you `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/GettingStarted/installation"
    }
  }, `sign in using your 4D account`), ` in the Welcome Wizard.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `However, in specific cases you could need to activate your licenses manually, for example if:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `your configuration does not allow the automatic activation,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `you have purchased additional licenses.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `No activation is required for the following uses:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `4D used in remote mode (connection to a 4D Server)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `4D used in local mode with an interpreted application project with no access to the Design environment.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "first-activation"
    }
  }, `First activation`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `With 4D, select the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `License Manager...`), ` command from the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Help`), ` menu of the application. With 4D Server, just launch the 4D Server application. The dialog box for choosing the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#activation-mode"
    }
  }, `activation mode`), ` appears.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(46041)/* ["default"] */ .Z),
    width: "792",
    height: "482"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D offers three activation modes. We recommend `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Instant Activation`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "instant-activation"
    }
  }, `Instant Activation`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Enter your user ID (email or 4D account) as well as your password. If you do not have an existing user account, you will need to create it at the following address:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://account.4d.com/us/login.shtml"
    }
  }, `https://account.4d.com/us/login.shtml`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(97871)/* ["default"] */ .Z),
    width: "634",
    height: "288"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Then enter the license number of the product you want to activate. This number is provided by email or by mail after a product is purchased.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(18999)/* ["default"] */ .Z),
    width: "633",
    height: "269"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "deferred-activation"
    }
  }, `Deferred Activation`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you are unable to use `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#instant-activation"
    }
  }, `instant activation`), ` because your computer does not have internet access, please proceed to deferred activation using the following steps.`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `In the License Manager window, select the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Deferred Activation`), ` tab.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Enter the License Number and your e-mail address, then click `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Generate file`), ` to create the ID file (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `reg.txt`), `).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(26453)/* ["default"] */ .Z),
    width: "634",
    height: "594"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 3
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Save the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `reg.txt`), ` file to a USB drive and take it to a computer that has internet access.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `On the machine with internet access, login to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://activation.4d.com"
    }
  }, `https://activation.4d.com`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `On the Web page, click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Choose File...`), ` button and select the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `reg.txt`), ` file from steps 3 and 4; then click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Activate`), ` button.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Download the serial file(s).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(2964)/* ["default"] */ .Z),
    width: "248",
    height: "73"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 7
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Save the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `license4d`), ` file(s) on a shared media and transfer them back to the 4D machine from step 1.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Now back on the machine with 4D, still on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Deferred Activation`), ` page, click `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Next`), `; then click the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Load...`), ` button and select a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `license4d`), ` file from the shared media from step 7.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(28574)/* ["default"] */ .Z),
    width: "787",
    height: "477"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `With the license file loaded, click on `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Next`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(74089)/* ["default"] */ .Z),
    width: "787",
    height: "479"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 9
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Add N\xB0`), ` button to add another license. Repeat these steps until all licenses from step 6 have been integrated.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Your 4D application is now activated.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "emergency-activation"
    }
  }, `Emergency Activation`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This mode can be used for a special temporary activation of 4D (5 days maximum) without connecting to the 4D Web site. This activation can only be used one time.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "adding-licenses"
    }
  }, `Adding licenses`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can add new licenses, for example to extend the capacities of your application, at any time.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Choose the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `License Manager...`), ` command from the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Help`), ` menu of the 4D or 4D Server application, then click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Refresh`), ` button:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(84470)/* ["default"] */ .Z),
    width: "634",
    height: "594"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This button connects you to our customer database and automatically activates any new or updated licenses related to the current license (the current license is displayed in `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `bold`), ` in the "Active Licenses" list). You will just be prompted for your user account and password.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If you purchased additional expansions for a 4D Server, you do not need to enter any license number -- just click `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Refresh`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `At the first activation of a 4D Server, you just need to enter the server number and all the purchased expansions are automatically assigned.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can use the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Refresh`), ` button in the following contexts:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When you have purchased an additional expansion and want to activate it,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When you need to update an expired temporary number (Partners or evolutions).`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "4d-online-store"
    }
  }, `4D Online Store`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In 4D Store, you can order, upgrade, extend, and/or manage 4D products. You can reach the store at the following address: `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://store.4d.com/us/"
    }
  }, `https://store.4d.com/us/`), ` (you will need to select your country).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Click `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Login`), ` to sign in using your existing account or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `New Account`), ` to create a new one, then follow the on-screen instructions.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "license-management"
    }
  }, `License Management`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `After you log in, you can click on `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `License list`), ` at the top right of the page:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(18327)/* ["default"] */ .Z),
    width: "269",
    height: "140"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here you can manage your licenses by assigning them to projects.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Select the appropriate license from the list then click `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Link to a project... >`), `:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(57658)/* ["default"] */ .Z),
    width: "617",
    height: "392"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can either select an existing project or create a new one:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(95765)/* ["default"] */ .Z),
    width: "642",
    height: "176"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(53491)/* ["default"] */ .Z),
    width: "642",
    height: "200"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can use projects to organize your licenses according to your needs:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(5168)/* ["default"] */ .Z),
    width: "574",
    height: "411"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "troubleshooting"
    }
  }, `Troubleshooting`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the installation or activation process fails, please check the following table, which gives the most common causes of malfunctioning:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Symptoms`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Possible causes`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Solution(s)`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Impossible to download product from 4D Internet site`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Internet site unavailable, antivirus application, firewall`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1- Try again later OR 2- Temporarily disable your antivirus application or your firewall.`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Impossible to install product on disk (installation refused).`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Insufficient user access rights`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Open a session with access rights allowing you to install applications (administrator access)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Failure of on-line activation`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Antivirus application, firewall, proxy`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1- Temporarily disable your antivirus application or your firewall OR 2- Use deferred activation (not available with licenses for "R" versions)`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If this information does not help you resolve your problem, please contact 4D or your local distributor.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "contacts"
    }
  }, `Contacts`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For any questions about the installation or activation of your product, please contact 4D, Inc. or your local distributor.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For the US:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Web: `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://us.4d.com/4d-technical-support"
    }
  }, `https://us.4d.com/4d-technical-support`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Telephone: 1-408-557-4600`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For the UK:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Web: `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://uk.4d.com/4d-technical-support"
    }
  }, `https://uk.4d.com/4d-technical-support`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Telephone: 01625 536178`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 97871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 18999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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p8q7yMf7UUUtyO7O2vS7KAlVOvJRDqts+f/tjGZYDSn6utkSfLU8aduqB/24afVlzv1mzgyshd2fxvtp+/biTNbme15f/v3931ZePHu5ckm/S9NkueSht3E7s0wwHJga9drbmuPKQtbCUV3K2u2ToH9iTM+RWXuE1IN+XB5Rh0ymjqLv7yZMpvH9PNvldvNsiusERV1pM2pfMM5arltnbdNelMmlV+2213S2fxfVNff/Nmo9Msujywteh22m2a4+rVeGJHX57v9ENB647LNN1U/btzNZC0d18XvttyRrP0ZOPM49hKOStVuy9mPkxOPcQzgqWbslaz9GTjzOPYSjkrVbsvZj5MTj3EM4Klm7JWs/Rk48zj2Eo1qyNn3OSebk4APKHQSgGmTt/MQEAB4nawEglqwFgFiyFgBiyVoAiCVrASCWrAWAWLIWAGLJWgCIJWsBIJasBYBYshYAYslaAIglawEglqwFgFiyFgBiyVoAiCVrASCWrAWAWLIWAGLJWgCIJWsBIJasBYBYshYAYslaAIglawEglqwFgFiyFgBiyVoAiCVrASCWrAWAWLIWAGLJWgCIJWsBIJasBYBYshYAYslaAIglawEglqwFgFiyFgBiyVoAiCVrASCWrAWAWLIWAGLJWgCIJWsBIJasBYBYshYAYslaAIglawEglqwFgFiyFgBiyVoAiCVrASCWrAWAWLIWAGLJWgCIJWsBIJasBYBYshYAYslaAIglawEglqwFgFiyFgBiyVoAiCVrASCWrAWAWLIWAGLJWgCIJWsBIJasBYBYshYAYslaAIglawEglqwFgFiyFgBiyVoAiCVrASCWrAWAWLIWAGLJWgCIJWsBIJasBYBYshYAYslaAIglawEglqwFgFiyFgBiyVoAiCVrASCWrAWAWLIWAGLJWgCIJWsBIJasBYBYshYAYslaAIglawEglqwFgFiyFgBiyVoAiCVrASCWrAWAWLIWAGLJWgCIJWsBIJasBYBYshYAYslaAIglawEglqwFgFiyFgBiyVoAiCVrASCWrAWAWLIWAGLJWgCIJWsBIJasBYBYshYAYslaAIglawEglqwFgFiyFgBiyVoAiCVrASCWrAWAWLIWAGLJWgCIJWsBIJasBYBYshYAYslaAIj13bP2/fSy8fr2a+qeft+q1v96e71v4Bdx7/V+VeP7f+PVPeNN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");

/***/ }),

/***/ 26453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/activ3-b4155cf70d7c830641839a1c7ff21bb1.png");

/***/ }),

/***/ 2964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 28574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/activ5-0015937b7cf0f42110578b76c6552fde.png");

/***/ }),

/***/ 74089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/activ6-1d1536e273780ab399c84dfa1827bf70.png");

/***/ }),

/***/ 84470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/licens1-c094e2284fac57bc82f3e51b8ee57bac.png");

/***/ }),

/***/ 18327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 57658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/licens3-59ecb360ab79b94e1a34fc0acad614bc.png");

/***/ }),

/***/ 95765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/licens4-77e9ddd214fdcb736a35014b926ceaf1.png");

/***/ }),

/***/ 53491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/licens5-fb9ca328f8bde786c1bd8b17828d1858.png");

/***/ }),

/***/ 5168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/licens6-d5c5021fa5a0e3fabd961a4096d8e9d2.png");

/***/ }),

/***/ 46041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/server1-c13e7ca279b236f2368466cca00d5be0.png");

/***/ })

};
;