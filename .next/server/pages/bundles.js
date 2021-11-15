(function() {
var exports = {};
exports.id = "pages/bundles";
exports.ids = ["pages/bundles"];
exports.modules = {

/***/ "./components/badgeList.tsx":
/*!**********************************!*\
  !*** ./components/badgeList.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeList": function() { return /* binding */ BadgeList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _oneBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oneBadge */ "./components/oneBadge.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\badgeList.tsx";

const BadgeList = ({
  fieldName,
  action,
  item,
  setItem,
  setSearch
}) => {
  return item[fieldName] && item[fieldName].length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: item[fieldName].map(oneBadge => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_oneBadge__WEBPACK_IMPORTED_MODULE_1__.OneBadge, {
      fieldName: fieldName,
      item: oneBadge,
      action: action,
      setItem: setItem,
      currentItem: item,
      setSearch: setSearch
    }, `${item['id']}-${oneBadge.name}}`, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined))
  }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    className: "text-gray-400",
    children: "None found"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/generateInputField.tsx":
/*!*******************************************!*\
  !*** ./components/generateInputField.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateInputField": function() { return /* binding */ GenerateInputField; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\generateInputField.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const GenerateInputField = ({
  currentItem,
  name,
  changeHandler
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: "py-2",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
    className: "block py-2",
    children: name.charAt(0).toUpperCase() + name.slice(1)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
    className: "border-4 rounded w-full py-2 px-3",
    value: currentItem[name],
    onChange: e => {
      e.persist();
      changeHandler(curr => _objectSpread(_objectSpread({}, curr), {}, {
        [name]: e.target.value
      }));
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 13,
  columnNumber: 5
}, undefined);

/***/ }),

/***/ "./components/itemList.tsx":
/*!*********************************!*\
  !*** ./components/itemList.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemList": function() { return /* binding */ ItemList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/api/graphql/queries */ "./utils/api/graphql/queries.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _notifyLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifyLoading */ "./components/notifyLoading.tsx");
/* harmony import */ var _notifyError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifyError */ "./components/notifyError.tsx");
/* harmony import */ var _oneListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oneListItem */ "./components/oneListItem.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\itemList.tsx";







const ItemList = ({
  type,
  selected,
  setSelected,
  useSelected = false,
  allowEdits
}) => {
  const isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_3__.ItemType.FeedType;
  const {
    loading,
    error,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(isFeed ? _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.FEEDS_QUERY : _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.BUNDLES_QUERY);
  console.log(loading, error, data);
  const {
    feeds,
    bundles
  } = data || {};
  const itemList = isFeed ? feeds : bundles;
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    (async () => {
      if (useSelected && itemList && itemList.length > 0 && selected.id === null) {
        const firstItem = itemList[0];
        await setSelected({
          id: firstItem.id,
          feeds: isFeed ? [firstItem] : firstItem['feeds'],
          editMode: false,
          newMode: false
        });
      }
    })();
  });

  if (loading) {
    /*#__PURE__*/
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_notifyLoading__WEBPACK_IMPORTED_MODULE_4__.NotifyLoading, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, undefined);
  }

  if (error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_notifyError__WEBPACK_IMPORTED_MODULE_5__.NotifyError, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 14
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid lg:grid-cols-3 md:grid-cols-2 gap-4",
      children: itemList && itemList.length > 0 ? itemList.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_oneListItem__WEBPACK_IMPORTED_MODULE_6__.OneListItem, {
        type: type,
        item: item,
        useSelected: useSelected,
        allowEdits: allowEdits,
        selected: selected,
        setSelected: setSelected
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, undefined)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "None are present. Why not add one?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 14
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/***/ }),

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./components/nav.tsx");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\layout.tsx";

const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "p-4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav__WEBPACK_IMPORTED_MODULE_1__.Nav, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/nav.tsx":
/*!****************************!*\
  !*** ./components/nav.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nav": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/user */ "./utils/user.ts");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\nav.tsx";


const Nav = () => {
  const {
    user,
    loading
  } = (0,_utils_user__WEBPACK_IMPORTED_MODULE_2__.useFetchUser)();
  console.log(user, loading);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: "flex grid grid-cols-4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-1 flex justify-start",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "inline-flex cursor-pointer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "sm:h-10 h-8 pr-1",
              src: "/logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "p-2 text-center block hover:blue-700 sm:visible invisible",
              children: "Newsprism"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 24
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 20
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 20
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 16
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-3 flex justify-end",
      children: [user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/saved-articles",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Saved Articles"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/bundles",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Bundles"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/feeds",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Feeds"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined), user && !loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/api/logout",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/api/login",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/newEditItem.tsx":
/*!************************************!*\
  !*** ./components/newEditItem.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewEditItem": function() { return /* binding */ NewEditItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/api/graphql/mutations */ "./utils/api/graphql/mutations.ts");
/* harmony import */ var _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/api/graphql/queries */ "./utils/api/graphql/queries.ts");
/* harmony import */ var _utils_prepareUpdateObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/prepareUpdateObject */ "./utils/prepareUpdateObject.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _badgeList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./badgeList */ "./components/badgeList.tsx");
/* harmony import */ var _generateInputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generateInputField */ "./components/generateInputField.tsx");
/* harmony import */ var _searchItems__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./searchItems */ "./components/searchItems.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\newEditItem.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const NewEditItem = ({
  type,
  selected,
  setSelected
}) => {
  const isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_6__.ItemType.FeedType;
  const initialFeed = {
    name: "",
    url: "",
    tags: []
  };
  const initialBundle = {
    name: "",
    description: "",
    tags: [],
    feeds: []
  };
  const initialState = isFeed ? initialFeed : initialBundle;
  const {
    0: currentItem,
    1: setItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialState);
  const inputFields = isFeed ? ['name', 'url'] : ['name', 'description'];
  const [createItemMutation, {
    loading: createLoading,
    error: createError
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(isFeed ? _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__.CREATE_FEED_MUTATION : _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__.CREATE_BUNDLE_MUTATION);
  const variables = {
    data: {
      id: selected.id ? selected.id : ''
    }
  };

  if (createLoading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_10__.WaitingClock, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 14
    }, undefined);
  }

  if (createError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_10__.ErrorSign, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 14
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: e => {
        e.preventDefault();
        const data = (0,_utils_prepareUpdateObject__WEBPACK_IMPORTED_MODULE_5__.prepareNewUpdateObject)(currentItem);
        console.log(data);
        createItemMutation({
          variables: {
            data
          }
        });
        setItem(initialState);
        setSelected(currState => _objectSpread(_objectSpread({}, currState), {}, {
          editMode: false,
          newMode: false
        }));
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-12 gap-4 rounded-md border-4 my-4 py-2 px-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "col-span-12 text-lg font-medium py-2",
          children: isFeed ? 'New Feed' : 'New Bundle'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6",
          children: [inputFields.map(name => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_generateInputField__WEBPACK_IMPORTED_MODULE_8__.GenerateInputField, {
            currentItem: currentItem,
            name: name,
            changeHandler: setItem
          }, `${type}-${name}`, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 14
          }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: `py-4 ${isFeed ? null : 'pt-28'}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              className: `py-4 ${`bg-${isFeed ? 'green' : 'purple'}-400`} hover:bg-${isFeed ? 'green' : 'purple'}-700 text-white font-bold px-12 rounded`,
              type: "submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 14
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6 ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "py-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "block py-2",
              children: "Tags:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 16
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "grid grid-cols-3 gap-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_7__.BadgeList, {
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.BadgeFieldName.tags,
                action: _utils_types__WEBPACK_IMPORTED_MODULE_6__.ActionType.CREATE,
                setItem: setItem,
                item: currentItem
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 16
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "py-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "block py-2",
              children: "Add New Tag:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 16
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchItems__WEBPACK_IMPORTED_MODULE_9__.SearchItems, {
              queryName: isFeed ? _utils_types__WEBPACK_IMPORTED_MODULE_6__.SearchQueryName.findFeedTags : _utils_types__WEBPACK_IMPORTED_MODULE_6__.SearchQueryName.findBundleTags,
              query: isFeed ? _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.FIND_FEED_TAGS_QUERY : _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.FIND_BUNDLE_TAGS_QUERY,
              setItem: setItem,
              currentItem: currentItem,
              fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.BadgeFieldName.tags
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 16
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, undefined), isFeed ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "py-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "block py-2",
                children: "Feeds:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 16
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "grid grid-cols-3 gap-2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_7__.BadgeList, {
                  fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.BadgeFieldName.feeds,
                  action: _utils_types__WEBPACK_IMPORTED_MODULE_6__.ActionType.CREATE,
                  setItem: setItem,
                  item: currentItem
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 16
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "py-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                className: "block py-2",
                children: "Add New Feed:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 16
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchItems__WEBPACK_IMPORTED_MODULE_9__.SearchItems, {
                queryName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.SearchQueryName.findFeeds,
                query: _utils_api_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.FIND_FEEDS_QUERY,
                setItem: setItem,
                currentItem: currentItem,
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_6__.BadgeFieldName.feeds
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 16
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 13
            }, undefined)]
          }, void 0, true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/***/ }),

/***/ "./components/notifyError.tsx":
/*!************************************!*\
  !*** ./components/notifyError.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotifyError": function() { return /* binding */ NotifyError; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\notifyError.tsx";

const NotifyError = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "h-screen flex",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_1__.ErrorSign, {
      className: "h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./components/notifyLoading.tsx":
/*!**************************************!*\
  !*** ./components/notifyLoading.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotifyLoading": function() { return /* binding */ NotifyLoading; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\notifyLoading.tsx";

const NotifyLoading = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "h-screen flex",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_1__.WaitingClock, {
      className: "h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./components/oneBadge.tsx":
/*!*********************************!*\
  !*** ./components/oneBadge.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneBadge": function() { return /* binding */ OneBadge; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\oneBadge.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OneBadge = ({
  item,
  action,
  currentItem,
  fieldName,
  setItem,
  setSearch
}) => {
  const color = fieldName === _utils_types__WEBPACK_IMPORTED_MODULE_2__.BadgeFieldName.tags ? 'blue' : fieldName === _utils_types__WEBPACK_IMPORTED_MODULE_2__.BadgeFieldName.feeds ? 'green' : 'purple';
  console.log(action);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "inline-block align-middle",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: `flex justify-center text-sm   py-2 px-2 rounded-lg bg-${color}-200 `,
      children: [action === _utils_types__WEBPACK_IMPORTED_MODULE_2__.ActionType.ADD ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: () => {
          setItem(currState => _objectSpread(_objectSpread({}, currState), {}, {
            [fieldName]: [...currState[fieldName], _objectSpread({}, item)]
          }));
          setSearch('');
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_3__.Plus, {
          className: "h-4 w-4 text-gray-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined) : null, action === _utils_types__WEBPACK_IMPORTED_MODULE_2__.ActionType.CREATE ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: () => {
          setItem(currState => _objectSpread(_objectSpread({}, currState), {}, {
            [fieldName]: currState[fieldName].filter(o => item.name !== o.name)
          }));
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_3__.Minus, {
          className: "h-4 w-4 text-gray-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: `text-xs text-${color}-600 text-center`,
        children: [" ", item.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/oneListItem.tsx":
/*!************************************!*\
  !*** ./components/oneListItem.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneListItem": function() { return /* binding */ OneListItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _badgeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./badgeList */ "./components/badgeList.tsx");
/* harmony import */ var _profilePic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profilePic */ "./components/profilePic.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\oneListItem.tsx";






const OneListItem = ({
  item,
  type,
  selected,
  setSelected,
  useSelected = false,
  allowEdits
}) => {
  const isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_3__.ItemType.FeedType;
  const isSelected = useSelected && selected && selected.id === item.id;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: `/${isFeed ? 'feed' : 'bundle'}/${item.id}`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `
                    cursor-pointer grid grid-cols-6 p-4 rounded-lg
                    ${useSelected ? 'rounded-b-none' : 'border-b-4'} 
                    border-t-4 border-l-4 border-r-4
                    ${isSelected ? `border-${isFeed ? 'green' : 'purple'}-400` : 'border-gray-300'}
                `,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            className: "font-bold",
            children: item.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, undefined), !isFeed ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: item['description']
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 32
          }, undefined) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-2 flex justify-end",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "actions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex span-col-6 py-0 space-x-2",
          children: item.author ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profilePic__WEBPACK_IMPORTED_MODULE_5__.ProfilePic, {
            author: item.author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 36
          }, undefined) : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6 py-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "grids grids-cols-2 gap-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_4__.BadgeList, {
              fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_3__.BadgeFieldName.tags,
              action: _utils_types__WEBPACK_IMPORTED_MODULE_3__.ActionType.NONE,
              item: item
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6 py-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: isFeed ? 'Bundles' : 'Feeds'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "grid grid-cols-3 gap-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "child items..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, undefined), useSelected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isSelected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          onClick: e => {
            e.preventDefault();
          },
          className: `flex rounded-lg rounded-t-none align-middle ${isSelected ? `bg-${isFeed ? 'green' : 'purple'}-400` : `bg-gray-300`} p-4 z-10 text-white cursor-pointer`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_6__.DoubleArrowDown, {
            className: "h-5 w-5 text-white-500 mr-2 mt-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined), `Hide ${isFeed ? 'Feed' : 'Bundle'} Articles`]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          onClick: e => {
            e.preventDefault();
            setSelected({
              id: item.id,
              feeds: isFeed ? [item] : item['feeds'],
              editMode: false,
              newMode: false
            });
          },
          className: `flex rounded-lg rounded-t-none align-middle ${isSelected ? `bg-${isFeed ? 'green' : 'purple'}-400` : `bg-gray-300`} p-4 z-10 text-white cursor-pointer`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_6__.DoubleArrowRight, {
            className: "h-5 w-5 text-white-500 mr-2 mt-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, undefined), ` Show ${isFeed ? `Feed` : `Bundle`} Articles`]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, undefined)
      }, void 0, false) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/profilePic.tsx":
/*!***********************************!*\
  !*** ./components/profilePic.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePic": function() { return /* binding */ ProfilePic; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\profilePic.tsx";


const ProfilePic = ({
  author
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [author.picture ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: "rounded-full p-0.5 w-8 h-8 border-2 border-gray-300",
      src: author.picture
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_2__.Question, {
    className: "w-6 h-6 text-gray-500"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 13
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: author.nickname
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, undefined)]
}, void 0, true);

/***/ }),

/***/ "./components/searchItems.tsx":
/*!************************************!*\
  !*** ./components/searchItems.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchItems": function() { return /* binding */ SearchItems; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _badgeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./badgeList */ "./components/badgeList.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\searchItems.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SearchItems = ({
  currentItem,
  setItem,
  queryName,
  query,
  fieldName
}) => {
  const {
    0: search,
    1: setSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const [findItemsQuery, {
    loading,
    data,
    called
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useLazyQuery)(query, {
    fetchPolicy: 'network-only'
  });
  console.log(loading, data, called);

  const fetchedItems = lodash__WEBPACK_IMPORTED_MODULE_6__.get(data, queryName);

  const filtFindItems = fetchedItems ? fetchedItems.filter(oneItem => !currentItem[fieldName].map(o => o.name).includes(oneItem.name)) : [];
  const matchCurrent = filtFindItems.filter(o => o.name === search);
  const matchList = currentItem[fieldName].filter(o => o.name === search);
  const filtFindItemsWithAdd = matchCurrent.length === 0 && matchList.length === 0 && queryName !== 'findFeeds' ? [...filtFindItems, {
    name: search
  }] : filtFindItems;

  const dummyNewItem = _objectSpread(_objectSpread({}, currentItem), {}, {
    [fieldName]: filtFindItemsWithAdd
  });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: [loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_5__.Spin, {
        className: "h-6 text-gray-500 animate-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_5__.Search, {
        className: "mt-3 mr-2 w-6 h-6 text-gray-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 18
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        className: "border-4 rounded w-full py-2 px-3",
        value: search,
        onKeyDown: e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setItem(currState => _objectSpread(_objectSpread({}, currState), {}, {
              [fieldName]: [...currState[fieldName], _objectSpread({}, dummyNewItem[fieldName][0])]
            }));
            setSearch(() => '');
          }
        },
        onChange: e => {
          e.persist();

          if (e.target.value !== search) {
            setSearch(() => e.target.value);
            findItemsQuery({
              variables: {
                data: {
                  search: e.target.value
                }
              }
            });
          }
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 18
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid grid-cols-3 gap-2 flex m-2",
      children: search !== '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_4__.BadgeList, {
        fieldName: fieldName,
        action: _utils_types__WEBPACK_IMPORTED_MODULE_3__.ActionType.ADD,
        setItem: setItem,
        item: dummyNewItem,
        setSearch: setSearch
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }, undefined) : called ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-gray-400",
        children: "No matches"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }, undefined) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/svg.tsx":
/*!****************************!*\
  !*** ./components/svg.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingClock": function() { return /* binding */ WaitingClock; },
/* harmony export */   "ErrorSign": function() { return /* binding */ ErrorSign; },
/* harmony export */   "DoubleArrowDown": function() { return /* binding */ DoubleArrowDown; },
/* harmony export */   "DoubleArrowRight": function() { return /* binding */ DoubleArrowRight; },
/* harmony export */   "Plus": function() { return /* binding */ Plus; },
/* harmony export */   "Minus": function() { return /* binding */ Minus; },
/* harmony export */   "Spin": function() { return /* binding */ Spin; },
/* harmony export */   "Search": function() { return /* binding */ Search; },
/* harmony export */   "Question": function() { return /* binding */ Question; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\svg.tsx";
const WaitingClock = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 5
}, undefined);
const ErrorSign = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 20,
  columnNumber: 5
}, undefined);
const DoubleArrowDown = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 13l-7 7-7-7m14-8l-7 7-7-7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 39,
  columnNumber: 5
}, undefined);
const DoubleArrowRight = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 5l7 7-7 7M5 5l7 7-7 7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 55,
  columnNumber: 5
}, undefined);
const Plus = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 72,
  columnNumber: 3
}, undefined);
const Minus = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20 12H4"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 88,
  columnNumber: 3
}, undefined);
const Spin = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 104,
  columnNumber: 3
}, undefined);
const Search = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 120,
  columnNumber: 3
}, undefined);
const Question = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  className: className,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 136,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./pages/bundles.tsx":
/*!***************************!*\
  !*** ./pages/bundles.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_itemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/itemList */ "./components/itemList.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_newEditItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/newEditItem */ "./components/newEditItem.tsx");
/* harmony import */ var _components_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/svg */ "./components/svg.tsx");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/user */ "./utils/user.ts");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\pages\\bundles.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const BundlesPage = () => {
  const {
    user,
    loading
  } = (0,_utils_user__WEBPACK_IMPORTED_MODULE_7__.useFetchUser)();
  const initialSelected = {
    id: null,
    feeds: [],
    editMode: false,
    newMode: false
  };
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialSelected);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid grid-cols-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "grid-cols-1 justify-start flex text-lr font-medium py-4",
        children: "Bundles Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined), user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: e => {
          e.persist();
          setSelected(currState => _objectSpread(_objectSpread({}, currState), {}, {
            newMode: !currState.newMode,
            editMode: false
          }));
        },
        className: "flex grid-cols-1 justify-end cursor-pointer",
        children: [selected.newMode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_svg__WEBPACK_IMPORTED_MODULE_5__.Minus, {
          className: `h-6 w-6 text-${selected.newMode ? 'gray' : 'blue'}-500 mt-4`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 27
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_svg__WEBPACK_IMPORTED_MODULE_5__.Plus, {
          className: `h-6 w-6 text-${selected.newMode ? 'gray' : 'blue'}-500 mt-4`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 27
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: `grid-cols-1 justify-start flex text-lg font-medium py-4 text-${selected.newMode ? `gray` : `blue`}`,
          children: "New Bundle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }, undefined) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), (selected.editMode || selected.newMode) && user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_newEditItem__WEBPACK_IMPORTED_MODULE_4__.NewEditItem, {
      type: _utils_types__WEBPACK_IMPORTED_MODULE_6__.ItemType.BundleType,
      selected: selected,
      setSelected: setSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_itemList__WEBPACK_IMPORTED_MODULE_2__.ItemList, {
      type: _utils_types__WEBPACK_IMPORTED_MODULE_6__.ItemType.BundleType,
      useSelected: true,
      allowEdits: true,
      selected: selected,
      setSelected: setSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (BundlesPage);

/***/ }),

/***/ "./utils/api/graphql/fragments.ts":
/*!****************************************!*\
  !*** ./utils/api/graphql/fragments.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FEED_TAG_FRAGMENT": function() { return /* binding */ FEED_TAG_FRAGMENT; },
/* harmony export */   "BUNDLE_TAG_FRAGMENT": function() { return /* binding */ BUNDLE_TAG_FRAGMENT; },
/* harmony export */   "AUTHOR_FRAGMENT": function() { return /* binding */ AUTHOR_FRAGMENT; },
/* harmony export */   "LIKE_FRAGMENT": function() { return /* binding */ LIKE_FRAGMENT; },
/* harmony export */   "FEED_FRAGMENT": function() { return /* binding */ FEED_FRAGMENT; },
/* harmony export */   "BUNDLE_FRAGMENT": function() { return /* binding */ BUNDLE_FRAGMENT; },
/* harmony export */   "SAVED_ARTICLE_FRAGMENT": function() { return /* binding */ SAVED_ARTICLE_FRAGMENT; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const FEED_TAG_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment FeedTagFragment on FeedTag {
    id
    name
  }
`;
const BUNDLE_TAG_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment BundleTagFragment on BundleTag {
    id
    name
  }
`;
const AUTHOR_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment AuthorFragment on User {
    id
    auth0
    picture
    nickname
  }
`;
const LIKE_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment LikeFragment on Like {
    id
    name
  }
`;
const FEED_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment FeedFragment on Feed {
    id
    name
    url
    likes {
      ...AuthorFragment
    }
    tags {
      ...FeedTagFragment
    }
    author {
      ...AuthorFragment
    }
  }
  ${FEED_TAG_FRAGMENT}
  ${AUTHOR_FRAGMENT}
`;
const BUNDLE_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment BundleFragment on Bundle {
    id
    name
    description
    tags {
      ...BundleTagFragment
    }
    author {
      ...AuthorFragment
    }
    likes {
      ...AuthorFragment
    }
  }
  ${BUNDLE_TAG_FRAGMENT}
  ${AUTHOR_FRAGMENT}
`;
const SAVED_ARTICLE_FRAGMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment SavedArticleFragment on SavedArticle {
    id
    contents
    url
    author {
      ...AuthorFragment
    }
    feed {
      ...FeedFragment
    }
  }
  ${AUTHOR_FRAGMENT}
  ${FEED_FRAGMENT}
`;

/***/ }),

/***/ "./utils/api/graphql/mutations.ts":
/*!****************************************!*\
  !*** ./utils/api/graphql/mutations.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LIKE_BUNDLE_MUTATION": function() { return /* binding */ LIKE_BUNDLE_MUTATION; },
/* harmony export */   "LIKE_FEED_MUTATION": function() { return /* binding */ LIKE_FEED_MUTATION; },
/* harmony export */   "CREATE_BUNDLE_MUTATION": function() { return /* binding */ CREATE_BUNDLE_MUTATION; },
/* harmony export */   "UPDATE_BUNDLE_MUTATION": function() { return /* binding */ UPDATE_BUNDLE_MUTATION; },
/* harmony export */   "CREATE_FEED_MUTATION": function() { return /* binding */ CREATE_FEED_MUTATION; },
/* harmony export */   "UPDATE_FEED_MUTATION": function() { return /* binding */ UPDATE_FEED_MUTATION; },
/* harmony export */   "CREATE_SAVED_ARTICLE_MUTATION": function() { return /* binding */ CREATE_SAVED_ARTICLE_MUTATION; },
/* harmony export */   "DELETE_BUNDLE_MUTATION": function() { return /* binding */ DELETE_BUNDLE_MUTATION; },
/* harmony export */   "DELETE_FEED_MUTATION": function() { return /* binding */ DELETE_FEED_MUTATION; },
/* harmony export */   "DELETE_SAVED_ARTICLE_MUTATION": function() { return /* binding */ DELETE_SAVED_ARTICLE_MUTATION; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fragments */ "./utils/api/graphql/fragments.ts");


const LIKE_BUNDLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation likeBundleMutation($data: LikeBundleInput) {
    likeBundle(data: $data) {
      ...BundleFragment
      feeds {
        ...FeedFragment
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
`;
const LIKE_FEED_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation likeFeedMutation($data: LikeFeedInput) {
    likeFeed(data: $data) {
      ...FeedFragment
      bundles {
        ...BundleFragment
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
`;
const CREATE_BUNDLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation createBundleMutation($data: BundleCreateInput) {
    createBundle(data: $data) {
      ...BundleFragment
      feeds {
        ...FeedFragment
        bundles {
          ...BundleFragment
        }
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
`;
const UPDATE_BUNDLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation updateBundleMutation($data: BundleUpdateInput) {
    updateBundle(data: $data) {
      ...BundleFragment
      feeds {
        ...FeedFragment
        bundles {
          ...BundleFragment
        }
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
`;
const CREATE_FEED_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation createFeedMutation($data: FeedCreateInput) {
    createFeed(data: $data) {
      ...FeedFragment
      bundles {
        ...BundleFragment
        feeds {
          ...FeedFragment
        }
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
`;
const UPDATE_FEED_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation updateFeedMutation($data: FeedUpdateInput) {
    updateFeed(data: $data) {
      ...FeedFragment
      bundles {
        ...BundleFragment
        feeds {
          ...FeedFragment
        }
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
`;
const CREATE_SAVED_ARTICLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation createSavedArticleMutation($data: SavedArticleCreateInput) {
    createSavedArticle(data: $data) {
      ...SavedArticleFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.SAVED_ARTICLE_FRAGMENT}
`;
const DELETE_BUNDLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation deleteBundleMutation($data: BundleInput) {
    deleteBundle(data: $data) {
      id
    }
  }
`;
const DELETE_FEED_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation deleteFeedMutation($data: FeedInput) {
    deleteFeed(data: $data) {
      id
    }
  }
`;
const DELETE_SAVED_ARTICLE_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation deleteSavedArticleMutation($data: DeleteSavedArticleInput) {
    deleteSavedArticle(data: $data) {
      id
      url
    }
  }
`;

/***/ }),

/***/ "./utils/api/graphql/queries.ts":
/*!**************************************!*\
  !*** ./utils/api/graphql/queries.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BUNDLES_QUERY": function() { return /* binding */ BUNDLES_QUERY; },
/* harmony export */   "FEEDS_QUERY": function() { return /* binding */ FEEDS_QUERY; },
/* harmony export */   "FIND_FEEDS_QUERY": function() { return /* binding */ FIND_FEEDS_QUERY; },
/* harmony export */   "FEED_QUERY": function() { return /* binding */ FEED_QUERY; },
/* harmony export */   "BUNDLE_QUERY": function() { return /* binding */ BUNDLE_QUERY; },
/* harmony export */   "FIND_FEED_TAGS_QUERY": function() { return /* binding */ FIND_FEED_TAGS_QUERY; },
/* harmony export */   "FIND_BUNDLE_TAGS_QUERY": function() { return /* binding */ FIND_BUNDLE_TAGS_QUERY; },
/* harmony export */   "SAVED_ARTICLES_QUERY": function() { return /* binding */ SAVED_ARTICLES_QUERY; },
/* harmony export */   "SAVED_ARTICLE_QUERY": function() { return /* binding */ SAVED_ARTICLE_QUERY; },
/* harmony export */   "ME_QUERY": function() { return /* binding */ ME_QUERY; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fragments */ "./utils/api/graphql/fragments.ts");


const BUNDLES_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    bundles {
      ...BundleFragment
      feeds {
        ...FeedFragment
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
`;
const FEEDS_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    feeds {
      ...FeedFragment
      bundles {
        ...BundleFragment
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
`;
const FIND_FEEDS_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query findFeedsQuery($data: FindFeedsInput) {
    findFeeds(data: $data) {
      ...FeedFragment
      bundles {
        ...BundleFragment
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
`;
const FEED_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query feedQuery($data: FeedInput) {
    feed(data: $data) {
      ...FeedFragment
      bundles {
        ...BundleFragment
        feeds {
          ...FeedFragment
        }
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
`;
const BUNDLE_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query bundleQuery($data: BundleInput) {
    bundle(data: $data) {
      ...BundleFragment
      feeds {
        ...FeedFragment
        bundles {
          ...BundleFragment
        }
      }
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_FRAGMENT}
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_FRAGMENT}
`;
const FIND_FEED_TAGS_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query findFeedTagsQuery($data: FindFeedTagsInput) {
    findFeedTags(data: $data) {
      ...FeedTagFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.FEED_TAG_FRAGMENT}
`;
const FIND_BUNDLE_TAGS_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query findBundleTagsQuery($data: FindBundleTagsInput) {
    findBundleTags(data: $data) {
      ...BundleTagFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.BUNDLE_TAG_FRAGMENT}
`;
const SAVED_ARTICLES_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query savedArticlesQuery {
    savedArticles {
      ...SavedArticleFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.SAVED_ARTICLE_FRAGMENT}
`;
const SAVED_ARTICLE_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query savedArticleQuery($data: SavedArticleInput) {
    savedArticle(data: $data) {
      ...SavedArticleFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.SAVED_ARTICLE_FRAGMENT}
`;
const ME_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query meQuery {
    me {
      ...AuthorFragment
    }
  }
  ${_fragments__WEBPACK_IMPORTED_MODULE_1__.AUTHOR_FRAGMENT}
`;

/***/ }),

/***/ "./utils/prepareUpdateObject.ts":
/*!**************************************!*\
  !*** ./utils/prepareUpdateObject.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareNewUpdateObject": function() { return /* binding */ prepareNewUpdateObject; }
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const genNestedItems = currentItem => {
  const tags = 'tags' in currentItem ? {
    tags: {
      connect: currentItem.tags.map(({
        id
      }) => ({
        id
      })).filter(({
        id
      }) => id !== undefined),
      create: currentItem.tags.filter(({
        id
      }) => id === undefined).map(o => _objectSpread(_objectSpread({}, o), {}, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)()
      }))
    }
  } : {};
  const feeds = 'feeds' in currentItem ? {
    feeds: {
      connect: currentItem.feeds.map(({
        id
      }) => ({
        id
      })).filter(({
        id
      }) => id !== undefined)
    }
  } : {};

  const {
    __typename,
    likes,
    author,
    bundles
  } = currentItem,
        cleanedItem = _objectWithoutProperties(currentItem, ["__typename", "likes", "author", "bundles"]);

  return _objectSpread(_objectSpread(_objectSpread({}, cleanedItem), tags), feeds);
};

const prepareNewUpdateObject = currentItem => {
  const currentData = genNestedItems(currentItem);
  return {
    currentData,
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)()
  };
};

/***/ }),

/***/ "./utils/types.ts":
/*!************************!*\
  !*** ./utils/types.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemType": function() { return /* binding */ ItemType; },
/* harmony export */   "BadgeFieldName": function() { return /* binding */ BadgeFieldName; },
/* harmony export */   "ActionType": function() { return /* binding */ ActionType; },
/* harmony export */   "SearchQueryName": function() { return /* binding */ SearchQueryName; }
/* harmony export */ });
let ItemType;

(function (ItemType) {
  ItemType["BundleType"] = "BundleType";
  ItemType["FeedType"] = "FeedType";
})(ItemType || (ItemType = {}));

let BadgeFieldName;

(function (BadgeFieldName) {
  BadgeFieldName["tags"] = "tags";
  BadgeFieldName["feeds"] = "feeds";
  BadgeFieldName["bundles"] = "bundles";
})(BadgeFieldName || (BadgeFieldName = {}));

let ActionType;

(function (ActionType) {
  ActionType["ADD"] = "ADD";
  ActionType["CREATE"] = "CREATE";
  ActionType["NONE"] = "NONE";
})(ActionType || (ActionType = {}));

let SearchQueryName;

(function (SearchQueryName) {
  SearchQueryName["findFeedTags"] = "findFeedTags";
  SearchQueryName["findBundleTags"] = "findBundleTags";
  SearchQueryName["findFeeds"] = "findFeeds";
})(SearchQueryName || (SearchQueryName = {}));

/***/ }),

/***/ "./utils/user.ts":
/*!***********************!*\
  !*** ./utils/user.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUser": function() { return /* binding */ fetchUser; },
/* harmony export */   "useFetchUser": function() { return /* binding */ useFetchUser; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

async function fetchUser(cookie = '') {
  if (false) {}

  const res = await fetch('/api/me', cookie ? {
    headers: {
      cookie
    }
  } : {});

  if (!res.ok) {
    delete window.__user;
    return null;
  }

  const json = await res.json();

  if (false) {}

  return json;
} // @ts-ignore

function useFetchUser({
  required
} = {}) {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => !( false && 0));
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    if (true) {
      return null;
    }

    return window.__user || null;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!loading && user) {
      return;
    }

    setLoading(true);
    let isMounted = true;
    fetchUser().then(user => {
      // Only set the user if the component is still mounted
      if (isMounted) {
        // When the user is not logged in but login is required
        if (required && !user) {
          window.location.href = '/api/login';
          return;
        }

        setUser(user);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  return {
    user,
    loading
  };
}

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("lodash");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("uuid");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/bundles.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL2JhZGdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9nZW5lcmF0ZUlucHV0RmllbGQudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvaXRlbUxpc3QudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvbGF5b3V0LnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL25hdi50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9uZXdFZGl0SXRlbS50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9ub3RpZnlFcnJvci50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9ub3RpZnlMb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL29uZUJhZGdlLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL29uZUxpc3RJdGVtLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL3Byb2ZpbGVQaWMudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvc2VhcmNoSXRlbXMudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvc3ZnLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9wYWdlcy9idW5kbGVzLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcGkvZ3JhcGhxbC9mcmFnbWVudHMudHMiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vdXRpbHMvYXBpL2dyYXBocWwvbXV0YXRpb25zLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL2FwaS9ncmFwaHFsL3F1ZXJpZXMudHMiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vdXRpbHMvcHJlcGFyZVVwZGF0ZU9iamVjdC50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy90eXBlcy50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy91c2VyLnRzIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwidXVpZFwiIiwid2VicGFjazovL25ld3NwcmlzbS9pZ25vcmVkfEM6XFxVZGVteVN0dWZmXFxQcmlzbWFTdHVmZlxcbmV3c3ByaXNtYVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkJhZGdlTGlzdCIsImZpZWxkTmFtZSIsImFjdGlvbiIsIml0ZW0iLCJzZXRJdGVtIiwic2V0U2VhcmNoIiwibGVuZ3RoIiwibWFwIiwib25lQmFkZ2UiLCJuYW1lIiwiR2VuZXJhdGVJbnB1dEZpZWxkIiwiY3VycmVudEl0ZW0iLCJjaGFuZ2VIYW5kbGVyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImUiLCJwZXJzaXN0IiwiY3VyciIsInRhcmdldCIsInZhbHVlIiwiSXRlbUxpc3QiLCJ0eXBlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZVNlbGVjdGVkIiwiYWxsb3dFZGl0cyIsImlzRmVlZCIsIkl0ZW1UeXBlIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInVzZVF1ZXJ5IiwiRkVFRFNfUVVFUlkiLCJCVU5ETEVTX1FVRVJZIiwiY29uc29sZSIsImxvZyIsImZlZWRzIiwiYnVuZGxlcyIsIml0ZW1MaXN0IiwidXNlRWZmZWN0IiwiaWQiLCJmaXJzdEl0ZW0iLCJlZGl0TW9kZSIsIm5ld01vZGUiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIk5hdiIsInVzZXIiLCJ1c2VGZXRjaFVzZXIiLCJOZXdFZGl0SXRlbSIsImluaXRpYWxGZWVkIiwidXJsIiwidGFncyIsImluaXRpYWxCdW5kbGUiLCJkZXNjcmlwdGlvbiIsImluaXRpYWxTdGF0ZSIsInVzZVN0YXRlIiwiaW5wdXRGaWVsZHMiLCJjcmVhdGVJdGVtTXV0YXRpb24iLCJjcmVhdGVMb2FkaW5nIiwiY3JlYXRlRXJyb3IiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9GRUVEX01VVEFUSU9OIiwiQ1JFQVRFX0JVTkRMRV9NVVRBVElPTiIsInZhcmlhYmxlcyIsInByZXZlbnREZWZhdWx0IiwicHJlcGFyZU5ld1VwZGF0ZU9iamVjdCIsImN1cnJTdGF0ZSIsIkJhZGdlRmllbGROYW1lIiwiQWN0aW9uVHlwZSIsIlNlYXJjaFF1ZXJ5TmFtZSIsIkZJTkRfRkVFRF9UQUdTX1FVRVJZIiwiRklORF9CVU5ETEVfVEFHU19RVUVSWSIsIkZJTkRfRkVFRFNfUVVFUlkiLCJOb3RpZnlFcnJvciIsIk5vdGlmeUxvYWRpbmciLCJPbmVCYWRnZSIsImNvbG9yIiwiZmlsdGVyIiwibyIsIk9uZUxpc3RJdGVtIiwiaXNTZWxlY3RlZCIsImF1dGhvciIsIlByb2ZpbGVQaWMiLCJwaWN0dXJlIiwibmlja25hbWUiLCJTZWFyY2hJdGVtcyIsInF1ZXJ5TmFtZSIsInF1ZXJ5Iiwic2VhcmNoIiwiZmluZEl0ZW1zUXVlcnkiLCJjYWxsZWQiLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsImZldGNoZWRJdGVtcyIsIl8iLCJmaWx0RmluZEl0ZW1zIiwib25lSXRlbSIsImluY2x1ZGVzIiwibWF0Y2hDdXJyZW50IiwibWF0Y2hMaXN0IiwiZmlsdEZpbmRJdGVtc1dpdGhBZGQiLCJkdW1teU5ld0l0ZW0iLCJrZXkiLCJXYWl0aW5nQ2xvY2siLCJjbGFzc05hbWUiLCJFcnJvclNpZ24iLCJEb3VibGVBcnJvd0Rvd24iLCJEb3VibGVBcnJvd1JpZ2h0IiwiUGx1cyIsIk1pbnVzIiwiU3BpbiIsIlNlYXJjaCIsIlF1ZXN0aW9uIiwiQnVuZGxlc1BhZ2UiLCJpbml0aWFsU2VsZWN0ZWQiLCJGRUVEX1RBR19GUkFHTUVOVCIsImdxbCIsIkJVTkRMRV9UQUdfRlJBR01FTlQiLCJBVVRIT1JfRlJBR01FTlQiLCJMSUtFX0ZSQUdNRU5UIiwiRkVFRF9GUkFHTUVOVCIsIkJVTkRMRV9GUkFHTUVOVCIsIlNBVkVEX0FSVElDTEVfRlJBR01FTlQiLCJMSUtFX0JVTkRMRV9NVVRBVElPTiIsIkxJS0VfRkVFRF9NVVRBVElPTiIsIlVQREFURV9CVU5ETEVfTVVUQVRJT04iLCJVUERBVEVfRkVFRF9NVVRBVElPTiIsIkNSRUFURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OIiwiREVMRVRFX0JVTkRMRV9NVVRBVElPTiIsIkRFTEVURV9GRUVEX01VVEFUSU9OIiwiREVMRVRFX1NBVkVEX0FSVElDTEVfTVVUQVRJT04iLCJGRUVEX1FVRVJZIiwiQlVORExFX1FVRVJZIiwiU0FWRURfQVJUSUNMRVNfUVVFUlkiLCJTQVZFRF9BUlRJQ0xFX1FVRVJZIiwiTUVfUVVFUlkiLCJnZW5OZXN0ZWRJdGVtcyIsImNvbm5lY3QiLCJ1bmRlZmluZWQiLCJjcmVhdGUiLCJ1dWlkNHYiLCJfX3R5cGVuYW1lIiwibGlrZXMiLCJjbGVhbmVkSXRlbSIsImN1cnJlbnREYXRhIiwiZmV0Y2hVc2VyIiwiY29va2llIiwicmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwib2siLCJ3aW5kb3ciLCJfX3VzZXIiLCJqc29uIiwicmVxdWlyZWQiLCJzZXRMb2FkaW5nIiwic2V0VXNlciIsImlzTW91bnRlZCIsInRoZW4iLCJsb2NhdGlvbiIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFTyxNQUFNQSxTQUFTLEdBQUcsQ0FBQztBQUN0QkMsV0FEc0I7QUFFdEJDLFFBRnNCO0FBR3RCQyxNQUhzQjtBQUl0QkMsU0FKc0I7QUFLdEJDO0FBTHNCLENBQUQsS0FjbkI7QUFDRixTQUFPRixJQUFJLENBQUNGLFNBQUQsQ0FBSixJQUFtQkUsSUFBSSxDQUFDRixTQUFELENBQUosQ0FBZ0JLLE1BQWhCLEdBQXlCLENBQTVDLGdCQUNIO0FBQUEsY0FDQ0gsSUFBSSxDQUFDRixTQUFELENBQUosQ0FBZ0JNLEdBQWhCLENBQXFCQyxRQUFELGlCQUNqQiw4REFBQywrQ0FBRDtBQUVJLGVBQVMsRUFBRVAsU0FGZjtBQUdJLFVBQUksRUFBRU8sUUFIVjtBQUlJLFlBQU0sRUFBRU4sTUFKWjtBQUtJLGFBQU8sRUFBRUUsT0FMYjtBQU1JLGlCQUFXLEVBQUVELElBTmpCO0FBT0ksZUFBUyxFQUFFRTtBQVBmLE9BQ1UsR0FBRUYsSUFBSSxDQUFDLElBQUQsQ0FBTyxJQUFHSyxRQUFRLENBQUNDLElBQUssR0FEeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESDtBQURELG1CQURHLGdCQWVIO0FBQUcsYUFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmSjtBQWtCSCxDQWpDTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBLE1BQU1DLGtCQUFrQixHQUFHLENBQUM7QUFDL0JDLGFBRCtCO0FBRS9CRixNQUYrQjtBQUcvQkc7QUFIK0IsQ0FBRCxrQkFTOUI7QUFBSyxXQUFTLEVBQUMsTUFBZjtBQUFBLDBCQUNJO0FBQU8sYUFBUyxFQUFFLFlBQWxCO0FBQUEsY0FDS0gsSUFB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LENBQ1AsTUFBTTtBQUNKLFFBQUksQ0FBQ1gsT0FBRCxJQUFZbUIsSUFBaEIsRUFBc0I7QUFDcEI7QUFDRDs7QUFDRDZHLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQSxRQUFJRSxTQUFTLEdBQUcsSUFBaEI7QUFFQVosYUFBUyxHQUFHYSxJQUFaLENBQWtCaEgsSUFBRCxJQUFVO0FBQ3pCO0FBQ0EsVUFBSStHLFNBQUosRUFBZTtBQUNiO0FBQ0EsWUFBSUgsUUFBUSxJQUFJLENBQUM1RyxJQUFqQixFQUF1QjtBQUNyQnlHLGdCQUFNLENBQUNRLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLFlBQXZCO0FBQ0E7QUFDRDs7QUFDREosZUFBTyxDQUFDOUcsSUFBRCxDQUFQO0FBQ0E2RyxrQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNEO0FBQ0YsS0FYRDtBQWFBLFdBQU8sTUFBTTtBQUNYRSxlQUFTLEdBQUcsS0FBWjtBQUNELEtBRkQ7QUFHRCxHQXhCTSxFQXlCUDtBQUNBLElBMUJPLENBQVQ7QUE2QkEsU0FBTztBQUFFL0csUUFBRjtBQUFRbkI7QUFBUixHQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNoRkQsNEM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2J1bmRsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWN0aW9uVHlwZSwgQmFkZ2VGaWVsZE5hbWUsIEJ1bmRsZU9iamVjdCwgRmVlZE9iamVjdCB9IGZyb20gXCIuLi91dGlscy90eXBlc1wiO1xyXG5pbXBvcnQgeyBPbmVCYWRnZSB9IGZyb20gJy4vb25lQmFkZ2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJhZGdlTGlzdCA9ICh7XHJcbiAgICBmaWVsZE5hbWUsXHJcbiAgICBhY3Rpb24sXHJcbiAgICBpdGVtLFxyXG4gICAgc2V0SXRlbSxcclxuICAgIHNldFNlYXJjaCxcclxuXHJcbn0gOiB7XHJcbiAgICBmaWVsZE5hbWU6IEJhZGdlRmllbGROYW1lO1xyXG4gICAgYWN0aW9uOiBBY3Rpb25UeXBlO1xyXG4gICAgaXRlbTogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdDtcclxuICAgIHNldEl0ZW0gPyA6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q+PjtcclxuICAgIHNldFNlYXJjaCA/IDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248U3RyaW5nPj47XHJcblxyXG59KSA9PiB7XHJcbiAgICByZXR1cm4gaXRlbVtmaWVsZE5hbWVdICYmIGl0ZW1bZmllbGROYW1lXS5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAge2l0ZW1bZmllbGROYW1lXS5tYXAoKG9uZUJhZGdlKSA9PiAoXHJcbiAgICAgICAgICAgIDxPbmVCYWRnZVxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtWydpZCddfS0ke29uZUJhZGdlLm5hbWV9fWB9XHJcbiAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e2ZpZWxkTmFtZX1cclxuICAgICAgICAgICAgICAgIGl0ZW09e29uZUJhZGdlfVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uPXthY3Rpb259XHJcbiAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgICAgICBzZXRTZWFyY2g9e3NldFNlYXJjaH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICApIDogKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj5Ob25lIGZvdW5kPC9wPlxyXG4gICAgICk7XHJcbiAgICAgXHJcbn07IiwiaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1bmRsZU9iamVjdCwgRmVlZE9iamVjdCB9IGZyb20gXCIuLi91dGlscy90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdlbmVyYXRlSW5wdXRGaWVsZCA9ICh7XHJcbiAgICBjdXJyZW50SXRlbSxcclxuICAgIG5hbWUsXHJcbiAgICBjaGFuZ2VIYW5kbGVyLFxyXG59IDoge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgY3VycmVudEl0ZW06IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q7XHJcbiAgICBjaGFuZ2VIYW5kbGVyOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0Pj47XHJcbn0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMlwiID5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSBcImJsb2NrIHB5LTJcIiA+XHJcbiAgICAgICAgICAgIHtuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKX1cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItNCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTNcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Y3VycmVudEl0ZW1bbmFtZV19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICAgICAgY2hhbmdlSGFuZGxlcigoY3VycikgPT4gKHsuLi5jdXJyLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlfSkpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4pIiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgQlVORExFU19RVUVSWSwgRkVFRFNfUVVFUlkgfSBmcm9tIFwiLi4vdXRpbHMvYXBpL2dyYXBocWwvcXVlcmllc1wiO1xyXG5pbXBvcnQgeyBCdW5kbGVPYmplY3QsIEZlZWRPYmplY3QsIEl0ZW1UeXBlLCBTZWxlY3RlZEZlZWRTdGF0ZSB9IGZyb20gXCIuLi91dGlscy90eXBlc1wiXHJcbmltcG9ydCB7IE5vdGlmeUxvYWRpbmcgfSBmcm9tICcuL25vdGlmeUxvYWRpbmcnO1xyXG5pbXBvcnQgeyBOb3RpZnlFcnJvciB9IGZyb20gXCIuL25vdGlmeUVycm9yXCI7XHJcbmltcG9ydCB7IE9uZUxpc3RJdGVtIH0gZnJvbSBcIi4vb25lTGlzdEl0ZW1cIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1MaXN0ID0gKHtcclxuICB0eXBlLFxyXG4gIHNlbGVjdGVkLFxyXG4gIHNldFNlbGVjdGVkLFxyXG4gIHVzZVNlbGVjdGVkID0gZmFsc2UsXHJcbiAgYWxsb3dFZGl0c1xyXG59IDoge1xyXG4gICAgXHJcbiAgICB0eXBlOiBJdGVtVHlwZTtcclxuICAgIHNlbGVjdGVkPyA6IFNlbGVjdGVkRmVlZFN0YXRlO1xyXG4gICAgc2V0U2VsZWN0ZWQ/OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxTZWxlY3RlZEZlZWRTdGF0ZT4+O1xyXG4gICAgdXNlU2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gICAgYWxsb3dFZGl0cz86IGJvb2xlYW47XHJcbiAgXHJcbiAgfSkgPT4ge1xyXG4gICAgY29uc3QgaXNGZWVkID0gdHlwZSA9PT0gSXRlbVR5cGUuRmVlZFR5cGU7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShcclxuICAgICAgaXNGZWVkID8gRkVFRFNfUVVFUlkgOiBCVU5ETEVTX1FVRVJZLFxyXG4gICAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGxvYWRpbmcsIGVycm9yLCBkYXRhKVxyXG4gICAgXHJcbiAgICBjb25zdCB7IGZlZWRzLCBidW5kbGVzIH0gPSBkYXRhIHx8IHt9O1xyXG4gICAgY29uc3QgaXRlbUxpc3QgPSBpc0ZlZWQgPyBmZWVkcyA6IGJ1bmRsZXM7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZih1c2VTZWxlY3RlZCAmJiBpdGVtTGlzdCAmJiBpdGVtTGlzdC5sZW5ndGggPiAwICYmIHNlbGVjdGVkLmlkID09PSBudWxsKXtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IGl0ZW1MaXN0WzBdXHJcbiAgICAgICAgICBhd2FpdCBzZXRTZWxlY3RlZCh7XHJcbiAgICAgICAgICAgIGlkOiBmaXJzdEl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGZlZWRzOiBpc0ZlZWQgPyBbZmlyc3RJdGVtXSA6IGZpcnN0SXRlbVsnZmVlZHMnXSxcclxuICAgICAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBuZXdNb2RlOiBmYWxzZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkgKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgIFxyXG4gICBcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgPE5vdGlmeUxvYWRpbmcgLz5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiA8Tm90aWZ5RXJyb3IgLz5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTMgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cclxuICAgICAgICB7aXRlbUxpc3QgJiYgaXRlbUxpc3QubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIGl0ZW1MaXN0Lm1hcCgoaXRlbTogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdCkgPT4gKFxyXG4gICAgICAgICAgPE9uZUxpc3RJdGVtXHJcbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgdXNlU2VsZWN0ZWQ9e3VzZVNlbGVjdGVkfVxyXG4gICAgICAgICAgICBhbGxvd0VkaXRzPXthbGxvd0VkaXRzfVxyXG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cclxuXHJcbiAgICAgICAgICAvPikpXHJcbiAgICAgICAgKSA6ICg8cD5Ob25lIGFyZSBwcmVzZW50LiBXaHkgbm90IGFkZCBvbmU/PC9wPil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgICAgIClcclxuICAgICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAgeyBOYXYgfSAgZnJvbSAnLi9uYXYnXHJcblxyXG5leHBvcnQgY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlRmV0Y2hVc2VyIH0gZnJvbSAnLi4vdXRpbHMvdXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2ID0gKCkgID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciwgbG9hZGluZyB9ID0gdXNlRmV0Y2hVc2VyKCk7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHVzZXIsIGxvYWRpbmcpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZ3JpZCBncmlkLWNvbHMtNFwiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nc206aC0xMCBoLTggcHItMScgc3JjPVwiL2xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgc206dmlzaWJsZSBpbnZpc2libGVcIj5OZXdzcHJpc208L2E+XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgZmxleCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNtOm1yLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NhdmVkLWFydGljbGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicC0yIHRleHQtY2VudGVyIGJsb2NrIGhvdmVyOmJsdWUtNzAwIHRleHQtYmx1ZS03MDBcIj5TYXZlZCBBcnRpY2xlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic206bXItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYnVuZGxlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWNlbnRlciBibG9jayBob3ZlcjpibHVlLTcwMCB0ZXh0LWJsdWUtNzAwXCI+QnVuZGxlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNtOm1yLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2ZlZWRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicC0yIHRleHQtY2VudGVyIGJsb2NrIGhvdmVyOmJsdWUtNzAwIHRleHQtYmx1ZS03MDBcIj5GZWVkczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB7dXNlciAmJiAhbG9hZGluZyA/IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNtOm1yLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FwaS9sb2dvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgdGV4dC1ibHVlLTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzbTptci02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hcGkvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgdGV4dC1ibHVlLTcwMFwiPkxvZ2luPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENSRUFURV9CVU5ETEVfTVVUQVRJT04sIENSRUFURV9GRUVEX01VVEFUSU9OIH0gZnJvbSAnLi4vdXRpbHMvYXBpL2dyYXBocWwvbXV0YXRpb25zJztcclxuaW1wb3J0IHsgRklORF9CVU5ETEVfVEFHU19RVUVSWSwgRklORF9GRUVEU19RVUVSWSwgRklORF9GRUVEX1RBR1NfUVVFUlkgfSBmcm9tICcuLi91dGlscy9hcGkvZ3JhcGhxbC9xdWVyaWVzJztcclxuaW1wb3J0IHsgcHJlcGFyZU5ld1VwZGF0ZU9iamVjdCB9IGZyb20gJy4uL3V0aWxzL3ByZXBhcmVVcGRhdGVPYmplY3QnO1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlLCBCYWRnZUZpZWxkTmFtZSwgQnVuZGxlT2JqZWN0LCBGZWVkT2JqZWN0LCBJdGVtVHlwZSwgTmV3SXRlbVN0YXRlLCBTZWFyY2hRdWVyeU5hbWUsIFNlbGVjdGVkRmVlZFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBCYWRnZUxpc3QgfSBmcm9tICcuL2JhZGdlTGlzdCc7XHJcbmltcG9ydCB7IEdlbmVyYXRlSW5wdXRGaWVsZCB9IGZyb20gJy4vZ2VuZXJhdGVJbnB1dEZpZWxkJztcclxuaW1wb3J0IHsgU2VhcmNoSXRlbXMgfSBmcm9tICcuL3NlYXJjaEl0ZW1zJztcclxuaW1wb3J0IHsgRXJyb3JTaWduLCBXYWl0aW5nQ2xvY2sgfSBmcm9tICcuL3N2Zyc7XHJcblxyXG5leHBvcnQgY29uc3QgTmV3RWRpdEl0ZW0gPSAoe1xyXG4gICB0eXBlLFxyXG4gICBzZWxlY3RlZCxcclxuICAgc2V0U2VsZWN0ZWRcclxufToge1xyXG4gICBcclxuICAgdHlwZTogSXRlbVR5cGU7XHJcbiAgIHNlbGVjdGVkOiBTZWxlY3RlZEZlZWRTdGF0ZTtcclxuICAgc2V0U2VsZWN0ZWQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFNlbGVjdGVkRmVlZFN0YXRlPj5cclxufSkgPT4ge1xyXG4gICAgY29uc3QgaXNGZWVkID0gdHlwZSA9PT0gSXRlbVR5cGUuRmVlZFR5cGVcclxuICAgIGNvbnN0IGluaXRpYWxGZWVkOiBGZWVkT2JqZWN0ID0ge25hbWU6IFwiXCIsIHVybDogXCJcIiwgdGFnczogW10gfTtcclxuICAgIGNvbnN0IGluaXRpYWxCdW5kbGU6IEJ1bmRsZU9iamVjdCA9IHtuYW1lOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiwgdGFnczogW10sIGZlZWRzOiBbXX07XHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGU6IE5ld0l0ZW1TdGF0ZSA9IGlzRmVlZCA/IGluaXRpYWxGZWVkIDogaW5pdGlhbEJ1bmRsZTtcclxuICAgIGNvbnN0IFtjdXJyZW50SXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZTxOZXdJdGVtU3RhdGU+KGluaXRpYWxTdGF0ZSlcclxuICAgIGNvbnN0IGlucHV0RmllbGRzID0gaXNGZWVkID8gWyduYW1lJywgJ3VybCddIDogWyduYW1lJywgJ2Rlc2NyaXB0aW9uJ11cclxuXHJcbiAgIGNvbnN0IFsgY3JlYXRlSXRlbU11dGF0aW9uLCB7IGxvYWRpbmc6IGNyZWF0ZUxvYWRpbmcsIGVycm9yOiBjcmVhdGVFcnJvciB9IF0gID0gdXNlTXV0YXRpb24oaXNGZWVkID8gQ1JFQVRFX0ZFRURfTVVUQVRJT04gOiBDUkVBVEVfQlVORExFX01VVEFUSU9OKTtcclxuXHJcbiAgIGNvbnN0IHZhcmlhYmxlcyA9IHsgZGF0YTogeyBpZDogc2VsZWN0ZWQuaWQgPyBzZWxlY3RlZC5pZCA6ICcnIH0gfTtcclxuXHJcblxyXG4gICBpZihjcmVhdGVMb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8V2FpdGluZ0Nsb2NrIGNsYXNzTmFtZT1cIm15LTIwIGgtMTAgdy0xMCB0ZXh0LWdyYXktNTAwIG0tYXV0b1wiLz5cclxuICAgfSAgXHJcbiAgIGlmKGNyZWF0ZUVycm9yKSB7XHJcbiAgICAgIHJldHVybiA8RXJyb3JTaWduIGNsYXNzTmFtZT1cIm15LTIwIGgtMTAgdy0xMCB0ZXh0LWdyYXktNTAwIG0tYXV0b1wiLz5cclxuICAgfSBcclxuICAgXHJcbiAgIHJldHVybiAoXHJcbiAgICAgPD5cclxuICAgICAgPGZvcm1cclxuICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIGNvbnN0IGRhdGEgPSBwcmVwYXJlTmV3VXBkYXRlT2JqZWN0KGN1cnJlbnRJdGVtKVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICBcclxuICAgICAgICAgY3JlYXRlSXRlbU11dGF0aW9uKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7IGRhdGEgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRJdGVtKGluaXRpYWxTdGF0ZSlcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWQoKGN1cnJTdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgLi4uY3VyclN0YXRlLFxyXG4gICAgICAgICAgICAgICBlZGl0TW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgIG5ld01vZGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICB9fVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEyIGdhcC00IHJvdW5kZWQtbWQgYm9yZGVyLTQgbXktNCBweS0yIHB4LTRcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgdGV4dC1sZyBmb250LW1lZGl1bSBweS0yXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpc0ZlZWQgPyAnTmV3IEZlZWQnIDogJ05ldyBCdW5kbGUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tNic+XHJcbiAgICAgICAgICB7aW5wdXRGaWVsZHMubWFwKChuYW1lKSA9PiAoXHJcbiAgICAgICAgICAgICA8R2VuZXJhdGVJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgIGtleT17YCR7dHlwZX0tJHtuYW1lfWB9XHJcbiAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtPXtjdXJyZW50SXRlbX1cclxuICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgY2hhbmdlSGFuZGxlcj17c2V0SXRlbX1cclxuICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHB5LTQgJHtpc0ZlZWQgPyBudWxsIDogJ3B0LTI4J31gfT5cclxuICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2BweS00ICR7YGJnLSR7XHJcbiAgICAgICAgICAgICAgICBpc0ZlZWQgPyAnZ3JlZW4nIDogJ3B1cnBsZSdcclxuICAgICAgICAgICAgIH0tNDAwYH0gaG92ZXI6YmctJHtcclxuICAgICAgICAgICAgICAgIGlzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ1xyXG4gICAgICAgICAgICAgfS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHgtMTIgcm91bmRlZGB9XHJcbiAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tNiAnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMic+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIHB5LTInPlRhZ3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTInPlxyXG4gICAgICAgICAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e0JhZGdlRmllbGROYW1lLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICBhY3Rpb249e0FjdGlvblR5cGUuQ1JFQVRFfVxyXG4gICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgIGl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cclxuICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgcHktMic+QWRkIE5ldyBUYWc6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgPFNlYXJjaEl0ZW1zIFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeU5hbWU9e2lzRmVlZCA/IFNlYXJjaFF1ZXJ5TmFtZS5maW5kRmVlZFRhZ3MgOiBTZWFyY2hRdWVyeU5hbWUuZmluZEJ1bmRsZVRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5PXtpc0ZlZWQgPyBGSU5EX0ZFRURfVEFHU19RVUVSWSA6IEZJTkRfQlVORExFX1RBR1NfUVVFUll9XHJcbiAgICAgICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtPXtjdXJyZW50SXRlbX1cclxuICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXtCYWRnZUZpZWxkTmFtZS50YWdzfVxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2lzRmVlZCA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTInPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayBweS0yJz5GZWVkczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMic+XHJcbiAgICAgICAgICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUuZmVlZHN9XHJcbiAgICAgICAgICAgICAgICAgICBhY3Rpb249e0FjdGlvblR5cGUuQ1JFQVRFfVxyXG4gICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgIGl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS0yJz5cclxuICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgcHktMic+QWRkIE5ldyBGZWVkOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgIDxTZWFyY2hJdGVtcyBcclxuICAgICAgICAgICAgICAgICAgcXVlcnlOYW1lPXtTZWFyY2hRdWVyeU5hbWUuZmluZEZlZWRzfVxyXG4gICAgICAgICAgICAgICAgICBxdWVyeT17RklORF9GRUVEU19RVUVSWX1cclxuICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e2N1cnJlbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e0JhZGdlRmllbGROYW1lLmZlZWRzfVxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgPC8+XHJcbiAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBFcnJvclNpZ24gfSBmcm9tIFwiLi9zdmdcIlxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmeUVycm9yID0gKCkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXhcIj5cclxuICAgICAgICAgPEVycm9yU2lnbiBjbGFzc05hbWU9XCJoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG9cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBXYWl0aW5nQ2xvY2sgfSBmcm9tIFwiLi9zdmdcIlxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmeUxvYWRpbmcgPSAoKSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleFwiPlxyXG4gICAgICAgICA8V2FpdGluZ0Nsb2NrIGNsYXNzTmFtZT1cImgtMTAgdy0xMCB0ZXh0LWdyYXktNTAwIG0tYXV0b1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnVuZGxlLCBCdW5kbGVUYWcsIEZlZWRUYWcgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHtBY3Rpb25UeXBlLCBCYWRnZUZpZWxkTmFtZSwgQnVuZGxlT2JqZWN0LCBGZWVkT2JqZWN0fSBmcm9tICcuLi91dGlscy90eXBlcydcclxuaW1wb3J0IHsgTWludXMsIFBsdXMgfSBmcm9tIFwiLi9zdmdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPbmVCYWRnZSA9ICh7XHJcbiAgICBpdGVtLFxyXG4gICAgYWN0aW9uLFxyXG4gICAgY3VycmVudEl0ZW0sXHJcbiAgICBmaWVsZE5hbWUsXHJcbiAgICBzZXRJdGVtLFxyXG4gICAgc2V0U2VhcmNoLFxyXG4gICAgIH0gOiB7XHJcbiAgIGl0ZW06IEZlZWRUYWcgfCBCdW5kbGVUYWcgfEZlZWRPYmplY3RcclxuICAgYWN0aW9uOiBBY3Rpb25UeXBlO1xyXG4gICBjdXJyZW50SXRlbSA/OiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0XHJcbiAgIGZpZWxkTmFtZTogQmFkZ2VGaWVsZE5hbWU7XHJcbiAgIHNldEl0ZW0/OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0Pj5cclxuICAgc2V0U2VhcmNoPzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248U3RyaW5nPj47XHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGNvbG9yID1cclxuICAgICBmaWVsZE5hbWUgPT09IEJhZGdlRmllbGROYW1lLnRhZ3NcclxuICAgICAgICA/ICdibHVlJ1xyXG4gICAgICAgIDogZmllbGROYW1lID09PSBCYWRnZUZpZWxkTmFtZS5mZWVkc1xyXG4gICAgICAgID8gJ2dyZWVuJ1xyXG4gICAgICAgIDogJ3B1cnBsZSdcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcblxyXG4gICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGFsaWduLW1pZGRsZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtc20gICBweS0yIHB4LTIgcm91bmRlZC1sZyBiZy0ke2NvbG9yfS0yMDAgYH0+XHJcblxyXG4gICAgICAgICAgICB7YWN0aW9uID09PSBBY3Rpb25UeXBlLkFERCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEl0ZW0oKGN1cnJTdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3VyclN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbZmllbGROYW1lXTogWy4uLmN1cnJTdGF0ZVtmaWVsZE5hbWVdLCB7IC4uLml0ZW0gfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaCgnJyk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQbHVzIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1ncmF5LTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbiA9PT0gQWN0aW9uVHlwZS5DUkVBVEUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW0oKGN1cnJTdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN1cnJTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZE5hbWVdOiBjdXJyU3RhdGVbZmllbGROYW1lXS5maWx0ZXIoKG8pID0+IGl0ZW0ubmFtZSAhPT0gby5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNaW51cyBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtZ3JheS01MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LXhzIHRleHQtJHtjb2xvcn0tNjAwIHRleHQtY2VudGVyYH0+IHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlLCBCYWRnZUZpZWxkTmFtZSwgQnVuZGxlT2JqZWN0LCBGZWVkT2JqZWN0LCBJdGVtVHlwZSwgU2VsZWN0ZWRGZWVkU3RhdGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXNcIlxyXG5pbXBvcnQgeyBCYWRnZUxpc3QgfSBmcm9tICcuL2JhZGdlTGlzdCc7XHJcbmltcG9ydCB7IFByb2ZpbGVQaWMgfSBmcm9tICcuL3Byb2ZpbGVQaWMnO1xyXG5pbXBvcnQgeyBEb3VibGVBcnJvd0Rvd24sIERvdWJsZUFycm93UmlnaHQgfSBmcm9tIFwiLi9zdmdcIjtcclxuZXhwb3J0IGNvbnN0IE9uZUxpc3RJdGVtID0gKHtcclxuICAgIGl0ZW0sXHJcbiAgICB0eXBlLFxyXG4gICAgc2VsZWN0ZWQsXHJcbiAgICBzZXRTZWxlY3RlZCxcclxuICAgIHVzZVNlbGVjdGVkID0gZmFsc2UsXHJcbiAgICBhbGxvd0VkaXRzXHJcbiAgfSA6IHtcclxuICAgICAgaXRlbTogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdFxyXG4gICAgICB0eXBlOiBJdGVtVHlwZTtcclxuICAgICAgc2VsZWN0ZWQ/IDogU2VsZWN0ZWRGZWVkU3RhdGU7XHJcbiAgICAgIHNldFNlbGVjdGVkPzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248U2VsZWN0ZWRGZWVkU3RhdGU+PjtcclxuICAgICAgdXNlU2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gICAgICBhbGxvd0VkaXRzPzogYm9vbGVhbjtcclxuICAgIFxyXG4gICAgfSkgID0+IHtcclxuICAgIGNvbnN0IGlzRmVlZCA9IHR5cGUgPT09IEl0ZW1UeXBlLkZlZWRUeXBlO1xyXG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHVzZVNlbGVjdGVkICYmIHNlbGVjdGVkICYmIHNlbGVjdGVkLmlkID09PSBpdGVtLmlkO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke2lzRmVlZCA/ICdmZWVkJyA6ICdidW5kbGUnIH0vJHtpdGVtLmlkfWB9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvci1wb2ludGVyIGdyaWQgZ3JpZC1jb2xzLTYgcC00IHJvdW5kZWQtbGdcclxuICAgICAgICAgICAgICAgICAgICAke3VzZVNlbGVjdGVkID8gJ3JvdW5kZWQtYi1ub25lJyA6ICdib3JkZXItYi00J30gXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXQtNCBib3JkZXItbC00IGJvcmRlci1yLTRcclxuICAgICAgICAgICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA/IGBib3JkZXItJHtpc0ZlZWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dyZWVuJyA6ICdwdXJwbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0tNDAwYCA6ICdib3JkZXItZ3JheS0zMDAnfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntpdGVtLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICB7IWlzRmVlZCA/IDxwPntpdGVtWydkZXNjcmlwdGlvbiddfTwvcD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPmFjdGlvbnM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFuLWNvbC02IHB5LTAgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uYXV0aG9yID8gPFByb2ZpbGVQaWMgYXV0aG9yPXtpdGVtLmF1dGhvcn0gLz4gOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02IHB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+VGFnczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkcyBncmlkcy1jb2xzLTIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUudGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtBY3Rpb25UeXBlLk5PTkV9XHJcbiAgICAgICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNiBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPntpc0ZlZWQgPyAnQnVuZGxlcycgOiAnRmVlZHMnfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPmNoaWxkIGl0ZW1zLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7dXNlU2VsZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAge2lzU2VsZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0ge2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggcm91bmRlZC1sZyByb3VuZGVkLXQtbm9uZSBhbGlnbi1taWRkbGUgJHtpc1NlbGVjdGVkID8gYGJnLSR7aXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnfS00MDBgIDogYGJnLWdyYXktMzAwYH0gcC00IHotMTAgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlcmAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERvdWJsZUFycm93RG93biBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtd2hpdGUtNTAwIG1yLTIgbXQtMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgSGlkZSAke2lzRmVlZCA/ICdGZWVkJyA6ICdCdW5kbGUnfSBBcnRpY2xlc2B9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRzOiBpc0ZlZWQgPyBbaXRlbV06IGl0ZW1bJ2ZlZWRzJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0TW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdNb2RlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggcm91bmRlZC1sZyByb3VuZGVkLXQtbm9uZSBhbGlnbi1taWRkbGUgJHtpc1NlbGVjdGVkID8gYGJnLSR7aXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnfS00MDBgIDogYGJnLWdyYXktMzAwYH0gcC00IHotMTAgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlcmAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERvdWJsZUFycm93UmlnaHQgY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LXdoaXRlLTUwMCBtci0yIG10LTFcIj48L0RvdWJsZUFycm93UmlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgIFNob3cgJHtpc0ZlZWQgPyBgRmVlZGAgOiBgQnVuZGxlYH0gQXJ0aWNsZXNgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcbmltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSAnLi9zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZVBpYyA9ICh7IGF1dGhvciB9IDogeyBhdXRob3I6IFVzZXIgfSkgPT4gXHJcbiAoXHJcblxyXG4gICAgPD5cclxuICAgICAgICB7YXV0aG9yLnBpY3R1cmUgPyhcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcC0wLjUgdy04IGgtOCBib3JkZXItMiBib3JkZXItZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YXV0aG9yLnBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8UXVlc3Rpb24gY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LWdyYXktNTAwXCIgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxwPnthdXRob3Iubmlja25hbWV9PC9wPlxyXG4gICAgPC8+XHJcblxyXG4pXHJcblxyXG4gICAiLCJpbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSBcImdyYXBocWxcIjtcclxuaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWN0aW9uVHlwZSwgQmFkZ2VGaWVsZE5hbWUsIEJ1bmRsZU9iamVjdCwgRmVlZE9iamVjdCwgU2VhcmNoUXVlcnlOYW1lIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzXCI7XHJcbmltcG9ydCB7IEJhZGdlTGlzdCB9IGZyb20gXCIuL2JhZGdlTGlzdFwiO1xyXG5pbXBvcnQgeyBTZWFyY2gsIFNwaW4gfSBmcm9tIFwiLi9zdmdcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaEl0ZW1zID0gKHtjdXJyZW50SXRlbSwgc2V0SXRlbSwgcXVlcnlOYW1lLCBxdWVyeSwgZmllbGROYW1lfSA6IHtcclxuXHJcbiAgICBjdXJyZW50SXRlbTogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdDtcclxuICAgIHNldEl0ZW06IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q+PjtcclxuICAgIHF1ZXJ5TmFtZTogU2VhcmNoUXVlcnlOYW1lO1xyXG4gICAgcXVlcnk6IERvY3VtZW50Tm9kZTtcclxuICAgIGZpZWxkTmFtZTogQmFkZ2VGaWVsZE5hbWU7XHJcbn0pID0+IHtcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZmluZEl0ZW1zUXVlcnksIHsgbG9hZGluZywgZGF0YSwgY2FsbGVkIH1dID0gdXNlTGF6eVF1ZXJ5KHF1ZXJ5LCB7IGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyxcclxufSlcclxuXHJcbmNvbnNvbGUubG9nKGxvYWRpbmcsIGRhdGEsIGNhbGxlZClcclxuXHJcbmNvbnN0IGZldGNoZWRJdGVtcyA9IF8uZ2V0KGRhdGEsIHF1ZXJ5TmFtZSk7XHJcbmNvbnN0IGZpbHRGaW5kSXRlbXMgPSBmZXRjaGVkSXRlbXMgPyBmZXRjaGVkSXRlbXMuZmlsdGVyKChvbmVJdGVtKSA9PiAhY3VycmVudEl0ZW1bZmllbGROYW1lXS5tYXAoKG8pID0+IG8ubmFtZSkuaW5jbHVkZXMob25lSXRlbS5uYW1lKSwpIDogW107XHJcblxyXG5jb25zdCBtYXRjaEN1cnJlbnQgPSBmaWx0RmluZEl0ZW1zLmZpbHRlcihvID0+IG8ubmFtZSA9PT0gc2VhcmNoKTtcclxuY29uc3QgbWF0Y2hMaXN0ID0gY3VycmVudEl0ZW1bZmllbGROYW1lXS5maWx0ZXIoKG8pID0+IG8ubmFtZSA9PT0gc2VhcmNoKVxyXG5cclxuY29uc3QgZmlsdEZpbmRJdGVtc1dpdGhBZGQgPVxyXG5tYXRjaEN1cnJlbnQubGVuZ3RoID09PSAwICYmXHJcbm1hdGNoTGlzdC5sZW5ndGggPT09IDAgJiZcclxucXVlcnlOYW1lICE9PSAnZmluZEZlZWRzJ1xyXG4gID8gWy4uLmZpbHRGaW5kSXRlbXMsIHsgbmFtZTogc2VhcmNoIH1dXHJcbiAgOiBmaWx0RmluZEl0ZW1zO1xyXG5cclxuXHJcbmNvbnN0IGR1bW15TmV3SXRlbSA9IHtcclxuICAgIC4uLmN1cnJlbnRJdGVtLFxyXG4gICAgW2ZpZWxkTmFtZV06IGZpbHRGaW5kSXRlbXNXaXRoQWRkLFxyXG59O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgIDxTcGluIGNsYXNzTmFtZT1cImgtNiB0ZXh0LWdyYXktNTAwIGFuaW1hdGUtc3BpblwiLz4pIDooXHJcbiAgICAgICAgICAgICAgICAgPFNlYXJjaCBjbGFzc05hbWU9XCJtdC0zIG1yLTIgdy02IGgtNiB0ZXh0LWdyYXktNTAwXCIgLz5cclxuICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJib3JkZXItNCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTNcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRJdGVtKChjdXJyU3RhdGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN1cnJTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkTmFtZV06IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jdXJyU3RhdGVbZmllbGROYW1lXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLmR1bW15TmV3SXRlbVtmaWVsZE5hbWVdWzBdIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2goKCkgPT4gJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSBzZWFyY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaCgoKSA9PiBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmaW5kSXRlbXNRdWVyeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogeyBkYXRhOiB7c2VhcmNoOiBlLnRhcmdldC52YWx1ZSB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTIgZmxleCBtLTJcIj5cclxuICAgICAgICAgICAgICAgIHtzZWFyY2ggIT09ICcnID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXtmaWVsZE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5BRER9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e2R1bW15TmV3SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoPXtzZXRTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogY2FsbGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj5ObyBtYXRjaGVzPC9wPlxyXG4gICAgICAgICAgICAgICAgKSA6bnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJleHBvcnQgY29uc3QgV2FpdGluZ0Nsb2NrID0gKHsgY2xhc3NOYW1lIH0pID0+IChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgZD1cIk0xMiA4djRsMyAzbTYtM2E5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3JTaWduID0gKHsgY2xhc3NOYW1lIH0pID0+IChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgZD1cIk0xMiA5djJtMCA0aC4wMW0tNi45MzggNGgxMy44NTZjMS41NCAwIDIuNTAyLTEuNjY3IDEuNzMyLTNMMTMuNzMyIDRjLS43Ny0xLjMzMy0yLjY5NC0xLjMzMy0zLjQ2NCAwTDMuMzQgMTZjLS43NyAxLjMzMy4xOTIgMyAxLjczMiAzelwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRG91YmxlQXJyb3dEb3duID0gKHtjbGFzc05hbWV9KSA9PiAoXHJcbiAgICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgPlxyXG4gIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgZD1cIk0xOSAxM2wtNyA3LTctN20xNC04bC03IDctNy03XCIgLz5cclxuPC9zdmc+XHJcbilcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRG91YmxlQXJyb3dSaWdodCA9ICh7Y2xhc3NOYW1lfSkgPT4gKFxyXG4gICAgPHN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgID5cclxuICAgIDxwYXRoXHJcbiAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgIGQ9XCJNMTMgNWw3IDctNyA3TTUgNWw3IDctNyA3XCJcclxuICAgIC8+XHJcbjwvc3ZnPlxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgUGx1cyA9ICh7Y2xhc3NOYW1lfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICA+XHJcbiAgPHBhdGhcclxuICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgIGQ9XCJNMTIgNnY2bTAgMHY2bTAtNmg2bS02IDBINlwiIC8+XHJcbjwvc3ZnPlxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgTWludXMgPSAoe2NsYXNzTmFtZX0pID0+IChcclxuICA8c3ZnXHJcbiAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgID5cclxuICA8cGF0aFxyXG4gICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgZD1cIk0yMCAxMkg0XCIgLz5cclxuPC9zdmc+XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBTcGluID0gKHtjbGFzc05hbWV9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgID5cclxuICA8cGF0aFxyXG4gICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICBkPVwiTTQgNHY1aC41ODJtMTUuMzU2IDJBOC4wMDEgOC4wMDEgMCAwMDQuNTgyIDltMCAwSDltMTEgMTF2LTVoLS41ODFtMCAwYTguMDAzIDguMDAzIDAgMDEtMTUuMzU3LTJtMTUuMzU3IDJIMTVcIiAvPlxyXG48L3N2Zz5cclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaCA9ICh7Y2xhc3NOYW1lfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICA+XHJcbiAgPHBhdGhcclxuICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgZD1cIk04IDE2bDIuODc5LTIuODc5bTAgMGEzIDMgMCAxMDQuMjQzLTQuMjQyIDMgMyAwIDAwLTQuMjQzIDQuMjQyek0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIiAvPlxyXG48L3N2Zz5cclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IFF1ZXN0aW9uID0gKHtjbGFzc05hbWV9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgZmlsbD1cIm5vbmVcIlxyXG4gICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgID5cclxuICA8cGF0aFxyXG4gICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgIGQ9XCJNOC4yMjggOWMuNTQ5LTEuMTY1IDIuMDMtMiAzLjc3Mi0yIDIuMjEgMCA0IDEuMzQzIDQgMyAwIDEuNC0xLjI3OCAyLjU3NS0zLjAwNiAyLjkwNy0uNTQyLjEwNC0uOTk0LjU0LS45OTQgMS4wOTNtMCAzaC4wMU0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIiAvPlxyXG48L3N2Zz5cclxuKSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJdGVtTGlzdCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2l0ZW1MaXN0XCI7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiXHJcbmltcG9ydCB7IE5ld0VkaXRJdGVtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbmV3RWRpdEl0ZW1cIjtcclxuaW1wb3J0IHsgTWludXMsIFBsdXMgfSBmcm9tICcuLi9jb21wb25lbnRzL3N2Zyc7XHJcbmltcG9ydCB7IEl0ZW1UeXBlLCBTZWxlY3RlZEZlZWRTdGF0ZSB9IGZyb20gXCIuLi91dGlscy90eXBlc1wiO1xyXG5pbXBvcnQgeyB1c2VGZXRjaFVzZXIgfSBmcm9tIFwiLi4vdXRpbHMvdXNlclwiO1xyXG5cclxuY29uc3QgQnVuZGxlc1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7dXNlciwgbG9hZGluZ30gPSB1c2VGZXRjaFVzZXIoKVxyXG4gICAgY29uc3QgaW5pdGlhbFNlbGVjdGVkOiBTZWxlY3RlZEZlZWRTdGF0ZSA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBmZWVkczogW10sXHJcbiAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgICAgIG5ld01vZGU6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IFsgc2VsZWN0ZWQsIHNldFNlbGVjdGVkIF0gPSB1c2VTdGF0ZShpbml0aWFsU2VsZWN0ZWQpO1xyXG4gICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZ3JpZC1jb2xzLTEganVzdGlmeS1zdGFydCBmbGV4IHRleHQtbHIgZm9udC1tZWRpdW0gcHktNFwiPlxyXG4gICAgICAgICAgICAgICAgQnVuZGxlcyBQYWdlXHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAge3VzZXIgPyBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wZXJzaXN0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoKGN1cnJTdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN1cnJTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld01vZGU6ICFjdXJyU3RhdGUubmV3TW9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGdyaWQtY29scy0xIGp1c3RpZnktZW5kIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZC5uZXdNb2RlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNaW51c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC02IHctNiB0ZXh0LSR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQubmV3TW9kZSA/ICdncmF5JyA6ICdibHVlJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0tNTAwIG10LTRgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UGx1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtNiB3LTYgdGV4dC0ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQubmV3TW9kZSA/ICdncmF5JyA6ICdibHVlJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfS01MDAgbXQtNGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17YGdyaWQtY29scy0xIGp1c3RpZnktc3RhcnQgZmxleCB0ZXh0LWxnIGZvbnQtbWVkaXVtIHB5LTQgdGV4dC0ke3NlbGVjdGVkLm5ld01vZGUgPyBgZ3JheWAgOiBgYmx1ZWB9YH0gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXcgQnVuZGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyhzZWxlY3RlZC5lZGl0TW9kZSB8fCBzZWxlY3RlZC5uZXdNb2RlKSAmJiB1c2VyID8gKFxyXG4gICAgICAgICAgICAgICAgPE5ld0VkaXRJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17SXRlbVR5cGUuQnVuZGxlVHlwZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH0gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8SXRlbUxpc3RcclxuICAgICAgICAgICAgIHR5cGU9e0l0ZW1UeXBlLkJ1bmRsZVR5cGV9XHJcbiAgICAgICAgICAgICB1c2VTZWxlY3RlZD17dHJ1ZX1cclxuICAgICAgICAgICAgIGFsbG93RWRpdHM9e3RydWV9XHJcbiAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdW5kbGVzUGFnZTsiLCJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmV4cG9ydCBjb25zdCBGRUVEX1RBR19GUkFHTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgRmVlZFRhZ0ZyYWdtZW50IG9uIEZlZWRUYWcge1xuICAgIGlkXG4gICAgbmFtZVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQlVORExFX1RBR19GUkFHTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgQnVuZGxlVGFnRnJhZ21lbnQgb24gQnVuZGxlVGFnIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFVVEhPUl9GUkFHTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgQXV0aG9yRnJhZ21lbnQgb24gVXNlciB7XG4gICAgaWRcbiAgICBhdXRoMFxuICAgIHBpY3R1cmVcbiAgICBuaWNrbmFtZVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTElLRV9GUkFHTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgTGlrZUZyYWdtZW50IG9uIExpa2Uge1xuICAgIGlkXG4gICAgbmFtZVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRkVFRF9GUkFHTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgRmVlZEZyYWdtZW50IG9uIEZlZWQge1xuICAgIGlkXG4gICAgbmFtZVxuICAgIHVybFxuICAgIGxpa2VzIHtcbiAgICAgIC4uLkF1dGhvckZyYWdtZW50XG4gICAgfVxuICAgIHRhZ3Mge1xuICAgICAgLi4uRmVlZFRhZ0ZyYWdtZW50XG4gICAgfVxuICAgIGF1dGhvciB7XG4gICAgICAuLi5BdXRob3JGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke0ZFRURfVEFHX0ZSQUdNRU5UfVxuICAke0FVVEhPUl9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCVU5ETEVfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IEJ1bmRsZUZyYWdtZW50IG9uIEJ1bmRsZSB7XG4gICAgaWRcbiAgICBuYW1lXG4gICAgZGVzY3JpcHRpb25cbiAgICB0YWdzIHtcbiAgICAgIC4uLkJ1bmRsZVRhZ0ZyYWdtZW50XG4gICAgfVxuICAgIGF1dGhvciB7XG4gICAgICAuLi5BdXRob3JGcmFnbWVudFxuICAgIH1cbiAgICBsaWtlcyB7XG4gICAgICAuLi5BdXRob3JGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9UQUdfRlJBR01FTlR9XG4gICR7QVVUSE9SX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNBVkVEX0FSVElDTEVfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IFNhdmVkQXJ0aWNsZUZyYWdtZW50IG9uIFNhdmVkQXJ0aWNsZSB7XG4gICAgaWRcbiAgICBjb250ZW50c1xuICAgIHVybFxuICAgIGF1dGhvciB7XG4gICAgICAuLi5BdXRob3JGcmFnbWVudFxuICAgIH1cbiAgICBmZWVkIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke0FVVEhPUl9GUkFHTUVOVH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuYDtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IEJVTkRMRV9GUkFHTUVOVCwgRkVFRF9GUkFHTUVOVCwgU0FWRURfQVJUSUNMRV9GUkFHTUVOVCB9IGZyb20gJy4vZnJhZ21lbnRzJztcblxuZXhwb3J0IGNvbnN0IExJS0VfQlVORExFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBsaWtlQnVuZGxlTXV0YXRpb24oJGRhdGE6IExpa2VCdW5kbGVJbnB1dCkge1xuICAgIGxpa2VCdW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICBmZWVkcyB7XG4gICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IExJS0VfRkVFRF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gbGlrZUZlZWRNdXRhdGlvbigkZGF0YTogTGlrZUZlZWRJbnB1dCkge1xuICAgIGxpa2VGZWVkKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIGJ1bmRsZXMge1xuICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9CVU5ETEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZUJ1bmRsZU11dGF0aW9uKCRkYXRhOiBCdW5kbGVDcmVhdGVJbnB1dCkge1xuICAgIGNyZWF0ZUJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIGZlZWRzIHtcbiAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIGJ1bmRsZXMge1xuICAgICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5leHBvcnQgY29uc3QgVVBEQVRFX0JVTkRMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gdXBkYXRlQnVuZGxlTXV0YXRpb24oJGRhdGE6IEJ1bmRsZVVwZGF0ZUlucHV0KSB7XG4gICAgdXBkYXRlQnVuZGxlKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgZmVlZHMge1xuICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgYnVuZGxlcyB7XG4gICAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9GRUVEX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVGZWVkTXV0YXRpb24oJGRhdGE6IEZlZWRDcmVhdGVJbnB1dCkge1xuICAgIGNyZWF0ZUZlZWQoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIGZlZWRzIHtcbiAgICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IFVQREFURV9GRUVEX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiB1cGRhdGVGZWVkTXV0YXRpb24oJGRhdGE6IEZlZWRVcGRhdGVJbnB1dCkge1xuICAgIHVwZGF0ZUZlZWQoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIGZlZWRzIHtcbiAgICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVTYXZlZEFydGljbGVNdXRhdGlvbigkZGF0YTogU2F2ZWRBcnRpY2xlQ3JlYXRlSW5wdXQpIHtcbiAgICBjcmVhdGVTYXZlZEFydGljbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLlNhdmVkQXJ0aWNsZUZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7U0FWRURfQVJUSUNMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfQlVORExFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVCdW5kbGVNdXRhdGlvbigkZGF0YTogQnVuZGxlSW5wdXQpIHtcbiAgICBkZWxldGVCdW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIGlkXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0ZFRURfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGRlbGV0ZUZlZWRNdXRhdGlvbigkZGF0YTogRmVlZElucHV0KSB7XG4gICAgZGVsZXRlRmVlZChkYXRhOiAkZGF0YSkge1xuICAgICAgaWRcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfU0FWRURfQVJUSUNMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gZGVsZXRlU2F2ZWRBcnRpY2xlTXV0YXRpb24oJGRhdGE6IERlbGV0ZVNhdmVkQXJ0aWNsZUlucHV0KSB7XG4gICAgZGVsZXRlU2F2ZWRBcnRpY2xlKGRhdGE6ICRkYXRhKSB7XG4gICAgICBpZFxuICAgICAgdXJsXG4gICAgfVxuICB9XG5gO1xuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHtcbiAgQVVUSE9SX0ZSQUdNRU5ULFxuICBCVU5ETEVfRlJBR01FTlQsXG4gIEJVTkRMRV9UQUdfRlJBR01FTlQsXG4gIEZFRURfRlJBR01FTlQsXG4gIEZFRURfVEFHX0ZSQUdNRU5ULFxuICBTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5ULFxufSBmcm9tICcuL2ZyYWdtZW50cyc7XG5cblxuZXhwb3J0IGNvbnN0IEJVTkRMRVNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBidW5kbGVzIHtcbiAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICBmZWVkcyB7XG4gICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZFRURTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgZmVlZHMge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICBidW5kbGVzIHtcbiAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGSU5EX0ZFRURTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBmaW5kRmVlZHNRdWVyeSgkZGF0YTogRmluZEZlZWRzSW5wdXQpIHtcbiAgICBmaW5kRmVlZHMoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgRkVFRF9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgZmVlZFF1ZXJ5KCRkYXRhOiBGZWVkSW5wdXQpIHtcbiAgICBmZWVkKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIGJ1bmRsZXMge1xuICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgICBmZWVkcyB7XG4gICAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCVU5ETEVfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IGJ1bmRsZVF1ZXJ5KCRkYXRhOiBCdW5kbGVJbnB1dCkge1xuICAgIGJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIGZlZWRzIHtcbiAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIGJ1bmRsZXMge1xuICAgICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGSU5EX0ZFRURfVEFHU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgZmluZEZlZWRUYWdzUXVlcnkoJGRhdGE6IEZpbmRGZWVkVGFnc0lucHV0KSB7XG4gICAgZmluZEZlZWRUYWdzKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkVGFnRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtGRUVEX1RBR19GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGSU5EX0JVTkRMRV9UQUdTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBmaW5kQnVuZGxlVGFnc1F1ZXJ5KCRkYXRhOiBGaW5kQnVuZGxlVGFnc0lucHV0KSB7XG4gICAgZmluZEJ1bmRsZVRhZ3MoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkJ1bmRsZVRhZ0ZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7QlVORExFX1RBR19GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTQVZFRF9BUlRJQ0xFU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgc2F2ZWRBcnRpY2xlc1F1ZXJ5IHtcbiAgICBzYXZlZEFydGljbGVzIHtcbiAgICAgIC4uLlNhdmVkQXJ0aWNsZUZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7U0FWRURfQVJUSUNMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTQVZFRF9BUlRJQ0xFX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBzYXZlZEFydGljbGVRdWVyeSgkZGF0YTogU2F2ZWRBcnRpY2xlSW5wdXQpIHtcbiAgICBzYXZlZEFydGljbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLlNhdmVkQXJ0aWNsZUZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7U0FWRURfQVJUSUNMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNRV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgbWVRdWVyeSB7XG4gICAgbWUge1xuICAgICAgLi4uQXV0aG9yRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtBVVRIT1JfRlJBR01FTlR9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3Y0IGFzIHV1aWQ0diB9IGZyb20gJ3V1aWQnXHJcblxyXG5cclxuY29uc3QgZ2VuTmVzdGVkSXRlbXMgPSAoIGN1cnJlbnRJdGVtICkgPT4ge1xyXG4gICAgY29uc3QgdGFncyA9IFxyXG4gICAgJ3RhZ3MnIGluIGN1cnJlbnRJdGVtID8ge1xyXG4gICAgICAgIHRhZ3M6IHtcclxuICAgICAgICAgICAgY29ubmVjdDogY3VycmVudEl0ZW0udGFncy5tYXAoKHsgaWQgfSkgPT4gKHsgaWQgfSkpLmZpbHRlcigoeyBpZCB9KSA9PiBpZCAhPT0gdW5kZWZpbmVkKSxcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZTogY3VycmVudEl0ZW0udGFncy5maWx0ZXIoKHsgaWQgfSkgPT4gaWQgPT09IHVuZGVmaW5lZCkubWFwKChvKSA9PiAoeyAuLi5vLCBpZDogdXVpZDR2KCkgfSkpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9IDoge307XHJcblxyXG4gICAgY29uc3QgZmVlZHMgPSBcclxuICAgICdmZWVkcycgaW4gY3VycmVudEl0ZW0gPyB7XHJcbiAgICAgICAgZmVlZHM6IHtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGN1cnJlbnRJdGVtLmZlZWRzLm1hcCgoeyBpZCB9KSA9PiAoeyBpZCB9KSkuZmlsdGVyKCh7IGlkIH0pID0+IGlkICE9PSB1bmRlZmluZWQpLFxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICAgOiB7fTtcclxuICAgIGNvbnN0IHsgX190eXBlbmFtZSwgbGlrZXMsIGF1dGhvciwgYnVuZGxlcywgLi4uY2xlYW5lZEl0ZW0gIH0gPSBjdXJyZW50SXRlbTtcclxuXHJcbiAgICByZXR1cm4geyAuLi5jbGVhbmVkSXRlbSwgLi4udGFncywgLi4uZmVlZHMgfTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcmVwYXJlTmV3VXBkYXRlT2JqZWN0ID0gKGN1cnJlbnRJdGVtKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50RGF0YSA9IGdlbk5lc3RlZEl0ZW1zKGN1cnJlbnRJdGVtKTtcclxuXHJcbiAgICByZXR1cm4ge2N1cnJlbnREYXRhLCBpZDogdXVpZDR2KCl9O1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IHsgQnVuZGxlVGFnLCBGZWVkLCBGZWVkVGFnLCBVc2VyIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5cclxuZXhwb3J0IGVudW0gSXRlbVR5cGUge1xyXG4gICAgQnVuZGxlVHlwZSA9ICdCdW5kbGVUeXBlJyxcclxuICAgIEZlZWRUeXBlID0gJ0ZlZWRUeXBlJ1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgRmVlZE9iamVjdCA9IHtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICB0YWdzOiBGZWVkVGFnW107XHJcbiAgICBidW5kbGVzPzogQnVuZGxlT2JqZWN0W11cclxuICAgIGF1dGhvcj86IFVzZXI7XHJcbiAgICBsaWtlcz86ICBVc2VyW107XHJcbn1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBCdW5kbGVPYmplY3QgPSB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICB0YWdzOiBCdW5kbGVUYWdbXTtcclxuICAgIGZlZWRzPzogRmVlZE9iamVjdFtdXHJcbiAgICBhdXRob3I/OiBVc2VyO1xyXG4gICAgbGlrZXM/OiAgVXNlcltdO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTZWxlY3RlZEZlZWRTdGF0ZSA9IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBmZWVkczogRmVlZFtdXHJcbiAgICBlZGl0TW9kZTogYm9vbGVhbjtcclxuICAgIG5ld01vZGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhZGdlRmllbGROYW1lIHtcclxuICAgdGFncyA9ICd0YWdzJyxcclxuICAgZmVlZHMgPSAnZmVlZHMnLFxyXG4gICBidW5kbGVzID0gJ2J1bmRsZXMnXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZW51bSBBY3Rpb25UeXBlIHtcclxuICAgQUREID0gJ0FERCcsXHJcbiAgIENSRUFURSA9ICdDUkVBVEUnLFxyXG4gICBOT05FID0gJ05PTkUnXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE5ld0l0ZW1TdGF0ZSA9ICBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0O1xyXG5cclxuZXhwb3J0IGVudW0gU2VhcmNoUXVlcnlOYW1lIHtcclxuICAgIGZpbmRGZWVkVGFncyA9ICdmaW5kRmVlZFRhZ3MnLFxyXG4gICAgZmluZEJ1bmRsZVRhZ3MgPSAnZmluZEJ1bmRsZVRhZ3MnLFxyXG4gICAgZmluZEZlZWRzID0gJ2ZpbmRGZWVkcydcclxuXHJcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XHJcbiAgICBfX3VzZXI6IGFueVxyXG59XHJcblxyXG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcihjb29raWUgPSAnJykge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX191c2VyKSB7XHJcbiAgICByZXR1cm4gd2luZG93Ll9fdXNlclxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAnL2FwaS9tZScsXHJcbiAgICBjb29raWVcclxuICAgICAgPyB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIGNvb2tpZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICA6IHt9XHJcbiAgKVxyXG5cclxuICBpZiAoIXJlcy5vaykge1xyXG4gICAgZGVsZXRlIHdpbmRvdy5fX3VzZXJcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgd2luZG93Ll9fdXNlciA9IGpzb25cclxuICB9XHJcbiAgcmV0dXJuIGpzb25cclxufVxyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRmV0Y2hVc2VyKHsgcmVxdWlyZWQgfSA9IHt9KSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoXHJcbiAgICAoKSA9PiAhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fX3VzZXIpXHJcbiAgKVxyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3aW5kb3cuX191c2VyIHx8IG51bGxcclxuICB9KVxyXG5cclxuICB1c2VFZmZlY3QoXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIGlmICghbG9hZGluZyAmJiB1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZVxyXG5cclxuICAgICAgZmV0Y2hVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgIC8vIE9ubHkgc2V0IHRoZSB1c2VyIGlmIHRoZSBjb21wb25lbnQgaXMgc3RpbGwgbW91bnRlZFxyXG4gICAgICAgIGlmIChpc01vdW50ZWQpIHtcclxuICAgICAgICAgIC8vIFdoZW4gdGhlIHVzZXIgaXMgbm90IGxvZ2dlZCBpbiBidXQgbG9naW4gaXMgcmVxdWlyZWRcclxuICAgICAgICAgIGlmIChyZXF1aXJlZCAmJiAhdXNlcikge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYXBpL2xvZ2luJ1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFVzZXIodXNlcilcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBpc01vdW50ZWQgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgW11cclxuICApXHJcblxyXG4gIHJldHVybiB7IHVzZXIsIGxvYWRpbmcgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=