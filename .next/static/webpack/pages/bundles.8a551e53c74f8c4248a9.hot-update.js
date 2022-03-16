self["webpackHotUpdate_N_E"]("pages/bundles",{

/***/ "./pages/bundles.tsx":
/*!***************************!*\
  !*** ./pages/bundles.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_itemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/itemList */ "./components/itemList.tsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "./node_modules/@auth0/nextjs-auth0/dist/index.browser.js");
/* harmony import */ var _components_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/svg */ "./components/svg.tsx");
/* harmony import */ var _components_newEditItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/newEditItem */ "./components/newEditItem.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\pages\\bundles.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // import { useFetchUser } from '../utils/user';



var BundlesPage = function BundlesPage() {
  _s();

  var _useUser = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_6__.useUser)(),
      user = _useUser.user,
      error = _useUser.error,
      isLoading = _useUser.isLoading;

  var initialSelected = {
    id: null,
    feeds: [],
    editMode: false,
    newMode: false
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialSelected),
      selected = _useState[0],
      setSelected = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "grid grid-cols-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        className: "grid-cols-1 justify-start flex text-lr font-medium py-4",
        children: "Bundles Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this), user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        onClick: function onClick(e) {
          e.persist();
          setSelected(function (currState) {
            return _objectSpread(_objectSpread({}, currState), {}, {
              newMode: !currState.newMode,
              editMode: false
            });
          });
        },
        className: "flex grid-cols-1 justify-end cursor-pointer",
        children: [selected.newMode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_svg__WEBPACK_IMPORTED_MODULE_7__.Minus, {
          className: "h-6 w-6 text-".concat(selected.newMode ? 'gray' : 'blue', "-500 mt-4")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 29
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_svg__WEBPACK_IMPORTED_MODULE_7__.Plus, {
          className: "h-6 w-6 text-".concat(selected.newMode ? 'gray' : 'blue', "-500 mt-4")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 31
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          className: "grid-cols-1 justify-start flex              text-lg font-medium py-4 text-".concat(selected.newMode ? "gray" : "blue"),
          children: "New Bundle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 26
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), (selected.editMode || selected.newMode) && user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_newEditItem__WEBPACK_IMPORTED_MODULE_8__.NewEditItem, {
      type: _utils_types__WEBPACK_IMPORTED_MODULE_5__.ItemType.BundleType // selected={selected}
      // setSelected={setSelected}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 22
    }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_itemList__WEBPACK_IMPORTED_MODULE_3__.ItemList, {
      type: _utils_types__WEBPACK_IMPORTED_MODULE_5__.ItemType.BundleType,
      useSelected: true,
      allowEdits: true,
      selected: selected,
      setSelected: setSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 23
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, _this);
};

_s(BundlesPage, "XalSeyqrREpApEOdDowDRmIBLLQ=", false, function () {
  return [_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_6__.useUser];
});

_c = BundlesPage;
/* harmony default export */ __webpack_exports__["default"] = (BundlesPage);

var _c;

$RefreshReg$(_c, "BundlesPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnVuZGxlcy50c3giXSwibmFtZXMiOlsiQnVuZGxlc1BhZ2UiLCJ1c2VVc2VyIiwidXNlciIsImVycm9yIiwiaXNMb2FkaW5nIiwiaW5pdGlhbFNlbGVjdGVkIiwiaWQiLCJmZWVkcyIsImVkaXRNb2RlIiwibmV3TW9kZSIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImUiLCJwZXJzaXN0IiwiY3VyclN0YXRlIiwiSXRlbVR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTs7QUFJQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsaUJBQ2FDLDREQUFPLEVBRHBCO0FBQUEsTUFDZEMsSUFEYyxZQUNkQSxJQURjO0FBQUEsTUFDUkMsS0FEUSxZQUNSQSxLQURRO0FBQUEsTUFDREMsU0FEQyxZQUNEQSxTQURDOztBQUV0QixNQUFNQyxlQUFrQyxHQUFHO0FBQ3ZDQyxNQUFFLEVBQUUsSUFEbUM7QUFFdkNDLFNBQUssRUFBRSxFQUZnQztBQUd2Q0MsWUFBUSxFQUFFLEtBSDZCO0FBSXZDQyxXQUFPLEVBQUU7QUFKOEIsR0FBM0M7O0FBRnNCLGtCQVNjQywrQ0FBUSxDQUFDTCxlQUFELENBVHRCO0FBQUEsTUFTWk0sUUFUWTtBQUFBLE1BU0ZDLFdBVEU7O0FBV3RCLHNCQUNJLDhEQUFDLHNEQUFEO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMseURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUlLVixJQUFJLGdCQUVEO0FBQ0EsZUFBTyxFQUFFLGlCQUFDVyxDQUFELEVBQU87QUFDZEEsV0FBQyxDQUFDQyxPQUFGO0FBQ0FGLHFCQUFXLENBQUMsVUFBQ0csU0FBRDtBQUFBLG1EQUNQQSxTQURPO0FBRVZOLHFCQUFPLEVBQUUsQ0FBQ00sU0FBUyxDQUFDTixPQUZWO0FBR1ZELHNCQUFRLEVBQUU7QUFIQTtBQUFBLFdBQUQsQ0FBWDtBQUtELFNBUkQ7QUFTQSxpQkFBUyxFQUFDLDZDQVRWO0FBQUEsbUJBV0tHLFFBQVEsQ0FBQ0YsT0FBVCxnQkFDRyw4REFBQyxrREFBRDtBQUNFLG1CQUFTLHlCQUNURSxRQUFRLENBQUNGLE9BQVQsR0FBbUIsTUFBbkIsR0FBNEIsTUFEbkI7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURILGdCQU1LLDhEQUFDLGlEQUFEO0FBQ0MsbUJBQVMseUJBQ1JFLFFBQVEsQ0FBQ0YsT0FBVCxHQUFtQixNQUFuQixHQUE0QixNQURwQjtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJWLGVBdUJLO0FBQ0csbUJBQVMsc0ZBQ1RFLFFBQVEsQ0FBQ0YsT0FBVCxrQkFEUyxDQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQyxHQWlDRCxJQXJDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQXdDUyxDQUFFRSxRQUFRLENBQUNILFFBQVQsSUFBcUJHLFFBQVEsQ0FBQ0YsT0FBaEMsS0FBNENQLElBQTVDLGdCQUNJLDhEQUFDLGdFQUFEO0FBQ0csVUFBSSxFQUFFYyw2REFEVCxDQUVHO0FBQ0E7O0FBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEdBS1ksSUE3Q3JCLGVBZ0RjLDhEQUFDLDBEQUFEO0FBQ0UsVUFBSSxFQUFFQSw2REFEUjtBQUVFLGlCQUFXLEVBQUUsSUFGZjtBQUdFLGdCQUFVLEVBQUUsSUFIZDtBQUlFLGNBQVEsRUFBRUwsUUFKWjtBQUtFLGlCQUFXLEVBQUVDO0FBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBESCxDQXJFRDs7R0FBTVosVztVQUNpQ0Msd0Q7OztLQURqQ0QsVztBQXVFTiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idW5kbGVzLjhhNTUxZTUzYzc0ZjhjNDI0OGE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSXRlbUxpc3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9pdGVtTGlzdFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxyXG5pbXBvcnQgeyBJdGVtVHlwZSwgU2VsZWN0ZWRGZWVkU3RhdGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXNcIjtcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xyXG5pbXBvcnQgeyBNaW51cywgUGx1cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3N2Z1wiXHJcbi8vIGltcG9ydCB7IHVzZUZldGNoVXNlciB9IGZyb20gJy4uL3V0aWxzL3VzZXInO1xyXG5pbXBvcnQgeyBOZXdFZGl0SXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbmV3RWRpdEl0ZW0nO1xyXG5cclxuXHJcblxyXG5jb25zdCBCdW5kbGVzUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlVXNlcigpO1xyXG4gICAgY29uc3QgaW5pdGlhbFNlbGVjdGVkOiBTZWxlY3RlZEZlZWRTdGF0ZSA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBmZWVkczogW10sXHJcbiAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgICAgIG5ld01vZGU6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IFsgc2VsZWN0ZWQsIHNldFNlbGVjdGVkIF0gPSB1c2VTdGF0ZShpbml0aWFsU2VsZWN0ZWQpO1xyXG4gICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZ3JpZC1jb2xzLTEganVzdGlmeS1zdGFydCBmbGV4IHRleHQtbHIgZm9udC1tZWRpdW0gcHktNFwiPlxyXG4gICAgICAgICAgICAgICAgQnVuZGxlcyBQYWdlXHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAge3VzZXIgPyAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wZXJzaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZCgoY3VyclN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jdXJyU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld01vZGU6ICFjdXJyU3RhdGUubmV3TW9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ3JpZC1jb2xzLTEganVzdGlmeS1lbmQgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkLm5ld01vZGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWludXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC02IHctNiB0ZXh0LSR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLm5ld01vZGUgPyAnZ3JheScgOiAnYmx1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0tNTAwIG10LTRgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTYgdy02IHRleHQtJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5uZXdNb2RlID8gJ2dyYXknIDogJ2JsdWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0tNTAwIG10LTRgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGdyaWQtY29scy0xIGp1c3RpZnktc3RhcnQgZmxleCAgICAgICAgICAgICAgdGV4dC1sZyBmb250LW1lZGl1bSBweS00IHRleHQtJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLm5ld01vZGUgPyBgZ3JheWAgOiBgYmx1ZWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBCdW5kbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyggc2VsZWN0ZWQuZWRpdE1vZGUgfHwgc2VsZWN0ZWQubmV3TW9kZSkgJiYgdXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgPE5ld0VkaXRJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e0l0ZW1UeXBlLkJ1bmRsZVR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz4gKSA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8SXRlbUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17SXRlbVR5cGUuQnVuZGxlVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlU2VsZWN0ZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RWRpdHM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVuZGxlc1BhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==