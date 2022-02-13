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
  setItem
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
      lineNumber: 20,
      columnNumber: 13
    }, undefined))
  }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    className: "text-gray-400",
    children: "None found"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
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

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\oneBadge.tsx";


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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: `text-xs text-${color}-600 text-center`,
        children: [" ", item.name, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
    lineNumber: 78,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 71,
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
    lineNumber: 94,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 87,
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
    lineNumber: 110,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 104,
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
/* harmony export */   "ActionType": function() { return /* binding */ ActionType; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL2JhZGdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9pdGVtTGlzdC50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvbmF2LnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL25vdGlmeUVycm9yLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL25vdGlmeUxvYWRpbmcudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvb25lQmFkZ2UudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvb25lTGlzdEl0ZW0udHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvcHJvZmlsZVBpYy50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9zdmcudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL2FwaS9ncmFwaHFsL2ZyYWdtZW50cy50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcGkvZ3JhcGhxbC9xdWVyaWVzLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL3R5cGVzLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2lnbm9yZWR8QzpcXFVkZW15U3R1ZmZcXFByaXNtYVN0dWZmXFxuZXdzcHJpc21hXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQmFkZ2VMaXN0IiwiZmllbGROYW1lIiwiYWN0aW9uIiwiaXRlbSIsInNldEl0ZW0iLCJsZW5ndGgiLCJtYXAiLCJvbmVCYWRnZSIsIm5hbWUiLCJJdGVtTGlzdCIsInR5cGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlU2VsZWN0ZWQiLCJhbGxvd0VkaXRzIiwiaXNGZWVkIiwiSXRlbVR5cGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJGRUVEU19RVUVSWSIsIkJVTkRMRVNfUVVFUlkiLCJjb25zb2xlIiwibG9nIiwiZmVlZHMiLCJidW5kbGVzIiwiaXRlbUxpc3QiLCJ1c2VFZmZlY3QiLCJpZCIsImZpcnN0SXRlbSIsImVkaXRNb2RlIiwibmV3TW9kZSIsIkxheW91dCIsImNoaWxkcmVuIiwiTmF2IiwidXNlciIsInVzZUZldGNoVXNlciIsIk5vdGlmeUVycm9yIiwiTm90aWZ5TG9hZGluZyIsIk9uZUJhZGdlIiwiY3VycmVudEl0ZW0iLCJjb2xvciIsIkJhZGdlRmllbGROYW1lIiwiT25lTGlzdEl0ZW0iLCJpc1NlbGVjdGVkIiwiYXV0aG9yIiwiQWN0aW9uVHlwZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlByb2ZpbGVQaWMiLCJwaWN0dXJlIiwibmlja25hbWUiLCJXYWl0aW5nQ2xvY2siLCJjbGFzc05hbWUiLCJFcnJvclNpZ24iLCJEb3VibGVBcnJvd0Rvd24iLCJEb3VibGVBcnJvd1JpZ2h0IiwiUGx1cyIsIk1pbnVzIiwiUXVlc3Rpb24iLCJGRUVEX1RBR19GUkFHTUVOVCIsImdxbCIsIkJVTkRMRV9UQUdfRlJBR01FTlQiLCJBVVRIT1JfRlJBR01FTlQiLCJMSUtFX0ZSQUdNRU5UIiwiRkVFRF9GUkFHTUVOVCIsIkJVTkRMRV9GUkFHTUVOVCIsIlNBVkVEX0FSVElDTEVfRlJBR01FTlQiLCJGSU5EX0ZFRURTX1FVRVJZIiwiRkVFRF9RVUVSWSIsIkJVTkRMRV9RVUVSWSIsIkZJTkRfRkVFRF9UQUdTX1FVRVJZIiwiRklORF9CVU5ETEVfVEFHU19RVUVSWSIsIlNBVkVEX0FSVElDTEVTX1FVRVJZIiwiU0FWRURfQVJUSUNMRV9RVUVSWSIsIk1FX1FVRVJZIiwiZmV0Y2hVc2VyIiwiY29va2llIiwicmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwib2siLCJ3aW5kb3ciLCJfX3VzZXIiLCJqc29uIiwicmVxdWlyZWQiLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJzZXRVc2VyIiwiaXNNb3VudGVkIiwidGhlbiIsImxvY2F0aW9uIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFTyxNQUFNQSxTQUFTLEdBQUcsQ0FBQztBQUN0QkMsV0FEc0I7QUFFdEJDLFFBRnNCO0FBR3RCQyxNQUhzQjtBQUl0QkM7QUFKc0IsQ0FBRCxLQVduQjtBQUNGLFNBQU9ELElBQUksQ0FBQ0YsU0FBRCxDQUFKLElBQW1CRSxJQUFJLENBQUNGLFNBQUQsQ0FBSixDQUFnQkksTUFBaEIsR0FBeUIsQ0FBNUMsZ0JBQ0g7QUFBQSxjQUNDRixJQUFJLENBQUNGLFNBQUQsQ0FBSixDQUFnQkssR0FBaEIsQ0FBcUJDLFFBQUQsaUJBQ2pCLDhEQUFDLCtDQUFEO0FBRUksZUFBUyxFQUFFTixTQUZmO0FBR0ksVUFBSSxFQUFFTSxRQUhWO0FBSUksWUFBTSxFQUFFTCxNQUpaO0FBS0ksYUFBTyxFQUFFRSxPQUxiO0FBTUksaUJBQVcsRUFBRUQ7QUFOakIsT0FDVSxHQUFFQSxJQUFJLENBQUMsSUFBRCxDQUFPLElBQUdJLFFBQVEsQ0FBQ0MsSUFBSyxHQUR4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURIO0FBREQsbUJBREcsZ0JBY0g7QUFBRyxhQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRKO0FBaUJILENBN0JNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxNQUFNQyxRQUFRLEdBQUcsQ0FBQztBQUN2QkMsTUFEdUI7QUFFdkJDLFVBRnVCO0FBR3ZCQyxhQUh1QjtBQUl2QkMsYUFBVyxHQUFHLEtBSlM7QUFLdkJDO0FBTHVC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TSxDQUFDQyxNQUFQLElBQWlCLElBQXhCO0FBQ0QsR0FOK0IsQ0FBaEM7QUFRQXhELGtEQUFTLENBQ1AsTUFBTTtBQUNKLFFBQUksQ0FBQ1gsT0FBRCxJQUFZbUIsSUFBaEIsRUFBc0I7QUFDcEI7QUFDRDs7QUFDRG1ELGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQSxRQUFJRyxTQUFTLEdBQUcsSUFBaEI7QUFFQWIsYUFBUyxHQUFHYyxJQUFaLENBQWtCdkQsSUFBRCxJQUFVO0FBQ3pCO0FBQ0EsVUFBSXNELFNBQUosRUFBZTtBQUNiO0FBQ0EsWUFBSUosUUFBUSxJQUFJLENBQUNsRCxJQUFqQixFQUF1QjtBQUNyQitDLGdCQUFNLENBQUNTLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLFlBQXZCO0FBQ0E7QUFDRDs7QUFDREosZUFBTyxDQUFDckQsSUFBRCxDQUFQO0FBQ0FtRCxrQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNEO0FBQ0YsS0FYRDtBQWFBLFdBQU8sTUFBTTtBQUNYRyxlQUFTLEdBQUcsS0FBWjtBQUNELEtBRkQ7QUFHRCxHQXhCTSxFQXlCUDtBQUNBLElBMUJPLENBQVQ7QUE2QkEsU0FBTztBQUFFdEQsUUFBRjtBQUFRbkI7QUFBUixHQUFQO0FBQ0QsQzs7Ozs7Ozs7OztBQ2hGRCxlIiwiZmlsZSI6ImNvbXBvbmVudHNfaXRlbUxpc3RfdHN4LWNvbXBvbmVudHNfbGF5b3V0X3RzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlLCBCYWRnZUZpZWxkTmFtZSwgQnVuZGxlT2JqZWN0LCBGZWVkT2JqZWN0IH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzXCI7XHJcbmltcG9ydCB7IE9uZUJhZGdlIH0gZnJvbSAnLi9vbmVCYWRnZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQmFkZ2VMaXN0ID0gKHtcclxuICAgIGZpZWxkTmFtZSxcclxuICAgIGFjdGlvbixcclxuICAgIGl0ZW0sXHJcbiAgICBzZXRJdGVtLFxyXG59IDoge1xyXG4gICAgZmllbGROYW1lOiBCYWRnZUZpZWxkTmFtZTtcclxuICAgIGFjdGlvbjogQWN0aW9uVHlwZTtcclxuICAgIGl0ZW06IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q7XHJcbiAgICBzZXRJdGVtPzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248RmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdD4+O1xyXG5cclxufSkgPT4ge1xyXG4gICAgcmV0dXJuIGl0ZW1bZmllbGROYW1lXSAmJiBpdGVtW2ZpZWxkTmFtZV0ubGVuZ3RoID4gMCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHtpdGVtW2ZpZWxkTmFtZV0ubWFwKChvbmVCYWRnZSkgPT4gKFxyXG4gICAgICAgICAgICA8T25lQmFkZ2VcclxuICAgICAgICAgICAgICAgIGtleT17YCR7aXRlbVsnaWQnXX0tJHtvbmVCYWRnZS5uYW1lfX1gfVxyXG4gICAgICAgICAgICAgICAgZmllbGROYW1lPXtmaWVsZE5hbWV9XHJcbiAgICAgICAgICAgICAgICBpdGVtPXtvbmVCYWRnZX1cclxuICAgICAgICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICkgOiAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPk5vbmUgZm91bmQ8L3A+XHJcbiAgICAgKTtcclxuICAgICBcclxufTsiLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBCVU5ETEVTX1FVRVJZLCBGRUVEU19RVUVSWSB9IGZyb20gXCIuLi91dGlscy9hcGkvZ3JhcGhxbC9xdWVyaWVzXCI7XHJcbmltcG9ydCB7IEJ1bmRsZU9iamVjdCwgRmVlZE9iamVjdCwgSXRlbVR5cGUsIFNlbGVjdGVkRmVlZFN0YXRlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzXCJcclxuaW1wb3J0IHsgTm90aWZ5TG9hZGluZyB9IGZyb20gJy4vbm90aWZ5TG9hZGluZyc7XHJcbmltcG9ydCB7IE5vdGlmeUVycm9yIH0gZnJvbSBcIi4vbm90aWZ5RXJyb3JcIjtcclxuaW1wb3J0IHsgT25lTGlzdEl0ZW0gfSBmcm9tIFwiLi9vbmVMaXN0SXRlbVwiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSXRlbUxpc3QgPSAoe1xyXG4gIHR5cGUsXHJcbiAgc2VsZWN0ZWQsXHJcbiAgc2V0U2VsZWN0ZWQsXHJcbiAgdXNlU2VsZWN0ZWQgPSBmYWxzZSxcclxuICBhbGxvd0VkaXRzXHJcbn0gOiB7XHJcbiAgICBcclxuICAgIHR5cGU6IEl0ZW1UeXBlO1xyXG4gICAgc2VsZWN0ZWQ/IDogU2VsZWN0ZWRGZWVkU3RhdGU7XHJcbiAgICBzZXRTZWxlY3RlZD86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFNlbGVjdGVkRmVlZFN0YXRlPj47XHJcbiAgICB1c2VTZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgICBhbGxvd0VkaXRzPzogYm9vbGVhbjtcclxuICBcclxuICB9KSA9PiB7XHJcbiAgICBjb25zdCBpc0ZlZWQgPSB0eXBlID09PSBJdGVtVHlwZS5GZWVkVHlwZTtcclxuICAgIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KFxyXG4gICAgICBpc0ZlZWQgPyBGRUVEU19RVUVSWSA6IEJVTkRMRVNfUVVFUlksXHJcbiAgICAgICk7XHJcblxyXG4gICAgY29uc29sZS5sb2cobG9hZGluZywgZXJyb3IsIGRhdGEpXHJcbiAgICBcclxuICAgIGNvbnN0IHsgZmVlZHMsIGJ1bmRsZXMgfSA9IGRhdGEgfHwge307XHJcbiAgICBjb25zdCBpdGVtTGlzdCA9IGlzRmVlZCA/IGZlZWRzIDogYnVuZGxlcztcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmKHVzZVNlbGVjdGVkICYmIGl0ZW1MaXN0ICYmIGl0ZW1MaXN0Lmxlbmd0aCA+IDAgJiYgc2VsZWN0ZWQuaWQgPT09IG51bGwpe1xyXG4gICAgICAgICAgY29uc3QgZmlyc3RJdGVtID0gaXRlbUxpc3RbMF1cclxuICAgICAgICAgIGF3YWl0IHNldFNlbGVjdGVkKHtcclxuICAgICAgICAgICAgaWQ6IGZpcnN0SXRlbS5pZCxcclxuICAgICAgICAgICAgZmVlZHM6IGlzRmVlZCA/IFtmaXJzdEl0ZW1dIDogZmlyc3RJdGVtWydmZWVkcyddLFxyXG4gICAgICAgICAgICBlZGl0TW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG5ld01vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSAoKTtcclxuICAgIH0pO1xyXG5cclxuICAgXHJcbiAgIFxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICA8Tm90aWZ5TG9hZGluZyAvPlxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIDxOb3RpZnlFcnJvciAvPlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtMyBtZDpncmlkLWNvbHMtMiBnYXAtNFwiPlxyXG4gICAgICAgIHtpdGVtTGlzdCAmJiBpdGVtTGlzdC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgaXRlbUxpc3QubWFwKChpdGVtOiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0KSA9PiAoXHJcbiAgICAgICAgICA8T25lTGlzdEl0ZW1cclxuICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICB1c2VTZWxlY3RlZD17dXNlU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgIGFsbG93RWRpdHM9e2FsbG93RWRpdHN9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkfVxyXG5cclxuICAgICAgICAgIC8+KSlcclxuICAgICAgICApIDogKDxwPk5vbmUgYXJlIHByZXNlbnQuIFdoeSBub3QgYWRkIG9uZT88L3A+KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICAgICAgKVxyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICB7IE5hdiB9ICBmcm9tICcuL25hdidcclxuXHJcbmV4cG9ydCBjb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VGZXRjaFVzZXIgfSBmcm9tICcuLi91dGlscy91c2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBOYXYgPSAoKSAgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VyLCBsb2FkaW5nIH0gPSB1c2VGZXRjaFVzZXIoKTtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2codXNlciwgbG9hZGluZyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBncmlkIGdyaWQtY29scy00XCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdzbTpoLTEwIGgtOCBwci0xJyBzcmM9XCIvbG9nby5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWNlbnRlciBibG9jayBob3ZlcjpibHVlLTcwMCBzbTp2aXNpYmxlIGludmlzaWJsZVwiPk5ld3NwcmlzbTwvYT5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyBmbGV4IGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic206bXItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2F2ZWQtYXJ0aWNsZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgdGV4dC1ibHVlLTcwMFwiPlNhdmVkIEFydGljbGVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzbTptci02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9idW5kbGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicC0yIHRleHQtY2VudGVyIGJsb2NrIGhvdmVyOmJsdWUtNzAwIHRleHQtYmx1ZS03MDBcIj5CdW5kbGVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic206bXItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmVlZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgdGV4dC1ibHVlLTcwMFwiPkZlZWRzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIHt1c2VyICYmICFsb2FkaW5nID8gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic206bXItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXBpL2xvZ291dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWNlbnRlciBibG9jayBob3ZlcjpibHVlLTcwMCB0ZXh0LWJsdWUtNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNtOm1yLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FwaS9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWNlbnRlciBibG9jayBob3ZlcjpibHVlLTcwMCB0ZXh0LWJsdWUtNzAwXCI+TG9naW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPC91bD5cclxuICAgIClcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IEVycm9yU2lnbiB9IGZyb20gXCIuL3N2Z1wiXHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZ5RXJyb3IgPSAoKSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleFwiPlxyXG4gICAgICAgICA8RXJyb3JTaWduIGNsYXNzTmFtZT1cImgtMTAgdy0xMCB0ZXh0LWdyYXktNTAwIG0tYXV0b1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IFdhaXRpbmdDbG9jayB9IGZyb20gXCIuL3N2Z1wiXHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZ5TG9hZGluZyA9ICgpID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBmbGV4XCI+XHJcbiAgICAgICAgIDxXYWl0aW5nQ2xvY2sgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdW5kbGVUYWcsIEZlZWRUYWcgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHtBY3Rpb25UeXBlLCBCYWRnZUZpZWxkTmFtZSwgQnVuZGxlT2JqZWN0LCBGZWVkT2JqZWN0fSBmcm9tICcuLi91dGlscy90eXBlcydcclxuXHJcbmV4cG9ydCBjb25zdCBPbmVCYWRnZSA9ICh7XHJcbiAgICBpdGVtLFxyXG4gICAgYWN0aW9uLFxyXG4gICAgY3VycmVudEl0ZW0sXHJcbiAgICBmaWVsZE5hbWUsXHJcbiAgICBzZXRJdGVtXHJcbiAgICAgfSA6IHtcclxuICAgaXRlbTogRmVlZFRhZyB8IEJ1bmRsZVRhZyB8IEZlZWRPYmplY3RcclxuICAgYWN0aW9uOiBBY3Rpb25UeXBlO1xyXG4gICBjdXJyZW50SXRlbT86IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3RcclxuICAgZmllbGROYW1lOiBCYWRnZUZpZWxkTmFtZTtcclxuICAgc2V0SXRlbT86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q+PlxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBjb2xvciA9IGZpZWxkTmFtZSA9PT0gQmFkZ2VGaWVsZE5hbWUudGFncyA/ICdibHVlJyA6IEJhZGdlRmllbGROYW1lLmZlZWRzID8gJ2dyZWVuJyA6ICdwdXJwbGUnXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBhbGlnbi1taWRkbGUganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1zbSBweS0yIHB4LTIgcm91bmRlZC1sZyBiZy0ke2NvbG9yfS0yMDAgYH0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LXhzIHRleHQtJHtjb2xvcn0tNjAwIHRleHQtY2VudGVyYH0+IHtpdGVtLm5hbWV9IDwvcD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlLCBCYWRnZUZpZWxkTmFtZSwgQnVuZGxlT2JqZWN0LCBGZWVkT2JqZWN0LCBJdGVtVHlwZSwgU2VsZWN0ZWRGZWVkU3RhdGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXNcIlxyXG5pbXBvcnQgeyBCYWRnZUxpc3QgfSBmcm9tICcuL2JhZGdlTGlzdCc7XHJcbmltcG9ydCB7IFByb2ZpbGVQaWMgfSBmcm9tICcuL3Byb2ZpbGVQaWMnO1xyXG5pbXBvcnQgeyBEb3VibGVBcnJvd0Rvd24sIERvdWJsZUFycm93UmlnaHQsIFF1ZXN0aW9uIH0gZnJvbSBcIi4vc3ZnXCI7XHJcbmV4cG9ydCBjb25zdCBPbmVMaXN0SXRlbSA9ICh7XHJcbiAgICBpdGVtLFxyXG4gICAgdHlwZSxcclxuICAgIHNlbGVjdGVkLFxyXG4gICAgc2V0U2VsZWN0ZWQsXHJcbiAgICB1c2VTZWxlY3RlZCA9IGZhbHNlLFxyXG4gICAgYWxsb3dFZGl0c1xyXG4gIH0gOiB7XHJcbiAgICAgIGl0ZW06IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3RcclxuICAgICAgdHlwZTogSXRlbVR5cGU7XHJcbiAgICAgIHNlbGVjdGVkPyA6IFNlbGVjdGVkRmVlZFN0YXRlO1xyXG4gICAgICBzZXRTZWxlY3RlZD86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFNlbGVjdGVkRmVlZFN0YXRlPj47XHJcbiAgICAgIHVzZVNlbGVjdGVkPzogYm9vbGVhbjtcclxuICAgICAgYWxsb3dFZGl0cz86IGJvb2xlYW47XHJcbiAgICBcclxuICAgIH0pICA9PiB7XHJcbiAgICBjb25zdCBpc0ZlZWQgPSB0eXBlID09PSBJdGVtVHlwZS5GZWVkVHlwZTtcclxuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB1c2VTZWxlY3RlZCAmJiBzZWxlY3RlZCAmJiBzZWxlY3RlZC5pZCA9PT0gaXRlbS5pZDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHtpc0ZlZWQgPyAnZmVlZCcgOiAnYnVuZGxlJyB9LyR7aXRlbS5pZH1gfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3ItcG9pbnRlciBncmlkIGdyaWQtY29scy02IHAtNCByb3VuZGVkLWxnXHJcbiAgICAgICAgICAgICAgICAgICAgJHt1c2VTZWxlY3RlZCA/ICdyb3VuZGVkLWItbm9uZScgOiAnYm9yZGVyLWItNCd9IFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10LTQgYm9yZGVyLWwtNCBib3JkZXItci00XHJcbiAgICAgICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPyBgYm9yZGVyLSR7aXNGZWVkID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdncmVlbicgOiAncHVycGxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LTQwMGAgOiAnYm9yZGVyLWdyYXktMzAwJ31cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57aXRlbS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFpc0ZlZWQgPyA8cD57aXRlbVsnZGVzY3JpcHRpb24nXX08L3A+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXgganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5hY3Rpb25zPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3Bhbi1jb2wtNiBweS0wIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmF1dGhvciA/IDxQcm9maWxlUGljIGF1dGhvcj17aXRlbS5hdXRob3J9Lz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTYgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5UYWdzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRzIGdyaWRzLWNvbHMtMiBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXtCYWRnZUZpZWxkTmFtZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICBhY3Rpb249e0FjdGlvblR5cGUuTk9ORX1cclxuICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02IHB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e2lzRmVlZCA/ICdCdW5kbGVzJyA6ICdGZWVkcyd9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Y2hpbGQgaXRlbXMuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt1c2VTZWxlY3RlZCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7aXNTZWxlY3RlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCByb3VuZGVkLWxnIHJvdW5kZWQtdC1ub25lIGFsaWduLW1pZGRsZSAke2lzU2VsZWN0ZWQgPyBgYmctJHtpc0ZlZWQgPyAnZ3JlZW4nIDogJ3B1cnBsZSd9LTQwMGAgOiBgYmctZ3JheS0zMDBgfSBwLTQgei0xMCB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RG91YmxlQXJyb3dEb3duIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC13aGl0ZS01MDAgbXItMiBtdC0xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BIaWRlICR7aXNGZWVkID8gJ0ZlZWQnIDogJ0J1bmRsZSd9IEFydGljbGVzYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZHM6IGlzRmVlZCA/IFtpdGVtXTogaXRlbVsnZmVlZHMnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld01vZGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCByb3VuZGVkLWxnIHJvdW5kZWQtdC1ub25lIGFsaWduLW1pZGRsZSAke2lzU2VsZWN0ZWQgPyBgYmctJHtpc0ZlZWQgPyAnZ3JlZW4nIDogJ3B1cnBsZSd9LTQwMGAgOiBgYmctZ3JheS0zMDBgfSBwLTQgei0xMCB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RG91YmxlQXJyb3dSaWdodCBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtd2hpdGUtNTAwIG1yLTIgbXQtMVwiPjwvRG91YmxlQXJyb3dSaWdodD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2AgU2hvdyAke2lzRmVlZCA/IGBGZWVkYCA6IGBCdW5kbGVgfSBBcnRpY2xlc2B9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gJy4vc3ZnJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZVBpYyA9ICh7IGF1dGhvciB9IDogeyBhdXRob3I6IFVzZXIgfSkgPT4gKFxyXG4gICAgPD5cclxuICAgICAgICB7YXV0aG9yLnBpY3R1cmUgPyAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBwLTAuNSB3LTggaC04IGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2F1dGhvci5waWN0dXJlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8UXVlc3Rpb24gY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LWdyYXktNTAwXCIgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxwPnthdXRob3Iubmlja25hbWV9PC9wPlxyXG4gICAgPC8+XHJcbikiLCJleHBvcnQgY29uc3QgV2FpdGluZ0Nsb2NrID0gKHsgY2xhc3NOYW1lIH0pID0+IChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgZD1cIk0xMiA4djRsMyAzbTYtM2E5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3JTaWduID0gKHsgY2xhc3NOYW1lIH0pID0+IChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgZD1cIk0xMiA5djJtMCA0aC4wMW0tNi45MzggNGgxMy44NTZjMS41NCAwIDIuNTAyLTEuNjY3IDEuNzMyLTNMMTMuNzMyIDRjLS43Ny0xLjMzMy0yLjY5NC0xLjMzMy0zLjQ2NCAwTDMuMzQgMTZjLS43NyAxLjMzMy4xOTIgMyAxLjczMiAzelwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRG91YmxlQXJyb3dEb3duID0gKHtjbGFzc05hbWV9KSA9PiAoXHJcbiAgICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgPlxyXG4gIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgZD1cIk0xOSAxM2wtNyA3LTctN20xNC04bC03IDctNy03XCIgLz5cclxuPC9zdmc+XHJcbilcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRG91YmxlQXJyb3dSaWdodCA9ICh7Y2xhc3NOYW1lfSkgPT4gKFxyXG4gICAgPHN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgID5cclxuICAgIDxwYXRoXHJcbiAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgIGQ9XCJNMTMgNWw3IDctNyA3TTUgNWw3IDctNyA3XCJcclxuICAgIC8+XHJcbjwvc3ZnPlxyXG4pXHJcbmV4cG9ydCBjb25zdCBQbHVzID0gKHtjbGFzc05hbWV9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgIGZpbGw9XCJub25lXCJcclxuICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgPlxyXG4gIDxwYXRoXHJcbiAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICBzdHJva2VXaWR0aD17Mn1cclxuICAgZD1cIk0xMiA0djE2bTgtOEg0XCJcclxuICAgLz5cclxuPC9zdmc+XHJcbik7XHJcbmV4cG9ydCBjb25zdCBNaW51cyA9ICh7Y2xhc3NOYW1lfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICBmaWxsPVwibm9uZVwiXHJcbiAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gID5cclxuICA8cGF0aFxyXG4gICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgIGQ9XCJNMjAgMTJINFwiXHJcbiAgIC8+XHJcbjwvc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFF1ZXN0aW9uID0gKHtjbGFzc05hbWV9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgIGZpbGw9XCJub25lXCJcclxuICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gIDxwYXRoXHJcbiAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICBzdHJva2VXaWR0aD17Mn1cclxuICAgZD1cIk04LjIyOCA5Yy41NDktMS4xNjUgMi4wMy0yIDMuNzcyLTIgMi4yMSAwIDQgMS4zNDMgNCAzIDAgMS40LTEuMjc4IDIuNTc1LTMuMDA2IDIuOTA3LS41NDIuMTA0LS45OTQuNTQtLjk5NCAxLjA5M20wIDNoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiXHJcbiAgIC8+XHJcbjwvc3ZnPlxyXG4pIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5leHBvcnQgY29uc3QgRkVFRF9UQUdfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IEZlZWRUYWdGcmFnbWVudCBvbiBGZWVkVGFnIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJVTkRMRV9UQUdfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IEJ1bmRsZVRhZ0ZyYWdtZW50IG9uIEJ1bmRsZVRhZyB7XG4gICAgaWRcbiAgICBuYW1lXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBBVVRIT1JfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IEF1dGhvckZyYWdtZW50IG9uIFVzZXIge1xuICAgIGlkXG4gICAgYXV0aDBcbiAgICBwaWN0dXJlXG4gICAgbmlja25hbWVcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExJS0VfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IExpa2VGcmFnbWVudCBvbiBMaWtlIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZFRURfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IEZlZWRGcmFnbWVudCBvbiBGZWVkIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgICB1cmxcbiAgICBsaWtlcyB7XG4gICAgICAuLi5BdXRob3JGcmFnbWVudFxuICAgIH1cbiAgICB0YWdzIHtcbiAgICAgIC4uLkZlZWRUYWdGcmFnbWVudFxuICAgIH1cbiAgICBhdXRob3Ige1xuICAgICAgLi4uQXV0aG9yRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtGRUVEX1RBR19GUkFHTUVOVH1cbiAgJHtBVVRIT1JfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgQlVORExFX0ZSQUdNRU5UID0gZ3FsYFxuICBmcmFnbWVudCBCdW5kbGVGcmFnbWVudCBvbiBCdW5kbGUge1xuICAgIGlkXG4gICAgbmFtZVxuICAgIGRlc2NyaXB0aW9uXG4gICAgdGFncyB7XG4gICAgICAuLi5CdW5kbGVUYWdGcmFnbWVudFxuICAgIH1cbiAgICBhdXRob3Ige1xuICAgICAgLi4uQXV0aG9yRnJhZ21lbnRcbiAgICB9XG4gICAgbGlrZXMge1xuICAgICAgLi4uQXV0aG9yRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtCVU5ETEVfVEFHX0ZSQUdNRU5UfVxuICAke0FVVEhPUl9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5UID0gZ3FsYFxuICBmcmFnbWVudCBTYXZlZEFydGljbGVGcmFnbWVudCBvbiBTYXZlZEFydGljbGUge1xuICAgIGlkXG4gICAgY29udGVudHNcbiAgICB1cmxcbiAgICBhdXRob3Ige1xuICAgICAgLi4uQXV0aG9yRnJhZ21lbnRcbiAgICB9XG4gICAgZmVlZCB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtBVVRIT1JfRlJBR01FTlR9XG4gICR7RkVFRF9GUkFHTUVOVH1cbmA7XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQge1xuICBBVVRIT1JfRlJBR01FTlQsXG4gIEJVTkRMRV9GUkFHTUVOVCxcbiAgQlVORExFX1RBR19GUkFHTUVOVCxcbiAgRkVFRF9GUkFHTUVOVCxcbiAgRkVFRF9UQUdfRlJBR01FTlQsXG4gIFNBVkVEX0FSVElDTEVfRlJBR01FTlQsXG59IGZyb20gJy4vZnJhZ21lbnRzJztcblxuXG5leHBvcnQgY29uc3QgQlVORExFU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkge1xuICAgIGJ1bmRsZXMge1xuICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIGZlZWRzIHtcbiAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuICAke0ZFRURfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgRkVFRFNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBmZWVkcyB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIGJ1bmRsZXMge1xuICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZJTkRfRkVFRFNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IGZpbmRGZWVkc1F1ZXJ5KCRkYXRhOiBGaW5kRmVlZHNJbnB1dCkge1xuICAgIGZpbmRGZWVkcyhkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICBidW5kbGVzIHtcbiAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGRUVEX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBmZWVkUXVlcnkoJGRhdGE6IEZlZWRJbnB1dCkge1xuICAgIGZlZWQoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIGZlZWRzIHtcbiAgICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJVTkRMRV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgYnVuZGxlUXVlcnkoJGRhdGE6IEJ1bmRsZUlucHV0KSB7XG4gICAgYnVuZGxlKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgZmVlZHMge1xuICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgYnVuZGxlcyB7XG4gICAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZJTkRfRkVFRF9UQUdTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBmaW5kRmVlZFRhZ3NRdWVyeSgkZGF0YTogRmluZEZlZWRUYWdzSW5wdXQpIHtcbiAgICBmaW5kRmVlZFRhZ3MoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRUYWdGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke0ZFRURfVEFHX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZJTkRfQlVORExFX1RBR1NfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IGZpbmRCdW5kbGVUYWdzUXVlcnkoJGRhdGE6IEZpbmRCdW5kbGVUYWdzSW5wdXQpIHtcbiAgICBmaW5kQnVuZGxlVGFncyhkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uQnVuZGxlVGFnRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtCVU5ETEVfVEFHX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNBVkVEX0FSVElDTEVTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBzYXZlZEFydGljbGVzUXVlcnkge1xuICAgIHNhdmVkQXJ0aWNsZXMge1xuICAgICAgLi4uU2F2ZWRBcnRpY2xlRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNBVkVEX0FSVElDTEVfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IHNhdmVkQXJ0aWNsZVF1ZXJ5KCRkYXRhOiBTYXZlZEFydGljbGVJbnB1dCkge1xuICAgIHNhdmVkQXJ0aWNsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uU2F2ZWRBcnRpY2xlRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IE1FX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBtZVF1ZXJ5IHtcbiAgICBtZSB7XG4gICAgICAuLi5BdXRob3JGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke0FVVEhPUl9GUkFHTUVOVH1cbmA7XG4iLCJpbXBvcnQgeyBCdW5kbGVUYWcsIEZlZWQsIEZlZWRUYWcsIFVzZXIgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcblxyXG5leHBvcnQgZW51bSBJdGVtVHlwZSB7XHJcbiAgICBCdW5kbGVUeXBlID0gJ0J1bmRsZVR5cGUnLFxyXG4gICAgRmVlZFR5cGUgPSAnRmVlZFR5cGUnXHJcbn1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBGZWVkT2JqZWN0ID0ge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHRhZ3M6IEZlZWRUYWdbXTtcclxuICAgIGJ1bmRsZXM/OiBCdW5kbGVPYmplY3RbXVxyXG4gICAgYXV0aG9yPzogVXNlcjtcclxuICAgIGxpa2VzPzogIFVzZXJbXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIEJ1bmRsZU9iamVjdCA9IHtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHRhZ3M6IEJ1bmRsZVRhZ1tdO1xyXG4gICAgZmVlZHM/OiBGZWVkT2JqZWN0W11cclxuICAgIGF1dGhvcj86IFVzZXI7XHJcbiAgICBsaWtlcz86ICBVc2VyW107XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNlbGVjdGVkRmVlZFN0YXRlID0ge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGZlZWRzOiBGZWVkW11cclxuICAgIGVkaXRNb2RlOiBib29sZWFuO1xyXG4gICAgbmV3TW9kZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFkZ2VGaWVsZE5hbWUge1xyXG4gICB0YWdzID0gJ3RhZ3MnLFxyXG4gICBmZWVkcyA9ICdmZWVkcycsXHJcbiAgIGJ1bmRsZXMgPSAnYnVuZGxlcydcclxufVxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIEFjdGlvblR5cGUge1xyXG4gICBBREQgPSAnQUREJyxcclxuICAgQ1JFQVRFID0gJ0NSRUFURScsXHJcbiAgIE5PTkUgPSAnTk9ORSdcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTmV3SXRlbVN0YXRlID0gIEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q7IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xyXG4gICAgX191c2VyOiBhbnlcclxufVxyXG5cclxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXIoY29va2llID0gJycpIHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fdXNlcikge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5fX3VzZXJcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgJy9hcGkvbWUnLFxyXG4gICAgY29va2llXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBjb29raWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgOiB7fVxyXG4gIClcclxuXHJcbiAgaWYgKCFyZXMub2spIHtcclxuICAgIGRlbGV0ZSB3aW5kb3cuX191c2VyXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHdpbmRvdy5fX3VzZXIgPSBqc29uXHJcbiAgfVxyXG4gIHJldHVybiBqc29uXHJcbn1cclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZldGNoVXNlcih7IHJlcXVpcmVkIH0gPSB7fSkge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKFxyXG4gICAgKCkgPT4gISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX191c2VyKVxyXG4gIClcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd2luZG93Ll9fdXNlciB8fCBudWxsXHJcbiAgfSlcclxuXHJcbiAgdXNlRWZmZWN0KFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBpZiAoIWxvYWRpbmcgJiYgdXNlcikge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgbGV0IGlzTW91bnRlZCA9IHRydWVcclxuXHJcbiAgICAgIGZldGNoVXNlcigpLnRoZW4oKHVzZXIpID0+IHtcclxuICAgICAgICAvLyBPbmx5IHNldCB0aGUgdXNlciBpZiB0aGUgY29tcG9uZW50IGlzIHN0aWxsIG1vdW50ZWRcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICAvLyBXaGVuIHRoZSB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gYnV0IGxvZ2luIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICBpZiAocmVxdWlyZWQgJiYgIXVzZXIpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FwaS9sb2dpbidcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRVc2VyKHVzZXIpXHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgaXNNb3VudGVkID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICByZXR1cm4geyB1c2VyLCBsb2FkaW5nIH1cclxufSIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=