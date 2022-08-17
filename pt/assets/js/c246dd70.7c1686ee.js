exports.id = 30174;
exports.ids = [30174];
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

/***/ 50998:
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
var quickTour_exports = {};
__export(quickTour_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(quickTour_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "quickTour",
  title: "A Quick Tour in ORDA"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "ORDA/quickTour",
  "id": "version-19/ORDA/quickTour",
  "title": "A Quick Tour in ORDA",
  "description": "Since ORDA is object-based, using ORDA requires basic knowledge in object programmming.",
  "source": "@site/versioned_docs/version-19/ORDA/quickTour.md",
  "sourceDirName": "ORDA",
  "slug": "/ORDA/quickTour",
  "permalink": "/docs/pt/19/ORDA/quickTour",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "quickTour",
    "title": "A Quick Tour in ORDA"
  }
};
const assets = {};
const toc = [{
  value: "Exploring the datastore",
  id: "exploring-the-datastore",
  level: 2
}, {
  value: "Adding data",
  id: "adding-data",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Since ORDA is object-based, using ORDA requires basic knowledge in object programmming.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "exploring-the-datastore"
    }
  }, `Exploring the datastore`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The ORDA datastore is automatically based upon a 4D database structure, provided it complies with the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/19/ORDA/overview#orda-prerequisites"
    }
  }, `ORDA prerequisites`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This example will use the following simple 4D database structure:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(58568)/* ["default"] */ .Z),
    width: "313",
    height: "157"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To know what is exposed as the datastore, create a new project method, write the following line:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-code4d"
    }
  }, `TRACE
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Execute the method -- it simply calls the debugger window.
In the Expression area, double-click to insert an expression and enter `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ds`), `. It returns the datastore object.
Deploy the object, you can see that tables and fields are automatically exposed by ORDA as properties of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ds`), ` object:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(45792)/* ["default"] */ .Z),
    width: "458",
    height: "202"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `It means for example that, whenever you need to refer to the city field of the `, `[Company]`, ` table, in ORDA you just need to write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-code4d"
    }
  }, `ds.Company.city //returns the name of the city
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `In the ORDA world, ds.Company is a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `dataclass`), `. ds.Company.city is an `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `attribute`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `ORDA is case sensitive. `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ds.company.city`), ` will not refer to the ds.Company.city attribute.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You have also noticed the extra `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `hires`), ` property in the ds.Company dataclass. It does not correspond to a field. `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `hires`), ` is actually the name of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `One to many`), ` relation between Company and Employee:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(43867)/* ["default"] */ .Z),
    width: "271",
    height: "101"
  }), `
`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Name of the relation as defined in the Inspector`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `It means that, whenever you need to access the list of employees working for a company, in ORDA you just need to write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-code4d"
    }
  }, `ds.Company.hires //returns the list of employees
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `But don't go too fast. Let's see now how to record data in ORDA dataclasses.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "adding-data"
    }
  }, `Adding data`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In ORDA, you can add a record to a dataclass using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `new()`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `In the ORDA world, a record is an `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `entity`), ` -- an entity is itself an object. A command that is attached to a specific object is called a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `member method`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-code4d"
    }
  }, `$entity:=ds.Company.new() //create a new entity reference
//in the Company dataclass  
//and assign it to the $entity variable
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A new entity object contains a "copy" of all attributes of its parent dataclass, thus you can assign values to them:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-code4d"
    }
  }, `$entity.name:="ACME, inc."  
$entity.city:="London"  
//$entity.ID is automatically filled
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Right now, the entity only exists in memory. To store it in the data file, you need to save it using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `save()`), ` member method:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-code4d"
    }
  }, `$status:=$entity.save()
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The editor for users is located in the Toolbox of 4D.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(15846)/* ["default"] */ .Z),
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
    src: (__webpack_require__(5661)/* ["default"] */ .Z),
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
    src: (__webpack_require__(28883)/* ["default"] */ .Z),
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
    src: (__webpack_require__(5661)/* ["default"] */ .Z),
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
    src: (__webpack_require__(62314)/* ["default"] */ .Z),
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
    src: (__webpack_require__(57867)/* ["default"] */ .Z),
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
    src: (__webpack_require__(43360)/* ["default"] */ .Z),
    width: "778",
    height: "575"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `The Finances group contains data maintenance users as well as General Management users, thus the users in General Management have the privileges of the Finances group as well.
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(28549)/* ["default"] */ .Z),
    width: "778",
    height: "575"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `The Accounting group contains data entry users as well as Finances group users, so the users who belong to the Finances group and the General Management group enjoy the privileges of the Accounting group as well.
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(75239)/* ["default"] */ .Z),
    width: "778",
    height: "575"
  })))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can decide which access privileges to assign to each group based on the level of responsibility of the users it includes.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Such a hierarchical system makes it easy to remember to which group a new user should be assigned. You only have to assign each user to one group and use the hierarchy of groups to determine access.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 45792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 58568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/struc-04ac739c93b9cc629d0798ae09c7841e.png");

/***/ }),

/***/ 43867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ8AAABlCAIAAADcVfHhAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAABN9SURBVHhe7Z37U1XXFcfvX9Cfm2l/7CDGTn/JtJlOZ9pOm/5gqIqmJD9kYjrTTtPamSaIoyRmonYSJ3YmoEk0EaSA0SYxgig+QeEiICAgKm+BXEUCPsAHCD54pN999j7r7HPuuZd7Fe7L9ZmVy36svfY+h/29e2+5Oddz4vw1WBXDMHakNHRTarl69er3DMOYQBEkEjJWC8O4EEwt/f39MwzDmEARJBIypZa+vr6HDMOYQBEkEjKllkuXLo3PGU3rF3pMFq5vUqVzyhcrHJFFnyu+UJnHJryRw3ueLo+JOlAEiYRMqaWjo+PO3FCQ6vEkZ9arXH1mspYLCTRJLVDpgBSkJifrbs784xDyyEMaIRPfQBEkEjKllosXLw7PhnrPtaPqiLxlnmV5Km1Qu3bBgrW14seytWsXGG1EXgBfA72BWWYUopGW08lbtiwvb5kZSGQRXDrZIvj1q4ZjoAUAoY5ci28GcI7T2cTy0DtkYhkogkRCptTS1Nw0ODQ4qxm/cQtHLcy7JilpjddWmLPEs2TnoDcjyZOU4UWJN2OBkchZojy9GUv0JvCEPzU0CncimWM6CNu5BFVmBO+aJRlehF2y03IQIxFNAverHDT/2UZu+mgjFFn/cfp16uiLLfatubmZREKm1HLhwoWboaGE4vGovIO8pZ6leSptUCPeoWvED7NcJvGqAgG9iemptRBhRRCLvKWiTrrIOnLHCBSWi4GZdPibhDBy/66QtQXyi20m8VONiIkLoAgSCZlSS1tb2+2Qwa9dpVzIN3b/dVouNR+JOuz1xU9K4tVy0yFPtDWbaElJfqrpIxBJ1YxaO/O2qtTMfPzn6D3wyM1SNQwKlJ8qavzH6dapwJZhYhoogkRCptTS1dU1NmfsXm68tRss3y3Lzr6z0JnET4eTRJaLMiuQ3UPUqBK4yJQZVetc5F36lT0sfOeskbYRYOTAVibai8zu5TKKc5x+ncoGVM/EPlAEiYRMqaW3r/fB08Pelzwv7VXpWWl5d2HozkyiAEWQSMiUWq5cuTL9VNC64Vm8xf/pa5UNAbQIx51JDKAIEgmZUgt/ToxhdPhTlQwTKsHUoj7R/1TSUlLSum+fw84XFalq5mmFREKm1KL+3J/QjPp891pbH5SUPMzNndy06XuPJ0SbfPvtR9nZaDje2DjW2anCMYkOiYQswdUChUyUlT368EOHAMgmf/GL0VWrYHf//neHPfztbx3OZJPp6Q/27x/r6VHdMIkIiYQsMdVyr6XlQWHh1Guv6VP8flranbfeGsjOvlRYeO7rr0+cOHH06NGSkpLS0lKkwbFjx47YQW1RUdHpgoLmTz/99v33r6enj65cqcecWroUK9V4XZ3qmEkgSCRkiaWWkZGJ6uqpN96g2Tz5/PMj69f3/fe/tUePQgyQR1lZWWVl5WmDM2fOVFdXI+v1epEGNTU1KNGpqKg4deoUaenQoUOHi4sbt23rz8iYeOEF6mjqj3+8f+TI3evX1UiY+IdEQpYgark7OIhzxfTy5XLuPvrDH4aysi4UF0MbUMjJkycx7+vq6qQYoIrGxsZz5841NzdfvHjx/PnzSCCLNLjgB6qampoaGhrQEM0hLQjs8OHDWHZO5eR0vvfevRdflP1OP/vsg/z80f5+NSwmniGRkCWCWrCeTP/ud3K+Trz++reFhZjQWArwWltbK6d4fX19S0uLnP2QR2tra0dHR1dX16VLl/r6+np7e5Ho6en5NgDSAf7t7e1SUZAQgmPlwYJTXFxcu3XrDXPjN52cPH7woBocE7eQSMjiWy1YUugEf3f16o7iYuyasJ5gHp89exYrCdYEqQ28YqJ3d3dj3kMewOfz9ff3DwwMDA4OXtdQn0H1Q9bCGU3Q8PLlywiCmBAhVi3I5uDBg8dzcgb+8hc5nvv/+teoz6cGysQhJBKyOFYLztZySZn65S99u3djJcGOCxMXywjWEykPLAJYQ7BoYGZDJ5jimOvXrl3DvL9x4wY0MDw8fOvWrdu3b6ugIQBnNEFDNEcQBERY6BBrDlSKHVpNVtb9554TA/vJT8aOHFHNmHiDREIWr2rB7ku+hWNJaTJO4XI9gVQwa9va2vCKvRM2UdAJlgJaQDDFR0ZGwpLHrEjxDA0NoSPs1nDCOV5UdPmvf5UjvFVYqPyYuIJEQhaXaiGpDH78sVxSsOOi9QT7Liwj8ryBN34pEszmuVWIK+gCUoQyMQCM58yWLVPPPINxXv/8c+XBxA8kErL4U4tDKlVVVY2NjVhSsOOi9QRbo+++++5tk3cijux33bp1X61cOfmDH2C0DStWqDomllCzyg0SCVmcqQXH+pmf/UyXCnZfWFggFSwp+nqCHRfuhfqIXJSYmZkZHx/vLSmZ+tGPMOaew4dVBRMbJLhaHm7fjml3Y/NmXSrYfXV2dvp8Piwp8gSP7RCco64WydTU1PX//Q/DvrN4MSStSpkYIJHVMtbTgzk3nZyMY31lZaUuFSwpOGHLJYXOJzGiFsHk5H3j0N+yaRPGqQqZaDOfarE/kK4gNczH6j0x8k8rAzt2nDhxAjqBWhxSwVFeuRoYatmX5lm0sU3dHRMUpu1T6Qgx09mJwY//6lelpaVY+lQpE1XmWS0CpZHIq0X+daX5xAn5ES+cVUAgqYDAaokO07//PcZfnJvb3Nx8//59VcpEj3lWS2oBPdbUVIt4IKqBUSyqM7EGGQ9JFYsR1Wiuj/Nc1FFsYIxPSR47dgyrivyIF6Ry5coVV6kASy0b02THpm5IQiKRlrbIrEDWwFx42jYusuWfjJktW3AJDVlZ5eXlV69enZ6eVhVMlJh3tdAPx9piVcrdGiXMGqtBfWaq3jI0xhsbMdXuvPWW+GN5TU1bW1tXVxfUgmO9q1SAqRZztoskpUgtJCGRMaqhEaqdG51IZg4exCX4PvjgyJEjOO6PjY2pCiZKREAtat77rS3GkkE+mppkSsiHUD5hIP/McmvNmrKyMuzELly4QHuwQH92tNYWSw4kA0dCpi1M2czVumLg9eISBj/4AJeAtRE6n5qaUlVMNIiIWgwByBMMlalEULWYBY+D/AexiRUrcMTHoaWlpaWvr29oaEj+Y7Er4auF0hZzqJiZzz/HJfTs2XPq1KmmpiZInU8v0SVCahFpudGylpZZ1hbZxvIMn+mf/hSz7XhREdQiP94SZGEBYapF6MJFLtbG7EmZMT6e3Hb0aH19/blz57A2jo6OzszMqGom4synWqLNZHo6ZtvZrVsrKiqgFp/PB7WoOjfCVItaRwzkYoJaLfeEjIxg8NMLF2IbCanIf83DIPmsH0USWS0TZWWYcPcWLz5aUoJ9P9Ry8+ZNVeeGoZZYQW7Dbn/4IaR+/vz5np6egYEBLIyTk5PKg4k4iawW8PAf/8Cca92wobq6GjuxuFFLby+GPfXrX7cb//sNDi04dOGUj50YqyWKJLha7rW2imn34x978/La2tpm3YnFAp9mZIwuWoRhe1955c0338zIyFi9evWaNWvWrl2bmZmpnJgooeaKGyQSsjhTC5jIzsbMe5icfHbfvqtXr6rSWGW0v18+qOne3/5WU1lZU1NTV1fXbjDrv1Iw0YVEQhZ/arkzMjK6dq0QzIIF7ceP37p1S5XHHiSViddfb6isPHnypHzWjPwUwuXLl4OvjUx0IZGQxaFawPDwrX/+UwpmqKhIFcYYY52dulTKy8ubm5uxsHR0dHR3d8tPIQQ/dzHRhURCFp9quXPn9s2bN1atwlyEja1bd3dwUFXEAHevX3+wf78cmy4V+UlQ+X+tBf8UAhMLkEjI4lUtYGRk5GJW1sOkJEzKyZ///N7JkyhSddFjvLGRHgI4lJVV6/U6pOIzgFSCfAqBiQVIJGRxrBaAQ4u3pGQoLU3OzskXX7x/4EB01pmRkYmKCnryMs707YcOQSder7fJeMIGSUXuwW7cuKEaMrEKiYQsvtUCsJnBYaDu/fdHf/MbOVOnFy58sHNnxL46YtTnw76LHpb56IUX+nNyqqqqIJWGhgb51xWWSjxCIiGLe7VIOjs7Dxw4ULl587VXXpGzFkYPwJ+Ph3n7P8Z/fOXKbwsLKysrjx07Jh+TCRXLh5tBLSyVuINEQpYgagEDAwO1tbVFRUWHt2+/8sYbD55/nuYxbDIz80FJyUR19b3WVtUgTLBY4UyCII+ys+VzZ1Rk4zH+7fv3YzGhhwBWV1fLD4NhSekzkMd6lkocQSIhSxy1gOHh4a6uLryvl5aW7tmz5/jHH3e8++4dbbUhw5owuWkTTH7pl6s93L5d+uhfcUE2/tprjsf4YyXBvgtqoYfKdnd3ixO9zyeflBno/1pjYhMSCVkYasHbdlzw5Zdf5ufnf/bZZx999NGWLVs2b968dePG4oyMc3/+c/err15PSZn84Q8dUz8UG168+Mqrr15cterU+vX5//kPgoNt27Z9avDJJ5/s2LEjNzc3Ly9v165dBQUFuw327t37tcH+/fvV+JiYQc3sAJBIyMJTy5U4AW/neF9vaWnBjgjv/VhqcKrBlMXc/eqrryCn4l27vFu31mzffi47u+e993o3bOj7978d1rZt29m8vLqcnLIvvsC1f/PNN8XFxeLbjg4fxskEYbHvAjioYDXDkoJX+T+uyC+9wDaMvuVCDYuJJVgtNqAZTFacHHDgxmyuqKg4fvw45jo2TvJb8vB+j1eZwNXJtA5kBmc0gT/aIg15nDKeZnb69GnIQ+oEBxWIBAqBPtGd/FoY+SxmNRQm9mC1uHDZ+KIV+UVFmNANDQ1ylmPZkV/2giOH/K48mXYAYVRVVUl5oAleIQ+sIYjT3NwMeSAmkE/VkIsJuoNQVfdMrMJqCQZkgzd7zGZMa0xuLALYMmHZwbzH4oDXMwbirzd2UAW3xsZGKQ+AhmiOIJ2dndjyyZUEIkEXqjMm5mG1hAre+6EczG/Mcsx16Adg6kMAruAQIn2kNkgeCIJQLJJ4JGJq2ZHi8XhSdqicQXl6kseTlF6usnMH+pqPsDYw3THpJRBAIKQDayMxiKxabHIxxBK3amGeQiKplqSUlCRrFu9ISUpPN6e1VI7AdDBmPOr9C1UASgdoq9wYZnZKS0tVSsO/MKJqSS8XEjFntJF1TmuUyPUHCXMpEklKkX/wto4qhglIe3v7yy+/nJubq/IGyKIQVSpvEGG1mDMa64H4oU1rJBWyRJ/xlHYtDN6WYWbHIRhXqYBIq0XqRImFCq3pTSl9xgcttMpc3RgmJEgwgaQCIq4WIZekpBT7/MZP2kO5zHi9rXK0PGdpyzChIgUTSCog8moRSStlzW+DlBSthGa8ra10tHv6l1BbhgkD6CSQVEDE1MIwcQ+rhWFChdXCMKHCamGYUGG1MEyozLtaGCaRUDM7ACQSsjDUwjBPFSQSMlYLw7hDIiFjtTCMOyQSMlYLw7hDIiFjtTCMOyQSMlYLw7hDIiFjtTCMOyQSMlYLw7hDIiFjtTCMOyQSMlYLw7hDIiFjtTCMOyQSsjDU8lxoKG+GiXNIJGThqeX72WC1MAkDiYQsEmopSPV4UgtUJvLUZyZ7kjPrVW5OwZU9eeTHC/K4Xc/l3QgwBvH79sxZJ9GDREI2/2rBryc5NTV51ps3JzMvwgQZc+iX83gXHgu3y3UMKIzme+McQiIhm3e1CLFk1stXVeROLPz6wyXImEO/nMe78Fi4Xa5jiIWBzQ0kErL5VospE5tc9Bsq03g1ke9L8Fd5lzcqy1vVWd5GgSOrdWfWJGdmmoVGLXKq3ByjQtRiZXQPrEW2D8nKKUdnQ9eRSESF6WT1YI+vVVgJe9q/R4W9YcALd7R37cVIFNCFoAglCuVthaFxiFbmLbVFQJ7c/cYTBUgkZPOsFly9ddvoDtDt1tOOQvPmivtH5Q7MJvhp/ioEjqwV2Qpr/FasQlVq1ROiyOye4oik2bFZoqASvcq1of9ITFBpjkJLSiiUfyJAoeqR0H0CXzhKbAVaQEcEmbR+TQ5PM4zNgTy0CFpSbxdFSCRk86sW3CK6c+J2qTuAm0HFlNYKNVeACuedE3dTYjQR/lZEZ5Yi66Nx7deWlmglRlgLMSatFkmFX1j/hu4jIVAir1ib6QHj683NtMtQiaANCSOCVuTqbGuFjNGPViiCWH27OISUjhokErJ5VQuu2YE5CVzui1bofpdNrFqkrHtq/H4tTy1rRra5u/VrS0u0EqtfQovsHFLQhu4jsZD1lpcVgcqold7cfzz+BG1oR4Rx3EOBawTqUiu0DwMVgUMFSUcNEgnZfKrFecl087S7CB/l5LhZpoP9jgvIUVQ5O9DzZpYaWGFFU/d+9QDAUeuoNmvJyxrSrA39R6Ihho69vXnhweKLIuVn9ePfI0ENKeFI2xADERWz9WLVO8KarQI6zJqOGiQSsnlUi/8V2+6YJDWVvFSZdBCuEv+7ZtbRP0xTNNnYkdUHYlY5T/mqCz0tsZdYo5KxqdZvSNSV83K0QRn4nfIlRgPpKfCPrw3MDKXfTJceFdRQi2BLG1BMauzSi2hlnNeNYstPC2UNw7WvUNJRg0RCNs+n/JhF/BZtk4hhHJBIyMJTSygo79gG710x8ObFxDQkErIw1BL/BNydMIw/JBKyp0otDBMGJBIyVgvDuEMiIWO1MIw7JBIyVgvDuEMiUXb+2v8BInBLUfk4mkgAAAAASUVORK5CYII=");

/***/ }),

/***/ 28883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAACnSURBVDhP1ctPC4JAEAXw+YJlsML2dYMigkyDwIxAMkJz7Z9lZaceu7BevDSeGn6H3Zn3qKw+PB2a13vNQ+dbzdOhqS5vHjqeXjyUqicPHfLKSNJyqEdK6bpuXw8e+GKwR8CGoWlud0oIMdDjOE5PDx5mgxMCNgy0zx7GJs5ni/VoErTCCQEbBvJDZXirbOon43ncCicEbBia5q/+rBmEBQ8to4IjKr7x0nj9UM5kBgAAAABJRU5ErkJggg==");

/***/ }),

/***/ 5661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAADxSURBVDhPnY9Pa8JAFMTfF6wpTbS99HN6EhEVEbTmUEiplWBETbKatv6renJ4C491Gz3s8DsMOzPsLm32Z2foZ3tyhorfkzM3x6o4vLJgrEgg9X0sJVkUzywYKxIoW/+VMpnmQRD4vg9jRQIt1aGUcZzpMYwVCTTP90Ky3Lyw8FosKywY/X6co2D2r8ZfU4WrHlme5z2wYPQJIhTMPs3SnfAZ5/23j1Y3BM32ENdiCaNPEKFg9mkUKWH4nvZGSWcQg0YnemLB6BNEKJj9q7EJ2lUWjBUJ98Y1lssYj6w3QwBjRcLNsf7//3+aUBitHIlWFwd0H5oG1DOiAAAAAElFTkSuQmCC");

/***/ }),

/***/ 15846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/editor-6e2ecb71f363782241b995d8f6130a20.png");

/***/ }),

/***/ 62314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 57867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 43360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/schema1-84178d2d3287349910a9a1a80a34f272.png");

/***/ }),

/***/ 28549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/schema2-fc09440a4cb7bfbc55f3f0aeae5c5ed0.png");

/***/ }),

/***/ 75239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/schema3-b83a7c0eb98fa319eeb7c0e32a5f6749.png");

/***/ })

};
;