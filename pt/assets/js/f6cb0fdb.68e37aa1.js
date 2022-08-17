exports.id = 13610;
exports.ids = [13610];
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

/***/ 57210:
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
var subform_overview_exports = {};
__export(subform_overview_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(subform_overview_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "subformOverview",
  title: "Subform"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "FormObjects/subformOverview",
  "id": "version-19-R6/FormObjects/subformOverview",
  "title": "Subform",
  "description": "A subform is a form included in another form.",
  "source": "@site/versioned_docs/version-19-R6/FormObjects/subform_overview.md",
  "sourceDirName": "FormObjects",
  "slug": "/FormObjects/subformOverview",
  "permalink": "/docs/pt/FormObjects/subformOverview",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "subformOverview",
    "title": "Subform"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Stepper",
    "permalink": "/docs/pt/FormObjects/stepper"
  },
  "next": {
    "title": "Tab Controls",
    "permalink": "/docs/pt/FormObjects/tabControl"
  }
};
const assets = {};
const toc = [{
  value: "Terminology",
  id: "terminology",
  level: 2
}, {
  value: "List subforms",
  id: "list-subforms",
  level: 2
}, {
  value: "Page subforms",
  id: "page-subforms",
  level: 2
}, {
  value: "Using the bound variable or expression",
  id: "using-the-bound-variable-or-expression",
  level: 3
}, {
  value: "Synchronizing parent form and subform (single value)",
  id: "synchronizing-parent-form-and-subform-single-value",
  level: 3
}, {
  value: "Updating the contents of a subform",
  id: "updating-the-contents-of-a-subform",
  level: 4
}, {
  value: "Updating the contents of a parent form",
  id: "updating-the-contents-of-a-parent-form",
  level: 4
}, {
  value: "Synchronizing parent form and subform (multiple values)",
  id: "synchronizing-parent-form-and-subform-multiple-values",
  level: 3
}, {
  value: "Using pointers (compatibility)",
  id: "using-pointers-compatibility",
  level: 3
}, {
  value: "Advanced inter-form programming",
  id: "advanced-inter-form-programming",
  level: 3
}, {
  value: "CALL SUBFORM CONTAINER command",
  id: "call-subform-container-command",
  level: 4
}, {
  value: "EXECUTE METHOD IN SUBFORM command",
  id: "execute-method-in-subform-command",
  level: 4
}, {
  value: "Supported Properties",
  id: "supported-properties",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A subform is a form included in another form.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "terminology"
    }
  }, `Terminology`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In order to clearly define the concepts implemented with subforms, here are some definitions for certain terms used:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Subform`), `: a form intended for inclusion in another form, itself called the parent form.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Parent form`), `: a form containing one or more subform(s).`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Subform container`), `: an object included in the parent form, displaying an instance of the subform.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Subform instance`), `: the representation of a subform in a parent form. This concept is important because it is possible to display several instances of the same subform in a parent form.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `List form`), `: instance of subform displayed as a list.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Detail form`), `: page-type input form associated with a list-type subform that can be accessed by double-clicking in the list.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "list-subforms"
    }
  }, `List subforms`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A list subform lets you enter, view, and modify data in other tables. You usually use list subforms in databases in which you have established One to Many relations. A list subform on a form in a related One table lets you view, enter, and modify data in a related Many table. You can have several subforms coming from different tables in the same form. However, it is not possible to place two subforms that belong to the same table on the same page of a form. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, a Contacts manager database might use a list subform to display all the telephone numbers for a particular contact. Although the telephone numbers appear on the Contacts screen, the information is actually stored in a related table. Using a One to Many relation, this database design makes it easy to store an unlimited number of telephone numbers per contact. With automatic relations, you can support data entry directly into the related Many table without programming.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Although list subforms are generally associated with Many tables, a subform instance can display the records of any other database table.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also allow the user to enter data in the List form.
Depending on the configuration of the subform, the user may display the detail form by double-clicking on a subrecord or by using the commands for adding and editing subrecords.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `4D offers three standard actions to meet the basic needs for managing subrecords: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Edit Subrecord`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Delete Subrecord`), `, and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Add Subrecord`), `. When the form includes several subform instances, the action will apply to the subform that has the focus. `)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "page-subforms"
    }
  }, `Page subforms`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Page subforms can display the data of the current subrecord or any type of pertinent value depending on the context (variables, pictures, and so on). One of the main advantages of using page subforms is that they can include advanced functionalities and can interact directly with the parent form (widgets). Page subforms also have their own specific properties and events; you can manage them entirely by programming.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The page subform uses the input form indicated by the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesSubform#detail-form"
    }
  }, `Detail Form`), ` property. Unlike a list subform, the form used can come from the same table as the parent form. It is also possible to use a project form. When executed, a page subform has the same standard display characteristics as an input form.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `4D Widgets are predefined compound objects based upon page subforms. They are described in detail in a separate manual, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv19/4D/19/4D-Widgets.100-5462909.en.html"
    }
  }, `4D Widgets`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-the-bound-variable-or-expression"
    }
  }, `Using the bound variable or expression`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can bind `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesObject#variable-or-expression"
    }
  }, `a variable or an expression`), ` to a subform container object. This is very useful to synchronize values from the parent form and its subform(s). `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, 4D creates a variable or expression of `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesObject#expression-type"
    }
  }, `object type`), ` for a subform container, which allows you to share values in the context of the subform using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Form`), ` command (`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#using-the-subform-bound-object"
    }
  }, `see below`), `). However, you can use a variable or expression of any scalar type (time, integer, etc.) especially if you only need to share a single value:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Define a bound variable or expression of a scalar type and call the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `OBJECT Get subform container value`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `OBJECT SET SUBFORM CONTAINER VALUE`), ` commands to exchange values when `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/pt/Events/onBoundVariableChange"
    }
  }, `On Bound Variable Change`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/pt/Events/onDataChange"
    }
  }, `On Data Change`), ` form events occur. This solution is recommended to synchronize a single value.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Define a bound variable or expression of the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `object`), ` type and use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Form`), ` command to access its properties from the subform. This solution is recommended to synchronize several values.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "synchronizing-parent-form-and-subform-single-value"
    }
  }, `Synchronizing parent form and subform (single value)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Binding the same variable or expression to your subform container and other objects of the parent form lets you link the parent form and subform contexts to put the finishing touches on sophisticated interfaces. Imagine a subform representing a clock, inserted into a parent form containing an enterable variable of the Time type:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(35936)/* ["default"] */ .Z),
    width: "1190",
    height: "619"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the parent form, both objects (time variable and subform container) `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `have the same value as `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "strong"
  }, `Variable or Expression`)), `. It can be a variable (e.g. `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `parisTime`), `), or an expression (e.g. `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Form.parisTime`), `). `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the subform, the clock object is managed through the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Form.clockValue`), ` property.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "updating-the-contents-of-a-subform"
    }
  }, `Updating the contents of a subform`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Case 1: The value of the parent form variable or expression is modified and this modification must be passed on to a subform. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Form.parisTime`), ` changes to 12:15:00 in the parent form, either because the user entered it, or because it was updated dynamically (via the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Current time`), ` command for example). This triggers the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/Events/onBoundVariableChange"
    }
  }, `On Bound Variable Change`), ` event in the subform's Form method. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following code is executed:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Subform form method
If (Form event code=On Bound Variable Change) //bound variable or expression was modified in the parent form
    Form.clockValue:=OBJECT Get subform container value //synchonize the local value
End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `It updates the value of `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Form.clockValue`), ` in the subform:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(3885)/* ["default"] */ .Z),
    width: "1501",
    height: "672"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/Events/onBoundVariableChange"
    }
  }, `On Bound Variable Change`), ` form event is generated:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `as soon as a value is assigned to the variable/expression of the parent form, even if the same value is reassigned`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `if the subform belongs to the current form page or to page 0.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that, as in the above example, it is preferable to use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OBJECT Get subform container value`), ` command which returns the value of the expression in the subform container rather than the expression itself because it is possible to insert several subforms in the same parent form (for example, a window displaying different time zones contains several clocks). `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Modifying the bound variable or expression triggers form events which let you synchronize the parent form and subform values:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/pt/Events/onBoundVariableChange"
    }
  }, `On Bound Variable Change`), ` form event to indicate to the subform (form method of subform) that the variable or expression was modified in the parent form.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/pt/Events/onDataChange"
    }
  }, `On Data Change`), ` form event to indicate to the subform container that the variable or expression value was modified in the subform.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "updating-the-contents-of-a-parent-form"
    }
  }, `Updating the contents of a parent form`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Case 2: The contents of the subform are modified and this modification must be passed on to the parent form. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Inside the subform, the button changes the value of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Form.clockValue`), ` expression of type Time attached to the clock object. This triggers the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/Events/onDataChange"
    }
  }, `On Data Change`), ` form event inside the clock object (this event must be selected for the object), which updates the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Form.parisTime`), ` value in the main form. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following code is executed:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// subform clock object method
If (Form event code=On Data Change) //whatever the way the value is changed
    OBJECT SET SUBFORM CONTAINER VALUE(Form.clockValue) //Push the value to the container
End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(4903)/* ["default"] */ .Z),
    width: "1501",
    height: "619"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Everytime the value of `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Form.clockValue`), ` changes in the subform, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Form.parisTime`), ` in the subform container is also updated.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If the variable or expression value is set at several locations, 4D uses the value that was loaded last. It applies the following loading order: 1-Object methods of subform, 2-Form method of subform, 3-Object methods of parent form, 4-Form method of parent form`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "synchronizing-parent-form-and-subform-multiple-values"
    }
  }, `Synchronizing parent form and subform (multiple values)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, 4D binds a variable or expression of `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesObject#expression-type"
    }
  }, `object type`), ` to each subform. The contents of this object can be read and/or modified from within the parent form and from the subform, allowing you to share multiple values in a local context.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When bound a the subform container, this object is returned by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Form`), ` command directly in the subform. Since objects are always passed by reference, if the user modifies a property value in the subform, it will automatically be saved in the object itself and thus, available to the parent form. On the other hand, if a property of the object is modified by the user in the parent form or by programming, it will be automatically updated in the subform. No event management is necessary.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, in a subform, inputs are bound to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Form`), ` object properties (of the subform form):`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(15678)/* ["default"] */ .Z),
    width: "325",
    height: "65"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the parent form, you display the subfom twice. Each subform container is bound to an expression which is a property of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Form`), ` object (of the parent form):`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(13246)/* ["default"] */ .Z),
    width: "649",
    height: "321"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The button only creates `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `mother`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `father`), ` properties in the parent's `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Form`), ` object:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `//Add values button object method
Form.mother:=New object("lastname"; "Hotel"; "firstname"; "Anne")
Form.father:=New object("lastname"; "Golf"; "firstname"; "F\xE9lix")
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When you execute the form and click on the button, you see that all values are correctly displayed:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(24941)/* ["default"] */ .Z),
    width: "355",
    height: "318"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you modify a value either in the parent form or in the subform, it is automatically updated in the other form because the same object is used:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(42149)/* ["default"] */ .Z),
    width: "349",
    height: "116"
  }), `
`, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(84041)/* ["default"] */ .Z),
    width: "354",
    height: "123"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-pointers-compatibility"
    }
  }, `Using pointers (compatibility)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In versions prior to 4D v19 R5, synchronization between parent forms and subforms was handled through `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `pointers`), `. For example, to update a subform object, you could call the following code:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `// Subform form method
If (Form event code=On Bound Variable Change) 
    ptr:=OBJECT Get pointer(Object subform container) 
    clockValue:=ptr-> 
End if
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `This principle is still supported for compatibility but is now deprecated since it does not allow binding expressions to subforms.`), ` It should no longer be used in your developments. In any cases, we recommend to use the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#synchronizing-parent-form-and-subform-multiple-values"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `Form`), ` command`), ` or the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#synchronizing-parent-form-and-subform-single-value"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `OBJECT Get subform container value`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `OBJECT SET SUBFORM CONTAINER VALUE`), ` commands`), ` to synchronize form and subform values. `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "advanced-inter-form-programming"
    }
  }, `Advanced inter-form programming`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Communication between the parent form and the instances of the subform may require going beyond the exchange of a values through the bound variable. In fact, you may want to update variables in subforms according to the actions carried out in the parent form and vice versa. If we use the previous example of the "dynamic clock" type subform, we may want to set one or more alarm times for each clock. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D has implemented the following mechanisms to meet these needs:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Calling of a container object from the subform using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `CALL SUBFORM CONTAINER`), ` command`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Execution of a method in the context of the subform via the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `EXECUTE METHOD IN SUBFORM`), ` command`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `GOTO OBJECT`), ` command looks for the destination object in the parent form even if it is executed from a subform.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "call-subform-container-command"
    }
  }, `CALL SUBFORM CONTAINER command`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `CALL SUBFORM CONTAINER`), ` command lets a subform instance send an `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/Events/overview"
    }
  }, `event`), ` to the subform container object, which can then process it in the context of the parent form. The event is received in the container object method. It may be at the origin of any event detected by the subform (click, drag-and-drop, etc.). `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The code of the event is unrestricted (for example, 20000 or -100). You can use a code that corresponds to an existing event (for example, 3 for `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Validate`), `), or use a custom code. In the first case, you can only use events that you have checked in the Property List for subform containers. In the second case, the code must not correspond to any existing form event. It is recommended to use a negative value to be sure that this code will not be used by 4D in future versions.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information, refer to the description of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `CALL SUBFORM CONTAINER`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "execute-method-in-subform-command"
    }
  }, `EXECUTE METHOD IN SUBFORM command`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EXECUTE METHOD IN SUBFORM`), ` command lets a form or one of its objects request the execution of a method in the context of the subform instance, which gives it access to the subform variables, objects, etc. This method can also receive parameters.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This mechanism is illustrated in the following diagram:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(39126)/* ["default"] */ .Z),
    width: "1022",
    height: "267"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information, refer to the description of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EXECUTE METHOD IN SUBFORM`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "supported-properties"
    }
  }, `Supported Properties`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesBackgroundAndBorder#border-line-style"
    }
  }, `Border Line Style`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesCoordinatesAndSizing#bottom"
    }
  }, `Bottom`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesObject#css-class"
    }
  }, `Class`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesSubform#detail-form"
    }
  }, `Detail Form`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesSubform#double-click-on-empty-row"
    }
  }, `Double click on empty row`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesSubform#double-click-on-row"
    }
  }, `Double click on row`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesSubform#enterable-in-list"
    }
  }, `Enterable in list`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesObject#expression-type"
    }
  }, `Expression Type`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesEntry#focusable"
    }
  }, `Focusable`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesCoordinatesAndSizing#height"
    }
  }, `Height`), ` -
`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesAppearance#hide-focus-rectangle"
    }
  }, `Hide focus rectangle`), ` -
`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesAppearance#horizontal-scroll-bar"
    }
  }, `Horizontal Scroll Bar`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesResizingOptions#horizontal-sizing"
    }
  }, `Horizontal Sizing`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesCoordinatesAndSizing#left"
    }
  }, `Left`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesSubform#list-form"
    }
  }, `List Form`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesAction#method"
    }
  }, `Method`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesObject#object-name"
    }
  }, `Object Name`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesPrint#print-frame"
    }
  }, `Print Frame`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesCoordinatesAndSizing#right"
    }
  }, `Right`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesSubform#selection-mode"
    }
  }, `Selection mode`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesSubform#source"
    }
  }, `Source`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesCoordinatesAndSizing#top"
    }
  }, `Top`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesObject#type"
    }
  }, `Type`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesObject#variable-or-expression"
    }
  }, `Variable or Expression`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesAppearance#vertical-scroll-bar"
    }
  }, `Vertical Scroll Bar`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesResizingOptions#vertical-sizing"
    }
  }, `Vertical Sizing`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesDisplay#visibility"
    }
  }, `Visibility`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/FormObjects/propertiesCoordinatesAndSizing#width"
    }
  }, `Width`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 35936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/subforms1-66c63cca56c07feb9dea4b6036418833.png");

/***/ }),

/***/ 39126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/subforms6-2b2d3b3837144e434b9af3266faa6a82.png");

/***/ }),

/***/ 15678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAABBCAIAAADJ8CGoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATASURBVHhe7ZztjdswDEBvrKADBcgKneKQVQ7IGh2gS9wGrUhREmXLlw/cxRHx3p+jKJJOGz87PdR5+wSAKOAzQBzwGSAO+AwQB3wGiAM+A8QBnwHigM8AccBngDjgM0Ac8BkgDvgMEAd8DsVvmBx7Ix8Fn0ORToh/MC34DB34PDX4DB34PDVP8PnP+XA4/7EFvDjq8+X41vj1/tdOlu8hDf/ukVB4UZ+5BuxF8fnnlLt9OObfDT5DBz5PzS4+f5zso9xb2Ug1ljl9uIWspPr0UVokIQxHHM4fuVVyy47FQfKai8aSTZ//vv+yv7234yWnpOx4TOmU0JaL1aR1LV8NasNTZNjEdozjpW3qrna9W67OXE3Qsq9fhj+IpeKw7/1ZVXU/K75HxczbKVyOqq1qa94ddSwmyi4+Dyg+N/Ssl4yd/uJDtkOSxRNtaemSd32FlGpyKSWTfna1vlIG2a6EWzO1bBW6llopYZ0ehn18VvcyuuVczAzsW8TLEb5lFKrjjTodesb3Z3G4KZS2deHLbokzLpNCQzN653TVN8xcTLja0m7OyuKyMD87+CwmNinbluRHH4UHPo9GuJZR6KfANs/zuc1MUavJxt00fzDh9paY7OBzMsvWaWdxoyzW+Z6Bz6MRrmUUtsKKK4PC2GfJFA+aEtfk6eJVUBMysNYLxc7hHBcPJlxrkaBl4/Ecn/WzjSIC1cThdMpGJT+NYq7VmLwlW+P1CG/nOHRHyWb7PTA2fM7OZL4WZiteB2Wi/E5NM2nHsEuHJWRVu3J6Y8K4rI/bH4TP2wOu+gwzoT7DrOAzdODz1OAzdODz1OAzdODz1OAzdODz1OAzdKQTAqbG3shHwWeAOOAzQBzwGSAO+BwK+0cYTIu9kY+Cz6FIJ4T9qhQm5Ak+1/9rLej/vm6PU8Crgc9T8xyfH7LXP4cBzwKfpwafoUN9vtQHnRL1GaVvI49Pc9tzjvA97OKze+rxcD6XLweqjzNKdV2UJyzrd4PVj+opqeuEee/L/JB2WWg9OacdfPJ3FJ9/TjOx+Z7nFH/0xUTjOT6bQ8VF53Pv4tD6hBbmbQlL2qitrkxVznUprNv1EDbcp0B4is93DcfnO9j//lx2nIGZUpXwhS7Wlsxy3ih05UKdCI5Nn93XAJS7q5Td+f2eqczQfD2QH9WOxLd83svr+Kyocpa74nPaLrnBvFHoBsIWxeeGnu+SsRNfTKgSVkO0paVL3vUVUqpqVWOpay1dx6K+zJNwa7KWrULXUislrNMD8GI+J0b6+UKL04+ynQpv8lla6piMKwNlfH8Wh5s8aVsXvuyWODPcdUm9c7qerWkuTqGRM9da2s1ZWVwWZuZlfBbZMjUlnublojDHeTtxOq3njcPWY4fxeyDs77OSjbvpKO21pWg97euWaDzBZ5iJsc+SKQY0Ga5p08XrYCtpFDuH9S6uOXlhObrWIkHLRgKfoWPD52xL5mtVtuJ1sJFMoWEXEEvIathbXhnf8onPsEB9hlnBZ+jA56nBZ+jA56nBZ+jA56nBZ+jA56nBZ+hIJwRMjb2Rj4LPAHHAZ4A44DNAHPAZIA74DBAHfAaIAz4DxAGfAeKAzwBxwGeAOOAzQBzwGSAKn5//AekmCDAejgigAAAAAElFTkSuQmCC");

/***/ }),

/***/ 13246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/subnew2-7a4347cc6c85cdc70b11b48af2cf404b.png");

/***/ }),

/***/ 24941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWMAAAE+CAIAAADXsOafAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABTNSURBVHhe7d1vSBx5nsfx8lhYOPZBntyDW0JC081ACEdoGKGD6WF1bzgRDIFlIPggkYsGGgbRYUhWxHmwQbyEMIoMNEQD6gMJhIUQQXIMKGwraXBAwhHkhm4aQ9h7sE/6wbKwsOD9/lXbtm1/q6N20lXvF4Op+nVVJQ+mPv39/rrrZ0e5XPYAoKF/cn8CwPFICgAykgKAjKQAICMpAMhICgAykgKAjKQAICMpAMhICgAyvs3drh49euS2gA917949tyUhKdqVSoqpqSm3AzRvYmIieFLQfQCQkRQAZCRF+ysuXOuouLZQdMNHbYx1jG1UNoWDgWoNkiI3fq5K73LJjTdgTgl0JE6JuuUTbx/s+9Y7375zrzRQXJjcni/s728Oxd0I0JhUU6TmdsrGq1sxN1TDpMN4zu2hpTbGerz1/Zlut+t53TNVO8CpOXH3kVvLui203MbL2dHrxySD7S+0mh5DNSuJ4a2t4QTNB4JrKimq+xHTY6iBfhMU2f6qumIlU32MUXWmPcz2Kb29ByNoWrG43XX5gtv2JyvMTISKCV1sGIXBxYQ/PaHFhzYL811dqvug+UBgUlLkR5L6ZrY3fXradiI7cyn1wpOcHljN6MMyq+XydNqc4eWTE9XHuDzRR5jBbH8lGfLegO5t/BPRpHi8c8ufllD3v06F+S69oyJkdN1vQ+JDD0ZnX1ZFBdC8oPMU/jSFqQWSI3m1uVOqP3OZunTebdljbH+iq47aE1MD6WMmPxDIhctdZABaoonuo7SsegVbHNhCohmVmVHl2MlRNCk+tDS/3XN0ukEVG7M9fsdRXJg8fjYDCKaJpHi/qwqC1NzdtFcq7bgxzzt/KeW2jmOOcI2IzptlpiVOj550GFxM2CmKjo7E4uDXOhO6ZwoqQipjBT4QwQk1kRTpu2bqIXnuXGbFDSmxWxOqwDg0o1kjduuVnZ8wEx7JkV03jtNhZyicyiRl1WhlrHvGfaCqXmQ2E03hCbF2xRNiOCGeEANwykgKADK6j3bFSjY4OVayAXCa6D4AyEgKALI63cfm5qbbAhBqv/lt7z/+/le301D9pHjx4oXbARBSN27cOIWkePz4sdsHEEbqTg+eFMxTAJCRFABkJAUAGUkBQEZSAJCRFABkJAUAGUkBQEZSAJCRFABkJAUAGUkBQEZSAJCRFABkJAUAGUkBQEZSAJCRFABkJAUAGetoRh2/i6zdBf89YDWaWkeTpIg6fmd6W2vq95XXYMVdAKeMpAAgO4ukKC339i6X3A7aRnHhWkfFtYWiGz5qY6xjbKOyKRyMcPhUagrS5SNTt3zi7YN933rn23fulQaKC5Pb84X9/c2huBtBWNF9QNkY6/HW92e63a7ndc9U7QAtSorc+DnHLxxUDeFGxnN6JzmSz48kzZ4+ejznn6IHtLqX6F3O2evosdozav4Su0/hUs/Gy9nR68ckg+0vtJoeQzUrieGtreEEzUcUtCYp0tNlazU58kTftLknI8lVOzSd9mK3Xu3MpVJzO2ZPy/av9ekXVzPZKXtvH7mElh+Z8rJ2LHmu5gwVCxnzoh70+g/yA7WKxe2uyxfctj9ZYWYiVEzoYsMoDC4m/OkJLT60WZjv6lLdB81HBLSo+/Df3fuz3k5J3cfnL6Wy/Q3e3zOrNjLSfZn87nszVHsJLTWXvRVTf6rLpebumjPUpv7D897v2iql6hyVSK/M8TgkHu/c8qcl1P2vU2G+S++oCBld99uQ+NCD0dmXVVGBKGlFUqh7PLk7Yd7cVelghtQ9Wy5nvYy6iwO92de5RAAZV7ZoREQDFy53kQFoqBVJod7dU5fO661SbiVvhgwdF6pZWAsQFcddogFdtrjOxafyhnmKeuJDS/PbPUenG1SxMdvjdxzFhcnjZzMQdmeUFJW6X881pu/OeXY/s5u0BUFlfrLfs31GLD1gjjmmwqhzCYnKITN9YZEQjelJh8HFhJ2i6OhILA5+rTOhe6agIqQyVuADkcjiuY+o47mPtsZzHwA+ISQFABlJAUBGUgCQMaMZdax51e5Y8wrAGeKzDwCnjKQAIKP7iDrmKdod8xRoBb6j2dba+jua/vPhhnmQIzfOgxdAOzujeQqzKo1hnv9KTwd56lvlCevNAJ8kZjShHFqWu3phK/2C21eb9rn0jTHWw4ue1iSFXy2YBSKW9RPnerfy6LnuTNROf9bL9ts9c6BbI7PSuFR1Na72qD7MXcQ4KE0OzrFj5gz6oDr0MnfWwaPlxYXbbx9UL8RrdM+wHl70nFFSVNanOHJb5kd29XqX0+nS8tSO61F0Z6IalNWMWaXK9Sn+Gpk7c55bONMslKWp8ypr1LCU5lnqXmJFChhnPU9xZHrCX+/Si8WSKk+Ov3v9NTJj6YGUv3Cmqxn0Qt5udU2W0jwz+jeAJPTaNrWthnpBNyRVjYnuR/6n9jM0hMpHnKcwq233ram7OFg/oGJi6pINIFV9BMRSmkHp5fgNEwzq3n953TYjhcHF2/WmJcySepPqFfPLQjb/7ZwbRyh97BlNFReqvVjJyVFRKu14yZi513NrWTMkYSnNJlTmKfQcRLG47c36q+INb1VW7j5MZYVeUU/lBD1K6H28pKjMNSZXBmwDke7L+DOadcRuTZiXlTUvWE3BUponcDDDqRyXBPF4p9tCyPEdzagz39H8z4Vrt72lqk80VPdR8/sH9byEPcZ2JuolNxL/we2j9VhHEx9V9aLch79hUbExlhjufKDCpftr/SsAmNEMN5ICSnxos/YrEvaXiVmmXqgc0z1jBtQfrpDQhzKjGXIkBQAZSQFARlIAkJEUAGR8Shp1rHnV7ljzCsAZ4vsUAE4ZSQFARlIAkJEUAGQkBQAZSQFARlIAkJEUAGQkBQAZSQFARlIAkJEUAGQkBQAZSQFARlIAkJEUAGQkBQAZSQFAVn91PLcFINROtI7mL375K7cFIOw+PCkAoAbzFABkJAUAGUkBQEZSAJCRFABkJAUAGUkBQEZSAJCRFABkJAUAGUkBQEZSAJCRFABkJAUAGUkBQEZSAJCRFABkJAUAGUkBQEZSAJCRFABkJAUAGUkBQEZSAJCRFABkJAUAGUkBQEZSAJCRFABkJAUAGUkBQEZSAJCRFABkJAUAGUkBQEZSAJCRFABkJAUAGUkBQEZSAJB1lMtlt4m28ujRI7cFfKh79+65LQlJ0a5UUkxNTbkdoHkTExPBk4LuA4CMpAAga5AUufFzRu9yyY3UH2vMnBH8cDSluHDt2kLR7Shqf2zDbTfNXOy92wEOCVBT5Fdy/n2eW8u6rYZMOozn3B4+GbXBAgQlJUUqlTqICh0UekAQME8AtA0pKZIDA5WoMAmQTCbtK0Zpudd0I5ptMVQ90W+CIttfVVesZA4dpFSdWTlRbfaaUeqRU7Ax1uHYOkIVFInhra3hREeH7VDUgDvgwzsWRIXYfcTSflSYoMj09bkXlNx4ciSfmtspl8s7c6n8SFLd8+np8mpGv5hZLZen0+Y4L5+csMd4+ZEnKgVUTCRHPHOiOjg/kvHzI+8N6EH/PMjMre9TUWBHVUz0eOv7RmFwMaGyID60WZjv6pov7O/PdOuYuO0t2QPWvR6yAo3J8xR+VCzboKi6h010pAbSMbVtjvLyu/UnxFKXzrstz9splUq5lbw6eCSpygdTgFTOc1dDcObW96koMIPF4vbousoDIz70YHT2ZU0UvHtrywutZ9bbLjJ9gUYCzGi6qFjZqQmKk9JFh48i4iMYdTWHtjkUd6NAPQGSwkVFPl8bFOk+1Wa4OQxbJtgDzl8SJj1jMT3XkZ1yPUdu2W8+cEri8c7ZSkdRXJicHb3uCgzfhctds5N8DoKggiSFay2OVhTpaTs9oZoIO2FhS4PYrQkVIYdmNGvYyQx7pmpAVtwwTk33TGF+u8c2F4nFwYLtROLdg56b0YwPba53VqY4+OwUAp77aFc894ET4rkPAKeMpAAgIykAyJinaFesZIOTYyUbAKeJ7gOAjKQAICMpAMhICgCyOjOam5ubbgtAqP3mt73/+Ptf3U5D9ZPixYsXbgdASN24ceMUkuLx48duH0AYqTs9eFIwTwFARlIAkJEUAGQkBQAZSQFARlIAkJEUAGQkBQAZSQFARlIAkJEUAGQkBQAZSQFARlIAkJEUAGQkBQAZSQFARlIAkJEUAGSsoxl1/H7Tdhf8d4vWaGodTZIi6lRSTE1NuR20m4mJidYkBd0HABlJAUB2FklRWu7tXS65HbSD4sK1awtFt6Oo/bENt900c7H3bgch8anUFKRLO6kNFoQf3QcAWWuSIjd+zvELB1VDuJHxnN5JjuTzI0mzp48ez/mn6AGt7iV6l3P2Onqs9oyav8TuU7g0bWOsw7F1hCooEsNbW8OJjg7boagBd8CHdyz41LUmKdLTZWs1OfJE37S5JyPJVTs0nfZit17tzKVScztmT8v2r/XpF1cz2Sl7bx+5hJYfmfKydix5ruYMFQsZ86Ie9PoP8gN1mVvfp6LAjqqY6PHW943C4GJCZUF8aLMw39U1X9jfn+nWMXHbW7IHrHs9ZEVYtaj78N/d+7PeTkndx+cvpbL9Dd7fM6s2MtJ9mfyunRyrvYSWmsveiqk/1eVSc3fNGWpT/+F573dtlVJ1jkqkV+Z4HGVufZ+KAjNYLG6Prqs8MOJDD0ZnX9ZEwbu3trzQema97SLTF+HUiqRQ93hyd8K8uavSwQype7ZcznoZdRcHerOvc4kAMq5s0YiIMzPqag5tcyjuRhEurUgK9e6eunReb5VyK3kzZOi4UM3CWoCoOO4SDeiyxXUuPpU3zFM0JR7vnK10FMWFydnR667A8F243DU7yecg4XdGSVGp+/VcY/runGf3M7tJWxBU5if7PdtnxNID5phjKow6l5CoHDLTFxYJ8WG6Zwrz2z22uUgsDhZsJxLvHvTcjGZ8aHO9szLFwWenocVzH1HHcx9tjec+AHxCSAoAMpICgIykACBjRjPqWPOq3bHmFYAzxGcfAE4ZSQFARvcRdcxTtDvmKdAKfEezrbX1dzT958MN8yBHbpwHL4B2dkbzFGZVGsM8/5WeDvLUt8oT1psBPknMaKJCL3PH06CoqzVJ4VcLZoGIZf3Eud6tPHquOxO105/1sv12zxzo1sisNC5VXY2rPaoPcxcxDkqTg3PsmDmDPqiu4sZi52jn8A8scIejzigpKutTHLkt8yO7er3L6XRpeWrH9Si6M1ENymrGrFLl+hR/jcydOc8tnGkWytLUeZU1alhK87TooLg+c/3oAnjA2c9THJme8Ne79GKxpMqT4+9ef43MWHog5S+c6WoGvZC3W12TpTRPiwmKbq+7Oio2xjrGNvy1ud3SV+Z3fWy45bgPehUW6A65jzhPYVbb7ltTd3GwfkDFxNQlG0Cq+giIpTQD2vhhWAeFdzgqPG+25+V1vUDm+ujBInhbw5NmOe7CvGd7ldoFuv/XHocQ+dgzmiouVHuxkpOjolTa8ZIxc6/n1rJmSMJSmoFtvKwskXk4KvyludXo1tt3Zsjrml8yC+vGuwe7zGLctQt0/+Uv9kCEx8dLispcY3JlwDYQ6b6MP6NZR+zWhHlZWfOC1RQspRmUCgpVPdhbXd/rzc9VHFqg+9q/uFGEBt/RjDr9Hc1//1uH6jH83+th5icmLxc2h96NHYyrMbNtOw27Wr+/7S1c08vxsoR/67GOJlqnqvWwdKuxuBH8ixW1C3TTfIQPSQGve6aqnjDUiC4Qql/wt1UqVGqHqm31sm9ziOYjfEgKADKSAoCMpAAgIykAyPiUNOpY86rdseYVgDPE9ykAnDKSAoCMpAAgIykAyEgKADKSAoCMpAAgIykAyEgKADKSAoCMpAAgIykAyEgKADKSAoCMpAAgIykAyEgKADKSAoCs/up4bgtAqJ1oHc1f/PJXbgtA2H14UgBADeYpAMhICgAykgKAjKQAICMpAMhICgAykgKAjKQAICMpAMhICgAykgKAjKQAICMpAMhICgAykgKAjKQAICMpAMhICgCyRqvjnfuv/3NbgKT8+391WwgjagoAAaia4jje73fVf3t7excuXOAnP4/7af8/cf/TIKTk7uPCyn/kcjk7Ahx1Mfs39ZPuI9zk7oOYQAPpdNptIdTkpOB/BTTAG0lEUFPgRHgjiQhqCpwIbyQRQU2BE+GNJCKoKXAivJFEBDUFToQ3koiIQk2x9+x3F3/3bM/t1VAv1nnt9R8u/uG12w7uw85qb7yRREQEaoq918+v3Llyfylq93BrUFNERPhrCh0UX3735Z2nPxIVZ4CaIiJCX1OYoLjqXT0cFapPsKq7Bd2lGEfbEXX8waBrMirXOHJ8dRdStV25vj9yZKANUVNERNhritdL93VQeNVRoW7Qm28e/mlP+/Ln+z+ZQXVLf3H/yjMz+L33/Kkd9F29/dB7/trmwesfn97Rl7z6nTl4b+9ZkNZG/aXfeN+7E7ybJmrUv83+hXvf6X9iW6KmiIiQ1xT+Xa0cRMWff/Yefn/zoh29/fBzs7G39+bOM3fDXrz57R2zceDi1a9cVLz+8c3D2+Y4vyS4+dR7s1dbhdT6888//XT/C3O8f8KvP/v86c1jp1rbBDVFRIS7plBB4T29aW9PfX+aqFCZ4F6upu5kt1Wfi4q9Z4/ffHVVpYyKiS9+/tYUBH9yYSO54woI7Y8qqS7e/KOuX75R/7b27T6oKSIi1DWFriiq7s69Z3eePn62p+/5SrugOgCbELrkUC+abRUHNd2HogqNK8+Xlp5f+daUIypZPv/s1/qFvdfPa0JGFwuu09FZZegx//rVdFyof1fVHEp7oaaIiDDXFFWth6XS4CdVF1y8+f3DN67S+PEzvyC4+t2zK649+Mb7qrb70K5+eeXpUzvrYdoWzx7+zc9XamoK3b24UuZHz11JJULl+m4OtDIletPz+572Q00REfJKNnuZf7a7wFHqjeTdwH+rDVayCbewf/aBM0ZNEREh/+wDZ403koigpsCJ8EYSEdQUOBHeSCKCmgInwhtJRFBT4ER4I4mIoDUFP/lZ9ydvJBHB7yXF6eD7FOEm1xQA0KimAACLmgKAjKQAICMpAMhICgASz/t/37ERNlYSc5cAAAAASUVORK5CYII=");

/***/ }),

/***/ 42149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 84041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWIAAAB7CAIAAADBkB3KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAmzSURBVHhe7d1NSKPbHcfxk7bQTRez6aIwXEjjojLdBCqkaOBquxBBmVUXLuZK0UuzCZGWaUVkFhexHaYY5ELKKMVx4aKrYQSZlbmQSANecNPBFpIbGAa6uJssSqHQYs/b8xifRM8T83LzxO8HwfOcnOeZ1fl5ztHnP7FGoyEA4Gbfst8B4AbEBAAHYgKAAzEBwIGYAOBATABwICYAOBATAByICQAOxAQAB2ICgAPvdETeg9//07aAu2r87ge21Q4xEXkyJi63fmQvBiIWi11eXtoLRF9s7e+3xwSbDgAOxAQAhzAxUVp7oM0e1G1P+77b6TvCD0dHantTU3s1eyHJ69WibXfMf1jwqbinOllNVA5L3iQvHRds61Y6GtZK9gpDg/mPToSOiVQqdZUTKiVUh0PIMAEw1ELHRHJx0c8JPf2TyaT5RKsfzOpNiGJ2FnIlMa9TojDftKI4zFwbJDXd6d8om7O6l5VIDxRXY5a/lRhbOT1dGYvFzMZEdtgBN29UwozBqAq/6YinvZzQKZGZm7MfSKW1ZLaS2jlvNBrnO6lKNiknfHqrcZRRH2aOGo2ttB4nKsl1M0ZUsi9lBMiMSGaFvlEOrmQzXnhUxKLq9O6Dm573HpkDpldmxIw4udSqS/tjcpInlsvV3cnJ3erl5fa0mv+fiFdmwImYaRsCgTG2F/dGB2cTXk4cmJRomsA6N1KL6bhs61GicvHBfBSQGn9oW0Kc1+v10mFFDs4m5cJBLz38++zTEJ6e9x6ZA7qzVjvLncgw0BLLn+XybwI58P6dWVgoM3lxVmtzZBEYg/umkyNMmxOH54GU6JZabnhYPnwDcna1oZSXE7b3uuYxtgv3RicxYXOiUgmmRHpO7i7suYVZIJgBD8cdp5zxuDrfKGzarUbpwNtzoEcSiYm8v5Go7W3kcwt2aeH56NFkfsPxW48wYzDCOooJu6NoXUukt8yRhNw7mEMKsyiIP1mX+XHtCDPAHGCYO+W+49B2o2emt6u7ZzNmvzC2v1Q1G5DE9JKwR5iJ5fLJhH+s0f7XpIExthf3Bu90RB7vdKBLvNMBoFvEBAAHYgIde/bsmW3hfuBsIvIoS4PuUZYGQFfYdABwYDWBu/jfj39iGt/+25emgRHGagJd8fMCI4yYQLdIipF326ajXC7bFtDip7/K2ZYQf/0T741G28c/m/3vf/5lL1o4YuL169f2Amjxh7df2JYQv5392LYQNY8fP+42Jl68eGGvgRbNOw6OMyNKzvTbY4KzCXSlORo4pBhVxAS6RVKMPGICPdBpUsgx5steY7gRE+gN1hQjjJhAz5AUo4qYQC+RFCOJmECPkRSjh5hA75EUI4aYQF+QFKOEmEC/kBQjg5hAH5EUo4GYQH+RFCOAmEDfkRRRR0xgEEiKSCMmMCDNSYFoISbQS3Kl4H/ZriYkRUQRE+iZQDQ0R4b5sh8gaogJDA5JEVHEBHpG7imav2wvoo9amLCeP39uW33z64O/2Jb2xye/sC30wtOnT22rQ85amMQELBkTm5ub9gJRs76+3r+YYNMBwIGYAODQ15ioH8zOHtTtBaKgtjc1tVezF5K8Xi3adsf8hwWfiogZutUE0RIlzP/7gU0HAIcBx0Rp7YHlLRnk6sH2rJXURTJbqWST+kqNXit5t6gOpe0jZg9K5jmqL3hH4B8x1yxZOlZcjVn+VmJs5fR0ZSwWMxsT2WEH3LxRCTMGw2bAMZHeahhHyexLNWNLL7PJI9O1lRbxJ2/Pd1KpnXN9pRTmj+fUh0eZwqaZ2C2PUCrZTVEwfckHgTtkJmT0h6pTzF+FB9rS894jc8D0yoyYESeXWnVpf0xO8sRyubo7Oblbvbzcnlbz/xPxygw4ETNtQyAw5jdX/1ExhtqgNx3ez/X5gjivy0n8cDxVmL/lJ3vmyORFei5Tufigu4KPUFI7hSdx+V0+LrXzqb5DNtU3IT5cmPVJ0z0yjt7q8Wil571H5oDurNXOcicyDLTE8me5/JtADrx/ZxYWykxenNXaHFkExnz51Vf2Awy3gcaEnODJi3X9Y10uGnSXnLCNRkFk5BQO9WO+zSNCyNgFi0I+9E3OrjaU8nLC9l7XPOaLX/7Q9mK4DTQm5M/11PhD1aqXDiu6S1NZIfcIxyFy4qZH3EItWOyGxSPDhrOJjiQSE3l/I1Hb28jnFuzSwvPRo8n8huO3HmHGYAj1Oyb85b46XEx/uiPMdeYiaZYC/oHkvDDbi3h6UY+5YW3R5hEuMoT0kYVBPNzN9HZ192zG7BfG9peqZgOSmF4S9ggzsVw+mfCPNdr/mjQw5s/sOSKCdzpg8U5HpPFOB4BvEjEBwIGYAOBATABw4AgT1gCqV6GvqF4FoF/4TQeAbhETABzYdMDibCLqOJtA3/FXmJEW3b/C9F751vRLGqU1XqoAoqbfZxO6xIymX+xKb4V5kVuGCcVjgKHBESZaqUp0lMKFb8Ax4a0TdMGHA/USubr03yZXGxJ5MV8QhXlzpQfaOpf+fqVpM2NXHc3D7EO0q0XJ1T2mT9/B9qetWnF/Ijex8jnFKmH0Oyb8ehMtc7KSvVA1K7fS9YPNc7s1URsSuS85yuh6U3Z74tW5PN8RtvilLnmlyPv8gjOUw+wVlRIL2wutdexwXw3sbKLlSMKrWSni8aQMk5unrlfnMp5eTHnFL+1qQZXhthUyKYfZKzolpsV0c04UV2OrRa+yti1iJXcmU3tFWyj7aotC6ewRNAxnE7pW9tyxnMLhtgEyIzbHTfrIdUdIlMMMqfj5ikoJcT0nhMjPvFlQBSxPcld16k5XNnSh7OquMFuUYHntf5hxiLihOcKUWSF3FYcld07U6+ciGdcTvXRc0F0ulMMMrfjGL3N5PSe8wtqy9/Tde90lJndf6cq4iemlSV1KO1he++uvzUBE2xDEhH+4mDxcNPuG9FzGO8JsI/5kXX8sHYtwqwnKYYYlU0KuG8w8VxO98/OJa+W1p75vexFp/BUmLPVXmD//d0xuLbz/j0OfSWw8qpaX369e9cs+3TYbDFNo32uLvSlVT/em6vvoH2phYkCadhyG2mHsF8P/AUWwvDZ7jtFATODK9HbTSkKTPWpp0PyB15aR4K8amtryY095mT3HaCAmADgQEwAciAkADsQEAAd+IQqL6lVRR/UqAP3C300A6BYxAcCBmADgQEwAcCAmADgQEwAciAkADsQEAAdiAoADMQHAgZgA4EBMAHAgJgA4EBMAHIgJAA7EBAAHYgKAAzEBwMFR5M62AIy0u9fC/M53v2dbAEbdHWMCACTOJgA4EBMAHIgJALcS4v/i1fHOmzY6WAAAAABJRU5ErkJggg==");

/***/ }),

/***/ 4903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/update-main-form-3243dd6cf43e865acb63a075ddc8b576.png");

/***/ }),

/***/ 3885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/update-subform-ac2ddf16436f77d211f85fc1e822e4b8.png");

/***/ })

};
;