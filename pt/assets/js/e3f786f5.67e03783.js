exports.id = 58724;
exports.ids = [58724];
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

/***/ 71301:
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
var tls_exports = {};
__export(tls_exports, {
  assets: () => assets,
  contentTitle: () => contentTitle,
  default: () => MDXContent,
  frontMatter: () => frontMatter,
  metadata: () => metadata,
  toc: () => toc
});
module.exports = __toCommonJS(tls_exports);
var import_react2 = __webpack_require__(3905);
const frontMatter = {
  id: "tls",
  title: "TLS Protocol (HTTPS)"
};
const contentTitle = void 0;
const metadata = {
  "unversionedId": "Admin/tls",
  "id": "version-19/Admin/tls",
  "title": "TLS Protocol (HTTPS)",
  "description": "All 4D servers can communicate in secured mode through the TLS (Transport Layer Security) protocol:",
  "source": "@site/versioned_docs/version-19/Admin/tls.md",
  "sourceDirName": "Admin",
  "slug": "/Admin/tls",
  "permalink": "/docs/pt/19/Admin/tls",
  "draft": false,
  "tags": [],
  "version": "19",
  "frontMatter": {
    "id": "tls",
    "title": "TLS Protocol (HTTPS)"
  },
  "sidebar": "docs",
  "previous": {
    "title": "Managing 4D Licenses",
    "permalink": "/docs/pt/19/Admin/licenses"
  },
  "next": {
    "title": "Command Line Interface",
    "permalink": "/docs/pt/19/Admin/cli"
  }
};
const assets = {};
const toc = [{
  value: "Overview",
  id: "overview",
  level: 2
}, {
  value: "Minimum version",
  id: "minimum-version",
  level: 2
}, {
  value: "How to get a certificate?",
  id: "how-to-get-a-certificate",
  level: 2
}, {
  value: "Installation and activation",
  id: "installation-and-activation",
  level: 2
}, {
  value: "<code>key.pem</code> and <code>cert.pem</code> files",
  id: "keypem-and-certpem-files",
  level: 3
}, {
  value: "Enabling TLS",
  id: "enabling-tls",
  level: 3
}, {
  value: "Perfect Forward Secrecy (PFS)",
  id: "perfect-forward-secrecy-pfs",
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
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", null, `All 4D servers can communicate in secured mode through the TLS (Transport Layer Security) protocol:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the web server`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the application server (client-server desktop applications)`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `the SQL server`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "overview"
    }
  }, `Overview`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The TLS protocol (successor of SSL) has been designed to secure data exchanges between two applications \u2014mainly between a web server and a browser. This protocol is widely used and is compatible with most web browsers.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `At the network level, the security protocol is inserted between the TCP/IP layer (low level) and the HTTP high level protocol. It has been designed mainly to work with HTTP.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `Network configuration using TSL:`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(47021)/* ["default"] */ .Z),
    width: "318",
    height: "174"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The TLS protocol is designed to authenticate the sender and receiver and to guarantee the confidentiality and integrity of the exchanged information:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Authentication`), `: The sender and receiver identities are confirmed.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Confidentiality`), `: The sent data is encrypted so that no third person can understand the message.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Integrity`), `: The received data has not been changed, by accident or malevolently.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `TLS uses a public key encryption technique based on a pair of asymmetric keys for encryption and decryption: a public key and a private key. The private key is used to encrypt data. The sender (the website) does not give it to anyone. The public key is used to decrypt the information and is sent to the receivers (web browsers) through a certificate. When using TLS with the Internet, the certificate is delivered through a certification authority, such as Verisign\xAE. The website pays the Certificate Authority to deliver a certificate which guaranties the server authentication and contains the public key allowing to exchange data in a secured mode.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `For more information on the encryption method and the public and private key issues, refer to the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `ENCRYPT BLOB`), ` command description.`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "minimum-version"
    }
  }, `Minimum version`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `By default, the minimum version of the secured protocol accepted by the server is TLS 1.2. You can modify this value by using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `Min TLS version`), ` selector with the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `SET DATABASE PARAMETER command`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You can control the level of security of your web server by defining the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/19/WebServer/webServerConfig#minimum-tls-version"
    }
  }, `minimum TLS version`), ` accepted for connections.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "how-to-get-a-certificate"
    }
  }, `How to get a certificate?`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `A server working in secured mode means that you need a digital certificate from a certification authority. This certificate contains various information such as the site ID as well as the public key used to communicate with the server. This certificate is transmitted to the clients (e.g. Web browsers) connecting to this server. Once the certificate has been identified and accepted, the communication is made in secured mode.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Web browsers authorize only the certificates issued by a certification authority referenced in their properties.`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("img", {
    src: (__webpack_require__(60176)/* ["default"] */ .Z),
    width: "394",
    height: "227"
  })), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The certification authority is chosen according to several criteria. If the certification authority is well known, the certificate will be authorized by many browsers, however the price to pay will be expensive.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To get a digital certificate:`), /* @__PURE__ */ (0, import_react2.mdx)("ol", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, `Generate a private key using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `GENERATE ENCRYPTION KEYPAIR`), ` command.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `Warning`), `: For security reasons, the private key should always be kept secret. Actually, it should always remain with the server machine. For the Web server, the Key.pem file must be placed in the Project folder.`)), /* @__PURE__ */ (0, import_react2.mdx)("ol", {
    ...{
      "start": 2
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Use the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `GENERATE CERTIFICATE REQUEST`), ` command to issue a certificate request.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Send the certificate request to the chosen certificate authority.
To fill in a certificate request, you might need to contact the certification authority. The certification authority checks that the information transmitted are correct. The certificate request is generated in a BLOB using the PKCS format encoded in base64 (PEM format). This principle allows you to copy and paste the keys as text and to send them via E-mail without modifying the key content. For example, you can save the BLOB containing the certificate request in a text document (using the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "p"
  }, `BLOB TO DOCUMENT`), ` command), then open and copy and paste its content in a mail or a Web form to be sent to the certification authority.`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Once you get your certificate, create a text file named \u201Ccert.pem\u201D and paste the contents of the certificate into it.
You can receive a certificate in different ways (usually by email or HTML form). 4D accepts all platform-related text formats for certificates (OS X, PC, Linux, etc.). However, the certificate must be in PEM format, `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `i.e.`), `, PKCS encoded in base64.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", {
    parentName: "li"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `CR line-ending characters are not supported on their own; you must use CRLF or LF.`))), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ol"
  }, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "li"
  }, `Place the \u201Ccert.pem\u201D file in the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#installation-and-activation"
    }
  }, `appropriate location`), `.`))), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The 4D server can now work in a secured mode. A certificate is valid between 3 months to a year.`), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "installation-and-activation"
    }
  }, `Installation and activation`), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "keypem-and-certpem-files"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `key.pem`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "h3"
  }, `cert.pem`), ` files`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `To be able to use the TLS protocol with the server, you must install the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `key.pem`), ` (document containing the private encryption key) and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `cert.pem`), ` (document containing the certificate) at the appropriate location:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `with 4D in local mode or 4D Server, these files must be placed next to the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/pt/19/Project/architecture#project-folder"
    }
  }, `project folder`)), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `with 4D in remote mode, these files must be located in the client database folder on the remote machine (for more information about the location of this folder, see the `, /* @__PURE__ */ (0, import_react2.mdx)("inlineCode", {
    parentName: "li"
  }, `Get 4D folder`), ` command).`)), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `You must copy these files manually on the remote machine.`), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `Default `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `key.pem`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `cert.pem`), ` files are provided with 4D. For a higher level of security, we strongly recommend that you replace these files with your own certificates.`)), /* @__PURE__ */ (0, import_react2.mdx)("h3", {
    ...{
      "id": "enabling-tls"
    }
  }, `Enabling TLS`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `The installation of `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `key.pem`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "p"
  }, `cert.pem`), ` files makes it possible to use TLS with the 4D server. However, in order for TLS connections to be accepted by the server, you must enable them:`), /* @__PURE__ */ (0, import_react2.mdx)("ul", null, /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `With the 4D web server, you must `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/pt/19/WebServer/webServerConfig#enable-https"
    }
  }, `enable HTTPS`), `. You can set the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "li",
    ...{
      "href": "/docs/pt/19/WebServer/webServerConfig#enable-hsts"
    }
  }, `HSTS option`), ` to redirect browsers trying to connect in http mode.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `With the application server, you must select the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Encrypt Client-Server Communications`), ` option in the "Client-server/Network options" page of the Settings dialog box.`), /* @__PURE__ */ (0, import_react2.mdx)("li", {
    parentName: "ul"
  }, `With the SQL server, you must select the `, /* @__PURE__ */ (0, import_react2.mdx)("strong", {
    parentName: "li"
  }, `Enable TLS`), ` option in the "SQL" page of the Settings dialog box.`)), /* @__PURE__ */ (0, import_react2.mdx)("blockquote", null, /* @__PURE__ */ (0, import_react2.mdx)("p", {
    parentName: "blockquote"
  }, `The 4D web server also supports HSTS option to prevent a browser from`)), /* @__PURE__ */ (0, import_react2.mdx)("h2", {
    ...{
      "id": "perfect-forward-secrecy-pfs"
    }
  }, `Perfect Forward Secrecy (PFS)`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "https://en.wikipedia.org/wiki/Forward_secrecy"
    }
  }, `PFS`), ` adds an additional layer of security to your communications. Rather than using pre-established exchange keys, PFS creates session keys cooperatively between the communicating parties using Diffie-Hellman (DH) algorithms. The joint manner in which the keys are constructed creates a "shared secret" which impedes outside parties from being able to compromise them.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `When TLS is enabled on the server, PFS is automatically enabled. If the `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "p"
  }, `dhparams.pem`), ` file (document containing the server's DH private key) does not already exist, 4D will automatically generate it with a key size of 2048. The initial generation of this file could take several minutes. The file is placed with the `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "#key-pem-and-cert-pem-files"
    }
  }, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "a"
  }, `key.pem`), ` and `, /* @__PURE__ */ (0, import_react2.mdx)("em", {
    parentName: "a"
  }, `cert.pem`), ` files`), `.`), /* @__PURE__ */ (0, import_react2.mdx)("p", null, `If you use a `, /* @__PURE__ */ (0, import_react2.mdx)("a", {
    parentName: "p",
    ...{
      "href": "/docs/pt/19/WebServer/webServerConfig##cipher-list"
    }
  }, `custom cipher list`), ` and want to enable PFS, you must verify that it contains entries with DH or ECDH (Elliptic-curve Diffie\u2013Hellman) algorithms.`));
}
;
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 47021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 60176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/tls2-654d4965c78986e1ff3061d0686d7943.png");

/***/ })

};
;