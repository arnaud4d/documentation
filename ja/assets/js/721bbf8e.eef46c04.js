exports.id = 22215;
exports.ids = [22215];
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

/***/ 98133:
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
var entities_exports = {};
__export(entities_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(entities_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "entities",
  title: "Working with data"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "ORDA/entities",
  "id": "version-19-R6/ORDA/entities",
  "title": "Working with data",
  "description": "In ORDA, you access data through entities and entity selections. These objects allow you to create, update, query, or sort the data of the datastore.",
  "source": "@site/versioned_docs/version-19-R6/ORDA/entities.md",
  "sourceDirName": "ORDA",
  "slug": "/ORDA/entities",
  "permalink": "/docs/ja/ORDA/entities",
  "draft": false,
  "tags": [],
  "version": "19-R6",
  "frontMatter": {
    "id": "entities",
    "title": "Working with data"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Data Model Classes",
    "permalink": "/docs/ja/ORDA/ordaClasses"
  },
  "next": {
    "title": "Using a remote datastore",
    "permalink": "/docs/ja/ORDA/datastores"
  }
};
const assets = {};
const toc = [{
  value: "Creating an entity",
  id: "creating-an-entity",
  level: 2
}, {
  value: "Entities and references",
  id: "entities-and-references",
  level: 2
}, {
  value: "Using entity attributes",
  id: "using-entity-attributes",
  level: 2
}, {
  value: "Assigning values to relation attributes",
  id: "assigning-values-to-relation-attributes",
  level: 2
}, {
  value: "Creating an entity selection",
  id: "creating-an-entity-selection",
  level: 2
}, {
  value: "Shareable or alterable entity selections",
  id: "shareable-or-alterable-entity-selections",
  level: 3
}, {
  value: "Properties",
  id: "properties",
  level: 4
}, {
  value: "How are they defined?",
  id: "how-are-they-defined",
  level: 4
}, {
  value: "Sharing an entity selection between processes (example)",
  id: "sharing-an-entity-selection-between-processes-example",
  level: 4
}, {
  value: "Entity selections and Storage attributes",
  id: "entity-selections-and-storage-attributes",
  level: 3
}, {
  value: "Entity selections and Relation attributes",
  id: "entity-selections-and-relation-attributes",
  level: 3
}, {
  value: "Entity Locking",
  id: "entity-locking",
  level: 2
}, {
  value: "Automatic optimistic lock",
  id: "automatic-optimistic-lock",
  level: 3
}, {
  value: "Pessimistic lock",
  id: "pessimistic-lock",
  level: 3
}, {
  value: "Concurrent use of 4D classic locks and ORDA pessimistic locks",
  id: "concurrent-use-of-4d-classic-locks-and-orda-pessimistic-locks",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In ORDA, you access data through `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/ORDA/dsmapping#entity"
    }
  }, `entities`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/ORDA/dsmapping#entity-selection"
    }
  }, `entity selections`), `. These objects allow you to create, update, query, or sort the data of the datastore. `), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "creating-an-entity"
    }
  }, `Creating an entity`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `There are two ways to create a new entity in a dataclass:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Since entities are references to database records, you can create entities by creating records using the "classic" 4D language and then reference them with ORDA methods such as `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `entity.next( )`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `entitySelection.first( )`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `You can also create an entity using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `dataClass.new( )`), ` method.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Keep in mind that the entity is only created in memory. If you want to add it to the datastore, you must call the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `entity.save( )`), ` method.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Entity attributes are directly available as properties of the entity object. For more information, please refer to `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#using-entity-attributes"
    }
  }, `Using entity attributes`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, we want to create a new entity in the "Employee" dataclass in the current datastore with "John" and "Dupont" assigned to the firstname and name attributes:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `var $myEntity : cs.EmployeeEntity
$myEntity:=ds.Employee.new() //Create a new object of the entity type
$myEntity.name:="Dupont" //assign 'Dupont' to the 'name' attribute
$myEntity.firstname:="John" //assign 'John' to the 'firstname' attribute
$myEntity.save() //save the entity
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `An entity is defined only in the process where it was created. You cannot, for example, store a reference to an entity in an interprocess variable and use it in another process. `)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "entities-and-references"
    }
  }, `Entities and references`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An entity contains a reference to a 4D record. Different entities can reference the same 4D record. Also, since an entity can be stored in a 4D object variable, different variables can contain a reference to the same entity.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you execute the following code:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` var $e1; $e2 : cs.EmployeeEntity
 $e1:=ds.Employee.get(1) //access the employee with ID 1
 $e2:=$e1
 $e1.name:="Hammer"
  //both variables $e1 and $e2 share the reference to the same entity
  //$e2.name contains "Hammer"
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This is illustrated by the following graphic:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(92906)/* ["default"] */ .Z),
    width: "318",
    height: "129"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Now if you execute:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` var $e1; $e2 : cs.EmployeeEntity
 $e1:=ds.Employee.get(1)
 $e2:=ds.Employee.get(1)
 $e1.name:="Hammer"
  //variable $e1 contains a reference to an entity
  //variable $e2 contains another reference to another entity
  //$e2.name contains "smith"
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This is illustrated by the following graphic:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(61836)/* ["default"] */ .Z),
    width: "320",
    height: "129"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note however that entities refer to the same record. In all cases, if you call the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `entity.save( )`), ` method, the record will be updated (except in case of conflict, see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#entity-locking"
    }
  }, `Entity locking`), `).`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In fact, `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$e1`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `$e2`), ` are not the entity itself, but a reference to the entity. It means that you can pass them directly to any function or method, and it will act like a pointer, and faster than a 4D pointer. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` For each($entity;$selection)
    do_Capitalize($entity)
 End for each
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `And the method is:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $entity:=$1
 $name:=$entity.lastname
 If(Not($name=Null))
    $name:=Uppercase(Substring($name;1;1))+Lowercase(Substring($name;2))
 End if
 $entity.lastname:=$name
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can handle entities like any other object in 4D and pass their references directly as `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Concepts/parameters"
    }
  }, `parameters`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `With the entities, there is no concept of "current record" as in the classic 4D language. You can use as many entities as you need, at the same time. There is also no automatic lock on an entity (see `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#entity-locking"
    }
  }, `Entity locking`), `). When an entity is loaded, it uses the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/ORDA/glossary#lazy-loading"
    }
  }, `lazy loading`), ` mechanism, which means that only the needed information is loaded. Nevertheless, in client/server, the entity can be automatically loaded directly if necessary.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "using-entity-attributes"
    }
  }, `Using entity attributes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Entity attributes store data and map corresponding fields in the corresponding table. Entity attributes of the storage kind can be set or get as simple properties of the entity object, while entity of the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `relatedEntity`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `relatedEntities`), ` kind will return an entity or an entity selection.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `For more information on the attribute kind, please refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/ORDA/dsmapping#storage-and-relation-attributes"
    }
  }, `Storage and Relation attributes`), ` paragraph.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For example, to set a storage attribute:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $entity:=ds.Employee.get(1) //get employee attribute with ID 1
 $name:=$entity.lastname //get the employee name, e.g. "Smith"
 $entity.lastname:="Jones" //set the employee name
 $entity.save() //save the modifications
`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Database Blob fields (`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Concepts/blob"
    }
  }, `scalar blobs`), ` are automatically converted to and from blob object attributes (`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/Concepts/blob"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `4D.Blob`)), `) when handled through ORDA. When saving a blob object attribute, keep in mind that, unlike blob object size which is only limited by the available memory, Blob field size is limited to 2GB.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Accessing a related attribute depends on the attribute kind. For example, with the following structure:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(26972)/* ["default"] */ .Z),
    width: "690",
    height: "530"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can access data through the related object(s):`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $entity:=ds.Project.all().first().theClient //get the Company entity associated to the project
 $EntitySel:=ds.Company.all().first().companyProjects //get the selection of projects for the company
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Note that both `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `theClient`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `companyProjects`), ` in the above example are primary relation attributes and represent a direct relationship between the two dataclasses. However, relation attributes can also be built upon paths through relationships at several levels, including circular references. For example, consider the following structure:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(42683)/* ["default"] */ .Z),
    width: "516",
    height: "612"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Each employee can be a manager and can have a manager. To get the manager of the manager of an employee, you can simply write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $myEmp:=ds.Employee.get(50)
 $manLev2:=$myEmp.manager.manager.lastname
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "assigning-values-to-relation-attributes"
    }
  }, `Assigning values to relation attributes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In the ORDA architecture, relation attributes directly contain data related to entities:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `An N->1 type relation attribute (`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `relatedEntity`), ` kind) contains an entity`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A 1->N type relation attribute (`, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `relatedEntities`), ` kind) contains an entity selection`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Let's look at the following (simplified) structure:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(83277)/* ["default"] */ .Z),
    width: "764",
    height: "567"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this example, an entity in the "Employee" dataclass contains an object of type Entity in the "employer" attribute (or a null value). An entity in the "Company" dataclass contains an object of type EntitySelection in the "staff" attribute (or a null value).`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `In ORDA, the Automatic or Manual property of relations has no effect.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To assign a value directly to the "employer" attribute, you must pass an existing entity from the "Company" dataclass. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $emp:=ds.Employee.new() // create an employee
 $emp.lastname:="Smith" // assign a value to an attribute
 $emp.employer:=ds.Company.query("name =:1";"4D")[0]  //assign a company entity
 $emp.save()
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `4D provides an additional facility for entering a relation attribute for an N entity related to a "1" entity: you pass the primary key of the "1" entity directly when assigning a value to the relation attribute. For this to work, you pass data of type Number or Text (the primary key value) to the relation attribute. 4D then automatically takes care of searching for the corresponding entity in the dataclass. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $emp:=ds.Employee.new()
 $emp.lastname:="Wesson"
 $emp.employer:=2 // assign a primary key to the relation attribute
  //4D looks for the company whose primary key (in this case, its ID) is 2
  //and assigns it to the employee
 $emp.save()
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This is particularly useful when you are importing large amounts of data from a relational database. This type of import usually contains an "ID" column, which references a primary key that you can then assign directly to a relation attribute.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This also means that you can assign primary keys in the N entities without corresponding entities having already been created in the 1 datastore class. If you assign a primary key that does not exist in the related datastore class, it is nevertheless stored and assigned by 4D as soon as this "1" entity is created.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can assign or modify the value of a "1" related entity attribute from the "N" dataclass directly through the related attribute. For example, if you want to modify the name attribute of a related Company entity of an Employee entity, you can write:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-code4d"
    }
  }, ` $emp:=ds.Employee.get(2) // load the Employee entity with primary key 2
 $emp.employer.name:="4D, Inc." //modify the name attribute of the related Company
 $emp.employer.save() //save the related attribute
  //the related entity is updated
`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "creating-an-entity-selection"
    }
  }, `Creating an entity selection`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can create an object of type `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/ORDA/dsmapping#entity-selection"
    }
  }, `entity selection`), ` as follows:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Querying the entities `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/DataClassClass#query"
    }
  }, `in a dataclass`), ` or in an `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntitySelectionClass#query"
    }
  }, `existing entity selection`), `;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/DataClassClass#all"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.all()`)), ` dataclass function to select all the entities in a dataclass;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Create entity selection`), ` command or the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/DataClassClass#newselection"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.newSelection()`)), ` dataclass function to create a blank entity selection;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntitySelectionClass#copy"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.copy()`)), ` function to duplicate an existing entity selection;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Using one of the various functions from the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntitySelectionClass"
    }
  }, `Entity selection class`), ` that returns a new entity selection, such as `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntitySelectionClass#or"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.or()`)), `;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Using a relation attribute of type "related entities" (see below).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can simultaneously create and use as many different entity selections as you want for a dataclass. Keep in mind that an entity selection only contains references to entities. Different entity selections can contain references to the same entities. `), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "shareable-or-alterable-entity-selections"
    }
  }, `Shareable or alterable entity selections`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An entity selection can be `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `shareable`), ` (readable by multiple processes, but not alterable after creation) or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `alterable`), ` (supports the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/API/EntitySelectionClass#add"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.add()`)), ` function, but only usable by the current process). `), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "properties"
    }
  }, `Properties`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `shareable`), ` entity selection has the following characteristics:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `it can be stored in a shared object or shared collection, and can be passed as parameter between several processes or workers;`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `it can be stored in several shared objects or collections, or in a shared object or collection which already belongs to a group (it does not have a `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `locking identifier`), `);`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `it does not allow the addition of new entities. Trying to add an entity to a shareable entity selection will trigger an error (1637 - This entity selection cannot be altered). To add an entity to a shareable entity selection, you must first transform it into a non-shareable entity selection using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntitySelectionClass#copy"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.copy()`)), ` function, before calling `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntitySelectionClass#add"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.add()`)), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Most entity selection functions (such as `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/API/EntitySelectionClass#slice"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.slice()`)), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/API/EntitySelectionClass#and"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.and()`)), `...) support shareable entity selections since they do not need to alter the original entity selection (they return a new one). `)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `An `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `alterable`), ` entity selection has the following characteristics:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `it cannot be shared between processes, nor be stored in a shared object or collection. Trying to store a non-shareable entity selection in a shared object or collection will trigger an error (-10721 - Not supported value type in a shared object or shared collection);`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `it accepts the addition of new entities, i.e. it is supports the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntitySelectionClass#add"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `.add()`)), ` function.`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "how-are-they-defined"
    }
  }, `How are they defined?`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `shareable`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `alterable`), ` nature of an entity selection is defined when the entity selection is created (it cannot be modified afterwards). You can know the nature of an entity selection using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/API/EntitySelectionClass#isalterable"
    }
  }, `.isAlterable()`), ` function or the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `OB Is shared`), ` command. `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A new entity selection is `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `shareable`), ` in the following cases:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the new entity selection results from an ORDA class function applied to a dataClass: `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/DataClassClass#all"
    }
  }, `dataClass.all()`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/DataClassClass#fromcollection"
    }
  }, `dataClass.fromCollection()`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/DataClassClass#query"
    }
  }, `dataClass.query()`), `,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the new entity selection is based upon a relation `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntityClass#attributename"
    }
  }, `entity.`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "a"
  }, `attributeName`)), ` (e.g. "company.employees") when `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `attributeName`), ` is a one-to-many related attribute but the entity does not belong to an entity selection.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the new entity selection is explicitely copied as shareable with `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntitySelectionClass#copy"
    }
  }, `entitySelection.copy()`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `OB Copy`), ` (i.e. with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `ck shared`), ` option).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Example: `), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$myComp:=ds.Company.get(2) //$myComp does not belong to an entity selection
$employees:=$myComp.employees //$employees is shareable
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A new entity selection is `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `alterable`), ` in the following cases:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the new entity selection created blank using the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/DataClassClass#newselection"
    }
  }, `dataClass.newSelection()`), ` function or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Create entity selection`), ` command,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the new entity selection is explicitely copied as alterable with `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntitySelectionClass#copy"
    }
  }, `entitySelection.copy()`), ` or `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `OB Copy`), ` (i.e. without the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `ck shared`), ` option).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$toModify:=ds.Company.all().copy() //$toModify is alterable
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A new entity selection `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `inherits`), ` from the original entity selection nature in the following cases:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the new entity selection results from one of the various ORDA class functions applied to an existing entity selection (`, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntitySelectionClass#query"
    }
  }, `.query()`), `, `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntitySelectionClass#slice"
    }
  }, `.slice()`), `, etc.) .`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the new entity selection is based upon a relation:`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntityClass#attributename"
    }
  }, `entity.`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "a"
  }, `attributeName`)), ` (e.g. "company.employees") when `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `attributeName`), ` is a one-to-many related attribute and the entity belongs to an entity selection (same nature as `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntityClass#getselection"
    }
  }, `.getSelection()`), ` entity selection),`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntitySelectionClass#attributename"
    }
  }, `entitySelection.`, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "a"
  }, `attributeName`)), ` (e.g. "employees.employer") when `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `attributeName`), ` is a related attribute (same nature as the entity selection),`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntitySelectionClass#extract"
    }
  }, `.extract()`), ` when the resulting collection contains entity selections (same nature as the entity selection).`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Examples:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `$highSal:=ds.Employee.query("salary >= :1"; 1000000)   
    //$highSal is shareable because of the query on dataClass
$comp:=$highSal.employer //$comp is shareable because $highSal is shareable

$lowSal:=ds.Employee.query("salary <= :1"; 10000).copy() 
    //$lowSal is alterable because of the copy()
$comp2:=$lowSal.employer //$comp2 is alterable because $lowSal is alterable
`)), /* @__PURE__ */ (0, import_react2.mdx)("h4", {
    ...{
      "id": "sharing-an-entity-selection-between-processes-example"
    }
  }, `Sharing an entity selection between processes (example)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You work with two entity selections that you want to pass to a worker process so that it can send mails to appropriate persons:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `
var $paid; $unpaid : cs.InvoicesSelection
//We get entity selections for paid and unpaid invoices
$paid:=ds.Invoices.query("status=:1"; "Paid")
$unpaid:=ds.Invoices.query("status=:1"; "Unpaid")

//We pass entity selection references as parameters to the worker
CALL WORKER("mailing"; "sendMails"; $paid; $unpaid)
 
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `sendMails`), ` method:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, `
 #DECLARE ($paid : cs.InvoicesSelection; $unpaid : cs.InvoicesSelection)
 var $invoice : cs.InvoicesEntity
 
 var $server; $transporter; $email; $status : Object
 
  //Prepare emails
 $server:=New object()
 $server.host:="exchange.company.com"
 $server.user:="myName@company.com"
 $server.password:="my!!password"
 $transporter:=SMTP New transporter($server)
 $email:=New object()
 $email.from:="myName@company.com"
 
  //Loops on entity selections
 For each($invoice;$paid)
    $email.to:=$invoice.customer.address // email address of the customer
    $email.subject:="Payment OK for invoice # "+String($invoice.number)

    $status:=$transporter.send($email)
 End for each
 
 For each($invoice;$unpaid)
    $email.to:=$invoice.customer.address // email address of the customer
    $email.subject:="Please pay invoice # "+String($invoice.number)
    $status:=$transporter.send($email)
 End for each
`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "entity-selections-and-storage-attributes"
    }
  }, `Entity selections and Storage attributes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All storage attributes (text, number, boolean, date) are available as properties of entity selections as well as entities. When used in conjunction with an entity selection, a scalar attribute returns a collection of scalar values. For example:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $locals:=ds.Person.query("city = :1";"San Jose") //entity selection of people
 $localEmails:=$locals.emailAddress //collection of email addresses (strings)
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This code returns in `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `$localEmails`), ` a collection of email addresses as strings.`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "entity-selections-and-relation-attributes"
    }
  }, `Entity selections and Relation attributes`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In addition to the variety of ways you can query, you can also use relation attributes as properties of entity selections to return new entity selections. For example, consider the following structure: `), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(40218)/* ["default"] */ .Z),
    width: "1017",
    height: "794"
  })), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $myParts:=ds.Part.query("ID < 100") //Return parts with ID less than 100
 $myInvoices:=$myParts.invoiceItems.invoice
  //All invoices with at least one line item related to a part in $myParts
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The last line will return in $myInvoices an entity selection of all invoices that have at least one invoice item related to a part in the entity selection myParts. When a relation attribute is used as a property of an entity selection, the result is always another entity selection, even if only one entity is returned. When a relation attribute is used as a property of an entity selection and no entities are returned, the result is an empty entity selection, not null.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "entity-locking"
    }
  }, `Entity Locking`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You often need to manage possible conflicts that might arise when several users or processes load and attempt to modify the same entities at the same time. Record locking is a methodology used in relational databases to avoid inconsistent updates to data. The concept is to either lock a record upon read so that no other process can update it, or alternatively, to check when saving a record to verify that some other process hasn\u2019t modified it since it was read. The former is referred to as `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `pessimistic record locking`), ` and it ensures that a modified record can be written at the expense of locking records to other users. The latter is referred to as `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `optimistic record locking`), ` and it trades the guarantee of write privileges to the record for the flexibility of deciding write privileges only if the record needs to be updated. In pessimistic record locking, the record is locked even if there is no need to update it. In optimistic record locking, the validity of a record\u2019s modification is decided at update time.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `ORDA provides you with two entity locking modes:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `an automatic "optimistic" mode, suitable for most applications,`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `a "pessimistic" mode allowing you to lock entities prior to their access.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "automatic-optimistic-lock"
    }
  }, `Automatic optimistic lock`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This automatic mechanism is based on the concept of "optimistic locking" which is particularly suited to the issues of web applications. This concept is characterized by the following operating principles:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `All entities can always be loaded in read-write; there is no `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "li"
  }, `a priori`), ` "locking" of entities.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Each entity has an internal locking stamp that is incremented each time it is saved.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When a user or process tries to save an entity using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `entity.save( )`), ` method, 4D compares the stamp value of the entity to be saved with that of the entity found in the data (in the case of a modification):`, /* @__PURE__ */ (0, import_react2.mdx)("ul", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When the values match, the entity is saved and the internal stamp value is incremented.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `When the values do not match, it means that another user has modified this entity in the meantime. The save is not performed and an error is returned.`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The following diagram illustrates optimistic locking:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Two processes load the same entity.`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(26790)/* ["default"] */ .Z),
    width: "1091",
    height: "129"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `The first process modifies the entity and validates the change. The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `entity.save( )`), ` method is called. The 4D engine automatically compares the internal stamp value of the modified entity with that of the entity stored in the data. Since they match, the entity is saved and its stamp value is incremented.`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(50026)/* ["default"] */ .Z),
    width: "1121",
    height: "161"
  }))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `The second process also modifies the loaded entity and validates its changes. The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `entity.save( )`), ` method is called. Since the stamp value of the modified entity does not match the one of the entity stored in the data, the save is not performed and an error is returned.`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(75630)/* ["default"] */ .Z),
    width: "1084",
    height: "171"
  })))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This can also be illustrated by the following code:`), /* @__PURE__ */ (0, import_react2.mdx)("pre", null, /* @__PURE__ */ (0, import_react2.mdx)("code", {
    parentName: "pre",
    ...{
      "className": "language-4d"
    }
  }, ` $person1:=ds.Person.get(1) //Reference to entity
 $person2:=ds.Person.get(1) //Other reference to same entity
 $person1.name:="Bill"
 $result:=$person1.save() //$result.success=true, change saved
 $person2.name:="William"
 $result:=$person2.save() //$result.success=false, change not saved
`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `In this example, we assign to $person1 a reference to the person entity with a key of 1. Then, we assign another reference of the same entity to variable $person2. Using $person1, we change the first name of the person and save the entity. When we attempt to do the same thing with $person2, 4D checks to make sure the entity on disk is the same as when the reference in $person1 was first assigned. Since it isn't the same, it returns false in the success property and doesn\u2019t save the second modification.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When this situation occurs, you can, for example, reload the entity from the disk using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `entity.reload()`), ` method so that you can try to make the modification again. The `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `entity.save()`), ` method also proposes an "automerge" option to save the entity in case processes modified attributes that were not the same.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Record stamps are not used in `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `transactions`), ` because only a single copy of a record exists in this context. Whatever the number of entities that reference a record, the same copy is modified thus `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `entity.save()`), ` operations will never generate stamp errors.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "pessimistic-lock"
    }
  }, `Pessimistic lock`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can lock and unlock entities on demand when accessing data. When an entity is getting locked by a process, it is loaded in read/write in this process but it is locked for all other processes. The entity can only be loaded in read-only mode in these processes; its values cannot be edited or saved.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `This feature is based upon two functions of the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Entity`), ` class:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntityClass#lock"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entity.lock()`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/ja/API/EntityClass#unlock"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "a"
  }, `entity.unlock()`)))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `For more information, please refer to the descriptions for these functions.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Pessimistic locks can also be handled through the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/ja/REST/lock"
    }
  }, `REST API`), `.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "concurrent-use-of-4d-classic-locks-and-orda-pessimistic-locks"
    }
  }, `Concurrent use of 4D classic locks and ORDA pessimistic locks`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Using both classic and ORDA commands to lock records is based upon the following principles:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A lock set with a classic 4D command on a record prevents ORDA to lock the entity matching the record.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `A lock set with ORDA on an entity prevents classic 4D commands to lock the record matching the entity.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `These principles are shown in the following diagram:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(92721)/* ["default"] */ .Z),
    width: "517",
    height: "571"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Transaction locks`), ` also apply to both classic and ORDA commands. In a multiprocess or a multi-user application, a lock set within a transaction on a record by a classic command will result in preventing any other processes to lock entities related to this record (or conversely), until the transaction is validated or canceled.`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Example with a lock set by a classic command:`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(22477)/* ["default"] */ .Z),
    width: "774",
    height: "501"
  })), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `Example with a lock set by an ORDA function:`, /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("br", null), /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(51980)/* ["default"] */ .Z),
    width: "763",
    height: "427"
  }))));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 92721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/concurrent1-49c9a9a80e0fcc2837f48c20d0f67141.png");

/***/ }),

/***/ 22477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/concurrent2-ce7d69ba154b5bbe035dab3d89d4fa60.png");

/***/ }),

/***/ 51980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/concurrent3-9cfb07d9bdbbaf3a102733cf620426eb.png");

/***/ }),

/***/ 26972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/entityAttributes-8c08eacf2d0a37b1dbb0c75e2f639adf.png");

/***/ }),

/***/ 42683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/entityAttributes2-0e6ac7fd19e06c5ddc21306d84317584.png");

/***/ }),

/***/ 83277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/entityAttributes3-d07772cfe65c0a91eb7c8e56629e9d41.png");

/***/ }),

/***/ 92906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACBCAIAAADWsUFzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB1mSURBVHhe7Z0JeFNl2oZH8Rqc0XEYf8f5x9lcYBh+R0ARBGVR2WQTGVcWHWFYFDc2WZWKLKIUQSiydy+lUCilLV0p3be0Sbd037ekSZO02domaf2f9CsxBtrmAAmnzvtcz9XrfMv5TtLkPu/7nmy/+IFEIvVDEbokUr8UoUsi9UsRuiRSvxShS3KqTB0dujYD2X53dnb/62xE6JKcqsTcqudXn5y02p1sj19YfUKp1nf/734qQpfkVAHdZ9f4Df/0EtkeT1rtQeiSeCFCl5MJXRJfROhyMqFL4osIXU4mdEl8EaHLyYQuiS8idDmZ0CXxRYQuJxO6JL6Ib+i++V3yOh/hrN1xNv08MaFL4ovsR3eCSzSg+jwg18o5Sw6n2Uy7SfsnVxlMHdsC82z6eWJCl8QX2Y/uG/uTGlR6aXPr+YzagJRqZpezuTbTbtKELolkl7iim1rS9OznUTZDt9CELolkl24JuujZG1q41ke42T/nQHgxvMozC/1v7k9izXW+whe+vMwmLz6cBjKn7ojd7J/NRl3O5I7ZHMlGbdB97vMoy5rwxx6ZrH+RW8pXF8T/2pvImvB7xzN2BxdgWdbcfi7fspdlDowDfeyZxfpdQwr/cyTderRPE7okvuiWoPvSrivgrVSiicmTHoosCRPWl0k1R6JLveIrfBIqL+dJxXXNX5zNHfeZecejMaUSlf6CoDYip8H9Snl0rqRWoQNpozZGYNQaXRwIgIlrm08nV2HZi5l12VUqRu+O8/lI3Xeez8c2PPGLmKgcSUWj9q3vkl/88vI3wQW4AVgce9Up9bglbNrozZHYMbtaFZnTgKHAtJq00qalRznQS+iS+CKu6NYr9b6JlR5XyuG9IYVsCOiaOjqL6lsQ+tBcfixDpW2vlGmBK8Lm+ycEBXXNoJoFSaDbojcAwlVeWWO2RM5zTSiVqEulGga2Bd1RmyIQxnG44My6SV/EYAgzr4ilgnLFwoMpK45n5Nc2A+aZXdei0cTRz6XXTN0ZuzMov0HVuiekkEXy9X6izh9+QOjG9vPbYqrlupRi+dw98WhincL6FizC1rfHhC6JL+KKLoD8NrQIySq86VQ2GwK67caOcFEDa77tllIiUSOygVs0X/4mPipXUlDXAqTRZOgizD6zpTtJjshu0LYZ39iXNGL9j+iO3xqN6C1RtX7o3p0kj94csb0r2CLRBYR+SVXljRrwj6HvwotqmrTrfIQAPjpPihs5fdcVthesazclFcuf3BC+xjtLrTdgd9Y/a3fcJVF9dpVy4cFky+Te3Te67QaTa0Diz8AxWWXsHpH4qVuVMLcZTAiPrLngQAqy3GBBd3PazlhENmSwK08K0GToIk6yURiJK8hfeTLDGl3kwMhmsdcEl2jLTIBap9C5RZjL1y/O5tUp9NvP5QFjwF/coEYURX9WhVKlaweTCMLMbcaOzAoFyPdNqsSBMsqaWP8lUQMgR0aw/Ji9OXPf6OpaDTM3ep5OSOzX3uYbuj8wmd0jEj/FH3Rnf21OfW3QtYmfa7yFuA0MXZS1ycXyUGH9riAxQvqZ1GocCP251SrE6t3BBZv8sy3G4ZA/BwlqdW3GgJRq6yHcKpTHlkP0brvQnfuZV01zcb+2X1wCoctz3S50D0YUj78aTuPEjS16I1vWgi6aAanVMnXbZv/utBzF8N7QQmCJXB1NoHj8chkyc2GlokquXe8rYhe6EgplFY0aa+CZMYoyGIf++mKBzZD9JnRJfNHtQrdeqUcIRRK7zlckUenjC2Ws9LWgi9J08eG0xubWy3lSts6/D6UiuoZnN0zf2Y0lptU26fTtJmGlcsGB7noVZGJB74RKdt0LDhM1fOAuQDY+55t4hHFBuWLmV+YVkGnvOJ/PTgR2mtAl8UVc0W3WGTLLFUhlzS5p8oyrwNANoIv8NrFIBopqmnTYQPY7cn04Ri3oYhtgb/AT1TRp2eFyqlVhwvo5X5svDjO/sS8JOTPuBaLx2KugAsjPA3KqZFrUt2xHn8RK9nrvUxsj3j8hwDp5NSr0445cENTN3ZPAdrTHhC6JL7IfXURFAPbOoVRr/2uv+Xn/9KaIRW4ps69CBYpe+zbR0sQotoHZ+K3mDJmhu8oz6/V9SWwRjCLGsskzd8e97ZZief8GsuL5Vw+66GAKzhGsnxkr4xQga2mzXIVmxk217AVP3v5jKYu0+V97E1n/226p1icCe0zokvgi+9G9Vb72MtUNe8nhNFGlEqXyq9/++LYqh5rQJfFF/RrdfWFFck076lV2gcoJdh66M+dOP+J1oEpZaNPvHBO6/Jfz0UXajLyXvdXpJs2WslS5TrDz0H3oT3/0OHOU0CX1JOej26/tDHRHjXnyt4Puu/POO+6559ePDx9mM9qL0wviF7z7xsOP/vWYr5vNEFcTuvwXocvJjkU3szhp+JP/nD1vBiAslebCQ4YODoo6bTPtuv7m4M7f/+H3Awbcef///O6Q+z6bUa4mdPkvQpeTHYuuf7Dn3x75i3fgiYomsc1Q7w4I8X5q9Mgl773z+c4NT4x8nND9bxChy8mORdfNfR9K3D1uO4slOTZDMOremNTQu+4aMHDgwF/+8pcvTJ1YLs+3mbPn4E5C979EhC4nOxbdrOKkJ58eceedd7qfPpJdnlYizbUMVSoKEFoH3T/osx0b0EwURc+YM23arMnl8p/EZ0L3v0dA97k1fiM+DSXbY4dfpjoT5gP2UK8C4OUf/SddHM9Ca1G9aN6bLz8/ZaJlJvLqfzw+9KT/YUsPfMvQjU90PZPcZuzo6OEnSUm3XUB3yjqPmZt8yPb4xTUnHYsuc1RKCAj8wx8fvOOOO9jl4rwqwSOPPbz4vbeTsmOY3U5+O3LUcNdDu6x3vFXoBqRkfHQiLSSnqVymV7eaDKaeflWYdNsEdBd/e+lkYgPZHs/e4ucMdJkjk4IfePCBP/35IWznVKQjDt//wP1Dhg62eOKLz9m8DnSr0D0Vn7jBPT5A0Ph1eLV7UoOgskXS3K5tM3UQwrwRocvJTkUXXrj4rYEDB2IjtzIDGH+wZoX16LW+5bWuSmdMLm0+FFt3IKY2LLepWKpTaA3tRiL49ovQ5WTHopuSG5uad8XyypCgKHH0uFHPTRyLbdS6r81/ZfqsKcLSFDYqrsmKE0SUSH9yLdpBl6mMpk5kzmcEjfuja33TpGnlLTWKViTSVAnfRhG6nOxYdD/bsWHBu28e83HzD/aE31m28OmxTwWEeGOoUlEQGO43bvwzKz5eykZB6crVy9PF8RhFJRx65Rw6l3+0BCXxx5+uxHZ8VmSZLM+yOCf3dIVZoTUmljR/f6XuWEL9pTyFuF7b2NKOSrh7mOREEbqc7PCou2jJ/JGjht/3299MeOG5ydOfTxfHWUarlIWoftHJvPzDJYxbOCr5IqC1DDF/fWAH0mzL7pzc+4tDCMLInAMzZW6xtQEZjUmlzYjJLXpj9zDJKSJ0OdkZte4xX7dnnh0tKku16Xem7Xxdt0lrSCxtPhpX75HUgEpYVKOpV7UZTB3dwyRHitDlZGegeybM1+WrTYX1Ipt+Z9pOdJmQMBc0mIPwkbj6AEHjlSIlYnKznq5lOVbORPeCSB4lVp5Kl2IbD/TlAmVcscric1ky68m92CdVilN8TIHyjKDRZsjRdga6fDAndC1CJYzk2TtF4pMquZgtT6toqVW2tRt7JLijs1OuMWjbTN1tEhc5E93cOo1KZwzPU2A7vaJFb+ioamotkuhgZF4V8lbQaD3/ukZtlVGpVmjNjziAtxl1tAndvtVu6ixs0AFdr2QJHq1IsflqFh74a4MwuD0vlOXXa+nl4hvQ7UJXWKNuM3YEi+RsKEqskGkM6lZTkLC757o+lSbNqlbL1AagqyF0HeebQZcJNDaq21PKmpEanUpvBKIIyDWKNjzq3TN++CG5rHlDYBkeVDwturtIdosn6MI4O7OiydJzrU93Xc4EscJqNYopQtdRvnl0mRBM9e0dSKsi8hX+6VI4JKcpt1aLBw9Zk1eK5F33grUBpaIajamjMyKjxCtS2N8dcCW3+847WPxBF1a3GpE5eyQ1JJY2I7paO7W8BaWyZSaahK4DfavQtcho6pS2tKeVt5wXyhGEEYrhLefLFx4XLzohdk9qwAO/yi103fHYL0+l9l+7+CbP+9y3+z47WLxCF7UPgAS6CSXNmVVqayPzss6lCV3H+pajy4SSVtNqKpbqosWKXWFVCLlAF/7wVLGgsuWD70J84ssvFyr7r8NzZf/N6Fr39GRC17F2ELoW1Snbvo2qYdwyH7xcu/CrIELXfvEKXZyRJc1tHkkSQaW6sEFn7ewaDaoky0xeozvtU/etXiH92iv2nXEoumkVLZ+eLbNwu8yrCCS/tSvIJ4HQtVf8QTe2UImCKLm0GYVPlFiZUKKyNkbPZv74wi9/0TWaOmKF5T8DF9eYfxLGEdK1m/zTpciWV3gXbQ+tPJUuRTlULtO/vz+E0LVfPEE3tkip1BmQMPulmd+w0af5iy6pTyFbPpclOyNoRHJVKW9V6XG6M7+uu8otlBJm+3W70EXGpDd0SJrbq5paYXAorEZK/JP8+VqfzWwU1WgwX6k1Gkzmt+JUyPWXcn9MpB1tQvcWSN/eIVMbWlpNNh8aJHQ5yZnoBmbKQnOafFPNcfV0RmNYblNEvsJie+KtT4oEgdp6L5wI/NOd93ZIQteBInQ5yZno/gxM6DpQzkQ3Kl82YdqcGa8usum/SRO6vDWh60A5E93IvMaH/vrIsBFP2/TfpAld3prQdaAciu7CFWtGj598MaOKNWMKFH4x2f6xuazpFSEYO2naexu2s+YN23Hoths7s2s03Y0uEbqcTOg6UA5Fd+Zri/7y6JALaddf/+TF5IeHDFuwfJVNP1c7Dt0WvdEluCI4W268em2P0OVkQteBsgfdS6L6jbsPD7r/Afhvjw39aMtu1n9RULXwvbWz33j3/Y07//nUMxh9ePA/vvMLx5B7SMo/ho/65cC77xww4L5B92PoiwNeqHUnTX959ITJYcK6T7bu+c1vBw0YMGDg3b/C6ISpsz/c/NVTYydu3P09WxzedtD7/0aO/tLN19JzXTsO3Wa98WP/4hXeRR7JDbp28yecCV1OJnQdqD7RDc2qXblxJ4jdefh0SGbN9kN+Q//55Mef78FQcEblq++8N+Cuu0aMeW6PexBGx0+Z9fjI0SeCk6LFTeBz2ty3/vzwY8iQMRSVJ4NHPft8V62riMxtPBQQjWVfX/wBRnF2OBYU/9zkmbNefyc4vYId+pWFy0aOGf/92cus2ZMdiu5Hp4oXHhcv8Sg8EFPbpDEQupxM6DpQfaJ76nLO4P8bvmytCypVNM+nlL79/rpxL7zkGyVk6A4bMWqPRxAb3XbQ56+P/t3VM5jta5MwW6FrbtokzAD43Y82DX/62f2+YWj6RYtwIliwfPX55FI2oSc7AV34nZMF20MqvWMLCV37Teg6UL2jG5Uvd/W48OAf/7z72Fmku/DFjKr31m8f+cyEI+euMHTHTJxyODCWzUe2PHjY8M3fHA3PkaDJCV1415HTGMX62HbZ7zFizHik2ZbRnhyRJ5+7Oxpo3XK/faL7U1bMi06I3zqYtswt1uYJ+nOye2KDR1KDe5JtP3xBJJe2tBdJe/twv40JXQeqd3QjcqWfuZ644447UJH++p57LR47aRry21uOLiL59Ffmz3lrMWL7q/9+f+Qz45FUW0Z7stOirktwxdFI8c876iaXteCO59VpWNMrReKZLGHbhC6/1Du6qEhd9nsi6n59PNBmCO4T3VlvvNMbuiEpjw593OYK84dbdj85duL6XYcmvTR3/tJP+syWYefUuq6R1XWqtp99rZtQ0txq6MBfbJ9Kl+raTeIGLRsidPmlPmtdnyjhQ395+JOteyLzGtFETRuaWXMhzXwlqU90F3+yGaXvueQSNmqDrndk5pgJk19f/AFrMn/rHYIFR4x57qlxk7buc7ce6smOvsK83LvoaHw9ttHTC7qITniue6dITqVJT2c0wl5X4xXsd7UT9kkx9yM1ZZPxl/VjDnbxTe2eiX7L7tj2T+/eHdOwr2XousaNYZOxPgub7FjYl62Dm+phdSxssDXRiSYmw2BVbzCVNOrYBIYumte9hdd13+h2dHbWypp/BlZqrn8/Hac+0b0oqFryyZZhw0ftPOzvFS44FpSwdPXWhSvWYKhPdLfu9/jd//x+2wEvz0vpl0T1NuieSSh46V8LH3/yGSwbECeOzpej0zdaNHXum7/4xS8mTpuDsMxm9m7Hocte1z0rkFl+JqYXdCPyFE1aQ26ttk7ZBs6xS1p5C6PXP11arTB/3AcL6g0d+fVa4IRcNLmsWak1imo0mlYT4ptMbcAuhQ3m79NuM3ZkVqkZGz6pksxqtVJnbGk1YkjS0n4uSwbSsGxgpszaZwVmsLF4fLEKK2ByrbItMt/82aPUsma5ph37KrRGbbsJQ7GFqnKZHhvtRvPXxLKPJYRkN+Fuppa3JJU2sx+4wigOnVenBbqN6nbcyNJG817aNlNOraZ3evtGV9dqmLL25Du7/fu1X3XxcehH7a+rPtGFQzJr1mzbh+SWef6y7hQX4Xf5ui9env8f99BU1nP0fPzzM17ZdeQ0imTWM33egsHDnsBeRwJjo/Lls9/495Q5b7ChrvlxbM1XFixlkRxeumYrSmucL8Kyai0ze7Hj0MWzNqOyxfpbb/tEV9/ewb6eoqBBB0qBE7Zz6zR4umMDUOXVa9GPOQxdwAFsAgSN4XkKEIIjple0YGZWlVrTZsK9wzZAArSgkZ0IFFoDCAQzWAocWhtoYfeQbLlKZz4jYDJuFSA0L1LWjOPWq9pCcuQ4Ogg0mjoLJTrwL6xWt5s6rxSpPJIkDN2UMvNtuDZhlqnNvxqL8wuaWBYAJ3al1j3ZLnTpC25uTPag60yjul7x6ZdPPD3uq2NnbIZ6suPQvVZ9optRqfbp+pgeSAAq4A08oIk4eTFbDjCAFuJhHDjsQhfP/iixmU9MqJC3wgEZ5uiXUKJSXf1wfLFUJ9cYsCBWgIE6VmZZ93WNOUqdoaBBez5LZomKQBfMI9KyJk4lyH4xAdsXhHIAmV2jwZmld3Sta92YAiUWZCeankzo3pSQHeGBx9Olu/1T8Q1dj7C05196Zcariyxvde7TfEZXWK1BqAwSyhU6o6S5HUZotRNdRF38xXZ1U2ur0fxxa7YCXKNsxe7YJSy3ydqhOU1nBOYqNLtWA65wexAh0YNF+kQXRSzW5IQubjyyeta8rgndmxL+9Tib4rlSo2htNdgCzDd0US2jAN7ietymvxfzH91GtQH/eXS6JzVEi5Vc0a1saq1TtbHc29pZ1WrU1dZGQE7sSo9hnC/KukpZZMW4SYSuA+0gdMtl+t2XqpZ4Fu4Kq4oWK/A8QD1mqd74hu4NmP/oolJtaG5DJ5Jn9HBFN79ei+QZzOMUjCaYREp83XdNwB5JDQiz7FussFSRRAfsQd2NoYvbAPLZLoRuj3YQusjQPJIl7H0F/+kCODxPgTM0+zQMoctJN4ZuTq0G4Qs9KH2BMVd0L+U1AT9E1KTSZiyCky+AYRhfa/QDKszBTExDdo0i1i/tRqKub6oUx8U0/JNxLiB0e7SD0EWqhkfI+j197/kUxxYq27qSZ0KXk3pBF/9kgBqZr2DXgS9mNyFaRhco2WWqYqmuRKrH3/SKloIGbUhOExi7lNuEopT9TIF/eiNIhn27vnQKVWtunQZ/sQ2DXqyGFWAcpfeXZBAtU8tb2GSgxTJtnK9F1Zrg7O5vokNeLahSoyrGNk4WeXXaxBIVbtJZgaxEqrvU9V127CyARRB4cdLBNKzGziYwSMaNjxKbZ/Zk56F7zNftiiC8WlVk0+8c30J0TR2dKp0Rp/CsKjX++26xdUs9Cxm3b58Qu0bW4KzMcmZCl5N6QZd8rZ2H7tBhQ7732F+lLLTpd45vEl3zD5S0mZBWCavVONkjAcNpEqdwnFmRL30WVMHQ3RhYJqhUW95jQOhyEqHLyc5A9+vvtq/fuube39z7+oJ5O1xdbEav67LGvNMh3tiL2evscXFNps0cTr4xdFE41SrbRDXm1MX8fprMxoCunwVD6QWG61XmX+hEBHZPagC3K32LQ7Ll6tYffxeb0OUkQpeTHYtuQZ0QrD47cezKVcvWbv4YfnTwI6n5V2ymXevgmDPLPli87MPF2GX2vBmTJo8/cNxVXJNlM81+24+u0dQpaW7PqdVEihUM1LNmaGUR+WZcQbK+6ysdLEL+jKpphXfRsfh67Njd2yWgu/pozFafpP7rLV4JhC4/7Vh0IxIvPDbk0S3b1xfWi1jPHredGQUJlgk9OTo11D/Ys6DWzCoq5BemTnxh6qSo5IvWczi5d3SBn1xjyK/XonZFJow0ODBLFiQ0f0F2ZpUatat1LL1W6RUtxxMaxA22P2Z/WVjuH5vT3x2UKO6+Pw4WocvJjkX3uN+hP/3locNe35XJ8myGmEVlqe8uX8S8c+8XNqMWL1357oinnjgXccqm335fi25H5w/IdYskuthCJVj1T5eigr2Y3YTcGPVqhby1pdXeX6aXqQ3VilYkz91t0g2J0OVkx6IbFnf+0SGPjBs/5nJamM0FqmpVUaIo+rUF86bPmoJi+NPPVr04bVJP9C5e8fbY8WNCYgNt+u03Q5ddbSpt1McVq4CrT6oU+fDFbPOnarKq1OVyvVLX/XNBnIRlue9EshWhy8mORbdEkrPRZe2g3w2a8MKzr7w+55iPmwXgUmnu+s9XP/7EsOiUEDSRG7t8tXnUmCfDEy6wCRbHpIai1l20ZL49RXJP9k9MWXsyEcmwR5L5N2ZQncYVqbKqNeUyfZPGYLkmTLqNInQ52bHowsKSZM8zxzZtW3fvb+4Z8o/BM16ehtoV/eKarDHjnv73soWWmf4XvZAVHzjuaumBC+tEn6z/YPS4USdOfV8my7ce4uTTSakbPJOBq/Aqru2W7/8l8UOELic7HF3m/JpM3/Pun+3YcNddd818eTp6cisz7rn3nkcee3jy9OeZEXIH//0x10O7rHfc/d12AL9526f51QLrfq4+FZ+450yy3mBzIYnEIxG6nOwkdJkRaRF1f/XrX2E7pyL97rsHvvrWXP9gT4uDIk9nFiVa5h/zdfv7sCFLV74rLE2xdN6Yb+x1XZIzRehyslPRhWe9Mv2PD/0vNsQ1maPGjFy05C3rUWufvuiFjPq1+fMShFE2QzdgQpf/InQ52bHouny1aYerS97VXPfgyW8H/W7Q1p2bsI3CFcnw3x7560n/w2w0LO78ylXLU/PM16JCr5ybOvPF2fNmhCcEVSpuwXsnCV3+i9DlZMeiGxjuN3LU8EcHPzJk6GD49w8+4BFwlL0pqlpVBKT3Hfn6D//7IBsFq2cv+QLponrRpm3r7v7V3ff99j4Uw2wU3vTFOlFZqvX69pvQ5b8IXU52LLrlsvx0cbzroV3DHh8aEhuYlB1TLv/JVeISaS46mQWFCWy0SlmYV5Vh6bcY5XGlosB6d/tN6PJfhC4nO6PW3fv97qkzXgR4Nv3ONKHLfxG6nOwMdMtkeciBb9cndZkJXf6L0OVkZ6DLBxO6/Behy8mELokvInQ5mdAl8UWELicTuiS+iNDlZEKXxBcRupxM6JL4IkKXk+1Cd84Wr7RSUb/2oZAYQpfnInQ5uW90W9uNy/cG/QzsF5PN7hGJnyJ0OblvdEkk54jQ5WRCl8QXEbqcTOiS+CJCl5MJXRJfROhyMqFL4osIXU4mdEl8EaHLyYQuiS8idDmZ0CXxRYQuJxO6JL6I0OVkQpfEFxG6nEzokvgiQpeTCV0SX0TocjKhS+KLCF1OJnRJfBGhy8mELokvInQ5mdAl8UWELicTuiS+iNDlZEKXxBcRupxM6JL4IkKXkwldEl9E6HIyoUviiwhdTiZ0SXwR0J2y1n3GRm+yPX5xzUlCl8QLmTo6dG0Gsv3u7Oz+19mI0CWR+qUIXRKpX4rQJZH6pQhdEqlfitAlkfqhfvjh/wGZAy0S2Q46/AAAAABJRU5ErkJggg==");

/***/ }),

/***/ 61836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAACBCAIAAAA+MfRYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB7dSURBVHhe7Z0HdBTV34YFBCkKUsSPolKVIk0QlCIgIAICCoJIkSKoCEjvHaQXifQkpJAK6ZDeSK+kbnbTe91sNr0X/N7Njev+B9jsBGaZwH3Pczgz996Znd2zz/zu3U3Ca//Q0NA021CBaWiacajANDTNOFRgmheW6tq6yupaiuo0vHAKoQLTvLAc1HGZsvXWlK06FFWYulW7vLK64bX7N1RgmhcWCDx6h9XwnfYUVZi8VYcKTMOjUIFZQQWm4VeowKygAtPwK1RgVlCBafgVKjArqMA0/AoVmBVUYBp+hQrMCiowDb9CBWYFFZiGX+GVwGP2Oi76y2fVNf8pR10ZXTyBCkzDr6go8Ihd9tOOu23SfajIr5pBs097MEY+C9P/dHeOzE6VlP6h95DRxROowDT8iooCj97juNMwtLbuUaqkDI4RzAPToDFj5LNABaahYRdWApdW1hh4JTO6niNUYBoadnkuAs8/57n1dujam4Fb9UMO3IkA35zxRPvPNwLI7tK/fT/d60gGr9OUDRu524F07TeNQAvpelxgzNv/0Gs4J1hwwZu0Y52MkygulX/RDNxlGDZ2nxPZPWDacAga5WPA5weccZ0NXUZh8hOqCBWYhl95LgKfsBLml1aFpxQ4RWSbB6Ql5JTce5hx1FxgFpCGDex6x+T+qOE7arcDBnuKxJLiyhOWUWEp+RaBaRGpBTGZRauvBaCLIfCMP92vu8SHJuc7hGXhtOEp+Xahmd+d90KXiW9KVkE5VMQ2+OKwC3qTckuhNDh8NzKvuBKHWAWlp0vL9hiHk2HjDzofMRMEJ0p9YnLRiyuxDc1cyMZhKjANv8JK4KqauqAE6UkrIThmIVh9XWYdgMDogg/LL/thV9s9saK6NiqtcIteyNj9TpfsY6D3dee4CYdc0IthWEuHJeevuREwYpf9Bp3ggrKqB0IxuhQFhmx4lBRJqc6DxC+OyA7Eehuq3/VP/eqEOx49M78cZybnRJe4qMLIJwUF9rSNEDeaC7bRaMdlX3OOw6Ovqb9UuIq7iYdIvOCC7C6AR0kSl+D8OAq7qkAFpuFXWAlcXVsnyijS90wC2u4JmMSSXlKBT1kLye5pG1FuUeXZe6Jx+2UT2p9vBsBDaDP9uDt2icDyafNnB5yF6YUYMPWYq6LAmNx6RotRn4l7YOIhF1O/VIyErvPOevrGStC76C8fdGFeAIFXX/NHkUdjal4Zbg3kqMlHXIsraqyDMz7d54TpOoadsIoiXYsv+XhF5+J6iM+qQAWm4Vee1xQaxqIqkt1jFlGY38onrqh78dnFmLiicmKXCAydSC8kh4qYVC/R8FEUGMVcmFHkFJE16bCsxhIuO8ZmSMtwJdjW80jKKazALABz5pAkKe4sOBztaMwurNBwiNWwl6HpmgCBHSOyph5zw4y9sKz6fkgG6cJziau/sBVXZRMHVaAC0/ArPBEY1k077va4wI7hTxV4s14IJsAQ9eCdiKz8clwYmU4XlFWjzN5wicf6mXDVKW6HQShOjiU6BMY55V3g4J1IcmGqoJLAmKho2z18CbD2ETU8JXVFlJLLuIZmSlRyTsNT4jgvSmAsgEkvptBR6YVJ4lJsKwqMo7yjc8NTCuQr7QmHnE18UzCF/qP+y2csjN0EOeEp+b6xudkF5Tgh+ZAMh6OuyqfQcnAjuOWeANX3mUYwulRHJYEx4uvdujfs3Zo1Z80cf7lg1fCU1BXcMlaetf7TNLBZs/qcjblnVMNT4jgvSuDgxLzZpx6M3OWw2zhcWlJlG5qJLkWBoev5+9GZ+eUa9jHkPCi5qMl3/FO/PvmAtOh6JKJ0F5VX4+QzTzQ0QvKC0qpDdyPJLir8JfvYHzR8Ptnj8KtWUFpemVVw+tT6758w995lFLZeO5iMVAVVBZ63Xz+tMLZZExAf9kIE3qPj6Rad36w5oO/NT4ExN4zOLDLySSHcck/8/Zbs3d8EgU19U1wisyFbTFaRV3TusvqPrxUFxu6sUw8wADWWPJx/nMQ6OJ18jURAKU7JLcWzOGYuIB+YgQUXvPQ9k9KlZeQoY98UOD//nOx7aRThC7bRkakFtiGZ6LIOzjD1S11xRdUFMKACcxsqMNuoKDBK5ZzTHsctohTB6vFHDV/0QirMS7/9Vy1s7DUOJz/LAaANlqCQ7bN6x4jAkJOc5Ki5YOnfspMASIgiudsoTF5jZ5/yOGAa8e/DRcw/9z8fF0885BKSJMW9A/cIxfapx9xwNyFHHb4bOa/eXsLEwy5b9ENI1xFzASt7ARWY21CB2UZFgZ8jjA+xngWse1HbnSKyVP8U6hmhAnMbKjDbNGuBDbyT80qqdhqGyX9Ok2uowNyGCsw26hd45TX/7QahI+s/MX5Gll/226wXovg9E9dQgbkNFZht1C9ws0atAm/ZvfGWyfV4sYDRrh6owE2GCsxb1CrwyNHDL14/Ey+OZLSrh1dB4J0nrsyY98PVOy6M9meECsxb1CTwql+Wj/18TPv27foP7Ddr3lfCtBDGgKchSA0+efHIlOmTNDTPM7rY8ioIvPy37T3f73vy5h1G+zNCBeYtnAscmRy4bPWSaTOnaBldtXG9C1CHzewNU/KjGSMfx8rZdOKU8e/+X/e3Or6158h2Ri9buBa4uvZRZkFldmFVw359OBX4b2OHWQuX7zt7U95i+iBK08rLJiiZ7C5fv2PekjV3vUTyAU2DU4HxoomL/nvRqMCs4Fzg++5mHw8fcuLC4ejMMNLiGeIkSg9JLYiRj3kiXqHO3y2eN2nqhB37Nw8ZNpj/AlfW1HnFFZxzTI3LKW9o4ljgkzdMB48Y8+vOY4x2OVPnLBwxdoKRazijnS2cCuwqyr/ukRGbU1b3SLYLgb/Ypjdpmz5FFVT670WfReBbJtcxbT5x8YhcYAZx2REDPxpAmDHrS3l7gljgL3gQKPTUvXNj1Kcj+C9wRXWdi1C6Skd09F7yw5Tiukey96OKAuvY+o8cO/GD/h8BFFVXkRSN+FfbxmfoqLFHL9/+ftXv6BowePiyX7ehyzogacPek9179H6jbdvOXd9B1+I1myDq3rM3Jn019y8D2+vm7hOmz+nwZse27dr3+qAfBpy9ZYmu2d+vcBHmkQe1C834cd2WsZOmk10lcCqwbUTe74axR+4lhaYW19Q+gsB7bgdctI+jqMLM3frcCuwX6T563Kgu3brcNtdOlEQxeqFovwF9lvy0CPUWtfrrb2bM/GY6Y8xtc61mJPAyLeFPt0S7zRNQWPB2VEXgS4b2Hw0btXLj7lv3fG87hfQfPOzr75ai3VWYd+2ua8uWrXq932/Fhl3o2n9e692evTftP+0ilFj5J24/fqn/oI8hIbrMvWOcIsUb950aMHgY1sAO4Vkm7oLPpswcPHz0Rf37GGAbkv7zlgMd3upo5BJGHtfSL6Fzt+6LVv9OdpXAtcBr9aPxou00i/eJL9x10+m4ecQt7yyKKszac5tbgVOk0drG1/r0+6BL1849e/XYeXCrYin+bfNa1Oeo1GDZyPxoLHp7vdcTq2X5ANDsBAYrtIWbTeKswyQmDwSNCjx93uIps741dosghffkddM32ra7buZOBEYJXbR6w73gVHTBvWnffD/562/JgY9PoeUCk13GFFrXLgBnxhhsow6f1bZ4u0s3DUN70qsENQhMXrQNRrGLzjqfsBIy3qaUp8G5wCAxNyo8McDknt57H/Ru375dt3e6GlrpJEtF6Bo4aMCKn3+Uj8TyeMiwQYdO7pW3gOclcFCSYOFZN8zWuGOtnuyNSFiuLZS1XPNWLjAqJ5Rbu+2Q7cM00mLgFNKiRcvDGnpE4Dff6rT16MWGwT6xS9ZuHjNhqqVfPHbZCoy6Pe6L6X0/HIJtx4ic+UvXDhn5qZMgl/QqAQIfMwk845Cq+GSfFz/rReO1kr9uS29GHrVJ1PTMZLxTKU9EHQITYGxU6kPT+7e7dusCb2Pq63DLli3feOONtzt3InTs+NY73bsd+HO34oHPsQKvu2BdUlnLEXml1bYREvkbcY1u9A2PDC2HCOUCY5X7fr+BKIxvdXz7rU6dAYx97bXXDv2l0yBwx07bj2uQwRa+cUt/2Tp6/BQLn1jsshUY7Dun+frrrY1dIzCjxnT6h7V/yLuUAIHvPBCUV9UxnvJzwTI0V37jW6EtWnDe44RNDONtSnka6hOYgHny+s1r27VrK0qXfRXcokWLn9YtjckKlxObHZ4kESoe0hyn0L8axBgHiosrahtdA2tZe7/XdyBWp6iudqEZcpyjJFwIjNO2avX6+j1/ntexxp3isomTvEsJ6plCoxSbh4g3X3Oka2DVUbfAYOGS+X379yEr4S++nDBzzjTF3sdpdgJvMo51jJLW1H8r0qjAWPd+OHQkVrnyL2//62pM4EuGduMmz1Ai8OLVGz6d+KWiwGDej2t69x0wd8mqj4aNIqvuRlGDwJhLOwulKPIHdVyowKrDucDb9m5av2Wdf5RHakEMOK3xZ6e3O56+dIyUWXMHozZt2hw5c4D0Yg08ccp4Z9975FjSqG+mOWrMiD2Ht5Nd0tUE1CGwSLrTLOFhSnFDk2pfI+05fb1Lt+4HL9xyjMiGUYYuYS1btkJ7owJrWnmO//LruUtWWwckukXLVGQIjEr7dtduWjbeiqIevKiDKXrr1m02HTgjb1QOtwJH5h2ySQpKKqqtv+VRgVnBucAPgh0+/Wx069avt2zZonWb1m3eaGPpZJIs/e/HsNwC7NBI6Dewr5OvDWl39bedNnOKvIuwYPE8j4dO8mNZwbXAVTV1ibnlyZKKhv36qPg98Gkt8+49euHVIUBdNOLf62bunbu+s/PEZTIMAi9fv2PcFzMsfOJIC+Tv+s67OOS7Zevueor+OHh20PBPTmuZkV4wdNRYcs7Lxo4uQglpxMqlXfsOJm4R8mHK4VTg2JwyvG7135rLok6BxcVVkpJqw4AcbAsyZX8KBzcRAm7HXnGFuj7MQx5HxycLEy6cp7C8FrMJRi/XqGkKbWyt+/mkce5BDox2dcK1wE+MigKrE5coSY/3+kyeOY/RrgROBWbkRQmcnCf7+TnSftsvOzq7rLr2UUJuhXKH0RuUXFxaVYfZw8ss8E2Dyz+s+N5P4M5oVydUYMK5W5aYov95zZjRroRXTWBg4J8Tk1NWVlXrEVMgb3wcJ6E0u7AqJLUYM6/8spqXVmA+QAUmzJi3uHuP3oxG5byCAgOzh7kQODanXNcn2yggxyRQrAha9Hyz5YNRsanA3EIFbjKvpsB3g8WF5TVJknLLkNzMgqqSilpFUqUVdpH/6UoF5hwqcJN5NQW+EyRGLwRWbHwaVGDOoQI3mVe2AheV1ySIyzFVxnQadVgR9N72o1NoNUIFbjKvoMA6PlmYIZdU1gYnF5uH5CbnVWCkIvG55fcVdKUCcw4VuMm8agLDXuswSVp+JXrNgnNJo3KowJxDBW4yr4LACbkygVF1gVOUNFVakVNU5Z9YqDj+cXCsTZgEh2B8cUWtX0IRHFacWnONqgLP2avnEBrYrDF44PlCBF7/t4O2a0yzZuMVx5dSYGFmqSirjPjmk1CYUVCZ+S9JkgqsexUHPxHMomOyy+RHAZhsEaJS0X4uqCRwVXXtXi2nl4DLlv4NT0ld8RemMa6hmeIjSGl4ShxHnQK/BKgkMA2N2kIFZgUVmIZfoQKzggpMw69QgVlBBabhV6jArKAC0/ArVGBWUIFp+BUqMCuowDT8ChWYFVRgGn7lVRb4TrDYO67AXuG3FBuFCkzDr7zcApPfkQhJKca/jC5gL8jLLakKTythtCuBCkzDr7zcAuv6ZD9MKa6qfeSXWIRdk0BxcHKxg0BKeqnANM0+L30Fvhcu8U0oJD8vbRMmKa6sDU0tJr1UYJpmHyUCY9opyiozf5iLf0FEeolpkJh0oZQFJReRdkxQrcMkaDT0z/GMLXCPLvCJLyRdHrEFliG5KHpk1zhQ9ntIBLfofNIozCzFUfL2p+EYJSXjcXI8Olrco/MDEosCkooEGbLfkUClNfDPCUzCVcl23WPyMUbHO8syNBcDsNB1FeUnSyqqax9JSqqjMktxAUTgeHE5DMchaGz09xOpwDT8ihKB/RKKMCA1r8I7rhCqFJTVwAS0w8OwtJKE3HK0Y0NcXBWZUWoUkAO9IQOGxWSXQaRUaWVeSXVGfiUExsjC8prorDJIjjNAHmlpNe4IaMej4BA4DP1wU4jNKVMkMr0E9xF4lZJXESeWPSI0c6yfA8P8koranKIqnB+PWFxRK/s74XkVsBGK4pxmwbmowM7C/MqaOu/4QptwCa62orouVVrhFVtwP1wCgfNKq3FheF44M46F4eRm9DSowDT8SqMCh6bKZpi3/bJjc2Ry3gkSG/hlYxmJ6Sja7wSLY3Jkv9+H9z0RGNKi1un5ZqP8FpXLpLobLCuY8eKykspaHI7tNGkFhhnX/2IwzgyLcAZ932yUWZisiJsoH1MAVF0IjxNivFVoLjkJBC6S/UpwoYF/Ni4DA/LLqnEGXZ8s2IgrfxBTIBcYp8Ihj0+hoTq8JRNsnApPEEeR3idCBabhVxoVmPwhG32/7NC0krKqWmehrPrBSVQtyInCiDc9yiCKJBEYLVahMrfhEqQKSpLNbLGLygmRiMyllbU4FQ6X1UxJBbYxEu1Pw0WUn1tSLS6qQmEn9gIIDP3IfQRgIpBRUEkq/P3wvEf//IN626jAimtgjCkqr0GtJrtPRCWBq6prD+m4vgRctwlseErqSlB0OuMamil+wrSGp8RxWAlcXlWHAgWFIGp2YRUqrVdcAYxVUWCsP4nAMCq9oBLVFWcgOAjy4B6Uw+GKYG6M82B+jok0ZuD5ZTXp+ZXkO6FGBcYjshUY83BUe7L7RFQSGCNm79G7H+zfrNFz9Xghf5HjNw37m06iZs3vlx348Bc5niYwNCiqaFgPQy0sZdkKjAoM2bChCGbdWJeiwisCx+QlF+f3iCnAjQPqYpvXAtO/idW00L+JxTZNEBjLXUw14Q/asRguKFd1Ci0XOE5cBqlQeLENb8PSigOSZN/TPhE4CanIf7mCQg1R8dAmgU0RGBdWWF4TWX/rAVRgZVCBmwzPBb7tl+0bX4iFK4ohgBJsBca/iZLyooqGM6RJK82f/gexdH2y8Zqk5VdgJKbQafmV9gIpGpsgMLnC0qpaPKJ3XCEVWBlU4CbDE4GNA3NgAvkbdDAB737Ygjkzdg38MN3NA6jGVqGyP7yOYbq+2WbBuVBRv/4/MYK3MBmlEsdi906w+F64RP7/G2GXnAHTZiX2EvBweAgyXn5+nMEyVII7CxmDARYhueQ/N8TFYCQGYBtKyy8b2pPHRQuejoF/tmVoLjbIGTAGT4d8Nv40qMDchgrMNkoEpjwOFZjbUIHZhgrMCiowt6ECsw0VmBVqFfiH5QsvXj8dlx3BaFcPVOAmQwXmLWoV+OMRQzQ0z8WLBYx29fAqCLxux5Gho8ae17VmtD8jVGDeoiaBZ8z6skvXzq1aterwZochwwYLUoIYAx4Hhfrs5RM4ivDtorlugfaMMax4FQRe/tv2nu/3PXnzDqP9GaEC8xbOBQ6N95s8bdKM2V+6+NtGZ4SCTz8bbWB5K1kqYoxkYGZn+N3iefZeVjhE30xz9LhR8xfOeRDkwBimOlwLXFX7KDmvIk1a0bBfH04FPqNlPmrcpA37TslbHCNy7EIznKMkZPfrBcvGfTHd2C1CPqBpcCowXrSMgsqGHSowSzgX2MLRePDHg/7WOh+fE0laEiVRKfnR8gFPA2OS8oSpBTH12zF7j+zo0++Dq7p/KY5hBdcCV1TLfpRnn2ViZEZpQxPHAp+8YTp4xJhfdx5jtMuZOmfhiLETjFzDGe1s4VRgu8i80/YpeNHqHsl2qcCs4FxgTcMr/Qb0OXbuIAopo4sQkxXe4t98NHggo1fOGY3jIz4ZdkXnIqNdddQgsItQukxLuPVOvHdcYd0j2ftRRYFvWnh0e7cneRFGj5/iKpKi0VWYd+2ua6fOXXeeuDJl1nfoeqNtu68XLEWXpV/8sl+3oeU1WWRHTfvme32H4I37Tw8cMhxT6EuGdv0/GlrfW9/dosXRv28PGDJ8zISpLsKG+mwbkv7V/B969+lPdpXAqcC2EXlr9aO3mMb5JhRW1z6iArOC+yl0nO/nE8fiDXRdTwOupkj/p/Z6PHRq3fr19VvWYTs8MeDbRd8MG/nx4/UZdXjf0Z0QGHNvRpfqqE1g8LthrHWYpLKmThWBT2uade/RC+7Zh8l+s7z/oGFjJsgcJgLDwI6dOq/ddghdfxnYvt2l28qNu8mBj1fgjftODRg8TL4GZlTgPw6ebd2mjZ59INm18Ilt177Dyo17yK4S1CAwXrTfDGKchNIdN5yowKqjjg+xzB2Mho0Y2rZtW2i8Zv3KkFgf+QJ46arFQ4YNko90DbDr0auHhuZ5eQtILYi9524+dcbkJT8tChJ5KXaxAgKvu2ANqTiiqLzGQZBHBAbr9GMM/LMNXCOVCwxRx385a+Z3P6KokpYrJk54oTQM7YnA7Tq8uWpTg2OmDwSzF62YMG02KdFsBTZxj2zf4c3Vm/dh2yVKcvyKYZdu3VH8Sa8SDtz2xkMznu/zAnc6IjBYpSNacMblhJWI8TalPA11CExw8bdFdX2r45stWra4qvNXcp7M4fc+6L18zZLI5CCC7QML+Hzgz92KB0YkBfy+Zd3I0cMNLJpefkFQkmDBWbdfb8dwxC+3Y9boNrwRwfL6krLmqpdyge94RPUdOHjVpr0m7gLrgERw09ITAh/6S4cI/GbHTtuPa5DBFr5xS3/Zijk2iid22QoMpsz6tkfvD1yEeY4R2TPm/zBy3ER5lxKOmUUsuxrEeL7Pi9W60Xit5K/bUk3BUZskTc9MxjuV8kTUJzDByffee+/36tm7Z3RmGHYxP2zXvt073bvJ+XDwwJMXj8jHx4sFh07uRfuxswfljU1DnVPo5drC9YYxhgE5+i6NVGAta+/3+g5EYezc9R3UQznHrxlxIfCJ6yYtW7bStfW3DkjCinrVH3vlXUpQzxQaGmPasui820nraMbblPI01C0wwIq3w5sdROkh2G7bru3KdcsUexVJEAsuXjvds1ePTTvWM7qagNoEXqEt2nYn/n5EHloaXQPr2gW83//DddsP2z5MY3Q1KvCpm3eHjhqrRODpcxejxjI+hcYJf9qwC/PnTp27all5KXY9DTUIvEJbuMk4zjEqb9t1R7oGVh3OBcbEOCIpMKl+wgyE6SGz5s7AfDgmKxy78xbOmTR1fFTaQ9KbKBEGR3sn5EZhG/9qG18bOnzwT2uXClKCyYBnQT0Cr7wl2m+Z6B1foPqn0J98PnnO4pV3PUVkZessyDVwCsFGowJrGDl8Nvmrn7cexJSYDGAI/OO6zSPHTjR0DiW7hMVrNr7b670v5ywY9dkXiu1K4FpgrDX2WCT6JhRiSUw/hWYF5wJjArzql+Um9/TdAu3A9n2bBw396JruJaK0nYdF/4H9Nm7/jfQa2+h9u2iux0PH1IKY++5mY8Z98ulnn9w21ya9IEjkRfRuAlwLXFkt+y3tk3YpUZnsvgc+ftVowODhG/ad0rTy0rH1P3vLos+AQWhvVGBdu8BpcxdN++b7K6bOZl7RMJ8h8O5TV7u92+PYFUOc1j4skzSe1jTDyqV1mzd2nbpKWhqFU4GdhdILzmmR6aW19V8EU4FZwbnAvhFuC36Y36ffBx06tB/wUf+hw4c4eFkrflHkHeaCRsK0mVNgLxoxedYyvCJvl/P7ll/8It3lx7KCa4Grax+l5f/PDxUhKn4PjFqKOgyNCa4iWUVFQb5132/4mPFHLxuQYVi4bjpwZt6SNdYBiaQFS+URYyfikJ+3HLD0jdt/Xmvq7AUaRvakF0yfu4icU9PKU16oW7dpg2U2ar58mHI4FTg5ryI9v7J+viILFZgValoDG1hoT5wy/kGwTM4XBdcCPzEqCqxOsNh+5/96zf5+OaNdCZwKzAgVmBVqEtjYWm/zrg3BMd6MdnVCBSYcOK/dsmWri/r3GO1KoALzFjUJzAeowASsosdMmMpoVA4VmLdQgbkNDwVuAlRg3kIF5jZUYLahArOCCsxtqMBsQwVmBRWY21CB2YYKzAoqMLehArMNFZgVVGBuQwVmGyowK1QVeNZu3VtOD5o1Fy2dXojAq87ZnDYLbtasOX+PCsxPVBK4uqb2xr3AlwC1vQvliUoWM66hmRKZmN3wlDgOFZgVKglMQ6O2UIFZQQWm4VeowKygAtPwK1RgVlCBafgVKjArqMA0/AoVmBVUYBp+hQrMCiowDb9CBWYFFZiGX6ECs4IKTMOvUIFZQQWm4VeowKygAtPwK1RgVlCBafgVKjArqMA0/AoVmBVUYBp+hQrMCiowDb9CBWYFFZiGX6ECs4IKTMOvUIFZQQWm4VeowKygAtPwK1RgVlCBafgVCDxjh+5Xu/QoqjB1qzYVmIZHqa6tq6yupahOwwunECowDU0zDhWYhqYZhwpMQ9OMQwWmoWm2+eef/wfrL5L3Zv+8CgAAAABJRU5ErkJggg==");

/***/ }),

/***/ 40218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/entitySelectionRelationAttributes-35159adee7802470815edd4f9b6f8043.png");

/***/ }),

/***/ 26790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/optimisticLock1-606b1a3c9d45343ad61a01a7408d3aaa.png");

/***/ }),

/***/ 50026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/optimisticLock2-e4e8304d95a180afb1c4db732c479b86.png");

/***/ }),

/***/ 75630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/optimisticLock3-b5ae5eb17f621123a3753d2efea74aea.png");

/***/ })

};
;