(function() {
var exports = {};
exports.id = "pages/feeds";
exports.ids = ["pages/feeds"];
exports.modules = {

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

/***/ "./pages/feeds.tsx":
/*!*************************!*\
  !*** ./pages/feeds.tsx ***!
  \*************************/
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

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\pages\\feeds.tsx";





const FeedsPage = () => {
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "grid-cols-1 justify-start flex text-lr font-medium py-4",
        children: "Feeds Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_itemList__WEBPACK_IMPORTED_MODULE_2__.ItemList, {
      type: _utils_types__WEBPACK_IMPORTED_MODULE_4__.ItemType.FeedType,
      useSelected: true,
      allowEdits: true,
      selected: selected,
      setSelected: setSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FeedsPage);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_layout_tsx-components_notifyError_tsx-components_notifyLoading_tsx-components_oneL-b210c4"], function() { return __webpack_exec__("./pages/feeds.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL2l0ZW1MaXN0LnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9wYWdlcy9mZWVkcy50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJJdGVtTGlzdCIsInR5cGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlU2VsZWN0ZWQiLCJhbGxvd0VkaXRzIiwiaXNGZWVkIiwiSXRlbVR5cGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJGRUVEU19RVUVSWSIsIkJVTkRMRVNfUVVFUlkiLCJjb25zb2xlIiwibG9nIiwiZmVlZHMiLCJidW5kbGVzIiwiaXRlbUxpc3QiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJpZCIsImZpcnN0SXRlbSIsImVkaXRNb2RlIiwibmV3TW9kZSIsIm1hcCIsIml0ZW0iLCJGZWVkc1BhZ2UiLCJpbml0aWFsU2VsZWN0ZWQiLCJ1c2VTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sTUFBTUEs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RDtBQUFVLFVBQUksRUFBRXJCLDJEQUFoQjtBQUFtQyxpQkFBVyxFQUFFLElBQWhEO0FBQXNELGdCQUFVLEVBQUUsSUFBbEU7QUFBd0UsY0FBUSxFQUFFTCxRQUFsRjtBQUE0RixpQkFBVyxFQUFFQztBQUF6RztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBVUgsQ0FwQkQ7O0FBc0JBLCtEQUFld0IsU0FBZixFOzs7Ozs7Ozs7OztBQzNCQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9mZWVkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IEJVTkRMRVNfUVVFUlksIEZFRURTX1FVRVJZIH0gZnJvbSBcIi4uL3V0aWxzL2FwaS9ncmFwaHFsL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgQnVuZGxlT2JqZWN0LCBGZWVkT2JqZWN0LCBJdGVtVHlwZSwgU2VsZWN0ZWRGZWVkU3RhdGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXNcIlxyXG5pbXBvcnQgeyBOb3RpZnlMb2FkaW5nIH0gZnJvbSAnLi9ub3RpZnlMb2FkaW5nJztcclxuaW1wb3J0IHsgTm90aWZ5RXJyb3IgfSBmcm9tIFwiLi9ub3RpZnlFcnJvclwiO1xyXG5pbXBvcnQgeyBPbmVMaXN0SXRlbSB9IGZyb20gXCIuL29uZUxpc3RJdGVtXCI7XHJcbmltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtTGlzdCA9ICh7XHJcbiAgdHlwZSxcclxuICBzZWxlY3RlZCxcclxuICBzZXRTZWxlY3RlZCxcclxuICB1c2VTZWxlY3RlZCA9IGZhbHNlLFxyXG4gIGFsbG93RWRpdHNcclxufSA6IHtcclxuICAgIFxyXG4gICAgdHlwZTogSXRlbVR5cGU7XHJcbiAgICBzZWxlY3RlZD8gOiBTZWxlY3RlZEZlZWRTdGF0ZTtcclxuICAgIHNldFNlbGVjdGVkPzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248U2VsZWN0ZWRGZWVkU3RhdGU+PjtcclxuICAgIHVzZVNlbGVjdGVkPzogYm9vbGVhbjtcclxuICAgIGFsbG93RWRpdHM/OiBib29sZWFuO1xyXG4gIFxyXG4gIH0pID0+IHtcclxuICAgIGNvbnN0IGlzRmVlZCA9IHR5cGUgPT09IEl0ZW1UeXBlLkZlZWRUeXBlO1xyXG4gICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoXHJcbiAgICAgIGlzRmVlZCA/IEZFRURTX1FVRVJZIDogQlVORExFU19RVUVSWSxcclxuICAgICAgKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhsb2FkaW5nLCBlcnJvciwgZGF0YSlcclxuICAgIFxyXG4gICAgY29uc3QgeyBmZWVkcywgYnVuZGxlcyB9ID0gZGF0YSB8fCB7fTtcclxuICAgIGNvbnN0IGl0ZW1MaXN0ID0gaXNGZWVkID8gZmVlZHMgOiBidW5kbGVzO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYodXNlU2VsZWN0ZWQgJiYgaXRlbUxpc3QgJiYgaXRlbUxpc3QubGVuZ3RoID4gMCAmJiBzZWxlY3RlZC5pZCA9PT0gbnVsbCl7XHJcbiAgICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSBpdGVtTGlzdFswXVxyXG4gICAgICAgICAgYXdhaXQgc2V0U2VsZWN0ZWQoe1xyXG4gICAgICAgICAgICBpZDogZmlyc3RJdGVtLmlkLFxyXG4gICAgICAgICAgICBmZWVkczogaXNGZWVkID8gW2ZpcnN0SXRlbV0gOiBmaXJzdEl0ZW1bJ2ZlZWRzJ10sXHJcbiAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgbmV3TW9kZTogZmFsc2UsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pICgpO1xyXG4gICAgfSk7XHJcblxyXG4gICBcclxuICAgXHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICAgIDxOb3RpZnlMb2FkaW5nIC8+XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gPE5vdGlmeUVycm9yIC8+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0zIG1kOmdyaWQtY29scy0yIGdhcC00XCI+XHJcbiAgICAgICAge2l0ZW1MaXN0ICYmIGl0ZW1MaXN0Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICBpdGVtTGlzdC5tYXAoKGl0ZW06IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3QpID0+IChcclxuICAgICAgICAgIDxPbmVMaXN0SXRlbVxyXG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIHVzZVNlbGVjdGVkPXt1c2VTZWxlY3RlZH1cclxuICAgICAgICAgICAgYWxsb3dFZGl0cz17YWxsb3dFZGl0c31cclxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XHJcblxyXG4gICAgICAgICAgLz4pKVxyXG4gICAgICAgICkgOiAoPHA+Tm9uZSBhcmUgcHJlc2VudC4gV2h5IG5vdCBhZGQgb25lPzwvcD4pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICAgICApXHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSXRlbUxpc3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9pdGVtTGlzdFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxyXG5pbXBvcnQgeyBJdGVtVHlwZSwgU2VsZWN0ZWRGZWVkU3RhdGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXNcIjtcclxuXHJcbmNvbnN0IEZlZWRzUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWxTZWxlY3RlZDogU2VsZWN0ZWRGZWVkU3RhdGUgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgZmVlZHM6IFtdLFxyXG4gICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgICBuZXdNb2RlOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICBjb25zdCBbIHNlbGVjdGVkLCBzZXRTZWxlY3RlZCBdID0gdXNlU3RhdGUoaW5pdGlhbFNlbGVjdGVkKTtcclxuICAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImdyaWQtY29scy0xIGp1c3RpZnktc3RhcnQgZmxleCB0ZXh0LWxyIGZvbnQtbWVkaXVtIHB5LTRcIj5cclxuICAgICAgICAgICAgICAgIEZlZWRzIFBhZ2VcclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8SXRlbUxpc3QgdHlwZT17SXRlbVR5cGUuRmVlZFR5cGV9IHVzZVNlbGVjdGVkPXt0cnVlfSBhbGxvd0VkaXRzPXt0cnVlfSBzZWxlY3RlZD17c2VsZWN0ZWR9IHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH0vPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkc1BhZ2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9