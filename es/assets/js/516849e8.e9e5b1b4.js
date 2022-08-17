exports.id = 56805;
exports.ids = [56805];
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

/***/ 11379:
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
var develop_components_exports = {};
__export(develop_components_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(develop_components_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "develop-components",
  title: "Developing Components"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Extensions/develop-components",
  "id": "version-19-R6/Extensions/develop-components",
  "title": "Developing Components",
  "description": "A 4D component is a set of 4D functions, methods, and forms representing one or more functionalities that can be installed and used in 4D applications. For example, you can develop a 4D e-mail component that manages every aspect of sending, receiving and storing e-mails in 4D applications.",
  "source": "@site/versioned_docs/version-19-R6/Extensions/develop-components.md",
  "sourceDirName": "Extensions",
  "slug": "/Extensions/develop-components",
  "permalink": "/docs/es/Extensions/develop-components",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "develop-components",
    "title": "Developing Components"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Advanced programming with Javascript",
    "permalink": "/docs/es/ViewPro/advanced-programming"
  },
  "next": {
    "title": "Developing Plug-ins",
    "permalink": "/docs/es/Extensions/develop-plug-ins"
  }
};
const assets = {};
const toc = [{
  value: "Definitions",
  id: "definitions",
  level: 2
}, {
  value: "Basics",
  id: "basics",
  level: 2
}, {
  value: "Scope of language commands",
  id: "scope-of-language-commands",
  level: 2
}, {
  value: "Unusable commands",
  id: "unusable-commands",
  level: 3
}, {
  value: "Sharing of project methods",
  id: "sharing-of-project-methods",
  level: 2
}, {
  value: "Sharing of classes and functions",
  id: "sharing-of-classes-and-functions",
  level: 2
}, {
  value: "Declaring the component namespace",
  id: "declaring-the-component-namespace",
  level: 3
}, {
  value: "Hidden classes",
  id: "hidden-classes",
  level: 3
}, {
  value: "Code completion for compiled components",
  id: "code-completion-for-compiled-components",
  level: 2
}, {
  value: "Passing variables",
  id: "passing-variables",
  level: 2
}, {
  value: "Error handling",
  id: "error-handling",
  level: 2
}, {
  value: "Access to tables of the host project",
  id: "access-to-tables-of-the-host-project",
  level: 2
}, {
  value: "Use of tables and fields",
  id: "use-of-tables-and-fields",
  level: 2
}, {
  value: "Example",
  id: "example",
  level: 3
}, {
  value: "Use of forms",
  id: "use-of-forms",
  level: 2
}, {
  value: "Use of resources",
  id: "use-of-resources",
  level: 2
}, {
  value: "Executing initialization code",
  id: "executing-initialization-code",
  level: 2
}, {
  value: "Protection of components: compilation",
  id: "protection-of-components-compilation",
  level: 2
}, {
  value: "Sharing components",
  id: "sharing-components",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A 4D component is a set of 4D functions, methods, and forms representing one or more functionalities that can be `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/Concepts/components"
    }
  }, `installed and used in 4D applications`), `. For example, you can develop a 4D e-mail component that manages every aspect of sending, receiving and storing e-mails in 4D applications. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can develop 4D components for your own needs and keep them private. You can also `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://github.com/topics/4d-component"
    }
  }, `share your components with the 4D community`), `. `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "definitions"
    }
  }, `Definitions`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Matrix Project`), `: 4D project used for developing the component. The matrix project is a standard project with no specific attributes. A matrix project forms a single component. `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Host Project`), `: Application project in which a component is installed and used.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Component`), `: Matrix project that can be compiled or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/es/Desktop/building#build-component"
    }
  }, `built`), `, copied into the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/es/Project/architecture"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Components`)), ` folder of the host application and whose contents are used in the host application.  `)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "basics"
    }
  }, `Basics`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Creating and installing 4D components is carried out directly from 4D: `), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To install a component, you simply need to copy the component files into the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/es/Project/architecture"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Components`), ` folder of the project`), `. You can use aliases or shortcuts.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A project can be both a matrix and a host, in other words, a matrix project can itself use one or more components. However, a component cannot use "sub-components" itself.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A component can call on most of the 4D elements: classes, functions, project methods, project forms, menu bars, choice lists, and so on. It cannot call database methods and triggers.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You cannot use the datastore, standard tables, or data files in 4D components. However, a component can create and/or use tables, fields and data files using mechanisms of external databases. These are separate 4D databases that you work with using SQL commands. `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A host project running in interpreted mode can use either interpreted or compiled components. A host project running in compiled mode cannot use interpreted components. In this case, only compiled components can be used. `)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "scope-of-language-commands"
    }
  }, `Scope of language commands`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Except for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#unusable-commands"
    }
  }, `Unusable commands`), `, a component can use any command of the 4D language. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When commands are called from a component, they are executed in the context of the component, except for the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EXECUTE METHOD`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EXECUTE FORMULA`), ` command that use the context of the method specified by the command. Also note that the read commands of the \u201CUsers and Groups\u201D theme can be used from a component but will read the users and groups of the host project (a component does not have its own users and groups). `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET DATABASE PARAMETER`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Get database parameter`), ` commands are an exception: their scope is global to the application. When these commands are called from a component, they are applied to the host application project. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Furthermore, specific measures have been specified for the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Structure file`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Get 4D folder`), ` commands when they are used in the framework of components.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `COMPONENT LIST`), ` command can be used to obtain the list of components that are loaded by the host project.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "unusable-commands"
    }
  }, `Unusable commands`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following commands are not compatible for use within a component because they modify the structure file \u2014 which is open in read-only. Their execution in a component will generate the error -10511, "The CommandName command cannot be called from a component":`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `ON EVENT CALL`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Method called on event`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `SET PICTURE TO LIBRARY`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `REMOVE PICTURE FROM LIBRARY`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `SAVE LIST`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `ARRAY TO LIST`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `EDIT FORM`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `CREATE USER FORM`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `DELETE USER FORM`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `CHANGE PASSWORD`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `EDIT ACCESS`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Set group properties`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Set user properties`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `DELETE USER`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `CHANGE LICENSES`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `BLOB TO USERS`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `SET PLUGIN ACCESS`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Notes:`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Current form table`), ` command returns `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Nil`), ` when it is called in the context of a project form. Consequently, it cannot be used in a component.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `SQL data definition language commands (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `CREATE TABLE`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `DROP TABLE`), `, etc.) cannot be used on the component project. However, they are supported with external databases (see `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `CREATE DATABASE`), ` SQL command).`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "sharing-of-project-methods"
    }
  }, `Sharing of project methods`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All the project methods of a matrix project are by definition included in the component (the project is the component), which means that they can be called and executed within the component. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `On the other hand, by default these project methods will not be visible, and they can't be called in the host project. In the matrix project, you must explicitly designate the methods that you want to share with the host project by checking the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Shared by components and host project`), ` box in the method properties dialog box:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(98440)/* ["default"] */ .Z),
    width: "553",
    height: "182"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Shared project methods can be called in the code of the host project (but they cannot be modified in the Code Editor of the host project). These methods are `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `entry points`), ` of the component. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Conversely, for security reasons, by default a component cannot execute project methods belonging to the host project. In certain cases, you may need to allow a component to access the project methods of your host project. To do this, you must explicitly designate which project methods of the host project you want to make accessible to the components (in the method properties, check the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Shared by components and host project`), ` box).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(67434)/* ["default"] */ .Z),
    width: "592",
    height: "146"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once the project methods of the host projects are available to the components, you can execute a host method from inside a component using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EXECUTE FORMULA`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EXECUTE METHOD`), ` commands. For example: `), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Host Method
component_method("host_method_name")
`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// component_method
 C_TEXT($1)
 EXECUTE METHOD($1)
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `An interpreted host database that contains interpreted components can be compiled or syntax checked if it does not call methods of the interpreted component. Otherwise, a warning dialog box appears when you attempt to launch the compilation or a syntax check and it will not be possible to carry out the operation.`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "p"
  }), `
`, `Keep in mind that an interpreted method can call a compiled method, but not the reverse, except via the use of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EXECUTE METHOD`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EXECUTE FORMULA`), ` commands.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "sharing-of-classes-and-functions"
    }
  }, `Sharing of classes and functions`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, component classes and functions cannot be called from the 4D Code Editor of the host project. If you want your component classes and functions to be exposed in the host projects, you need to declare a component namespace. Additionally, you can control how component classes and functions are suggested in the host Code Editor.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "declaring-the-component-namespace"
    }
  }, `Declaring the component namespace`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To allow classes and functions of your component to be exposed in the host projects, enter a value in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/settings/general#component-namespace-in-the-class-store"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Component namespace in the class store`), ` option in the General page`), ` of the matrix project Settings. By default, the area is empty: component classes are not available outside of the component context.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(49508)/* ["default"] */ .Z),
    width: "825",
    height: "140"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `A `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `namespace`), ` ensures that no conflict emerges when a host project uses different components that have classes or functions with identical names. A component namespace must be compliant with `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/Concepts/identifiers#object-properties"
    }
  }, `property naming rules`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you enter a value, you declare that component classes and functions will be available in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/Concepts/classes#cs"
    }
  }, `user class store (`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `cs`), `)`), ` of the host project's code, through the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `cs.<value>`), ` namespace. For example, if you enter "eGeometry" as component namespace, assuming that you have created a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Rectangle`), ` class containing a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `getArea()`), ` function, once your project is installed as a component, the developer of the host project can write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//in host project
var $rect: cs.eGeometry.Rectangle 
$rect:=cs.eGeometry.Rectangle.new(10;20)
$area:=$rect.getArea()
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Of course, it is recommended to use a distinguished name to avoid any conflict. If a user class with the same name as a component already exists in the project, the user class is taken into account and the component classes are ignored.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A component's ORDA classes are not available in its host project. For example, if there is a dataclass called Employees in your component, you will not be able to use a "cs.Mycomponent.Employee" class in the host project.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "hidden-classes"
    }
  }, `Hidden classes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Just like in any project, you can create hidden classes and functions in the component by prefixing names with an underscore ("_"). When a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#declaring-the-component-namespace"
    }
  }, `component namespace is defined`), `, hidden classes and functions of the component will not appear as suggestions when using code completion. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note however that they can still be used if you know their names. For example, the following syntax is valid even if the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `_Rectangle`), ` class is hidden: `), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$rect:=cs.eGeometry._Rectangle.new(10;20)
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Non-hidden functions inside a hidden class appear as suggestions when you use code completion with a class that `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/Concepts/classes#inheritance"
    }
  }, `inherits`), ` from it. For example, if a component has a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Teacher`), ` class that inherits from a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `_Person`), ` class, code completion for `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Teacher`), ` suggests non-hidden functions from `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `_Person`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "code-completion-for-compiled-components"
    }
  }, `Code completion for compiled components`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To make your component easier to use for developers, you can check the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/settings/general#component-namespace-in-the-class-store"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Generate syntax file for code completion when compiled`), ` option in the General page`), ` of the matrix project Settings.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A syntax file (JSON format) is then automatically created during the compilation phase, filled with the syntax of your component's classes, functions, and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#sharing-of-project-methods"
    }
  }, `exposed methods`), `, and placed in the \\Resources\\en.lproj folder of the component project. 4D uses the contents of that syntax file to generate contextual help in the code editor, such as code completion and function syntax:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(55869)/* ["default"] */ .Z),
    width: "599",
    height: "159"
  }), `
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(94562)/* ["default"] */ .Z),
    width: "599",
    height: "133"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you don't enter a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#declaring-the-component-namespace"
    }
  }, `component namespace`), `, the resources for the classes and exposed methods are not generated even if the syntax file option is checked.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "passing-variables"
    }
  }, `Passing variables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The local, process and interprocess variables are not shared between components and host projects. The only way to modify component variables from the host project and vice versa is using pointers. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Example using an array:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//In the host project:
     ARRAY INTEGER(MyArray;10)
     AMethod(->MyArray)

//In the component, the AMethod project method contains:
     APPEND TO ARRAY($1->;2)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples using variables:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `C_TEXT(myvariable)
component_method1(->myvariable)
`)), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `C_POINTER($p)
$p:=component_method2(...)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Without a pointer, a component can still access the value of a host database variable (but not the variable itself) and vice versa:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//In the host database
C_TEXT($input_t)
$input_t:="DoSomething"
component_method($input_t)
// component_method gets "DoSomething" in $1 (but not the $input_t variable)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you use pointers to allow components and the host project to communicate, you need to take the following specificities into account:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Get pointer`), ` command will not return a pointer to a variable of the host project if it is called from a component and vice versa. `)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `The component architecture allows the coexistence, within the same interpreted project, of both interpreted and compiled components (conversely, only compiled components can be used in a compiled project). In order to use pointers in this case, you must respect the following principle: the interpreter can unpoint a pointer built in compiled mode; however, in compiled mode, you cannot unpoint a pointer built in interpreted mode.
Let\u2019s illustrate this principle with the following example: given two components, C (compiled) and I (interpreted), installed in the same host project.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `If component C defines the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `myCvar`), ` variable, component I can access the value of this variable by using the pointer `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `->myCvar`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `If component I defines the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `myIvar`), ` variable, component C cannot access this variable by using the pointer `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `->myIvar`), `. This syntax causes an execution error. `)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `The comparison of pointers using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `RESOLVE POINTER`), ` command is not recommended with components since the principle of partitioning variables allows the coexistence of variables having the same name but with radically different contents in a component and the host project (or another component). The type of the variable can even be different in both contexts. If the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `myptr1`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `myptr2`), ` pointers each point to a variable, the following comparison will produce an incorrect result:`))), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `     RESOLVE POINTER(myptr1;vVarName1;vtablenum1;vfieldnum1)
     RESOLVE POINTER(myptr2;vVarName2;vtablenum2;vfieldnum2)
     If(vVarName1=vVarName2)
      //This test returns True even though the variables are different
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this case, it is necessary to use the comparison of pointers:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `     If(myptr1=myptr2) //This test returns False
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "error-handling"
    }
  }, `Error handling`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/Concepts/error-handling"
    }
  }, `error-handling method`), ` installed by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ON ERR CALL`), ` command only applies to the running application. In the case of an error generated by a component, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ON ERR CALL`), ` error-handling method of the host project is not called, and vice versa.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "access-to-tables-of-the-host-project"
    }
  }, `Access to tables of the host project`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Although components cannot use tables, pointers can allow host projects and components to communicate with each other. For example, here is a method that could be called from a component:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// calling a component method
methCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Within the component, the code of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `methCreateRec`), ` method:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `C_POINTER($1) //Pointer on a table in host project
C_POINTER($2) //Pointer on a field in host project
C_TEXT($3) // Value to insert

$tablepointer:=$1
$fieldpointer:=$2
CREATE RECORD($tablepointer->)

$fieldpointer->:=$3
SAVE RECORD($tablepointer->)
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `In the context of a component, 4D assumes that a reference to a table form is a reference to the host table form (as components can't have tables.)`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "use-of-tables-and-fields"
    }
  }, `Use of tables and fields`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A component cannot use the tables and fields defined in the 4D structure of the matrix project. However, you can create and use external databases, and then use their tables and fields according to your needs. You can create and manage external databases using SQL. An external database is a 4D project that is independent from the main 4D project, but that you can work with from the main 4D project. Using an external database means temporarily designating this database as the current database, in other words, as the target database for the SQL queries executed by 4D. You create external databases using the SQL `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `CREATE DATABASE`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "example"
    }
  }, `Example`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following code is included in a component and performs three basic actions with an external database:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `creates the external database if it does not already exist,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `adds data to the external database,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `reads data from the external database.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Creating the external database:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `<>MyDatabase:=Get 4D folder+"\\MyDB" // (Windows) stores the data in an authorized directory
 Begin SQL
        CREATE DATABASE IF NOT EXISTS DATAFILE :[<>MyDatabase];
        USE DATABASE DATAFILE :[<>MyDatabase];
        CREATE TABLE IF NOT EXISTS KEEPIT
        (
        ID INT32 PRIMARY KEY,
        kind VARCHAR,
        name VARCHAR,
        code TEXT,
        sort_order INT32
        );
 
        CREATE UNIQUE INDEX id_index ON KEEPIT (ID);
 
        USE DATABASE SQL_INTERNAL;
 
 End SQL
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Writing in the external database:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $Ptr_1:=$2 // retrieves data from the host project through pointers
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6
 Begin SQL
 
        USE DATABASE DATAFILE :[<>MyDatabase];
 
        INSERT INTO KEEPIT
        (ID, kind, name, code, sort_order)
        VALUES
        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);
 
        USE DATABASE SQL_INTERNAL;
 

 End SQL
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Reading from an external database:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $Ptr_1:=$2 // accesses data of the host project through pointers
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6
 
 Begin SQL
 
    USE DATABASE DATAFILE :[<>MyDatabase];
 
    SELECT ALL ID, kind, name, code, sort_order
    FROM KEEPIT
    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;
 
    USE DATABASE SQL_INTERNAL;
 
 End SQL
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "use-of-forms"
    }
  }, `Use of forms`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Only \u201Cproject forms\u201D (forms that are not associated with any specific table) can be used in a component. Any project forms present in the matrix project can be used by the component. `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A component can call table forms of the host project. Note that in this case it is necessary to use pointers rather than table names between brackets [] to specify the forms in the code of the component.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If a component uses the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ADD RECORD`), ` command, the current Input form of the host project will be displayed, in the context of the host project. Consequently, if the form includes variables, the component will not have access to them.`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You can publish component forms as subforms in the host projects. This means that you can, more particularly, develop components offering graphic objects. For example, Widgets provided by 4D are based on the use of subforms in components. `)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `In the context of a component, any referenced project form must belong to the component. For example, inside a component, referencing a host project form using `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `DIALOG`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Open form window`), ` will throw an error. `)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "use-of-resources"
    }
  }, `Use of resources`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Components can use resources located in the Resources folder of the component. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Automatic mechanisms are operational: the XLIFF files found in the Resources folder of a component will be loaded by this component. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In a host project containing one or more components, each component as well as the host projects has its own \u201Cresources string.\u201D Resources are partitioned between the different projects: it is not possible to access the resources of component A from component B or the host project.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "executing-initialization-code"
    }
  }, `Executing initialization code`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A component can execute 4D code automatically when opening or closing the host database, for example in order to load and/or save the preferences or user states related to the operation of the host database. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Executing initialization or closing code is done by means of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Host Database Event`), ` database method.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `For security reasons, you must explicitly authorize the execution of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Host Database Event`), ` database method in the host database in order to be able to call it. To do this, you must check the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/settings/security#options"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Execute "On Host Database Event" method of the components`), ` option`), ` in the Security page of the Settings.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "protection-of-components-compilation"
    }
  }, `Protection of components: compilation`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, all the code of a matrix project installed as a component is potentially visible from the host project. In particular:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The shared project methods are found on the Methods Page of the Explorer and can be called in the methods of the host project. Their contents can be selected and copied in the preview area of the Explorer. They can also be viewed in the debugger. However, it's not possible to open them in the Code Editor or modify them.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The other project methods of the matrix project do not appear in the Explorer but they too can be viewed in the debugger of the host project. `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The non-hidden classes and functions can be viewed in the debugger `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#declaring-the-component-namespace"
    }
  }, `if a namespace is declared`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To protect the code of a component effectively, simply `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/es/Desktop/building#build-component"
    }
  }, `compile and build`), ` the matrix project and provide it in the form of a .4dz file. When a compiled matrix project is installed as a component:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The shared project methods, classes and functions can be called in the methods of the host project. Shared project methods are also visible on the Methods Page of the Explorer. However, their contents will not appear in the preview area and in the debugger.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The other project methods of the matrix project will never appear. `)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "sharing-components"
    }
  }, `Sharing components`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `We encourage you to support the 4D developer community by sharing your components, preferably on the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://github.com/topics/4d-component"
    }
  }, `GitHub platform`), `. We recommend that you use the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "strong"
  }, `4d-component`)), ` topic to be correctly referenced.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 67434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/pict516563.en-686ce2897139b168aeb17276e04b4265.png");

/***/ }),

/***/ 98440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 49508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 94562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/syntax-code-completion-1-68fa77e7eb7350f9830538563640ef3f.png");

/***/ }),

/***/ 55869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

};
;