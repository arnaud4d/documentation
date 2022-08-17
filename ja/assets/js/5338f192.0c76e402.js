exports.id = 99950;
exports.ids = [99950];
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

/***/ 74337:
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
var debugger_exports = {};
__export(debugger_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(debugger_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "debugger",
  title: "Debugger"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Debugging/debugger",
  "id": "version-19-R6/Debugging/debugger",
  "title": "Debugger",
  "description": 'The debugger is useful when you need to spot errors or monitor the execution of methods. It allows you to step through your code slowly and examine the information. This process is called "tracing".',
  "source": "@site/versioned_docs/version-19-R6/Debugging/debugger.md",
  "sourceDirName": "Debugging",
  "slug": "/Debugging/debugger",
  "permalink": "/docs/ja/Debugging/debugger",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "debugger",
    "title": "Debugger"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Basics",
    "permalink": "/docs/ja/Debugging/basics"
  },
  "next": {
    "title": "Breakpoints and Command Catching",
    "permalink": "/docs/ja/Debugging/breakpoints"
  }
};
const assets = {};
const toc = [{
  value: "Calling the Debugger",
  id: "calling-the-debugger",
  level: 2
}, {
  value: "Tool bar Buttons",
  id: "tool-bar-buttons",
  level: 2
}, {
  value: "No Trace",
  id: "no-trace",
  level: 4
}, {
  value: "Step Over",
  id: "step-over",
  level: 4
}, {
  value: "Step Into",
  id: "step-into",
  level: 4
}, {
  value: "Abort",
  id: "abort",
  level: 4
}, {
  value: "Abort and Edit",
  id: "abort-and-edit",
  level: 4
}, {
  value: "Edit",
  id: "edit",
  level: 4
}, {
  value: "Save Settings",
  id: "save-settings",
  level: 4
}, {
  value: "Watch Pane",
  id: "watch-pane",
  level: 2
}, {
  value: "Expression list",
  id: "expression-list",
  level: 3
}, {
  value: "Line Objects",
  id: "line-objects",
  level: 4
}, {
  value: "Variables",
  id: "variables",
  level: 4
}, {
  value: "Current Form Values",
  id: "current-form-values",
  level: 4
}, {
  value: "Constants",
  id: "constants",
  level: 4
}, {
  value: "Semaphores",
  id: "semaphores",
  level: 4
}, {
  value: "Processes",
  id: "processes",
  level: 4
}, {
  value: "Tables and Fields",
  id: "tables-and-fields",
  level: 4
}, {
  value: "Sets",
  id: "sets",
  level: 4
}, {
  value: "Named Selections",
  id: "named-selections",
  level: 4
}, {
  value: "Information",
  id: "information",
  level: 4
}, {
  value: "Web",
  id: "web",
  level: 4
}, {
  value: "Contextual Menu",
  id: "contextual-menu",
  level: 3
}, {
  value: "Call Chain Pane",
  id: "call-chain-pane",
  level: 2
}, {
  value: "Custom Watch Pane",
  id: "custom-watch-pane",
  level: 2
}, {
  value: "Handling expressions",
  id: "handling-expressions",
  level: 3
}, {
  value: "Contextual Menu",
  id: "contextual-menu-1",
  level: 3
}, {
  value: "Source Code Pane",
  id: "source-code-pane",
  level: 2
}, {
  value: "Tool tip",
  id: "tool-tip",
  level: 3
}, {
  value: "Adding expressions to the Custom Watch Pane",
  id: "adding-expressions-to-the-custom-watch-pane",
  level: 3
}, {
  value: "Program Counter",
  id: "program-counter",
  level: 3
}, {
  value: "Moving the program counter",
  id: "moving-the-program-counter",
  level: 4
}, {
  value: "Contextual menu",
  id: "contextual-menu-2",
  level: 3
}, {
  value: "Find Next/Previous",
  id: "find-nextprevious",
  level: 3
}, {
  value: "Shortcuts",
  id: "shortcuts",
  level: 2
}, {
  value: "Watch Pane &amp; Custom Watch Pane",
  id: "watch-pane--custom-watch-pane",
  level: 4
}, {
  value: "Source Code Pane",
  id: "source-code-pane-1",
  level: 4
}, {
  value: "All Panes",
  id: "all-panes",
  level: 4
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The debugger is useful when you need to spot errors or monitor the execution of methods. It allows you to step through your code slowly and examine the information. This process is called "tracing".`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "debugger-window-local",
    src: (__webpack_require__(73713)/* ["default"] */ .Z),
    width: "774",
    height: "315"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "calling-the-debugger"
    }
  }, `Calling the Debugger`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `There are multiple ways to get the Debugger to display:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Clicking the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Trace`), ` button in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/Debugging/basics#syntax-error-window"
    }
  }, `Syntax Error window`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page157.html"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `TRACE`)), ` command`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Clicking the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Debug`), ` button in the Execute Method window or selecting `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Run and debug...`), ` button in the Code Editor`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Using `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Alt+Shift+Right click`), ` (Windows) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Ctrl+Option+Cmd+Click`), ` (macOS) while a method is executing, then selecting the process to trace in the pop-up menu:`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "open-debugger",
    src: (__webpack_require__(75715)/* ["default"] */ .Z),
    width: "172",
    height: "134"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Clicking the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Trace`), ` button when a process is selected in the Process page of the Runtime Explorer.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Adding a break point in the Code Editor window or in the Break and Catch pages of the Runtime Explorer.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When called, the debugger window provides the name of the method or class function you're currently tracing, and the action causing the initial appearance of the Debugger window. For example, in the above debugger window:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Clients_BuildLogo`), ` is the method being traced`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `The debugger window appeared because it detected a call to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `C_PICTURE`), ` command and this command was one of the commands to be caught`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Displaying a new debugger window uses the same configuration as the last window displayed in the same session. If you run several user processes, you can trace them independently and have one debugger window open for each process.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Debugger window is usually displayed on the machine where the code is executed. With a single-user application, it is always displayed on the machine running the application. With a client/server application, it is displayed:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `on the remote 4D for code running locally`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `on the server machine for code running on the server (for example, a method with the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `execute on server`), ` option).`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If the server is running headless, no debugger window can be displayed on the server, you need to use the remote debugger. See `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Debugging/debugging-remote"
    }
  }, `Debugging from remote machines`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "tool-bar-buttons"
    }
  }, `Tool bar Buttons`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The debugger's tool bar includes several buttons, associated with default shortcuts:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "execution-control-toolbar-buttons",
    src: (__webpack_require__(46592)/* ["default"] */ .Z),
    width: "664",
    height: "288"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Default shortcuts can be customized in the Shortcuts Page of the Preferences dialog box.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "no-trace"
    }
  }, `No Trace`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Tracing stops and normal method execution resumes.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Shift`), ` + `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `F5`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Shift`), ` + clicking the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `No Trace`), ` button resumes execution. It also disables all the subsequent TRACE calls for the current process.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "step-over"
    }
  }, `Step Over`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Executes the current method line, indicated by the program counter (the yellow arrow). The Debugger steps to the next line.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Step Over button does not step into subroutines and functions, it stays at the level of the method you're currently tracing. If you want to also trace subroutines and functions calls, use the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Step Into`), ` button.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In remote debugging, if the method executes on the server, the parent method is called after the last line of the child method executes. If the parent method is executed on the remote side, the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Step Over`), ` button has the same effect as the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `No Trace`), ` button.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "step-into"
    }
  }, `Step Into`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When a line that calls another method (subroutine or function) is executed, click this button to display the the other method and step through it.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The new method becomes the current (top) method in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#call-chain-pane"
    }
  }, `Call Chain Pane`), ` of the Debugger window.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When executing a line that does not call another method, this button has the same effect as the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Step Over`), ` button.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "abort"
    }
  }, `Abort`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Stops method execution, and returns to the state before the method started executing:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When tracing a form or object method executing in response to an event: Stops and returns to the form.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When tracing a method executing from within the Application environment: Stops and returns to the environment.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "abort-and-edit"
    }
  }, `Abort and Edit`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Pauses method execution. The method that is executing when you click the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Abort and Edit`), ` button opens in the Code Editor.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Tip`), `: Use this button when you know which changes are required in your code, and when these changes are required to pursue the testing of your methods. After you're finished with the changes, rerun the method.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "edit"
    }
  }, `Edit`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Pauses method execution. The method that is executing at the time you click the Edit button opens in the Code Editor.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you use this button to modify a method, the modifications are only effective the next time it executes.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Tip:`), ` Use this button when you know which changes are required in your code and when they don't interfere with the rest of the code to be executed or traced.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "save-settings"
    }
  }, `Save Settings`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Saves the current configuration of the debugger window  and makes it the default configuration. This includes:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the size and position of the window`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the position of the division lines and the contents of the area that evaluates the expressions`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `These parameters are stored in the project.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This action is not available in remote debugging mode (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Debugging/debugging-remote"
    }
  }, `Debugging from Remote Machines`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "watch-pane"
    }
  }, `Watch Pane`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Watch pane`), ` is displayed in the top left corner of the Debugger window, below the Execution Control Tool Bar. Here is an example:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "watch-pane",
    src: (__webpack_require__(89819)/* ["default"] */ .Z),
    width: "342",
    height: "437"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This pane is not available in remote debugging mode.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Watch Pane`), ` displays useful general information about the system, the 4D environment, and the execution environment.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Expression`), ` column displays the names of the objects and expressions. The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Value`), ` column displays their current corresponding values. Clicking on any value on the right side of the pane allows you to modify the value of the object, if this is permitted for that object.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `At any point, you can drag and drop themes, theme sublists (if any), and theme items to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#custom-watch-pane"
    }
  }, `Custom Watch Pane`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "expression-list"
    }
  }, `Expression list`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "line-objects"
    }
  }, `Line Objects`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This theme lets you keep track of the values of the objects or expressions:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `used in the line of code to be executed (the one marked with the program counter\u2014the yellow arrow in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#source-code-pane"
    }
  }, `Source Code Pane`), `),`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `used in the previous line of code`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Since the previous line of code is the one that was just executed before, this theme therefore shows the objects or expressions of the current line before and after that the line was executed.  Let's say you execute the following method:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `TRACE
$a:=1
$b:=a+1
$c:=a+b
`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `A Debugger window opens with the program counter set to the line with `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `a:=1`), `. At this point the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Line Objects`), ` theme displays:`), /* @__PURE__ */ (0, import_react2.mdx)("table", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$a`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Undefined`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$a`), ` variable is not yet initialized, but it is displayed because it is used in the line to be executed.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `You click the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Step Over`), ` button. The program counter is now set to the line `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `b:=a+1`), `. At this point, the theme displays:`), /* @__PURE__ */ (0, import_react2.mdx)("table", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$a`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$b`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Undefined`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `The value of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$a`), ` variable is now 1. The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$b`), ` variable is not yet initialized, but it is displayed because it is used in the line to be executed.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `You click the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Step Over`), ` button again. The program counter is now set on the line with c:=a+b. At this point the Line Objects theme displays:`), /* @__PURE__ */ (0, import_react2.mdx)("table", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$c`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Undefined`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$a`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `1`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `$b`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `2`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `The value of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$b`), ` variable is now 2. The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$c`), ` variable is not yet initialized, but it is displayed because it is used in the line to be executed.`))), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "variables"
    }
  }, `Variables`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This theme is composed of the following subthemes:`), /* @__PURE__ */ (0, import_react2.mdx)("table", null, /* @__PURE__ */ (0, import_react2.mdx)("thead", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Subtheme`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Description`), /* @__PURE__ */ (0, import_react2.mdx)("th", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Can the values be modified?`))), /* @__PURE__ */ (0, import_react2.mdx)("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Interprocess`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `List of interprocess variables being used at this point`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Yes`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Process`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `List of process variables used by the current process`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Yes`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Local`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `List of local variables used by the method being traced`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Yes`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Parameters`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `List of parameters received by the method`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Yes`)), /* @__PURE__ */ (0, import_react2.mdx)("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Self`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `Pointer to the current object, when tracing an Object Method`), /* @__PURE__ */ (0, import_react2.mdx)("td", {
    parentName: "tr",
    ...{
      "align": null
    }
  }, `No`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Arrays, like other variables, appear in the Interprocess, Process, and Local subthemes, depending on their scope. The debugger displays the first 100 elements. Inside the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Value`), ` column, you can modify the values of array elements, but not the size of the arrays.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To display the variable types and their internal names, right click and check the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Show Types`), ` option in the context menu:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "show-types-menu-item",
    src: (__webpack_require__(47942)/* ["default"] */ .Z),
    width: "254",
    height: "190"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Here's the result:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "dynamic-variable-names",
    src: (__webpack_require__(87970)/* ["default"] */ .Z),
    width: "329",
    height: "37"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "current-form-values"
    }
  }, `Current Form Values`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This theme contains the name of each dynamic object included in the current form, as well as the value of its associated variable:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "current-form-value",
    src: (__webpack_require__(50820)/* ["default"] */ .Z),
    width: "412",
    height: "201"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Some objects, such as list box arrays, can be presented as two distinct objects, the variable of the object itself and its data source.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "constants"
    }
  }, `Constants`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Like the Constants page of the Explorer window, this theme displays predefined constants provided by 4D. The expressions from this theme cannot be modified.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "semaphores"
    }
  }, `Semaphores`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This theme lists the local semaphores currently being set. For each semaphore, the Value column provides the name of the process that sets the semaphore. The expressions from this theme cannot be modified. Global semaphores are not displayed.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "processes"
    }
  }, `Processes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This theme lists the processes started since the beginning of the working session. The value column displays the time used and the current state for each process (i.e., Executing, Paused, and so on). The expressions from this theme cannot be modified.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "tables-and-fields"
    }
  }, `Tables and Fields`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This theme lists the tables and fields in the 4D database. For each Table item, the Value column displays the size of the current selection for the current process as well as the number of `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `locked records`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For each Field item, the Value column displays the value of the field for the current record (except picture and BLOB). You can modify the field values but not the the tables' information.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "sets"
    }
  }, `Sets`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This theme lists the sets defined in the current process (the one you're currently tracing) and the interprocess sets. For each set, the Value column displays the number of records and the table name. The expressions from this theme cannot be modified.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "named-selections"
    }
  }, `Named Selections`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This theme lists the named selections that are defined in the current process (the one you\u2019re currently tracing); it also lists the interprocess named selections. For each named selection, the Value column displays the number of records and the table name. The expressions from this theme cannot be modified.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "information"
    }
  }, `Information`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This theme contains general information regarding database operation, such as the current default table (if one exists), physical, virtual, free and used memory space, query destination, etc.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "web"
    }
  }, `Web`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This theme displays information regarding the main Web server of the application (only available if the Web server is active):`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Web File To Send: name of Web file waiting to be sent (if any)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Web Cache Usage: number of pages present in Web cache as well as its use percentage`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Web Server Elapsed Time: duration of Web server use in hours:minutes:seconds format`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Web Hits Count: total number of HTTP requests received since Web server launch, as well as the instantaneous number of requests per second`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Number of active Web processes: number of active Web processes, all Web processes together`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The expressions contained within this theme cannot be modified.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "contextual-menu"
    }
  }, `Contextual Menu`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Additional options are available from the contextual menu of the Watch pane.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "context-menu",
    src: (__webpack_require__(33025)/* ["default"] */ .Z),
    width: "447",
    height: "356"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Collapse All`), `: Collapses all levels of the hierarchical list.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Expand All`), `: Expand all levels of the hierarchical list.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Show Types`), `: Displays the type of each item (when appropriate).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Show Field and Table Numbers`), `: Displays the number of each table or field. Useful if you work with table or field numbers, or with pointers using commands such as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Table`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Field`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Show Icons`), `: Displays an icon denoting the object type for each object. You can turn this option off in order to speed up the display, or just because you prefer to use only the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Show Types`), ` option.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Sorted Tables and Fields`), `: Sorts the tables and fields in alphabetical order within their respective lists.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Show Integers in Hexadecimal`), `: Numbers are usually displayed in decimal notation. This option displays them in hexadecimal notation. Note: To enter a numeric value in hexadecimal, type 0x (zero + "x"), followed by the hexadecimal digits.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Enable activity monitoring`), `: Activates the monitoring of activity (advanced checking of internal activity of the application) and displays the information retrieved in the additional themes: `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Scheduler`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Web`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Network`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "call-chain-pane"
    }
  }, `Call Chain Pane`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A method may call other methods or class functions, which may call other methods or functions. The Call Chain pane lets you keep track of that hierarchy.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "call-chain-pane",
    src: (__webpack_require__(51072)/* ["default"] */ .Z),
    width: "973",
    height: "231"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each main level item is the name of a method or class function. The top item is the one you are currently tracing, the next main level item is the name of the caller (the method or function that called the one you are currently tracing), the next one is the caller's caller, and so on.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the image above:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `thirdMethod`), ` has not received any parameter`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `$0`), ` is currently undefined, as the method did not assign any value to `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `$0`), ` (because it has not executed this assignment yet or because the method is a subroutine and not a function)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `secondMethod`), ` has received three parameters from `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `firstMethod`), `:`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `$1 is a pointer to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `[Employee]`), ` table`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `$2 is a pointer to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `ID`), ` field in the  `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `[Employee]`), ` table`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `$3 is an alphanumeric parameter whose value is "Z"`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can double-click the name of any method to display its contents in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#source-code-pane"
    }
  }, `Source Code Pane`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Clicking the icon next to a method or function name expands or collapses the parameters and the result (if any). Values appear on the right side of the pane. Clicking on any value on the right side allows you to change the value of any parameter or function result.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To display the parameter type, check the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Show types`), ` option in the contextual menu:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "call-chain-show-types",
    src: (__webpack_require__(41977)/* ["default"] */ .Z),
    width: "403",
    height: "147"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `After you deploy the list of parameters, you can drag and drop parameters and function results to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#custom-watch-pane"
    }
  }, `Custom Watch Pane`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page1662.html"
    }
  }, `Get call chain`), ` command to retrieve the call chain programmatically.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "custom-watch-pane"
    }
  }, `Custom Watch Pane`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Custom Watch Pane is useful for evaluating expressions. It is similar to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#watch-pane"
    }
  }, `Watch Pane`), `, except here you decide which expressions are displayed. Any type of expression can be evaluated:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `field`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `variable`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `pointer`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `calculation`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `4D command`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `method`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `and anything else that returns a value`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "custom-Watch-pane",
    src: (__webpack_require__(27622)/* ["default"] */ .Z),
    width: "975",
    height: "178"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can evaluate any expression that can be shown in text form. This does not cover picture and BLOB fields or variables. To display BLOB contents, you can use BLOB commands, such as `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4dv19/help/command/en/page555.html"
    }
  }, `BLOB to text`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "handling-expressions"
    }
  }, `Handling expressions`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `There are several ways to add expressions to the list:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Drag and drop an object or expression from the Watch Pane or the Call Chain Pane`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Select an expression in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "#source-code-pane"
    }
  }, `Source Code pane`), ` and press `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `ctrl+D`), `  (Windows) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `cmd+D`), ` (macOS)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Double-click somewhere in the empty space of the Custom Watch Pane (adds an expression with a placeholder name that you can edit)`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can enter any formula that returns a result.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To edit an expression, click on it to select it, then click again or press `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Enter`), ` on your keyboard.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To delete an expression, click on it to select it, then press `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Backspace`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Delete`), ` on your keyboard.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Warning:`), ` Be careful when you evaluate a 4D expression modifying the value of one of the System Variables (for instance, the OK variable) because the execution of the rest of the method may be altered.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "contextual-menu-1"
    }
  }, `Contextual Menu`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Custom Watch Pane\u2019s context menu gives you access the 4D formula editor and other options:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "custom-watch-pane-context-menu",
    src: (__webpack_require__(24443)/* ["default"] */ .Z),
    width: "252",
    height: "284"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `New Expression`), `: This inserts a new expression and displays the 4D Formula Editor.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "custom-Watch-pane-context-menu",
    src: (__webpack_require__(15806)/* ["default"] */ .Z),
    width: "662",
    height: "382"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information on the Formula Editor, see the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    href: "https://doc.4d.com/4Dv19/4D/19/4D-Design-Reference.100-5416591.en.html",
    target: "_blank"
  }, `4D Design Reference manual.`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Insert Command`), `: Shortcut for inserting a 4D command as a new expression.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Delete All`), `: Removes all expressions from the Custom Watch Pane.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Standard Expressions`), `: Copies the Watch Pane's list of expressions.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `This option is not available in remote debugging mode (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19/4D/19/Debugging-from-Remote-Machines.300-5422483.en.html"
    }
  }, `Debugging from Remote Machines`), `).`)), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Collapse All/Expand All`), `: Collapses or Expands all the hierarchical lists.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Show Types`), `: Displays the type of each item in the list (when appropriate).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Show Field and Table Numbers`), `: Displays the number of each table or field of the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Fields`), `. Useful if you work with tables, field numbers or pointers using the commands such as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Table`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Field`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Show Icons`), `: Displays an icon denoting the type of each item.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Sorted Tables and Fields`), `: Displays the table and fields in alphabetical order.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Show Integers in Hexadecimal`), `: Displays numbers using hexadecimal notation. To enter a numeric value in hexadecimal, type 0x (zero + "x"), followed by the hexadecimal digits.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "source-code-pane"
    }
  }, `Source Code Pane`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The Source Code Pane shows the source code of the method or function currently being traced.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This area also allows you to add or remove `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Debugging/breakpoints"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "a"
  }, `break points`)), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "tool-tip"
    }
  }, `Tool tip`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Hover your pointer over any expression to display a tool tip that indicates:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the declared type of the expression`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the current value of the expression`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "source-code-pane",
    src: (__webpack_require__(70517)/* ["default"] */ .Z),
    width: "857",
    height: "271"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This also works with selections:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "source-code-pane-tip",
    src: (__webpack_require__(48102)/* ["default"] */ .Z),
    width: "861",
    height: "277"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "adding-expressions-to-the-custom-watch-pane"
    }
  }, `Adding expressions to the Custom Watch Pane`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can copy any selected expression from the Source Code Pane to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#custom-watch-pane"
    }
  }, `Custom Watch Pane`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `In the Source code pane, select the expression to evaluate`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Do one of the following:`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Drag and drop the selected text to the Expression area of the Custom Watch Pane`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Press `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Ctrl+D`), ` (Windows) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Cmd+D`), ` (macOS)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Right-click the selected text `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `>`), ` `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Copy to Expression Pane`))))), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "program-counter"
    }
  }, `Program Counter`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The yellow arrow in the left margin of the Source Code pane is called the program counter. It marks the next line to be executed.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, the program counter line (also called the running line) is highlighted in the debugger. You can customize the highlight color in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Preferences/methods"
    }
  }, `Methods page of the Preferences`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "moving-the-program-counter"
    }
  }, `Moving the program counter`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For debugging purposes, you can move the program counter for the method at the top of the call chain (the method currently executing). To do so, click and drag the yellow arrow to another line.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This only tells the debugger to pursue tracing or executing from a different point. It does not execute lines or cancel their execution. All current settings, fields, variables, etc. are not impacted.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `  // ...
 If(This condition)
    DO_SOMETHING
 Else
    DO_SOMETHING_ELSE
 End if
  // ...
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Say the program counter is set to the line `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `If (This condition)`), `.
When you click the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Step over`), ` button, the program counter moves directly to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `DO_SOMETHING_ELSE`), ` line.
To examine the results of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `DO_SOMETHING`), ` line, you can move the program counter to that line and execute it.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "contextual-menu-2"
    }
  }, `Contextual menu`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The contextual menu of the Source Code Pane provides access to several functions that are useful when executing methods in Trace mode:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    alt: "source-code-pane-context-window",
    src: (__webpack_require__(64709)/* ["default"] */ .Z),
    width: "826",
    height: "742"
  })), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Goto Definition`), `: Goes to where the selected object is defined. This command is available for:`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Project methods:`), ` displays method contents in a new window of the Code Editor`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Fields:`), ` Displays field properties in the inspector of the Structure window`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Tables:`), ` Displays table properties in the inspector of the Structure window`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Forms:`), ` Displays form in the Form editor`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `Variables`), ` (local, process, interprocess or $n parameter): displays the line in the current method or among the compiler methods where the variable is declared`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Search References`), ` (also available in Code Editor): Searches all project objects (methods and forms) in which the current element of the method is referenced. The current element is the one selected or the one where the cursor is located. This can be the name of a field, variable, command, string, and so on. Search results are displayed in a new standard results window.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Copy`), `: Standard copy of the selected expression to the pasteboard.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Copy to Expression Pane`), `: Copy the selected expression to the Custom Watch Pane.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Run to Cursor`), `:Executes statements found between the program counter and the selected line of the method (where the cursor is found).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Set Next Statement`), `:Moves program counter to the selected line without executing this line or any intermediate ones. The designated line is only run if the user clicks on one of the execution buttons.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Toggle Breakpoint`), ` (also available in Code Editor): Alternately inserts or removes the breakpoint corresponding to the selected line. This modifies the breakpoint permanently: for instance, if you remove a breakpoint in the debugger, it no longer appears in the original method.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Edit Breakpoint`), ` (also available in Code Editor): Displays the Breakpoint Properties dialog box. Any changes made modify the breakpoint permanently.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "find-nextprevious"
    }
  }, `Find Next/Previous`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Specific shortcuts allow you to find strings identical to the one selected:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To search for the next identical strings, press `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Ctrl+E`), ` (Windows) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Cmd+E`), ` (macOS)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `To search for the previous identical strings, press `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Ctrl+Shift+E`), ` (Windows) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Cmd+Shift+E`), ` (macOS)`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The search is carried out only if you select at least one character in the Source code pane.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "shortcuts"
    }
  }, `Shortcuts`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This section lists all the shortcuts available in the debugger window.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The tool bar also has `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#tool-bar-buttons"
    }
  }, `shortcuts`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "watch-pane--custom-watch-pane"
    }
  }, `Watch Pane & Custom Watch Pane`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Double-click`), ` an item in the Watch Pane to copy it to the Custom Watch Pane`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Double-Click`), ` in the Custom Watch Pane to create a new expression`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "source-code-pane-1"
    }
  }, `Source Code Pane`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Click in the left margin to set or remove break points.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Alt+Shift+Click`), ` (Windows) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Option+Shift+Click`), ` (macOS) sets a temporary break point.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Alt-Click`), ` (Windows) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Option-Click`), ` displays the Edit Break window for a new or existing break point.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A selected expression or object can be copied to the Custom Watch Pane by simple drag and drop.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Ctrl+D`), ` (Windows) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Cmd+D`), ` (macOS) key combinations copy the selected text to the Custom Watch Pane.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Ctrl+E`), ` (Windows) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Cmd+E`), ` (macOS) key combinations find the next strings identical to the one selected.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Ctrl+Shift+E`), ` (Windows) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Cmd+Shift+E`), ` (macOS) key combinations find the previous strings identical to the one selected.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "all-panes"
    }
  }, `All Panes`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Ctrl`), ` + `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `+/-`), ` (Windows) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Command`), ` + `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `+/-`), ` (macOS) increases or decreases the font size for a better readability. The modified font size is also applied to the Code Editor and is stored in the Preferences.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Ctrl + `, `*`), ` (Windows) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Command + `, `*`), ` (macOS) forces the updating of the Watch Pane.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When no item is selected in any pane, press `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Enter`), ` to step over.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When an item value is selected, use the arrows keys to navigate through the list.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When editing an item, use the arrow keys to move the cursor. Use Ctrl-A/X/C/V (Windows) or Command-A/X/C/V (macOS) as shortcuts to the Select All/Cut/Copy/Paste menu commands of the Edit menu.`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 51072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA80AAADnCAIAAACrCyNvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABhgSURBVHhe7d0xj9zGocDx+1ApHnQQ4CKlCgEpUwYpjATRIo0/QL5AkCbFFrIBIQKivEJwf6lTRQlS3hd4VVK5ODvymxkOyRku9+5273Sa2f39sLDJ2eGQLrj8e306X/wHAAB4bDobAAAen84GAIDHp7MBAODx6WwAAHh8OhsAAB6fzgYAgMenswEA4PHpbAAAeHyP1dnffnnxP3/4e711DwdMDlMvvvw27wAAQNPu7OyYt6NbMvc+nf33P/xPXujiqCgHAIBe3NrZqbHnuP77H77c28R3dXZq7GL82y/TujobAICTdEtn72/g4ovpscJv7+x4wOqX4Wnyt+Ny83F3n2E6aHVdAAD4rPZ39lovD+bvtcOc3LmLCq6P25vZaYHiwHHWnWdYOwgAAJpxa2ffHbDTpKqCVzp7OZRVk1eOvPsMqwcBAMDndcz32em9yf06e0+zV5PLHL/3GfY3PAAAfDZH/Hx2OR6279HZ+0O7mjwl8yFn0NkAADTols5OdVw28/BT02Uzh+K9V2cPM8vUXvt9I2MyH3QGnQ0AQINu6+wo9XE29mzq7+TLL7+8Z2cH82FB7ug9yXzAGXQ2AAANuquzAQCAw+lsAAB4fDobAAAen84GAIDHV3X2u//91svLy8vLy8vLy8vr6FcO693O/hEA+Hx+//vf//vf/847QG90NgA0SmdD13Q2ADRKZ0PXdDYANEpnQ9cO7uyPHz/mrdHuyO1evXr1k8KzZ8/evHmT3wMARjobunZYZ79+/fqrr776/vvv8/6PP4btMPL111/n/XsIbZ23krDmy5cv3759m/cBgERnQ9cO6OwffvghJPUXX3wxpfYQ2cNIeHeYdqdFZ7979+7Dhw8vXrx4//59Htrjent5sbnKO7OrzcXa8EKYdfek+9tzLffzyNcCwInS2dC1w77Pvrm5mcL6u+++m7bLb7jvtNvZwXa7ff78eR4qhCS93F4P24/UtrHLV9aJq9++/Ce4FgDYT2dD1w7r7GD6DvvFixdHRPYtFv09+DSdfRmMq2ZhdDW/C5/gWgBgP50NXTu4s4Pyx0XuE9m/+k31Bx8nYTzPSMJI3hrFb5iz2KVD2w5BnIeiOX/T1ja+Pw8M0mH5gLi13dahHZZOR875G082Hlvt3notQTGzOsXqtQDAfjobunZMZwchr7/55pubm5u8f6sQ0L/9x83uaxHWu50dhCStvkMekzZul3U9Z/VUsEMKD9vlO0PlDn/NhiWKoWFgsVkM7ruWOGdapLiAfdcCAPvpbOjakZ19kKGzw19LR3b21KfzznoI1ztpNx+bt4r355FhSnWiebg4Ys+11AfOh5ZHBtOKAHALnQ1de9LOHr7Gnl4P6uw5VucpVc4uYnbeHbfCcmn2+Pd5SjxRZXp/Wn79WqalsnF/Pnmy2AWAVTobuvbUnf3Tn//yF3/+2xN1dtG8xbHTgcPWYjduLHM5K1dcv5Z6dB4vj9ydBQCrdDZ07Uk7e/Kz3/1x6uxhJNhsNsP80t1tW0ypczbsTdPj9rgzHZiHy728Gc9UrJSF9++6ljg8jRdz4onG4XTS+VgA2ENnQ9eerrOH1y3fZ69L5Tp06Z62nfN33hrkY9Ph0/T5wCDMmI8o34g7k3H07msJ5pMWE/ZdCwDsp7Oha0/d2eXrXp0NAOdKZ0PXnqKz9/3+7F+/WvlBEQBgoLOha0/R2QDAEXQ2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dK2Pzr7abK7yJgCci8fu7KvNxe3P0+vt5UVwub0OU++Ye6ewWFgo78A5ar+z452ezTd8/iCoxgDgtCw7OzwS63I9MGXv6uyd9R9EZ3P2Gu/s2NPhIyF9n3293eYPh/lzIL7vJgbgNH2Gzn7Er690Nmev8c7Onyj1z41UHwM7nzkAcCIO6Ozhi6kwISlnjWPD29MDNB4wjtf7+ck7LpK2rsZ3i+fxcoVkGkzH1FcL56bxzk6fDpfbbdnZ4RYu7tt4QxdvAsDJOLCzy2QuhsenZHykjjvFSvVmMTmPpsOK7dtWKAbTBY07cJ5a7+xg+OiY7vzyJo7C7vQWAJyQg7/PToPFzp5HZjW5eJAWj9T5yGqNcWd1hXow7pYnh/PTQWcHV5tg/Nfi+r5d3NQAcDKO7ewxfKe/Z+NunFzJixTT51PNW8F4wtUV5qtJFrtwfrrp7PjnIOd7e/7UqG5/ADghy86un4DBHMY7D8e0Uz8kpznjE3VpXq44slpjPHJ1hfoaFieHM9R4Z+ffMRI7u7h75zt3cUsDwAlZdnZ67M3tGh6H00OwfiCGd4adckrczjv1OpPpsLSZJ8xbQThw2FldoRyM22vngDPS+vfZ6UNhUN6s07A7GICTtdPZQfFgLB+CMWtXOjv3blL/vpFynSKu79vZwdoK86DfNwI9/dwIAJyXtc4GutFHZwPAGdLZ0DWdDQCN0tnQNZ0NAI3S2dA1nQ0AjdLZ0DWdDQCN0tnQNZ0NAI3S2dA1nQ0AjdLZ0DWdDQCN0tnQNZ0NAI3S2dC1gzv748ePeWu0O3K7V69e/aTw7NmzN2/e5PcAgJHOhq4d1tmvX7/+6quvvv/++7z/449hO4x8/fXXef8eQlvnrSSs+fLly7dv3+Z9ACDR2dC1Azr7hx9+CEn9xRdfTKk9RPYwEt4dpt1p0dnv3r378OHDixcv3r9/n4c+r+vt5eX2Ou88grDexeYq7xzosa8FgJ7obOjaYd9n39zcTGH93XffTdvlN9x32u3sYLvdPn/+PA99XnPbxkK+WOncq83qcCHMmCbobACOo7Oha4d1djB9h/3ixYsjIvsWi/7+bKrODpaRnOpbZwPwyels6NrBnR2UPy5yn8j+1W+qP/g4CeN5RhJG8lZhiNpoStX4bXJSFug8bxydR4qJqX+vxneK+p1mp7fzAalyt5u6ksMSm22Vv4sLKk6cjoz7m6tpUrHYNFaNrl8LAOdHZ0PXjunsIOT1N998c3Nzk/dvFQL6t/+42X0twnqls1MWV5k5ROtiM26N8662aSMm7NiuxTGpbPPUYkpxnhS5eSdsh63hr+nNca1iaBhYbpYXHofHM8XtefF5TjF/z7UAcH50NnTtyM4+yNDZ4a+le3V2Ua6Dsl/ju2ln/PtseVw4bNitjh93FrPn5fJW8f48kqesXlA9XBxe7FQHzodWk8sVATg/Ohu69qSdPXyNPb3u7uwg9GiU2zPvzeJ4GCzSNFrm6bRf1W3RtuXsebc8bIzj9Pd5yuoF1ecJk4vrWy41yvt7rwWA86OzoWtP3dk//fkvf/Hnvx3Q2YOxW5d1moxvzuq0LQ6rpo4Ru5g9z5krN20tfnA7ba1eUH2eevnxgOpK5hXryctZAJwVnQ1de9LOnvzsd3+cOnsYCTabzTB/xZSfITx3wzYOjjk6/Hx2nD/NK9q16taxbdOEcTgdmXemCXm4nDRurl5QdZ546DwjvDPslBddzI+zi9P4+WyAM6azoWtP19nD65bvs1fEFh3MtTkU72AenWeWdZ1VlVutNO1Mx69/bR2EGdM61RurF5QH4xFxs7qCaWe+6Hm1YPVaADg/Ohu69tSdXb7u7mwAOGM6G7r2FJ297/dn//rV/h8UAYCzp7Oha0/R2QDAEXQ2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dK2Pzr7abK7yJgCci8fu7KvNxe3P0+vt5UVwub0OU++Ye6ewWFgo78A5ar+z452ezTd8/iCoxgDgtCw7OzwS63I9MGXv6uyd9R9EZ3P2Gu/s2NPhIyF9n3293eYPh/lzIL7vJgbgNH2Gzn7Er690Nmev8c7Onyj1z41UHwM7nzkAcCIO6Ozhi6kwISlnjWPD29MDNB4wjtf7+ck7LpK2rsZ3i+fxcoVkGkzH1FcL56bxzk6fDpfbbdnZ4RYu7tt4QxdvAsDJOLCzy2QuhsenZHykjjvFSvVmMTmPpsOK7dtWKAbTBY07cJ5a7+xg+OiY7vzyJo7C7vQWAJyQg7/PToPFzp5HZjW5eJAWj9T5yGqNcWd1hXow7pYnh/PTQWcHV5tg/Nfi+r5d3NQAcDKO7ewxfKe/Z+NunFzJixTT51PNW8F4wtUV5qtJFrtwfrrp7PjnIOd7e/7UqG5/ADghy86un4DBHMY7D8e0Uz8kpznjE3VpXq44slpjPHJ1hfoaFieHM9R4Z+ffMRI7u7h75zt3cUsDwAlZdnZ67M3tGh6H00OwfiCGd4adckrczjv1OpPpsLSZJ8xbQThw2FldoRyM22vngDPS+vfZ6UNhUN6s07A7GICTtdPZQfFgLB+CMWtXOjv3blL/vpFynSKu79vZwdoK86DfNwI9/dwIAJyXtc4GutFHZwPAGdLZ0DWdDQCN0tnQNZ0NAI3S2dA1nQ0AjdLZ0DWdDQCN0tnQNZ0NAI3S2dA1nQ0AjdLZ0DWdDQCN0tnQNZ0NAI3S2dA1nQ0AjdLZ0DWdDQCN0tnQtT46+2qzucqbAHAumuzs6+3lhacy3Ef7nX21uRhVt3W8zy8ut9d5FwBOzUM6Oz8+04OyeJQGD4zkT9rZ5VVD9xrv7Hwzp++zr7fb8baOt+HldrtxIwJwwh7Y2dNDMmw/Xhl/8u+zyyuHrjXe2fleW/+5ETciACft7s7eX9DlQ3JlVqrlbfxPw/nr4/SfifP2IK1wlYfn8aqzx6OCcUL9dJ73wlY9MVobrBeAjjXe2ekGjN9c62wAzs69vs9Oqbr7PCwfkmF7rbPzhKGV5+3xsGrhuDOsUXT2PFgOr525OGjeXB2sj4eutd7ZQbz3gvH2m7kRAThpy86OXTtYPhSHZ2U5uqjd2TCpDNs92/VjdnpjdyML84fdaWPaqpYKx6Wd1cGgGoeeddDZwdUm2Pm3dTciACftkJ/PjtVblnb5kAzbZRBHZSTv2V48ZsdFphlho3oMz/vj1Om8YaMWh1cHh8ke75yGbjo7/jnI+n52IwJw2u7X2UOvLp+I5UMybOeGnRQ9vW+7fsxOT+FpRnlYVJwlvBU254GVC9gzGNTnhY413tn5d4zEzl7ezm5EAE7cvf4c5HqsVg/JlaItn6p7tuPa43YczsvNM+LW6iJpb7PZzE/p1evcc/HllUPXWv8+O93kg52bzo0IwEk75OdGlsqHZPEwDdJwmcV7ttMK2/HQKYiroI472TSWxDeqh3Qxc35jddDjnZPRemcP1n+vHwCctMfq7OM8aIVQ0McerLM5GX10NgCcoQd2dvUt8eEe0rvh2KO+IXv4VUNDdDYANOohnf1wR3b2kMr+OzTobABo1uftbOCBdDYANEpnQ9d0NgA0SmdD13Q2ADRKZ0PXdDYANEpnQ9d0NgA0SmdD13Q2ADRKZ0PXdDYANEpnQ9d0NgA0SmdD1/ro7KuN/68UAGenyc6+3l76vz3CvbTf2cP/vzWZbut57Jj/IywAdOEhnZ0flek5WTxKgwdG8ift7PKq06nG53z9j+DxTx8a7+x8M6fvs6+32+G2vt5uxtsr3naf7GYHgM/qgZ09xWjYfryH5Sf/Pnu+8rqzi5PGa9DatK/xzs732v6fGyk/RgDgpNzd2fsLunxArsxKtbyNuZq/HU7pmrcHaYWrPDyPV509HhWME+on87wXtuqJ0drgfEhYfRwPg/U/QnUZ0KbGOzvdgJfb7b7OLu5AADgx9/o+O6Xq7sNwrtWVSM2BPEwYWnneHg+rFo47wxpF4M6D5fDamYuD5s3VwfL4MFqcf3w/Kw+BNrXe2UG8kYKVe6m8vwHg1Cw7Oz73Bsun3/CsLEfnWi2PC4ZJZaXu2S5XKN7Y3cjC/GF32pi2qqXCcWlndTCYx+vB8lzRyhC0pYPODq42Qf1v6+HucnsBcNIO+fnsWL3lk7Gs2JUiLSN5z3a5QjAuMs0IG+X7xf44dTpv2KjF4dXBYXJepzjDtNRkeXpoTzedHf8c5G3/VgsAp+Z+nT306rI551pdfWyGh+o0tme7XKHI2mlGeVhUnCW8FTbngZUL2DMYzOedzrkyeZ4FzWq8s/PvGImdPd/O+25MADgp9/pzkHueiWWHrjw4y0jesx3XHrfj8By/eTRurS6S9jabzRzCq9e55+LnKw+rjEvU/wjxyHlxaFXr32fHOykbb6h0W5fcaQCcpEN+bmRprtXqYRqk4TKL92ynFbbjoVPllrPLZ/I0lsQ3qudzMXN+Y3VwvvLw9ji68o8AzWu9swf7f68fAJysx+rs4zxohSKRD/XwK4dG9NHZAHCGHtjZD/zm9yG9G4496huyh181NERnA0CjHtLZD3dkZw+p7L9Dg84GgGZ93s4GHkhnA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ0TWcDQKN0NnStj86+2vj/SgFwdnQ2dK39zh7+/63JFNvz2DH/R1gA6MKis4sn4sjXUNCwxjv7ensZP0PS99nX223+NLna5rqObyttAE7Ubd9n5yck0K7GOzv8q3vs6L0/NxI+ZXQ2ACdqf2erbOhA452d/hvZ5Xa7p7NlNgAnbF9nq2zoQuudHcRPk8WPoOUhPzMCwClb72xfMkEnOujs4GoTrGR16m3/Rg/AaVrr7PwTlUD7uuns+OcgV/793b/UA3CydjtbZUNHGu/s/DtGYmfH766Hr66nXzeSPm98nw3AiVp2tsqGrrT+fXYM6Wz6aEk/LZKJbABOVt3Z/7f767M9BqFlrXf2YO/v9QOA07X+5yCBTvTR2QBwhnQ2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ07cjO/vjxY94CAD4NnQ1dO6az//nPf/71r3/973//m/cP9OrVq58Unj179ubNm/weADDS2dC1gzv748ePIbL/9Kc/HZ3aoa3zVvL69euXL1++ffs27wMAic6Grh3zfXbI64ek9qKz37179+HDhxcvXrx//z4PVa42F9Hm6np7eXG5vc7DTyxcxdHnDsdurvI2ANybzoauHdPZwUNSe7ezg+12+/z58zxUiHF9cKRWUZw6fXeJuPDtK1en1tkAPDmdDV07srODm5ubv/zlLyG1//Wvf+Whh1n09yDE7uF9u+zsy2CxSKpvnQ1Ay3Q2dO0pvs/+1W+qP/g4CeN5RhJG8tZoiOEkhOrcvSl6t/HN1L7pq+kkzxql2bFyt4taT/UeFpjzt1ojKE6djkynvBonFYsV56tOMS2wuYpXoLMBOJjOhq4d09mH/tBICOjf/uNm97UI693ODlIRD/kai7aI4DFdUwEXgRtUQ0PlVq07vF8MFQfMm/P5gjA8hXTczm8Um+X88tB05LQOANybzoauHdzZR/y+kaGzw19LD+zscXCRw4Pq/bAT3y7G5pHhuHqF9eHi8Hlneerx0GpysSIAHEJnQ9eO+T770N+fPVX18DX29Hqczg7CfrQ3itMb40rTilP+xoUrw/vz+YJqyZ2lsnF/Wnmw2AWA+9HZ0LVjOjs46P8HWXb2T3/+y1/8+W+P3NmDebR6f67ctLXYjRvLXM7m8wXVkuMB1YxgXLGavDMLAO5HZ0PXjuzsg0ydPfnZ7/44dfYwEmw2m2F+qWjguVfrjh3teX+M32EzKPbyZjxyd8Gqj6slp4uKU6Y5xfx4ouI0fj4bgGPobOja03X28Lrl++xVU9KWHVtFb+rYpArhOJBmh/enyi1Wq98oVimieBhMR4TNavlpJ58qmlcrh/2+EQCOpLOha0/d2eXrPp0NAGdLZ0PXnqKz9/3+7F+/WvlBEQBgoLOha0/R2QDAEXQ2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ0TWcDQKN0NnRNZwNAo3Q2dE1nA0CjdDZ07bbO9vLy8vLy8vLy8vI6+pXDetHZAADAo9DZAADw2P7zn/8HPITqHrU0StwAAAAASUVORK5CYII=");

/***/ }),

/***/ 41977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 33025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/contextual-menu-829abb17e9f6b2cdebf97f0aa41f85b5.png");

/***/ }),

/***/ 50820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 24443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/custom-watch-pane-context-menu-73abdf1448ec03ab93c98ca99a43aad2.png");

/***/ }),

/***/ 15806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/custom-watch-pane-formula-editor-f68a94ba56402aee3b5a7059537e6c08.png");

/***/ }),

/***/ 27622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 73713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/debugger-window-intro-e4b3f7dd5e1ab4952ad5abb5ff4953bc.png");

/***/ }),

/***/ 87970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 46592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/executionToolbarButtons-c75abe279c180b6b4dd2225ea234c154.png");

/***/ }),

/***/ 75715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAACGCAIAAADPZPbfAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGGQ46O8WIEKUAAAdrSURBVHic7Z1Pjt0oEMZ5oz7RLOcaWeQG2eQ8s+icoCN1rjHLuZJjyRqmRBVFAWXA9vdT5+kZQ1GGjz/G5Pn1+fEewLN52/99+fptthtgGr9+/vhjtg9gPhABgAgARAACRABCpwj2iaVyWGvq+LNk5Mh5li/EKj3BcZuKm9UpnCKCpFnzw6A2wRifxjEa5J9JHN3yM3lzt7gXKG3Q9DB+T+JweBIekjOoG1csPxZ/EQRJB0mEznLXDaJSa/EXQWya4bSRHtXsy1kTQ7Ge3Ifeh4/lXnT1BHtN02qgfUAg3UASIhInbmKcaGT/YjTI3aMZcfce3bt8frxvj+FRF2tkL5NV1gnARJ4lgkf3+XmeJQIgAhEAiABABCBABCAki0VYgHsO9EbpLXcCPAcMBwAiABABCBABCBABCBABCBABCBBBA6/Xa7YLzjhsNKWFsm2bHlOPUGuwwTjPKKZKDp9Drwgait4CrRij/QdWnhddIsjVUGzK/CxtbUq0yH4q5sLj0xAeLYbTw5z9+Jm7BD4KWPy/BP7/74Aqg6tEPGVp7jy+mCqJpmTanNdhttb/lfERwZg2IbbF/hxzemrw56L4iID3w2cgdioTZ3OXbv2UrlvEZMQ9g1yfT33oz6XTyNW7hN6egOuAhvC2GxuuEi1I4wuPLyZ30SXPq+oyL4fDcCBOuS2Rc9GM4blD5b5ftyAasUS+Oqf81/S53KaBDuOGIkDd14JnBwAiABABCBABCBABCC4iyC3O+K6jXX1VbmV6RZAs6yqPcZNUbZVqTEWjQT1FPIeDAcXdsAaAZYMinptKcgvsSTXQ3R/iNhAxhKcV4/M142KSwIQi+mPf3tIWYSKrrBjyDRrKlg3LXhUliSULfop/CUwcubyUCCuwigg6WW0kKu5/WUoHo0UQ92bFw/6yELeUzUXf/zJ9O0zChHWCjTA+98EoM491Lr+rJ3DcgVmcSfF843dlx4eyJ6XWn1zuuj/GaexcPIcDyyUVd4LoMXPxLdtDlCTG3L3iL1L3kd7hQF8RWu1qgYjDnCBX03YFrLZz62naxQMkABEAiAAEiAAEiACEC20qaWC6A1fB80cqxHW03FNa8Tbs1KUFy2PuTrMXvbd0WzE0rhZ7FX0D/EGwlxsNy+RL4bapRLx4vcrFNkTX/PmSezSopM05k/OfpkqeOCgOWMzmnhSstgPl3F8qKcLbkNiqxA0dxrR2N5Jcig4oXGsHirMIfD3mM7tiE/TKusoB3lKrCmH6DhRPEbj7WluUvDsd40DnVYvPGEfuQHFbJxg5sR/PGAdm7UDx31QST4XMHlExnBoMma0ZFmcar6RksLkOuJFtvR0obsNBQ88pfs9FqE2bc4kn5MmbDRpT6RFG9gEH2FQC1thUAuaCB0gAIgB0Yvjn938m+gHG8+/ffx1f0BMAiAC4iCD2KsbwYXQ6MN3/YfQuFu0lFScTsdSOkP2TnhXjKNbcoZXKc3HJWs9iWdxWDBM15IpAVMYwFA+9XLIUwmp0iYBep3jBepWL7eYIPA6TbuMwFT9zaXPO5Pynn0EaBXhe9oxyxnM+N0Tox3k/Aa1CC7zdiC2JFiKXnZ6Wu6fE5KNbMcSoAzGhnrsewRFnEfCr7YE3St1scSqn6KbTMX5K7yPtlgfoYOmfq6ktPt6FnoTiWGcNiTOV2L8mhz0ZUdzWCU4t92Xv1s5zTLnRWKsnoIMWnawpQyYfVrnB8J/qqyZByWxRpGiQG9FDquqDJ0xCeIQBs8Kd1+fH+5ev35rt6kPUhW6TLNzvcvbPXz9/9M4JlJvA2xTZSe1vHRwmhkrX2m98BW5zITnwAAlABIAOB8vehoGzQU8AIALgIoL9RrMqHKxGrwj2mj7WmmjI8WUP5zrYQ+JfVS6dfgIF5wdIltqKouECKiYBZ2AVgVhhSeBxSHVwHOaqkJ6l/Ue0pkQLrKfJdUjxVHTPkmNbhKvy+fG+ldjjiNFoYPyexLQccjsN0ZSMYmTRSSVHY4RLs1+IPCegzcg+HseRvmEI5xOFM+YBVU226NJtZirZ4SDp24vF1zDSi8np4ZH7rM5Wd2kFD73Q7g7OHvNy84z4fZHCVVxaxMNO5J7A2Afo875QquZ4imcn5i7ecyool8BzTEKKLt1nVhjUiaFxzth8toei5dtM3M5mLyjtFtGicaUzaJsc6Nyq/S3D/9vLwDPZ2xUeIAE8RQQQAQgQAQgQAQizXn8z/beKOQu6NAy319/wl8tslS85EU3lkju+dAa/vDr6hdmB/MY1TcI1FMO5Wd9qe7gCQudwUKyMjf3yMX1LiV7TRQvcmQN+KIbTEN0Oj3MznF96cXypalsuzVp8VU0cXJIvivh6XnlzXU75qXtLyxZflLBCcde+c+cGTPilko280cw4KIxkBR8G4/n6Gy9TidmkVvgs4STuPQ+guL3+ZpNeFpN7/Y14SowmxtnYexHF3BuMV9m5DaNvEZWpVgyx21FCuLWc/WS2mLNzY/D6GzDp9TcTxQFdcvAACUAEACIAASIA4dhtPNsHMJnfayixgECg0rUAAAAASUVORK5CYII=");

/***/ }),

/***/ 47942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 70517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/sourceCodePane-46806adc0b253f2852231caa50cb0fcb.png");

/***/ }),

/***/ 64709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/sourceCodePaneContext-39dabe7c18d5e589450f3e2a3e2b7e05.png");

/***/ }),

/***/ 48102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/sourcePaneTip-2ba1e36ef26a6074e3e5ae9aaaa60612.png");

/***/ }),

/***/ 89819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/watchPane-9dcdc18f4b26106c3158a88cf6f7c188.png");

/***/ })

};
;