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
/* harmony import */ var _utils_prepareUpdateObj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/prepareUpdateObj */ "./utils/prepareUpdateObj.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\newEditItem.tsx";






const NewEditItem = ({
  type
}) => {
  const isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_5__.ItemType.FeedType;
  const initialFeed = {
    name: "",
    url: "",
    tags: []
  };
  const initialBundle = {
    name: "",
    description: "",
    tags: []
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

  if (createLoading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_6__.WaitingClock, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 14
    }, undefined);
  }

  if (createError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_6__.ErrorSign, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 14
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: e => {
        e.preventDefault();
        const data = (0,_utils_prepareUpdateObj__WEBPACK_IMPORTED_MODULE_4__.prepareNewUpdateObj)(currentItem);
        console.log(data);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-12 gap-4 rounded-md border-4 my-4 py-2 px-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "col-span-12 text-lg font-medium py-2",
          children: isFeed ? "New Feed" : "New Bundle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6",
          children: inputFields.map(name => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: name
          }, name, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 19
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: `py-4 ${isFeed ? null : 'pt-28'}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: `py-4 ${`bg-${isFeed ? 'green' : 'purple'}-400 `} hover:bg-${isFeed ? 'green' : 'purple'}-700 text-white font-bold px-12 rounded`,
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 16
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 10
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
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
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _components_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/svg */ "./components/svg.tsx");
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/user */ "./utils/user.ts");
/* harmony import */ var _components_newEditItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/newEditItem */ "./components/newEditItem.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\pages\\bundles.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const BundlesPage = () => {
  const {
    user,
    loading
  } = (0,_utils_user__WEBPACK_IMPORTED_MODULE_6__.useFetchUser)();
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
        lineNumber: 26,
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
          lineNumber: 43,
          columnNumber: 29
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_svg__WEBPACK_IMPORTED_MODULE_5__.Plus, {
          className: `h-6 w-6 text-${selected.newMode ? 'gray' : 'blue'}-500 mt-4`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 31
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: `grid-cols-1 justify-start flex              text-lg font-medium py-4 text-${selected.newMode ? `gray` : `blue`}`,
          children: "New Bundle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 26
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, undefined) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: (selected.editMode || selected.newMode) && user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_newEditItem__WEBPACK_IMPORTED_MODULE_7__.NewEditItem, {
        type: _utils_types__WEBPACK_IMPORTED_MODULE_4__.ItemType.BundleType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 22
      }, undefined) : null
    }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_itemList__WEBPACK_IMPORTED_MODULE_2__.ItemList, {
      type: _utils_types__WEBPACK_IMPORTED_MODULE_4__.ItemType.BundleType,
      useSelected: true,
      allowEdits: true,
      selected: selected,
      setSelected: setSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
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

/***/ "./utils/prepareUpdateObj.ts":
/*!***********************************!*\
  !*** ./utils/prepareUpdateObj.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareNewUpdateObj": function() { return /* binding */ prepareNewUpdateObj; }
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const genNestedItems = currentItem => {
  const tags = "tags" in currentItem ? {
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

const prepareNewUpdateObj = currentItem => {
  const currentData = genNestedItems(currentItem);
  return _objectSpread(_objectSpread({}, currentData), {}, {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)()
  });
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

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL2JhZGdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9pdGVtTGlzdC50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvbmF2LnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL25ld0VkaXRJdGVtLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL25vdGlmeUVycm9yLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL25vdGlmeUxvYWRpbmcudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvb25lQmFkZ2UudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvb25lTGlzdEl0ZW0udHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvcHJvZmlsZVBpYy50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9zdmcudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL3BhZ2VzL2J1bmRsZXMudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL2FwaS9ncmFwaHFsL2ZyYWdtZW50cy50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcGkvZ3JhcGhxbC9tdXRhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vdXRpbHMvYXBpL2dyYXBocWwvcXVlcmllcy50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9wcmVwYXJlVXBkYXRlT2JqLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL3R5cGVzLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJ1dWlkXCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2lnbm9yZWR8QzpcXFVkZW15U3R1ZmZcXFByaXNtYVN0dWZmXFxuZXdzcHJpc21hXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQmFkZ2VMaXN0IiwiZmllbGROYW1lIiwiYWN0aW9uIiwiaXRlbSIsInNldEl0ZW0iLCJsZW5ndGgiLCJtYXAiLCJvbmVCYWRnZSIsIm5hbWUiLCJJdGVtTGlzdCIsInR5cGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlU2VsZWN0ZWQiLCJhbGxvd0VkaXRzIiwiaXNGZWVkIiwiSXRlbVR5cGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJGRUVEU19RVUVSWSIsIkJVTkRMRVNfUVVFUlkiLCJjb25zb2xlIiwibG9nIiwiZmVlZHMiLCJidW5kbGVzIiwiaXRlbUxpc3QiLCJ1c2VFZmZlY3QiLCJpZCIsImZpcnN0SXRlbSIsImVkaXRNb2RlIiwibmV3TW9kZSIsIkxheW91dCIsImNoaWxkcmVuIiwiTmF2IiwidXNlciIsInVzZUZldGNoVXNlciIsIk5ld0VkaXRJdGVtIiwiaW5pdGlhbEZlZWQiLCJ1cmwiLCJ0YWdzIiwiaW5pdGlhbEJ1bmRsZSIsImRlc2NyaXB0aW9uIiwiaW5pdGlhbFN0YXRlIiwiY3VycmVudEl0ZW0iLCJ1c2VTdGF0ZSIsImlucHV0RmllbGRzIiwiY3JlYXRlSXRlbU11dGF0aW9uIiwiY3JlYXRlTG9hZGluZyIsImNyZWF0ZUVycm9yIiwidXNlTXV0YXRpb24iLCJDUkVBVEVfRkVFRF9NVVRBVElPTiIsIkNSRUFURV9CVU5ETEVfTVVUQVRJT04iLCJlIiwicHJldmVudERlZmF1bHQiLCJwcmVwYXJlTmV3VXBkYXRlT2JqIiwiTm90aWZ5RXJyb3IiLCJOb3RpZnlMb2FkaW5nIiwiT25lQmFkZ2UiLCJjb2xvciIsIkJhZGdlRmllbGROYW1lIiwiT25lTGlzdEl0ZW0iLCJpc1NlbGVjdGVkIiwiYXV0aG9yIiwiQWN0aW9uVHlwZSIsIlByb2ZpbGVQaWMiLCJwaWN0dXJlIiwibmlja25hbWUiLCJXYWl0aW5nQ2xvY2siLCJjbGFzc05hbWUiLCJFcnJvclNpZ24iLCJEb3VibGVBcnJvd0Rvd24iLCJEb3VibGVBcnJvd1JpZ2h0IiwiUGx1cyIsIk1pbnVzIiwiUXVlc3Rpb24iLCJCdW5kbGVzUGFnZSIsImluaXRpYWxTZWxlY3RlZCIsInBlcnNpc3QiLCJjdXJyU3RhdGUiLCJCdW5kbGVUeXBlIiwiRkVFRF9UQUdfRlJBR01FTlQiLCJncWwiLCJCVU5ETEVfVEFHX0ZSQUdNRU5UIiwiQVVUSE9SX0ZSQUdNRU5UIiwiTElLRV9GUkFHTUVOVCIsIkZFRURfRlJBR01FTlQiLCJCVU5ETEVfRlJBR01FTlQiLCJTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5UIiwiTElLRV9CVU5ETEVfTVVUQVRJT04iLCJMSUtFX0ZFRURfTVVUQVRJT04iLCJVUERBVEVfQlVORExFX01VVEFUSU9OIiwiVVBEQVRFX0ZFRURfTVVUQVRJT04iLCJDUkVBVEVfU0FWRURfQVJUSUNMRV9NVVRBVElPTiIsIkRFTEVURV9CVU5ETEVfTVVUQVRJT04iLCJERUxFVEVfRkVFRF9NVVRBVElPTiIsIkRFTEVURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OIiwiRklORF9GRUVEU19RVUVSWSIsIkZFRURfUVVFUlkiLCJCVU5ETEVfUVVFUlkiLCJGSU5EX0ZFRURfVEFHU19RVUVSWSIsIkZJTkRfQlVORExFX1RBR1NfUVVFUlkiLCJTQVZFRF9BUlRJQ0xFU19RVUVSWSIsIlNBVkVEX0FSVElDTEVfUVVFUlkiLCJNRV9RVUVSWSIsImdlbk5lc3RlZEl0ZW1zIiwiY29ubmVjdCIsImZpbHRlciIsInVuZGVmaW5lZCIsImNyZWF0ZSIsIm8iLCJ1dWlkdjQiLCJfX3R5cGVuYW1lIiwibGlrZXMiLCJjbGVhbmVkSXRlbSIsImN1cnJlbnREYXRhIiwiZmV0Y2hVc2VyIiwiY29va2llIiwicmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwib2siLCJ3aW5kb3ciLCJfX3VzZXIiLCJqc29uIiwicmVxdWlyZWQiLCJzZXRMb2FkaW5nIiwic2V0VXNlciIsImlzTW91bnRlZCIsInRoZW4iLCJsb2NhdGlvbiIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFTyxNQUFNQSxTQUFTLEdBQUcsQ0FBQztBQUN0QkMsV0FEc0I7QUFFdEJDLFFBRnNCO0FBR3RCQyxNQUhzQjtBQUl0QkM7QUFKc0IsQ0FBRCxLQVduQjtBQUNGLFNBQU9ELElBQUksQ0FBQ0YsU0FBRCxDQUFKLElBQW1CRSxJQUFJLENBQUNGLFNBQUQsQ0FBSixDQUFnQkksTUFBaEIsR0FBeUIsQ0FBNUMsZ0JBQ0g7QUFBQSxjQUNDRixJQUFJLENBQUNGLFNBQUQsQ0FBSixDQUFnQkssR0FBaEIsQ0FBcUJDLFFBQUQsaUJBQ2pCLDhEQUFDLCtDQUFEO0FBRUksZUFBUyxFQUFFTixTQUZmO0FBR0ksVUFBSSxFQUFFTSxRQUhWO0FBSUksWUFBTSxFQUFFTCxNQUpaO0FBS0ksYUFBTyxFQUFFRSxPQUxiO0FBTUksaUJBQVcsRUFBRUQ7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Q0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9idW5kbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFjdGlvblR5cGUsIEJhZGdlRmllbGROYW1lLCBCdW5kbGVPYmplY3QsIEZlZWRPYmplY3QgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXNcIjtcclxuaW1wb3J0IHsgT25lQmFkZ2UgfSBmcm9tICcuL29uZUJhZGdlJztcclxuXHJcbmV4cG9ydCBjb25zdCBCYWRnZUxpc3QgPSAoe1xyXG4gICAgZmllbGROYW1lLFxyXG4gICAgYWN0aW9uLFxyXG4gICAgaXRlbSxcclxuICAgIHNldEl0ZW0sXHJcbn0gOiB7XHJcbiAgICBmaWVsZE5hbWU6IEJhZGdlRmllbGROYW1lO1xyXG4gICAgYWN0aW9uOiBBY3Rpb25UeXBlO1xyXG4gICAgaXRlbTogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdDtcclxuICAgIHNldEl0ZW0/OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0Pj47XHJcblxyXG59KSA9PiB7XHJcbiAgICByZXR1cm4gaXRlbVtmaWVsZE5hbWVdICYmIGl0ZW1bZmllbGROYW1lXS5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAge2l0ZW1bZmllbGROYW1lXS5tYXAoKG9uZUJhZGdlKSA9PiAoXHJcbiAgICAgICAgICAgIDxPbmVCYWRnZVxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHtpdGVtWydpZCddfS0ke29uZUJhZGdlLm5hbWV9fWB9XHJcbiAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e2ZpZWxkTmFtZX1cclxuICAgICAgICAgICAgICAgIGl0ZW09e29uZUJhZGdlfVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uPXthY3Rpb259XHJcbiAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgKSA6IChcclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+Tm9uZSBmb3VuZDwvcD5cclxuICAgICApO1xyXG4gICAgIFxyXG59OyIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IEJVTkRMRVNfUVVFUlksIEZFRURTX1FVRVJZIH0gZnJvbSBcIi4uL3V0aWxzL2FwaS9ncmFwaHFsL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgQnVuZGxlT2JqZWN0LCBGZWVkT2JqZWN0LCBJdGVtVHlwZSwgU2VsZWN0ZWRGZWVkU3RhdGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXNcIlxyXG5pbXBvcnQgeyBOb3RpZnlMb2FkaW5nIH0gZnJvbSAnLi9ub3RpZnlMb2FkaW5nJztcclxuaW1wb3J0IHsgTm90aWZ5RXJyb3IgfSBmcm9tIFwiLi9ub3RpZnlFcnJvclwiO1xyXG5pbXBvcnQgeyBPbmVMaXN0SXRlbSB9IGZyb20gXCIuL29uZUxpc3RJdGVtXCI7XHJcbmltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtTGlzdCA9ICh7XHJcbiAgdHlwZSxcclxuICBzZWxlY3RlZCxcclxuICBzZXRTZWxlY3RlZCxcclxuICB1c2VTZWxlY3RlZCA9IGZhbHNlLFxyXG4gIGFsbG93RWRpdHNcclxufSA6IHtcclxuICAgIFxyXG4gICAgdHlwZTogSXRlbVR5cGU7XHJcbiAgICBzZWxlY3RlZD8gOiBTZWxlY3RlZEZlZWRTdGF0ZTtcclxuICAgIHNldFNlbGVjdGVkPzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248U2VsZWN0ZWRGZWVkU3RhdGU+PjtcclxuICAgIHVzZVNlbGVjdGVkPzogYm9vbGVhbjtcclxuICAgIGFsbG93RWRpdHM/OiBib29sZWFuO1xyXG4gIFxyXG4gIH0pID0+IHtcclxuICAgIGNvbnN0IGlzRmVlZCA9IHR5cGUgPT09IEl0ZW1UeXBlLkZlZWRUeXBlO1xyXG4gICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoXHJcbiAgICAgIGlzRmVlZCA/IEZFRURTX1FVRVJZIDogQlVORExFU19RVUVSWSxcclxuICAgICAgKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhsb2FkaW5nLCBlcnJvciwgZGF0YSlcclxuICAgIFxyXG4gICAgY29uc3QgeyBmZWVkcywgYnVuZGxlcyB9ID0gZGF0YSB8fCB7fTtcclxuICAgIGNvbnN0IGl0ZW1MaXN0ID0gaXNGZWVkID8gZmVlZHMgOiBidW5kbGVzO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYodXNlU2VsZWN0ZWQgJiYgaXRlbUxpc3QgJiYgaXRlbUxpc3QubGVuZ3RoID4gMCAmJiBzZWxlY3RlZC5pZCA9PT0gbnVsbCl7XHJcbiAgICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSBpdGVtTGlzdFswXVxyXG4gICAgICAgICAgYXdhaXQgc2V0U2VsZWN0ZWQoe1xyXG4gICAgICAgICAgICBpZDogZmlyc3RJdGVtLmlkLFxyXG4gICAgICAgICAgICBmZWVkczogaXNGZWVkID8gW2ZpcnN0SXRlbV0gOiBmaXJzdEl0ZW1bJ2ZlZWRzJ10sXHJcbiAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgbmV3TW9kZTogZmFsc2UsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pICgpO1xyXG4gICAgfSk7XHJcblxyXG4gICBcclxuICAgXHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICAgIDxOb3RpZnlMb2FkaW5nIC8+XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gPE5vdGlmeUVycm9yIC8+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0zIG1kOmdyaWQtY29scy0yIGdhcC00XCI+XHJcbiAgICAgICAge2l0ZW1MaXN0ICYmIGl0ZW1MaXN0Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICBpdGVtTGlzdC5tYXAoKGl0ZW06IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3QpID0+IChcclxuICAgICAgICAgIDxPbmVMaXN0SXRlbVxyXG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIHVzZVNlbGVjdGVkPXt1c2VTZWxlY3RlZH1cclxuICAgICAgICAgICAgYWxsb3dFZGl0cz17YWxsb3dFZGl0c31cclxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XHJcblxyXG4gICAgICAgICAgLz4pKVxyXG4gICAgICAgICkgOiAoPHA+Tm9uZSBhcmUgcHJlc2VudC4gV2h5IG5vdCBhZGQgb25lPzwvcD4pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICAgICApXHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgIHsgTmF2IH0gIGZyb20gJy4vbmF2J1xyXG5cclxuZXhwb3J0IGNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgICAgICAgIDxOYXYgLz5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUZldGNoVXNlciB9IGZyb20gJy4uL3V0aWxzL3VzZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdiA9ICgpICA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXIsIGxvYWRpbmcgfSA9IHVzZUZldGNoVXNlcigpO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyLCBsb2FkaW5nKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGdyaWQgZ3JpZC1jb2xzLTRcIj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3NtOmgtMTAgaC04IHByLTEnIHNyYz1cIi9sb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicC0yIHRleHQtY2VudGVyIGJsb2NrIGhvdmVyOmJsdWUtNzAwIHNtOnZpc2libGUgaW52aXNpYmxlXCI+TmV3c3ByaXNtPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIGZsZXgganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgIHt1c2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzbTptci02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zYXZlZC1hcnRpY2xlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWNlbnRlciBibG9jayBob3ZlcjpibHVlLTcwMCB0ZXh0LWJsdWUtNzAwXCI+U2F2ZWQgQXJ0aWNsZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNtOm1yLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2J1bmRsZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgdGV4dC1ibHVlLTcwMFwiPkJ1bmRsZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzbTptci02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mZWVkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWNlbnRlciBibG9jayBob3ZlcjpibHVlLTcwMCB0ZXh0LWJsdWUtNzAwXCI+RmVlZHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAge3VzZXIgJiYgIWxvYWRpbmcgPyAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzbTptci02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hcGkvbG9nb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicC0yIHRleHQtY2VudGVyIGJsb2NrIGhvdmVyOmJsdWUtNzAwIHRleHQtYmx1ZS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic206bXItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXBpL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicC0yIHRleHQtY2VudGVyIGJsb2NrIGhvdmVyOmJsdWUtNzAwIHRleHQtYmx1ZS03MDBcIj5Mb2dpbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ1JFQVRFX0JVTkRMRV9NVVRBVElPTiwgQ1JFQVRFX0ZFRURfTVVUQVRJT04gfSBmcm9tICcuLi91dGlscy9hcGkvZ3JhcGhxbC9tdXRhdGlvbnMnO1xyXG5pbXBvcnQgeyBwcmVwYXJlTmV3VXBkYXRlT2JqIH0gZnJvbSAnLi4vdXRpbHMvcHJlcGFyZVVwZGF0ZU9iaic7XHJcbmltcG9ydCB7IEJ1bmRsZU9iamVjdCwgRmVlZE9iamVjdCwgSXRlbVR5cGUsIE5ld0l0ZW1TdGF0ZSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgRXJyb3JTaWduLCBXYWl0aW5nQ2xvY2sgfSBmcm9tICcuL3N2Zyc7XHJcblxyXG5leHBvcnQgY29uc3QgTmV3RWRpdEl0ZW0gPSAgICh7dHlwZX06IHt0eXBlOiBJdGVtVHlwZX0pID0+IHtcclxuICAgIGNvbnN0IGlzRmVlZCA9IHR5cGUgPT09IEl0ZW1UeXBlLkZlZWRUeXBlXHJcbiAgICBjb25zdCBpbml0aWFsRmVlZDogRmVlZE9iamVjdCA9IHtuYW1lOiBcIlwiLCB1cmw6IFwiXCIsIHRhZ3M6IFtdfTtcclxuICAgIGNvbnN0IGluaXRpYWxCdW5kbGU6IEJ1bmRsZU9iamVjdCA9IHtuYW1lOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiwgdGFnczogW119O1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlOiBOZXdJdGVtU3RhdGUgPSBpc0ZlZWQgPyBpbml0aWFsRmVlZCA6IGluaXRpYWxCdW5kbGU7XHJcbiAgICBjb25zdCBbY3VycmVudEl0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGU8TmV3SXRlbVN0YXRlPihpbml0aWFsU3RhdGUpXHJcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IGlzRmVlZCA/IFsnbmFtZScsICd1cmwnXSA6IFsnbmFtZScsICdkZXNjcmlwdGlvbiddO1xyXG5cclxuICAgY29uc3QgWyBjcmVhdGVJdGVtTXV0YXRpb24sIHsgbG9hZGluZzogY3JlYXRlTG9hZGluZywgZXJyb3I6IGNyZWF0ZUVycm9yIH0gXSAgPSB1c2VNdXRhdGlvbihpc0ZlZWQgPyBDUkVBVEVfRkVFRF9NVVRBVElPTiA6IENSRUFURV9CVU5ETEVfTVVUQVRJT04pO1xyXG5cclxuICAgaWYoY3JlYXRlTG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPFdhaXRpbmdDbG9jayBjbGFzc05hbWU9XCJteS0yMCBoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG9cIi8+XHJcbiAgIH0gIFxyXG4gICBpZihjcmVhdGVFcnJvcikge1xyXG4gICAgICByZXR1cm4gPEVycm9yU2lnbiBjbGFzc05hbWU9XCJteS0yMCBoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG9cIi8+XHJcbiAgIH0gXHJcbiAgIFxyXG4gICByZXR1cm4gKFxyXG4gICAgIDw+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIGNvbnN0IGRhdGEgPSBwcmVwYXJlTmV3VXBkYXRlT2JqKGN1cnJlbnRJdGVtKVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICB9fSA+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTQgcm91bmRlZC1tZCBib3JkZXItNCBteS00IHB5LTIgcHgtNFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgdGV4dC1sZyBmb250LW1lZGl1bSBweS0yXCI+XHJcbiAgICAgICAgICAgICAgIHtpc0ZlZWQgPyBcIk5ldyBGZWVkXCIgOiBcIk5ldyBCdW5kbGVcIn1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02XCI+XHJcbiAgICAgICAgICAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHAga2V5PXtuYW1lfT57bmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BweS00ICR7aXNGZWVkID8gbnVsbCA6ICdwdC0yOCd9YH0+XHJcbiAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2BweS00ICR7YGJnLSR7aXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnfS00MDAgYH0gaG92ZXI6YmctJHtcclxuICAgICAgICAgICAgICAgaXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnXHJcbiAgICAgICAgICAgICAgIH0tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB4LTEyIHJvdW5kZWRgfSB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgPC9mb3JtPlxyXG4gICAgIDwvPlxyXG4gICApXHJcbn1cclxuIiwiaW1wb3J0IHsgRXJyb3JTaWduIH0gZnJvbSBcIi4vc3ZnXCJcclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZnlFcnJvciA9ICgpID0+IHtcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBmbGV4XCI+XHJcbiAgICAgICAgIDxFcnJvclNpZ24gY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgV2FpdGluZ0Nsb2NrIH0gZnJvbSBcIi4vc3ZnXCJcclxuXHJcbmV4cG9ydCBjb25zdCBOb3RpZnlMb2FkaW5nID0gKCkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXhcIj5cclxuICAgICAgICAgPFdhaXRpbmdDbG9jayBjbGFzc05hbWU9XCJoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG9cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1bmRsZVRhZywgRmVlZFRhZyB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5pbXBvcnQge0FjdGlvblR5cGUsIEJhZGdlRmllbGROYW1lLCBCdW5kbGVPYmplY3QsIEZlZWRPYmplY3R9IGZyb20gJy4uL3V0aWxzL3R5cGVzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IE9uZUJhZGdlID0gKHtcclxuICAgIGl0ZW0sXHJcbiAgICBhY3Rpb24sXHJcbiAgICBjdXJyZW50SXRlbSxcclxuICAgIGZpZWxkTmFtZSxcclxuICAgIHNldEl0ZW1cclxuICAgICB9IDoge1xyXG4gICBpdGVtOiBGZWVkVGFnIHwgQnVuZGxlVGFnIHwgRmVlZE9iamVjdFxyXG4gICBhY3Rpb246IEFjdGlvblR5cGU7XHJcbiAgIGN1cnJlbnRJdGVtPzogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdFxyXG4gICBmaWVsZE5hbWU6IEJhZGdlRmllbGROYW1lO1xyXG4gICBzZXRJdGVtPzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248RmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdD4+XHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGNvbG9yID0gZmllbGROYW1lID09PSBCYWRnZUZpZWxkTmFtZS50YWdzID8gJ2JsdWUnIDogQmFkZ2VGaWVsZE5hbWUuZmVlZHMgPyAnZ3JlZW4nIDogJ3B1cnBsZSdcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXNtIHB5LTIgcHgtMiByb3VuZGVkLWxnIGJnLSR7Y29sb3J9LTIwMCBgfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHRleHQteHMgdGV4dC0ke2NvbG9yfS02MDAgdGV4dC1jZW50ZXJgfT4ge2l0ZW0ubmFtZX0gPC9wPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFjdGlvblR5cGUsIEJhZGdlRmllbGROYW1lLCBCdW5kbGVPYmplY3QsIEZlZWRPYmplY3QsIEl0ZW1UeXBlLCBTZWxlY3RlZEZlZWRTdGF0ZSB9IGZyb20gXCIuLi91dGlscy90eXBlc1wiXHJcbmltcG9ydCB7IEJhZGdlTGlzdCB9IGZyb20gJy4vYmFkZ2VMaXN0JztcclxuaW1wb3J0IHsgUHJvZmlsZVBpYyB9IGZyb20gJy4vcHJvZmlsZVBpYyc7XHJcbmltcG9ydCB7IERvdWJsZUFycm93RG93biwgRG91YmxlQXJyb3dSaWdodCwgUXVlc3Rpb24gfSBmcm9tIFwiLi9zdmdcIjtcclxuZXhwb3J0IGNvbnN0IE9uZUxpc3RJdGVtID0gKHtcclxuICAgIGl0ZW0sXHJcbiAgICB0eXBlLFxyXG4gICAgc2VsZWN0ZWQsXHJcbiAgICBzZXRTZWxlY3RlZCxcclxuICAgIHVzZVNlbGVjdGVkID0gZmFsc2UsXHJcbiAgICBhbGxvd0VkaXRzXHJcbiAgfSA6IHtcclxuICAgICAgaXRlbTogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdFxyXG4gICAgICB0eXBlOiBJdGVtVHlwZTtcclxuICAgICAgc2VsZWN0ZWQ/IDogU2VsZWN0ZWRGZWVkU3RhdGU7XHJcbiAgICAgIHNldFNlbGVjdGVkPzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248U2VsZWN0ZWRGZWVkU3RhdGU+PjtcclxuICAgICAgdXNlU2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gICAgICBhbGxvd0VkaXRzPzogYm9vbGVhbjtcclxuICAgIFxyXG4gICAgfSkgID0+IHtcclxuICAgIGNvbnN0IGlzRmVlZCA9IHR5cGUgPT09IEl0ZW1UeXBlLkZlZWRUeXBlO1xyXG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHVzZVNlbGVjdGVkICYmIHNlbGVjdGVkICYmIHNlbGVjdGVkLmlkID09PSBpdGVtLmlkO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke2lzRmVlZCA/ICdmZWVkJyA6ICdidW5kbGUnIH0vJHtpdGVtLmlkfWB9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvci1wb2ludGVyIGdyaWQgZ3JpZC1jb2xzLTYgcC00IHJvdW5kZWQtbGdcclxuICAgICAgICAgICAgICAgICAgICAke3VzZVNlbGVjdGVkID8gJ3JvdW5kZWQtYi1ub25lJyA6ICdib3JkZXItYi00J30gXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXQtNCBib3JkZXItbC00IGJvcmRlci1yLTRcclxuICAgICAgICAgICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA/IGBib3JkZXItJHtpc0ZlZWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dyZWVuJyA6ICdwdXJwbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0tNDAwYCA6ICdib3JkZXItZ3JheS0zMDAnfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntpdGVtLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICB7IWlzRmVlZCA/IDxwPntpdGVtWydkZXNjcmlwdGlvbiddfTwvcD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPmFjdGlvbnM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFuLWNvbC02IHB5LTAgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uYXV0aG9yID8gPFByb2ZpbGVQaWMgYXV0aG9yPXtpdGVtLmF1dGhvcn0vPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNiBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlRhZ3M8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZHMgZ3JpZHMtY29scy0yIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e0JhZGdlRmllbGROYW1lLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17QWN0aW9uVHlwZS5OT05FfVxyXG4gICAgICAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTYgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57aXNGZWVkID8gJ0J1bmRsZXMnIDogJ0ZlZWRzJ308L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5jaGlsZCBpdGVtcy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3VzZVNlbGVjdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtpc1NlbGVjdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHJvdW5kZWQtbGcgcm91bmRlZC10LW5vbmUgYWxpZ24tbWlkZGxlICR7aXNTZWxlY3RlZCA/IGBiZy0ke2lzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ30tNDAwYCA6IGBiZy1ncmF5LTMwMGB9IHAtNCB6LTEwIHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXJgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEb3VibGVBcnJvd0Rvd24gY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LXdoaXRlLTUwMCBtci0yIG10LTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YEhpZGUgJHtpc0ZlZWQgPyAnRmVlZCcgOiAnQnVuZGxlJ30gQXJ0aWNsZXNgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkczogaXNGZWVkID8gW2l0ZW1dOiBpdGVtWydmZWVkcyddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TW9kZTogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHJvdW5kZWQtbGcgcm91bmRlZC10LW5vbmUgYWxpZ24tbWlkZGxlICR7aXNTZWxlY3RlZCA/IGBiZy0ke2lzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ30tNDAwYCA6IGBiZy1ncmF5LTMwMGB9IHAtNCB6LTEwIHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXJgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEb3VibGVBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC13aGl0ZS01MDAgbXItMiBtdC0xXCI+PC9Eb3VibGVBcnJvd1JpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YCBTaG93ICR7aXNGZWVkID8gYEZlZWRgIDogYEJ1bmRsZWB9IEFydGljbGVzYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIClcclxufSIsImltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSAnLi9zdmcnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlUGljID0gKHsgYXV0aG9yIH0gOiB7IGF1dGhvcjogVXNlciB9KSA9PiAoXHJcbiAgICA8PlxyXG4gICAgICAgIHthdXRob3IucGljdHVyZSA/IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHAtMC41IHctOCBoLTggYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICAgIHNyYz17YXV0aG9yLnBpY3R1cmV9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxRdWVzdGlvbiBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtZ3JheS01MDBcIiAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPHA+e2F1dGhvci5uaWNrbmFtZX08L3A+XHJcbiAgICA8Lz5cclxuKSIsImV4cG9ydCBjb25zdCBXYWl0aW5nQ2xvY2sgPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICBkPVwiTTEyIDh2NGwzIDNtNi0zYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBFcnJvclNpZ24gPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICBkPVwiTTEyIDl2Mm0wIDRoLjAxbS02LjkzOCA0aDEzLjg1NmMxLjU0IDAgMi41MDItMS42NjcgMS43MzItM0wxMy43MzIgNGMtLjc3LTEuMzMzLTIuNjk0LTEuMzMzLTMuNDY0IDBMMy4zNCAxNmMtLjc3IDEuMzMzLjE5MiAzIDEuNzMyIDN6XCJcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEb3VibGVBcnJvd0Rvd24gPSAoe2NsYXNzTmFtZX0pID0+IChcclxuICAgIDxzdmdcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICA+XHJcbiAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICBkPVwiTTE5IDEzbC03IDctNy03bTE0LThsLTcgNy03LTdcIiAvPlxyXG48L3N2Zz5cclxuKVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEb3VibGVBcnJvd1JpZ2h0ID0gKHtjbGFzc05hbWV9KSA9PiAoXHJcbiAgICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgPlxyXG4gICAgPHBhdGhcclxuICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgZD1cIk0xMyA1bDcgNy03IDdNNSA1bDcgNy03IDdcIlxyXG4gICAgLz5cclxuPC9zdmc+XHJcbilcclxuZXhwb3J0IGNvbnN0IFBsdXMgPSAoe2NsYXNzTmFtZX0pID0+IChcclxuICA8c3ZnXHJcbiAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgZmlsbD1cIm5vbmVcIlxyXG4gICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICA+XHJcbiAgPHBhdGhcclxuICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICBkPVwiTTEyIDR2MTZtOC04SDRcIlxyXG4gICAvPlxyXG48L3N2Zz5cclxuKTtcclxuZXhwb3J0IGNvbnN0IE1pbnVzID0gKHtjbGFzc05hbWV9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgIGZpbGw9XCJub25lXCJcclxuICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgPlxyXG4gIDxwYXRoXHJcbiAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICBzdHJva2VXaWR0aD17Mn1cclxuICAgZD1cIk0yMCAxMkg0XCJcclxuICAgLz5cclxuPC9zdmc+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgUXVlc3Rpb24gPSAoe2NsYXNzTmFtZX0pID0+IChcclxuICA8c3ZnXHJcbiAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgZmlsbD1cIm5vbmVcIlxyXG4gICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgPHBhdGhcclxuICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICBkPVwiTTguMjI4IDljLjU0OS0xLjE2NSAyLjAzLTIgMy43NzItMiAyLjIxIDAgNCAxLjM0MyA0IDMgMCAxLjQtMS4yNzggMi41NzUtMy4wMDYgMi45MDctLjU0Mi4xMDQtLjk5NC41NC0uOTk0IDEuMDkzbTAgM2guMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJcclxuICAgLz5cclxuPC9zdmc+XHJcbikiLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSXRlbUxpc3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9pdGVtTGlzdFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxyXG5pbXBvcnQgeyBJdGVtVHlwZSwgU2VsZWN0ZWRGZWVkU3RhdGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXNcIjtcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xyXG5pbXBvcnQgeyBNaW51cywgUGx1cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3N2Z1wiXHJcbmltcG9ydCB7IHVzZUZldGNoVXNlciB9IGZyb20gJy4uL3V0aWxzL3VzZXInO1xyXG5pbXBvcnQgeyBOZXdFZGl0SXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbmV3RWRpdEl0ZW0nO1xyXG5cclxuXHJcblxyXG5jb25zdCBCdW5kbGVzUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciwgbG9hZGluZyB9ID0gdXNlRmV0Y2hVc2VyKCk7XHJcbiAgICBjb25zdCBpbml0aWFsU2VsZWN0ZWQ6IFNlbGVjdGVkRmVlZFN0YXRlID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIGZlZWRzOiBbXSxcclxuICAgICAgICBlZGl0TW9kZTogZmFsc2UsXHJcbiAgICAgICAgbmV3TW9kZTogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgICAgY29uc3QgWyBzZWxlY3RlZCwgc2V0U2VsZWN0ZWQgXSA9IHVzZVN0YXRlKGluaXRpYWxTZWxlY3RlZCk7XHJcbiAgICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJncmlkLWNvbHMtMSBqdXN0aWZ5LXN0YXJ0IGZsZXggdGV4dC1sciBmb250LW1lZGl1bSBweS00XCI+XHJcbiAgICAgICAgICAgICAgICBCdW5kbGVzIFBhZ2VcclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICB7dXNlciA/IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKChjdXJyU3RhdGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN1cnJTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TW9kZTogIWN1cnJTdGF0ZS5uZXdNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0TW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBncmlkLWNvbHMtMSBqdXN0aWZ5LWVuZCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQubmV3TW9kZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNaW51c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTYgdy02IHRleHQtJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQubmV3TW9kZSA/ICdncmF5JyA6ICdibHVlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfS01MDAgbXQtNGB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtNiB3LTYgdGV4dC0ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLm5ld01vZGUgPyAnZ3JheScgOiAnYmx1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS01MDAgbXQtNGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxoM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JpZC1jb2xzLTEganVzdGlmeS1zdGFydCBmbGV4ICAgICAgICAgICAgICB0ZXh0LWxnIGZvbnQtbWVkaXVtIHB5LTQgdGV4dC0ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQubmV3TW9kZSA/IGBncmF5YCA6IGBibHVlYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV3IEJ1bmRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgeyggc2VsZWN0ZWQuZWRpdE1vZGUgfHwgc2VsZWN0ZWQubmV3TW9kZSkgJiYgdXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgPE5ld0VkaXRJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtJdGVtVHlwZS5CdW5kbGVUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz4gKSA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPEl0ZW1MaXN0XHJcbiAgICAgICAgICAgICB0eXBlPXtJdGVtVHlwZS5CdW5kbGVUeXBlfVxyXG4gICAgICAgICAgICAgdXNlU2VsZWN0ZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICBhbGxvd0VkaXRzPXt0cnVlfVxyXG4gICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdW5kbGVzUGFnZTsiLCJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmV4cG9ydCBjb25zdCBGRUVEX1RBR19GUkFHTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgRmVlZFRhZ0ZyYWdtZW50IG9uIEZlZWRUYWcge1xuICAgIGlkXG4gICAgbmFtZVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQlVORExFX1RBR19GUkFHTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgQnVuZGxlVGFnRnJhZ21lbnQgb24gQnVuZGxlVGFnIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFVVEhPUl9GUkFHTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgQXV0aG9yRnJhZ21lbnQgb24gVXNlciB7XG4gICAgaWRcbiAgICBhdXRoMFxuICAgIHBpY3R1cmVcbiAgICBuaWNrbmFtZVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTElLRV9GUkFHTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgTGlrZUZyYWdtZW50IG9uIExpa2Uge1xuICAgIGlkXG4gICAgbmFtZVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRkVFRF9GUkFHTUVOVCA9IGdxbGBcbiAgZnJhZ21lbnQgRmVlZEZyYWdtZW50IG9uIEZlZWQge1xuICAgIGlkXG4gICAgbmFtZVxuICAgIHVybFxuICAgIGxpa2VzIHtcbiAgICAgIC4uLkF1dGhvckZyYWdtZW50XG4gICAgfVxuICAgIHRhZ3Mge1xuICAgICAgLi4uRmVlZFRhZ0ZyYWdtZW50XG4gICAgfVxuICAgIGF1dGhvciB7XG4gICAgICAuLi5BdXRob3JGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke0ZFRURfVEFHX0ZSQUdNRU5UfVxuICAke0FVVEhPUl9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCVU5ETEVfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IEJ1bmRsZUZyYWdtZW50IG9uIEJ1bmRsZSB7XG4gICAgaWRcbiAgICBuYW1lXG4gICAgZGVzY3JpcHRpb25cbiAgICB0YWdzIHtcbiAgICAgIC4uLkJ1bmRsZVRhZ0ZyYWdtZW50XG4gICAgfVxuICAgIGF1dGhvciB7XG4gICAgICAuLi5BdXRob3JGcmFnbWVudFxuICAgIH1cbiAgICBsaWtlcyB7XG4gICAgICAuLi5BdXRob3JGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9UQUdfRlJBR01FTlR9XG4gICR7QVVUSE9SX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNBVkVEX0FSVElDTEVfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IFNhdmVkQXJ0aWNsZUZyYWdtZW50IG9uIFNhdmVkQXJ0aWNsZSB7XG4gICAgaWRcbiAgICBjb250ZW50c1xuICAgIHVybFxuICAgIGF1dGhvciB7XG4gICAgICAuLi5BdXRob3JGcmFnbWVudFxuICAgIH1cbiAgICBmZWVkIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke0FVVEhPUl9GUkFHTUVOVH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuYDtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IEJVTkRMRV9GUkFHTUVOVCwgRkVFRF9GUkFHTUVOVCwgU0FWRURfQVJUSUNMRV9GUkFHTUVOVCB9IGZyb20gJy4vZnJhZ21lbnRzJztcblxuZXhwb3J0IGNvbnN0IExJS0VfQlVORExFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBsaWtlQnVuZGxlTXV0YXRpb24oJGRhdGE6IExpa2VCdW5kbGVJbnB1dCkge1xuICAgIGxpa2VCdW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICBmZWVkcyB7XG4gICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IExJS0VfRkVFRF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gbGlrZUZlZWRNdXRhdGlvbigkZGF0YTogTGlrZUZlZWRJbnB1dCkge1xuICAgIGxpa2VGZWVkKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIGJ1bmRsZXMge1xuICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9CVU5ETEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZUJ1bmRsZU11dGF0aW9uKCRkYXRhOiBCdW5kbGVDcmVhdGVJbnB1dCkge1xuICAgIGNyZWF0ZUJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIGZlZWRzIHtcbiAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIGJ1bmRsZXMge1xuICAgICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5leHBvcnQgY29uc3QgVVBEQVRFX0JVTkRMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gdXBkYXRlQnVuZGxlTXV0YXRpb24oJGRhdGE6IEJ1bmRsZVVwZGF0ZUlucHV0KSB7XG4gICAgdXBkYXRlQnVuZGxlKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgZmVlZHMge1xuICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgYnVuZGxlcyB7XG4gICAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9GRUVEX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVGZWVkTXV0YXRpb24oJGRhdGE6IEZlZWRDcmVhdGVJbnB1dCkge1xuICAgIGNyZWF0ZUZlZWQoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIGZlZWRzIHtcbiAgICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IFVQREFURV9GRUVEX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiB1cGRhdGVGZWVkTXV0YXRpb24oJGRhdGE6IEZlZWRVcGRhdGVJbnB1dCkge1xuICAgIHVwZGF0ZUZlZWQoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIGZlZWRzIHtcbiAgICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVTYXZlZEFydGljbGVNdXRhdGlvbigkZGF0YTogU2F2ZWRBcnRpY2xlQ3JlYXRlSW5wdXQpIHtcbiAgICBjcmVhdGVTYXZlZEFydGljbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLlNhdmVkQXJ0aWNsZUZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7U0FWRURfQVJUSUNMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfQlVORExFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVCdW5kbGVNdXRhdGlvbigkZGF0YTogQnVuZGxlSW5wdXQpIHtcbiAgICBkZWxldGVCdW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIGlkXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0ZFRURfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGRlbGV0ZUZlZWRNdXRhdGlvbigkZGF0YTogRmVlZElucHV0KSB7XG4gICAgZGVsZXRlRmVlZChkYXRhOiAkZGF0YSkge1xuICAgICAgaWRcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfU0FWRURfQVJUSUNMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gZGVsZXRlU2F2ZWRBcnRpY2xlTXV0YXRpb24oJGRhdGE6IERlbGV0ZVNhdmVkQXJ0aWNsZUlucHV0KSB7XG4gICAgZGVsZXRlU2F2ZWRBcnRpY2xlKGRhdGE6ICRkYXRhKSB7XG4gICAgICBpZFxuICAgICAgdXJsXG4gICAgfVxuICB9XG5gO1xuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHtcbiAgQVVUSE9SX0ZSQUdNRU5ULFxuICBCVU5ETEVfRlJBR01FTlQsXG4gIEJVTkRMRV9UQUdfRlJBR01FTlQsXG4gIEZFRURfRlJBR01FTlQsXG4gIEZFRURfVEFHX0ZSQUdNRU5ULFxuICBTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5ULFxufSBmcm9tICcuL2ZyYWdtZW50cyc7XG5cblxuZXhwb3J0IGNvbnN0IEJVTkRMRVNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBidW5kbGVzIHtcbiAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICBmZWVkcyB7XG4gICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZFRURTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgZmVlZHMge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICBidW5kbGVzIHtcbiAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGSU5EX0ZFRURTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBmaW5kRmVlZHNRdWVyeSgkZGF0YTogRmluZEZlZWRzSW5wdXQpIHtcbiAgICBmaW5kRmVlZHMoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgRkVFRF9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgZmVlZFF1ZXJ5KCRkYXRhOiBGZWVkSW5wdXQpIHtcbiAgICBmZWVkKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIGJ1bmRsZXMge1xuICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgICBmZWVkcyB7XG4gICAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCVU5ETEVfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IGJ1bmRsZVF1ZXJ5KCRkYXRhOiBCdW5kbGVJbnB1dCkge1xuICAgIGJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIGZlZWRzIHtcbiAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIGJ1bmRsZXMge1xuICAgICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGSU5EX0ZFRURfVEFHU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgZmluZEZlZWRUYWdzUXVlcnkoJGRhdGE6IEZpbmRGZWVkVGFnc0lucHV0KSB7XG4gICAgZmluZEZlZWRUYWdzKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkVGFnRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtGRUVEX1RBR19GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGSU5EX0JVTkRMRV9UQUdTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBmaW5kQnVuZGxlVGFnc1F1ZXJ5KCRkYXRhOiBGaW5kQnVuZGxlVGFnc0lucHV0KSB7XG4gICAgZmluZEJ1bmRsZVRhZ3MoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkJ1bmRsZVRhZ0ZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7QlVORExFX1RBR19GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTQVZFRF9BUlRJQ0xFU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgc2F2ZWRBcnRpY2xlc1F1ZXJ5IHtcbiAgICBzYXZlZEFydGljbGVzIHtcbiAgICAgIC4uLlNhdmVkQXJ0aWNsZUZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7U0FWRURfQVJUSUNMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTQVZFRF9BUlRJQ0xFX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBzYXZlZEFydGljbGVRdWVyeSgkZGF0YTogU2F2ZWRBcnRpY2xlSW5wdXQpIHtcbiAgICBzYXZlZEFydGljbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLlNhdmVkQXJ0aWNsZUZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7U0FWRURfQVJUSUNMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNRV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgbWVRdWVyeSB7XG4gICAgbWUge1xuICAgICAgLi4uQXV0aG9yRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtBVVRIT1JfRlJBR01FTlR9XG5gO1xuIiwiaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xyXG5cclxuXHJcbmNvbnN0IGdlbk5lc3RlZEl0ZW1zID0gKGN1cnJlbnRJdGVtKSA9PiB7XHJcbiAgICBjb25zdCB0YWdzID0gXHJcbiAgICBcInRhZ3NcIiBpbiBjdXJyZW50SXRlbSA/IHtcclxuICAgICAgICB0YWdzOiB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Q6IGN1cnJlbnRJdGVtLnRhZ3MubWFwKCh7IGlkIH0pID0+KHsgaWQgfSkpLmZpbHRlcigoeyBpZCB9KSA9PiBpZCAhPT0gdW5kZWZpbmVkKSxcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZTogY3VycmVudEl0ZW0udGFnc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IGlkIH0pID0+IGlkID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIC5tYXAoKG8pID0+ICh7IC4uLm8sIGlkOiB1dWlkdjQoKSB9KSksXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuICAgICA6IHt9O1xyXG5cclxuICAgICBjb25zdCBmZWVkcyA9XHJcbiAgICAgJ2ZlZWRzJyBpbiBjdXJyZW50SXRlbVxyXG4gICAgICAgPyB7XHJcbiAgICAgICAgICAgZmVlZHM6IHtcclxuICAgICAgICAgICAgIGNvbm5lY3Q6IGN1cnJlbnRJdGVtLmZlZWRzXHJcbiAgICAgICAgICAgICAgIC5tYXAoKHsgaWQgfSkgPT4gKHsgaWQgfSkpXHJcbiAgICAgICAgICAgICAgIC5maWx0ZXIoKHsgaWQgfSkgPT4gaWQgIT09IHVuZGVmaW5lZCksXHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgfVxyXG4gICAgICAgOiB7fTtcclxuXHJcbiAgICAgICBjb25zdCB7IF9fdHlwZW5hbWUsIGxpa2VzLCBhdXRob3IsIGJ1bmRsZXMsIC4uLmNsZWFuZWRJdGVtIH0gPSBjdXJyZW50SXRlbTtcclxuXHJcbiAgICAgICByZXR1cm4geyAuLi5jbGVhbmVkSXRlbSwgLi4udGFncywgLi4uZmVlZHMgfTtcclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHByZXBhcmVOZXdVcGRhdGVPYmogPSAoY3VycmVudEl0ZW0pID0+IHtcclxuICAgY29uc3QgY3VycmVudERhdGEgPSAgZ2VuTmVzdGVkSXRlbXMoY3VycmVudEl0ZW0pXHJcblxyXG4gICByZXR1cm4geyAuLi5jdXJyZW50RGF0YSwgIGlkOiB1dWlkdjQoKSB9IFxyXG59IiwiaW1wb3J0IHsgQnVuZGxlVGFnLCBGZWVkLCBGZWVkVGFnLCBVc2VyIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5cclxuZXhwb3J0IGVudW0gSXRlbVR5cGUge1xyXG4gICAgQnVuZGxlVHlwZSA9ICdCdW5kbGVUeXBlJyxcclxuICAgIEZlZWRUeXBlID0gJ0ZlZWRUeXBlJ1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgRmVlZE9iamVjdCA9IHtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICB0YWdzOiBGZWVkVGFnW107XHJcbiAgICBidW5kbGVzPzogQnVuZGxlT2JqZWN0W11cclxuICAgIGF1dGhvcj86IFVzZXI7XHJcbiAgICBsaWtlcz86ICBVc2VyW107XHJcbn1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBCdW5kbGVPYmplY3QgPSB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICB0YWdzOiBCdW5kbGVUYWdbXTtcclxuICAgIGZlZWRzPzogRmVlZE9iamVjdFtdXHJcbiAgICBhdXRob3I/OiBVc2VyO1xyXG4gICAgbGlrZXM/OiAgVXNlcltdO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTZWxlY3RlZEZlZWRTdGF0ZSA9IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBmZWVkczogRmVlZFtdXHJcbiAgICBlZGl0TW9kZTogYm9vbGVhbjtcclxuICAgIG5ld01vZGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhZGdlRmllbGROYW1lIHtcclxuICAgdGFncyA9ICd0YWdzJyxcclxuICAgZmVlZHMgPSAnZmVlZHMnLFxyXG4gICBidW5kbGVzID0gJ2J1bmRsZXMnXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZW51bSBBY3Rpb25UeXBlIHtcclxuICAgQUREID0gJ0FERCcsXHJcbiAgIENSRUFURSA9ICdDUkVBVEUnLFxyXG4gICBOT05FID0gJ05PTkUnXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE5ld0l0ZW1TdGF0ZSA9ICBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0OyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuaW50ZXJmYWNlIE15V2luZG93IGV4dGVuZHMgV2luZG93IHtcclxuICAgIF9fdXNlcjogYW55XHJcbn1cclxuXHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogTXlXaW5kb3c7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyKGNvb2tpZSA9ICcnKSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fX3VzZXIpIHtcclxuICAgIHJldHVybiB3aW5kb3cuX191c2VyXHJcbiAgfVxyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICcvYXBpL21lJyxcclxuICAgIGNvb2tpZVxyXG4gICAgICA/IHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgY29va2llLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIDoge31cclxuICApXHJcblxyXG4gIGlmICghcmVzLm9rKSB7XHJcbiAgICBkZWxldGUgd2luZG93Ll9fdXNlclxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB3aW5kb3cuX191c2VyID0ganNvblxyXG4gIH1cclxuICByZXR1cm4ganNvblxyXG59XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VGZXRjaFVzZXIoeyByZXF1aXJlZCB9ID0ge30pIHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShcclxuICAgICgpID0+ICEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fdXNlcilcclxuICApXHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdpbmRvdy5fX3VzZXIgfHwgbnVsbFxyXG4gIH0pXHJcblxyXG4gIHVzZUVmZmVjdChcclxuICAgICgpID0+IHtcclxuICAgICAgaWYgKCFsb2FkaW5nICYmIHVzZXIpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgIGxldCBpc01vdW50ZWQgPSB0cnVlXHJcblxyXG4gICAgICBmZXRjaFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgLy8gT25seSBzZXQgdGhlIHVzZXIgaWYgdGhlIGNvbXBvbmVudCBpcyBzdGlsbCBtb3VudGVkXHJcbiAgICAgICAgaWYgKGlzTW91bnRlZCkge1xyXG4gICAgICAgICAgLy8gV2hlbiB0aGUgdXNlciBpcyBub3QgbG9nZ2VkIGluIGJ1dCBsb2dpbiBpcyByZXF1aXJlZFxyXG4gICAgICAgICAgaWYgKHJlcXVpcmVkICYmICF1c2VyKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hcGkvbG9naW4nXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0VXNlcih1c2VyKVxyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGlzTW91bnRlZCA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgICBbXVxyXG4gIClcclxuXHJcbiAgcmV0dXJuIHsgdXNlciwgbG9hZGluZyB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=