exports.id = 10743;
exports.ids = [10743];
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

/***/ 24921:
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
var handling_users_groups_exports = {};
__export(handling_users_groups_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(handling_users_groups_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "editing",
  title: "Managing 4D users and groups"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Users/editing",
  "id": "version-18/Users/editing",
  "title": "Managing 4D users and groups",
  "description": "Designer and Administrator",
  "source": "@site/versioned_docs/version-18/Users/handling_users_groups.md",
  "sourceDirName": "Users",
  "slug": "/Users/editing",
  "permalink": "/docs/18/Users/editing",
  "draft": false,
  "tags": [],
  "version": "18",
  "frontMatter": {
    "id": "editing",
    "title": "Managing 4D users and groups"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Overview",
    "permalink": "/docs/18/Users/overview"
  },
  "next": {
    "title": "Getting Started",
    "permalink": "/docs/18/REST/gettingStarted"
  }
};
const assets = {};
const toc = [{
  value: "Designer and Administrator",
  id: "designer-and-administrator",
  level: 2
}, {
  value: "Users editor",
  id: "users-editor",
  level: 2
}, {
  value: "Adding and modifying users",
  id: "adding-and-modifying-users",
  level: 3
}, {
  value: "Deleting a user",
  id: "deleting-a-user",
  level: 3
}, {
  value: "User properties",
  id: "user-properties",
  level: 3
}, {
  value: "Groups editor",
  id: "groups-editor",
  level: 2
}, {
  value: "Configuring groups",
  id: "configuring-groups",
  level: 3
}, {
  value: "Placing users or groups into groups",
  id: "placing-users-or-groups-into-groups",
  level: 3
}, {
  value: "Assigning a group to a plug-in or to a server",
  id: "assigning-a-group-to-a-plug-in-or-to-a-server",
  level: 3
}, {
  value: "An access hierarchy scheme",
  id: "an-access-hierarchy-scheme",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "designer-and-administrator"
    }
  }, `Designer and Administrator`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D provides users with certain standard access privileges and certain powers. Once a users and groups system has been initiated, these standard privileges take effect.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The most powerful user is named `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Designer`), `. No aspect of the database is closed to the Designer.
The Designer can:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `access all database servers without restriction,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `create users and groups,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `assign access privileges to groups,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `access the Design environment.
In single-user environment, Designer access rights are always used.
In client/server environment, assigning a password to the Designer activates the display of the 4D user login dialog.  Access to Design environment is read-only.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `After the Designer, the next most powerful user is the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Administrator`), `, who is usually given the tasks of managing the access system and administration features.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Administrator can:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `create users and groups,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `access the 4D Server Administration window and monitor`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `access the MSC window to monitor backup, restore, or server.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Administrator cannot:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `edit the Designer user`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `by default, access to protected parts of the database. In particular, the Administrator cannot access to the Design mode if it is restricted. The Administrator must be part of one or more groups to have access privileges in the database. The Administrator is placed in every new group, but you can remove the Administrator\u2019s name from any group.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Both the Designer and Administrator are available by default in all databases. In the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#users-and-groups-editor"
    }
  }, `user management dialog box`), `, the icons of the Designer and Administrator are displayed in red and green respectively:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Designer icon: `, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(60385)/* ["default"] */ .Z),
    width: "15",
    height: "15"
  })), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Administrator icon: `, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(40634)/* ["default"] */ .Z),
    width: "15",
    height: "15"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can rename the Designer and Administrator users. In the language, the Designer ID is always 1 and the Administrator ID is always 2.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Designer and Administrator can each create up to 16,000 groups and 16,000 users.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "users-editor"
    }
  }, `Users editor`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The editor for users is located in the Toolbox of 4D.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(96642)/* ["default"] */ .Z),
    width: "778",
    height: "276"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "adding-and-modifying-users"
    }
  }, `Adding and modifying users`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You use the users editor to create user accounts, set their properties and assign them to various groups.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To add a user from the Toolbox :`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Select `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Tool Box > Users`), ` from the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Design`), ` menu or click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Tool Box`), ` button of the 4D toolbar.
4D displays the users editor.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The list of users displays all the users, including the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#designer-and-administrator"
    }
  }, `Designer and the Administrator`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 2
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Click on the `, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(51426)/* ["default"] */ .Z),
    width: "20",
    height: "16"
  }), ` button located below the list of users.
OR
Right-click in the list of users and choose `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Add`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Duplicate`), ` in the context menu.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Duplicate`), ` command can be used to create several users having the same characteristics quickly.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D adds a new user to the list, named "New userX" by default.`), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 3
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Enter the user name.
This name will be used by the user to open the database. You can rename a user at any time using the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Rename`), ` command of the context menu, or by using the Alt+click (Windows) or Option+click (macOS) shortcuts, or by clicking twice on the name you want to change.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `To enter a password for the user, click the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Edit...`), ` button in the user properties area and enter the password twice in the dialog box.
You can use up to 15 alphanumeric characters for a password. The password editor is case sensitive.`))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Users can change their password at any time according to the options in the "Security" page of the database settings, or using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `CHANGE PASSWORD`), ` command.`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 5
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Set the group(s) to which the user belongs using the "Member of Groups" table.
You can add or remove the selected user to/from a group by checking the corresponding option in the Member column.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The membership of users to different groups can also be set by group on the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#configuring-access-groups"
    }
  }, `Groups page`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "deleting-a-user"
    }
  }, `Deleting a user`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To delete a user, select it then click the deletion button or use the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Delete`), ` command of the context menu.
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(94756)/* ["default"] */ .Z),
    width: "19",
    height: "18"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Deleted user names no longer appear in the Users editor. Note that the IDs for deleted users are reassigned when new user accounts are created.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "user-properties"
    }
  }, `User properties`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `User Kind`), `: The User Kind field contains "Designer", "Administrator", or (for all other users) "User".`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Startup Method`), `: Name of an associated method that will be automatically executed when the user opens the database (optional).
This method can be used for example to load the user preferences.`))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "groups-editor"
    }
  }, `Groups editor`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The editor for groups is located in the Toolbox of 4D.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "configuring-groups"
    }
  }, `Configuring groups`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You use the groups editor to set the elements that each group contains (users and/or other groups) and to distribute access to plug-ins.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Keep in mind that once a group has been created, it cannot be deleted. If you want to deactivate a group, you just need to remove any users it contains.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To create a group:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Select `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Tool Box > Groups`), ` in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Design`), ` menu or click  on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Tool Box`), ` button of the 4D toolbar then on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Groups`), ` button.
4D displays the groups editor window. The list of groups displays all the groups of the database.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Click on the `, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(51426)/* ["default"] */ .Z),
    width: "20",
    height: "16"
  }), ` button located below the list of groups.`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "p"
  }), `
`, `OR`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "p"
  }), `
`, `Right-click in the list of groups and choose the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Add`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Duplicate`), ` command in the context menu.`))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The Duplicate command can be used to create several groups having the same characteristics quickly.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D adds a new group to the list, named "New groupX" by default.`), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 3
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Enter the name of the new group.
The group name can be up to 15 characters long.
You can rename a group at any time using the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Rename`), ` command of the context menu, or by using the Alt+click (Windows) or Option+click (macOS) shortcuts, or by clicking twice on the name you want to change.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "placing-users-or-groups-into-groups"
    }
  }, `Placing users or groups into groups`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can place any user or group into a group, and you can also place the group itself into several other groups. It is not mandatory to place a user in a group.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To place a user or group in a group, you simply need to check the "Member" option for each user or group in the member attribution area:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(88845)/* ["default"] */ .Z),
    width: "450",
    height: "263"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you check the name of a user, this user is added to the group. If you check the name of a group, all the users of the group are added to the new group.
The affiliated user or group will then have the same access privileges as those assigned to the new group.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Placing groups into other groups lets you create a user hierarchy. The users of a group placed in another group will have the access privileges of both groups. See "`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#an-access-hierarchy-scheme"
    }
  }, `An access hierarchy scheme`), `" below.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To remove a user or group from another group, you just need to deselect the corresponding option in the member attribution area.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "assigning-a-group-to-a-plug-in-or-to-a-server"
    }
  }, `Assigning a group to a plug-in or to a server`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can assign a group privileges to any plug-ins installed in the database. This includes all the 4D plug-ins and any third-party plug-ins.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Distributing access to the plug-ins lets you control the use of the licenses you possess for these plug-ins. Any users that do not belong to the access group of a plug-in cannot load this plug-in.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also restrict the use of the 4D Client Web server and SOAP server via the plug-in access area.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The \u201CPlug-in\u201D area on the Groups page of the tool box lists all the plug-ins loaded by the 4D application. To give a group access to a plug-in, you simply need to check the corresponding option.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(77374)/* ["default"] */ .Z),
    width: "450",
    height: "139"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `4D Client Web Server`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `4D Client SOAP Server`), ` items lets you control the possibility of Web and SOAP (Web Services) publication for each 4D in remote mode. These licenses are considered as plug-in licenses by 4D Server. Therefore, in the same way as for plug-ins, you can restrict the right to use these licenses to a specific group of users.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "an-access-hierarchy-scheme"
    }
  }, `An access hierarchy scheme`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The best way to ensure the security of your database and provide users with different levels of access is to use an access hierarchy scheme. Users can be assigned to appropriate groups and groups can be nested to create a hierarchy of access rights. This section discusses several approaches to such a scheme.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this example, a user is assigned to one of three groups depending on their level of responsibility. Users assigned to the Accounting group are responsible for data entry. Users assigned to the Finances group are responsible for maintaining the data, including updating records and deleting outdated records. Users assigned to the General Management group are responsible for analyzing the data, including performing searches and printing analytical reports.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The groups are then nested so that privileges are correctly distributed to the users of each group.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `The General Management group contains only \u201Chigh-level\u201D users.
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(8727)/* ["default"] */ .Z),
    width: "778",
    height: "575"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `The Finances group contains data maintenance users as well as General Management users, thus the users in General Management have the privileges of the Finances group as well.
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(25279)/* ["default"] */ .Z),
    width: "778",
    height: "575"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `The Accounting group contains data entry users as well as Finances group users, so the users who belong to the Finances group and the General Management group enjoy the privileges of the Accounting group as well.
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(85959)/* ["default"] */ .Z),
    width: "778",
    height: "575"
  })))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can decide which access privileges to assign to each group based on the level of responsibility of the users it includes.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Such a hierarchical system makes it easy to remember to which group a new user should be assigned. You only have to assign each user to one group and use the hierarchy of groups to determine access.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 94756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAACnSURBVDhP1ctPC4JAEAXw+YJlsML2dYMigkyDwIxAMkJz7Z9lZaceu7BevDSeGn6H3Zn3qKw+PB2a13vNQ+dbzdOhqS5vHjqeXjyUqicPHfLKSNJyqEdK6bpuXw8e+GKwR8CGoWlud0oIMdDjOE5PDx5mgxMCNgy0zx7GJs5ni/VoErTCCQEbBvJDZXirbOon43ncCicEbBia5q/+rBmEBQ8to4IjKr7x0nj9UM5kBgAAAABJRU5ErkJggg==");

/***/ }),

/***/ 51426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAADxSURBVDhPnY9Pa8JAFMTfF6wpTbS99HN6EhEVEbTmUEiplWBETbKatv6renJ4C491Gz3s8DsMOzPsLm32Z2foZ3tyhorfkzM3x6o4vLJgrEgg9X0sJVkUzywYKxIoW/+VMpnmQRD4vg9jRQIt1aGUcZzpMYwVCTTP90Ky3Lyw8FosKywY/X6co2D2r8ZfU4WrHlme5z2wYPQJIhTMPs3SnfAZ5/23j1Y3BM32ENdiCaNPEKFg9mkUKWH4nvZGSWcQg0YnemLB6BNEKJj9q7EJ2lUWjBUJ98Y1lssYj6w3QwBjRcLNsf7//3+aUBitHIlWFwd0H5oG1DOiAAAAAElFTkSuQmCC");

/***/ }),

/***/ 96642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/editor-6e2ecb71f363782241b995d8f6130a20.png");

/***/ }),

/***/ 88845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 40634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAD6SURBVChTlZCxS8NQEIffP9tYHVycMlscdXURxLFU0mqhZkqGdhFFaA0FQ15bCLGWpppgqaZ5Lx7JS+AOMvjxm+73DXfHMowV8SN+1/It88vdikRNS5AdJPGB1214RpEz35aZVF0Osjvha6UWGW+XqstB9vXqmdh2xFWXg+yrj6d/2A+fb8R2d2vV5SB7LwV8o1Ivl4+qKEE28C1+m7wH6sl8kEqhpiXUBo5nfbDh6wK/D6A2/9lo5SbkREDZUbqDEy+CUbFGlVPfug2d9yQuNJbI1AidQyyRaF63vZ7AD9jN6oV0dbnfTJm+MMm0LufBkMHtZFoXfWH+AfQdLr4l7+k0AAAAAElFTkSuQmCC");

/***/ }),

/***/ 60385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAADmSURBVChTlZA/C0FhFMbfb+FPYjIafQPKF5AvYDMYfAAlmYzMFG4GZWK6k0RKV4kBq4UUFrm6PN57nRfvqzv49UzP+Q3nHAaFVQ1aEL04llWYJyoFsn1ao+lHw0PpJ/C408hBto3CR31lq9PIQbZHWdXmi30h28PMPza/TLH3Exo5yLZl2t94q4M09QLZ5phHtAK22ongfqNS8GNz2mHb1kJ4WNQIfuyDgYaXNlnVqRQI+7LDogI9RWu804vBKOK8eVkM1hWzkiopafowzfMzGMY5deaWeZmhG1Vbt+hJZt+utG7pRp+KuBb6s9xHMQAAAABJRU5ErkJggg==");

/***/ }),

/***/ 77374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcIAAACLCAIAAAB9Wg4CAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAwcSURBVHhe7d1Ljhs5EoDhvtPsfAKfRBtfpu7R6FUDBe98EO8a8H5W3s5EkEEygqSUIbtL9cj/Q6FMMZnM7Lb8o/xQ6Y8///qbDz744IOPX/7QjP4PwMv78eOHjXDkVf5fyUX/ez8yCjwOGc0jowA2yGgeGQWwQUbzyCiADTKaR0YBbJDRPDIKYIOM5pFR5D1f/ug+PX3vk338S74/ffrNHfACHpkGfWJdnu3BO0RGkTeK6dL32xnFm/S4NMiT6dPl8ukdP4vIKPJ8MfuYjH5MD0uDVvTpe/1sU+8NGUXe7Yxuj9YvXOufAjy5BV7cQVbZ+s1SPMyj0tD6OXe0PW/Gb/eXmXlierzu8FLIKPJGHPUZasMYQft14Cf9c7wv8MJiWz3Ow+t4UBrkaWFPijEKzy+zzvSnjQ51JBP+KTM9fElkFHklc6Y/Q/uz2T2t+9j/0vCTYZObO+CVPCYNczvrM2KMmv2MIwfLzHjSTA9fEhlF3jZtNyMoT+VxxrUy3twBr+QhaZCf5Ulp5T6aRzNFiec4MD18IWQUedu09Un3vNZfHb2MNlme0Nsy9h38/n6MV/CINMw/yf0ppIP407/O6FNr+xSRpX5+evgSyCjytmlzk/rELi6XdTL7V0y2wI/xCh6QhvXnuHd0PG/G15LLjK5uZGo6vm7wYsgoHsX9EsHb9yppeKfIKB5Evzjg68v3g4zmkVG8qOn3XXg3yGgeGQWwQUbzyCiADTKaR0YBbJDRPDIKYIOM5pFRABtkNI+MAsB7ZXVMI6MAEFgd08goAARWxzQyCgCB1TGNjALn8p8cW31KVsc0MgqcSyaRZPQu+4zqa7btG16Mb4wlrn8TDPcq73FiGbm9fpns5V463nau4jEnLlvJccPL0nEiZPSQ1TH69u2bjRbbjJbATDW08a45JaFj+vvTk46PKnbV7kSZ6xcol+sr5NGVy9y8Ad2k7Wg3DJwCGT1kdXSkoZU9jjYZlcJcnnqcYox8fcxmqvhXM+piabdnl3QHZjdv4JfvDnjnyOghq2NjBW1s1lkyqpUq72NllZl6IwdiNJeJpp/odtDFVT2lHArv/SszzXyZukkdyLK+Q1u33fzZJtsddHqheXK3w+WiX/t+8v+RZWO7l/36sRZ4a8joIatjYe0s9bTRUtIpo61W7UfXjErLESIxVk76ietAh2UkMy5BLkbrjjJbDvcz2wZ2N+4sv3md07tuRwed7de/toNNjQv14c31wFtFRg9ZHYupm9PDKmR0JHGMXCzUUk1tUQtM0E9sA6tWoyf5zZf1E5mWU+rndh/jbg427+ctyol66Pj26gaWzMMrAm8TGT1kdSzWaN7OqFQg0ibENGg7phxtpop+YhtsFvrNl/UTOb38Ht22kIfuT3CPNr92k8qOHeygx+VB/WyPb64H3iYyesjqmBa+Gh1GLXwaZLyLkU67+flv6v1gykw/5Md+0tNuuQ10N3fZ7eZtZk3e81Nbq8fKsu0ObkL/n1wuLePH64E3iYwesjqmZTLaXW9ETVw1TqwjFxe/THPkuzPGdsnYPdGDV+kyv2a3efkLnzYR2EVUP3br9kQ5fHRFtx54i8joIatj2pWMAvigyOghq2MaGQXORRKZYatPyeqYRkYBILA6ppFRAAisjmlkFAACq2MaGQWAwOqYRkYBILA6ppFRAAisjmlkFAACq2MaGQXOxf5d6BFbfUpWxzQyCpxLJpFk9C77jLpXr7vXnidfVD9OLCO3128ZN+Je1u7ubr2GHvQvgQ//Lbtb2l4C+FjI6CGrY9o2oyUnUw1tvCvM9C07XuK9mPQS7Qr9rZP0dvrKpdYyod+ZxM+NnTdt314C+HDI6CGrY9omo9KTN/deTJu55bpxQh7JGfWzTYVdlh1/+X6Bd4WMHrI6pi0ZlfBIi0Z+prrEVollouknuh10cVVPKYdS78Wk8/4+dtcdNz3Gfs7fSRhXyyXE7oZ5dya8a2T0kNUxbcroWp8pN9qJkISxctJPXAc6LCOZccFx6dntaImyq2+u6+5tHPXrxs66dHMRnR6X8HfCuzPhoyCjh6yOaSGju/i4NChfpULL03IS9BPbwBrV6El+82X9VtlET91cd9zbGIWFsnO3veciXMLRqemG6ya8OxPeEzJ6yOqY5jPqK1NoAWIIXJOazVTRT2yDzUK/+bL+irbNst2YkB0mff7Wzp3tdHDDelwe1M/2+OZ64C0go4esjmnhq9FhtMGHQPM0dULptJt/ifdi2rx1Ut2vX9ZtPm/Q87bbuePdmXAOZPSQ1TEtk9HuehG0PM04sY5cSvwyjY+vzBjbJUeYhc0pP7+b9ptWetn5cqvdXrduWJTD/n4O1gOvj4wesjqmXckogA+KjB6yOqaRUeBcJJEZtvqUrI5pZBQAAqtjGhkFgMDqmEZGASCwOqaRUQAIrI5pZBQAAqtjGhkFgMDqmEZGASCwOqaRUeBc7N+FHrHVp2R1TCOjwLlkEklG77LPqL40PL7AvVpfHy6H3WvK40vI4zHl9s3xV+8nhlsKV3BH7roMcB5k9JDVMW2b0VIj65CMY7+mMspcnynfmKOvlkfXW+a3vWEsi2Vv5+odtcvruO95d7CBk7iRyH/++efz589fv34lo3fZZFQKdMd7MblY2ol23B3YiNte5Zf18XZyubP1VgFcz2ht6JcvX37+/ElG77JkVFt4z3sxjaV1IOvrcT/o70dUd5PPTV2iu/rHXV0/jd1kH673NW4MwLBNpG+oPCSjd5ky2tIzEuRDJja5khVlpr/9kP3Q1slozZ7f1o3b+3E045Be2Ia6oem3smnm5lYBSCLlt+0STUlnnZkaKsjoXUJGR4vGyPdObHKlSyRX9XNb4db5HfrYTcpSi2IRyifLun6gnasntkk/Nu4WADSSSMmlRLOWdG2oIKN38Rn1zSq0Qq53YlMr69Wz/0NR92eroZhj7Ca3e5p4dTMmXSmXXW5tC5xXTWQv6dpQQUbvEr4aHUafpghuy6TFcn9Lrss2XzyG8bxtfxD5Zd12w7qNv+i1PYFT64msJV0bKsjoXTIZ7a52STvqDoag+dK5se1bl9UOV6HT/twuTIZL26YqbAOgySSSjN7lSkYBfFBk9JDVMY2MAuciicyw1adkdUwjowAQWB3TyCgABFbHNDIKAIHVMY2MAkBgdUwjowAQWB3TyCgABFbHNDIKAIHVMY2MAudi/y70iK0+JatjGhkFziWTSDJ6l31G3QvV3cvUdy+qn1/0Lo8v5bs+b9bm+YvuXjC/vvK++Z2rAmdARg9ZHdO2GS1ZsiDJOIZs+p4fMudm4qNfNi4ag97uRG+kXUfH/Q5/t9/Ah0dGD1kd0zYZlRTd915MY0YW/xsVDRft4+3kckPrHQJwyOghq2PaklGN6L3vxdRmZO0YtbP0eKXHxpJpTdjUX7SP3WQfrrejU/1cADMyesjqmDZltDVotMgXTdzqlixdEhnap6O+SB6Kcmwp3zhLr2dDmWz6HSxnbu8QQEdGD1kd00JGR5TGyHVQbbrV5vyhdpbMWfkKyVtbpVF9Xk+sXDFHEv2ebdKPzbobgIGMHrI6pvmM+ngVmqOY0U22RCmXNbHaJc/UzNUvTWV8ea4TdrSKFzVj0p2xXGCZAOCR0UNWx7Tw1egwQuWLJuN9orRd4R8b9bP0FDevdG/32/nLZXpTZeEv2k130sZ6hX5Tm8sB8MjoIatjWiaj3fVAaUf9UZe5mtiq5s4vnk+s3OlDmAznuXvkC1HgNjJ6yOqYdiWjAD4oMnrI6phGRoFzkURm2OpTsjqmkVEACKyOaWQUAAKrYxoZBYDA6phGRgEgsDqmkVEACKyOaWQUAAKrYxoZBYDA6phGRgEgsDqmkVEACKyOaWQUAAKrYxoZBYDA6phGRgEgsDqmkVEACKyOaWQUAAKrYxoZBYDA6phGRgEgsDqmkVEACKyOaWQUAAKrYxoZBYDA6phGRgEgsDqmkVEACKyOaWQUAAKrYxoZBYDA6phGRgEgsDqmkVEACKyOaWQUAAKrYxoZBYDA6phGRgEgsDqmkVEACKyOaWQUAAKrYxoZBYDA6phGRgEgsDqmkVEACKyOaWQUAAKrYxoZBYDA6phGRgEgsDqmkVEACKyOaX/+9ff/Aajwosn30/fQAAAAAElFTkSuQmCC");

/***/ }),

/***/ 8727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/schema1-84178d2d3287349910a9a1a80a34f272.png");

/***/ }),

/***/ 25279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/schema2-fc09440a4cb7bfbc55f3f0aeae5c5ed0.png");

/***/ }),

/***/ 85959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/schema3-b83a7c0eb98fa319eeb7c0e32a5f6749.png");

/***/ })

};
;