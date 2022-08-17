exports.id = 77191;
exports.ids = [77191];
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

/***/ 69610:
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
var properties_exports = {};
__export(properties_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(properties_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "properties",
  title: "Menu item properties"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Menus/properties",
  "id": "version-18/Menus/properties",
  "title": "Menu item properties",
  "description": "You can set various properties for menu items such as action, font style, separator lines, keyboard shortcuts or icons.",
  "source": "@site/versioned_docs/version-18/Menus/properties.md",
  "sourceDirName": "Menus",
  "slug": "/Menus/properties",
  "permalink": "/docs/18/Menus/properties",
  "draft": false,
  "tags": [],
  "version": "18",
  "frontMatter": {
    "id": "properties",
    "title": "Menu item properties"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Creating menus and menu bars",
    "permalink": "/docs/18/Menus/creating"
  },
  "next": {
    "title": "Menu bar features",
    "permalink": "/docs/18/Menus/bars"
  }
};
const assets = {};
const toc = [{
  value: "Title",
  id: "title",
  level: 2
}, {
  value: "Using control characters",
  id: "using-control-characters",
  level: 3
}, {
  value: "Parameter",
  id: "parameter",
  level: 2
}, {
  value: "Action",
  id: "action",
  level: 2
}, {
  value: "Associating a project method or a standard action",
  id: "associating-a-project-method-or-a-standard-action",
  level: 3
}, {
  value: "Start a new process",
  id: "start-a-new-process",
  level: 3
}, {
  value: "Execute without validating",
  id: "execute-without-validating",
  level: 3
}, {
  value: "Remote access privileges",
  id: "remote-access-privileges",
  level: 2
}, {
  value: "Options",
  id: "options",
  level: 2
}, {
  value: "Separator lines",
  id: "separator-lines",
  level: 3
}, {
  value: "Keyboard shortcuts",
  id: "keyboard-shortcuts",
  level: 3
}, {
  value: "Enabled item",
  id: "enabled-item",
  level: 3
}, {
  value: "Check mark",
  id: "check-mark",
  level: 3
}, {
  value: "Font styles",
  id: "font-styles",
  level: 3
}, {
  value: "Item icon",
  id: "item-icon",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can set various properties for menu items such as action, font style, separator lines, keyboard shortcuts or icons.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "title"
    }
  }, `Title`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Title`), ` property contains the label of a menu or menu item as it will be displayed on the application interface.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the Menu editor, you can directly enter the label as "hard coded". Or, you can enter a reference for a variable or an XLIFF element, which will facilitate the maintenance and translation of applications. You can use the following types of references:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `An XLIFF resource reference of the type :xliff:MyLabel. For more information about XLIFF references, refer to `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `XLIFF Architecture`), ` section in `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `4D Design Reference`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `An interprocess variable name followed by a number, for example: :`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `<>vlang,3`), `. Changing the contents of this variable will modify the menu label when it is displayed. In this case, the label will call an XLIFF resource. The value contained in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `<>vlang`), ` variable corresponds to the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `id`), ` attribute of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `group`), ` element. The second value (3 in this example) designates the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `id`), ` attribute of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `trans-unit`), ` element.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using the 4D language, you set the title property through the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `itemText`), ` parameter of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `APPEND MENU ITEM`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `INSERT MENU ITEM`), `, and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET MENU ITEM`), ` commands.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-control-characters"
    }
  }, `Using control characters`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can set some properties of the menu commands by using control characters (metacharacters) directly in the menu command labels. For instance, you can assign the keyboard shortcut Ctrl+G (Windows) or Command+G (macOS) for a menu command by placing the "/G" characters in the label of the menu item label.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Control characters do not appear in the menu command labels. You should therefore avoid using them so as not to have any undesirable effects. The control characters are the following:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Character`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Usage`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `(`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `open parenthese`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Disable item`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `<B`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `less than B`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Bold font`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `<I`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `less than I`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Italic font`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `<U`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `less than U`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Underline font`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `!+character`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `exclamation point+character`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Add character as check mark (macOS); add check mark (Windows)`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `/+character`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `slash+character`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Add character as shortcut`)))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "parameter"
    }
  }, `Parameter`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can associate a custom parameter with each menu item. A menu item parameter is a character string whose contents can be freely chosen. It can be set in the Menu editor, or through the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET MENU ITEM PARAMETER`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Menu item parameters are useful with programmed management of menus, in particular when using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Dynamic pop up menu`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Get menu item parameter`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Get selected menu item parameter`), ` commands.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "action"
    }
  }, `Action`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each menu command can have a project method or a standard action attached to it. When the menu command is chosen, 4D executes the associated standard action or project method. For example, a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Monthly Report`), ` menu command can call a project method that prepares a monthly report from a table containing financial data. The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Cut`), ` menu command usually calls the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `cut`), ` standard action in order to move the selection to the clipboard and erase it from the window in the foreground.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you do not assign a method or a standard action to a menu command, choosing that menu command causes 4D to exit the Application environment and go to the Design environment. If only the Application environment is available, this means quitting to the Desktop.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Standard actions can be used to carry out various current operations linked to system functions (copy, quit, etc.) or to those of the 4D database (add record, select all, etc.).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can assign both a standard action and a project method to a menu command. In this case, the standard action is never executed; however, 4D uses this action to enable/disable the menu command according to the current context and to associate a specific operation with it according to the platform. When a menu command is deactivated, the associated project method cannot be executed.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The choice between associating a standard action or a project method with a menu command depends on the type of result desired. In principle, it is preferable to choose a standard action whenever possible since they implement optimized mechanisms, more particularly activation/deactivation according to the context.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "associating-a-project-method-or-a-standard-action"
    }
  }, `Associating a project method or a standard action`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can assign a project method and/or a standard action to a selected menu command in the Menu editor:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Method Name`), `: Select an existing project method name in the combo box. If the project method does not exist, enter its name in the "Method Name" combo box then click on the `, `[...]`, ` button. 4D displays a project method creation dialog that is used to access the Method editor.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Associated Standard Action`), `: Choose or write the action you want to assign in the "Associated Standard Action" combo box. You can enter any supported action and (optionally) parameter you want in the area. For a comprehensive list of standard actions, please refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Standard actions`), ` section in the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Design Reference`), `.
`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Note for macOS:`), ` Under macOS, the custom menu commands associated with the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Quit`), ` action are automatically placed in the application menu, in compliance with the platform interface standards.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using the 4D language, you can associate a project method using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET MENU ITEM METHOD`), ` command, and a standard action using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET MENU ITEM PROPERTY`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "start-a-new-process"
    }
  }, `Start a new process`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Start a New Process`), ` option is available for menu commands associated to methods. It can be set through a check box in the Menu editor, or through the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `property`), ` parameter of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET MENU ITEM PROPERTY`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Start a New Process`), ` option is enabled, a new process is created when the menu command is chosen.
Normally, a method attached to a menu command executes within the current process unless you explicitly call a new process in your code. The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Start a New Process`), ` option makes it easier to start a new process. When enabled, 4D will create a new process when the menu command is chosen.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the Process list, 4D assigns the new process a default name using the format "ML`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `ProcessNumber".
The names of processes started from a menu are created by combining the prefix "ML`), `" with the process number.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "execute-without-validating"
    }
  }, `Execute without validating`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Execute without validating`), ` option is available for menu commands associated to standard actions in the Menu editor only.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this option is checked, 4D does not trigger the "validation" of the field where the cursor is located before executing the associated action.
This option is mainly intended for `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Edit`), ` menu commands. By default, 4D processes and "validates" the contents of a field before executing a standard action (via a menu command or a shortcut), which has the effect of generating an `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Data Change`), ` form event. This can disrupt the functioning of copy or paste type commands because when they are called, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Data Change`), ` form event is generated unexpectedly. In this case, it is useful to check the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Execute without validating`), ` option.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "remote-access-privileges"
    }
  }, `Remote access privileges`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This Menu editor option allows defining a group to a menu command so that only users in that group can use the menu command from a 4D remote application (see Users and groups).`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "options"
    }
  }, `Options`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "separator-lines"
    }
  }, `Separator lines`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Groups of menu commands in a menu can be divided by a separator line. This convention is useful for grouping associated menu commands by function.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(97337)/* ["default"] */ .Z),
    width: "180",
    height: "121"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You add a separator line by creating a specific menu command.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the Menu editor, instead of entering the menu command\u2019s text in the title area, you simply select the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Separator Line`), ` option. Instead of text, a line appears in the current menu bar area. When this option is checked, the other properties have no effect.
`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note:`), ` Under macOS, if you use the dash \u201C-\u201D as the first character of a menu item, it will appear as a separator line.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the 4D language, you insert a separator line by entering `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `-`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `(-`), ` as itemText for `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `APPEND MENU ITEM`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `INSERT MENU ITEM`), `, or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET MENU ITEM`), ` commands.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "keyboard-shortcuts"
    }
  }, `Keyboard shortcuts`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can add keyboard shortcuts to any menu command. If a menu command has one of these keyboard shortcuts, users will see it next to the menu command. For example, "Ctrl+C" (Windows) or "Command+C" (macOS) appears next to the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Copy`), ` menu command in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Edit`), ` menu.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also add the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Shift`), ` key as well as the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Alt`), ` key (Windows) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Option`), ` key (macOS) to the shortcut associated with a menu command. This multiplies the number of shortcuts that can be used. The following types of keyboard shortcuts can therefore be defined:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Under Windows:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Ctrl+character`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Ctrl+Shift+character`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Ctrl+Alt+character`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Ctrl+Shift+Alt+character`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Under macOS:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Command+character`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Command+Shift+character`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Command+Option+character`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Command+Shift+Option+character`)))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `We recommend that you keep the default keyboard shortcuts that are associated with standard actions.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can use any alphanumeric keys as a keyboard shortcut, except for the keys reserved by standard menu commands that appear in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Edit`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `File`), ` menus, and the keys reserved for 4D menu commands.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `These reserved key combinations are listed in the following table:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Key (Windows)`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Key (macOS)`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Operation`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Ctrl+C`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Command+C`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Copy`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Ctrl+Q`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Command+Q`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Quit`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Ctrl+V`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Command+V`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Paste`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Ctrl+X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Command+X`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Cut`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Ctrl+Z`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Command+Z`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Undo`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Ctrl+. (period)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Command+. (period)`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Stop action`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To assign a keyboard shortcut in the Menu editor:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Select the menu item to which you want to assign a keyboard shortcut.
Click on the `, `[...]`, ` button to the right of the "Shortcut" entry area. The following window appears:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(10523)/* ["default"] */ .Z),
    width: "365",
    height: "277"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Enter the character to use then (optional) click the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Shift`), ` and/or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Alt`), ` (`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Option`), `) checkboxes according to the combination desired.
You can also directly press the keys that make up the desired combination (do not press the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Ctrl/Command`), ` key).`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You cannot deselect the Ctrl/Command key, which is mandatory for keyboard shortcuts for menus.
To start over, click on `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Clear`), `. Click `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `OK`), ` to validate the changes. The shortcut defined is shown in the "Shortcut" entry area.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To assign a keyboard shortcut using the 4D language, use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET ITEM SHORTCUT`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `An active object can also have a keyboard shortcut. If the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Ctrl/Command`), ` key assignments conflict, the active object takes precedence.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "enabled-item"
    }
  }, `Enabled item`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the Menu editor, you can specify whether a menu item will appear enabled or disabled. An enabled menu command can be chosen by the user; a disabled menu command is dimmed and cannot be chosen. When the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Enabled Item`), ` check box is unchecked, the menu command appears dimmed, indicating that it cannot be chosen.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Unless you specify otherwise, 4D automatically enables each menu item you add to a custom menu. You can disable an item in order, for example, to enable it only using programming with `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ENABLE MENU ITEM`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `DISABLE MENU ITEM`), ` commands.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "check-mark"
    }
  }, `Check mark`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This Menu editor option can be used to associate a system check mark with a menu item. You can then manage the display of the check mark using language commands (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET MENU ITEM MARK`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Get menu item mark`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Check marks are generally used for continuous action menu items and indicate that the action is currently underway.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "font-styles"
    }
  }, `Font styles`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D lets you customize menus by applying different font styles to the menu commands. You can customize your menus with the Bold, Italic or Underline styles through options in the Menu editor, or using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET MENU ITEM STYLE`), ` language command.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `As a general rule, apply font styles sparingly to your menus \u2014 too many styles will be distracting to the user and give a cluttered look to your application.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You can also apply styles by inserting special characters in the menu title (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/18/Menus/properties#using-control-characters"
    }
  }, `Using control characters`), ` above).`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "item-icon"
    }
  }, `Item icon`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can associate an icon with a menu item. It will displayed directly in the menu, next to the item:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(87839)/* ["default"] */ .Z),
    width: "123",
    height: "105"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To define the icon in the Menu editor, click on the "Item icon" area and select `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Open`), ` to open a picture from the disk. If you select a picture file that is not already stored in the database resources folder, it is automatically copied in that folder. Once set, the item icon appears in the preview area:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(35876)/* ["default"] */ .Z),
    width: "107",
    height: "36"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To remove the icon from the item, choose the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `No Icon`), ` option from the "Item Icon" area.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To define item icons using the 4D language, call the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET MENU ITEM ICON`), ` command.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 10523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 87839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 35876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAAAkCAIAAAAB01PiAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAANcSURBVGhD7Zi/TipBFIctFBvjn2BisEJKUbSBmkp9By0oLoQHMDyCG0MvwVorK42VPoAWojFqhIJAKBTU4lIRozf3/thzdhl2diGyXkxgvkLPnDlncT5nJ7uM/Fa4YwANnvaXwTT4q18MskEe/GeUQbcog25RBt2iDLpFGXTLsBj8/Pz8I9FoNIrFYqFQeHl54VQ76OJ+Z4bFIHT8Fcjn88lk0u/3j+hMTU1Fo9H9/X2eNkAX9zszjAY1TSNxHo9ndXU1HA7PzMxQJhQKXV5ecp0yyAMd02AikYCp2dnZTCZTrVYpWa/XDw8Pl5aWMAWtJycnSJ6dnZVKJe53ZogM4lBDEo6w7yqVCrkTwbFIficmJjY2NhDc3NxwvzNDZPD9/X19fd3n85lbz5bFxUW4A6Ojow8PD9zvzBAZJEHPz88UyFxdXS0sLJA+gNv5/v6e+50xDR7FRmJHHES0az3XI+alfowOBjvw+vq6u7uLTfrjBn8e2eDHxwd76gY8bm9vQx8k3t3doZeEWqDLAotB/GQMi0aGd1XTbywWoQKes264Zo3xP5DbCbEgommc5ixy1mt+Ddng7e3t1tYWzjX21A3svs3NTXRRO/15JpQkuuxBI3utRSiJhD6NBGlpBpbltq7QrBYm2yaEktYnU4TAcskvIhvEbsLnjI+Pp1Kpt7c39tQN7FzuFyTy2KCzQX15BsbiaFYOTJymxKFtjaW+d2SD2FN0Y4L5+fl0Oo27lT05g9OT+3XQy5FAV4OWJZkZOTBxmhKHtjWW+t7pbBAEAoFcLseeJJ6eniiwGLSls8HmLdq+Jnnl8rLNjLW9VWoXtWL8/u67GCcgnu9IH574SJAteFqcm5tbW1vD82NvBpsR4GXp552Oxa8cmIgZuph5GhrDtgIpxu/vNoi3C3wq3jTwvoEgHo/jDYSdCeBdZWVlBQVop69zuN8Z0+BAIRssl8vn5+dwdHx8TLdzMBg8ODjAFLnD1tvb2/N6veSXkspgC7ggKeDi4mJ5eRmmwPT0dDgcDoVCY2NjlNnZ2eE6ZZAHOqJBIpvNRqPRyclJEuf3+5PJ5OPjI0/rKIMtbL+jBrVaLZ/PF4tFHIucElDfUfcDZdAtyqBblEG3KINuUQbdogy6ZWAN9o/T039MikcP5/m0MAAAAABJRU5ErkJggg==");

/***/ }),

/***/ 97337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;