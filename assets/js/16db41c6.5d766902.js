exports.id = 6099;
exports.ids = [6099];
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

/***/ 29881:
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
var building_exports = {};
__export(building_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(building_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "building",
  title: "Build Application"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Desktop/building",
  "id": "Desktop/building",
  "title": "Build Application",
  "description": "4D includes an application builder to create a project package (final build). This builder simplifies the finalization and deployment process for 4D compiled applications. It automatically handles the specific features of different operating systems and facilitates the deployment of client-server applications.",
  "source": "@site/docs/Desktop/building.md",
  "sourceDirName": "Desktop",
  "slug": "/Desktop/building",
  "permalink": "/docs/next/Desktop/building",
  "draft": false,
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "building",
    "title": "Build Application"
  },
  "sidebar": "docs",
  "previous": {
    "title": "User Settings",
    "permalink": "/docs/next/Desktop/user-settings"
  }
};
const assets = {};
const toc = [{
  value: "Overview",
  id: "overview",
  level: 2
}, {
  value: "Build application dialog",
  id: "build-application-dialog",
  level: 3
}, {
  value: "buildApp.4DSettings",
  id: "buildapp4dsettings",
  level: 3
}, {
  value: "Log file",
  id: "log-file",
  level: 3
}, {
  value: "Application name and destination folder",
  id: "application-name-and-destination-folder",
  level: 2
}, {
  value: "Compiled structure page",
  id: "compiled-structure-page",
  level: 2
}, {
  value: "Build compiled structure",
  id: "build-compiled-structure",
  level: 3
}, {
  value: "Include related folders",
  id: "include-related-folders",
  level: 4
}, {
  value: "Build component",
  id: "build-component",
  level: 3
}, {
  value: "Application page",
  id: "application-page",
  level: 2
}, {
  value: "Build stand-alone Application",
  id: "build-stand-alone-application",
  level: 3
}, {
  value: "4D Volume Desktop Location",
  id: "4d-volume-desktop-location",
  level: 4
}, {
  value: "Data linking mode",
  id: "data-linking-mode",
  level: 4
}, {
  value: "Generated files",
  id: "generated-files",
  level: 4
}, {
  value: "Customizing 4D Volume Desktop folder",
  id: "customizing-4d-volume-desktop-folder",
  level: 4
}, {
  value: "Location of Web files",
  id: "location-of-web-files",
  level: 4
}, {
  value: "Client/Server page",
  id: "clientserver-page",
  level: 2
}, {
  value: "What is a Client/Server application?",
  id: "what-is-a-clientserver-application",
  level: 3
}, {
  value: "Build server application",
  id: "build-server-application",
  level: 3
}, {
  value: "4D Server location",
  id: "4d-server-location",
  level: 4
}, {
  value: "Current version",
  id: "current-version",
  level: 4
}, {
  value: "Embed the project Users and Groups in built server application",
  id: "embed-the-project-users-and-groups-in-built-server-application",
  level: 4
}, {
  value: "Allow connection of Silicon Mac clients",
  id: "allow-connection-of-silicon-mac-clients",
  level: 4
}, {
  value: "Compiled structure location",
  id: "compiled-structure-location",
  level: 4
}, {
  value: "Data linking mode",
  id: "data-linking-mode-1",
  level: 4
}, {
  value: "Build client application",
  id: "build-client-application",
  level: 3
}, {
  value: "4D Volume Desktop Location",
  id: "4d-volume-desktop-location-1",
  level: 4
}, {
  value: "Copy of client applications inside the server application",
  id: "copy-of-client-applications-inside-the-server-application",
  level: 4
}, {
  value: "Selecting client archive for the concurrent platform",
  id: "selecting-client-archive-for-the-concurrent-platform",
  level: 4
}, {
  value: "Displaying update notification",
  id: "displaying-update-notification",
  level: 4
}, {
  value: "Forcing automatic updates",
  id: "forcing-automatic-updates",
  level: 4
}, {
  value: "Update Error",
  id: "update-error",
  level: 4
}, {
  value: "Generated files",
  id: "generated-files-1",
  level: 3
}, {
  value: "Location of Web files",
  id: "location-of-web-files-1",
  level: 4
}, {
  value: "Embedding a single-user client application",
  id: "embedding-a-single-user-client-application",
  level: 3
}, {
  value: "Customizing client and/or server cache folder names",
  id: "customizing-client-andor-server-cache-folder-names",
  level: 3
}, {
  value: "Client cache folder",
  id: "client-cache-folder",
  level: 4
}, {
  value: "Server cache folder",
  id: "server-cache-folder",
  level: 4
}, {
  value: "Plugins &amp; components page",
  id: "plugins--components-page",
  level: 2
}, {
  value: "Adding plug-ins or components",
  id: "adding-plug-ins-or-components",
  level: 3
}, {
  value: "Deselecting modules",
  id: "deselecting-modules",
  level: 3
}, {
  value: "Licenses &amp; Certificate page",
  id: "licenses--certificate-page",
  level: 2
}, {
  value: "Licenses",
  id: "licenses",
  level: 3
}, {
  value: "OS X signing certificate",
  id: "os-x-signing-certificate",
  level: 3
}, {
  value: "About Gatekeeper",
  id: "about-gatekeeper",
  level: 4
}, {
  value: "About Notarization",
  id: "about-notarization",
  level: 4
}, {
  value: "Customizing application icons",
  id: "customizing-application-icons",
  level: 2
}, {
  value: "Management of data file(s)",
  id: "management-of-data-files",
  level: 2
}, {
  value: "Opening the data file",
  id: "opening-the-data-file",
  level: 3
}, {
  value: "Last data file opened",
  id: "last-data-file-opened",
  level: 3
}, {
  value: "Path of last data file",
  id: "path-of-last-data-file",
  level: 4
}, {
  value: "Configuring the data linking mode",
  id: "configuring-the-data-linking-mode",
  level: 4
}, {
  value: "Defining a default data folder",
  id: "defining-a-default-data-folder",
  level: 3
}, {
  value: "Management of client connection(s)",
  id: "management-of-client-connections",
  level: 2
}, {
  value: "Connection scenario",
  id: "connection-scenario",
  level: 3
}, {
  value: "Storing the last server path",
  id: "storing-the-last-server-path",
  level: 3
}, {
  value: "Availability of the server selection dialog box in case of error",
  id: "availability-of-the-server-selection-dialog-box-in-case-of-error",
  level: 3
}, {
  value: "Automatic updating of server or single-user applications",
  id: "automatic-updating-of-server-or-single-user-applications",
  level: 2
}, {
  value: "Update log",
  id: "update-log",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D includes an application builder to create a project package (final build). This builder simplifies the finalization and deployment process for 4D compiled applications. It automatically handles the specific features of different operating systems and facilitates the deployment of client-server applications.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The application builder allows you to:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Build a compiled structure, without interpreted code,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Build a stand-alone, double-clickable application, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `i.e.`), `, merged with 4D Volume Desktop, the 4D database engine,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Build different applications from the same compiled structure via an XML project,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Build homogeneous client-server applications,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Build client-server applications with automatic updating of client and server parts.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Save your build settings for future use (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Save settings`), ` button).`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Compiled applications are based upon `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#build-compiled-structure"
    }
  }, `.4dz files`), ` that are `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `read-only`), `. Keep in mind that using commands or functions that modify the source files (such as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `CREATE INDEX`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `CREATE TABLE`), ` (SQL)) is not possible by default in compiled applications. However, you can build specific applications that support local modifications by using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `PackProject`), ` XML key (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com"
    }
  }, `doc.4d.com`), `).`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "overview"
    }
  }, `Overview`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Building a project package can be carried out using:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `either the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page871.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `BUILD APPLICATION`)), ` command,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `or the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#application-builder"
    }
  }, `Build Application dialog`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "build-application-dialog"
    }
  }, `Build application dialog`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To display the Build application dialog, select `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Design`), ` > `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Build Application...`), ` from the menu bar.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(82556)/* ["default"] */ .Z),
    width: "278",
    height: "254"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Build Application dialog includes several pages that can be accessed using tabs:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(15378)/* ["default"] */ .Z),
    width: "860",
    height: "645"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Building can only be carried out once the project is compiled. If you select this command without having previously compiled the project, or if the compiled code does not correspond to the interpreted code, a warning dialog box appears indicating that the project must be (re)compiled.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "buildapp4dsettings"
    }
  }, `buildApp.4DSettings`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each build application parameter is stored as an XML key in the application project file named `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `buildApp.4DSettings`), ` XML file, located in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/Project/architecture#settings-1"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Settings`), ` folder of the project`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Default parameters are used the first time the Build Application dialog box is used. The contents of the project file are updated, if necessary, when you click `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Build`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Save settings`), `. You can define several other XML settings file for the same project and employ them using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page871.html"
    }
  }, `BUILD APPLICATION`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `XML keys provide additional options besides those displayed in the Build Application dialog box. The description of these keys are detailed in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19/4D/19/4D-XML-Keys-BuildApplication.100-5447429.en.html"
    }
  }, `4D XML Keys BuildApplication`), ` manual.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "log-file"
    }
  }, `Log file`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When an application is built, 4D generates a log file named `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `BuildApp.log.xml`), ` in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Logs`), ` folder of the project. The log file stores the following information for each build:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The start and end of building of targets,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The name and full access path of the files generated,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The date and time of the build,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Any errors that occurred,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Any signing issues (e.g. a non-signed plug-in).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Checking this file may help you saving time during the subsequent deployment steps, for example if you intend to notarize your application.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Get 4D file(Build application log file)`), ` command to get the log file location.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "application-name-and-destination-folder"
    }
  }, `Application name and destination folder`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(15520)/* ["default"] */ .Z),
    width: "590",
    height: "56"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Enter the name of the application in `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Application Name`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Specify the folder for the built application in `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Destination Folder`), `. If the specified folder does not already exist, 4D will create a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Build`), ` folder for you.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "compiled-structure-page"
    }
  }, `Compiled structure page`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This tab allows you to build a standard compiled structure file and/or a compiled component:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(15378)/* ["default"] */ .Z),
    width: "860",
    height: "645"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "build-compiled-structure"
    }
  }, `Build compiled structure`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Builds an application containing only compiled code.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This feature creates a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `.4dz`), ` file within a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Compiled Database/\\<project name>`), ` folder. For example, if you have named your application "MyProject", 4D will create:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<destination\\>/Compiled Database/MyProject/MyProject.4dz`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A .4dz file is essentially a zipped (packed) version of the project folder. .4dz files can be used by 4D Server, 4D Volume license (merged applications), and 4D. The compact and optimized size of .4dz files makes project packages easy to deploy.  `), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `When generating .4dz files, 4D uses a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `standard`), ` zip format by default. The advantage of this format is that it is easily readable by any unzip tool. If you do not want to use this standard format, add the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `UseStandardZipFormat`), ` XML key with value `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `False`), ` in your `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#build-application-settings"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `buildApp.4DSettings`)), ` file (for more information, see the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19/4D/19/4D-XML-Keys-BuildApplication.100-5447429.en.html"
    }
  }, `4D XML Keys BuildApplication`), ` manual).`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "include-related-folders"
    }
  }, `Include related folders`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you check this option, any folders related to the project are copied into the Build folder as `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Components`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Resources`), ` folders. For more information about these folders, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/Project/architecture"
    }
  }, `description of project architecture`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "build-component"
    }
  }, `Build component`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Builds a compiled component from the structure.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A component is a standard 4D project in which specific functionalities have been developed. Once the component has been configured and installed in another 4D project (the host application project), its functionalities are accessible from the host project.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you have named your application, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `MyComponent`), `, 4D will create a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Components`), ` folder containing `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `MyComponent.4dbase`), ` folder:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<destination>/Components/MyComponent.4dbase/MyComponent.4DZ`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `MyComponent.4dbase`), ` folder contains:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `MyComponent.4DZ`), ` file`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Resources`), ` folder - any associated Resources are automatically copied into this folder. Any other components and/or plugins folders are not copied (a component cannot use plug-ins or other components).`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "application-page"
    }
  }, `Application page`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This tab allows you can build a stand-alone, single-user version of your application:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(67542)/* ["default"] */ .Z),
    width: "856",
    height: "647"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "build-stand-alone-application"
    }
  }, `Build stand-alone Application`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Checking the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Build stand-alone Application`), ` option and clicking `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Build`), ` will create a stand-alone (double-clickable) application directly from your application project.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following elements are required for the build:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `4D Volume Desktop (the 4D database engine),`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `an `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#licenses"
    }
  }, `appropriate license`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `On Windows, this feature creates an executable file (.exe). On macOS, it handles the creation of software packages.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The principle consists of merging a compiled structure file with 4D Volume Desktop. The functionality provided by the 4D Volume Desktop file is linked with the product offer to which you have subscribed. For more information about this point, refer to the sales documentation and to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "http://www.4d.com/"
    }
  }, `4D Store`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can define a default data file or allow users to create and use their own data file (see the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/Data-file-management-in-final-applications.300-4354729.en.html"
    }
  }, `Data file management in final applications`), ` section).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `It is possible to automate the update of merged single-user applications by means of a sequence of language commands (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/Automatic-updating-of-server-or-single-user-applications.300-4354721.en.html"
    }
  }, `Automatic updating of server or single-user applications`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "4d-volume-desktop-location"
    }
  }, `4D Volume Desktop Location`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In order to build a stand-alone application, you must first designate the folder containing the 4D Volume Desktop file:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Windows`), ` - the folder contains the 4D Volume Desktop.4DE, 4D Volume Desktop.RSR, as well as various files and folders required for its operation. These items must be placed at the same level as the selected folder.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `macOS`), ` - 4D Volume Desktop is provided in the form of a structured software package containing various generic files and folders.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To select the 4D Volume Desktop folder, click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `[...]`), ` button. A dialog box appears allowing you to designate the 4D Volume Desktop folder (Windows) or package (macOS).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once the folder is selected, its complete pathname is displayed and, if it actually contains 4D Volume Desktop, the option for building an executable application is activated.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The 4D Volume Desktop version number must match the 4D Developer Edition version number. For example, if you use 4D Developer v18, you must select a 4D Volume Desktop v18.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "data-linking-mode"
    }
  }, `Data linking mode`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option lets you choose the linking mode between the merged application and the local data file. Two data linking modes are available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `By application name`), ` (default) - The 4D application automatically opens the most recently opened data file corresponding to the structure file. This allows you to move the application package freely on the disk. This option should generally be used for merged applications, unless you specifically need to duplicate your application.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `By application path`), ` - The merged 4D application will parse the application's `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `lastDataPath.xml`), ` file and try to open the data file with an "executablePath" attribute that matches the application's full path. If such an entry is found, its corresponding data file (defined through its "dataFilePath" attribute) is opened. Otherwise, the last opened data file is opened (default mode).`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information about the data linking mode, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#last-data-file-opened"
    }
  }, `Last data file opened`), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "generated-files"
    }
  }, `Generated files`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Build`), ` button, 4D automatically creates a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Final Application`), ` folder in the specified `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Destination Folder`), `. Inside the Final Application folder is a subfolder with the name of the specified application in it.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you have specified "MyProject" as the name of the application, you will find the following files in this subfolder (aka MyProject):`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Windows`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `MyProject.exe  - Your executable and a MyProject.rsr (the application resources)`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `4D Extensions folder, Resources folder, various libraries (DLL), Native Components folder, SASL Plugins folder - Files necessary for the operation of the application`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Database folder  - Includes a Resources folder and  MyProject.4DZ file. They make up the compiled structure of the project as well as the project Resources folder.
`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Note`), `: This folder also contains the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Default Data`), ` folder, if it has been defined (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#data-file-management-in-final-applicatons"
    }
  }, `Data file management in final applications`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `(Optional) Components folder and/or Plugins folder - Contains any components and/or plug-in files included in the project. For more information about this, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#plugins-and-components"
    }
  }, `Plugins and components`), ` section.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Licenses folder - An XML file of license numbers integrated into the application. For more information about this, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#licenses-and-certificate"
    }
  }, `Licenses & Certificate`), ` section.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Additional items added to the 4D Volume Desktop folder, if any (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#customizing-4d-volume-desktop-folder"
    }
  }, `Customizing the 4D Volume Desktop folder`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `All these items must be kept in the same folder in order for the executable to operate.`)))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `macOS`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A software package named MyProject.app containing your application and all the items necessary for its operation, including the plug-ins, components and licenses. For more information about integrating plug-ins and components, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#plugins-and-components"
    }
  }, `Plugins and components`), ` section. For more information about integrating licenses, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#licenses-and-certificate"
    }
  }, `Licenses & Certificate`), ` section. `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Note`), `: In macOS, the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv18R4/4D/18-R4/Application-file.301-4982855.en.html"
    }
  }, `Application file`), ` command of the 4D language returns the pathname of the ApplicationName file (located in the Contents:macOS folder of the software package) and not that of the .comp file (Contents:Resources folder of the software package).`)))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "customizing-4d-volume-desktop-folder"
    }
  }, `Customizing 4D Volume Desktop folder`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When building a stand-alone application, 4D copies the contents of the 4D Volume Desktop folder into Destination folder > `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Final Application`), ` folder. You're then able to customize the contents of the original 4D Volume Desktop folder according to your needs. You can, for example:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Install a 4D Volume Desktop version corresponding to a specific language;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Add a custom `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `PlugIns`), ` folder;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Customize the contents of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Resources`), ` folder.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `In macOS, 4D Volume Desktop is provided in the form of a software package. In order to modify it, you must first display its contents (`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Control+click`), ` on the icon).`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "location-of-web-files"
    }
  }, `Location of Web files`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If your stand-alone application is used as a Web server, the files and folders required by the server must be installed in specific locations. These items are the following:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `cert.pem`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `key.pem`), ` files (optional): These files are used for TLS connections and by data encryption commands,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `default Web root folder.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Items must be installed:  `), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `on Windows`), `: in the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Final Application\\MyProject\\Database`), ` subfolder.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `on macOS`), `: next to the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `MyProject.app`), ` software package.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "clientserver-page"
    }
  }, `Client/Server page`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `On this tab, you can build customized client-server applications that are homogenous, cross-platform and with an automatic update option.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(20843)/* ["default"] */ .Z),
    width: "842",
    height: "662"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "what-is-a-clientserver-application"
    }
  }, `What is a Client/Server application?`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A client/server application comes from the combination of three items:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A compiled 4D project,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The 4D Server application,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The 4D Volume Desktop application (macOS and/or Windows).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once built, a client/server application is composed of two customized parts: the Server portion (unique) and the Client portion (to install on each client machine).`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If you want to deploy a client/server application in an heterogeneous environment (client applications running on Intel/AMD and Apple Silicon machines), it is recommended to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/Project/compiler#compilation-target"
    }
  }, `compile the project for all processors`), ` on a macOS machine, so that all client applications will run natively.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Also, the client/server application is customized and its handling simplified:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To launch the server portion, the user simply double-clicks on the server application. The project file does not need to be selected.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To launch the client portion, the user simply double-clicks the client application, which connects directly to the server application. You do not need to choose a server in a connection dialog box. The client targets the server either using its name, when the client and server are on the same sub-network, or using its IP address, which is set using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `IPAddress`), ` XML key in the buildapp.4DSettings file. If the connection fails, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#management-of-client-connections"
    }
  }, `specific alternative mechanisms can be implemented`), `. You can "force" the display of the standard connection dialog box by holding down the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Option`), ` (macOS) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Alt`), ` (Windows) key while launching the client application.
Only the client portion can connect to the corresponding server portion. If a user tries to connect to the server portion using a standard 4D application, an error message is returned and connection is impossible.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A client/server application can be set so that the client portion `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#copy-of-client-applications-in-the-server-application"
    }
  }, `can be updated automatically over the network`), `. You only need to create and distribute an initial version of the client application, subsequent updates are handled using the automatic update mechanism.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `It is also possible to automate the update of the server part through the use of a sequence of language commands (`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page1291.html"
    }
  }, `SET UPDATE FOLDER`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page1292.html"
    }
  }, `RESTART 4D`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "build-server-application"
    }
  }, `Build server application`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Check this option to generate the server part of your application during the building phase. You must designate the location on your disk of the 4D Server application to be used. This 4D Server must correspond to the current platform (which will also be the platform of the server application).`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "4d-server-location"
    }
  }, `4D Server location`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `[...]`), ` button and use the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Browse for folder`), ` dialog box to locate the 4D Server application. In macOS, you must select the 4D Server package directly.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "current-version"
    }
  }, `Current version`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Used to indicate the current version number for the application generated. You may then accept or reject connections by client applications according to their version number. The interval of compatibility for client and server applications is set using specific `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#buildapp4dsettings"
    }
  }, `XML keys`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "embed-the-project-users-and-groups-in-built-server-application"
    }
  }, `Embed the project Users and Groups in built server application`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Preliminary Note:`), ` The following terms are used in this section:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
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
  }, `Definition`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Project directory file`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/next/Users/editing#directoryjson-file"
    }
  }, `directory.json`), ` file located in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/next/Project/architecture#settings-1"
    }
  }, `Settings folder`), ` of the project`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Application directory file`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/next/Users/editing#directoryjson-file"
    }
  }, `directory.json`), ` file located in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/next/Project/architecture#settings-1"
    }
  }, `Settings folder`), ` of the built 4D Server`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Data directory file`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/next/Users/editing#directoryjson-file"
    }
  }, `directory.json`), ` file in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "td",
    ...{
      "href": "/docs/next/Project/architecture#settings"
    }
  }, `Data > Settings folder`))))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you check this option, the project directory file is copied to the application directory file at build time.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you execute a built 4D Server application:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the server has a data directory file, it is loaded.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the server does not have a data directory file, the application directory file is loaded.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The application directory file is read-only. Modifications made to users, groups and permissions during server execution are stored in the data directory file. If no data directory file already exists, it is automatically created. If the application directory file was embedded, it is duplicated as data directory file.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Embedding the project directory file allows you to deploy a client/server application with a basic security user and group configuration. Subsequent modifications are added to the data directory file.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "allow-connection-of-silicon-mac-clients"
    }
  }, `Allow connection of Silicon Mac clients`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When building a server on Windows, check this option to allow Apple Silicon clients to connect to your server application. You can then specify a path to the structure compiled for Apple Silicon/Intel.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To allow Apple Silicon clients to connect to a Server application built on Windows, you must first build a client application on macOS, with a project compiled for Apple Silicon and Intel. This automatically creates a compiled structure, identical to the one created with the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "strong",
    ...{
      "href": "#build-compiled-structure"
    }
  }, `Build compiled structure`)), ` option (without the related folders).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Then, you can copy that structure to your Windows machine, and use it to build the server application:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(24459)/* ["default"] */ .Z),
    width: "512",
    height: "346"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "compiled-structure-location"
    }
  }, `Compiled structure location`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Path to compiled structure of the Apple Silicon/Intel client application used to build a Windows Server (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#allow-connection-of-silicon-mac-clients"
    }
  }, `Allow connection of Silicon Mac clients`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "data-linking-mode-1"
    }
  }, `Data linking mode`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option lets you choose the linking mode between the merged application and the local data file. Two data linking modes are available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `By application name`), ` (default) - The 4D application automatically opens the most recently opened data file corresponding to the structure file. This allows you to move the application package freely on the disk. This option should generally be used for merged applications, unless you specifically need to duplicate your application.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `By application path`), ` - The merged 4D application will parse the application's `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `lastDataPath.xml`), ` file and try to open the data file with an "executablePath" attribute that matches the application's full path. If such an entry is found, its corresponding data file (defined through its "dataFilePath" attribute) is opened. Otherwise, the last opened data file is opened (default mode).`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information about the data linking mode, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#last-data-file-opened"
    }
  }, `Last data file opened`), ` section.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "build-client-application"
    }
  }, `Build client application`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Checking this option generates the client part of your application during the building phase.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can check this option:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `along with the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#build-server-application"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Build server application`)), ` option to build matching server and client parts for the current platform and (optionally) include the automatic update archive files,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `without selecting the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#build-server-application"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Build server application`)), ` option, usually to build the update archive file to be selected from the "concurrent" platform when building the server part.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "4d-volume-desktop-location-1"
    }
  }, `4D Volume Desktop Location`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Designates the location on your disk of the 4D Volume Desktop application to be used to build the client part of your application.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The 4D Volume Desktop version number must match the 4D Developer Edition version number. For example, if you use 4D v19, you must select a 4D Volume Desktop v19.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D Volume Desktop must correspond to the current platform (which will also be the platform of the client application). If you want to build a client application for the "concurrent" platform, you must carry out an additional build operation using a 4D application running on that platform.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you want the client application to connect to the server using a specific address (other than the server name published on the sub-network), you must use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `IPAddress`), ` XML key in the buildapp.4DSettings file. For more information about this file, refer to the description of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page871.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `BUILD APPLICATION`)), ` command. You can also implement specific mechanisms in the event of a connection failure. The different scenarios proposed are described in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#management-of-client-connections"
    }
  }, `Management of connections by client applications`), ` paragraph.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "copy-of-client-applications-inside-the-server-application"
    }
  }, `Copy of client applications inside the server application`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The options of this area set up the mechanism for updating the client part(s) of your client/server applications using the network each time a new version of the application is generated. These options are only enabled when the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Build client application`), ` option is checked.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Allow automatic update of Windows client application`), ` - Check this option to build a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `.4darchive`), ` file that can be sent to your client applications on the Windows platform in case of update.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Allow automatic update of Macintosh client application`), ` - Check this option to build a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `.4darchive`), ` file that can be sent to your client applications on the Macintosh platform in case of update.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.4darchive`), ` is copied at the following location:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{}
  }, `<ApplicationName>_Build/Client Server executable/Upgrade4DClient/
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "selecting-client-archive-for-the-concurrent-platform"
    }
  }, `Selecting client archive for the concurrent platform`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can check the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Allow automatic update...`), ` option for client applications running on the concurrent platform. This option is only enabled if:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Build server application`), ` option is checked,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Allow automatic update...`), ` option for client applications running on the current platform is checked.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This feature requires that you click on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `[...]`), ` button and designate the location on your disk of the file to use for the update. The file to select depends on the current server platform:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Current server platform`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Required file`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Details`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `macOS`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Windows 4D Volume Desktop `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "td"
  }, `or`), ` Windows client update archive`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `By default, you select the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `4D Volume Desktop`), ` application for Windows. To select a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `.4darchive`), ` file previously built on Windows, press `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "td"
  }, `Shift`), ` while clicking on `, `[...]`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Windows`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `macOS client update archive`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Select a signed `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "td"
  }, `.4darchive`), ` file previously built on macOS`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can build specific a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.4darchive`), ` file on the concurrent platform by selecting only the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#build-client-application"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Build client application`)), ` and the appropriate `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#copy-of-client-applications-inside-the-server-application"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `Allow automatic update...`)), ` option.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "displaying-update-notification"
    }
  }, `Displaying update notification`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The client application update notification is carried out automatically following the server application update.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `It works as follows: when a new version of the client/server application is built using the application builder, the new client portion is copied as a compressed file in the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Upgrade4DClient`), ` subfolder of the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `ApplicationName`), ` Server folder (in macOS, these folders are included in the server package). If you have followed the process for generating a cross-platform client application, a .`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `4darchive`), ` update file is available for each platform:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To trigger client application update notifications, simply replace the old version of the server application with the new one and then execute it. The rest of the process is automatic.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `On the client side, when the \u201Cold\u201D client application tries to connect to the updated server application, a dialog box is displayed on the client machine, indicating that a new version is available. The user can either update their version or cancel the dialog box.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the user clicks `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `OK`), `, the new version is downloaded to the client machine over the network. Once the download is complete, the old client application is closed and the new version is launched and connects to the server. The old version of the application is then placed in the machine\u2019s recycle bin.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the user clicks `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Cancel`), `, the update is cancelled; if the old version of the client application is not in the range of versions accepted by the server (please refer to the following paragraph), the application is closed and connection is impossible. Otherwise (by default), the connection is established.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "forcing-automatic-updates"
    }
  }, `Forcing automatic updates`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In some cases, you may want to prevent client applications from being able to cancel the update download. For example, if you used a new version of the 4D Server source application, the new version of the client application must absolutely be installed on each client machine.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To force the update, simply exclude the current version number of client applications (X-1 and earlier) in the version number range compatible with the server application. In this case, the update mechanism will not allow non-updated client applications to connect. For example, if the new version of the client-server application is 6, you can stipulate that any client application with a version number lower than 6 will not be allowed to connect.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#current_version"
    }
  }, `current version number`), ` is set on the Client/Server page of the Build Application dialog box. The intervals of authorized numbers are set in the application project using specific `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#buildapp4dsettings"
    }
  }, `XML keys`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "update-error"
    }
  }, `Update Error`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If 4D cannot carry out the update of the client application, the client machine displays the following error message: "The update of the client application failed. The application is now going to quit."`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `There are many possible causes for this error. When you get this message, it is advisable to check the following parameters first off:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Pathnames`), ` - Check the validity of the pathnames set in the application project via the Application builder dialog box or via XML keys (for example `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `ClientMacFolderToWin`), `). More particularly, check the pathnames to the versions of 4D Volume Desktop.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Read/write privileges`), ` - On the client machine, check that the current user has write access rights for the client application update.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "generated-files-1"
    }
  }, `Generated files`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once a client/server application is built, you will find a new folder in the destination folder named `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Client Server executable`), `. This folder contains two subfolders, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName>Client`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName>Server`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `These folders are not generated if an error occurs. In this case, open the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#log-file"
    }
  }, `log file`), ` in order to find out the cause of the error.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName>Client`), ` folder contains the client portion of the application corresponding to the execution platform of the application builder. This folder must be installed on each client machine. The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName>Server`), ` folder contains the server portion of the application.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The contents of these folders vary depending on the current platform:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Windows`), ` - Each folder contains the application executable file, named `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName>Client.exe`), ` for the client part and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName>Server.exe`), ` for the server part as well as the corresponding .rsr files. The folders also contain various files and folders necessary for the applications to work and customized items that may be in the original 4D Volume Desktop and 4D Server folders.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `macOS`), ` - Each folder contains only the application package, named `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName> Client`), ` for the client part and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName> Server`), ` for the server part. Each package contains all the necessary items for the application to work. Under macOS, launch a package by double-clicking it.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The macOS packages built contain the same items as the Windows subfolders. You can display their contents (`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Control+click`), ` on the icon) in order to be able to modify them.`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you checked the \u201CAllow automatic update of client application\u201D option, an additional subfolder called `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Upgrade4DClient`), ` is added in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `\\<ApplicationName>Server`), ` folder/package. This subfolder contains the client application in macOS and/or Windows format as a compressed file. This file is used during the automatic client application update.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "location-of-web-files-1"
    }
  }, `Location of Web files`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If the server and/or client part of your double-clickable application is used as a Web server, the files and folders required by the server must be installed in specific locations. These items are the following:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `cert.pem`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `key.pem`), ` files (optional): These files are used for TLS connections and by data encryption commands,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Default Web root folder (WebFolder).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Items must be installed:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `on Windows`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Server application`), ` - in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Client Server executable\\/\\<ApplicationName>Server/Server Database`), ` subfolder.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Client application`), ` - in the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Client Server executable\\/\\<ApplicationName>Client`), ` subfolder.`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `on macOS`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Server application`), ` - next to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `\\<ApplicationName>Server`), ` software package.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Client application`), ` - next to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `\\<ApplicationName>Client`), ` software package.`)))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "embedding-a-single-user-client-application"
    }
  }, `Embedding a single-user client application`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D allows you to embed a compiled structure in the Client application. This feature can be used, for example, to provide users with a "portal" application, that gives access to different server applications thanks to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OPEN DATABASE`), ` command executing a `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `.4dlink`), ` file.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To enable this feature, add the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `DatabaseToEmbedInClientWinFolder`), ` and/or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `DatabaseToEmbedInClientMacFolder`), ` keys in the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `buildApp`), ` settings file. When one of these keys is present, the client application building process generates a single-user application: the compiled structure, instead of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `EnginedServer.4Dlink`), ` file, is placed in the "Database" folder.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If a default data folder exists in the single-user application, a licence is embedded.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If no default data folder exists in the single-user application, it will be executed without data file and without licence.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The basic scenario is:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `In the Build application dialog box, select the "Build compiled structure" option to produce a .4DZ or .4DC for the application to be used in single-user mode.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `In the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `buildApp.4DSettings`), ` file of the client-server application, use following xml key(s) to indicate the path to the folder containing the compiled single user application:`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `DatabaseToEmbedInClientWinFolder`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `DatabaseToEmbedInClientMacFolder`))), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 3
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Build the client-server application. This will have following effects:`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the whole folder of the single user application is copied inside the "Database" folder of the merged client`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `EnginedServer.4Dlink`), ` file of the "Database" folder is not generated`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the .4DC, .4DZ, .4DIndy files of the single user application copy are renamed using the name of the merged client`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `PublishName`), ` key is not copied in the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `info.plist`), ` of the merged client`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `if the single-user application does not have a "Default data" folder, the merged client will run with no data.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Automatic update 4D Server features (`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#current-version"
    }
  }, `Current version`), ` number, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET UPDATE FOLDER`), ` command...) work with single-user application as with standard remote application. At connection, the single-user application compares its `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `CurrentVers`), ` key to the 4D Server version range. If outside the range, the updated client application is downloaded from the server and the Updater launches the local update process.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "customizing-client-andor-server-cache-folder-names"
    }
  }, `Customizing client and/or server cache folder names`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Client and server cache folders are used to store shared elements such as resources or components. They are required to manage exchanges between server and remote clients. Client/server applications use default pathnames for both client and server system cache folders.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In some specific cases, you might need to customize the names of these folders to implement specific architectures (see below). 4D provides you with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ClientServerSystemFolderName`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ServerStructureFolderName`), ` keys to be set in the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `buildApp`), ` settings file.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "client-cache-folder"
    }
  }, `Client cache folder`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Customizing the client-side cache folder name can be useful when your client application is used to connect to several merged servers which are similar but use different data sets. In this case, to save multiple unnecessary downloads of identical local resources, you can use the same custom local cache folder.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Default configuration (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `for each connection to a server, a specific cache folder is downloaded/updated`), `):`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(56164)/* ["default"] */ .Z),
    width: "431",
    height: "306"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `ClientServerSystemFolderName`), ` key (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `a single cache folder is used for all servers`), `):`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(38706)/* ["default"] */ .Z),
    width: "421",
    height: "292"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "server-cache-folder"
    }
  }, `Server cache folder`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Customizing the server-side cache folder name is useful when you run several identical server applications built with different 4D versions on the same computer. If you want each server to use its own set of resources, you need to customize the server cache folder.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Default configuration (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `same server applications share the same cache folder`), `):`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(91364)/* ["default"] */ .Z),
    width: "365",
    height: "250"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `ServerStructureFolderName`), ` key (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `a dedicated cache folder is used for each server application`), `):`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(3432)/* ["default"] */ .Z),
    width: "374",
    height: "227"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "plugins--components-page"
    }
  }, `Plugins & components page`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `On this tab, you set each `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/Concepts/plug-ins"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `plug-in`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/next/Concepts/components"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `component`)), `, and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#deselecting-modules"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `module`)), ` that you will use in your stand-alone or client/server application.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The page lists the elements loaded by the current 4D application:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(88233)/* ["default"] */ .Z),
    width: "843",
    height: "662"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Active`), ` column - Indicates that the items will be integrated into the application package built. All the items are checked by default. To exclude a plug-in, a component, or a module, deselect the check box next to it.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Plugins and components`), ` column - Displays the name of the plug-in/component/module.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `ID`), ` column - Displays the element's identification number (if any).`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Type`), ` column - Indicates the type of item: Plug-in, Component, or Module.`))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "adding-plug-ins-or-components"
    }
  }, `Adding plug-ins or components`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you want to integrate other plug-ins or components into the executable application, you just need to place them in a `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `PlugIns`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Components`), ` folder next to the 4D Volume Desktop application or next to the 4D Server application. The mechanism for copying the contents of the source application folder (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#customizing-4d-volume-desktop-folder"
    }
  }, `Customizing the 4D Volume Desktop folder`), `) can be used to integrate any type of file into the executable application.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If there is a conflict between two different versions of the same plug-in (one loaded by 4D and the other located in the source application folder), priority goes to the plug-in installed in the 4D Volume Desktop/4D Server folder. However, if there are two instances of the same component, the application will not open.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The use of plug-ins and/or components in a deployment version may require license numbers.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "deselecting-modules"
    }
  }, `Deselecting modules`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A module is a built-in code library used by 4D to control specific features. If you know that your built application does not use any of the features covered by a module, you can deselect it in the list to reduce the size of your application files.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Warning:`), ` Deselecting a module could prevent your built application from working as expected. If you are not 100% certain that a module is never called by your application, it is recommended to keep it selected.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following optional modules can be deselected:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `CEF`), `: Chromium embedded library. It is necessary to run `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/next/FormObjects/webAreaOverview"
    }
  }, `Web areas`), ` that use the embedded rendering engine and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/next/FormObjects/viewProAreaOverview"
    }
  }, `4D View Pro areas`), `. Calling such areas when CEF is deselected will display blank areas and/or generate errors.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `MeCab`), `: Library used for text indexing in Japanese language (see this `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/next/settings/database#support-of-mecab-japanese-version"
    }
  }, `settings paragraph`), `). Deselecting this module will force text indexes to be rebuilt in Japanese language.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If you deselect MeCab for an application in Japanese language used on heterogeneous platforms, make sure to deselect it on both client/server build and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#build-client-application"
    }
  }, `client application build`), ` (for the concurrent platform), otherwise major malfunctions will occur in the application.`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `PHP`), `: Necessary to use PHP features and commands in 4D (see this `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/next/settings/php"
    }
  }, `settings paragraph`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `SpellChecker`), `: Used for built-in `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/next/FormObjects/propertiesEntry#auto-spellcheck"
    }
  }, `spellchecking features`), ` and commands available for input areas and 4D Write Pro areas.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `4D Updater`), `: Controls the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#what-is-a-clientserver-application"
    }
  }, `automatic update`), ` of client parts and is used by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `SET UPDATE FOLDER`), ` command for `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#automatic-updating-of-server-or-single-user-applications"
    }
  }, `automated server updates`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "licenses--certificate-page"
    }
  }, `Licenses & Certificate page`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Licences & Certificate page can be used to:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `designate the license number(s) that you want to integrate into your single-user stand-alone application`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `sign the application by means of a certificate in macOS.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(379)/* ["default"] */ .Z),
    width: "952",
    height: "734"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "licenses"
    }
  }, `Licenses`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This tab displays the list of available deployment licenses that you can integrate into your application. By default, the list is empty. You must explicitly add your `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `4D Developer Professional`), ` license as well as each `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `4D Desktop Volume`), ` license to be used in the application built. You can add another 4D Developer Professional number and its associated licenses other than the one currently being used.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To remove or add a license, use the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `[+]`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `[-]`), ` buttons at the bottom of the window.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you click on the `, `[`, `+] button, an open file dialog box appears displaying by default the contents of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Licenses`), ` folder of your machine. For more information about the location of this folder, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html"
    }
  }, `Get 4D folder`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You must designate the files that contain your Developer license as well as those containing your deployment licenses. These files were generated or updated when the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `4D Developer Professional`), ` license and the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `4D Desktop Volume`), ` licenses were purchased.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Once you have selected a file, the list will indicate the characteristics of the license that it contains.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `License #`), ` - Product license number`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `License`), ` - Name of the product`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Expiration date`), ` - Expiration date of the license (if any)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Path`), ` -  Location on disk`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If a license is not valid, a message will warn you.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can designate as many valid files as you want. When building an executable application, 4D will use the most appropriate license available.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Dedicated "R" licenses are required to build applications based upon "R-release" versions (license numbers for "R" products start with "R-4DDP").`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `After the application is built, a new deployment license file is automatically included in the Licenses folder next to the executable application (Windows) or in the package (macOS).`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "os-x-signing-certificate"
    }
  }, `OS X signing certificate`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The application builder can sign merged 4D applications under macOS (single-user applications, components, 4D Server and client parts under macOS). Signing an application authorizes it to be executed using the Gatekeeper functionality of macOS when the "Mac App Store and identified Developers" option is selected (see "About Gatekeeper" below).`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Check the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Sign application`), ` option to include certification in the application builder procedure for OS X. 4D will check the availability of elements required for certification when the build occurs:`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(4535)/* ["default"] */ .Z),
    width: "787",
    height: "138"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This option is displayed under both Windows and macOS, but it is only taken into account for macOS versions.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Name of certificate`), ` - Enter the name of your developer certificate validated by Apple in this entry area. The certificate name is usually the name of the certificate in the Keychain Access utility (part in red in the following example):`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(77301)/* ["default"] */ .Z),
    width: "1187",
    height: "846"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To obtain a developer certificate from Apple, Inc., you can use the commands of the Keychain Access menu or go here: `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html"
    }
  }, `http://developer.apple.com/library/mac/#documentation/Security/Conceptual/CodeSigningGuide/Procedures/Procedures.html`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This certificate requires the presence of the Apple codesign utility, which is provided by default and usually located in the \u201C/usr/bin/\u201D folder. If an error occurs, make sure that this utility is present on your disk.`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Generate self-signed certificate`), ` - runs the "Certificate Assistant" that allows you to generate a self-signed certificate. If you do not have an Apple developer certificate, you need to provide a self-signed certificate. With this certificate, no alert message is displayed if the application is deployed internally. If the application is deployed externally (i.e. through http or email), at launch macOS displays an alert message that the application's developer is unidentified. The user can "force" the opening of the application. In the "Certificate Assistant", be sure to select the appropriate options:
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(62634)/* ["default"] */ .Z),
    width: "583",
    height: "439"
  }), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(97707)/* ["default"] */ .Z),
    width: "583",
    height: "439"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `4D recommends to subscribe to the Apple Developer Program to get access to Developer Certificates that are necessary to notarize applications (see below).`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "about-gatekeeper"
    }
  }, `About Gatekeeper`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Gatekeeper is a security feature of OS X that controls the execution of applications downloaded from the Internet. If a downloaded application does not come from the Apple Store or is not signed, it is rejected and cannot be launched.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `On Apple Silicon machines, 4D `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#components"
    }
  }, `components`), ` need to be actually signed. An unsigned component will generate an error at application startup ("lib4d-arm64.dylib can't be opened...").`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Sign application`), ` option of the 4D application builder lets you generate applications and components that are compatible with this option by default.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "about-notarization"
    }
  }, `About Notarization`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Application notarization is highly recommended by Apple as of macOS 10.14.5 (Mojave) and 10.15 (Catalina), since non-notarized applications deployed via the internet are blocked by default.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#os-x-signing-certificate"
    }
  }, `built-in signing features`), ` have been adapted to meet all of Apple's requirements to allow using the Apple notary service. The notarization itself must be conducted by the developer and is independent from 4D (note also that it requires installing Xcode). Please refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://blog.4d.com/how-to-notarize-your-merged-4d-application/"
    }
  }, `this 4D blog post`), ` that provides a step-by-step description of the notarization process.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information on the notarization concept, please refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://developer.apple.com/documentation/xcode/notarizing_your_app_before_distribution/customizing_the_notarization_workflow"
    }
  }, `this page on the Apple developer website`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "customizing-application-icons"
    }
  }, `Customizing application icons`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D associates a default icon with stand-alone, server, and client applications, however you can customize the icon for each application.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `macOs`), ` - When building a double-clickable application, 4D handles the customizing of the icon. In order to do this, you must create an icon file (icns type), prior to building the application file, and place it next to the project folder.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Apple, Inc. provides a specific tool for building `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `icns`), ` icon files (for more information, please refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Optimizing/Optimizing.html#//apple_ref/doc/uid/TP40012302-CH7-SW2"
    }
  }, `Apple documentation`), `).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Your icon file must have the same name as the project file and include the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `.icns`), ` extension. 4D automatically takes this file into account when building the double-clickable application (the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `.icns`), ` file is renamed `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `ApplicationName.icns`), ` and copied into the Resources folder; the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `CFBundleFileIcon`), ` entry of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `info.plist`), ` file is updated).`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Windows`), ` - When building a double-clickable application, 4D handles the customizing of its icon. In order to do this, you must create an icon file (`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `.ico`), ` extension), prior to building the application file, and place it next to the project folder.`), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Your icon file must have the same name as the project file and include the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `.ico`), ` extension. 4D automatically takes this file into account when building the double-clickable application.`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also set specific `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/4D-XML-Keys-BuildApplication.100-4465602.en.html"
    }
  }, `XML keys`), ` in the buildApp.4DSettings file to designate each icon to use. The following keys are available:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `RuntimeVLIconWinPath`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `RuntimeVLIconMacPath`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `ServerIconWinPath`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `ServerIconMacPath`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `ClientMacIconForMacPath`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `ClientWinIconForMacPath`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `ClientMacIconForWinPath`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `ClientWinIconForWinPath`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "management-of-data-files"
    }
  }, `Management of data file(s)`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "opening-the-data-file"
    }
  }, `Opening the data file`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When a user launches a merged application or an update (single-user or client/server applications), 4D tries to select a valid data file. Several locations are examined by the application successively.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The opening sequence for launching a merged application is:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `4D tries to open the last data file opened, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#last-data-file-opened"
    }
  }, `as described below`), ` (not applicable during initial launch).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `If not found, 4D tries to open the data file in a default data folder next to the .4DZ file in read-only mode.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `If not found, 4D tries to open the standard default data file (same name and same location as the .4DZ file).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `If not found, 4D displays a standard "Open data file" dialog box.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "last-data-file-opened"
    }
  }, `Last data file opened`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "path-of-last-data-file"
    }
  }, `Path of last data file`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Any standalone or server applications built with 4D stores the path of the last data file opened in the application's user preferences folder.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The location of the application's user preferences folder corresponds to the path returned by the following statement:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `userPrefs:=Get 4D folder(Active 4D Folder)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The data file path is stored in a dedicated file, named `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `lastDataPath.xml`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Thanks to this architecture, when you provide an update of your application, the local user data file (last data file used) is opened automatically at first launch.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This mechanism is usually suitable for standard deployments. However, for specific needs, for example if you duplicate your merged applications, you might want to change the way that the data file is linked to the application (described below).`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "configuring-the-data-linking-mode"
    }
  }, `Configuring the data linking mode`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `With your compiled applications, 4D automatically uses the last data file opened. By default, the path of the data file is stored in the application's user preferences folder and is linked to the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `application name`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This may be unsuitable if you want to duplicate a merged application intended to use different data files. Duplicated applications actually share the application's user preferences folder and thus, always use the same data file -- even if the data file is renamed, because the last file used for the application is opened.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D therefore lets you link the data file path to the application path. In this case, the data file will be linked using a specific path and will not just be the last file opened. You therefore link your data `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `by application path`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This mode allows you to duplicate your merged applications without breaking the link to the data file. However, with this option, if the application package is moved on the disk, the user will be prompted for a data file, since the application path will no longer match the "executablePath" attribute (after a user has selected a data file, the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `lastDataPath.xml`), ` file is updated accordingly).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Duplication when data linked by application name:`), `
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(20933)/* ["default"] */ .Z),
    width: "305",
    height: "208"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `Duplication when data linked by application path:`), `
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(74794)/* ["default"] */ .Z),
    width: "305",
    height: "189"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can select the data linking mode during the build application process. You can either:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#application"
    }
  }, `Application page`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#client-server"
    }
  }, `Client/Server page`), ` of the Build Application dialog box.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Use the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `LastDataPathLookup`), ` XML key (single-user application or server application).`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "defining-a-default-data-folder"
    }
  }, `Defining a default data folder`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D allows you to define a default data file at the application building stage. When the application is launched for the first time, if no local data file is found (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#opening-the-data-file"
    }
  }, `opening sequence described above`), `), the default data file is automatically opened silently in read-only mode by 4D. This gives you better control over data file creation and/or opening when launching a merged application for the first time.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `More specifically, the following cases are covered:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Avoiding the display of the 4D "Open Data File" dialog box when launching a new or updated merged application. You can detect, for example at startup, that the default data file has been opened and thus execute your own code and/or dialogs to create or select a local data file.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Allowing the distribution of merged applications with read-only data (for demo applications, for instance).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To define and use a default data file:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You provide a default data file (named "Default.4DD") and store it in a default folder (named "Default Data") inside the application project folder. This file must be provided along with all other necessary files, depending on the project configuration: index (.4DIndx), external Blobs, journal, etc. It is your responsibility to provide a valid default data file. Note however that since a default data file is opened in read-only mode, it is recommended to uncheck the "Use Log File" option in the original structure file before creating the data file.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When the application is built, the default data folder is integrated into the merged application. All files within this default data folder are also embedded.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following graphic illustrates this feature:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(8378)/* ["default"] */ .Z),
    width: "686",
    height: "386"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the default data file is detected at first launch, it is silently opened in read-only mode, thus allowing you to execute any custom operations that do not modify the data file itself.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "management-of-client-connections"
    }
  }, `Management of client connection(s)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The management of connections by client applications covers the mechanisms by which a merged client application connects to the target server, once it is in its production environment.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "connection-scenario"
    }
  }, `Connection scenario`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The connection procedure for merged client applications supports cases where the dedicated server is not available. The startup scenario for a 4D client application is the following:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `If valid connection information is stored in the "EnginedServer.4DLink" file within the client application, the client application connects to the specified server address.`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "p"
  }), `
`, `OR`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "p"
  }), `
`, `The client application tries to connect to the server using the discovery service (based upon the server name, broadcasted on the same subnet).`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `If this fails, the client application tries to connect to the server using information stored in the application's user preferences folder ("lastServer.xml" file, see last step).`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `If this fails, the client application displays a connection error dialog box.`))), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the user clicks on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Select...`), ` button (when allowed by the 4D developer at the build step, see below), the standard "Server connection" dialog box is displayed.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `If the user clicks on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Quit`), ` button, the client application quits.`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 4
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `If the connection is successful, the client application saves this connection information in the application's user preferences folder for future use.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The whole procedure is described in the following diagram:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(56225)/* ["default"] */ .Z),
    width: "1484",
    height: "2113"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "storing-the-last-server-path"
    }
  }, `Storing the last server path`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The last used and validated server path is automatically saved in a file named "lastServer.xml" in the application's user preferences folder. This folder is stored at the following location:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `userPrefs:=Get 4D folder(Active 4D Folder)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This mechanism addresses the case where the primary targeted server is temporary unavailable for some reason (maintenance mode for example). When this case occurs for the first time, the server selection dialog box is displayed (if allowed, see below) and the user can manually select an alternate server, whose path is then saved if the connection is successful. Any subsequent unavailability would be handled automatically through the "lastServer.xml" path information.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When client applications cannot permanently benefit from the discovery service, for example because of the network configuration, it is recommended that the developer provide a host name at build time using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/IPAddress.300-4465710.en.html"
    }
  }, `IPAddress`), ` key in the "BuildApp.4DSettings" file. The mechanism addresses cases of temporary unavailability.  `), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Pressing the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Alt/Option`), ` key at startup to display the server selection dialog box is still supported in all cases.`))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "availability-of-the-server-selection-dialog-box-in-case-of-error"
    }
  }, `Availability of the server selection dialog box in case of error`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can choose whether or not to display the standard server selection dialog box on merged client applications when the server cannot be reached. The configuration depends on the value of the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/ServerSelectionAllowed.300-4465714.en.html"
    }
  }, `ServerSelectionAllowed`), ` XML key on the machine where the application was built:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Display of an error message with no access possible to the server selection dialog box`), `. Default operation. The application can only quit.`, /* @__PURE__ */ (0, import_react2.mdx)("br", {
    parentName: "p"
  }), `
`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ServerSelectionAllowed`), `: `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `False`), ` or key omitted
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(89470)/* ["default"] */ .Z),
    width: "517",
    height: "284"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Display of an error message with access to the server selection dialog box possible`), `. The user can access the server selection window by clicking on the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Select...`), ` button.
`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ServerSelectionAllowed`), `: `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `True`), `
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(77366)/* ["default"] */ .Z),
    width: "526",
    height: "248"
  }), `
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(57625)/* ["default"] */ .Z),
    width: "466",
    height: "488"
  })))), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "automatic-updating-of-server-or-single-user-applications"
    }
  }, `Automatic updating of server or single-user applications`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In principle, updating server applications or merged single-user applications require user intervention (or programming custom system routines): whenever a new version of the merged application is available, you have to exit the application in production and manually replace the old files with the new ones; then restart the application and select the current data file.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can automate this procedure to a large extent using the following language commands: `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page1291.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `SET UPDATE FOLDER`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page1292.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `RESTART 4D`)), `, and also `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page1301.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Get last update log path`)), ` for monitoring operations. The idea is to implement a function in your 4D application triggering the automatic update sequence described below. It can be a menu command or a process running in the background and checking at regular intervals for the presence of an archive on a server.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `You also have XML keys to elevate installation privileges so that you can use protected files under Windows (see the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19/4D/19/4D-XML-Keys-BuildApplication.100-5447429.en.html"
    }
  }, `4D XML Keys BuildApplication`), ` manual).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here is the scenario for updating a server or merged single-user application:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `You transfer, for example using an HTTP server, the new version of the server application or the merged single-user application onto the machine in production.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `In the application in production, you call the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `SET UPDATE FOLDER`), ` command: this command designates the location of the folder where the "pending" update of the current application is found. Optionally, you can copy in this folder the custom elements of the version in production (user files).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `In the application in production, call the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `RESTART 4D`), ` command: this command automatically triggers execution of a utility program named "updater" that exits the current application, replaces it using the "pending" update if one is specified, and restarts the application with the current data file. The former version is renamed.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This sequence is compatible with Windows server applications run as a Service.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "update-log"
    }
  }, `Update log`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The installation procedure produces a log file detailing the update operations of merged applications (client, server or single-user) on the target machines. This file is useful for analyzing any errors that occur during the installation process.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The update log is named `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `YYYY-MM-DD_HH-MM-SS_log_X.txt`), `, for example, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `2021-08-25_14-23-00_log_1.txt`), ` for a file created on August 25, 2021 at 14:23.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This file is created in the "Updater" application folder, within the system user folder. You can find out the location of this file at any time using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page1301.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Get last update log path`)), ` command.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 62634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Cert1-07c488457ef1c405333d49f96dea766b.png");

/***/ }),

/***/ 97707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Cert2-a4ba1e5a772ed11634b5b54db813c7e2.png");

/***/ }),

/***/ 379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/buildappCertif-caab658621c64e523293c83ad6ecb3d5.png");

/***/ }),

/***/ 4535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 91364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 3432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXYAAADjCAYAAACRgj8hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAIc9JREFUeF7tnf2zXVV9xpn+K4x/gHXG3xynnWnjWKv4AkMBAWmlBCuC+EISAnQAxyAQBcQSkhCIJEFC1DYOMx1nGsQO/mCrE2qZgmHQIiAmanhtILC7nnXPQ75ZWXvvc+/dZ+/18nxmnjn7Ze2Xe77f/dn7niQnpzVCCCGKQmIXQojCkNiFEKIwJHYhhCgMiV0IIQpDYhdCiMKQ2IUQojAkdlEVx948PpsSpaIaS+zvcPytt3xEufzqt39ozrruvubg0y/MlojS8DW+dmf1NZbYHRD61dse9pHcy8Rf8Nfc3ey468PNxzdskdwLBDU+c8O25ltfvrj52FVbq65x9WKn1M/edJPPlHJfu3Ztc9pppzWPPvrobIkYAkr9wK73NM2B05qD+94luRcGpb5/3SeaIxvf3fx4wwerlnvVYrdS/9zeD/hMJXcIfffu3RL7wIRSZ6aUO+qLOjOq9+oIpc5MKfdDhw6dVONNmzbN1oxDtWIPpX75Q2t8FiV3SPv000+fzS2xZs0av9yiC3042qQ+tdxtH/BmLlZGm9Snljt+++Z1zBs5ZD8WVXZUm9QXLXcrbd7RQyT2YeiTOrMIubO29kLGExsu9pDYWDEffVJnFiV33KDtgxmu2/DhjYx9Xbvuros+qTOU+7qt+weTOy5s/kqGhsATe4jEvnrmlTpDuWO7oUBt7a/fuOBjdcUy1Fwsj3mlzlDuQ9YY9bXXsL2+LbHf1hdNVR0FQUPUZ371K51SZzAGY6+483vNa//3xmwvK8cWOPYxDJDYV8eS1LfOLXUG43EzGOrCtzfutt/OQHgDEP0sSX373FJnMB7bDVXjsK7hzRvrmLF/I4t3W4EsV+o2526+plm7+aFB5M4i24awYLnEvjK81K/d3hzY/d6ovPvi5X7tME91rDFeIe7YxzDhE5/ox9d4445m//qzovLuC7bD9kPJHTLHTRzXbNtTOXsh9iC3KFxHl89qpM4MJXdc4GiAtgtaYl8Zq5U6g+2xnyEufP5WhtewppB6mwhEnNVKnRlS7rxp4xVpA2NiN/dF4bq5bIaQOjOE3HGhh3dv3tHDYLnoZyipM0PJHTWGvFFLi6S+fIaSOjOU3Hntop725h3WF2P0xD4QQ0qdGfJjGbF6hpY6M4TcedGHT2pYFqbraa92hpY6M5TcIfFQ5KjnlPV1XVwmi5A6I7mnwYt/eGUhUmeGenIXK8fXeAFSZ4aSe2q4Di4PCBd/k2URUmck92k58tJrzQU33NP8844/j0p5qEju04Ean3/dfc3udedHpTxUSpS7696ygGghXIh3UVJnJPdpoNT3bl8TlfHQkdzHh1K/b91FURkPndLk7jq3HKzUYyJeRCT3cRlb6ozkPh5jS50pSe6ua8tgCqkz59y6sbn41gck9wUzldQZyX3xTCV1phS5u47NHwj1ks17J5E6c/bN6yX3BTK11BnJfXFMLXWmBLm7bs0biBRChVhjwh0zkvtiSEXqDOX+/JGXZ2coVksqUmco91xr7Do1X1KSOkO5o1HF6klN6sz+e9/vz0t1Xj2pSZ15YN15/rxyrLHr0jxJUerM+bdd2Zxzwy5d9KskVakzOC/JfXWkKnUG55Wj3F2H5kfKUmcuvPPzkvsqWJL6jmSlzkjuK8dL/R/TlTrj5e7OM6cau+7MixykzkjuK8NL/cadzd4dH4rKNLVI7svH1/j6+5udV18clWlqwXnifHOpsevMfMhJ6ozkvjxykzojuc9PblJncpK768o8yFHqjOQ+H7lKnZHc+8lV6kwucncdmT54E3OVOiO5d4Mb92Wb3QV/98ei0swlXu7u5qQ6nwpq/Nmv7Wm2rL80Ks1ckoPcXTemDd48CPGTt30xKsyc8snbL2vOvl4XfQilfscd50VlmVvwG4fkfjKU+s1XXRGVZW5JXe6uE9OFUsfTbkyUOUZyP5nSpM5I7icoTepMynJ3XZgmeLP+5vpvFyV1RnJfolSpM5J7uVJnUpW768D0wJsE8UGAMTGWkNrlXrrUmZrlXrrUmRTl7rovLWqQOlOr3GuROlOj3GuROpOa3F3npUNNUmcod/wXYDVQm9SZXVs/0nzmlvv9z186tUmd2bb+kubSTXuSqLHrujSoUerM+d+8tPnoNfcW/1WwtUqdwc+Nn79kudcqdQY/N37+qWvsOm56apY6c9GWTxct99qlzpQs99qlzqQgd9dt0yKpn0ipcpfUT06JcpfUT87UcnedNh2S+qmB3M+4ppz/VHdJ6rsk9SAlyX1J6g9I6kGW5D7Nf7zjumwaJPX2XHjX3zYf2Zj/f7/mpf717zR33HlRVG7Lys/eN9vrDMzHxmWUEuTua3zr3uaWq78Yldty8+avD8723Pjp2JicgvcF78/YNXYdNj74GyBDSv3x5x6b7dnt++Vno2NyS+5yP/7WW82X73xoGKkjbxxummdvX5qG1I+6modjMkzOckeNv3THdweT+us/2dO8/eof35mH2I9uTfu72ufJFHJ33TUuEBU+Rz7/m5+JCm252ffzO/1+OQ/JY5kdk2tylTsu+Ou2fa+57pYrmuP/9idRoS074KnL4uuw3GKf5sHh7y+9vvbkUjDP9fxNgPNYT+zNA9tgHjcY0HYuK0iOckeNr93yL82Gddc2L27806jQlptjTxxojh/+VXQdAukTjOVy3AAwT15/bJd/tdtyDKZxA7FwDG4igPsa8jeGseXuOms8IKgzNt7jP0eOiWwl+dEvv9+8cuxodB2CJ3jyzJEn3lmOGwDmsS145Knv+tfbHrnylDGY5g2E2HGAvzUM/RtDbnJfiNQRSBWEH8FQzBQtnuohX64Hdj5cT2FjGq8QO9fZ3xJ4c+D8wMlJ7ouQOkKxxoQK4dvl4NUf3OSnsdzOI7gJQOB2PPaPMZzGcnsz4fG7bi6ryZhyd101DhATBAVRxQS2moCYUCFluxwSx40A0xQx5xGMxXI7HkKHxAF/EwhvJqDr5rLa5CL3hUmdoVwBBQ/RWhkjdj0In64B12Nbyhoit2Ot9DEdHmfg5CD3RUndhoQip4wRrOMTOKbtWATruAwy50c8djlCmdtpe5yhM5bcXUctnkVKneGTdyhy+7GMfQLHdHgzgLC5jDIPlzOAT+1g0R//pC73hUvdhoK30yFdYoegsR2f9rk8xohiR5bkvjtJuY8hdRsAEVO4IV1i55M519uxMbBuDLEjY8jdddNiGUPqNpA55R2jS+yUOV7Dm0CMMcWOpCr3UaXOAIg59sRuA0Kxcxu8UtxI+MRuM5LYEfyBM/42UUpyH1vqiH26Bm3CjYkdwVM6n9a5bfjEbjOW2JFFy9110uIYW+qIfboOn9htYmJHsIz7sB+9xMYyYAyxI6nJfRSpQ7ZWqhAywDSfuvmEHgbEZA3sZ+gIJG9FbzOi2BHI/Qt3POjf36kZS+r4bDv8nJxP2ljH6TBtYsd47IMfwyD2ST7MmGJHIPcrv/HQQmrsumgxjCV1PFVDvJyHgPmkjVdOh2kTO/bFj3W4zD7J27EMGEvsCOV+8OkX/LGnYhSpMxCuxYoc4rbYPxwFMbFD0qBtOaH4RxY7gvcV7++Uch9L6gjFSkJZQ9AW3gTaxE6JhzeE8G/FhH94OpbYEbyveH+HrrHroOEZ+0ndEsoa8xbeBNrETomHNwSI2wL5cx0YU+zIp+85t/nQ+q2TyX1UqVcavK9Tyn1MqdcavK+LkLvroGGZ4uOXWjOV3CX18TKV3CX18bIIubvuGQ5JffyMLXdJffyMLXdJffwMLXfXOcMgqU+XseQuqU+XseQuqU+XIeXuumb1SOrTZ9Fyl9Snz6LlLqlPn6Hk7jpmdRx783jz8et2Nn+z+YqocJTxct7tn20+vOEeX5OhkdjTCP4a5BW3L+avQUrsaQR/DfLyr6/ur0G6blk9eEr86/Xb/FNjTDjK4jPGxzGS+7QZ4x8uSe7TZqh/uOQ6Zhgk9+ky1mfsQHKfJmP+a1TJfZoM+a9RXdcMh+Q+fsaUOslS7vwXqm3/sjThTPEVA7nKHf/YCMTWpZyhv2LAdc6w5Ch3fhfM2P/IaLWZQuokO7nzX46C2PpEM4XUSW5y578chdztV/amnqGlDlz3DE9ucse/IrVfRZBDppQ6sXKPSSmpQOr8zhn7/TAJZ0qpEyv3mJRSCmSOrxbAK78mIPUsQurAddBioNw/teWiqJhSCb5CAGLnVwnExqQWSB3v7ZRSJ7jw8WVVkFBMTkmEH8NgeoLvfFlJUpA6QY3xZVWQUExOqYRP6lN858tKsiipA9dFiyOHv9+Oj2H4pA7B2y8USzEpSZ2gMSGhZOUOmfOz9b5vg0wgS9/JvisJqRNfYyehVOVOmXMekm/7NsgUskipA9dJiyV1uUPm/Gy97YvBUkmKUidJyz38el7MQ/Z2TCJJ+X9RSlnukLj9+IVf2WvHpJJFSx24blo8qcqd39gYzrd9Pe+USVnqJEm5h1/pSxL8OCaH/xovVbmHX+lLUvs4ZgypA9dR45Ci3PERTIzUPo7JQeokObnjI5hQ4pR9Qh/H5CB1kprc+b3rocQh+5Q+jhlL6sB11XikJncQShyyT+njmJykTpKSe9t/dwfZJ/JxTE5SJynJHfKO/Ucb+IPUVD6OGVPqwHXWuFDuF235dFRkYwUfu9j/LIPh345J4eMY/I2i3KRO/IW/eY+XVkxmylIe2P7h5pKvfTsrqRNf41u+09x81RVRmSlL2bHhkubvN+0Ztcauu8YHcv/oNfdOLveUg99qcAN8+rnfz961/FiS+/2Se0v27vhQc8GNO5sjL702e8fyAzX+7Nf2SO4t2Xn1xc0F198/eo1dh02D5N4eSh3vUe5I7vGUIHUiucczldSB67LpkNxPTUlSJ5L7ySlJ6kRyPzlTSh24TpsWyf1E8B6UJnUiuS+lRKkTyX0pU0sduG6bHsl9Sep4D0qUOqld7iVLndQu9xSkDlzHpQHlfsG31kbFV3JqkDrBhf+ZW+5vdm39SFR+paYGqRPU+NJNe5pt6y+Jyq/UpCJ14LouHZ4/8nJz9vU7m0/efllUgCWmJqkTND4kB9nFJFhaapI68TV2koPsYhIsLSlJHbjOSwu8MbXIvUapk1rkXqPUSS1yT03qwHVfetQg95qlTkqX+97ta5oLbthRpdRJ6XJPUerAdWCalCx3Sf0Epcp9Ser3VC11UqrcU5U6cF2YLiXKXVI/ldLkLqmfSmlyT1nqwHVi2pQkd/yNH0k9zjtyd1KMyTKXPLzzfZJ6C5T7fevS/p+N+vLg+nOTljpw3Zg+eAPPuWFXc+Gdn48KM4fgxoQb1LO/Ozr7qUSIv/CdFHOV+4Hd723Ouna7atwBanz+dfdlK/f9689qztq4I/kau47Mg5zlTqmnfIdPhVzlTqnrt7F+cpU7pZ5DjV1X5kOOcse5SurLIze5S+rLJze55yR14DozL3KSO84R5yqpL59c5C6pr5xc5J6b1IHrzvzIQe6S+upJXe6S+upJXe45Sh24Ds0Tyv2CO9L7j6cl9eGg3Pff+/6oXKeKpD4clPsD686LynWq5Cp14Lo0X9AQf3fzA83ZN6+PCnaKSOrDg+8QgkQh05hkx46kPjy+xk6ikGlMsmMnZ6kD16l5g2+Su/jWNOQuqS8OXGApyF1SXxy+xgnIPXepA9et+ZOC3CX1xTO13CX1xTO13EuQOnAdWwZTyl1SH4+p5C6pj8dUci9F6sB1bTlMIXdJfXzGlvuBXe9pzrpmq6Q+ImPLvSSpA9e5ZTGm3PE3ciT1aRhL7o/ufreT+t2S+gSMJfeH159ZlNSB697ygNwv2fxgc+7ma6JCHiK4cXzqpt2S+oT4C99JF0/UMSmvNgf3vav5+IYtzdPP/X52RDE2qPGZG7Y1+9d9Iirl1ebHGz7YfGzdtuJq7Dq4TCD3tZsfWojcsU/8VoBjiGlZlNwp9YNPvzA7kpiKRcndS/2qrUXW2HVxuSxC7tgX9impp8PQcpfU02NouZcsdeA6uWyGlLukni5DyV1ST5eh5F661IHr5vIZQu6SevqsVu6SevqsVu41SB24jq6D1chdUs+HlcpdUs+Hlcq9FqkD19X1ADFfdvu+5qyv3tB8bu8HohIPI6nnBy58L2kn65jEw0jq+YEaQ9KQdUziYWqSOnCdXRfH33qrWbd1f3PmV7/SK3dJPV9wAc8jd0k9X1CzeeRem9SB6+76mEfuknr+9MldUs+fPrnXKHVQpdhBl9wl9XJok7ukXg5tcq9V6qBasQPK/Ywbb3xH7pJ6eYRyl9TLI5R7zVIHVYsdQO5/dd0e/+QuqZcL5b53+180H/zSP0nqBUK533fVhVVLHVQvdnDu3f/ln9z/4bZ9knrBeLlfvaM587afzJaI0kCN//IL26u/cUvsjnPv/oV/ckdE2Rx787ivtyiXc7Y8PpuqF4ndoQu9LlTvslF9JXaPGqEuVO+yUX0ldo8aoS5U77JRfSV2jxqhLlTvslF9JXaPGqEuVO+yUX0ldo8aoS5U77JRfSV2jxqhLlTvslF9JXaPGqEuVO+yQX1ffKnuf2gosTt0odeF6l02l+95svnv516ZzdWJxO7QhV4XqnfZ3LD/GYl99lo1utDrQvUuG4ldYvfoQq8L1btsJHaJ3aMLvS5U77KR2CV2jy70ulC9y0Zil9g9utDrQvUuG4ldYvfoQq8L1btsJHaJ3aMLvS5U77KR2CV2jy70ulC9y0Zil9g9utDrQvUuG4ldYvfoQq8L1btsJHaJ3aMLvS5U77KR2CV2jy70ulC9y0Zil9g9utDrQvUuG4ldYvfoQq8L1btsJHaJ3aMLvS5U77KR2CV2jy70ulC9y0Zil9g9utDrQvUuG4ldYvfoQq8L1btsJHaJ3aMLvS5U77KR2CV2jy70ulC9y0Zil9g9utDrQvUuG4ldYvfoQq8L1btMXjh6zAt9/b5DzcOPH/HTbxx/e7a2LqoW+4M//a2/u+NCx+vOx56frRElsuPfn28u3/Okrzde73rkN7M1ogQgctSWgeBrpWqxh43w02demq0RJfLM4ddPqnftv66XCB/Uar+eq/8oho1Q8929Jm7911/7eqPuojz4sFb79Vy92NkIelqvAz6162m9XHDTrv167hX7n12xtficsemH0eUlZV5i2yr5pYvYeCW/dDGX2C9/aI2ScfqawOLHHnBtoWSbvnpj/ZGN71YyTl+NXSd0gx3EZKHkk74msPixEVko+aSv3lgfk4WST/pq7DqhG+wgJgsln/Q1gcWPjchCySd99cb6mCyUfNJXY9cJ3WAHMVko+aSvCSx+bEQWSj7pqzfWx2Sh5JO+GrtO6AY7iMlCOZEf/fL7zSvHjkbXpZC+JrD4sRFZKCZPXbb0ZsXWJZC+emN9TBbKibz96h+b13+yJ7ouhfTV2HVCN9hBTBZh9v38ztkWSzz+3GPRcfPktkeu9PvAa2z9EBnyfMcUO8/7mSNPRNfH0tcEFj82IotT8rP3zbaYcfSx+Lh5AyDM2LohMuT5jiV2HofM+f701RvrY7IIc/zwr2ZbLBEbM2/e/PVBn9i6oTLk+Y4ldhyH4PxjY2Lpq7HrhG6wg5gsbCA2YEX84svPegnZcfNm0WIf+nzHEjtkjvPE66Rip3CsaCDKZ28/edxyEu5vyAx9vtxfbN2QeePwiWmc65zH7Ks31sdkYQPhWBG/+oObliWeMIsW+9DnO4bYsf9jTxx4Zx7Me8y+GrtO6AY7iMnCBlKD3GLrIEsrvVDalCzAuPBJ2m4LqRFMczmPgadugmXhPMd3nS9it7PHCddRrhR72/EQS9uxYzc07DOU+ORif+3Jpjns6hZbxydjuwxQqpQiCZ+kAbeDfImVHLeh7ACmw3mO7zpfxG5njxOuw36wjD9D2/EQ7Id0HRvYGw72w+PY8GfGa7guSF+9sT4mCwZygdhi6xAI0woolLZ9CsW48Ema20K+FsxzHzwGoaSJlXbf+SIWe5xw3dGtF/llFDuxx0MgZNJ17NgNDfA4NjiGFX1X+mrsOqEb7CAmCyYmIxtKl/PheDvdNgYJZcYnV0zjGIDzFKydp6Bj+7bBvuxx7E2ANyGuwz6xHy7HcbAcr/ZnpvQx3Xd87JNjEWwb3iRwfvYc+9LXBBY/NiKLkwKsjGz6xA7hxba1YxDI0AoOkuc8j8F5CtbOW0GDrvO1x8E0RYxtAGWKc8AyLsc8lvP4dh9ch4C242OcHYttw5sEwmOGyyPpqzfWx2TBxGRkQ+ly3o6HmGLbhvuE2AAFR8lzHsew88TOU9DhvsNgX9wuvAlgmjLF/rgfLAccB/gzU/hc13V8/lycx7bhTQLB+QGeZ1/6auw6oRvsICYLhqKKrUP6xG7F2TYGCeftfil2uy6c51jum+v6YkULmVrpMjj/2M8YTjPYZ/gzM1ge3oTCMUmIve3JsU/sVpxtY5DwBmD3y2meQ9s8twVc1xcrWpynlS4TkyzgMew0gn20PbVjX+FNKHaube9bJH31xvqYLBhIquvJsUvsoThjY5DYDcDuF9P2HGLzHIv9dJ2vjRUtZRqOQfAzhD8jjxEeD/uM/cwM1tmbUPhzEHu8vvTV2HVCN9hBTBYM5YPX2Po+sXMeUHZtY7iPcNk8Yud8uO9YIFYLZd4m5C6x89gh2CZch+3s+eG4MYEnIXYrXZtQqgiw44kVFQjHhILjMh6D6/vmQdv5IhCvhTJvEzL2BewygOPx2CHYT7iO58Tpto9hsG1seUv66o31MVkwkA8SW4dYqSLheEwDK7vYmFDGdtk8Yud8uO8wlLmFy9uE3CV2K2PC/dh1PCd7fqDtqRz76Po5bPpq7DqhG+wgJgsbSC0mPATy6hJ7bHlsTDhv92vFPc981/lCpnxiRjA99BN7X3gDwSvOPVw/udi7nh4pL7sMxMRql9tpZIgnds53nW/4sQ1kTrFjG07b4LyAXQZ4PDs9T3gDwWv4MQyW2/ObI331xvqYLBgIrU14COTVJfbY8nAMJBluY/drxd0333e+gE/MlDymh3pi7wtvIHjFecfGIH0/h01fjV0ndIMdxGRhA9kBK16IB1Ki2CgoyArYsQjHcTmwUsN2VmZWuKG4++a7ztdKk+fE40C2wG6DMV1iR7puJLFwf3YfNvYc50lfE1j82IgsTgo/U7bihYAoJcBpyArYsYxdDnlZqWE7+5SKeQTTobj75rvOF6/2OIDHocC5H4zFMi7nNtyO47puJLFgf/j57T4Q7GOZUkf66o31MVnYACteSJBSwnJOU5ShpDmOyyFCKzVux6dXK1zEinueeRA7X8qbx8EYwHEQKfeDMdxHl9iXI2AG4+2xEOwTPzfncb72Z+hKX41dJ3SDHcRkEYbSI/bJliIFHAf5UbjEbgNxAStMyg5YsS1X7EjX+VpwnNh5AZ4DRcwxodiREIyx6224vf0ZEd4ULfbc2tLXBBY/NiKLU0K5EcoQoUgB5YTxFC6x22Ac4TIIklj5cj+UYN880nW+lCrA8rbz4jn0iR2x+wTYxo4PA+zPyGUhc9ww+uqN9TFZhIGILHYdoawoJMjJwvEULKAw8WqhfLkfK8G+eaTtfDGO4DwB19nzAjwH7KtN7IjdJ+gTMo9rf0bezAh+JrtNV/pq7DqhG+wgJgsln/Q1gcWPjchCySd99cb6mCyUfNJXY9cJ3WAHMVko+aSvCSx+bEQWSj7pqzfWx2Sh5JO+GrtO6AY7iMlCySd9TWDxYyOyUPJJX72xPiYLJZ/01dh1QjfYQUwWSj7pawKLHxuRhZJP+uqN9TFZKPmkr8auE7rBDmKyUPJJXxNY/NiILJR80ldvrI/JQsknfTV2ndANdhCThZJP+prA4sdGZKHkk756Y31MFko+6aux64RusIOYLJR80tcEFj82Igsln/TVG+tjslDySV+NXSd0gx0o+WdeYtsq+aWL2Hglv3TRK3YhhBB5IbE7HvqPF2dTogZU77JRfSV2z7l3/2I2JWpA9S4b1Vdi96gR6kL1LhvVV2L3qBHqQvUuG9VXYveoEepC9S4b1Vdi96gR6kL1LhvVV2L3qBHqQvUuG9VXYveoEepC9S4b1Vdi96gR6kL1LhvVV2L3qBHqQvUuG9VXYveoEepC9S4b1Vdi96gR6kL1LhvVV2L3qBHqQvUuG9VXYveoEepC9S4b1Vdi96gR6kL1LhvVV2L3qBHqQvUuG9VXYveoEepC9S4b1Vdi96gR6kL1LhvVV2L3qBHqQvUuG9VXYveoEepC9S4b1Vdi96gR6kL1LhvVV2L3qBHqQvUuG9VXYveoEepC9S4b1Vdi96gR6kL1LhvVV2L3qBHqQvUuG9VXYveoEepC9S4b1Vdi96gR6kL1LhvVV2L3qBHqQvUuG9W3crHvP3i4ueuR3/hGwOt3//N3szWiRFTvslF9T1C12H/6zEu+CZhH/ucPszWiRFTvslF9T1D9RzHr9x3yTfD5B55qjr/19mypKBXVu2xU3yWqFzvv8np6qwPVu2xU3yX0h6eOb/zwf/X0VhGqd9movhK7Rxd5XajeZaP6SuxCCFEcErsQQhSGxC6EEIUhsQshRGFI7EIIURhFin337t3N6aefPpsTNfLoo482p52m55YSOHTokK8lXsV8ZN35EDgKzmCeyyl2XuB4XQ1qrjRhfZlNmzadtBywduyP1YD9rLaXRBzWiVm7du1Jy3ntYZp1Xg1wxBA9kSLZih2FRYEtKBSKb8U+FGFzielBncOarFmzxovXin1IsE+JfXhYL/veQuyo8aKuPYk9QbouMCv2WFNgnrGFhRQoC4T7YNP1LRfj0nVhsjYE07ZfsC3rZp/+IBPM2/WAfWQTWz60fGoB117bU3h4DYd1x7Z8//mUD7A/zNv13Afnu5a3+SUHsrRReNGGdIkdy9lA4To2wDxjAdbnXPycidXD0iV21NkKwK7D8nnHAqxvu7mI+QnfV0tYayt2ipvYdbh2sd08YwHWt91cciNbsaMobaBYXG+bgtMWe2Fi2hYW07yow+YC4XgxHrFaWtAjdj2mKY6wjvaCxjRrDtAbVgZ2PyAcL1ZGWBNLeO1ZIWPa1sNes5i2tQu9YfcDwvE5k63YUeg22sTO7cKsVOyA+7DbicXTVg8S9gimsYzbhWH9QlH3iR2g17Bcgl85sfeVhLW2QsbyMCsVO8B47CN3wWcpdoA3v60R2sTO6TZWInbSdT5iMcQuTIJa2Frb+nTVcSViJ13nI7oJrz1LeO3Z9xnTbfVYidhJ1/nkQLZix8VnL1yAYqD4KBYL2NUUIWExrdhB10XdtU4sBtTH1hagXqgDYvvD1qfrou0Te1f/dK0T3eB9C68h1AjLu67hsF4WbG9rh33TC6CrD7rW5UC2Ygd441FwhsXGKwsYNgWw29h1YTExbZsG0xiPfXO/TFtzicVCITCsX5fYAWpot+O6UBTYv5WD7Tlg92HHieXDmjGsQ3gNW7EDvO92O65DrWxNQrHb3sG+bU/YcTmStdiFEEKcisQuhBCFIbELIURhSOxCCFEYErsQQhSGxC6EEIUhsQshRGFI7EIIURgSuxBCFEXT/D909UC3M+CdMgAAAABJRU5ErkJggg==");

/***/ }),

/***/ 56164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa8AAAEyCAYAAABNk1+cAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAI+hJREFUeF7tnf2vZVV9h/tv9P39JWnSxKZp0qSmaZOWFBwdbaxWG9qY9JcmpQg6MswMKKIVX0iLrRZxqDIoKKEtpVZDKA6kDpiqUBgHcBQGFEGcEWaYF2bmDrv3c+75zqy77trn7HP22nuvtfbzJJ/cs/fab+ecj+s5+9zx8mMVAABAZiAvAADIDuQFAADZgbwAACA7kBcAAGQH8gIAgOwYlbxWzpyZBGBR6A7Egi7FYVTy+sAt91Xbdt5NcWBh6A7Egi7FYTTy+shtX6k2XfH56g1X30FxYCHoDsSCLsVjFPKywrzl+oert96wl+JAY+gOxIIuxaV4ea0vzDenoTgwH7oDsaBL8SlaXuHCUByYD92BWNClbihWXrMLY6E4sBG6A7GgS91RpLyaFcayVpz37to93RvGDN2BWNClbilOXosVxrJ3so/2hfFCdyAWdKl7ipLXcoVZi/ahOOOF7kAs6FI/FCOvNoWxUJxxQncgFnSpP4qQV4zCWCjOuKA7EAu61C/Zy+vaiIWxUJxxEHOysdCdcUKX+idref3D7Xuqze++LWphLBSnbLqYbCx0Z1zQpWHIVl633PNItWnH5zopjEXHft2Vt00kCeVAdyAWdGk4spSXCnPBtluqN3/8oeCbHTMqju7uKE4Z0B2IBV0aluzk1WdhLBSnDOgOxIIuDU9W8hqiMBaKkzd0B2JBl9IgG3kNWRgLxckTugOxoEvpkIW8UiiMheLkBd2BWNCltEheXikVxmLFuemuB6dXCSlCdyAWdCk9kpZXioWx6Jp0bbpGSA+6A7GgS2mSrLxSLoyFSShN6A7Egi6lS5LyyqEwFiahtKA7EAu6lDbJyeu23Xur1+64NYvCWJiE0iCnycZCd9KELqVPUvKaiGt7XoWxMAkNS46TjYXupAVdyoNk5HXH/zyarbgsTELDcPt9+7KdbCx0Jw3oUj4kIa97vvGd6vytN1dv/tiDwTcjp6g4krDuIqF76A7Egi7lxeDyssK86Z++FnwTcgyTUD/QHYgFXcqPQeVVYmEsTELdQncgFnQpTwaTV8mFsTAJdQPdgVjQpXwZRF5jKIyFSSgudAdiQZfypnd5jakwFiahONAdiAVdyp9e5TXGwlhUnE3bPzt5DWBx6A7diQVdKqNLvclrzIWx6LnrNWASWgy6Q3diQZfK6VIv8tr90BPVBds+M+rCWJiEFoPJ5lzoTjvo0rmU0KXO5SVxvWYbhXHDJNQMJpuNoTvLQZc2JvcudSovxFUfJqHZMNnUh+4sBl2qT85d6kxeiGt+mITCMNnMD91pBl2an1y71Im8vvb4M9HF9eyLJ6dHryaPQ9vkGL1GF1x+80T2sNYdvR50Z37ozmxid+mqO5+cHnmNu755KLhdjsmxS9Hl9fATz1UXbN1VvfG6B4Iv0jLZ/4Pj6yadrx84Ut2059l12+QcFUeyH/skRHcWD90J00WXhCuskj4IKbl1Kaq8uiiMopJoEgqNKRo3Xnp55ex6TVJa1oQlbCLTsru/trFSahsX28Y+dWk7Ebu4Y5+E6M7yQWDr6aJL9h7WffDx78rcnqgXWlZXxJf2rvVA+9g2Oq6wZRe3vzqOdVG4Mo2RnLoUTV5dTT6K/Y/efRMt9ka6y7adFcLdz0pky25p/DEt27GtnLEnHjdjnYToTvsgsDW67JLeP6H33R8TrkiEbacOucuKuqKO2LLbPX9My3ZsrRexpeUmly5FkVeXhbG4n2zcCUW4pXAnFPexxY7jFsstjVsK21Y/3cc23kXGNgnRnXgZu8D66JLJQ1gP9L7r/Xe3c7vhPrboOO4+drxQ77StffBxH3eZHLrUWl59FMaPsDLUobFQERS9+SqBHgsrocoUos8JSBnLJER34mesAuu7SxKW0Ptvj31mycvthCs/651P3/JSUu9SK3kNMfko7hsobALxUzcBWVk07n760WONudta+pyAFCvOnm8+NTlvadCd7lJ6d3yG6pK959aJ0DZKSF6KfRDSmH0gquudpU95KSl3aWl59VkY4S6rKFYG/ax7M2cVQeg4VhpFj+tK2PcEpPzpR/938hrrtS4JutN9Su2OT19dkqCsN4r1Qz+1LOo+vGg/d1+LSU+43fC75Ubr+5SXkmqXlpKXnsRrepp8FL3JLn4R9Ga62Js7awLSMYQ/odh6wyakISYgRa9xSZNQX5ONhe6UK7C+u+R3xcSl2HvsYjJTL/zeWYR1zl/vYjIbQl5Kil1aWF66+D7FRcqZhPqebEi5AqNL/Se1Li0kL1004homuU9CTDbDJffu+NCl4ZJSlxrLSxeLuIZNrpMQk83wybU7PnRp+KTSpUby0kUirjSS2yTEZJNOcuuOD11KJyl0aa68Tp5eqTZvv7nafM3dwSdB+s/rP7y7es3luybvTcro+l67bRfdSSi5dMeHLqWXobvEnVdmye3/hMqn5XSSW3d86FI6SaFL/M4ro+Q6+TDpDJ/cxWXQpeGTSpcay0sgsOHCp2aybEoRl0GXhktKXVpIXgKB9R8+NZNlU5q4DLrUf1Lr0sLyEjkKzP5iQt3/0z3V8Kl5+NCdNMmxS/oLGaLuT0mlmhS7tJS8hBVHf/cq9GRTi/2JFhEaTzGlf2qmO92ldHEZuXVJfzJMXRriTzwtm1S7tLS8hP7SsJ6UnlzoSacUob8/pvLk8Kmn9MmH7nSXsYjLyKVLuoNXh4b6W5fLJOUutZKX0JNKvTiacOyPpA71hy0XyVgmH7oTP2Ppjk8OXbI7eD1Wj+yP7aaa1LvUWl4i9eK4RUn9U8/YJh+6Ey9j645P6l0S9pfo3Q9FKSaHLkWRl0i1OKEJR6WxT0ApZayTD91pn7F2xyfVLvmysm6l+DV0Ll2KJi+RYnH0qbmO0PZDZeyTD91ZPmPvjk+KXdIdfIjUvobOqUtR5SVSK44+7fjfLaf2qYfJZw26s3joTpiUumSdcf/jlYo6JNw7+yGTW5eiy0ukUhz7/+eExvSJJ4VPPW/++EPVa3fcWt31tf2Tax076s4Fl9OdJqE7s0mlS/oAVNcX4X9AGiI5dqkTeYmUPvmkmklhtt9S3bZ77/RVA3HPN75Tnb+V7swK3WkGXZqfXLvUmbwEAqsPk89smHTqQ3cWgy7VJ+cudSovgcA2hsmnGUw6G0N3loMubUzuXepcXmLy3fO2z1Cc1agwf7hl5+r/kN5Wbb7iN5NLajDpnIu6c/67PlG97z3nVXd/+MeSS+rQpXMp4UNQb42jOGuF+aPLbqzeet1F1cW3n5dcUpSXoDvTyWbrJ6rP7zxv9dPg6v9sE0sO8hJ0qQxxiV4bp+Js2v7ZyYsXelFLTuriUlKVlxh7d1IWl5KLvMTYu7Rpy87qU5e9rTq041VJZVF6b5xsL+uPqTh6rqmLS0lZXmKs3UldXEpO8hJj7dKmd/1LddO731kd/tCfJJUs5CXGVBw9xxzEpaQuLzG27uQgLiU3eYmxdWnTln+pdl15aXXkg5uTSzbyEmMojp5bLuJScpCXGEt3chGXkqO8xFi6tGnLjavient15JpNSSYreYmSi6PnlJO4lFzkJUrvTk7iUnKVlyi9SxNxXXFxdeQD5yeb7OQlSiyOnktu4lJykpcotTu5iUvJWV6i1C5JXDdfcVH10t+dl3SylJcoqTh/9s8PZykuJTd5idK6k6O4lNzlJUrr0kRcO/6meun9f5h8spWXKKE4b7n+4eqPt3+6etO1W4JySD05ykvccs8j1QXb8u/O63fsrK7/2BuDckg9JchLlNKlzVs/Xf3jtkurl973B1kka3mJnAVm4nrjh7YGxZBDcpWXyHnSMXH9/XVvDYohh5QiL5F7lySuD2/dUh29+veySfbyEhOB7bg1q+KUIC4lZ3mJHCedEsSllCQvkWuX1sT1juroe383qxQhL5FTcUoRl5K7vERu3SlBXEpp8hK5dWnz1k+tiuvS6uhVv5NdipGXyKE4TcR19OTh6TM6x78+9LHgtqEcOPToJKExP9pO53PXPfL9+zesq0sJ8hK5dGeuuA7fP31GDgfvCG8byvc+WlWnDobH/Ohcx7+1fp3O1XD/EuUlcunSRFyXXVIde89vZ5mi5CVSLk4TcSkSx33fvuPsssQlJBV3u7osIi/FPfZ19146WW4qy1LkJVLvzqbLG9xxSSiKu074kqnLIvJ68NVrx95/0bl1Qsdwt6tJqfISqXdpTVxvr469+7c25PRXPzd9Fud45dDTwW1DOfnFD0/2CY35CZ1LnPnuw8Ht3RQnL3HTXQ9Wm9992+RNCr15Q0TXct5qYZp8VejLSzGBSS5aNskYtv3zL31vumYNk5jGXew47pgeLyq+kuQlUu2Orukd2xt8VRiSlyJcqUhQhm2vuyYXk5hJynCPo31NjAvcdSkly0sk2yWJ610XV8eufFUwp796a/XKsRfXrXvl4FOT5+Suq8vJ//pg4239nLjxbZN9dYzQuJsi5SX+4fY9yRTHJp/zVgsTEoCfkLwUYeuFrXflo/gCkvgkNXfcXVa0rPO6x2mS0uQlUuyOrmky2QcksC518pJgbL0e292Sf/cUuvMS9ljj7rKNa3/76Y7NSOnyEil26ZotF1fHr/iN2px+4LOr8nphw3oJ7Mx3/+/ssh4btr329bHtXVYe+/LZ9W78c8xKsfISKRTHnXw00YcE4KdOXnXr7S7M7qbm3T3pGDqWu27RryYtJcpLpNYd0UpedesVycrupkLycmOy009bZ3dsTb+anGYM8hKpdUmT/vEdv16b0w98Zk1G3vqVR+85u16PFRvTels+9YX3T563jdn4y5+8cN24LVt0XuGum5Wi5SWGLI4/+bSVl7D1+ukzS15advHlpWX7ytH9SnFeSpWXSKk7Itqdl/81oJglL7vbcnHlpYgF7rqUschLpNSliby2/1ptTj9w85qkGq5Xzjz90CR6fOoL75ucx9/GjdB2tvzyDW/dsG5eipeXGKI4ocmnjbzc33nV/f6rTl7+vx7077zcce3nf6U4KyXLS6TSHdFKXsIE5T5WZt152deBJqvQnZcikNdMUumSJv1j2361NqfvX5OUv37l0f9et16PXSQvrT/5n1dPlm07d52L1tn4KwcPnN2/aUYhL9Fnceomn2XlZXKyr/RMXjau9cLkpWVXQP6y/X5Lj+3YOqaNC1+edSldXiKF7oil5SUZuV/pCRONycnkZcu2rb9sXxEir6VIoUua9I9e/iu1OXX/romY/PVnJoJ5cMPjyfLqY1s+eeeaqGzsxCfeMlnWelvnLq/s++/Jso01zWjkJfopzt7q9VfdHpx8FpGXjysXxf0a0B6bvExIwoTnHlPbm7wkMvcuTbGvJN11dRmDvITez9ddOVx3RGN5+Ug47jYSlWFi8+/EhAnPPaY9Rl5LM3SXNOm/tPWXa3Nqz5q83HUrq2IStnzm4JPV6X13n10W2kaPj1//Z5Nl/Qwt6/ji5Tvfe3ZMj+1YTTMqeQm9md0JbG/1hqvvqLbtvHt6tvU0lVdOGYu8xEdu+0q16YrPD9Id0UheGWWs8hJDdkmT/pHLfqk2J/fcNN3yHGd++OS6bY7985unI2usPPXgJDau7YUkqGWJztCY1r/8H1etW+9i+83K6OQlru2kOOcKs3LmzPRM60Fe+dPNpDO/OwJ5lcVQXdKkf/hdv5h9RikvEbc4zSYf5FUGQ3RHIK/yGKJLmvRf3PIL2We08hJxitN88kFe5dB3dwTyKpO+u6RJ/4V3/nz2GbW8RLviLDb5IK+y6LM7AnmVS59d0qT/o3f8XPYZvbyEFUclCJcjlMUnH+RVHn11RyCvsumrS5r0D136s/kHea3x3l27JyVoVpzlJh/kVSZ9dEcgr/Lpo0ua9A9e8jPZB3lN0ZuvEswvzvKTD/Iqkz66I5BX+fTRJU36P3z7T2cf5OUwvzjtJh/kVS5dd0cgr3HQdZc06T9/8U9lH+TlUV+c9pMP8iqbLrsjkNd46LJLmvR/8Lc/mX2QV4CNxYkz+SCv8umqOwJ5jYuuuqRJ/7mLfiL7IK8a3OLEmnyQ1zjoojsCeY2PLrqkSf/Zv/nx7IO8ZmDF2fLJL0eZfDTRlxjYSOzuCE32pQXmo/5cvtqly3bG6ZIm/VKyKKNq3JETp6q/veXx6tjJlekagGacOLUy6c6Lx09P1wAsx+7HflR9fPfafywWlmdU8rr9689X+kWpfgIswhcfOTTpzq77n52uAViclTOvVJd8bn914c591XOHT07XwjKMRl662/qrTz82mYD0k7svaMqplVeqv7758Ul3/vLGfdx9wdLc+/gLkx4p19/7zHQtLMNo5GV3XRbuvqApdtdl4e4LlsHuuqxH3H21YzTy+tqBI2c/9einlgGa8I2n1ndnz7c3/texAeZx5MTKpD833PdMddWdT04ef/dHL09HYVFG9TsvoQkIYBnoDsRA0uIrw/YgL4CG0B2IAfKKA/ICaAjdgRggrzggL4CG0B2IAfKKA/ICaAjdgRggrzggL4CG0B2IAfKKA/ICaAjdgRggrzggL4CG0B2IAfKKA/ICaAjdgRggrzggL4CG0B2IAfKKA/ICaAjdgRggrzggL4CG0B2IAfKKA/ICaAjdgRggrzggL4CG0B2IAfKKA/ICaAjdgRggrzggL4CG0B2IAfKKA/ICaAjdgRggrzggL4CG0B2IAfKKA/ICaAjdgRggrzggL4CG0B2IAfKKA/ICaAjdgRggrzggL4CG0B2IAfKKA/ICaAjdgRggrzggL4CG0B2IAfKKwyjlpfIQsmjUnU+sTjoxctWdT1Zf2nsoeB5Sdm647xnkFYHRyUulIWSZXPL5/dEiEX7wS08Fz0PKz5cfe2E6I8GyjE5eACkgeT327PHpEgAsCvICGADkBdAO5AUwAMgLoB3IC2AAkBdAO5AXwAAgL4B2IC+AAUBeAO1AXgADgLwA2oG8AAYAeQG0A3kBDADyAmgH8gIYAOQF0A7kBTAAyAugHcgLYACQF0A7kBfAACAvgHYgL4ABQF4A7UBeAAOAvADagbwABgB5AbQDeQEMAPICaAfyAhgA5AXQDuQFMADIC6AdyAtgAJAXQDuQF8AAIC+AdiAvgAFAXgDtQF4AA4C8ANqBvAAGAHkBtAN5AQwA8gJoB/ICGADkBdAO5AUwAMgLoB3IC2AAkBdAO5AXwAAgL4B2IC+Annn4iedW5bW3uufhZ6ZrAGBRkBdAj0hcF2zdVW2+5u7qNas/tQwAi4O8AHrCxPXG6x6YfG2onwgMYDmQF0AP+OKyIDCA5UBeAB1TJy4EBrA8yAugQ+aJy4LAABYDeQF0RFNxWRAYQHOQF0AHLCouCwIDaAbyAojMsuKyIDCA+SAvgIi0FZcFgQHMBnkBRCKWuCwIDKAe5AUQgdjisiAwgDDIC6AlXYnLgsAANoK8AFrQtbgsCAxgPcgLYEn6EpcFgQGcA3kBLEHf4rIgMIA1kBfAggwlLgsCA0BeAAsxtLgsCAzGDvICaEgq4rIgMBgzyAugAamJy4LAYKwgL4A5pCouCwKDMYK8AGaQurgsCAzGBvICqCEXcVkQGIwJ5AUQIDdxWRAYjAXkBeCRq7gsCAzGAPICcMhdXBYEBqWDvACmlCIuCwKDkkFeAKuUJi4LAoNSQV4wekoVlwWBQYkgLxg1pYvLgsCgNJAXjJaxiMuCwKAkkBeMkrGJy4LAoBSQF4yOsYrLgsCgBJAXjIqxi8uCwCB3kBeMBsS1PggMcgZ5wShAXOEgMMgV5AXFg7hmB4FBjiAvKJohxPX1A0eqZ188GRxLNQgMcgN5QbF0LS4JyuWmPc9O1rvy0jp3rE26liICg5xAXlAkXYvrpZdXNohE6GdXkunjjg6BQS4gLyiOrsUliUheoTHFlcxVdz45uSb9tHHta7gyuuubhybL+39wfDpaTY6lMXed6FJiCAxyAHlBUXQtLsUEExpTZsnL31fLJijJS9iyfeVo+7rH7ToIDFIHeUEx9CEuxRVOKHXy8kWmSFh2F+c+tmg59Lu0PoLAIGWQFxRBX+JS2srLZ568tF6P+5aXgsAgVZAXZE+f4lIkEV8ybubJSz/9fZQU5aUgMEgR5AVZ07e4LML/vZeJp05eWtb6ut+XzZNXaLyvIDBIDeQF2TKUuCwSiUvod1Ohuy1/P5PZPHkpxqx/MNJVEBikBPKCLBlaXGMNAoNUQF6QHYhr2CAwSAHkBVmBuNLIkAL7/bd/khSYRUFekA2IK60MJTBNdBfffh4pKMgLiuXk6ZXqtdt2VZuvuTs4kZJhovdj8/abJ+9PXyCv8oK8oGi480or3HmRWEFeUDwILI0MJS6BvMoL8oJRgMCGzZDiEsirvCAvGA0IbJgMLS6BvMoL8oJRkaPA7C9uDPE3CtsmBXGJPuRlPP/S94LjTXP05OHqvm/fERzrKjqfzhsaSzXIC0ZHbgLTn47Sn3YS7p+MSj2piEvMktd191463Wo9oW3r8sj3728tLYsrr3996GO116LtXPQ8Qts1SSx52TWFxuqi181/7Q4cenTu64m8YJTkJDD9rUL9DUTdeUlkoW1Sy5DiOnT0VHX9vc9Uzx0+OV3TTF7u5C8ZCcnD3bYummyV0NiiaSIv4Z5P195GPjHkpWvVMSQdu/4msdfff87zZIy8YLTkIDD7LyPr8ZB/IX6RDH3H9fyRU5PruHDnvrMSW1ReigTmTug2qRo22WqydrH1LjqWHUfbu8u+oExeio/Gm9yV6BiGL1X3em1M59I+Jm3hXqOibV3cMRvXPsq86/Ojfey19l+fuiAvGDWpC2z/D46v+2vwwv4SfYrpWlwX3/qt4HlnRRJbRl7uHYBto3WhfTRxu5LQRGxj/p1EU3mFxmx81uSu4/vXacu6RlcseqxtTJR2XP+aXbnYsnscRWg/O6ft2zQ6viU07gd5wehJWWDClZW+Okz1H270cccleenOahZ256Vce9fT1YGDJ5aSl7s+NFlr2SZ7X15+hAnE3U8xUdiyJu958rLxJnG3F3YdbjTuS0PLtq1/Tv818/f3n2OT6BjCPc+sIC+AVVIUmL4mrCO1f7jRh7hEU3mZtIy2d16aiEPUycv2dTERdC0vez4utr3wn6eicVc+insePQ5hx/Kfk71ettwkQscRoXE/yAtgSmoC0x2W+5WhRaT0Dzf6EpdoIq8Qy8hLE7BN6HqsidUdd+PKy45nslLcZW3XRl7af9a1CFdu7vGEe12WJvJyj+nGnm+Iun38uM9JP+21nBXkBeCQisBC/zVli4SWyj/c6FNcoi95adIVNtGHhORGk61NuP7x/GO5UlT0WLjLNumHrs3WuQJU7JjCzqWfwo4nMbji02MdT+PuNSnudfjX7KZuzD9XXewa7Tna86t7rS3IC8AjtTuwVNO3uESX8vLxt7NJ1sUmWFdeiiZ0QxO4Jnd3MtayYXJzx0waivYXviB8bPK34wnto/3d47nnNgFq3D++fx16fi62vb+dxa7Drqsu2t8X8SxZWpAXQAAENjtDiEt0IS+SZ5AXQA0ILJyhxCWQF7EgL4AZILD1GVJcAnnlF/vaM0ST34nVBXkBzAGBrWVocQnkRSzIC6ABYxdYCuISyItYkBdAQ8YqsFTEJZAXsSAvgAUYm8BSEpdoIy9SXhYFecGoGYvAUhOXWFZeAAJ5wegpXWApiksgL2gD8gJYpVSBpSougbygDcgLYEppAktZXAJ5QRuQF4BDKQJLXVyCf7BB3CwK8gLwyF1gOYhLtJFXtXt16iLFBHkBRCJXgeUiLoG8iAV5AUQkN4HlJC6BvIgFeQFEJheB5SYugbyIBXkBdEDqAstRXAJ5EQvyAuiIVAWWq7gE8iIW5AXQIakJLGdxiaTldfxb07OtEhpvmsP3ryU01lUefPXadetnaDzBIC+AjklFYLmLS3Qmr1MHp1s67L8ovG0o2laExhaNLy8RuhZt4/K9j27cpmliycuuaZHXTtL3Za1lrXfXeUFeAD0wtMBKEJfoVF7u5G8yOnjH+u3qon11jNDYotHE7U7mwpeBJnb/fFpeVj6x5CX8658Xe63t3HYtcwSIvAB6YiiBlSIu0UReh46eqq6/95nqucMnp2uWkJfiT6qKi03QEpyLrXe/RnTvIrS9f1chbLK2yd8mcRdto+sU7v5+tL/hS869Xhuzc9mxhX+N7pjw5aJx7WOvmzs2L9rPXjf99M8dCPIC6JG+BVaSuEQTeWlcz/3CnfvOSmwpeSnC1msb907M3Uc/XUloAnaP5x6nqbxCYzY+a3LX8f3rtGVdg3C31TqTl3tcYddsQjKRhwSlfe08da9nXez8/nlmBHkB9ExfAitNXOLCneHnOiuS2PlX/ltwAjybusnW1ocma03UNtlrG1deftyJ3d3PIkxQTeTljs+Lu717HW5MHq40tI9tGzqn+5r5+4ee47zo+MI/T02QF8AAdC2wEsUlJK/Hnj0+XQpjd17KtXc9XR04eKL9nZfJy2eWvHz6lJeuxcW213lDz7NOXraffoawY/nPyV4v97rnJXQNM4K8AAaiK4GVKi7RVF4mLWMpedkErMnUHrvjbnx56bHJStHEbsvato28tL+wZT86tru/ezz3Otw0kZc9DsWXpTFrHz/ICyAfYgusZHGJJvIKsbC8bCJ1J3pfSG5C8rLj+cdypahlTfCiTl7+tdk6X4Ba1jF9QQk7ntYLG9Oyjm3XaNekuNfhX7ObujH/XPMSuoYZQV4AAxNLYKWLS3QqLx/3bsfiY5Lw5WUTuiEJuELRsqH12rdOXiYB4U7skpSLL0vDP557bhNgSBz+fjq+j7b3t7PYMX3x1iV0DTOCvAASoK3AxiAu0Zm8SHZBXgCJsKzAxiIugbyIBXkBJMSiAhuTuATyyjDu154hQvs0CPICSIymAhubuATyIhbkBZAg8wQ2RnEJ5EUsyAsgUeoENlZxCeRFLMgLIGF8gY1ZXKKNvEh5WRTkBdAjJrDN19w9anGJZeUFIJAXQM9IWLrzGrO4BPKCNiAvgAGQvMYO8oI2IC+AAUBeyAvagbwABgB5IS9oB/ICGADktby8Qv9SjeSfRUFeAAOAvNrJ69COV5GCgrwAMgF5IS9yLsgLIBOQF/Ii54K8ADIBeSEvci7ICyATkBfyIueCvAAyAXmlLa/TTz88PVtVHf7k24LbNMmJB26tXjn2YnCsy+icOndoLMUgL4BMQF7dyWvl4FPTLc+xyEQuWYk20rL48tK1nXx097ptFK1zCW2zSGLIy65pkeP4z8OY93yQF0AmIK9u5eVOliYj3U2529Xl2Bc+ONk+NLZomsjL7vLcddpO1+GuWyQx5KVj6Np0LaHxJrHXct4HAeQFkAnIq5m8jpxYqe59/IVq5cwr0zWLy0sxgblC0ORs2AStCd/F1vt3FHYMX06KKw533D2f0DGbTO5151Zsf8OOY9fgMms/u153XMew122efOqiY/jvRSjICyATJK8r/v3JUefPb9g3V17PHzk1ea0u+dz+sxJbRl6KO5FqG/dOzN3HJnYb08Tub2vLrpwsJo7QuH9teuzv72bWuX0h66eN6ZiiyX4hQWlb296/5qaZ99zcIC+ATNCE/Bc7940+V/z7E9XV/3mgNlfe8cTktbJIYn+84/bgBGipm2xtfWiydiXjy8uPjqFj6XEMedmxmsTdfta+7jUoejxrPy271yVMbqHnOC/2Grqv8awgL4BM2Pf9o6RB9nz78Flx/fXNj1dffORQ9QeX3BicAC3+RGzRBKz1Ji8fm6BD8tIxXWzyD03srjj8cf/aQiLxU3du7Wt3R37ca1Dc69B+Iey6/Gu218s93rxof/d5zgvyAoCi0NeGJq1TK2u/91rma0ObgCUme1x3V+DLS4JwBaNj27K2dSd6xRWHLwL/2ubdocw6t/vYj3sNinsds/ZTNBZi1j5udM3+azIvyAsAikLCMmkZy8hLuHcp2qburiUkL3dbTcw2kbtS1LLOK+rk5R9L0bH8yV7b6Jizzm3Xaee27W27Onn51+ymbkz7izrJWuya5m3nB3kBQPE0kZePO5FbNJm72MRvE7C7rYu2M4EoJixhY3Y+VxqKHVu416T9XFz5uvjnNqkYtn6WvBT3Ogytm3VXJvwPBX7852HUHdOCvACgeObJi+QX5AUAxYO8ygvyAoDiQV7Dxf+a0mfR33VZkBcAFA/yKi/ICwCKB3mVF+QFAMWDvMoL8gKA4tFER8rLoiAvAADIDuQFAADZgbwAACA7kBcAAGQH8gIAgOxAXgAAkB3ICwAAMqOq/h+na7ogjNl3/QAAAABJRU5ErkJggg==");

/***/ }),

/***/ 38706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 24459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/allow-mac-clients-38a04e127001a15d8076188132bc4bea.png");

/***/ }),

/***/ 88233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/buildappcomps-371c0a1360bfd6ce1cd959b3fbc2e246.png");

/***/ }),

/***/ 56225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/client-connect-54fc889df89b9f9abb1b1cd803e132f0.png");

/***/ }),

/***/ 20843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/client-server-buildapp-b18201cf4843526dde2d276475437836.png");

/***/ }),

/***/ 8378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/DefaultData-79a54ee98aab6342ef448256d8372906.png");

/***/ }),

/***/ 15378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/appbuilderProj-52004fd6e5c2243a1c57a9e389903786.png");

/***/ }),

/***/ 15520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 82556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 77301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/certificate-6369a174053feb8e273c0bd851059f9d.png");

/***/ }),

/***/ 89470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/connect1-9f26e4426f4644f8604a04a6d4474d84.png");

/***/ }),

/***/ 77366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/connect2-899d1a7ad63bd1b3b2525137717bfd11.png");

/***/ }),

/***/ 57625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/connect3-f030d997dbe37708f668d90ffe07c25c.png");

/***/ }),

/***/ 20933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/datalinking1-7e88683a0156eafd46689aa52ec81972.png");

/***/ }),

/***/ 74794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/datalinking2-ff22a6ee981348d06c828fdb78b92924.png");

/***/ }),

/***/ 67542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/standaloneProj-82ef92c84b643ab7107fd1e55dfb68e6.png");

/***/ })

};
;