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
/* harmony import */ var _components_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/svg */ "./components/svg.tsx");
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/user */ "./utils/user.ts");
/* harmony import */ var _components_newEditItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/newEditItem */ "./components/newEditItem.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\pages\\bundles.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var BundlesPage = function BundlesPage() {
  _s();

  var _useFetchUser = (0,_utils_user__WEBPACK_IMPORTED_MODULE_7__.useFetchUser)(),
      user = _useFetchUser.user;

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
        children: [selected.newMode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_svg__WEBPACK_IMPORTED_MODULE_6__.Minus, {
          className: "h-6 w-6 text-".concat(selected.newMode ? 'gray' : 'blue', "-500 mt-4")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 29
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_svg__WEBPACK_IMPORTED_MODULE_6__.Plus, {
          className: "h-6 w-6 text-".concat(selected.newMode ? 'gray' : 'blue', "-500 mt-4")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 31
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          className: "grid-cols-1 justify-start flex              text-lg font-medium py-4 text-".concat(selected.newMode ? "gray" : "blue"),
          children: "New Bundle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 26
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), (selected.editMode || selected.newMode) && user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_newEditItem__WEBPACK_IMPORTED_MODULE_8__.NewEditItem, {
      type: _utils_types__WEBPACK_IMPORTED_MODULE_5__.ItemType.BundleType,
      selected: selected,
      setSelected: setSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 22
    }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_itemList__WEBPACK_IMPORTED_MODULE_3__.ItemList, {
      type: _utils_types__WEBPACK_IMPORTED_MODULE_5__.ItemType.BundleType,
      useSelected: true,
      allowEdits: true,
      selected: selected,
      setSelected: setSelected
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 23
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, _this);
};

_s(BundlesPage, "OSa6EAOamUOqc3XxpAuHYy+ntL8=", false, function () {
  return [_utils_user__WEBPACK_IMPORTED_MODULE_7__.useFetchUser];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnVuZGxlcy50c3giXSwibmFtZXMiOlsiQnVuZGxlc1BhZ2UiLCJ1c2VGZXRjaFVzZXIiLCJ1c2VyIiwiaW5pdGlhbFNlbGVjdGVkIiwiaWQiLCJmZWVkcyIsImVkaXRNb2RlIiwibmV3TW9kZSIsInVzZVN0YXRlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImUiLCJwZXJzaXN0IiwiY3VyclN0YXRlIiwiSXRlbVR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUlBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxzQkFDTEMseURBQVksRUFEUDtBQUFBLE1BQ2RDLElBRGMsaUJBQ2RBLElBRGM7O0FBRXRCLE1BQU1DLGVBQWtDLEdBQUc7QUFDdkNDLE1BQUUsRUFBRSxJQURtQztBQUV2Q0MsU0FBSyxFQUFFLEVBRmdDO0FBR3ZDQyxZQUFRLEVBQUUsS0FINkI7QUFJdkNDLFdBQU8sRUFBRTtBQUo4QixHQUEzQzs7QUFGc0Isa0JBU2NDLCtDQUFRLENBQUNMLGVBQUQsQ0FUdEI7QUFBQSxNQVNaTSxRQVRZO0FBQUEsTUFTRkMsV0FURTs7QUFXdEIsc0JBQ0ksOERBQUMsc0RBQUQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyx5REFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBSUtSLElBQUksZ0JBQ0Q7QUFDQSxlQUFPLEVBQUUsaUJBQUNTLENBQUQsRUFBTztBQUNkQSxXQUFDLENBQUNDLE9BQUY7QUFDQUYscUJBQVcsQ0FBQyxVQUFDRyxTQUFEO0FBQUEsbURBQ1BBLFNBRE87QUFFVk4scUJBQU8sRUFBRSxDQUFDTSxTQUFTLENBQUNOLE9BRlY7QUFHVkQsc0JBQVEsRUFBRTtBQUhBO0FBQUEsV0FBRCxDQUFYO0FBS0QsU0FSRDtBQVNBLGlCQUFTLEVBQUMsNkNBVFY7QUFBQSxtQkFXS0csUUFBUSxDQUFDRixPQUFULGdCQUNHLDhEQUFDLGtEQUFEO0FBQ0UsbUJBQVMseUJBQ1RFLFFBQVEsQ0FBQ0YsT0FBVCxHQUFtQixNQUFuQixHQUE0QixNQURuQjtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsZ0JBTUssOERBQUMsaURBQUQ7QUFDQyxtQkFBUyx5QkFDUkUsUUFBUSxDQUFDRixPQUFULEdBQW1CLE1BQW5CLEdBQTRCLE1BRHBCO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQlYsZUF1Qks7QUFDRyxtQkFBUyxzRkFDVEUsUUFBUSxDQUFDRixPQUFULGtCQURTLENBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURDLEdBZ0NELElBcENSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBdUNTLENBQUVFLFFBQVEsQ0FBQ0gsUUFBVCxJQUFxQkcsUUFBUSxDQUFDRixPQUFoQyxLQUE0Q0wsSUFBNUMsZ0JBQ0ksOERBQUMsZ0VBQUQ7QUFDRyxVQUFJLEVBQUVZLDZEQURUO0FBRUcsY0FBUSxFQUFFTCxRQUZiO0FBR0csaUJBQVcsRUFBRUM7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEdBS1ksSUE1Q3JCLGVBOENjLDhEQUFDLDBEQUFEO0FBQ0UsVUFBSSxFQUFFSSw2REFEUjtBQUVFLGlCQUFXLEVBQUUsSUFGZjtBQUdFLGdCQUFVLEVBQUUsSUFIZDtBQUlFLGNBQVEsRUFBRUwsUUFKWjtBQUtFLGlCQUFXLEVBQUVDO0FBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdESCxDQW5FRDs7R0FBTVYsVztVQUNlQyxxRDs7O0tBRGZELFc7QUFxRU4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnVuZGxlcy5jN2MxYWJkZjliZjFhOWJkMTJmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEl0ZW1MaXN0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaXRlbUxpc3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcclxuaW1wb3J0IHsgSXRlbVR5cGUsIFNlbGVjdGVkRmVlZFN0YXRlIH0gZnJvbSBcIi4uL3V0aWxzL3R5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcclxuaW1wb3J0IHsgTWludXMsIFBsdXMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdmdcIlxyXG5pbXBvcnQgeyB1c2VGZXRjaFVzZXIgfSBmcm9tICcuLi91dGlscy91c2VyJztcclxuaW1wb3J0IHsgTmV3RWRpdEl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL25ld0VkaXRJdGVtJztcclxuXHJcblxyXG5cclxuY29uc3QgQnVuZGxlc1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXIgfSA9IHVzZUZldGNoVXNlcigpO1xyXG4gICAgY29uc3QgaW5pdGlhbFNlbGVjdGVkOiBTZWxlY3RlZEZlZWRTdGF0ZSA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBmZWVkczogW10sXHJcbiAgICAgICAgZWRpdE1vZGU6IGZhbHNlLFxyXG4gICAgICAgIG5ld01vZGU6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IFsgc2VsZWN0ZWQsIHNldFNlbGVjdGVkIF0gPSB1c2VTdGF0ZShpbml0aWFsU2VsZWN0ZWQpO1xyXG4gICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZ3JpZC1jb2xzLTEganVzdGlmeS1zdGFydCBmbGV4IHRleHQtbHIgZm9udC1tZWRpdW0gcHktNFwiPlxyXG4gICAgICAgICAgICAgICAgQnVuZGxlcyBQYWdlXHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKChjdXJyU3RhdGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN1cnJTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TW9kZTogIWN1cnJTdGF0ZS5uZXdNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0TW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBncmlkLWNvbHMtMSBqdXN0aWZ5LWVuZCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQubmV3TW9kZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNaW51c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTYgdy02IHRleHQtJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQubmV3TW9kZSA/ICdncmF5JyA6ICdibHVlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfS01MDAgbXQtNGB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtNiB3LTYgdGV4dC0ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLm5ld01vZGUgPyAnZ3JheScgOiAnYmx1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS01MDAgbXQtNGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxoM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JpZC1jb2xzLTEganVzdGlmeS1zdGFydCBmbGV4ICAgICAgICAgICAgICB0ZXh0LWxnIGZvbnQtbWVkaXVtIHB5LTQgdGV4dC0ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQubmV3TW9kZSA/IGBncmF5YCA6IGBibHVlYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV3IEJ1bmRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7KCBzZWxlY3RlZC5lZGl0TW9kZSB8fCBzZWxlY3RlZC5uZXdNb2RlKSAmJiB1c2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICA8TmV3RWRpdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17SXRlbVR5cGUuQnVuZGxlVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPiApIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDxJdGVtTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtJdGVtVHlwZS5CdW5kbGVUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VTZWxlY3RlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dFZGl0cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdW5kbGVzUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9