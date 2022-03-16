exports.id = "components_itemList_tsx-components_layout_tsx-components_newEditItem_tsx";
exports.ids = ["components_itemList_tsx-components_layout_tsx-components_newEditItem_tsx"];
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
/* harmony import */ var _badgeList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badgeList */ "./components/badgeList.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");


var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\newEditItem.tsx";







const NewEditItem = ({
  type,
  selected,
  setSelected
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

  if (createLoading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_7__.WaitingClock, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 14
    }, undefined);
  }

  if (createError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_7__.ErrorSign, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
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
          lineNumber: 44,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6",
          children: inputFields.map(name => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: name
          }, name, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 19
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "py-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "black py-2",
              children: "Tags:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 16
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "grid grid-cols-3 gap-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_badgeList__WEBPACK_IMPORTED_MODULE_6__.BadgeList, {
                fieldName: _utils_types__WEBPACK_IMPORTED_MODULE_5__.BadgeFieldName.tags,
                setItem: setItem,
                item: currentItem,
                action: _utils_types__WEBPACK_IMPORTED_MODULE_5__.ActionType.CREATE
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 16
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: `py-4 ${isFeed ? null : 'pt-28'}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: `py-4 ${`bg-${isFeed ? 'green' : 'purple'}-400 `} hover:bg-${isFeed ? 'green' : 'purple'}-700 text-white font-bold px-12 rounded`,
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 16
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 10
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL2JhZGdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9pdGVtTGlzdC50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvbmF2LnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL25ld0VkaXRJdGVtLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL25vdGlmeUVycm9yLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL25vdGlmeUxvYWRpbmcudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvb25lQmFkZ2UudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvb25lTGlzdEl0ZW0udHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL2NvbXBvbmVudHMvcHJvZmlsZVBpYy50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vY29tcG9uZW50cy9zdmcudHN4Iiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL2FwaS9ncmFwaHFsL2ZyYWdtZW50cy50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcGkvZ3JhcGhxbC9tdXRhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtLy4vdXRpbHMvYXBpL2dyYXBocWwvcXVlcmllcy50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9wcmVwYXJlVXBkYXRlT2JqLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL3R5cGVzLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2lnbm9yZWR8QzpcXFVkZW15U3R1ZmZcXFByaXNtYVN0dWZmXFxuZXdzcHJpc21hXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQmFkZ2VMaXN0IiwiZmllbGROYW1lIiwiYWN0aW9uIiwiaXRlbSIsInNldEl0ZW0iLCJsZW5ndGgiLCJtYXAiLCJvbmVCYWRnZSIsIm5hbWUiLCJJdGVtTGlzdCIsInR5cGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlU2VsZWN0ZWQiLCJhbGxvd0VkaXRzIiwiaXNGZWVkIiwiSXRlbVR5cGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJGRUVEU19RVUVSWSIsIkJVTkRMRVNfUVVFUlkiLCJjb25zb2xlIiwibG9nIiwiZmVlZHMiLCJidW5kbGVzIiwiaXRlbUxpc3QiLCJ1c2VFZmZlY3QiLCJpZCIsImZpcnN0SXRlbSIsImVkaXRNb2RlIiwibmV3TW9kZSIsIkxheW91dCIsImNoaWxkcmVuIiwiTmF2IiwidXNlciIsInVzZUZldGNoVXNlciIsIk5ld0VkaXRJdGVtIiwiaW5pdGlhbEZlZWQiLCJ1cmwiLCJ0YWdzIiwiaW5pdGlhbEJ1bmRsZSIsImRlc2NyaXB0aW9uIiwiaW5pdGlhbFN0YXRlIiwiY3VycmVudEl0ZW0iLCJ1c2VTdGF0ZSIsImlucHV0RmllbGRzIiwiY3JlYXRlSXRlbU11dGF0aW9uIiwiY3JlYXRlTG9hZGluZyIsImNyZWF0ZUVycm9yIiwidXNlTXV0YXRpb24iLCJDUkVBVEVfRkVFRF9NVVRBVElPTiIsIkNSRUFURV9CVU5ETEVfTVVUQVRJT04iLCJlIiwicHJldmVudERlZmF1bHQiLCJwcmVwYXJlTmV3VXBkYXRlT2JqIiwiQmFkZ2VGaWVsZE5hbWUiLCJBY3Rpb25UeXBlIiwiQ1JFQVRFIiwiTm90aWZ5RXJyb3IiLCJOb3RpZnlMb2FkaW5nIiwiT25lQmFkZ2UiLCJjb2xvciIsIk9uZUxpc3RJdGVtIiwiaXNTZWxlY3RlZCIsImF1dGhvciIsIlByb2ZpbGVQaWMiLCJwaWN0dXJlIiwibmlja25hbWUiLCJXYWl0aW5nQ2xvY2siLCJjbGFzc05hbWUiLCJFcnJvclNpZ24iLCJEb3VibGVBcnJvd0Rvd24iLCJEb3VibGVBcnJvd1JpZ2h0IiwiUGx1cyIsIk1pbnVzIiwiUXVlc3Rpb24iLCJGRUVEX1RBR19GUkFHTUVOVCIsImdxbCIsIkJVTkRMRV9UQUdfRlJBR01FTlQiLCJBVVRIT1JfRlJBR01FTlQiLCJMSUtFX0ZSQUdNRU5UIiwiRkVFRF9GUkFHTUVOVCIsIkJVTkRMRV9GUkFHTUVOVCIsIlNBVkVEX0FSVElDTEVfRlJBR01FTlQiLCJMSUtFX0JVTkRMRV9NVVRBVElPTiIsIkxJS0VfRkVFRF9NVVRBVElPTiIsIlVQREFURV9CVU5ETEVfTVVUQVRJT04iLCJVUERBVEVfRkVFRF9NVVRBVElPTiIsIkNSRUFURV9TQVZFRF9BUlRJQ0xFX01VVEFUSU9OIiwiREVMRVRFX0JVTkRMRV9NVVRBVElPTiIsIkRFTEVURV9GRUVEX01VVEFUSU9OIiwiREVMRVRFX1NBVkVEX0FSVElDTEVfTVVUQVRJT04iLCJGSU5EX0ZFRURTX1FVRVJZIiwiRkVFRF9RVUVSWSIsIkJVTkRMRV9RVUVSWSIsIkZJTkRfRkVFRF9UQUdTX1FVRVJZIiwiRklORF9CVU5ETEVfVEFHU19RVUVSWSIsIlNBVkVEX0FSVElDTEVTX1FVRVJZIiwiU0FWRURfQVJUSUNMRV9RVUVSWSIsIk1FX1FVRVJZIiwiZ2VuTmVzdGVkSXRlbXMiLCJjb25uZWN0IiwiZmlsdGVyIiwidW5kZWZpbmVkIiwiY3JlYXRlIiwibyIsInV1aWR2NCIsIl9fdHlwZW5hbWUiLCJsaWtlcyIsImNsZWFuZWRJdGVtIiwiY3VycmVudERhdGEiLCJmZXRjaFVzZXIiLCJjb29raWUiLCJyZXMiLCJmZXRjaCIsImhlYWRlcnMiLCJvayIsIndpbmRvdyIsIl9fdXNlciIsImpzb24iLCJyZXF1aXJlZCIsInNldExvYWRpbmciLCJzZXRVc2VyIiwiaXNNb3VudGVkIiwidGhlbiIsImxvY2F0aW9uIiwiaHJlZiJdLCJtYXBwaW5ncyI6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QyxLQUFELENBQVY7QUFDRDtBQUNGLEtBWEQ7QUFhQSxXQUFPLE1BQU07QUFDWEUsZUFBUyxHQUFHLEtBQVo7QUFDRCxLQUZEO0FBR0QsR0F4Qk0sRUF5QlA7QUFDQSxJQTFCTyxDQUFUO0FBNkJBLFNBQU87QUFBRXpGLFFBQUY7QUFBUW5CO0FBQVIsR0FBUDtBQUNELEM7Ozs7Ozs7Ozs7QUNoRkQsZSIsImZpbGUiOiJjb21wb25lbnRzX2l0ZW1MaXN0X3RzeC1jb21wb25lbnRzX2xheW91dF90c3gtY29tcG9uZW50c19uZXdFZGl0SXRlbV90c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWN0aW9uVHlwZSwgQmFkZ2VGaWVsZE5hbWUsIEJ1bmRsZU9iamVjdCwgRmVlZE9iamVjdCB9IGZyb20gXCIuLi91dGlscy90eXBlc1wiO1xyXG5pbXBvcnQgeyBPbmVCYWRnZSB9IGZyb20gJy4vb25lQmFkZ2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJhZGdlTGlzdCA9ICh7XHJcbiAgICBmaWVsZE5hbWUsXHJcbiAgICBhY3Rpb24sXHJcbiAgICBpdGVtLFxyXG4gICAgc2V0SXRlbSxcclxufSA6IHtcclxuICAgIGZpZWxkTmFtZTogQmFkZ2VGaWVsZE5hbWU7XHJcbiAgICBhY3Rpb246IEFjdGlvblR5cGU7XHJcbiAgICBpdGVtOiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0O1xyXG4gICAgc2V0SXRlbT86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3Q+PjtcclxuXHJcbn0pID0+IHtcclxuICAgIHJldHVybiBpdGVtW2ZpZWxkTmFtZV0gJiYgaXRlbVtmaWVsZE5hbWVdLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7aXRlbVtmaWVsZE5hbWVdLm1hcCgob25lQmFkZ2UpID0+IChcclxuICAgICAgICAgICAgPE9uZUJhZGdlXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake2l0ZW1bJ2lkJ119LSR7b25lQmFkZ2UubmFtZX19YH1cclxuICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17ZmllbGROYW1lfVxyXG4gICAgICAgICAgICAgICAgaXRlbT17b25lQmFkZ2V9XHJcbiAgICAgICAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cclxuICAgICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SXRlbT17aXRlbX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICApIDogKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj5Ob25lIGZvdW5kPC9wPlxyXG4gICAgICk7XHJcbiAgICAgXHJcbn07IiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgQlVORExFU19RVUVSWSwgRkVFRFNfUVVFUlkgfSBmcm9tIFwiLi4vdXRpbHMvYXBpL2dyYXBocWwvcXVlcmllc1wiO1xyXG5pbXBvcnQgeyBCdW5kbGVPYmplY3QsIEZlZWRPYmplY3QsIEl0ZW1UeXBlLCBTZWxlY3RlZEZlZWRTdGF0ZSB9IGZyb20gXCIuLi91dGlscy90eXBlc1wiXHJcbmltcG9ydCB7IE5vdGlmeUxvYWRpbmcgfSBmcm9tICcuL25vdGlmeUxvYWRpbmcnO1xyXG5pbXBvcnQgeyBOb3RpZnlFcnJvciB9IGZyb20gXCIuL25vdGlmeUVycm9yXCI7XHJcbmltcG9ydCB7IE9uZUxpc3RJdGVtIH0gZnJvbSBcIi4vb25lTGlzdEl0ZW1cIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1MaXN0ID0gKHtcclxuICB0eXBlLFxyXG4gIHNlbGVjdGVkLFxyXG4gIHNldFNlbGVjdGVkLFxyXG4gIHVzZVNlbGVjdGVkID0gZmFsc2UsXHJcbiAgYWxsb3dFZGl0c1xyXG59IDoge1xyXG4gICAgXHJcbiAgICB0eXBlOiBJdGVtVHlwZTtcclxuICAgIHNlbGVjdGVkPyA6IFNlbGVjdGVkRmVlZFN0YXRlO1xyXG4gICAgc2V0U2VsZWN0ZWQ/OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxTZWxlY3RlZEZlZWRTdGF0ZT4+O1xyXG4gICAgdXNlU2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gICAgYWxsb3dFZGl0cz86IGJvb2xlYW47XHJcbiAgXHJcbiAgfSkgPT4ge1xyXG4gICAgY29uc3QgaXNGZWVkID0gdHlwZSA9PT0gSXRlbVR5cGUuRmVlZFR5cGU7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShcclxuICAgICAgaXNGZWVkID8gRkVFRFNfUVVFUlkgOiBCVU5ETEVTX1FVRVJZLFxyXG4gICAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGxvYWRpbmcsIGVycm9yLCBkYXRhKVxyXG4gICAgXHJcbiAgICBjb25zdCB7IGZlZWRzLCBidW5kbGVzIH0gPSBkYXRhIHx8IHt9O1xyXG4gICAgY29uc3QgaXRlbUxpc3QgPSBpc0ZlZWQgPyBmZWVkcyA6IGJ1bmRsZXM7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZih1c2VTZWxlY3RlZCAmJiBpdGVtTGlzdCAmJiBpdGVtTGlzdC5sZW5ndGggPiAwICYmIHNlbGVjdGVkLmlkID09PSBudWxsKXtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IGl0ZW1MaXN0WzBdXHJcbiAgICAgICAgICBhd2FpdCBzZXRTZWxlY3RlZCh7XHJcbiAgICAgICAgICAgIGlkOiBmaXJzdEl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGZlZWRzOiBpc0ZlZWQgPyBbZmlyc3RJdGVtXSA6IGZpcnN0SXRlbVsnZmVlZHMnXSxcclxuICAgICAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBuZXdNb2RlOiBmYWxzZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkgKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgIFxyXG4gICBcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgPE5vdGlmeUxvYWRpbmcgLz5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiA8Tm90aWZ5RXJyb3IgLz5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTMgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cclxuICAgICAgICB7aXRlbUxpc3QgJiYgaXRlbUxpc3QubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIGl0ZW1MaXN0Lm1hcCgoaXRlbTogRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdCkgPT4gKFxyXG4gICAgICAgICAgPE9uZUxpc3RJdGVtXHJcbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgdXNlU2VsZWN0ZWQ9e3VzZVNlbGVjdGVkfVxyXG4gICAgICAgICAgICBhbGxvd0VkaXRzPXthbGxvd0VkaXRzfVxyXG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cclxuXHJcbiAgICAgICAgICAvPikpXHJcbiAgICAgICAgKSA6ICg8cD5Ob25lIGFyZSBwcmVzZW50LiBXaHkgbm90IGFkZCBvbmU/PC9wPil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgICAgIClcclxuICAgICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAgeyBOYXYgfSAgZnJvbSAnLi9uYXYnXHJcblxyXG5leHBvcnQgY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlRmV0Y2hVc2VyIH0gZnJvbSAnLi4vdXRpbHMvdXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2ID0gKCkgID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciwgbG9hZGluZyB9ID0gdXNlRmV0Y2hVc2VyKCk7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHVzZXIsIGxvYWRpbmcpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZ3JpZCBncmlkLWNvbHMtNFwiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nc206aC0xMCBoLTggcHItMScgc3JjPVwiL2xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgc206dmlzaWJsZSBpbnZpc2libGVcIj5OZXdzcHJpc208L2E+XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgZmxleCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNtOm1yLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NhdmVkLWFydGljbGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicC0yIHRleHQtY2VudGVyIGJsb2NrIGhvdmVyOmJsdWUtNzAwIHRleHQtYmx1ZS03MDBcIj5TYXZlZCBBcnRpY2xlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic206bXItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYnVuZGxlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWNlbnRlciBibG9jayBob3ZlcjpibHVlLTcwMCB0ZXh0LWJsdWUtNzAwXCI+QnVuZGxlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNtOm1yLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2ZlZWRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicC0yIHRleHQtY2VudGVyIGJsb2NrIGhvdmVyOmJsdWUtNzAwIHRleHQtYmx1ZS03MDBcIj5GZWVkczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB7dXNlciAmJiAhbG9hZGluZyA/IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNtOm1yLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FwaS9sb2dvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgdGV4dC1ibHVlLTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzbTptci02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hcGkvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwLTIgdGV4dC1jZW50ZXIgYmxvY2sgaG92ZXI6Ymx1ZS03MDAgdGV4dC1ibHVlLTcwMFwiPkxvZ2luPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENSRUFURV9CVU5ETEVfTVVUQVRJT04sIENSRUFURV9GRUVEX01VVEFUSU9OIH0gZnJvbSAnLi4vdXRpbHMvYXBpL2dyYXBocWwvbXV0YXRpb25zJztcclxuaW1wb3J0IHsgcHJlcGFyZU5ld1VwZGF0ZU9iaiB9IGZyb20gJy4uL3V0aWxzL3ByZXBhcmVVcGRhdGVPYmonO1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlLCBCYWRnZUZpZWxkTmFtZSwgQnVuZGxlT2JqZWN0LCBGZWVkT2JqZWN0LCBJdGVtVHlwZSwgTmV3SXRlbVN0YXRlLCBTZWxlY3RlZEZlZWRTdGF0ZSB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcclxuaW1wb3J0IHsgQmFkZ2VMaXN0IH0gZnJvbSAnLi9iYWRnZUxpc3QnO1xyXG5pbXBvcnQgeyBFcnJvclNpZ24sIFdhaXRpbmdDbG9jayB9IGZyb20gJy4vc3ZnJztcclxuXHJcbmV4cG9ydCBjb25zdCBOZXdFZGl0SXRlbSA9ICh7XHJcbiAgIHR5cGUsXHJcbiAgIHNlbGVjdGVkLFxyXG4gICBzZXRTZWxlY3RlZCxcclxufToge1xyXG4gICB0eXBlOkl0ZW1UeXBlO1xyXG4gICBzZWxlY3RlZDogU2VsZWN0ZWRGZWVkU3RhdGU7XHJcbiAgIHNldFNlbGVjdGVkOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxTZWxlY3RlZEZlZWRTdGF0ZT4+XHJcblxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBpc0ZlZWQgPSB0eXBlID09PSBJdGVtVHlwZS5GZWVkVHlwZVxyXG4gICAgY29uc3QgaW5pdGlhbEZlZWQ6IEZlZWRPYmplY3QgPSB7bmFtZTogXCJcIiwgdXJsOiBcIlwiLCB0YWdzOiBbXX07XHJcbiAgICBjb25zdCBpbml0aWFsQnVuZGxlOiBCdW5kbGVPYmplY3QgPSB7bmFtZTogXCJcIiwgZGVzY3JpcHRpb246IFwiXCIsIHRhZ3M6IFtdLCBmZWVkczogW119O1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlOiBOZXdJdGVtU3RhdGUgPSBpc0ZlZWQgPyBpbml0aWFsRmVlZCA6IGluaXRpYWxCdW5kbGU7XHJcbiAgICBjb25zdCBbY3VycmVudEl0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGU8TmV3SXRlbVN0YXRlPihpbml0aWFsU3RhdGUpXHJcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IGlzRmVlZCA/IFsnbmFtZScsICd1cmwnXSA6IFsnbmFtZScsICdkZXNjcmlwdGlvbiddO1xyXG5cclxuICAgY29uc3QgWyBjcmVhdGVJdGVtTXV0YXRpb24sIHsgbG9hZGluZzogY3JlYXRlTG9hZGluZywgZXJyb3I6IGNyZWF0ZUVycm9yIH0gXSAgPSB1c2VNdXRhdGlvbihpc0ZlZWQgPyBDUkVBVEVfRkVFRF9NVVRBVElPTiA6IENSRUFURV9CVU5ETEVfTVVUQVRJT04pO1xyXG5cclxuICAgaWYoY3JlYXRlTG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPFdhaXRpbmdDbG9jayBjbGFzc05hbWU9XCJteS0yMCBoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG9cIi8+XHJcbiAgIH0gIFxyXG4gICBpZihjcmVhdGVFcnJvcikge1xyXG4gICAgICByZXR1cm4gPEVycm9yU2lnbiBjbGFzc05hbWU9XCJteS0yMCBoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG9cIi8+XHJcbiAgIH0gXHJcbiAgIFxyXG4gICByZXR1cm4gKFxyXG4gICAgIDw+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIGNvbnN0IGRhdGEgPSBwcmVwYXJlTmV3VXBkYXRlT2JqKGN1cnJlbnRJdGVtKVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICB9fSA+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTQgcm91bmRlZC1tZCBib3JkZXItNCBteS00IHB5LTIgcHgtNFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgdGV4dC1sZyBmb250LW1lZGl1bSBweS0yXCI+XHJcbiAgICAgICAgICAgICAgIHtpc0ZlZWQgPyBcIk5ldyBGZWVkXCIgOiBcIk5ldyBCdW5kbGVcIn1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02XCI+XHJcbiAgICAgICAgICAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHAga2V5PXtuYW1lfT57bmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTYnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMic+XHJcbiAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2JsYWNrIHB5LTInPlxyXG4gICAgICAgICAgICAgICAgICBUYWdzOlxyXG4gICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMyBnYXAtMic+XHJcbiAgICAgICAgICAgICAgICAgIDxCYWRnZUxpc3QgZmllbGROYW1lPXtCYWRnZUZpZWxkTmFtZS50YWdzfSBzZXRJdGVtPXtzZXRJdGVtfSBpdGVtPXtjdXJyZW50SXRlbX0gYWN0aW9uPXtBY3Rpb25UeXBlLkNSRUFURX0vPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHB5LTQgJHtpc0ZlZWQgPyBudWxsIDogJ3B0LTI4J31gfT5cclxuICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17YHB5LTQgJHtgYmctJHtpc0ZlZWQgPyAnZ3JlZW4nIDogJ3B1cnBsZSd9LTQwMCBgfSBob3ZlcjpiZy0ke1xyXG4gICAgICAgICAgICAgICBpc0ZlZWQgPyAnZ3JlZW4nIDogJ3B1cnBsZSdcclxuICAgICAgICAgICAgICAgfS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHgtMTIgcm91bmRlZGB9IHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+IFxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgPC8+XHJcbiAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBFcnJvclNpZ24gfSBmcm9tIFwiLi9zdmdcIlxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmeUVycm9yID0gKCkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXhcIj5cclxuICAgICAgICAgPEVycm9yU2lnbiBjbGFzc05hbWU9XCJoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG9cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBXYWl0aW5nQ2xvY2sgfSBmcm9tIFwiLi9zdmdcIlxyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmeUxvYWRpbmcgPSAoKSA9PiB7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleFwiPlxyXG4gICAgICAgICA8V2FpdGluZ0Nsb2NrIGNsYXNzTmFtZT1cImgtMTAgdy0xMCB0ZXh0LWdyYXktNTAwIG0tYXV0b1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnVuZGxlVGFnLCBGZWVkVGFnIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCB7QWN0aW9uVHlwZSwgQmFkZ2VGaWVsZE5hbWUsIEJ1bmRsZU9iamVjdCwgRmVlZE9iamVjdH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgT25lQmFkZ2UgPSAoe1xyXG4gICAgaXRlbSxcclxuICAgIGFjdGlvbixcclxuICAgIGN1cnJlbnRJdGVtLFxyXG4gICAgZmllbGROYW1lLFxyXG4gICAgc2V0SXRlbVxyXG4gICAgIH0gOiB7XHJcbiAgIGl0ZW06IEZlZWRUYWcgfCBCdW5kbGVUYWcgfCBGZWVkT2JqZWN0XHJcbiAgIGFjdGlvbjogQWN0aW9uVHlwZTtcclxuICAgY3VycmVudEl0ZW0/OiBGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0XHJcbiAgIGZpZWxkTmFtZTogQmFkZ2VGaWVsZE5hbWU7XHJcbiAgIHNldEl0ZW0/OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxGZWVkT2JqZWN0IHwgQnVuZGxlT2JqZWN0Pj5cclxufSkgPT4ge1xyXG4gICAgY29uc3QgY29sb3IgPSBmaWVsZE5hbWUgPT09IEJhZGdlRmllbGROYW1lLnRhZ3MgPyAnYmx1ZScgOiBCYWRnZUZpZWxkTmFtZS5mZWVkcyA/ICdncmVlbicgOiAncHVycGxlJ1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYWxpZ24tbWlkZGxlIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtc20gcHktMiBweC0yIHJvdW5kZWQtbGcgYmctJHtjb2xvcn0tMjAwIGB9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC14cyB0ZXh0LSR7Y29sb3J9LTYwMCB0ZXh0LWNlbnRlcmB9PiB7aXRlbS5uYW1lfSA8L3A+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWN0aW9uVHlwZSwgQmFkZ2VGaWVsZE5hbWUsIEJ1bmRsZU9iamVjdCwgRmVlZE9iamVjdCwgSXRlbVR5cGUsIFNlbGVjdGVkRmVlZFN0YXRlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzXCJcclxuaW1wb3J0IHsgQmFkZ2VMaXN0IH0gZnJvbSAnLi9iYWRnZUxpc3QnO1xyXG5pbXBvcnQgeyBQcm9maWxlUGljIH0gZnJvbSAnLi9wcm9maWxlUGljJztcclxuaW1wb3J0IHsgRG91YmxlQXJyb3dEb3duLCBEb3VibGVBcnJvd1JpZ2h0IH0gZnJvbSBcIi4vc3ZnXCI7XHJcbmV4cG9ydCBjb25zdCBPbmVMaXN0SXRlbSA9ICh7XHJcbiAgICBpdGVtLFxyXG4gICAgdHlwZSxcclxuICAgIHNlbGVjdGVkLFxyXG4gICAgc2V0U2VsZWN0ZWQsXHJcbiAgICB1c2VTZWxlY3RlZCA9IGZhbHNlLFxyXG4gICAgYWxsb3dFZGl0c1xyXG4gIH0gOiB7XHJcbiAgICAgIGl0ZW06IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3RcclxuICAgICAgdHlwZTogSXRlbVR5cGU7XHJcbiAgICAgIHNlbGVjdGVkPyA6IFNlbGVjdGVkRmVlZFN0YXRlO1xyXG4gICAgICBzZXRTZWxlY3RlZD86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFNlbGVjdGVkRmVlZFN0YXRlPj47XHJcbiAgICAgIHVzZVNlbGVjdGVkPzogYm9vbGVhbjtcclxuICAgICAgYWxsb3dFZGl0cz86IGJvb2xlYW47XHJcbiAgICBcclxuICAgIH0pICA9PiB7XHJcbiAgICBjb25zdCBpc0ZlZWQgPSB0eXBlID09PSBJdGVtVHlwZS5GZWVkVHlwZTtcclxuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB1c2VTZWxlY3RlZCAmJiBzZWxlY3RlZCAmJiBzZWxlY3RlZC5pZCA9PT0gaXRlbS5pZDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHtpc0ZlZWQgPyAnZmVlZCcgOiAnYnVuZGxlJyB9LyR7aXRlbS5pZH1gfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3ItcG9pbnRlciBncmlkIGdyaWQtY29scy02IHAtNCByb3VuZGVkLWxnXHJcbiAgICAgICAgICAgICAgICAgICAgJHt1c2VTZWxlY3RlZCA/ICdyb3VuZGVkLWItbm9uZScgOiAnYm9yZGVyLWItNCd9IFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10LTQgYm9yZGVyLWwtNCBib3JkZXItci00XHJcbiAgICAgICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPyBgYm9yZGVyLSR7aXNGZWVkID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdncmVlbicgOiAncHVycGxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LTQwMGAgOiAnYm9yZGVyLWdyYXktMzAwJ31cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57aXRlbS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFpc0ZlZWQgPyA8cD57aXRlbVsnZGVzY3JpcHRpb24nXX08L3A+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXgganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5hY3Rpb25zPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3Bhbi1jb2wtNiBweS0wIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmF1dGhvciA/IDxQcm9maWxlUGljIGF1dGhvcj17aXRlbS5hdXRob3J9Lz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTYgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5UYWdzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRzIGdyaWRzLWNvbHMtMiBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXtCYWRnZUZpZWxkTmFtZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICBhY3Rpb249e0FjdGlvblR5cGUuTk9ORX1cclxuICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02IHB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e2lzRmVlZCA/ICdCdW5kbGVzJyA6ICdGZWVkcyd9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Y2hpbGQgaXRlbXMuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt1c2VTZWxlY3RlZCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7aXNTZWxlY3RlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCByb3VuZGVkLWxnIHJvdW5kZWQtdC1ub25lIGFsaWduLW1pZGRsZSAke2lzU2VsZWN0ZWQgPyBgYmctJHtpc0ZlZWQgPyAnZ3JlZW4nIDogJ3B1cnBsZSd9LTQwMGAgOiBgYmctZ3JheS0zMDBgfSBwLTQgei0xMCB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RG91YmxlQXJyb3dEb3duIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC13aGl0ZS01MDAgbXItMiBtdC0xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2BIaWRlICR7aXNGZWVkID8gJ0ZlZWQnIDogJ0J1bmRsZSd9IEFydGljbGVzYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlZHM6IGlzRmVlZCA/IFtpdGVtXTogaXRlbVsnZmVlZHMnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld01vZGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCByb3VuZGVkLWxnIHJvdW5kZWQtdC1ub25lIGFsaWduLW1pZGRsZSAke2lzU2VsZWN0ZWQgPyBgYmctJHtpc0ZlZWQgPyAnZ3JlZW4nIDogJ3B1cnBsZSd9LTQwMGAgOiBgYmctZ3JheS0zMDBgfSBwLTQgei0xMCB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RG91YmxlQXJyb3dSaWdodCBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtd2hpdGUtNTAwIG1yLTIgbXQtMVwiPjwvRG91YmxlQXJyb3dSaWdodD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2AgU2hvdyAke2lzRmVlZCA/IGBGZWVkYCA6IGBCdW5kbGVgfSBBcnRpY2xlc2B9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gJy4vc3ZnJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZVBpYyA9ICh7IGF1dGhvciB9IDogeyBhdXRob3I6IFVzZXIgfSkgPT4gKFxyXG4gICAgPD5cclxuICAgICAgICB7YXV0aG9yLnBpY3R1cmUgPyAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBwLTAuNSB3LTggaC04IGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2F1dGhvci5waWN0dXJlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8UXVlc3Rpb24gY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LWdyYXktNTAwXCIgLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxwPnthdXRob3Iubmlja25hbWV9PC9wPlxyXG4gICAgPC8+XHJcbikiLCJleHBvcnQgY29uc3QgV2FpdGluZ0Nsb2NrID0gKHsgY2xhc3NOYW1lIH0pID0+IChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgZD1cIk0xMiA4djRsMyAzbTYtM2E5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3JTaWduID0gKHsgY2xhc3NOYW1lIH0pID0+IChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgZD1cIk0xMiA5djJtMCA0aC4wMW0tNi45MzggNGgxMy44NTZjMS41NCAwIDIuNTAyLTEuNjY3IDEuNzMyLTNMMTMuNzMyIDRjLS43Ny0xLjMzMy0yLjY5NC0xLjMzMy0zLjQ2NCAwTDMuMzQgMTZjLS43NyAxLjMzMy4xOTIgMyAxLjczMiAzelwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRG91YmxlQXJyb3dEb3duID0gKHtjbGFzc05hbWV9KSA9PiAoXHJcbiAgICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIGZpbGw9XCJub25lXCJcclxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgPlxyXG4gIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgZD1cIk0xOSAxM2wtNyA3LTctN20xNC04bC03IDctNy03XCIgLz5cclxuPC9zdmc+XHJcbilcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRG91YmxlQXJyb3dSaWdodCA9ICh7Y2xhc3NOYW1lfSkgPT4gKFxyXG4gICAgPHN2Z1xyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICBmaWxsPVwibm9uZVwiXHJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgID5cclxuICAgIDxwYXRoXHJcbiAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgIGQ9XCJNMTMgNWw3IDctNyA3TTUgNWw3IDctNyA3XCJcclxuICAgIC8+XHJcbjwvc3ZnPlxyXG4pXHJcbmV4cG9ydCBjb25zdCBQbHVzID0gKHtjbGFzc05hbWV9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgIGZpbGw9XCJub25lXCJcclxuICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgPlxyXG4gIDxwYXRoXHJcbiAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICBzdHJva2VXaWR0aD17Mn1cclxuICAgZD1cIk0xMiA0djE2bTgtOEg0XCJcclxuICAgLz5cclxuPC9zdmc+XHJcbik7XHJcbmV4cG9ydCBjb25zdCBNaW51cyA9ICh7Y2xhc3NOYW1lfSkgPT4gKFxyXG4gIDxzdmdcclxuICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICBmaWxsPVwibm9uZVwiXHJcbiAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gID5cclxuICA8cGF0aFxyXG4gICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgIGQ9XCJNMjAgMTJINFwiXHJcbiAgIC8+XHJcbjwvc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFF1ZXN0aW9uID0gKHtjbGFzc05hbWV9KSA9PiAoXHJcbiAgPHN2Z1xyXG4gICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgIGZpbGw9XCJub25lXCJcclxuICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gIDxwYXRoXHJcbiAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICBzdHJva2VXaWR0aD17Mn1cclxuICAgZD1cIk04LjIyOCA5Yy41NDktMS4xNjUgMi4wMy0yIDMuNzcyLTIgMi4yMSAwIDQgMS4zNDMgNCAzIDAgMS40LTEuMjc4IDIuNTc1LTMuMDA2IDIuOTA3LS41NDIuMTA0LS45OTQuNTQtLjk5NCAxLjA5M20wIDNoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiXHJcbiAgIC8+XHJcbjwvc3ZnPlxyXG4pIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5leHBvcnQgY29uc3QgRkVFRF9UQUdfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IEZlZWRUYWdGcmFnbWVudCBvbiBGZWVkVGFnIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJVTkRMRV9UQUdfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IEJ1bmRsZVRhZ0ZyYWdtZW50IG9uIEJ1bmRsZVRhZyB7XG4gICAgaWRcbiAgICBuYW1lXG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBBVVRIT1JfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IEF1dGhvckZyYWdtZW50IG9uIFVzZXIge1xuICAgIGlkXG4gICAgYXV0aDBcbiAgICBwaWN0dXJlXG4gICAgbmlja25hbWVcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExJS0VfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IExpa2VGcmFnbWVudCBvbiBMaWtlIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZFRURfRlJBR01FTlQgPSBncWxgXG4gIGZyYWdtZW50IEZlZWRGcmFnbWVudCBvbiBGZWVkIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgICB1cmxcbiAgICBsaWtlcyB7XG4gICAgICAuLi5BdXRob3JGcmFnbWVudFxuICAgIH1cbiAgICB0YWdzIHtcbiAgICAgIC4uLkZlZWRUYWdGcmFnbWVudFxuICAgIH1cbiAgICBhdXRob3Ige1xuICAgICAgLi4uQXV0aG9yRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtGRUVEX1RBR19GUkFHTUVOVH1cbiAgJHtBVVRIT1JfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgQlVORExFX0ZSQUdNRU5UID0gZ3FsYFxuICBmcmFnbWVudCBCdW5kbGVGcmFnbWVudCBvbiBCdW5kbGUge1xuICAgIGlkXG4gICAgbmFtZVxuICAgIGRlc2NyaXB0aW9uXG4gICAgdGFncyB7XG4gICAgICAuLi5CdW5kbGVUYWdGcmFnbWVudFxuICAgIH1cbiAgICBhdXRob3Ige1xuICAgICAgLi4uQXV0aG9yRnJhZ21lbnRcbiAgICB9XG4gICAgbGlrZXMge1xuICAgICAgLi4uQXV0aG9yRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtCVU5ETEVfVEFHX0ZSQUdNRU5UfVxuICAke0FVVEhPUl9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTQVZFRF9BUlRJQ0xFX0ZSQUdNRU5UID0gZ3FsYFxuICBmcmFnbWVudCBTYXZlZEFydGljbGVGcmFnbWVudCBvbiBTYXZlZEFydGljbGUge1xuICAgIGlkXG4gICAgY29udGVudHNcbiAgICB1cmxcbiAgICBhdXRob3Ige1xuICAgICAgLi4uQXV0aG9yRnJhZ21lbnRcbiAgICB9XG4gICAgZmVlZCB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICB9XG4gIH1cbiAgJHtBVVRIT1JfRlJBR01FTlR9XG4gICR7RkVFRF9GUkFHTUVOVH1cbmA7XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBCVU5ETEVfRlJBR01FTlQsIEZFRURfRlJBR01FTlQsIFNBVkVEX0FSVElDTEVfRlJBR01FTlQgfSBmcm9tICcuL2ZyYWdtZW50cyc7XG5cbmV4cG9ydCBjb25zdCBMSUtFX0JVTkRMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gbGlrZUJ1bmRsZU11dGF0aW9uKCRkYXRhOiBMaWtlQnVuZGxlSW5wdXQpIHtcbiAgICBsaWtlQnVuZGxlKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgZmVlZHMge1xuICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG4gICR7RkVFRF9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMSUtFX0ZFRURfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGxpa2VGZWVkTXV0YXRpb24oJGRhdGE6IExpa2VGZWVkSW5wdXQpIHtcbiAgICBsaWtlRmVlZChkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICBidW5kbGVzIHtcbiAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG4gICR7RkVFRF9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfQlVORExFX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVCdW5kbGVNdXRhdGlvbigkZGF0YTogQnVuZGxlQ3JlYXRlSW5wdXQpIHtcbiAgICBjcmVhdGVCdW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICBmZWVkcyB7XG4gICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICBidW5kbGVzIHtcbiAgICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuZXhwb3J0IGNvbnN0IFVQREFURV9CVU5ETEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZUJ1bmRsZU11dGF0aW9uKCRkYXRhOiBCdW5kbGVVcGRhdGVJbnB1dCkge1xuICAgIHVwZGF0ZUJ1bmRsZShkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgIGZlZWRzIHtcbiAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIGJ1bmRsZXMge1xuICAgICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfRkVFRF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlRmVlZE11dGF0aW9uKCRkYXRhOiBGZWVkQ3JlYXRlSW5wdXQpIHtcbiAgICBjcmVhdGVGZWVkKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIGJ1bmRsZXMge1xuICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgICBmZWVkcyB7XG4gICAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfRkVFRF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gdXBkYXRlRmVlZE11dGF0aW9uKCRkYXRhOiBGZWVkVXBkYXRlSW5wdXQpIHtcbiAgICB1cGRhdGVGZWVkKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIGJ1bmRsZXMge1xuICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgICBmZWVkcyB7XG4gICAgICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtGRUVEX0ZSQUdNRU5UfVxuICAke0JVTkRMRV9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfU0FWRURfQVJUSUNMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlU2F2ZWRBcnRpY2xlTXV0YXRpb24oJGRhdGE6IFNhdmVkQXJ0aWNsZUNyZWF0ZUlucHV0KSB7XG4gICAgY3JlYXRlU2F2ZWRBcnRpY2xlKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5TYXZlZEFydGljbGVGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke1NBVkVEX0FSVElDTEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0JVTkRMRV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gZGVsZXRlQnVuZGxlTXV0YXRpb24oJGRhdGE6IEJ1bmRsZUlucHV0KSB7XG4gICAgZGVsZXRlQnVuZGxlKGRhdGE6ICRkYXRhKSB7XG4gICAgICBpZFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9GRUVEX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVGZWVkTXV0YXRpb24oJGRhdGE6IEZlZWRJbnB1dCkge1xuICAgIGRlbGV0ZUZlZWQoZGF0YTogJGRhdGEpIHtcbiAgICAgIGlkXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX1NBVkVEX0FSVElDTEVfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGRlbGV0ZVNhdmVkQXJ0aWNsZU11dGF0aW9uKCRkYXRhOiBEZWxldGVTYXZlZEFydGljbGVJbnB1dCkge1xuICAgIGRlbGV0ZVNhdmVkQXJ0aWNsZShkYXRhOiAkZGF0YSkge1xuICAgICAgaWRcbiAgICAgIHVybFxuICAgIH1cbiAgfVxuYDtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7XG4gIEFVVEhPUl9GUkFHTUVOVCxcbiAgQlVORExFX0ZSQUdNRU5ULFxuICBCVU5ETEVfVEFHX0ZSQUdNRU5ULFxuICBGRUVEX0ZSQUdNRU5ULFxuICBGRUVEX1RBR19GUkFHTUVOVCxcbiAgU0FWRURfQVJUSUNMRV9GUkFHTUVOVCxcbn0gZnJvbSAnLi9mcmFnbWVudHMnO1xuXG5cbmV4cG9ydCBjb25zdCBCVU5ETEVTX1FVRVJZID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgYnVuZGxlcyB7XG4gICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgZmVlZHMge1xuICAgICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG4gICR7RkVFRF9GUkFHTUVOVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGRUVEU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkge1xuICAgIGZlZWRzIHtcbiAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgYnVuZGxlcyB7XG4gICAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgRklORF9GRUVEU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgZmluZEZlZWRzUXVlcnkoJGRhdGE6IEZpbmRGZWVkc0lucHV0KSB7XG4gICAgZmluZEZlZWRzKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5GZWVkRnJhZ21lbnRcbiAgICAgIGJ1bmRsZXMge1xuICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke0ZFRURfRlJBR01FTlR9XG4gICR7QlVORExFX0ZSQUdNRU5UfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZFRURfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IGZlZWRRdWVyeSgkZGF0YTogRmVlZElucHV0KSB7XG4gICAgZmVlZChkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uRmVlZEZyYWdtZW50XG4gICAgICBidW5kbGVzIHtcbiAgICAgICAgLi4uQnVuZGxlRnJhZ21lbnRcbiAgICAgICAgZmVlZHMge1xuICAgICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgQlVORExFX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBidW5kbGVRdWVyeSgkZGF0YTogQnVuZGxlSW5wdXQpIHtcbiAgICBidW5kbGUoZGF0YTogJGRhdGEpIHtcbiAgICAgIC4uLkJ1bmRsZUZyYWdtZW50XG4gICAgICBmZWVkcyB7XG4gICAgICAgIC4uLkZlZWRGcmFnbWVudFxuICAgICAgICBidW5kbGVzIHtcbiAgICAgICAgICAuLi5CdW5kbGVGcmFnbWVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7RkVFRF9GUkFHTUVOVH1cbiAgJHtCVU5ETEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgRklORF9GRUVEX1RBR1NfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IGZpbmRGZWVkVGFnc1F1ZXJ5KCRkYXRhOiBGaW5kRmVlZFRhZ3NJbnB1dCkge1xuICAgIGZpbmRGZWVkVGFncyhkYXRhOiAkZGF0YSkge1xuICAgICAgLi4uRmVlZFRhZ0ZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7RkVFRF9UQUdfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgRklORF9CVU5ETEVfVEFHU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgZmluZEJ1bmRsZVRhZ3NRdWVyeSgkZGF0YTogRmluZEJ1bmRsZVRhZ3NJbnB1dCkge1xuICAgIGZpbmRCdW5kbGVUYWdzKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5CdW5kbGVUYWdGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke0JVTkRMRV9UQUdfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgU0FWRURfQVJUSUNMRVNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IHNhdmVkQXJ0aWNsZXNRdWVyeSB7XG4gICAgc2F2ZWRBcnRpY2xlcyB7XG4gICAgICAuLi5TYXZlZEFydGljbGVGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke1NBVkVEX0FSVElDTEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgU0FWRURfQVJUSUNMRV9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgc2F2ZWRBcnRpY2xlUXVlcnkoJGRhdGE6IFNhdmVkQXJ0aWNsZUlucHV0KSB7XG4gICAgc2F2ZWRBcnRpY2xlKGRhdGE6ICRkYXRhKSB7XG4gICAgICAuLi5TYXZlZEFydGljbGVGcmFnbWVudFxuICAgIH1cbiAgfVxuICAke1NBVkVEX0FSVElDTEVfRlJBR01FTlR9XG5gO1xuXG5leHBvcnQgY29uc3QgTUVfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IG1lUXVlcnkge1xuICAgIG1lIHtcbiAgICAgIC4uLkF1dGhvckZyYWdtZW50XG4gICAgfVxuICB9XG4gICR7QVVUSE9SX0ZSQUdNRU5UfVxuYDtcbiIsImltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuXHJcblxyXG5jb25zdCBnZW5OZXN0ZWRJdGVtcyA9IChjdXJyZW50SXRlbSkgPT4ge1xyXG4gICAgY29uc3QgdGFncyA9IFxyXG4gICAgXCJ0YWdzXCIgaW4gY3VycmVudEl0ZW0gPyB7XHJcbiAgICAgICAgdGFnczoge1xyXG4gICAgICAgICAgICBjb25uZWN0OiBjdXJyZW50SXRlbS50YWdzLm1hcCgoeyBpZCB9KSA9Pih7IGlkIH0pKS5maWx0ZXIoKHsgaWQgfSkgPT4gaWQgIT09IHVuZGVmaW5lZCksXHJcblxyXG4gICAgICAgICAgICBjcmVhdGU6IGN1cnJlbnRJdGVtLnRhZ3NcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiBpZCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAubWFwKChvKSA9PiAoeyAuLi5vLCBpZDogdXVpZHY0KCkgfSkpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbiAgICAgOiB7fTtcclxuXHJcbiAgICAgY29uc3QgZmVlZHMgPVxyXG4gICAgICdmZWVkcycgaW4gY3VycmVudEl0ZW1cclxuICAgICAgID8ge1xyXG4gICAgICAgICAgIGZlZWRzOiB7XHJcbiAgICAgICAgICAgICBjb25uZWN0OiBjdXJyZW50SXRlbS5mZWVkc1xyXG4gICAgICAgICAgICAgICAubWFwKCh7IGlkIH0pID0+ICh7IGlkIH0pKVxyXG4gICAgICAgICAgICAgICAuZmlsdGVyKCh7IGlkIH0pID0+IGlkICE9PSB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgIH1cclxuICAgICAgIDoge307XHJcblxyXG4gICAgICAgY29uc3QgeyBfX3R5cGVuYW1lLCBsaWtlcywgYXV0aG9yLCBidW5kbGVzLCAuLi5jbGVhbmVkSXRlbSB9ID0gY3VycmVudEl0ZW07XHJcblxyXG4gICAgICAgcmV0dXJuIHsgLi4uY2xlYW5lZEl0ZW0sIC4uLnRhZ3MsIC4uLmZlZWRzIH07XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcmVwYXJlTmV3VXBkYXRlT2JqID0gKGN1cnJlbnRJdGVtKSA9PiB7XHJcbiAgIGNvbnN0IGN1cnJlbnREYXRhID0gIGdlbk5lc3RlZEl0ZW1zKGN1cnJlbnRJdGVtKVxyXG5cclxuICAgcmV0dXJuIHsgLi4uY3VycmVudERhdGEsICBpZDogdXVpZHY0KCkgfSBcclxufSIsImltcG9ydCB7IEJ1bmRsZVRhZywgRmVlZCwgRmVlZFRhZywgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuXHJcbmV4cG9ydCBlbnVtIEl0ZW1UeXBlIHtcclxuICAgIEJ1bmRsZVR5cGUgPSAnQnVuZGxlVHlwZScsXHJcbiAgICBGZWVkVHlwZSA9ICdGZWVkVHlwZSdcclxufVxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIEZlZWRPYmplY3QgPSB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgdGFnczogRmVlZFRhZ1tdO1xyXG4gICAgYnVuZGxlcz86IEJ1bmRsZU9iamVjdFtdXHJcbiAgICBhdXRob3I/OiBVc2VyO1xyXG4gICAgbGlrZXM/OiAgVXNlcltdO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgQnVuZGxlT2JqZWN0ID0ge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgdGFnczogQnVuZGxlVGFnW107XHJcbiAgICBmZWVkcz86IEZlZWRPYmplY3RbXVxyXG4gICAgYXV0aG9yPzogVXNlcjtcclxuICAgIGxpa2VzPzogIFVzZXJbXTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2VsZWN0ZWRGZWVkU3RhdGUgPSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZmVlZHM6IEZlZWRbXVxyXG4gICAgZWRpdE1vZGU6IGJvb2xlYW47XHJcbiAgICBuZXdNb2RlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYWRnZUZpZWxkTmFtZSB7XHJcbiAgIHRhZ3MgPSAndGFncycsXHJcbiAgIGZlZWRzID0gJ2ZlZWRzJyxcclxuICAgYnVuZGxlcyA9ICdidW5kbGVzJ1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGVudW0gQWN0aW9uVHlwZSB7XHJcbiAgIEFERCA9ICdBREQnLFxyXG4gICBDUkVBVEUgPSAnQ1JFQVRFJyxcclxuICAgTk9ORSA9ICdOT05FJ1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBOZXdJdGVtU3RhdGUgPSAgRmVlZE9iamVjdCB8IEJ1bmRsZU9iamVjdDsiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XHJcbiAgICBfX3VzZXI6IGFueVxyXG59XHJcblxyXG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcihjb29raWUgPSAnJykge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX191c2VyKSB7XHJcbiAgICByZXR1cm4gd2luZG93Ll9fdXNlclxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAnL2FwaS9tZScsXHJcbiAgICBjb29raWVcclxuICAgICAgPyB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIGNvb2tpZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICA6IHt9XHJcbiAgKVxyXG5cclxuICBpZiAoIXJlcy5vaykge1xyXG4gICAgZGVsZXRlIHdpbmRvdy5fX3VzZXJcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgd2luZG93Ll9fdXNlciA9IGpzb25cclxuICB9XHJcbiAgcmV0dXJuIGpzb25cclxufVxyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRmV0Y2hVc2VyKHsgcmVxdWlyZWQgfSA9IHt9KSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoXHJcbiAgICAoKSA9PiAhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fX3VzZXIpXHJcbiAgKVxyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3aW5kb3cuX191c2VyIHx8IG51bGxcclxuICB9KVxyXG5cclxuICB1c2VFZmZlY3QoXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIGlmICghbG9hZGluZyAmJiB1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICBsZXQgaXNNb3VudGVkID0gdHJ1ZVxyXG5cclxuICAgICAgZmV0Y2hVc2VyKCkudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgIC8vIE9ubHkgc2V0IHRoZSB1c2VyIGlmIHRoZSBjb21wb25lbnQgaXMgc3RpbGwgbW91bnRlZFxyXG4gICAgICAgIGlmIChpc01vdW50ZWQpIHtcclxuICAgICAgICAgIC8vIFdoZW4gdGhlIHVzZXIgaXMgbm90IGxvZ2dlZCBpbiBidXQgbG9naW4gaXMgcmVxdWlyZWRcclxuICAgICAgICAgIGlmIChyZXF1aXJlZCAmJiAhdXNlcikge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYXBpL2xvZ2luJ1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFVzZXIodXNlcilcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBpc01vdW50ZWQgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgW11cclxuICApXHJcblxyXG4gIHJldHVybiB7IHVzZXIsIGxvYWRpbmcgfVxyXG59IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==