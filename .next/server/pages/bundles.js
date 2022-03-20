(function() {
var exports = {};
exports.id = "pages/bundles";
exports.ids = ["pages/bundles"];
exports.modules = {

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
    user
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
          lineNumber: 42,
          columnNumber: 29
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_svg__WEBPACK_IMPORTED_MODULE_5__.Plus, {
          className: `h-6 w-6 text-${selected.newMode ? 'gray' : 'blue'}-500 mt-4`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 31
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: `grid-cols-1 justify-start flex              text-lg font-medium py-4 text-${selected.newMode ? `gray` : `blue`}`,
          children: "New Bundle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 26
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, undefined) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined), (selected.editMode || selected.newMode) && user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_newEditItem__WEBPACK_IMPORTED_MODULE_7__.NewEditItem, {
      type: _utils_types__WEBPACK_IMPORTED_MODULE_4__.ItemType.BundleType,
      selected: selected,
      setSelected: setSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 22
    }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_itemList__WEBPACK_IMPORTED_MODULE_2__.ItemList, {
      type: _utils_types__WEBPACK_IMPORTED_MODULE_4__.ItemType.BundleType,
      useSelected: true,
      allowEdits: true,
      selected: selected,
      setSelected: setSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 23
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (BundlesPage);

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_itemList_tsx-components_layout_tsx-components_newEditItem_tsx"], function() { return __webpack_exec__("./pages/bundles.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9wYWdlcy9idW5kbGVzLnRzeCIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJCdW5kbGVzUGFnZSIsInVzZXIiLCJ1c2VGZXRjaFVzZXIiLCJpbml0aWFsU2VsZWN0ZWQiLCJpZCIsImZlZWRzIiwiZWRpdE1vZGUiLCJuZXdNb2RlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZVN0YXRlIiwiZSIsInBlcnNpc3QiLCJjdXJyU3RhdGUiLCJJdGVtVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBSUEsTUFBTUEsV0FBVyxHQUFHLE1BQU07QUFDdEIsUUFBTTtBQUFFQztBQUFGLE1BQVdDLHlEQUFZLEVBQTdCO0FBQ0EsUUFBTUMsZUFBa0MsR0FBRztBQUN2Q0MsTUFBRSxFQUFFLElBRG1DO0FBRXZDQyxTQUFLLEVBQUUsRUFGZ0M7QUFHdkNDLFlBQVEsRUFBRSxLQUg2QjtBQUl2Q0MsV0FBTyxFQUFFO0FBSjhCLEdBQTNDO0FBT0UsUUFBTTtBQUFBLE9BQUVDLFFBQUY7QUFBQSxPQUFZQztBQUFaLE1BQTRCQywrQ0FBUSxDQUFDUCxlQUFELENBQTFDO0FBRUYsc0JBQ0ksOERBQUMsc0RBQUQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyx5REFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUlLRixJQUFJLGdCQUNEO0FBQ0EsZUFBTyxFQUFHVSxDQUFELElBQU87QUFDZEEsV0FBQyxDQUFDQyxPQUFGO0FBQ0FILHFCQUFXLENBQUVJLFNBQUQsb0NBQ1BBLFNBRE87QUFFVk4sbUJBQU8sRUFBRSxDQUFDTSxTQUFTLENBQUNOLE9BRlY7QUFHVkQsb0JBQVEsRUFBRTtBQUhBLFlBQUQsQ0FBWDtBQUtELFNBUkQ7QUFTQSxpQkFBUyxFQUFDLDZDQVRWO0FBQUEsbUJBV0tFLFFBQVEsQ0FBQ0QsT0FBVCxnQkFDRyw4REFBQyxrREFBRDtBQUNFLG1CQUFTLEVBQUcsZ0JBQ1pDLFFBQVEsQ0FBQ0QsT0FBVCxHQUFtQixNQUFuQixHQUE0QixNQUM3QjtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREgsZ0JBTUssOERBQUMsaURBQUQ7QUFDQyxtQkFBUyxFQUFHLGdCQUNYQyxRQUFRLENBQUNELE9BQVQsR0FBbUIsTUFBbkIsR0FBNEIsTUFDN0I7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpCVixlQXVCSztBQUNHLG1CQUFTLEVBQUcsNkVBQ1pDLFFBQVEsQ0FBQ0QsT0FBVCxHQUFvQixNQUFwQixHQUE2QixNQUNoQyxFQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXZCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREMsR0FnQ0QsSUFwQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBdUNTLENBQUVDLFFBQVEsQ0FBQ0YsUUFBVCxJQUFxQkUsUUFBUSxDQUFDRCxPQUFoQyxLQUE0Q04sSUFBNUMsZ0JBQ0ksOERBQUMsZ0VBQUQ7QUFDRyxVQUFJLEVBQUVhLDZEQURUO0FBRUcsY0FBUSxFQUFFTixRQUZiO0FBR0csaUJBQVcsRUFBRUM7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixHQUtZLElBNUNyQixlQThDYyw4REFBQywwREFBRDtBQUNFLFVBQUksRUFBRUssNkRBRFI7QUFFRSxpQkFBVyxFQUFFLElBRmY7QUFHRSxnQkFBVSxFQUFFLElBSGQ7QUFJRSxjQUFRLEVBQUVOLFFBSlo7QUFLRSxpQkFBVyxFQUFFQztBQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBd0RILENBbkVEOztBQXFFQSwrREFBZVQsV0FBZixFOzs7Ozs7Ozs7OztBQ2hGQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9idW5kbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEl0ZW1MaXN0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaXRlbUxpc3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcclxuaW1wb3J0IHsgSXRlbVR5cGUsIFNlbGVjdGVkRmVlZFN0YXRlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcclxuaW1wb3J0IHsgTWludXMsIFBsdXMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdmdcIlxyXG5pbXBvcnQgeyB1c2VGZXRjaFVzZXIgfSBmcm9tICcuLi91dGlscy91c2VyJztcclxuaW1wb3J0IHsgTmV3RWRpdEl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL25ld0VkaXRJdGVtJztcclxuXHJcblxyXG5cclxuY29uc3QgQnVuZGxlc1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXIgfSA9IHVzZUZldGNoVXNlcigpO1xyXG4gICAgY29uc3QgaW5pdGlhbFNlbGVjdGVkOiBTZWxlY3RlZEZlZWRTdGF0ZSA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBmZWVkczogW10sXHJcbiAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgICAgIG5ld01vZGU6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IFsgc2VsZWN0ZWQsIHNldFNlbGVjdGVkIF0gPSB1c2VTdGF0ZShpbml0aWFsU2VsZWN0ZWQpO1xyXG4gICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZ3JpZC1jb2xzLTEganVzdGlmeS1zdGFydCBmbGV4IHRleHQtbHIgZm9udC1tZWRpdW0gcHktNFwiPlxyXG4gICAgICAgICAgICAgICAgQnVuZGxlcyBQYWdlXHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKChjdXJyU3RhdGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN1cnJTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TW9kZTogIWN1cnJTdGF0ZS5uZXdNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0TW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBncmlkLWNvbHMtMSBqdXN0aWZ5LWVuZCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQubmV3TW9kZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNaW51c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTYgdy02IHRleHQtJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQubmV3TW9kZSA/ICdncmF5JyA6ICdibHVlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfS01MDAgbXQtNGB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtNiB3LTYgdGV4dC0ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLm5ld01vZGUgPyAnZ3JheScgOiAnYmx1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS01MDAgbXQtNGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxoM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JpZC1jb2xzLTEganVzdGlmeS1zdGFydCBmbGV4ICAgICAgICAgICAgICB0ZXh0LWxnIGZvbnQtbWVkaXVtIHB5LTQgdGV4dC0ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQubmV3TW9kZSA/IGBncmF5YCA6IGBibHVlYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV3IEJ1bmRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7KCBzZWxlY3RlZC5lZGl0TW9kZSB8fCBzZWxlY3RlZC5uZXdNb2RlKSAmJiB1c2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICA8TmV3RWRpdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17SXRlbVR5cGUuQnVuZGxlVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPiApIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDxJdGVtTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtJdGVtVHlwZS5CdW5kbGVUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VTZWxlY3RlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dFZGl0cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdW5kbGVzUGFnZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==