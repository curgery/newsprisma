(function() {
var exports = {};
exports.id = "pages/feeds";
exports.ids = ["pages/feeds"];
exports.modules = {

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
/* harmony import */ var _components_newEditItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/newEditItem */ "./components/newEditItem.tsx");
/* harmony import */ var _components_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/svg */ "./components/svg.tsx");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/user */ "./utils/user.ts");

var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\pages\\feeds.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const FeedsPage = () => {
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
        children: "Feeds Page"
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
          columnNumber: 29
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_svg__WEBPACK_IMPORTED_MODULE_5__.Plus, {
          className: `h-6 w-6 text-${selected.newMode ? 'gray' : 'blue'}-500 mt-4`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 29
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: `grid-cols-1 justify-start flex              text-lg font-medium py-4 text-${selected.newMode ? `gray` : `blue`}`,
          children: "New Feed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
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
      type: _utils_types__WEBPACK_IMPORTED_MODULE_6__.ItemType.FeedType,
      selected: selected,
      setSelected: setSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 66
    }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_itemList__WEBPACK_IMPORTED_MODULE_2__.ItemList, {
      type: _utils_types__WEBPACK_IMPORTED_MODULE_6__.ItemType.FeedType,
      useSelected: true,
      allowEdits: true,
      selected: selected,
      setSelected: setSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_itemList_tsx-components_layout_tsx-components_newEditItem_tsx"], function() { return __webpack_exec__("./pages/feeds.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9wYWdlcy9mZWVkcy50c3giLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsiRmVlZHNQYWdlIiwidXNlciIsImxvYWRpbmciLCJ1c2VGZXRjaFVzZXIiLCJpbml0aWFsU2VsZWN0ZWQiLCJpZCIsImZlZWRzIiwiZWRpdE1vZGUiLCJuZXdNb2RlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZVN0YXRlIiwiZSIsInBlcnNpc3QiLCJjdXJyU3RhdGUiLCJJdGVtVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDcEIsUUFBTTtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsTUFBb0JDLHlEQUFZLEVBQXRDO0FBQ0EsUUFBTUMsZUFBa0MsR0FBRztBQUN2Q0MsTUFBRSxFQUFFLElBRG1DO0FBRXZDQyxTQUFLLEVBQUUsRUFGZ0M7QUFHdkNDLFlBQVEsRUFBRSxLQUg2QjtBQUl2Q0MsV0FBTyxFQUFFO0FBSjhCLEdBQTNDO0FBT0UsUUFBTTtBQUFBLE9BQUVDLFFBQUY7QUFBQSxPQUFZQztBQUFaLE1BQTRCQywrQ0FBUSxDQUFDUCxlQUFELENBQTFDO0FBRUYsc0JBQ0ksOERBQUMsc0RBQUQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyx5REFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUlLSCxJQUFJLGdCQUNEO0FBQ0EsZUFBTyxFQUFHVyxDQUFELElBQU87QUFDaEJBLFdBQUMsQ0FBQ0MsT0FBRjtBQUNBSCxxQkFBVyxDQUFFSSxTQUFELG9DQUNMQSxTQURLO0FBRVJOLG1CQUFPLEVBQUUsQ0FBQ00sU0FBUyxDQUFDTixPQUZaO0FBR1JELG9CQUFRLEVBQUU7QUFIRixZQUFELENBQVg7QUFLQyxTQVJEO0FBU0EsaUJBQVMsRUFBQyw2Q0FUVjtBQUFBLG1CQVdLRSxRQUFRLENBQUNELE9BQVQsZ0JBQ0csOERBQUMsa0RBQUQ7QUFDQSxtQkFBUyxFQUFHLGdCQUNaQyxRQUFRLENBQUNELE9BQVQsR0FBbUIsTUFBbkIsR0FBNEIsTUFDM0I7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURILGdCQU1HLDhEQUFDLGlEQUFEO0FBQU0sbUJBQVMsRUFBRyxnQkFDZEMsUUFBUSxDQUFDRCxPQUFULEdBQW1CLE1BQW5CLEdBQTRCLE1BQy9CO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQlIsZUFzQkk7QUFDSSxtQkFBUyxFQUFHLDZFQUNaQyxRQUFRLENBQUNELE9BQVQsR0FBb0IsTUFBcEIsR0FBNkIsTUFDaEMsRUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURDLEdBK0JHLElBbkNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQXNDSyxDQUFFQyxRQUFRLENBQUNGLFFBQVQsSUFBcUJFLFFBQVEsQ0FBQ0QsT0FBaEMsS0FBNENQLElBQTVDLGdCQUFvRCw4REFBQyxnRUFBRDtBQUFhLFVBQUksRUFBRWMsMkRBQW5CO0FBQXNDLGNBQVEsRUFBRU4sUUFBaEQ7QUFBMEQsaUJBQVcsRUFBRUM7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBcEQsR0FBOEksSUF0Q25KLGVBdUNJLDhEQUFDLDBEQUFEO0FBQVUsVUFBSSxFQUFFSywyREFBaEI7QUFBbUMsaUJBQVcsRUFBRSxJQUFoRDtBQUFzRCxnQkFBVSxFQUFFLElBQWxFO0FBQXdFLGNBQVEsRUFBRU4sUUFBbEY7QUFBNEYsaUJBQVcsRUFBRUM7QUFBekc7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUEyQ0gsQ0F0REQ7O0FBd0RBLCtEQUFlVixTQUFmLEU7Ozs7Ozs7Ozs7O0FDaEVBLDRDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2ZlZWRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEl0ZW1MaXN0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaXRlbUxpc3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcclxuaW1wb3J0IHsgTmV3RWRpdEl0ZW0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9uZXdFZGl0SXRlbVwiO1xyXG5pbXBvcnQgeyBNaW51cywgUGx1cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3N2Z1wiO1xyXG5pbXBvcnQgeyBJdGVtVHlwZSwgU2VsZWN0ZWRGZWVkU3RhdGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXNcIjtcclxuaW1wb3J0IHsgdXNlRmV0Y2hVc2VyIH0gZnJvbSBcIi4uL3V0aWxzL3VzZXJcIjtcclxuXHJcbmNvbnN0IEZlZWRzUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciwgbG9hZGluZyB9ID0gdXNlRmV0Y2hVc2VyKCk7XHJcbiAgICBjb25zdCBpbml0aWFsU2VsZWN0ZWQ6IFNlbGVjdGVkRmVlZFN0YXRlID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIGZlZWRzOiBbXSxcclxuICAgICAgICBlZGl0TW9kZTogZmFsc2UsXHJcbiAgICAgICAgbmV3TW9kZTogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgICAgY29uc3QgWyBzZWxlY3RlZCwgc2V0U2VsZWN0ZWQgXSA9IHVzZVN0YXRlKGluaXRpYWxTZWxlY3RlZCk7XHJcbiAgICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJncmlkLWNvbHMtMSBqdXN0aWZ5LXN0YXJ0IGZsZXggdGV4dC1sciBmb250LW1lZGl1bSBweS00XCI+XHJcbiAgICAgICAgICAgICAgICBGZWVkcyBQYWdlXHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wZXJzaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoKGN1cnJTdGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3VyclN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNb2RlOiAhY3VyclN0YXRlLm5ld01vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBncmlkLWNvbHMtMSBqdXN0aWZ5LWVuZCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQubmV3TW9kZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNaW51c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC02IHctNiB0ZXh0LSR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5uZXdNb2RlID8gJ2dyYXknIDogJ2JsdWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LTUwMCBtdC00YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGx1cyBjbGFzc05hbWU9e2BoLTYgdy02IHRleHQtJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5uZXdNb2RlID8gJ2dyYXknIDogJ2JsdWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LTUwMCBtdC00YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BncmlkLWNvbHMtMSBqdXN0aWZ5LXN0YXJ0IGZsZXggICAgICAgICAgICAgIHRleHQtbGcgZm9udC1tZWRpdW0gcHktNCB0ZXh0LSR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5uZXdNb2RlID8gYGdyYXlgIDogYGJsdWVgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV3IEZlZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsoIHNlbGVjdGVkLmVkaXRNb2RlIHx8IHNlbGVjdGVkLm5ld01vZGUpICYmIHVzZXIgPyAgPE5ld0VkaXRJdGVtIHR5cGU9e0l0ZW1UeXBlLkZlZWRUeXBlfSBzZWxlY3RlZD17c2VsZWN0ZWR9IHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH0gLz4gIDogbnVsbH1cclxuICAgICAgICAgICAgPEl0ZW1MaXN0IHR5cGU9e0l0ZW1UeXBlLkZlZWRUeXBlfSB1c2VTZWxlY3RlZD17dHJ1ZX0gYWxsb3dFZGl0cz17dHJ1ZX0gc2VsZWN0ZWQ9e3NlbGVjdGVkfSBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9Lz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVlZHNQYWdlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9