self["webpackHotUpdate_N_E"]("pages/bundles",{

/***/ "./components/newEditItem.tsx":
/*!************************************!*\
  !*** ./components/newEditItem.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewEditItem": function() { return /* binding */ NewEditItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/api/graphql/mutations */ "./utils/api/graphql/mutations.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\newEditItem.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var NewEditItem = function NewEditItem(_ref) {
  _s();

  var type = _ref.type,
      selected = _ref.selected,
      setSelected = _ref.setSelected;
  var isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_4__.ItemType.FeedType;
  var initialFeed = {
    name: "",
    url: "",
    tags: []
  };
  var initialBundle = {
    name: "",
    description: "",
    tags: []
  };
  var initialState = isFeed ? initialFeed : initialBundle;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialState),
      currentItem = _useState[0],
      setItem = _useState[1];

  var inputFields = isFeed ? ['name', 'url'] : ['name', 'description'];

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation)(isFeed ? _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__.CREATE_FEED_MUTATION : _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__.CREATE_BUNDLE_MUTATION),
      _useMutation2 = (0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation, 2),
      createItemMutation = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      createLoading = _useMutation2$.loading,
      createError = _useMutation2$.error;

  if (createLoading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_5__.WaitingClock, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 14
    }, _this);
  }

  if (createError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_5__.ErrorSign, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 14
    }, _this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: function onSubmit(e) {
        e.preventDefault(); // const data = prepareNewUpdateObj(currentItem)
        // console.log(data)
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-12 gap-4 rounded-md border-4 my-4 py-2 px-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "col-span-12 text-lg font-medium py-2",
          children: isFeed ? "New Feed" : "New Bundle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6",
          children: inputFields.map(function (name) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: name
            }, name, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 19
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "py-4 ".concat(isFeed ? null : 'pt-28'),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "py-4 ".concat("bg-".concat(isFeed ? 'green' : 'purple', "-400 "), " hover:bg-", isFeed ? 'green' : 'purple', "-700 text-white font-bold px-12 rounded"),
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 16
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 10
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(NewEditItem, "d4JgydN2We5n+n5AAyECT9Ke4mU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation];
});

_c = NewEditItem;

var _c;

$RefreshReg$(_c, "NewEditItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdFZGl0SXRlbS50c3giXSwibmFtZXMiOlsiTmV3RWRpdEl0ZW0iLCJ0eXBlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImlzRmVlZCIsIkl0ZW1UeXBlIiwiaW5pdGlhbEZlZWQiLCJuYW1lIiwidXJsIiwidGFncyIsImluaXRpYWxCdW5kbGUiLCJkZXNjcmlwdGlvbiIsImluaXRpYWxTdGF0ZSIsInVzZVN0YXRlIiwiY3VycmVudEl0ZW0iLCJzZXRJdGVtIiwiaW5wdXRGaWVsZHMiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9GRUVEX01VVEFUSU9OIiwiQ1JFQVRFX0JVTkRMRV9NVVRBVElPTiIsImNyZWF0ZUl0ZW1NdXRhdGlvbiIsImNyZWF0ZUxvYWRpbmciLCJsb2FkaW5nIiwiY3JlYXRlRXJyb3IiLCJlcnJvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQVNyQjtBQUFBOztBQUFBLE1BUkhDLElBUUcsUUFSSEEsSUFRRztBQUFBLE1BUEhDLFFBT0csUUFQSEEsUUFPRztBQUFBLE1BTkhDLFdBTUcsUUFOSEEsV0FNRztBQUNGLE1BQU1DLE1BQU0sR0FBR0gsSUFBSSxLQUFLSSwyREFBeEI7QUFDQSxNQUFNQyxXQUF1QixHQUFHO0FBQUNDLFFBQUksRUFBRSxFQUFQO0FBQVdDLE9BQUcsRUFBRSxFQUFoQjtBQUFvQkMsUUFBSSxFQUFFO0FBQTFCLEdBQWhDO0FBQ0EsTUFBTUMsYUFBMkIsR0FBRztBQUFDSCxRQUFJLEVBQUUsRUFBUDtBQUFXSSxlQUFXLEVBQUUsRUFBeEI7QUFBNEJGLFFBQUksRUFBRTtBQUFsQyxHQUFwQztBQUNBLE1BQU1HLFlBQTBCLEdBQUdSLE1BQU0sR0FBR0UsV0FBSCxHQUFpQkksYUFBMUQ7O0FBSkUsa0JBSzZCRywrQ0FBUSxDQUFlRCxZQUFmLENBTHJDO0FBQUEsTUFLS0UsV0FMTDtBQUFBLE1BS2tCQyxPQUxsQjs7QUFNRixNQUFNQyxXQUFXLEdBQUdaLE1BQU0sR0FBRyxDQUFDLE1BQUQsRUFBUyxLQUFULENBQUgsR0FBcUIsQ0FBQyxNQUFELEVBQVMsYUFBVCxDQUEvQzs7QUFORSxxQkFRNkVhLDJEQUFXLENBQUNiLE1BQU0sR0FBR2MsOEVBQUgsR0FBMEJDLGdGQUFqQyxDQVJ4RjtBQUFBO0FBQUEsTUFRS0Msa0JBUkw7QUFBQTtBQUFBLE1BUW9DQyxhQVJwQyxrQkFRMkJDLE9BUjNCO0FBQUEsTUFRMERDLFdBUjFELGtCQVFtREMsS0FSbkQ7O0FBVUgsTUFBR0gsYUFBSCxFQUFrQjtBQUNmLHdCQUFPLDhEQUFDLDhDQUFEO0FBQWMsZUFBUyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNGOztBQUNELE1BQUdFLFdBQUgsRUFBZ0I7QUFDYix3QkFBTyw4REFBQywyQ0FBRDtBQUFXLGVBQVMsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRjs7QUFFRCxzQkFDRTtBQUFBLDJCQUNDO0FBQ0EsY0FBUSxFQUFFLGtCQUFDRSxDQUFELEVBQU87QUFDZEEsU0FBQyxDQUFDQyxjQUFGLEdBRGMsQ0FFZDtBQUNBO0FBQ0YsT0FMRDtBQUFBLDZCQU1HO0FBQUssaUJBQVMsRUFBQyw0REFBZjtBQUFBLGdDQUNHO0FBQUksbUJBQVMsRUFBQyxzQ0FBZDtBQUFBLG9CQUNJdEIsTUFBTSxHQUFHLFVBQUgsR0FBZ0I7QUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESCxlQUlHO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsb0JBQ0lZLFdBQVcsQ0FBQ1csR0FBWixDQUFnQixVQUFDcEIsSUFBRDtBQUFBLGdDQUNkO0FBQUEsd0JBQWVBO0FBQWYsZUFBUUEsSUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURjO0FBQUEsV0FBaEI7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpILGVBU0c7QUFBSyxtQkFBUyxpQkFBVUgsTUFBTSxHQUFHLElBQUgsR0FBVSxPQUExQixDQUFkO0FBQUEsaUNBQ0c7QUFBTyxxQkFBUyw4QkFBZ0JBLE1BQU0sR0FBRyxPQUFILEdBQWEsUUFBbkMsMEJBQ2hCQSxNQUFNLEdBQUcsT0FBSCxHQUFhLFFBREgsNENBQWhCO0FBRTJDLGdCQUFJLEVBQUM7QUFGaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQURGO0FBNEJGLENBdERNOztHQUFNSixXO1VBaUJzRWlCLHVEOzs7S0FqQnRFakIsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idW5kbGVzLjA4OWUxMGM1YzczYzM2MzVmMTU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENSRUFURV9CVU5ETEVfTVVUQVRJT04sIENSRUFURV9GRUVEX01VVEFUSU9OIH0gZnJvbSAnLi4vdXRpbHMvYXBpL2dyYXBocWwvbXV0YXRpb25zJztcclxuaW1wb3J0IHsgcHJlcGFyZU5ld1VwZGF0ZU9iaiB9IGZyb20gJy4uL3V0aWxzL3ByZXBhcmVVcGRhdGVPYmonO1xyXG5pbXBvcnQgeyBCdW5kbGVPYmplY3QsIEZlZWRPYmplY3QsIEl0ZW1UeXBlLCBOZXdJdGVtU3RhdGUsIFNlbGVjdGVkRmVlZFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBFcnJvclNpZ24sIFdhaXRpbmdDbG9jayB9IGZyb20gJy4vc3ZnJztcclxuXHJcbmV4cG9ydCBjb25zdCBOZXdFZGl0SXRlbSA9ICh7XHJcbiAgIHR5cGUsXHJcbiAgIHNlbGVjdGVkLFxyXG4gICBzZXRTZWxlY3RlZCxcclxufToge1xyXG4gICB0eXBlOkl0ZW1UeXBlO1xyXG4gICBzZWxlY3RlZDogU2VsZWN0ZWRGZWVkU3RhdGU7XHJcbiAgIHNldFNlbGVjdGVkOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxTZWxlY3RlZEZlZWRTdGF0ZT4+XHJcblxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBpc0ZlZWQgPSB0eXBlID09PSBJdGVtVHlwZS5GZWVkVHlwZVxyXG4gICAgY29uc3QgaW5pdGlhbEZlZWQ6IEZlZWRPYmplY3QgPSB7bmFtZTogXCJcIiwgdXJsOiBcIlwiLCB0YWdzOiBbXX07XHJcbiAgICBjb25zdCBpbml0aWFsQnVuZGxlOiBCdW5kbGVPYmplY3QgPSB7bmFtZTogXCJcIiwgZGVzY3JpcHRpb246IFwiXCIsIHRhZ3M6IFtdfTtcclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZTogTmV3SXRlbVN0YXRlID0gaXNGZWVkID8gaW5pdGlhbEZlZWQgOiBpbml0aWFsQnVuZGxlO1xyXG4gICAgY29uc3QgW2N1cnJlbnRJdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlPE5ld0l0ZW1TdGF0ZT4oaW5pdGlhbFN0YXRlKVxyXG4gICAgY29uc3QgaW5wdXRGaWVsZHMgPSBpc0ZlZWQgPyBbJ25hbWUnLCAndXJsJ10gOiBbJ25hbWUnLCAnZGVzY3JpcHRpb24nXTtcclxuXHJcbiAgIGNvbnN0IFsgY3JlYXRlSXRlbU11dGF0aW9uLCB7IGxvYWRpbmc6IGNyZWF0ZUxvYWRpbmcsIGVycm9yOiBjcmVhdGVFcnJvciB9IF0gID0gdXNlTXV0YXRpb24oaXNGZWVkID8gQ1JFQVRFX0ZFRURfTVVUQVRJT04gOiBDUkVBVEVfQlVORExFX01VVEFUSU9OKTtcclxuXHJcbiAgIGlmKGNyZWF0ZUxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxXYWl0aW5nQ2xvY2sgY2xhc3NOYW1lPVwibXktMjAgaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvXCIvPlxyXG4gICB9ICBcclxuICAgaWYoY3JlYXRlRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIDxFcnJvclNpZ24gY2xhc3NOYW1lPVwibXktMjAgaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvXCIvPlxyXG4gICB9IFxyXG4gICBcclxuICAgcmV0dXJuIChcclxuICAgICA8PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAvLyBjb25zdCBkYXRhID0gcHJlcGFyZU5ld1VwZGF0ZU9iaihjdXJyZW50SXRlbSlcclxuICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgfX0gPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEyIGdhcC00IHJvdW5kZWQtbWQgYm9yZGVyLTQgbXktNCBweS0yIHB4LTRcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIHRleHQtbGcgZm9udC1tZWRpdW0gcHktMlwiPlxyXG4gICAgICAgICAgICAgICB7aXNGZWVkID8gXCJOZXcgRmVlZFwiIDogXCJOZXcgQnVuZGxlXCJ9XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNlwiPlxyXG4gICAgICAgICAgICAgICB7aW5wdXRGaWVsZHMubWFwKChuYW1lKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIGtleT17bmFtZX0+e25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHktNCAke2lzRmVlZCA/IG51bGwgOiAncHQtMjgnfWB9PlxyXG4gICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtgcHktNCAke2BiZy0ke2lzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ30tNDAwIGB9IGhvdmVyOmJnLSR7XHJcbiAgICAgICAgICAgICAgIGlzRmVlZCA/ICdncmVlbicgOiAncHVycGxlJ1xyXG4gICAgICAgICAgICAgICB9LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweC0xMiByb3VuZGVkYH0gdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgIDwvZm9ybT5cclxuICAgICA8Lz5cclxuICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=