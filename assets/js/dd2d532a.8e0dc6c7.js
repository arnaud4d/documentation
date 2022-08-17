exports.id = 31403;
exports.ids = [31403];
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

/***/ 18011:
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
var creating_exports = {};
__export(creating_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(creating_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "creating",
  title: "Creating menus and menu bars"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Menus/creating",
  "id": "version-19-R6/Menus/creating",
  "title": "Creating menus and menu bars",
  "description": "You can create menus and menu bars:",
  "source": "@site/versioned_docs/version-19-R6/Menus/creating.md",
  "sourceDirName": "Menus",
  "slug": "/Menus/creating",
  "permalink": "/docs/Menus/creating",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "creating",
    "title": "Creating menus and menu bars"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Overview",
    "permalink": "/docs/Menus/overview"
  },
  "next": {
    "title": "Menu item properties",
    "permalink": "/docs/Menus/properties"
  }
};
const assets = {};
const toc = [{
  value: "Default menu bar",
  id: "default-menu-bar",
  level: 2
}, {
  value: "Creating menus",
  id: "creating-menus",
  level: 2
}, {
  value: "Using the Menu editor",
  id: "using-the-menu-editor",
  level: 3
}, {
  value: "Using the 4D language",
  id: "using-the-4d-language",
  level: 3
}, {
  value: "Adding items",
  id: "adding-items",
  level: 2
}, {
  value: "Using the Menu editor",
  id: "using-the-menu-editor-1",
  level: 3
}, {
  value: "Using the 4D language",
  id: "using-the-4d-language-1",
  level: 3
}, {
  value: "Deleting menus and items",
  id: "deleting-menus-and-items",
  level: 2
}, {
  value: "Using the Menu editor",
  id: "using-the-menu-editor-2",
  level: 3
}, {
  value: "Using the 4D language",
  id: "using-the-4d-language-2",
  level: 3
}, {
  value: "Attaching menus",
  id: "attaching-menus",
  level: 2
}, {
  value: "Using the Menu editor",
  id: "using-the-menu-editor-3",
  level: 3
}, {
  value: "Detaching menus",
  id: "detaching-menus",
  level: 4
}, {
  value: "Using the 4D language",
  id: "using-the-4d-language-3",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can create menus and menu bars:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `using the Menus editor of the 4D Toolbox window. In this case, menus and menu bars are stored in the application's structure.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `dynamically, using the language commands from the "Menus" theme. In this case, menus and menu bars are not stored, they only exist in memory.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can combine both features and use menus created in structure as templates to define menus in memory. `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "default-menu-bar"
    }
  }, `Default menu bar`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A custom application must contain at least one menu bar with one menu. By default, when you create a new project, 4D automatically creates a default menu bar (Menu Bar #1) so that you can access the Application environment. The default menu bar includes standard menus and a command for returning to the Design mode. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This allows the user to access the Application environment as soon as the project is created. Menu Bar #1 is called automatically when the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Test Application`), ` command is chosen in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Run`), ` menu. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The default menu bar includes three menus:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `File`), `: only includes the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Quit`), ` command. The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Quit`), ` standard action is associated with the command, which causes the application to quit.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Edit`), `: standard and completely modifiable. Editing functions such as copy, paste, etc. are defined using standard actions.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Mode`), `: contains, by default, the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Return to Design mode`), ` command, which is used to exit the Application mode.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Menu items appear `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `in italics`), ` because they consist of references and not hard-coded text. Refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/Menus/properties#title"
    }
  }, `Title property`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can modify this menu bar as desired or create additional ones.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "creating-menus"
    }
  }, `Creating menus`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-the-menu-editor"
    }
  }, `Using the Menu editor`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Select the item you want to create and click the add `, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(6627)/* ["default"] */ .Z),
    width: "20",
    height: "16"
  }), ` button below the menu bar area.
OR
Choose `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Create a new menu bar`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Create a new menu`), ` from the context menu of the list or the options menu below the list.
If you created a menu bar, a new bar appears in the list containing the default menus (File and Edit).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `(optional) Double-click on the name of the menu bar/menu to switch it to editing mode and enter a custom name.
OR
Enter the custom name in the "Title" area.
Menu bar names must be unique. They may contain up to 31 characters. You can enter the name as "hard coded" or enter a reference (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/Menus/properties#title"
    }
  }, `information about the Title property`), `).`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-the-4d-language"
    }
  }, `Using the 4D language`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Create menu`), ` command to create a new menu bar or menu reference (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `MenuRef`), `) in memory.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When menus are handled by means of `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `MenuRef`), ` references, there is no difference per se between a menu and a menu bar. In both cases, it consists of a list of items. Only their use differs. In the case of a menu bar, each item corresponds to a menu which is itself composed of items. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Create menu`), ` can create empty menus (to fill using `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `APPEND MENU ITEM`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `INSERT MENU ITEM`), `) or by menus built upon menus designed in the Menu editor.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "adding-items"
    }
  }, `Adding items`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For each of the menus, you must add the commands that appear when the menu drops down. You can insert items that will be associated with methods or standard actions, or attach other menus (submenus).`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-the-menu-editor-1"
    }
  }, `Using the Menu editor`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To add a menu item:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `In the list of source menus, select the menu to which you want to add a command.
If the menu already has commands, they will be displayed in the central list. If you want to insert the new command, select the command that you want it to appear above. It is still be possible to reorder the menu subsequently using drag and drop.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Choose `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Add an item to menu \u201CMenuName\u201D`), ` in the options menu of the editor or from the context menu (right click in the central list).
OR
Click on the add `, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(6627)/* ["default"] */ .Z),
    width: "20",
    height: "16"
  }), ` button located below the central list.
4D adds a new item with the default name \u201CItem X\u201D where X is the number of items already created.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Double-click on the name of the command in order to switch it to editing mode and enter a custom name.
OR
Enter the custom name in the "Title" area. It may contain up to 31 characters. You can enter the name as "hard coded" or enter a reference (see below).`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-the-4d-language-1"
    }
  }, `Using the 4D language`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Use `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `INSERT MENU ITEM`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `APPEND MENU ITEM`), ` to insert or to add menu items in existing menu references. `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "deleting-menus-and-items"
    }
  }, `Deleting menus and items`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-the-menu-editor-2"
    }
  }, `Using the Menu editor`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can delete a menu bar, a menu or a menu item in the Menu editor at any time. Note that each menu or menu bar has only one reference. When a menu is attached to different bars or different menus, any modification or deletion made to the menu is immediately carried out in all other occurrences of this menu. Deleting a menu will only delete a reference. When you delete the last reference of a menu, 4D displays an alert. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To delete a menu bar, menu or menu item:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Select the item to be deleted and click on the delete `, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(3071)/* ["default"] */ .Z),
    width: "19",
    height: "18"
  }), ` button located beneath the list.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `or, use the appropriate `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Delete...`), `  command from the context menu or the options menu of the editor.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `It is not possible to delete Menu Bar #1.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-the-4d-language-2"
    }
  }, `Using the 4D language`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Use `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `DELETE MENU ITEM`), ` to remove an item from a menu reference. Use `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `RELEASE MENU`), ` to unload the menu reference from the memory.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "attaching-menus"
    }
  }, `Attaching menus`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once you have created a menu, you can attach it to one or several other menus (sub-menu) or menu bar(s). `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Sub-menus can be used to group together functions organized according to subject within the same menu. Sub-menus and their items can have the same attributes as the menus themselves (actions, methods, shortcuts, icons, and so on). The items of the sub-menu keep their original characteristics and properties and the functioning of the sub-menu is identical to that of a standard menu. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can create sub-menus of sub-menus to a virtually unlimited depth. Note, however, that for reasons concerning interface ergonomics, it is generally not recommended to go beyond two levels of sub-menus.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `At runtime, if an attached menu is modified by programming, every other instance of the menu will reflect these changes. `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-the-menu-editor-3"
    }
  }, `Using the Menu editor`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A menu can be attached to a menu bar or to another menu.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To attach a menu to a menu bar: right-click on the menu bar and select `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Attach a menu to the menu bar "bar name" >`), `, then choose the menu to be attached to the menu bar:
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(58501)/* ["default"] */ .Z),
    width: "482",
    height: "199"
  }), `
You can also select a menu bar then click on the options button found below the list.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To attach a menu to another menu: select the menu in the left-hand area, then right-click on the menu item and select `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Attach a sub-menu to the item "item name">`), `, then choose the menu you want to use as sub-menu:`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "li"
  }), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(49946)/* ["default"] */ .Z),
    width: "492",
    height: "140"
  }), `
You can also select a menu item then click on the options button found below the list.
The menu being attached thus becomes a sub-menu. The title of the item is kept (the original sub-menu name is ignored), but this title can be modified.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "detaching-menus"
    }
  }, `Detaching menus`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can detach a menu from a menu bar or a sub-menu from a menu at any time. The detached menu is then no longer available in the menu bar or sub-menu as the case may be, but it is still present in the list of menus. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To detach a menu, right-click with the right button on the menu or sub-menu that you want to detach in the central list, then choose the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Detach the menu(...)`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Detach the sub-menu(...)`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-the-4d-language-3"
    }
  }, `Using the 4D language`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Since there is no difference between menus and menu bars in the 4D language, attaching menus or sub-menus is done in the same manner: use the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `subMenu`), ` parameter of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `APPEND MENU ITEM`), ` command to attach a menu to a menu bar or an menu.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 3071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAACnSURBVDhP1ctPC4JAEAXw+YJlsML2dYMigkyDwIxAMkJz7Z9lZaceu7BevDSeGn6H3Zn3qKw+PB2a13vNQ+dbzdOhqS5vHjqeXjyUqicPHfLKSNJyqEdK6bpuXw8e+GKwR8CGoWlud0oIMdDjOE5PDx5mgxMCNgy0zx7GJs5ni/VoErTCCQEbBvJDZXirbOon43ncCicEbBia5q/+rBmEBQ8to4IjKr7x0nj9UM5kBgAAAABJRU5ErkJggg==");

/***/ }),

/***/ 6627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAADxSURBVDhPnY9Pa8JAFMTfF6wpTbS99HN6EhEVEbTmUEiplWBETbKatv6renJ4C491Gz3s8DsMOzPsLm32Z2foZ3tyhorfkzM3x6o4vLJgrEgg9X0sJVkUzywYKxIoW/+VMpnmQRD4vg9jRQIt1aGUcZzpMYwVCTTP90Ky3Lyw8FosKywY/X6co2D2r8ZfU4WrHlme5z2wYPQJIhTMPs3SnfAZ5/23j1Y3BM32ENdiCaNPEKFg9mkUKWH4nvZGSWcQg0YnemLB6BNEKJj9q7EJ2lUWjBUJ98Y1lssYj6w3QwBjRcLNsf7//3+aUBitHIlWFwd0H5oG1DOiAAAAAElFTkSuQmCC");

/***/ }),

/***/ 58501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 49946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;