exports.id = 90448;
exports.ids = [90448];
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

/***/ 16455:
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
var components_exports = {};
__export(components_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(components_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "components",
  title: "Components"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Concepts/components",
  "id": "version-19/Concepts/components",
  "title": "Components",
  "description": "A 4D component is a set of 4D methods and forms representing one or more functionalities that can be installed in different applications. For example, you can develop a 4D e-mail component that manages every aspect of sending, receiving and storing e-mails in 4D applications.",
  "source": "@site/versioned_docs/version-19/Concepts/components.md",
  "sourceDirName": "Concepts",
  "slug": "/Concepts/components",
  "permalink": "/docs/fr/19/Concepts/components",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "components",
    "title": "Components"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Interpreted and Compiled modes",
    "permalink": "/docs/fr/19/Concepts/interpreted-compiled"
  },
  "next": {
    "title": "Plug-ins",
    "permalink": "/docs/fr/19/Concepts/plug-ins"
  }
};
const assets = {};
const toc = [{
  value: "Presentation",
  id: "presentation",
  level: 2
}, {
  value: "Definitions",
  id: "definitions",
  level: 3
}, {
  value: "Principles",
  id: "principles",
  level: 3
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A 4D component is a set of 4D methods and forms representing one or more functionalities that can be installed in different applications. For example, you can develop a 4D e-mail component that manages every aspect of sending, receiving and storing e-mails in 4D applications.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "presentation"
    }
  }, `Presentation`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "definitions"
    }
  }, `Definitions`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Matrix Project`), `: 4D project used for developing the component. The matrix project is a standard project with no specific attributes. A matrix project forms a single component.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Host Project`), `: Application project in which a component is installed and used.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Component`), `: Matrix project, compiled or not, copied into the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/fr/19/Project/architecture"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Components`)), ` folder of the host application and whose contents are used in the host application.  `)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "principles"
    }
  }, `Principles`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Creating and installing 4D components is carried out directly from 4D. Basically, components are managed like `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/fr/19/Concepts/plug-ins"
    }
  }, `plug-ins`), ` according to the following principles:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A component consists of a regular 4D project file.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To install a component, you simply need to copy it into the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/fr/19/Project/architecture"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Components`), ` folder of the project`), `. You can use aliases or shortcuts.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A project can be both a \u201Cmatrix\u201D and a \u201Chost,\u201D in other words, a matrix project can itself use one or more components. However, a component cannot use \u201Csub-components\u201D itself.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A component can call on most of the 4D elements: project methods, project forms, menu bars, choice lists, and so on. It cannot call database methods and triggers.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You cannot use standard tables or data files in 4D components. However, a component can create and/or use tables, fields and data files using mechanisms of external databases. These are separate 4D databases that you work with using SQL commands.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A host project running in interpreted mode can use either interpreted or compiled components. A host project running in compiled mode cannot use interpreted components. In this case, only compiled components can be used.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "scope-of-language-commands"
    }
  }, `Scope of language commands`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Except for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#unusable-commands"
    }
  }, `Unusable commands`), `, a component can use any command of the 4D language.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When commands are called from a component, they are executed in the context of the component, except for the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EXECUTE METHOD`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EXECUTE FORMULA`), ` command that use the context of the method specified by the command. Also note that the read commands of the \u201CUsers and Groups\u201D theme can be used from a component but will read the users and groups of the host project (a component does not have its own users and groups).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET DATABASE PARAMETER`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Get database parameter`), ` commands are an exception: their scope is global to the application. When these commands are called from a component, they are applied to the host application project.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Furthermore, specific measures have been specified for the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Structure file`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Get 4D folder`), ` commands when they are used in the framework of components.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `COMPONENT LIST`), ` command can be used to obtain the list of components that are loaded by the host project.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "unusable-commands"
    }
  }, `Unusable commands`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following commands are not compatible for use within a component because they modify the structure file \u2014 which is open in read-only. Their execution in a component will generate the error -10511, \u201CThe CommandName command cannot be called from a component\u201D:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
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
  }, `Sharing of project methods`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All the project methods of a matrix project are by definition included in the component (the project is the component), which means that they can be called and executed by the component.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `On the other hand, by default these project methods will not be visible, and they can't be called in the host project. In the matrix project, you must explicitly designate the methods that you want to share with the host project. These project methods can be called in the code of the host project (but they cannot be modified in the Method editor of the host project). These methods form `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `entry points`), ` in the component.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Conversely, for security reasons, by default a component cannot execute project methods belonging to the host project. In certain cases, you may need to allow a component to access the project methods of your host project. To do this, you must explicitly designate which project methods of the host project you want to make accessible to the components (in the method properties, check the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Shared by components and host project`), ` box).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(41370)/* ["default"] */ .Z),
    width: "592",
    height: "146"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once the project methods of the host projects are available to the components, you can execute a host method from inside a component using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EXECUTE FORMULA`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EXECUTE METHOD`), ` commands. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
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
  }, `An interpreted host database that contains interpreted components can be compiled or syntax checked if it does not call methods of the interpreted component. Otherwise, a warning dialog box appears when you attempt to launch the compilation or a syntax check and it will not be possible to carry out the operation.
Keep in mind that an interpreted method can call a compiled method, but not the reverse, except via the use of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EXECUTE METHOD`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EXECUTE FORMULA`), ` commands.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "passing-variables"
    }
  }, `Passing variables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The local, process and interprocess variables are not shared between components and host projects. The only way to modify component variables from the host project and vice versa is using pointers.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Example using an array:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
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
  }, `Get pointer`), ` command will not return a pointer to a variable of the host project if it is called from a component and vice versa.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
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
  }, `->myIvar`), `. This syntax causes an execution error.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
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
      "href": "/docs/fr/19/Concepts/error-handling"
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
  }, `Only \u201Cproject forms\u201D (forms that are not associated with any specific table) can be used in a component. Any project forms present in the matrix project can be used by the component.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A component can call table forms of the host project. Note that in this case it is necessary to use pointers rather than table names between brackets [] to specify the forms in the code of the component.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If a component uses the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ADD RECORD`), ` command, the current Input form of the host project will be displayed, in the context of the host project. Consequently, if the form includes variables, the component will not have access to it.`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You can publish component forms as subforms in the host projects. This means that you can, more particularly, develop components offering graphic objects. For example, Widgets provided by 4D are based on the use of subforms in components.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `In the context of a component, any referenced project form must belong to the component. For example, inside a component, referencing a host project form using `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `DIALOG`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Open form window`), ` will throw an error.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "use-of-resources"
    }
  }, `Use of resources`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Components can use resources located in the Resources folder of the component.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Automatic mechanisms are operational: the XLIFF files found in the Resources folder of a component will be loaded by this component.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In a host project containing one or more components, each component as well as the host projects has its own \u201Cresources string.\u201D Resources are partitioned between the different projects: it is not possible to access the resources of component A from component B or the host project.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "executing-initialization-code"
    }
  }, `Executing initialization code`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A component can execute 4D code automatically when opening or closing the host database, for example in order to load and/or save the preferences or user states related to the operation of the host database.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Executing initialization or closing code is done by means of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Host Database Event`), ` database method.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `For security reasons, you must explicitly authorize the execution of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Host Database Event`), ` database method in the host database in order to be able to call it. To do this, you must check the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Execute "On Host Database Event" method of the components`), ` option on the Security page the Settings.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "protection-of-components-compilation"
    }
  }, `Protection of components: compilation`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, all the project methods of a matrix project installed as a component are potentially visible from the host project. In particular:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The shared project methods are found on the Methods Page of the Explorer and can be called in the methods of the host project. Their contents can be selected and copied in the preview area of the Explorer. They can also be viewed in the debugger. However, it's not possible to open them in the Method editor or modify them.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The other project methods of the matrix project do not appear in the Explorer but they too can be viewed in the debugger of the host project.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To protect the project methods of a component effectively, simply compile the matrix project and provide it in the form of a .4dz file. When a compiled matrix project is installed as a component:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The shared project methods are shown on the Methods Page of the Explorer and can be called in the methods of the host project. However, their contents will not appear in the preview area and in the debugger.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The other project methods of the matrix project will never appear.`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 41370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/pict516563.en-686ce2897139b168aeb17276e04b4265.png");

/***/ })

};
;