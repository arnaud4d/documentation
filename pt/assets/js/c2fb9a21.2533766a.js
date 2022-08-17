exports.id = 11605;
exports.ids = [11605];
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

/***/ 15548:
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
  "id": "version-18/FormObjects/subformOverview",
  "title": "Subform",
  "description": "Overview",
  "source": "@site/versioned_docs/version-18/FormObjects/subform_overview.md",
  "sourceDirName": "FormObjects",
  "slug": "/FormObjects/subformOverview",
  "permalink": "/docs/pt/18/FormObjects/subformOverview",
  "draft": false,
  "tags": [],
  "version": "18",
  "frontMatter": {
    "id": "subformOverview",
    "title": "Subform"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Stepper",
    "permalink": "/docs/pt/18/FormObjects/stepper"
  },
  "next": {
    "title": "Tab Controls",
    "permalink": "/docs/pt/18/FormObjects/tabControl"
  }
};
const assets = {};
const toc = [{
  value: "Overview",
  id: "overview",
  level: 2
}, {
  value: "Terminology",
  id: "terminology",
  level: 3
}, {
  value: "List subforms",
  id: "list-subforms",
  level: 2
}, {
  value: "Page subforms",
  id: "page-subforms",
  level: 2
}, {
  value: "Managing the bound variable",
  id: "managing-the-bound-variable",
  level: 3
}, {
  value: "Updating subform contents",
  id: "updating-subform-contents",
  level: 4
}, {
  value: "Updating parent form contents",
  id: "updating-parent-form-contents",
  level: 4
}, {
  value: "Using the subform bound object",
  id: "using-the-subform-bound-object",
  level: 3
}, {
  value: "Advanced inter-form programming",
  id: "advanced-inter-form-programming",
  level: 3
}, {
  value: "Object get pointer and Object get name commands",
  id: "object-get-pointer-and-object-get-name-commands",
  level: 4
}, {
  value: "CALL SUBFORM CONTAINER command",
  id: "call-subform-container-command",
  level: 4
}, {
  value: "EXECUTE METHOD IN SUBFORM command",
  id: "execute-method-in-subform-command",
  level: 4
}, {
  value: "GOTO OBJECT command",
  id: "goto-object-command",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "overview"
    }
  }, `Overview`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A subform is a form included in another form.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
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
  }, `List subforms`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A list subform lets you enter, view, and modify data in other tables. You usually use list subforms in databases in which you have established One to Many relations. A list subform on a form in a related One table lets you view, enter, and modify data in a related Many table. You can have several subforms coming from different tables in the same form. However, it is not possible to place two subforms that belong to the same table on the same page of a form.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, a Contacts manager database might use a list subform to display all the telephone numbers for a particular contact. Although the telephone numbers appear on the Contacts screen, the information is actually stored in a related table. Using a One to Many relation, this database design makes it easy to store an unlimited number of telephone numbers per contact. With automatic relations, you can support data entry directly into the related Many table without programming.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Although list subforms are generally associated with Many tables, a subform instance can display the records of any other database table.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can also allow the user to enter data in the List form.
Depending on the configuration of the subform, the user may display the detail form by double-clicking on a subrecord or by using the commands for adding and editing subrecords.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `4D offers three standard actions to meet the basic needs for managing subrecords: `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Edit Subrecord`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Delete Subrecord`), `, and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Add Subrecord`), `. When the form includes several subform instances, the action will apply to the subform that has the focus.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "page-subforms"
    }
  }, `Page subforms`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Page subforms can display the data of the current subrecord or any type of pertinent value depending on the context (variables, pictures, and so on). One of the main advantages of using page subforms is that they can include advanced functionalities and can interact directly with the parent form (widgets). Page subforms also have their own specific properties and events; you can manage them entirely by programming.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The page subform uses the input form indicated by the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesSubform#detail-form"
    }
  }, `Detail Form`), ` property. Unlike a list subform, the form used can come from the same table as the parent form. It is also possible to use a project form. When executed, a page subform has the same standard display characteristics as an input form.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `4D Widgets are predefined compound objects based upon page subforms. They are described in detail in a separate manual, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://doc.4d.com/4Dv17R6/4D/17-R6/4D-Widgets.100-4465257.en.html"
    }
  }, `4D Widgets`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "managing-the-bound-variable"
    }
  }, `Managing the bound variable`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesObject#variable-or-expression"
    }
  }, `variable`), ` bound to a page subform lets you link the parent form and subform contexts to put the finishing touches on sophisticated interfaces. For example, imagine a subform representing a dynamic clock, inserted into a parent form containing an enterable variable of the Time type:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(51418)/* ["default"] */ .Z),
    width: "812",
    height: "167"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Both objects (time variable and subform container) `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `have the same variable name`), `. In this case, when you open the parent form, 4D synchronizes both values automatically. If the variable value is set at several locations, 4D uses the value that was loaded last. It applies the following loading order:
1-Object methods of subform
2-Form method of subform
3-Object methods of parent form
4-Form method of parent form`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When the parent form is executed, the developer must take care to synchronize the variables using appropriate form events. Two types of interactions can occur: form to subform and vice versa.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "updating-subform-contents"
    }
  }, `Updating subform contents`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Case 1: The value of the parent form variable is modified and this modification must be passed on to the subform. In our example, the time of ParisTime changes to 12:15:00, either because the user entered it, or because it was updated dynamically (via the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Current time`), ` command for example).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this case, you must use the On Bound Variable Change form event. This event must be selected in the subform properties; it is generated in the form method of the subform.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(27988)/* ["default"] */ .Z),
    width: "859",
    height: "331"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Bound Variable Change`), ` form event is generated:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `as soon as a value is assigned to the variable of the parent form, even if the same value is reassigned,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `if the subform belongs to the current form page or to page 0.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that, as in the above example, it is preferable to use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OBJECT Get pointer`), ` command which returns a pointer to the subform container rather than its variable because it is possible to insert several subforms in the same parent form (for example, a window displaying different time zones contains several clocks). In this case, only a pointer lets you know which subform container is at the origin of the event.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "updating-parent-form-contents"
    }
  }, `Updating parent form contents`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Case 2: The contents of the subform are modified and this modification must be passed on to the parent form. In our example, imagine that the subform interface lets the user "manually" move the hands of the clock.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this case, from the subform, you must assign the object value to the variable of the parent subform container. As in the previous example, we recommend that you use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OBJECT Get pointer`), ` command with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Object subform container`), ` selector which returns a pointer to the subform container.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Assigning the value to the variable generates the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Data Change`), ` form event in the object method of the parent subform container, which lets you perform any type of action. The event must be selected in the properties of the subform container.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(35689)/* ["default"] */ .Z),
    width: "996",
    height: "452"
  })), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `If you "manually" move the hands of the clock, this also generates the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `On Data Change`), ` form event in the object method of the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `clockValue`), ` variable in the subform.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "using-the-subform-bound-object"
    }
  }, `Using the subform bound object`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D automatically binds an object (`, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `C_OBJECT`), `) to each subform. The contents of this object can be read and/or modified from within the context of the subform, allowing you to share values in a local context.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The object can be created automatically or be the parent container variable, if explicitely named and typed as Object (see below). In all cases, the object is returned by the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Form`), ` command, which can be called directy the subform (using a pointer is useless). Since objects are always passed by reference, if the user modifies a property value in the subform, it will automatically be saved in the object itself.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, in your subform, field labels are stored in the bound object so that you can display different languages:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(747)/* ["default"] */ .Z),
    width: "515",
    height: "280"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can modify the labels from the subform by assigning values to the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `InvoiceAddress`), ` object:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` C_OBJECT($lang)
 $lang:=New object
 If(<>lang="fr")
    $lang.CompanyName:="Soci\xE9t\xE9 :"
    $lang.LastName:="Nom :"
 Else
    $lang.CompanyName:="Company:"
    $lang.LastName:="Name:"
 End if
 InvoiceAddress.Label:=$lang
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(85820)/* ["default"] */ .Z),
    width: "510",
    height: "89"
  })), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "advanced-inter-form-programming"
    }
  }, `Advanced inter-form programming`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Communication between the parent form and the instances of the subform may require going beyond the exchange of a value through the bound variable. In fact, you may want to update variables in subforms according to the actions carried out in the parent form and vice versa. If we use the previous example of the "dynamic clock" type subform, we may want to set one or more alarm times for each clock.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D has implemented the following mechanisms to meet these needs:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Use of the "subform" parameter with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `OBJECT Get name`), ` command to specify the subform object and the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `OBJECT Get pointer`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Calling of a container object from the subform using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `CALL SUBFORM CONTAINER`), ` command,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Execution of a method in the context of the subform via the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `EXECUTE METHOD IN SUBFORM`), ` command.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "object-get-pointer-and-object-get-name-commands"
    }
  }, `Object get pointer and Object get name commands`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In addition to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Object subform container`), ` selector, the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OBJECT Get pointer`), ` command accepts a parameter that indicates in which subform to search for the object whose name is specified in the second parameter. This syntax can only be used when the Object named selector is passed.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, the following statement:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $ptr:=OBJECT Get pointer(Object named;"MyButton";"MySubForm")
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `... retrieves a pointer to the "MyButton" variable that is located in the "MySubForm" subform object. This syntax can be used to access from the parent form any object found in a subform. Also note the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OBJECT Get name`), ` command which can be used to retrieve the name of the object that has the focus.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "call-subform-container-command"
    }
  }, `CALL SUBFORM CONTAINER command`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `CALL SUBFORM CONTAINER`), ` command lets a subform instance send an event to the subform container object, which can then process it in the context of the parent form. The event is received in the container object method. It may be at the origin of any event detected by the subform (click, drag-and-drop, etc.).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The code of the event is unrestricted (for example, 20000 or -100). You can use a code that corresponds to an existing event (for example, 3 for `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
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
    src: (__webpack_require__(50303)/* ["default"] */ .Z),
    width: "1022",
    height: "267"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information, refer to the description of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `EXECUTE METHOD IN SUBFORM`), ` command.`), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "goto-object-command"
    }
  }, `GOTO OBJECT command`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `GOTO OBJECT`), ` command looks for the destination object in the parent form even if it is executed from a subform.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "supported-properties"
    }
  }, `Supported Properties`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesBackgroundAndBorder#border-line-style"
    }
  }, `Border Line Style`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#bottom"
    }
  }, `Bottom`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesObject#css-class"
    }
  }, `Class`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesSubform#detail-form"
    }
  }, `Detail Form`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesSubform#double-click-on-empty-row"
    }
  }, `Double click on empty row`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesSubform#double-click-on-row"
    }
  }, `Double click on row`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesSubform#enterable-in-list"
    }
  }, `Enterable in list`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesObject#expression-type"
    }
  }, `Expression Type`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesEntry#focusable"
    }
  }, `Focusable`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#height"
    }
  }, `Height`), ` -
`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesAppearance#hide-focus-rectangle"
    }
  }, `Hide focus rectangle`), ` -
`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesAppearance#horizontal-scroll-bar"
    }
  }, `Horizontal Scroll Bar`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesResizingOptions#horizontal-sizing"
    }
  }, `Horizontal Sizing`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#left"
    }
  }, `Left`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesSubform#list-form"
    }
  }, `List Form`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesAction#method"
    }
  }, `Method`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesObject#object-name"
    }
  }, `Object Name`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesPrint#print-frame"
    }
  }, `Print Frame`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#right"
    }
  }, `Right`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesSubform#selection-mode"
    }
  }, `Selection mode`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesSubform#source"
    }
  }, `Source`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#top"
    }
  }, `Top`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesObject#type"
    }
  }, `Type`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesObject#variable-or-expression"
    }
  }, `Variable or Expression`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesAppearance#vertical-scroll-bar"
    }
  }, `Vertical Scroll Bar`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesResizingOptions#vertical-sizing"
    }
  }, `Vertical Sizing`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesDisplay#visibility"
    }
  }, `Visibility`), ` - `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/18/FormObjects/propertiesCoordinatesAndSizing#width"
    }
  }, `Width`)));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 51418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAywAAACnCAIAAAB8c09MAAAaVUlEQVR42u3d63WCShuGYbLXbsCUoCVoCbEELUFL0BK0BC1BS9AStIRYginB79m8X2ZNOIkHGJT7+pGFHIco+jAzwMflcokAAABQr39CFwAAAKCNCGEAAAABEMIAAAACIIQBAAAEQAgDAAAIgBAGAAAQACEMAAAgAEIYAABAAIQwINvxeBwMBh8fH+v1OnRZAABviBCGwD48vV5vPp/Xtumfn5/T6ZQ3VSXpdDqXy2UymYT+JwH4j74lCr4iOHHCyyGEIbzZbKascz6fFXeWy+V0Oq1nu5+fnwVf1vv9vt/vh/7fAG9LZ0Hj8didgG232wdXyIkTXg4hDE2hb0+lsW63y1ks0AbD4fB4PH5/fys26dhXJntwhZw44eUQwtAsimJu2D9R1ve1azrUS40fDAafn5/6EreRim56aXO6b3O9nE6nbiVaxM2vYVtKA4nYZ40abqpbRGfqOl9Pn7Wny2NjVBLbrk7QNd69XC6Xof/NQHg6KEajkc67NDyJhS4RULsLEFT02xxpFMJ0LmvDu91O39HnmMZ/fX25RWSz2WjOw+GgMRrWGBvWbG6FNqfWo2FN1bBbSXrTxQWzTdiq9NcNZ5bHxtiwdiGKw6W91DrdJKDNdLzouLCaMF/i0LNDxp8kdramvzruLvHRbXVg9gXiji9NtZCnvzanW48OTCuAO2Y1Rt8PdvBqExrvXi4Wi9D/LbwnQhgCc1+47isvM6BYlHGL6KTZn6pvWDdGX7XWLyQ9p/9tfrkxhGkTfoDTsMbklccfowTpryrxEmgtOy+yExh/fHEIs6k6jvRS2chfnBMnvByaI9EI1oxop8V+r479fj8ej/1mR+O3WsrpdFqv19bYp/n9ziWJOe+mTfgF07B/ZWV6K25MYtKzygO8Oh1EdrzrmC1/WbTmV/ay40jxSKdDectq/FcsiqvAxb/oR6dJCluuCs3G2PBqtfJfWgh7/LoBII0Qhka4xFVEru3AKFcpmemrUJPs3LRAom4p9A4BuE7Hu2KQDt7lclnyihzXRGgSp0M+TpzQfIQwNJdOW+1MN4r78BbMqXn2+32lhdEm/DJoOPFjAOA+i8VCZ1l13iMQaAhCGJpLJ6CWe3SKXJyxlNU0p111qJPdkpcfuvWXuTZem9jHoriRVKyRAsDjut2ufxjmDUfx0ee/3G63eadDnDih+QhhaK7NZqPvzY+PD+Uq66WRVx+m71bNbN3CrG/ZTesfj8dXZ7ZN2N0uptOphvlCB+5mN22x9kHr0+m6HPT7fb20g12RK30HGZ1lWTLTgJa17vlpnDjhBYS+MgAA0DrW0dOdL1nXT5vkd5bXPHb/MJsU/Xaot6ndbtdd8HjJut7ZrpWOsm5Rke5F6o8pfgk8y8eFLswAAAC1ozkSAAAgAEIYAABAAIQwAACAAAhhAAAAARDCAAAAAiCEAQAABEAIAwAACIAQBgAAEAAhDAAAIIB/QxcAbffxEboEQFA8tQRoLWrCAAAAAqAmDOEV1ARQTwa8E45otFzi946aMAAAgACoCQMA1Ieab8ChJgwAACAAQhgAAEAAhDAAAIAACGEAAAABEMIAAAAC4OpIhMclUQCAFiKEITgiGFqO5xYBLUUIQ3gXHp6HtvpoXz1w+/YYyEUIAwDUhgiGlvtT6UAIAwDUh5pvtFa65purIwEAAAIghAEAAARACAMAAAiAEAYAABAAHfPxAlp4GX8CfZkB4P0QwvAa2pxCyKAA8JYIYQCAN5E4Y2nzyRteQuV9wgaDwXQ6rXPBKvR6vauF0cE/n8/vmwoAuNVHyuWv9Ayhiwz8cSWEKTe4z+54PP75+bl1A51O5+vrK3PS5+fnR5arC95kOBwqz2VufblcllyJSqLyPF4YAMCD8iJXOnUVzBB6J4D/XAlhx+Ox3+/rg3s4HPb7/R1VU7vdbjQaZU46n892VCjfzGYzd5BcXfAm3W5Xe3E6nfyR2+1WgbL8+ler1WKxeLwwAIC7JaJVlKoMK85kUdxA6U8KvUNouyshTNnFqqMUxZRClF2eXoKfmNZf0R4q3kVx6vJHrtdr7ZfyWUUbBQA8l8tYUX5lWGKRgmowNyb0bqHVrocwF4/8yDKfz60xcTqd+p23NDAcDvVXk5bLpbKO+4gfj8der6eXWnC/37tVaXwUhzx/u/6CWr82pxRli9u2XAH8jlZa1Xg8tmNMa3DF1sr9lkdlPhVgMplowM2vYrvaMmt71Xa1CSuev6G8pRL/Gf0tyKwqns2mNdzRyAv90/Q/tI9E5lT3HhU0oxevJPp7ku0+UTdtrmRJABSzvBVlVYZlzpx5UKerwchhCKsohFlUctlLkcJqxfRbokmHw0EfX/2oKKa4zlsa1qROp2ONiX6GU9rQGC2iSX7kspSTqJTyF7TGRG1dW9xsNvotVAE0/vv7e7VauXSlGRSbVBJtYrFY+C2nlrdsQ1EcgFRCFcbGnGMa9hfR2mazWWZVWcFSVhgVTGXQ4ipnZg7TSC2l/4N9g5TvmgZH77U+aZlvkN5rTdVnxt4jDehlZvopWEn0+/nf/cprvC7YXPmSAMjjUlf0tzKsYP7EQJpfDUbTJEK65LNeUBrQ74cNKwbp10gJxnXn0ksb7w4MS1pGQUoByHX88ic5GmndznxuQQWaKO4X72/OdSCzl242izWicKZfVrc2lTaKo5i91CTtTroY7r/hz+zG+L3W8pZK7Ii1eKbXoJFu/YqV+s9cWqz4Q1g8j7U1J0baZ9Wi8OX3s5F+x4tXInqP/E9RnoLN3VqSR/5FeFFte3Nv3V9//pLfFSV/4O5bP/CI9GesqCbMeuXr3L3X62lYPyHWrqcfJ3epoJ3WW62VVRHZT5q/BhtWMNput1aJld5K3khr7NOyNt4qJ9wm9NJmU6mUhxR6NP98Pp9Opwo3bm2W/6xSyurVtAtuDSqSa3b0Fyn4z+QtlbicU2VLNFYajbT2VpqoqqA3uhuzlzZs7/5wONSHueR69C5nXp+bWEnB5gomAbgq3QT59E1caJpEUEUhzNoED4fD+XxWprHfksQvk35RXISywJH3UjHIcljidll+y2N6QWstcj9jmqT1uITksto2ZpnGKuoS61RusxZJpR+3Bg3rB1WBTPOXv1LyvqUSEvVqZRb5eFNldu2m/63e5USG1kuLy5mZONMpZlk5EZQTKynYXMEkAMU+bmmCdO4IarZychiCKLpjvn4tXI1R3gyKPm6eRJ1Wuse9zTmdTt3tHjI7hPkL+h3O0kVyU/UbudvtCu4rprVpK/pNVYGtEdNKojBkS5X/aSxYyr/gIPJ60SVoZGLOMqo4C2yCjxInuM/6WrQGwTKsIVJvk95E+9jobMQ+k+VXAuBBZb4fEu77qrT49a5fs2is3JqwzHgUxQHCOpLr92k4HPrzuMZBtwb3Uj9jdiuK9DxRqhXPX1DDfhn8ajP/3hbWTmrVFZonM+IovVmXfLcGVy2h8eVTUcFSGu+KoQGVJPPuYspwNqeVlo75jaVP5mq1UvyK4uteQxcHaAvLQzWnIrdFKsNQmyshLF2Ro1ShSR/xFfv24+QHpkTAsvxk2eszpmHXwStKZaz0gv4txCzx+Fdiupdap9KM3fRhPB5ntjpZFZrfZW2z2di+aH4rVZn6sIKltAkNWzH0/0lcB+qozHaZ50d8iwruxf9c6a546SbvW1coeTG9YHNPLwnQBsFrpMhhqE/oawXQdmU+hNHDV0cqLuetPO/qSJ/OCvIuYi3Y3K0leeRfhBfVtje3/PEe6j8Tdut4b+nPFU3gCKxkn7DMeebz+XK5TE+yqxetptaeHGoByMYnOnWlV/Lz82M9//r9voY1w3q93mw2dh1GeiV5myue9Nx/EV5U297cq/sbpCEys4Rte2tQg/SH6p97VwU0l3WitxZwu8LXxt/U8jscDj/iJx+cTif/Zq3pleRtrngSgIQm5J4LV0qiRuE/8Wi5R2rCWqLlu//e2vbmFu9v8GqwBpYE74SaMABAEzUw8VAZhqoRwgAATdGQKEb8Qj0IYQAAAAEQwgAAgTWkAiyNKjFUihAGAGiEklHsjkfK3oH4hRr8+/gqgBrwbQjAuPt4Re/7UF20BCEML4DvWQAJRDG8AUIYAOAhN1VUJ2Z+MD9xd3u8NEIYALyJUK325QNQZlp6/M6o/m3un7tf3LUVlSKEAUDd/LT0xOTU5qDgt07y38CrIIQBwP3ui1AuH1DF8lz+JY13p1veEdSGEAYA/3kwTqFpeGvQfIQwAO+GONVmdOHCCyGEAXglZQIWP8Cv5en935/1AaBXPqpGCAPQUJl5i59DAG+DEAYgPPIWgBYihOEF8Myikl4itZC3AMAQwvAa+JG+qplRNV0q3koAMIQwAE/GDTNxn0b1gm9OSfDGCGEAnoDghUc0Kn75mlkqvI1/nrgufVjn83ne1OPxOBgMNM96vQ6919dL2+v1ptNp6DICjfbhuXhClwsAXkNuCPv5+RmPx/b1qkSy3W4f3JIST6fT0Rf0ZDIJvdfXfX19qbR3L67/3ul0Cr0TwPMRvFAp/7lDAVEBhnrkhrDhcHg8Hr+/v/VBnM1mShUPbmm/3/f7/dD7W9ZqtVosFncv/vn52ZAKP+BxBC/UoCHxy0cUQ9Vy+4QpgSl7dbtdDb9E3RWA53K/iPwOoU7B+4dxo3zUJrcmrN/vr9frdJtaoiuVhhPnLhrz+fmpkfprjZjWG0wDWqEG9NLm1NRer5du7tSY8XisObUGm9nGDIdDOxfXJjTevVwulwV7mLeVvNJm7qZKbrNpo36loF8Mrd/+Xf7OUh/2Zj7+Cl2caveRGi/UrAmVYWQv1OqS43A42AybzSbRADGbzdxLDbuV2Pwacz6f9dKa89ziiQU1XmN2u52G9dcNu/VoBgVBFcONseHRaKThTqdjL60ANpx2dStlSmsrsU18fX258fYvUnlsDX4ZEjuLAgUfwpvmqahsxcdL+QOqntI+ZWcD7kILte0fXv54D3jUB9w63lvGj0jB3N/f39aLy88TxSFM8/trUGTpdruZC2q8pubNOZlMEuV2Y5R4/FUlXiYUb6VkaTXSbV2BzC4vsPkTa8j7L6FAA0NYQRy5GrkCRpm7N0r2Cqht//mS+xsqCZHAUKn0R6voFhUKH4fDQWFiuVyWbFZTLvFfKqPkXSSo8X4//cSc6SsT3ZjEpOJrGIu3UrK0Gqndtwaa8XjsmiP3+31iDXh16Wa4RPtj4vhJt04mJoXeoes763YqdHGARqA5EnW6fp+wxWIxGo0KbqnVBolqrdDFQSX8OJKXuhKL5GUyN6mBOYwuX2i+y2+/+DqPIOIX6lfqjvndbtfvjZ43HMWVQ/7L7XabV1ek8a6HfhT3cK+iVql4KyVLq5GJOYvH4xW5718XocrMnOBGJnJYQ77Zy+wa0BCJHFbp59ZtojlHK9ois9nycDgoYdhNwvS30+mMRiObZK171gndurpHfzvmLxYLv6u7664e/a1P8rvJp7vMp2ueCvqlRfkdsIq3UrK0tqBmsP+GDVyyOua7xfUfs75oNimzYRh3uFTAX3OZTZQvTPT30Kii8Jmbu2MqQmnb+3Lr/rpjp6KDqOr1A76oZJ+wbrerGGFPGer1esoZq9XKJmlAOcw9gChxCzG9PB6PdjcHTVV8ybtBqzLKZrOxm/JPp1MNV1QTVrCVkqW1lVi3sOFw6HqhaWYt8vPzY2vwW2w1v9ZsfchqCxMv6o4080SJJsirm/AbR642lFy8k/hL0KZJzu/xotyxU8VB5K+2om8YoBhfzdl0TM5ms0dumo+SSkaf6hJYdEs73R2PqfZXXmkYyls5CazJ2vbu3L2/dxytxWuLajkqAV/6w1aqT1g72dMC8K787/TyX8F3nIv7W7nU2+mETmB4G5e/ncPue5xDYikOEARHCMtgt87n9hNtcEckui9I1Ry/7ts1oMkS5zM2MnFSlPjMF0zlAEETEMIyTKfT1WpFTdgbe/DZcHcvVcUz6TLP5vmBwbvya6PTHbmKM1nEE1HRMHxTI7D6+4Td1xDZ2E2nu6mRwF5I296sKs5AfMWZLCJ7ISj6hAH/F+THr+pGSfq4oFUKKrryZgAahRCGdqmiQfAOlZYh+N4BofDJx2u5/tii8XhsHdUf1+v1ptNp8TyJG27dNBUo1oR04l/kVd2dw5r/5EoAwJUQpgRmj/oZDoeDwSA9w+fn53K5LLkxraf4edtADYJHsdpu3EoOA4AmK2qOnM/n2+32fD4rOXW73fV6fTqd/GsGNfXn52c0GpXcmLvtPlC/4NkrrdJGyabtLAAgIbcmTOlquVzOZjOru9JA9HsDLUex7Ovri1s54IU0JIpVWhnGA1gA4CXkhjAFrOg3e0Xx7eP7/b7f8qiUtt/vJ5OJBuzhjPZoxdPpZDPYkxMHg8Hn5+fxeIz+9ujKW8poNnsgo/4W9EhTIW02rUErzJzHnhrptqXyWGEKymAl1xibpMJoEfcy0fyaWQYN93q90G8u3l/6WjDiFwC8jLxHJvdj/hhrTDwcDvZysVh0Oh0N7Ha70Wh0jmnM19eX/0uw2Wy0HlsqilOdTS1eSrNpvG3FVuKmujVopCuPFnfj089+Fm1Ow5o5irumlSmDrdkaWzXVXloqdf+EvDJ0YxeUEN3yAO/Ht/L4qp6+448UyT+Qm7NrKK9t71rb9hfwpT//UcGsiVijpKKRk8nEXipkKCEllrLI4tbgZs5bZ+ZSifBnLZ7pNWikW7/CkCXCzB3xi2Ep6moZ3CK2126jiZcly4ACdYawkuspPj95+r4/GMKe+F9C/dr2rrVtfwFf+vN//RYVjhKGkoo1Dh6Px9PppPxhk/b7/Xg8ds2O/iIFK8xbKvHQRmWyRGOl0cj1em1NhFpPXnNkcTGuljyxbOJl+TLghdix8RJ3ebjQ+AgAL+uGEBbFNUDKGcorSh4KZJZINDwcDhXIzudz+Ssl71sqXZ5ExrxJE8qAxnqhKAYAeEW5t6jodrvp+qd+v2/3qthut7vdzkZOp1MFEau+StQnFShYar/f+y+1rUTdmNHIxJy3uq/kzy0DGu7C0xgBANXIrQnLixeTyUQhrNPpKJDZGA1bgtH48omkYCmNXy6X1rSnAWVB656foPxkc0Zxs2D5e8aWKUNJeWXoxe5YIarw+KOKKqoSc6Wisg0AWig3hFnLY/r2ENYPzN26IoovXVQQ0a+IUohdQVmmVqlgKW1Cw3bfB8Wj3W7nAp9PMVErsS5Zw+Hwjnvx31fyMmXgwQDvx2+dpI0SAPC4orqB6XS63++/v79DFxLvrEwF1YOtgc99aPfj8csvxhPLRpvpK2rbu9a2/QV86c9/Ucd8awQcj8ehiw000SNXKQMAUBTC7A6ldheG0OUEmuLi3d8LAIC7UTOMwGpojoye3SL53H1/Yjtpo/YOZbTtXWvb/gK+25ojAQAAUBFCGAAAQACVh7DBYDCdTutcMPp9GFHVuwYAAHC3KyFsPp+7uyLd92zETqeTeb97sTuBpV1d8CpbkBwGAAAa60ofyeFwqOB1OByOx6OG7d6kTy+E0thkMsm8Lf7dVOxer/f01eLp6uyY/5RVPX3H6ZjfZm1719q2v4Dv5o75p9PJapX6/b7STPoG+o/7iWXeE/8RnU5HBbanHj29zHg5jX00EL9JANBa10OYi0fdbteNn8/n1pg4nU79zlsaGA6H+qtJCkD2PB+bdDwee72eXmpB/0GN9qSgRAjzF9T6tTnlP1vctuUKoAF/VePx2No0tQZ7wtIdz5QEAACoWlEIs6jkspdikOtrpUmHw0Fn8D8/P4o+rvOWhjWp0+nsdrvRaORnOIUzjdEiiWdBWgjzE170N/xpBr3U1rVFe1Cjdfb6/v5erVYuY2kGxTWVRJtYLBaW1fTy1sdB4r01pEqMCjAAwL8F01wdlZLWOqYYtI8pANkzqieTidKPi1BaREnLdcPSnH7espbBRKWXFkm3RboFbREVQNEt+n0wtjZnm3Db1WxKZprH4qBms0laCTVhMI29WWvoUgAAwiiqCbN4NBgMer2ehhW8LNMoeFkYiuJ4FP3mKgtts9kssQYbXq1WimvpKxYzQ5gbaSFMy9p4q5xzm3BZTaVS+FMC0/zz+Xw6nVZxAQHeQ/DKsGbevh8AULOiEGZtgofD4Xw+K9NY3ZJyj3/nCOUqF6ESFV2JlwpJlsP8XlzR35bH9ILaXDfmJmk9LgK6rLaN2X00NFUFfnpPf7yB4PErovYLAPDrek1Y8Qx+CEvMn+5xP5lM/F5cUU6HMH9Bv8NZ5iZsWWuv1G+bIuNsNkunNMC4KqgmVIaF/mcAAELKDWGZ8SiKu7pbitrv98Ph0J8n0QPMD0Dr9dpuRZGeJ/q9t2rmgi5mGb/azL+3hbWTWtuo5rFWy/TmgChoDqMhEgDgXAlh6XvWLxYLTbJ7QBwOh8ir6yqoplIY+oxp2HXwilIZK72gfwsxi1b+lZjupdap7GU3rRiPx9agaXc18/uoAcGRwAAA5m1/D5Te7Eb8fuZDA9Vzx/y8ddYZiareIvHuFbXtXWvb/gK+9Of/bY+H4XB4Op2+v79DFwRXhAphkZeKoriNstJ9jKq/RwY/b6+obe9a2/YX8N382KIXtd/vlcCstRTI4yew6vqHNfCxlQCAJuBXAYEFrAlLrP/VGz0Jea+obe9a2/YX8KU////euyrgfSSul3zKj0Q9TZAAgNf1ns2RwK2e2zRJEyQA4CpqwoD/82NTOocVZKnMmYlfAIBihDDgDz+B+SmqoHosPRsJDABwFSEMSHL56Wp9mItceTMAAJCHEAbkSieqRCwjcgEA7kYIA25A6gIAPAtXRwIAAARACAMAAAiA5ki8huoeKwQAQBCEMLwAemIBAN4PzZEAAAABEMIAAAACIIQBAAAEQAgDAAAIgBAGAAAQAFdHIjxuPwEAaCFCGALj9hMAgHYihAEA6kPNN+B8UA8BAABQPzrmAwAABEAIAwAACIAQBgAAEAAhDAAAIID/ARXHAXL3yz9HAAAAAElFTkSuQmCC");

/***/ }),

/***/ 27988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/subforms2-fdeb5168781c7d5cf99dcc2d54f75423.png");

/***/ }),

/***/ 35689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/subforms3-a568914b035307adb69e854c3ec8c659.png");

/***/ }),

/***/ 747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/subforms4-27522593ad517729524997a4bd563b97.png");

/***/ }),

/***/ 85820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAABZCAIAAABQY9GQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAASjSURBVHhe7dxbjts2GIDRrMsL8iK6Cu+j6FMBb8aLmfImkvIl9TRyFfs/B0ZGokhKedDnIAHy4wuAYKQfIJyW/j//+tvHx8fH57M/NfjJSH89AOAjST9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONLPO/kDomrvwEakn3ey+QsAb0H6CU36iUn6CU36iUn6eY3z8cdwPLfRJ5SFh9OlnWZ1r59v8sycO+YX4HI6LDdePf36YeATSD8vkCM6Onw+/kr6y17zBmXCesebOU+bXoD5xum4P8Kd+8G7k362V8u/zR+WL+fzeptS4nWKb+Y8r78A6ZmPp9PhTvrr70f7+SjSzwvUPN/WfxlPxqX6RVHkwTKnXZ0u1aFpgyX/N3OGeasH2guQw3/Ov7bZaeW8Lt9D+/kk0s9L3AlyzXYpaL2aD+vRnNnR63I0970cT9ssZzdzmrHVQ+UFSCvLrOVnWTmvy1vPG8O7k35eqNa45neV7CXT9eeqzr3XdcGsLF7t82DO89ILMII/jtK+80ONC/AZpJ/XWiK/TvYy2q8OZV4Kbb10W9x5n0dznpdegOtvj7zdOv35Nt/8SoHfm/SzvcvpuHRzivPS9D6aa3ob7z6tXurNPZ/qpLG2n9zMaaY7PrJ6AdJubfac/ryL8PNhpJ/ttSA3U3tLi6sxOs3Og3OvVxutWpzVHt+fU8xbPfA4/d3PN4C3JP2EtvkLAG9B+glN+olJ+glN+olJ+glN+olJ+glN+olJ+gktvQAQU3sHNiL9AOFIP0A40g8QjvQDhCP9AOFIP0A40g8QjvQDhCP9AOFIP0A40g8QjvQDhCP9AOFIP0A40s87af99LcTT3oGNSD/vZPMXAN6C9BOa9BOT9BOa9BOT9LO3y+nwIzue28D5uDp9qfIC1Bs2h9OlXYPPJf3sbUl/j+4e6e/BLzd/4b3ne8FupJ+99fQvyd01/fV5Xndz6ee3IP3srab/cDzmH7m5q/TXk6Ils80/LF8YbWV2Veyy9uehvZP+0f55vB+Xg3P7uhrLbr7A2sxTe/4yM40srh4V/l/Sz95ayk+XcpB+1kDmNo6jNisf9vm9t1ejXVm+Hrr2n9K/bJonjsGy5HqwjY7rfR/Yk/SztynaNZbH/GsuZTmdk1pO+sFqaZ387ao+SH/fso/349XkdJIfJD9He8ykDT6xHPYi/ext7nc9LlI9UybrwZiWTvrBemmZ/O2q3kl/3rTecx7vx/PgMnUsydKMcvKvy2E30s/e5n4vZ0muZ+rk+kth6exz6b8zdO0m/XnNUvG8fTvOw+M+bfa4Pq1aDc7b9uV9EHYj/ext7neWM5pMzW2m4G6e/u7ODln+W6h+n/EPy+0hk/ooWd8hz7w9bluOlbAD6Se0778Ac9DhXUk/oUk/MUk/oUk/MUk/oW3+AsBbkH5Ck35ikn5CSy8AxNTegY1IP0A40g8QjvQDhCP9AOFIP0A40g8QjvQDhCP9AOGMzn99/QMN4RZfkNPjLQAAAABJRU5ErkJggg==");

/***/ }),

/***/ 50303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/subforms6-2b2d3b3837144e434b9af3266faa6a82.png");

/***/ })

};
;