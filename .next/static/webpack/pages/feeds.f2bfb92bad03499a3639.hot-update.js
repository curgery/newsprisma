self["webpackHotUpdate_N_E"]("pages/feeds",{

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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/api/graphql/mutations */ "./utils/api/graphql/mutations.ts");
/* harmony import */ var _utils_prepareUpdateObj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/prepareUpdateObj */ "./utils/prepareUpdateObj.ts");
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/types */ "./utils/types.ts");
/* harmony import */ var _badgeList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badgeList */ "./components/badgeList.tsx");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./svg */ "./components/svg.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\UdemyStuff\\PrismaStuff\\newsprisma\\components\\newEditItem.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var NewEditItem = function NewEditItem(_ref) {
  _s();

  var type = _ref.type,
      selected = _ref.selected,
      setSelected = _ref.setSelected;
  var isFeed = type === _utils_types__WEBPACK_IMPORTED_MODULE_5__.ItemType.FeedType;
  var initialFeed = {
    name: "",
    url: "",
    tags: []
  };
  var initialBundle = {
    name: "",
    description: "",
    tags: [],
    feeds: []
  };
  var initialState = isFeed ? initialFeed : initialBundle;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialState),
      currentItem = _useState[0],
      setItem = _useState[1];

  var inputFields = isFeed ? ['name', 'url'] : ['name', 'description'];

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useMutation)(isFeed ? _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__.CREATE_FEED_MUTATION : _utils_api_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__.CREATE_BUNDLE_MUTATION),
      _useMutation2 = (0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation, 2),
      createItemMutation = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      createLoading = _useMutation2$.loading,
      createError = _useMutation2$.error;

  if (createLoading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_7__.WaitingClock, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 14
    }, _this);
  }

  if (createError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg__WEBPACK_IMPORTED_MODULE_7__.ErrorSign, {
      className: "my-20 h-10 w-10 text-gray-500 m-auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 14
    }, _this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        var data = (0,_utils_prepareUpdateObj__WEBPACK_IMPORTED_MODULE_4__.prepareNewUpdateObj)(currentItem);
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-span-6",
          children: inputFields.map(function (name) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: name
            }, name, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 19
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 16
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "py-4 ".concat(isFeed ? null : 'pt-28'),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            className: "py-4 ".concat("bg-".concat(isFeed ? 'green' : 'purple', "-400 "), " hover:bg-", isFeed ? 'green' : 'purple', "-700 text-white font-bold px-12 rounded"),
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 16
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 10
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(NewEditItem, "d4JgydN2We5n+n5AAyECT9Ke4mU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useMutation];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdFZGl0SXRlbS50c3giXSwibmFtZXMiOlsiTmV3RWRpdEl0ZW0iLCJ0eXBlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImlzRmVlZCIsIkl0ZW1UeXBlIiwiaW5pdGlhbEZlZWQiLCJuYW1lIiwidXJsIiwidGFncyIsImluaXRpYWxCdW5kbGUiLCJkZXNjcmlwdGlvbiIsImZlZWRzIiwiaW5pdGlhbFN0YXRlIiwidXNlU3RhdGUiLCJjdXJyZW50SXRlbSIsInNldEl0ZW0iLCJpbnB1dEZpZWxkcyIsInVzZU11dGF0aW9uIiwiQ1JFQVRFX0ZFRURfTVVUQVRJT04iLCJDUkVBVEVfQlVORExFX01VVEFUSU9OIiwiY3JlYXRlSXRlbU11dGF0aW9uIiwiY3JlYXRlTG9hZGluZyIsImxvYWRpbmciLCJjcmVhdGVFcnJvciIsImVycm9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInByZXBhcmVOZXdVcGRhdGVPYmoiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiQmFkZ2VGaWVsZE5hbWUiLCJBY3Rpb25UeXBlIiwiQ1JFQVRFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BU3JCO0FBQUE7O0FBQUEsTUFSSEMsSUFRRyxRQVJIQSxJQVFHO0FBQUEsTUFQSEMsUUFPRyxRQVBIQSxRQU9HO0FBQUEsTUFOSEMsV0FNRyxRQU5IQSxXQU1HO0FBQ0YsTUFBTUMsTUFBTSxHQUFHSCxJQUFJLEtBQUtJLDJEQUF4QjtBQUNBLE1BQU1DLFdBQXVCLEdBQUc7QUFBQ0MsUUFBSSxFQUFFLEVBQVA7QUFBV0MsT0FBRyxFQUFFLEVBQWhCO0FBQW9CQyxRQUFJLEVBQUU7QUFBMUIsR0FBaEM7QUFDQSxNQUFNQyxhQUEyQixHQUFHO0FBQUNILFFBQUksRUFB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c0NGLENBaEVNOztHQUFNSixXO1VBaUJzRWtCLHVEOzs7S0FqQnRFbEIsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mZWVkcy5mMmJmYjkyYmFkMDM0OTlhMzYzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDUkVBVEVfQlVORExFX01VVEFUSU9OLCBDUkVBVEVfRkVFRF9NVVRBVElPTiB9IGZyb20gJy4uL3V0aWxzL2FwaS9ncmFwaHFsL211dGF0aW9ucyc7XHJcbmltcG9ydCB7IHByZXBhcmVOZXdVcGRhdGVPYmogfSBmcm9tICcuLi91dGlscy9wcmVwYXJlVXBkYXRlT2JqJztcclxuaW1wb3J0IHsgQWN0aW9uVHlwZSwgQmFkZ2VGaWVsZE5hbWUsIEJ1bmRsZU9iamVjdCwgRmVlZE9iamVjdCwgSXRlbVR5cGUsIE5ld0l0ZW1TdGF0ZSwgU2VsZWN0ZWRGZWVkU3RhdGUgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IEJhZGdlTGlzdCB9IGZyb20gJy4vYmFkZ2VMaXN0JztcclxuaW1wb3J0IHsgRXJyb3JTaWduLCBXYWl0aW5nQ2xvY2sgfSBmcm9tICcuL3N2Zyc7XHJcblxyXG5leHBvcnQgY29uc3QgTmV3RWRpdEl0ZW0gPSAoe1xyXG4gICB0eXBlLFxyXG4gICBzZWxlY3RlZCxcclxuICAgc2V0U2VsZWN0ZWQsXHJcbn06IHtcclxuICAgdHlwZTpJdGVtVHlwZTtcclxuICAgc2VsZWN0ZWQ6IFNlbGVjdGVkRmVlZFN0YXRlO1xyXG4gICBzZXRTZWxlY3RlZDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248U2VsZWN0ZWRGZWVkU3RhdGU+PlxyXG5cclxufSkgPT4ge1xyXG4gICAgY29uc3QgaXNGZWVkID0gdHlwZSA9PT0gSXRlbVR5cGUuRmVlZFR5cGVcclxuICAgIGNvbnN0IGluaXRpYWxGZWVkOiBGZWVkT2JqZWN0ID0ge25hbWU6IFwiXCIsIHVybDogXCJcIiwgdGFnczogW119O1xyXG4gICAgY29uc3QgaW5pdGlhbEJ1bmRsZTogQnVuZGxlT2JqZWN0ID0ge25hbWU6IFwiXCIsIGRlc2NyaXB0aW9uOiBcIlwiLCB0YWdzOiBbXSwgZmVlZHM6IFtdfTtcclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZTogTmV3SXRlbVN0YXRlID0gaXNGZWVkID8gaW5pdGlhbEZlZWQgOiBpbml0aWFsQnVuZGxlO1xyXG4gICAgY29uc3QgW2N1cnJlbnRJdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlPE5ld0l0ZW1TdGF0ZT4oaW5pdGlhbFN0YXRlKVxyXG4gICAgY29uc3QgaW5wdXRGaWVsZHMgPSBpc0ZlZWQgPyBbJ25hbWUnLCAndXJsJ10gOiBbJ25hbWUnLCAnZGVzY3JpcHRpb24nXTtcclxuXHJcbiAgIGNvbnN0IFsgY3JlYXRlSXRlbU11dGF0aW9uLCB7IGxvYWRpbmc6IGNyZWF0ZUxvYWRpbmcsIGVycm9yOiBjcmVhdGVFcnJvciB9IF0gID0gdXNlTXV0YXRpb24oaXNGZWVkID8gQ1JFQVRFX0ZFRURfTVVUQVRJT04gOiBDUkVBVEVfQlVORExFX01VVEFUSU9OKTtcclxuXHJcbiAgIGlmKGNyZWF0ZUxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxXYWl0aW5nQ2xvY2sgY2xhc3NOYW1lPVwibXktMjAgaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvXCIvPlxyXG4gICB9ICBcclxuICAgaWYoY3JlYXRlRXJyb3IpIHtcclxuICAgICAgcmV0dXJuIDxFcnJvclNpZ24gY2xhc3NOYW1lPVwibXktMjAgaC0xMCB3LTEwIHRleHQtZ3JheS01MDAgbS1hdXRvXCIvPlxyXG4gICB9IFxyXG4gICBcclxuICAgcmV0dXJuIChcclxuICAgICA8PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICBjb25zdCBkYXRhID0gcHJlcGFyZU5ld1VwZGF0ZU9iaihjdXJyZW50SXRlbSlcclxuICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgfX0gPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEyIGdhcC00IHJvdW5kZWQtbWQgYm9yZGVyLTQgbXktNCBweS0yIHB4LTRcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNvbC1zcGFuLTEyIHRleHQtbGcgZm9udC1tZWRpdW0gcHktMlwiPlxyXG4gICAgICAgICAgICAgICB7aXNGZWVkID8gXCJOZXcgRmVlZFwiIDogXCJOZXcgQnVuZGxlXCJ9XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNlwiPlxyXG4gICAgICAgICAgICAgICB7aW5wdXRGaWVsZHMubWFwKChuYW1lKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIGtleT17bmFtZX0+e25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi02Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTInPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibGFjayBweS0yJz5cclxuICAgICAgICAgICAgICAgICAgVGFnczpcclxuICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTInPlxyXG4gICAgICAgICAgICAgICAgICA8QmFkZ2VMaXN0IGZpZWxkTmFtZT17QmFkZ2VGaWVsZE5hbWUudGFnc30gc2V0SXRlbT17c2V0SXRlbX0gaXRlbT17Y3VycmVudEl0ZW19IGFjdGlvbj17QWN0aW9uVHlwZS5DUkVBVEV9Lz5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BweS00ICR7aXNGZWVkID8gbnVsbCA6ICdwdC0yOCd9YH0+XHJcbiAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2BweS00ICR7YGJnLSR7aXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnfS00MDAgYH0gaG92ZXI6YmctJHtcclxuICAgICAgICAgICAgICAgaXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnXHJcbiAgICAgICAgICAgICAgIH0tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB4LTEyIHJvdW5kZWRgfSB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PiBcclxuICAgICAgPC9mb3JtPlxyXG4gICAgIDwvPlxyXG4gICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==