exports.id = "components_itemList_tsx-components_layout_tsx";
exports.ids = ["components_itemList_tsx-components_layout_tsx"];
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
      currentItem: item
    }, `${item['id']}-${oneBadge.name}}`, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined))
  }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    className: "text-gray-400",
    children: "None found"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/itemEdit.tsx":
/*!*********************************!*\
  !*** ./components/itemEdit.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemEdit": function() { return /* binding */ ItemEdit; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\itemEdit.tsx";


const ItemEdit = ({
  item,
  type,
  selected,
  setSelected
}) => {
  const isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_1__.ItemType.FeedType;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    onClick: e => {
      e.stopPropagation();
      setSelected(currState => ({
        id: item.id,
        feeds: isFeed ? [item] : item['feeds'],
        editMode: !selected.editMode || currState.id !== item.id ? true : false,
        newMode: false
      }));
    },
    className: "flex py-2 mx-1 z-10",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_2__.EditPencil, {
      className: `
            h-6 w-6 ${item.id === selected.id && selected.editMode ? `text-${isFeed ? 'green' : 'purple'}-400` : 'text-gray-500'} inline-block align-middle
           `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

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
  allowEdits = false
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
      lineNumber: 57,
      columnNumber: 5
    }, undefined);
  }

  if (error || !itemList) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_notifyError__WEBPACK_IMPORTED_MODULE_5__.NotifyError, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 12
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
        lineNumber: 69,
        columnNumber: 13
      }, undefined)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "None are present. Why not add one?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "p-2 text-center block hover:blue-700 sm:visible invisible font-medium",
              children: "SWL, LLC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-3 flex justify-end",
      children: [user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/saved-articles",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700 text-bold",
            children: "Saved Articles"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/bundles",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Bundles"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/feeds",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Feeds"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), user && !loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/api/logout",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "sm:mr-6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/api/login",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "p-2 text-center block hover:blue-700 text-blue-700",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
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
  setItem
}) => {
  const color = fieldName === _utils_types__WEBPACK_IMPORTED_MODULE_2__.BadgeFieldName.tags ? 'blue' : _utils_types__WEBPACK_IMPORTED_MODULE_2__.BadgeFieldName.feeds ? 'green' : 'purple';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "inline-block align-middle justify-between",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: `flex justify-center text-sm py-2 px-2 rounded-lg bg-${color}-200 `,
      children: [action === _utils_types__WEBPACK_IMPORTED_MODULE_2__.ActionType.ADD ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: () => {
          setItem(currState => _objectSpread(_objectSpread({}, currState), {}, {
            [fieldName]: [...currState[fieldName], _objectSpread({}, item)]
          }));
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_3__.Plus, {
          className: "h-4 w-4 text-gray-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
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
          lineNumber: 59,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: `text-xs text-${color}-600 text-center`,
        children: [" ", item.name, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _badgeList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badgeList */ "./components/badgeList.tsx");
/* harmony import */ var _itemEdit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./itemEdit */ "./components/itemEdit.tsx");
/* harmony import */ var _profilePic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profilePic */ "./components/profilePic.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\oneListItem.tsx";









const OneListItem = ({
  item,
  type,
  selected,
  setSelected,
  useSelected = false,
  allowEdits = false
}) => {
  const isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_4__.ItemType.FeedType;
  const isSelected = useSelected && selected && selected.id === item.id;
  const {
    user,
    error,
    isLoading
  } = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5__.useUser)();

  if (isLoading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_9__.WaitingClock, {
      className: "h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 12
    }, undefined);
  }

  const canManipulate = !isLoading && user && lodash__WEBPACK_IMPORTED_MODULE_3__.get(item, 'author.autho0') === user.sub && allowEdits && useSelected;
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
            lineNumber: 64,
            columnNumber: 13
          }, undefined), !isFeed ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: item['description']
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 24
          }, undefined) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-2 flex justify-end",
          children: canManipulate ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_itemEdit__WEBPACK_IMPORTED_MODULE_7__.ItemEdit, {
            item: item,
            type: type,
            selected: selected,
            setSelected: setSelected
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 15
          }, undefined) : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex span-col-6 py-0 space-x-2",
          children: item.author ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profilePic__WEBPACK_IMPORTED_MODULE_8__.ProfilePic, {
            author: item.author
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 28
          }, undefined) : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6 py-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "grids grids-cols-2 gap-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_6__.BadgeList, {
              fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_4__.BadgeFieldName.tags,
              action: _utils_types__WEBPACK_IMPORTED_MODULE_4__.ActionType.NONE,
              item: item
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6 py-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: isFeed ? 'Bundles' : 'Feeds'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "grid grid-cols-3 gap-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_6__.BadgeList, {
              fieldName: isFeed ? _utils_types__WEBPACK_IMPORTED_MODULE_4__.BadgeFieldName.bundles : _utils_types__WEBPACK_IMPORTED_MODULE_4__.BadgeFieldName.feeds,
              action: _utils_types__WEBPACK_IMPORTED_MODULE_4__.ActionType.NONE,
              item: item
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), useSelected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isSelected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          onClick: e => {
            e.preventDefault();
          },
          className: `flex rounded-lg rounded-t-none align-middle ${isSelected ? `bg-${isFeed ? 'green' : 'purple'}-400` : `bg-gray-300`} p-4 z-10 text-white cursor-pointer`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_9__.DoubleArrowDown, {
            className: "h-5 w-5 text-white-500 mr-2 mt-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 17
          }, undefined), `Hide ${isFeed ? 'Feed' : 'Bundle'} Articles`]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 15
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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_9__.DoubleArrowRight, {
            className: "h-5 w-5 text-white-500 mr-2 mt-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 17
          }, undefined), ` Show ${isFeed ? `Feed` : `Bundle`} Articles`]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 15
        }, undefined)
      }, void 0, false) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
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
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\profilePic.tsx";

const ProfilePic = ({
  author
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [author.picture ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: "rounded-full p-0.5 w-8 h-8 border-2 border-gray-300",
      src: author.picture,
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_1__.Question, {
    className: "w-6 h-6 text-gray-500"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: author.nickname
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined)]
}, void 0, true);

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
/* harmony export */   "Question": function() { return /* binding */ Question; },
/* harmony export */   "Spin": function() { return /* binding */ Spin; },
/* harmony export */   "Search": function() { return /* binding */ Search; },
/* harmony export */   "EditPencil": function() { return /* binding */ EditPencil; }
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
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 3
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
    lineNumber: 26,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 19,
  columnNumber: 3
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
    lineNumber: 43,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 36,
  columnNumber: 3
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
    lineNumber: 60,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 53,
  columnNumber: 3
}, undefined);
const Plus = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: className,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 4v16m8-8H4"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 69,
  columnNumber: 3
}, undefined);
const Minus = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: className,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20 12H4"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 85,
  columnNumber: 3
}, undefined);
const Question = ({
  className
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: className,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 102,
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
    lineNumber: 126,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 119,
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
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 136,
  columnNumber: 3
}, undefined);
const EditPencil = ({
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
    d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 153,
  columnNumber: 3
}, undefined);

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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL2JhZGdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9pdGVtRWRpdC50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9pdGVtTGlzdC50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvbmF2LnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL25vdGlmeUVycm9yLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL25vdGlmeUxvYWRpbmcudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvb25lQmFkZ2UudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvb25lTGlzdEl0ZW0udHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvcHJvZmlsZVBpYy50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9zdmcudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL2FwaS9ncmFwaHFsL2ZyYWdtZW50cy50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcGkvZ3JhcGhxbC9xdWVyaWVzLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL3R5cGVzLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2lnbm9yZWR8QzpcXFVkZW15U3R1ZmZcXFByaXNtYVN0dWZmXFxuZXdzcHJpc21hXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQmFkZ2VMaXN0IiwiZmllbGROYW1lIiwiYWN0aW9uIiwiaXRlbSIsInNldEl0ZW0iLCJzZXRTZWFyY2giLCJsZW5ndGgiLCJtYXAiLCJvbmVCYWRnZSIsIm5hbWUiLCJJdGVtRWRpdCIsInR5cGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiaXNGZWVkIiwiSXRlbVR5cGUiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiY3VyclN0YXRlIiwiaWQiLCJmZWVkcyIsImVkaXRNb2RlIiwibmV3TW9kZSIsIkl0ZW1MaXN0IiwidXNlU2VsZWN0ZWQiLCJhbGxvd0VkaXRzIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInVzZVF1ZXJ5IiwiRkVFRFNfUVVFUlkiLCJCVU5ETEVTX1FVRVJZIiwiY29uc29sZSIsImxvZyIsImJ1bmRsZXMiLCJpdGVtTGlzdCIsInVzZUVmZmVjdCIsImZpcnN0SXRlbSIsIkxheW91dCIsImNoaWxkcmVuIiwiTmF2IiwidXNlciIsInVzZUZldGNoVXNlciIsIk5vdGlmeUVycm9yIiwiTm90aWZ5TG9hZGluZyIsIk9uZUJhZGdlIiwiY3VycmVudEl0ZW0iLCJjb2xvciIsIkJhZGdlRmllbGROYW1lIiwiQWN0aW9uVHlwZSIsImZpbHRlciIsIm8iLCJPbmVMaXN0SXRlbSIsImlzU2VsZWN0ZWQiLCJpc0xvYWRpbmciLCJ1c2VVc2VyIiwiY2FuTWFuaXB1bGF0ZSIsIl8iLCJzdWIiLCJhdXRob3IiLCJwcmV2ZW50RGVmYXVsdCIsIlByb2ZpbGVQaWMiLCJwaWN0dXJlIiwibmlja25hbWUiLCJXYWl0aW5nQ2xvY2siLCJjbGFzc05hbWUiLCJFcnJvclNpZ24iLCJEb3VibGVBcnJvd0Rvd24iLCJEb3VibGVBcnJvd1JpZ2h0IiwiUGx1cyIsIk1pbnVzIiwiUXVlc3Rpb24iLCJTcGluIiwiU2VhcmNoIiwiRWRpdFBlbmNpbCIsIkZFRURfVEFHX0ZSQUdNRU5UIiwiZ3FsIiwiQlVORExFX1RBR19GUkFHTUVOVCIsIkFVVEhPUl9GUkFHTUVOVCIsIkxJS0VfRlJBR01FTlQiLCJGRUVEX0ZSQUdNRU5UIiwiQlVORExFX0ZSQUdNRU5UIiwiU0FWRURfQVJUSUNMRV9GUkFHTUVOVCIsIkZJTkRfRkVFRFNfUVVFUlkiLCJGRUVEX1FVRVJZIiwiQlVORExFX1FVRVJZIiwiRklORF9GRUVEX1RBR1NfUVVFUlkiLCJGSU5EX0JVTkRMRV9UQUdTX1FVRVJZIiwiU0FWRURfQVJUSUNMRVNfUVVFUlkiLCJTQVZFRF9BUlRJQ0xFX1FVRVJZIiwiTUVfUVVFUlkiLCJTZWFyY2hRdWVyeU5hbWUiLCJmZXRjaFVzZXIiLCJjb29raWUiLCJyZXMiLCJmZXRjaCIsImhlYWRlcnMiLCJvayIsIndpbmRvdyIsIl9fdXNlciIsImpzb24iLCJyZXF1aXJlZCIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInNldFVzZXIiLCJpc01vdW50ZWQiLCJ0aGVuIiwibG9jYXRpb24iLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVPLE1BQU1BLFNBQVMsR0FBRyxDQUFDO0FBQ3RCQyxXQURzQjtBQUV0QkMsUUFGc0I7QUFHdEJDLE1BSHNCO0FBSXRCQyxTQUpzQjtBQUt0QkM7QUFMc0IsQ0FBRCxLQWFuQjtBQUNGLFNBQU9GLElBQUksQ0FBQ0YsU0FBRCxDQUFKLElBQW1CRSxJQUFJLENBQUNGLFNBQUQsQ0FBSixDQUFnQkssTUFBaEIsR0FBeUIsQ0FBNUMsZ0JBQ0g7QUFBQSxjQUNDSCxJQUFJLENBQUNGLFNBQUQsQ0FBSixDQUFnQk0sR0FBaEIsQ0FBcUJDLFFBQUQsaUJBQ2pCLDhEQUFDLCtDQUFEO0FBRUksZUFBUyxFQUFFUCxTQUZmO0FBR0ksVUFBSSxFQUFFTyxRQUhWO0FBSUksWUFBTSxFQUFFTixNQUpaO0FBS0ksYUFBTyxFQUFFRSxPQUxiO0FBTUksaUJBQVcsRUFBRUQ7QUFOakIsT0FDVSxHQUFFQSxJQUFJLENBQUMsSUFBRCxDQUFPLElBQUdLLFFBQVEsQ0FBQ0MsSUFBSyxHQUR4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURIO0FBREQsbUJBREcsZ0JBY0g7QUFBRyxhQUFT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O0FBQ1hHLGVBQVMsR0FBRyxLQUFaO0FBQ0QsS0FGRDtBQUdELEdBeEJNLEVBeUJQO0FBQ0EsSUExQk8sQ0FBVDtBQTZCQSxTQUFPO0FBQUVoRSxRQUFGO0FBQVFmO0FBQVIsR0FBUDtBQUNELEM7Ozs7Ozs7Ozs7QUNoRkQsZSIsImZpbGUiOiJjb21wb25lbnRzX2l0ZW1MaXN0X3RzeC1jb21wb25lbnRzX2xheW91dF90c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWN0aW9uVHlwZSwgQmFkZ2VGaWVsZE5hbWUsIEJ1bmRsZU9iamVjdCwgRmVlZE9iamVjdCB9IGZyb20gXCIuLi91dGlscy90eXBlc1wiO1xyXG5pbXBvcnQgeyBPbmVCYWRnZSB9IGZyb20gJy4vb25lQmFkZ2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJhZGdlTGlzdCA9ICh7XHJcbiAgICBmaWVsZE5hbWUsXHJcbiAgICBhY3Rpb24sXHJcbiAgICBpdGVtLFxyXG4gICAgc2V0SXRlbSxcclxuICAgIHNldFNlYXJjaCxcclxufSA6IHtcclxuICAgIGZpZWxkTmFtZTogQmFkZ2VGaWVsZE5hbWU7XHJcbiAgICBhY3Rpb246IEFjdGlvblR5cGU7XHJcbiAgICBpdGVtOiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0O1xyXG4gICAgc2V0SXRlbT86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q+PjtcclxuICAgIHNldFNlYXJjaD86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFN0cmluZz4+O1xyXG5cclxufSkgPT4ge1xyXG4gICAgcmV0dXJuIGl0ZW1bZmllbGROYW1lXSAmJiBpdGVtW2ZpZWxkTmFtZV0ubGVuZ3RoID4gMCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHtpdGVtW2ZpZWxkTmFtZV0ubWFwKChvbmVCYWRnZSkgPT4gKFxyXG4gICAgICAgICAgICA8T25lQmFkZ2VcclxuICAgICAgICAgICAgICAgIGtleT17YCR7aXRlbVsnaWQnXX0tJHtvbmVCYWRnZS5uYW1lfX1gfVxyXG4gICAgICAgICAgICAgICAgZmllbGROYW1lPXtmaWVsZE5hbWV9XHJcbiAgICAgICAgICAgICAgICBpdGVtPXtvbmVCYWRnZX1cclxuICAgICAgICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICkgOiAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPk5vbmUgZm91bmQ8L3A+XHJcbiAgICAgKTtcclxuICAgICBcclxufTsiLCJpbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQnVuZGxlT2JqZWN0LFxyXG4gIEZlZWRPYmplY3QsXHJcbiAgSXRlbVR5cGUsXHJcbiAgU2VsZWN0ZWRGZWVkU3RhdGUsXHJcbn0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBFZGl0UGVuY2lsIH0gZnJvbSAnLi9zdmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1FZGl0ID0gKHtcclxuICBpdGVtLFxyXG4gIHR5cGUsXHJcbiAgc2VsZWN0ZWQsXHJcbiAgc2V0U2VsZWN0ZWQsXHJcbn06IHtcclxuICBpdGVtOiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0O1xyXG4gIHR5cGU6IEl0ZW1UeXBlO1xyXG4gIHNlbGVjdGVkPzogU2VsZWN0ZWRGZWVkU3RhdGU7XHJcbiAgc2V0U2VsZWN0ZWQ/OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxTZWxlY3RlZEZlZWRTdGF0ZT4+O1xyXG59KSA9PiB7XHJcbiAgY29uc3QgaXNGZWVkID0gdHlwZSA9PT0gSXRlbVR5cGUuRmVlZFR5cGU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBzZXRTZWxlY3RlZCgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICBmZWVkczogaXNGZWVkID8gW2l0ZW1dIDogaXRlbVsnZmVlZHMnXSxcclxuICAgICAgICAgIGVkaXRNb2RlOlxyXG4gICAgICAgICAgICAhc2VsZWN0ZWQuZWRpdE1vZGUgfHwgY3VyclN0YXRlLmlkICE9PSBpdGVtLmlkID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgbmV3TW9kZTogZmFsc2UsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9J2ZsZXggcHktMiBteC0xIHotMTAnXHJcbiAgICA+XHJcbiAgICAgIDxFZGl0UGVuY2lsXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgIGgtNiB3LTYgJHtcclxuICAgICAgICAgICAgICBpdGVtLmlkID09PSBzZWxlY3RlZC5pZCAmJiBzZWxlY3RlZC5lZGl0TW9kZVxyXG4gICAgICAgICAgICAgICAgPyBgdGV4dC0ke2lzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ30tNDAwYFxyXG4gICAgICAgICAgICAgICAgOiAndGV4dC1ncmF5LTUwMCdcclxuICAgICAgICAgICAgfSBpbmxpbmUtYmxvY2sgYWxpZ24tbWlkZGxlXHJcbiAgICAgICAgICAgYH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBCVU5ETEVTX1FVRVJZLCBGRUVEU19RVUVSWSB9IGZyb20gJy4uL3V0aWxzL2FwaS9ncmFwaHFsL3F1ZXJpZXMnO1xyXG5pbXBvcnQge1xyXG4gIEJ1bmRsZU9iamVjdCxcclxuICBGZWVkT2JqZWN0LFxyXG4gIEl0ZW1UeXBlLFxyXG4gIFNlbGVjdGVkRmVlZFN0YXRlLFxyXG59IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgTm90aWZ5TG9hZGluZyB9IGZyb20gJy4vbm90aWZ5TG9hZGluZyc7XHJcbmltcG9ydCB7IE5vdGlmeUVycm9yIH0gZnJvbSAnLi9ub3RpZnlFcnJvcic7XHJcbmltcG9ydCB7IE9uZUxpc3RJdGVtIH0gZnJvbSAnLi9vbmVMaXN0SXRlbSc7XHJcbmltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1MaXN0ID0gKHtcclxuICB0eXBlLFxyXG4gIHNlbGVjdGVkLFxyXG4gIHNldFNlbGVjdGVkLFxyXG4gIHVzZVNlbGVjdGVkID0gZmFsc2UsXHJcbiAgYWxsb3dFZGl0cyA9IGZhbHNlLFxyXG59OiB7XHJcbiAgdHlwZTogSXRlbVR5cGU7XHJcbiAgc2VsZWN0ZWQ/OiBTZWxlY3RlZEZlZWRTdGF0ZTtcclxuICBzZXRTZWxlY3RlZD86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFNlbGVjdGVkRmVlZFN0YXRlPj47XHJcbiAgdXNlU2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gIGFsbG93RWRpdHM/OiBib29sZWFuO1xyXG59KSA9PiB7XHJcbiAgY29uc3QgaXNGZWVkID0gdHlwZSA9PT0gSXRlbVR5cGUuRmVlZFR5cGU7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoXHJcbiAgICBpc0ZlZWQgPyBGRUVEU19RVUVSWSA6IEJVTkRMRVNfUVVFUllcclxuICApO1xyXG5cclxuICBjb25zb2xlLmxvZyhsb2FkaW5nLCBlcnJvciwgZGF0YSk7XHJcblxyXG4gIGNvbnN0IHsgZmVlZHMsIGJ1bmRsZXMgfSA9IGRhdGEgfHwge307XHJcbiAgY29uc3QgaXRlbUxpc3QgPSBpc0ZlZWQgPyBmZWVkcyA6IGJ1bmRsZXM7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdXNlU2VsZWN0ZWQgJiZcclxuICAgICAgICBpdGVtTGlzdCAmJlxyXG4gICAgICAgIGl0ZW1MaXN0Lmxlbmd0aCA+IDAgJiZcclxuICAgICAgICBzZWxlY3RlZC5pZCA9PT0gbnVsbFxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSBpdGVtTGlzdFswXTtcclxuICAgICAgICBhd2FpdCBzZXRTZWxlY3RlZCh7XHJcbiAgICAgICAgICBpZDogZmlyc3RJdGVtLmlkLFxyXG4gICAgICAgICAgZmVlZHM6IGlzRmVlZCA/IFtmaXJzdEl0ZW1dIDogZmlyc3RJdGVtWydmZWVkcyddLFxyXG4gICAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgbmV3TW9kZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pKCk7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICA8Tm90aWZ5TG9hZGluZyAvPjtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvciB8fCAhaXRlbUxpc3QpIHtcclxuICAgIHJldHVybiA8Tm90aWZ5RXJyb3IgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgbGc6Z3JpZC1jb2xzLTMgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTQnPlxyXG4gICAgICAgIHtpdGVtTGlzdCAmJiBpdGVtTGlzdC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgaXRlbUxpc3QubWFwKChpdGVtOiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0KSA9PiAoXHJcbiAgICAgICAgICAgIDxPbmVMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgdXNlU2VsZWN0ZWQ9e3VzZVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgIGFsbG93RWRpdHM9e2FsbG93RWRpdHN9XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxwPk5vbmUgYXJlIHByZXNlbnQuIFdoeSBub3QgYWRkIG9uZT88L3A+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgIHsgTmF2IH0gIGZyb20gJy4vbmF2J1xyXG5cclxuZXhwb3J0IGNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgICAgICAgIDxOYXYgLz5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VGZXRjaFVzZXIgfSBmcm9tICcuLi91dGlscy91c2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyB1c2VyLCBsb2FkaW5nIH0gPSB1c2VGZXRjaFVzZXIoKTtcclxuXHJcbiAgY29uc29sZS5sb2codXNlciwgbG9hZGluZyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGdyaWQgZ3JpZC1jb2xzLTQnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tMSBmbGV4IGp1c3RpZnktc3RhcnQnPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5saW5lLWZsZXggY3Vyc29yLXBvaW50ZXInPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdzbTpoLTEwIGgtOCBwci0xJyBzcmM9Jy9sb2dvLnBuZycgLz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3AtMiB0ZXh0LWNlbnRlciBibG9jayBob3ZlcjpibHVlLTcwMCBzbTp2aXNpYmxlIGludmlzaWJsZSBmb250LW1lZGl1bSc+XHJcbiAgICAgICAgICAgICAgICBTV0wsIExMQ1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi0zIGZsZXgganVzdGlmeS1lbmQnPlxyXG4gICAgICAgIHt1c2VyID8gKFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nc206bXItNic+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9zYXZlZC1hcnRpY2xlcyc+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgdGV4dC1ibHVlLTcwMCB0ZXh0LWJvbGQnPlxyXG4gICAgICAgICAgICAgICAgU2F2ZWQgQXJ0aWNsZXNcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J3NtOm1yLTYnPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj0nL2J1bmRsZXMnPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J3AtMiB0ZXh0LWNlbnRlciBibG9jayBob3ZlcjpibHVlLTcwMCB0ZXh0LWJsdWUtNzAwJz5cclxuICAgICAgICAgICAgICBCdW5kbGVzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J3NtOm1yLTYnPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj0nL2ZlZWRzJz5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgdGV4dC1ibHVlLTcwMCc+XHJcbiAgICAgICAgICAgICAgRmVlZHNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge3VzZXIgJiYgIWxvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdzbTptci02Jz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2FwaS9sb2dvdXQnPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncC0yIHRleHQtY2VudGVyIGJsb2NrIGhvdmVyOmJsdWUtNzAwIHRleHQtYmx1ZS03MDAnPlxyXG4gICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdzbTptci02Jz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2FwaS9sb2dpbic+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgdGV4dC1ibHVlLTcwMCc+XHJcbiAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgRXJyb3JTaWduIH0gZnJvbSBcIi4vc3ZnXCJcclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZnlFcnJvciA9ICgpID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBmbGV4XCI+XHJcbiAgICAgICAgIDxFcnJvclNpZ24gY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgV2FpdGluZ0Nsb2NrIH0gZnJvbSBcIi4vc3ZnXCJcclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZnlMb2FkaW5nID0gKCkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXhcIj5cclxuICAgICAgICAgPFdhaXRpbmdDbG9jayBjbGFzc05hbWU9XCJoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG9cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdW5kbGVUYWcsIEZlZWRUYWcgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uVHlwZSxcclxuICBCYWRnZUZpZWxkTmFtZSxcclxuICBCdW5kbGVPYmplY3QsXHJcbiAgRmVlZE9iamVjdCxcclxufSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IE1pbnVzLCBQbHVzIH0gZnJvbSAnLi9zdmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9uZUJhZGdlID0gKHtcclxuICBpdGVtLFxyXG4gIGFjdGlvbixcclxuICBjdXJyZW50SXRlbSxcclxuICBmaWVsZE5hbWUsXHJcbiAgc2V0SXRlbSxcclxufToge1xyXG4gIGl0ZW06IEZlZWRUYWcgfCBCdW5kbGVUYWcgfCBGZWVkT2JqZWN0O1xyXG4gIGFjdGlvbjogQWN0aW9uVHlwZTtcclxuICBjdXJyZW50SXRlbT86IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q7XHJcbiAgZmllbGROYW1lOiBCYWRnZUZpZWxkTmFtZTtcclxuICBzZXRJdGVtPzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248RmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdD4+O1xyXG59KSA9PiB7XHJcbiAgY29uc3QgY29sb3IgPVxyXG4gICAgZmllbGROYW1lID09PSBCYWRnZUZpZWxkTmFtZS50YWdzXHJcbiAgICAgID8gJ2JsdWUnXHJcbiAgICAgIDogQmFkZ2VGaWVsZE5hbWUuZmVlZHNcclxuICAgICAgPyAnZ3JlZW4nXHJcbiAgICAgIDogJ3B1cnBsZSc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWJldHdlZW4nPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1zbSBweS0yIHB4LTIgcm91bmRlZC1sZyBiZy0ke2NvbG9yfS0yMDAgYH1cclxuICAgICAgPlxyXG4gICAgICAgIHthY3Rpb24gPT09IEFjdGlvblR5cGUuQUREID8gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SXRlbSgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uY3VyclN0YXRlLFxyXG4gICAgICAgICAgICAgICAgW2ZpZWxkTmFtZV06IFsuLi5jdXJyU3RhdGVbZmllbGROYW1lXSwgeyAuLi5pdGVtIH1dLFxyXG4gICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBsdXMgY2xhc3NOYW1lPSdoLTQgdy00IHRleHQtZ3JheS01MDAnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICB7YWN0aW9uID09PSBBY3Rpb25UeXBlLkNSRUFURSA/IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEl0ZW0oKGN1cnJTdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJTdGF0ZSxcclxuICAgICAgICAgICAgICAgIFtmaWVsZE5hbWVdOiBjdXJyU3RhdGVbZmllbGROYW1lXS5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgIChvKSA9PiBpdGVtLm5hbWUgIT09IG8ubmFtZVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNaW51cyBjbGFzc05hbWU9J2gtNCB3LTQgdGV4dC1ncmF5LTUwMCcgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17YHRleHQteHMgdGV4dC0ke2NvbG9yfS02MDAgdGV4dC1jZW50ZXJgfT4ge2l0ZW0ubmFtZX0gPC9wPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uVHlwZSxcclxuICBCYWRnZUZpZWxkTmFtZSxcclxuICBCdW5kbGVPYmplY3QsXHJcbiAgRmVlZE9iamVjdCxcclxuICBJdGVtVHlwZSxcclxuICBTZWxlY3RlZEZlZWRTdGF0ZSxcclxufSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcclxuaW1wb3J0IHsgQmFkZ2VMaXN0IH0gZnJvbSAnLi9iYWRnZUxpc3QnO1xyXG5pbXBvcnQgeyBJdGVtRWRpdCB9IGZyb20gJy4vaXRlbUVkaXQnO1xyXG5pbXBvcnQgeyBQcm9maWxlUGljIH0gZnJvbSAnLi9wcm9maWxlUGljJztcclxuaW1wb3J0IHsgRG91YmxlQXJyb3dEb3duLCBEb3VibGVBcnJvd1JpZ2h0LCBXYWl0aW5nQ2xvY2sgfSBmcm9tICcuL3N2Zyc7XHJcbmV4cG9ydCBjb25zdCBPbmVMaXN0SXRlbSA9ICh7XHJcbiAgaXRlbSxcclxuICB0eXBlLFxyXG4gIHNlbGVjdGVkLFxyXG4gIHNldFNlbGVjdGVkLFxyXG4gIHVzZVNlbGVjdGVkID0gZmFsc2UsXHJcbiAgYWxsb3dFZGl0cyA9IGZhbHNlLFxyXG59OiB7XHJcbiAgaXRlbTogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdDtcclxuICB0eXBlOiBJdGVtVHlwZTtcclxuICBzZWxlY3RlZD86IFNlbGVjdGVkRmVlZFN0YXRlO1xyXG4gIHNldFNlbGVjdGVkPzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248U2VsZWN0ZWRGZWVkU3RhdGU+PjtcclxuICB1c2VTZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgYWxsb3dFZGl0cz86IGJvb2xlYW47XHJcbn0pID0+IHtcclxuICBjb25zdCBpc0ZlZWQgPSB0eXBlID09PSBJdGVtVHlwZS5GZWVkVHlwZTtcclxuICBjb25zdCBpc1NlbGVjdGVkID0gdXNlU2VsZWN0ZWQgJiYgc2VsZWN0ZWQgJiYgc2VsZWN0ZWQuaWQgPT09IGl0ZW0uaWQ7XHJcblxyXG4gIGNvbnN0IHsgdXNlciwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlVXNlcigpO1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPFdhaXRpbmdDbG9jayBjbGFzc05hbWU9J2gtMTAgdy0xMCB0ZXh0LWdyYXktNTAwIG0tYXV0bycgLz47XHJcbiAgfVxyXG5cclxuICBjb25zdCBjYW5NYW5pcHVsYXRlID1cclxuICAgICFpc0xvYWRpbmcgJiZcclxuICAgIHVzZXIgJiZcclxuICAgIF8uZ2V0KGl0ZW0sICdhdXRob3IuYXV0aG8wJykgPT09IHVzZXIuc3ViICYmXHJcbiAgICBhbGxvd0VkaXRzICYmXHJcbiAgICB1c2VTZWxlY3RlZDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvJHtpc0ZlZWQgPyAnZmVlZCcgOiAnYnVuZGxlJ30vJHtpdGVtLmlkfWB9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvci1wb2ludGVyIGdyaWQgZ3JpZC1jb2xzLTYgcC00IHJvdW5kZWQtbGdcclxuICAgICAgICAgICAgICAgICAgICAke3VzZVNlbGVjdGVkID8gJ3JvdW5kZWQtYi1ub25lJyA6ICdib3JkZXItYi00J30gXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXQtNCBib3JkZXItbC00IGJvcmRlci1yLTRcclxuICAgICAgICAgICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBib3JkZXItJHtpc0ZlZWQgPyAnZ3JlZW4nIDogJ3B1cnBsZSd9LTQwMGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLWdyYXktMzAwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTQnPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdmb250LWJvbGQnPntpdGVtLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgeyFpc0ZlZWQgPyA8cD57aXRlbVsnZGVzY3JpcHRpb24nXX08L3A+IDogbnVsbH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTIgZmxleCBqdXN0aWZ5LWVuZCc+XHJcbiAgICAgICAgICAgIHtjYW5NYW5pcHVsYXRlID8gKFxyXG4gICAgICAgICAgICAgIDxJdGVtRWRpdFxyXG4gICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYW4tY29sLTYgcHktMCBzcGFjZS14LTInPlxyXG4gICAgICAgICAgICB7aXRlbS5hdXRob3IgPyA8UHJvZmlsZVBpYyBhdXRob3I9e2l0ZW0uYXV0aG9yfSAvPiA6IG51bGx9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi02IHB5LTInPlxyXG4gICAgICAgICAgICA8aDM+VGFnczwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkcyBncmlkcy1jb2xzLTIgZ2FwLTInPlxyXG4gICAgICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUudGFnc31cclxuICAgICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5OT05FfVxyXG4gICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTYgcHktMic+XHJcbiAgICAgICAgICAgIDxoMz57aXNGZWVkID8gJ0J1bmRsZXMnIDogJ0ZlZWRzJ308L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMic+XHJcbiAgICAgICAgICAgICAgey8qIDxwPmNoaWxkIGl0ZW1zPC9wPiAqL31cclxuICAgICAgICAgICAgICA8QmFkZ2VMaXN0XHJcbiAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e1xyXG4gICAgICAgICAgICAgICAgICBpc0ZlZWQgPyBCYWRnZUZpZWxkTmFtZS5idW5kbGVzIDogQmFkZ2VGaWVsZE5hbWUuZmVlZHNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5OT05FfVxyXG4gICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt1c2VTZWxlY3RlZCA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpc1NlbGVjdGVkID8gKFxyXG4gICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCByb3VuZGVkLWxnIHJvdW5kZWQtdC1ub25lIGFsaWduLW1pZGRsZSAke1xyXG4gICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgYmctJHtpc0ZlZWQgPyAnZ3JlZW4nIDogJ3B1cnBsZSd9LTQwMGBcclxuICAgICAgICAgICAgICAgICAgICA6IGBiZy1ncmF5LTMwMGBcclxuICAgICAgICAgICAgICAgIH0gcC00IHotMTAgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlcmB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERvdWJsZUFycm93RG93biBjbGFzc05hbWU9J2gtNSB3LTUgdGV4dC13aGl0ZS01MDAgbXItMiBtdC0xJyAvPlxyXG4gICAgICAgICAgICAgICAge2BIaWRlICR7aXNGZWVkID8gJ0ZlZWQnIDogJ0J1bmRsZSd9IEFydGljbGVzYH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZlZWRzOiBpc0ZlZWQgPyBbaXRlbV0gOiBpdGVtWydmZWVkcyddLFxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBuZXdNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCByb3VuZGVkLWxnIHJvdW5kZWQtdC1ub25lIGFsaWduLW1pZGRsZSAke1xyXG4gICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgYmctJHtpc0ZlZWQgPyAnZ3JlZW4nIDogJ3B1cnBsZSd9LTQwMGBcclxuICAgICAgICAgICAgICAgICAgICA6IGBiZy1ncmF5LTMwMGBcclxuICAgICAgICAgICAgICAgIH0gcC00IHotMTAgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlcmB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERvdWJsZUFycm93UmlnaHQgY2xhc3NOYW1lPSdoLTUgdy01IHRleHQtd2hpdGUtNTAwIG1yLTIgbXQtMSc+PC9Eb3VibGVBcnJvd1JpZ2h0PlxyXG4gICAgICAgICAgICAgICAge2AgU2hvdyAke2lzRmVlZCA/IGBGZWVkYCA6IGBCdW5kbGVgfSBBcnRpY2xlc2B9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSAnLi9zdmcnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlUGljID0gKHsgYXV0aG9yIH0gOiB7IGF1dGhvcjogVXNlciB9KSA9PiAoXHJcbiAgICA8PlxyXG4gICAgICAgIHthdXRob3IucGljdHVyZSA/IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHAtMC41IHctOCBoLTggYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICAgIHNyYz17YXV0aG9yLnBpY3R1cmV9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxRdWVzdGlvbiBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtZ3JheS01MDBcIiAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPHA+e2F1dGhvci5uaWNrbmFtZX08L3A+XHJcbiAgICA8Lz5cclxuKSIsImV4cG9ydCBjb25zdCBXYWl0aW5nQ2xvY2sgPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgIGZpbGw9J25vbmUnXHJcbiAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gID5cclxuICAgIDxwYXRoXHJcbiAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICBkPSdNMTIgOHY0bDMgM202LTNhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6J1xyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBFcnJvclNpZ24gPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgIGZpbGw9J25vbmUnXHJcbiAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gID5cclxuICAgIDxwYXRoXHJcbiAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICBkPSdNMTIgOXYybTAgNGguMDFtLTYuOTM4IDRoMTMuODU2YzEuNTQgMCAyLjUwMi0xLjY2NyAxLjczMi0zTDEzLjczMiA0Yy0uNzctMS4zMzMtMi42OTQtMS4zMzMtMy40NjQgMEwzLjM0IDE2Yy0uNzcgMS4zMzMuMTkyIDMgMS43MzIgM3onXHJcbiAgICAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IERvdWJsZUFycm93RG93biA9ICh7IGNsYXNzTmFtZSB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgZmlsbD0nbm9uZSdcclxuICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgPlxyXG4gICAgPHBhdGhcclxuICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgIGQ9J00xOSAxM2wtNyA3LTctN20xNC04bC03IDctNy03J1xyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBEb3VibGVBcnJvd1JpZ2h0ID0gKHsgY2xhc3NOYW1lIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICBmaWxsPSdub25lJ1xyXG4gICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICA+XHJcbiAgICA8cGF0aFxyXG4gICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgZD0nTTEzIDVsNyA3LTcgN001IDVsNyA3LTcgNydcclxuICAgIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcbmV4cG9ydCBjb25zdCBQbHVzID0gKHsgY2xhc3NOYW1lIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgIGZpbGw9J25vbmUnXHJcbiAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICA+XHJcbiAgICA8cGF0aFxyXG4gICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgZD0nTTEyIDR2MTZtOC04SDQnXHJcbiAgICAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5leHBvcnQgY29uc3QgTWludXMgPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgZmlsbD0nbm9uZSdcclxuICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gID5cclxuICAgIDxwYXRoXHJcbiAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICBkPSdNMjAgMTJINCdcclxuICAgIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgUXVlc3Rpb24gPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgZmlsbD0nbm9uZSdcclxuICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gID5cclxuICAgIDxwYXRoXHJcbiAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICBkPSdNOC4yMjggOWMuNTQ5LTEuMTY1IDIuMDMtMiAzLjc3Mi0yIDIuMjEgMCA0IDEuMzQzIDQgMyAwIDEuNC0xLjI3OCAyLjU3NS0zLjAwNiAyLjkwNy0uNTQyLjEwNC0uOTk0LjU0LS45OTQgMS4wOTNtMCAzaC4wMU0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHonXHJcbiAgICAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwaW4gPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgIGZpbGw9J25vbmUnXHJcbiAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gID5cclxuICAgIDxwYXRoXHJcbiAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICBkPSdNNCA0djVoLjU4Mm0xNS4zNTYgMkE4LjAwMSA4LjAwMSAwIDAwNC41ODIgOW0wIDBIOW0xMSAxMXYtNWgtLjU4MW0wIDBhOC4wMDMgOC4wMDMgMCAwMS0xNS4zNTctMm0xNS4zNTcgMkgxNSdcclxuICAgIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoID0gKHsgY2xhc3NOYW1lIH0pID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICBmaWxsPSdub25lJ1xyXG4gICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICA+XHJcbiAgICA8cGF0aFxyXG4gICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgZD0nTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAweidcclxuICAgIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgRWRpdFBlbmNpbCA9ICh7IGNsYXNzTmFtZSB9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgZmlsbD0nbm9uZSdcclxuICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgPlxyXG4gICAgPHBhdGhcclxuICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgIGQ9J00xNS4yMzIgNS4yMzJsMy41MzYgMy41MzZtLTIuMDM2LTUuMDM2YTIuNSAyLjUgMCAxMTMuNTM2IDMuNTM2TDYuNSAyMS4wMzZIM3YtMy41NzJMMTYuNzMyIDMuNzMyeidcclxuICAgIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuZXhwb3J0IGNvbnN0IEZFRURfVEFHX0ZSQUdNRU5UID0gZ3FsYFxuICBmcmFnbWVudCBGZWVkVGFnRnJhZ21lbnQgb24gRmVlZFRhZyB7XG4gICAgaWRcbiAgICBuYW1lXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCVU5ETEVfVEFHX0ZSQUdNRU5UID0gZ3FsYFxuICBmcmFnbWVudCBCdW5kbGVUYWdGcmFnbWVudCBvbiBCdW5kbGVUYWcge1xuICAgIGlkXG4gICAgbmFtZVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQVVUSE9SX0ZSQUdNRU5UID0gZ3FsYFxuICBmcmFnbWVudCBBdXRob3JGcmFnbWVudCBvbiBVc2VyIHtcbiAgICBpZFxuICAgIGF1dGgwXG4gICAgcGljdHVyZVxuICAgIG5pY2tuYW1lXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMSUtFX0ZSQUdNRU5UID0gZ3FsYFxuICBmcmFnbWVudCBMaWtlRnJhZ21lbnQgb24gTGlrZSB7XG4gICAgaWRcbiAgICBuYW1lXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGRUVEX0ZSQUdNRU5UID0gZ3FsYFxuICBmcmFnbWVudCBGZWVkRnJhZ21lbnQgb24gRmVlZCB7XG4gICAgaWRcbiAgICBuYW1lXG4gICAgdXJsXG4gICAgbGlrZXMge1xuICAgICAgLi4uQXV0aG9yRnJhZ21lbnRcbiAgICB9XG4gICAgdGFncyB7XG4gICAgICAuLi5GZWVkVGFnRnJhZ21lbnRcbiAgICB9XG4gICAgYXV0aG9yIHtcbiAgICAgIC4uLkF1dGhvckZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7RkVFRF9UQUdfRlJBR01FTlR9XG4gICR7QVVUSE9SX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJVTkRMRV9GUkFHTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgQnVuZGxlRnJhZ21lbnQgb24gQnVuZGxlIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgICBkZXNjcmlwdGlvblxuICAgIHRhZ3Mge1xuICAgICAgLi4uQnVuZGxlVGFnRnJhZ21lbnRcbiAgICB9XG4gICAgYXV0aG9yIHtcbiAgICAgIC4uLkF1dGhvckZyYWdtZW50XG4gICAgfVxuICAgIGxpa2VzIHtcbiAgICAgIC4uLkF1dGhvckZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7QlVORExFX1RBR19GUkFHTUVOVH1cbiAgJHtBVVRIT1JfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgU0FWRURfQVJUSUNMRV9GUkFHTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgU2F2ZWRBcnRpY2xlRnJhZ21lbnQgb24gU2F2ZWRBcnRpY2xlIHtcbiAgICBpZFxuICAgIGNvbnRlbnRzXG4gICAgdXJsXG4gICAgYXV0aG9yIHtcbiAgICAgIC4uLkF1dGhvckZyYWdtZW50XG4gICAgfVxuICAgIGZlZWQge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7QVVUSE9SX0ZSQUdNRU5UfVxuICAke0ZFRURfRlJBR01FTlR9XG5gO1xuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHtcbiAgQVVUSE9SX0ZSQUdNRU5ULFxuICBCVU5ETEVfRlJBR01FTlQsXG4gIEJVTkRMRV9UQUdfRlJBR01FTlQsXG4gIEZFRURfRlJBR01FTlQsXG4gIEZFRURfVEFHX0ZSQUdNRU5ULFxuICBTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5ULFxufSBmcm9tICcuL2ZyYWdtZW50cyc7XG5cblxuZXhwb3J0IGNvbnN0IEJVTkRMRVNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBidW5kbGVzIHtcbiAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICBmZWVkcyB7XG4gICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZFRURTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgZmVlZHMge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICBidW5kbGVzIHtcbiAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGSU5EX0ZFRURTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBmaW5kRmVlZHNRdWVyeSgkZGF0YTogRmluZEZlZWRzSW5wdXQpIHtcbiAgICBmaW5kRmVlZHMoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgRkVFRF9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgZmVlZFF1ZXJ5KCRkYXRhOiBGZWVkSW5wdXQpIHtcbiAgICBmZWVkKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIGJ1bmRsZXMge1xuICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgICBmZWVkcyB7XG4gICAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCVU5ETEVfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IGJ1bmRsZVF1ZXJ5KCRkYXRhOiBCdW5kbGVJbnB1dCkge1xuICAgIGJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIGZlZWRzIHtcbiAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIGJ1bmRsZXMge1xuICAgICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGSU5EX0ZFRURfVEFHU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgZmluZEZlZWRUYWdzUXVlcnkoJGRhdGE6IEZpbmRGZWVkVGFnc0lucHV0KSB7XG4gICAgZmluZEZlZWRUYWdzKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkVGFnRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtGRUVEX1RBR19GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGSU5EX0JVTkRMRV9UQUdTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBmaW5kQnVuZGxlVGFnc1F1ZXJ5KCRkYXRhOiBGaW5kQnVuZGxlVGFnc0lucHV0KSB7XG4gICAgZmluZEJ1bmRsZVRhZ3MoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkJ1bmRsZVRhZ0ZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7QlVORExFX1RBR19GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTQVZFRF9BUlRJQ0xFU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgc2F2ZWRBcnRpY2xlc1F1ZXJ5IHtcbiAgICBzYXZlZEFydGljbGVzIHtcbiAgICAgIC4uLlNhdmVkQXJ0aWNsZUZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7U0FWRURfQVJUSUNMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTQVZFRF9BUlRJQ0xFX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBzYXZlZEFydGljbGVRdWVyeSgkZGF0YTogU2F2ZWRBcnRpY2xlSW5wdXQpIHtcbiAgICBzYXZlZEFydGljbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLlNhdmVkQXJ0aWNsZUZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7U0FWRURfQVJUSUNMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNRV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgbWVRdWVyeSB7XG4gICAgbWUge1xuICAgICAgLi4uQXV0aG9yRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtBVVRIT1JfRlJBR01FTlR9XG5gO1xuIiwiaW1wb3J0IHsgQnVuZGxlVGFnLCBGZWVkLCBGZWVkVGFnLCBVc2VyIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5cclxuZXhwb3J0IGVudW0gSXRlbVR5cGUge1xyXG4gICAgQnVuZGxlVHlwZSA9ICdCdW5kbGVUeXBlJyxcclxuICAgIEZlZWRUeXBlID0gJ0ZlZWRUeXBlJ1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgRmVlZE9iamVjdCA9IHtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICB0YWdzOiBGZWVkVGFnW107XHJcbiAgICBidW5kbGVzPzogQnVuZGxlT2JqZWN0W11cclxuICAgIGF1dGhvcj86IFVzZXI7XHJcbiAgICBsaWtlcz86ICBVc2VyW107XHJcbn1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBCdW5kbGVPYmplY3QgPSB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICB0YWdzOiBCdW5kbGVUYWdbXTtcclxuICAgIGZlZWRzPzogRmVlZE9iamVjdFtdXHJcbiAgICBhdXRob3I/OiBVc2VyO1xyXG4gICAgbGlrZXM/OiAgVXNlcltdO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTZWxlY3RlZEZlZWRTdGF0ZSA9IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBmZWVkczogRmVlZFtdXHJcbiAgICBlZGl0TW9kZTogYm9vbGVhbjtcclxuICAgIG5ld01vZGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhZGdlRmllbGROYW1lIHtcclxuICAgdGFncyA9ICd0YWdzJyxcclxuICAgZmVlZHMgPSAnZmVlZHMnLFxyXG4gICBidW5kbGVzID0gJ2J1bmRsZXMnXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZW51bSBBY3Rpb25UeXBlIHtcclxuICAgQUREID0gJ0FERCcsXHJcbiAgIENSRUFURSA9ICdDUkVBVEUnLFxyXG4gICBOT05FID0gJ05PTkUnXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE5ld0l0ZW1TdGF0ZSA9ICBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0O1xyXG5cclxuXHJcbmV4cG9ydCBlbnVtIFNlYXJjaFF1ZXJ5TmFtZSB7XHJcbiAgICBmaW5kRmVlZFRhZ3MgPSAnZmluZEZlZWRUYWdzJyxcclxuICAgIGZpbmRCdW5kbGVUYWdzID0gJ2ZpbmRCdW5kbGVUYWdzJyxcclxuICAgIGZpbmRGZWVkcyA9ICdmaW5kRmVlZHMnLFxyXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xyXG4gICAgX191c2VyOiBhbnlcclxufVxyXG5cclxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXIoY29va2llID0gJycpIHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fdXNlcikge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5fX3VzZXJcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgJy9hcGkvbWUnLFxyXG4gICAgY29va2llXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBjb29raWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgOiB7fVxyXG4gIClcclxuXHJcbiAgaWYgKCFyZXMub2spIHtcclxuICAgIGRlbGV0ZSB3aW5kb3cuX191c2VyXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHdpbmRvdy5fX3VzZXIgPSBqc29uXHJcbiAgfVxyXG4gIHJldHVybiBqc29uXHJcbn1cclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZldGNoVXNlcih7IHJlcXVpcmVkIH0gPSB7fSkge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKFxyXG4gICAgKCkgPT4gISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX191c2VyKVxyXG4gIClcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd2luZG93Ll9fdXNlciB8fCBudWxsXHJcbiAgfSlcclxuXHJcbiAgdXNlRWZmZWN0KFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBpZiAoIWxvYWRpbmcgJiYgdXNlcikge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgbGV0IGlzTW91bnRlZCA9IHRydWVcclxuXHJcbiAgICAgIGZldGNoVXNlcigpLnRoZW4oKHVzZXIpID0+IHtcclxuICAgICAgICAvLyBPbmx5IHNldCB0aGUgdXNlciBpZiB0aGUgY29tcG9uZW50IGlzIHN0aWxsIG1vdW50ZWRcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICAvLyBXaGVuIHRoZSB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gYnV0IGxvZ2luIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICBpZiAocmVxdWlyZWQgJiYgIXVzZXIpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FwaS9sb2dpbidcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRVc2VyKHVzZXIpXHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgaXNNb3VudGVkID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICByZXR1cm4geyB1c2VyLCBsb2FkaW5nIH1cclxufSIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=