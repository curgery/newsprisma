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

        console.log(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uZXdFZGl0SXRlbS50c3giXSwibmFtZXMiOlsiTmV3RWRpdEl0ZW0iLCJ0eXBlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImlzRmVlZCIsIkl0ZW1UeXBlIiwiaW5pdGlhbEZlZWQiLCJuYW1lIiwidXJsIiwidGFncyIsImluaXRpYWxCdW5kbGUiLCJkZXNjcmlwdGlvbiIsImluaXRpYWxTdGF0ZSIsInVzZVN0YXRlIiwiY3VycmVudEl0ZW0iLCJzZXRJdGVtIiwiaW5wdXRGaWVsZHMiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9GRUVEX01VVEFUSU9OIiwiQ1JFQVRFX0JVTkRMRV9NVVRBVElPTiIsImNyZWF0ZUl0ZW1NdXRhdGlvbiIsImNyZWF0ZUxvYWRpbmciLCJsb2FkaW5nIiwiY3JlYXRlRXJyb3IiLCJlcnJvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BU3JCO0FBQUE7O0FBQUEsTUFSSEMsSUFRRyxRQVJIQSxJQVFHO0FBQUEsTUFQSEMsUUFPRyxRQVBIQSxRQU9HO0FBQUEsTUFOSEMsV0FNRyxRQU5IQSxXQU1HO0FBQ0YsTUFBTUMsTUFBTSxHQUFHSCxJQUFJLEtBQUtJLDJEQUF4QjtBQUNBLE1BQU1DLFdBQXVCLEdBQUc7QUFBQ0MsUUFBSSxFQUFFLEVBQVA7QUFBV0MsT0FBRyxFQUFFLEVBQWhCO0FBQW9CQyxRQUFJLEVBQUU7QUFBMUIsR0FBaEM7QUFDQSxNQUFNQyxhQUEyQixHQUFHO0FBQUNILFFBQUksRUFBRSxFQUFQO0FBQVdJLGVBQVcsRUFBRSxFQUF4QjtBQUE0QkYsUUFBSSxFQUFFO0FBQWxDLEdBQXBDO0FBQ0EsTUFBTUcsWUFBMEIsR0FBR1IsTUFBTSxHQUFHRSxXQUFILEdBQWlCSSxhQUExRDs7QUFKRSxrQkFLNkJHLCtDQUFRLENBQWVELFlBQWYsQ0FMckM7QUFBQSxNQUtLRSxXQUxMO0FBQUEsTUFLa0JDLE9BTGxCOztBQU1GLE1BQU1DLFdBQVcsR0FBR1osTUFBTSxHQUFHLENBQUMsTUFBRCxFQUFTLEtBQVQsQ0FBSCxHQUFxQixDQUFDLE1BQUQsRUFBUyxhQUFULENBQS9DOztBQU5FLHFCQVE2RWEsMkRBQVcsQ0FBQ2IsTUFBTSxHQUFHYyw4RUFBSCxHQUEwQkMsZ0ZBQWpDLENBUnhGO0FBQUE7QUFBQSxNQVFLQyxrQkFSTDtBQUFBO0FBQUEsTUFRb0NDLGFBUnBDLGtCQVEyQkMsT0FSM0I7QUFBQSxNQVEwREMsV0FSMUQsa0JBUW1EQyxLQVJuRDs7QUFVSCxNQUFHSCxhQUFILEVBQWtCO0FBQ2Ysd0JBQU8sOERBQUMsOENBQUQ7QUFBYyxlQUFTLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Y7O0FBQ0QsTUFBR0UsV0FBSCxFQUFnQjtBQUNiLHdCQUFPLDhEQUFDLDJDQUFEO0FBQVcsZUFBUyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNGOztBQUVELHNCQUNFO0FBQUEsMkJBQ0M7QUFDQSxjQUFRLEVBQUUsa0JBQUNFLENBQUQsRUFBTztBQUNkQSxTQUFDLENBQUNDLGNBQUYsR0FEYyxDQUVkOztBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWjtBQUNGLE9BTEQ7QUFBQSw2QkFNRztBQUFLLGlCQUFTLEVBQUMsNERBQWY7QUFBQSxnQ0FDRztBQUFJLG1CQUFTLEVBQUMsc0NBQWQ7QUFBQSxvQkFDSXpCLE1BQU0sR0FBRyxVQUFILEdBQWdCO0FBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsZUFJRztBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLG9CQUNJWSxXQUFXLENBQUNjLEdBQVosQ0FBZ0IsVUFBQ3ZCLElBQUQ7QUFBQSxnQ0FDZDtBQUFBLHdCQUFlQTtBQUFmLGVBQVFBLElBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEYztBQUFBLFdBQWhCO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSCxlQVNHO0FBQUssbUJBQVMsaUJBQVVILE1BQU0sR0FBRyxJQUFILEdBQVUsT0FBMUIsQ0FBZDtBQUFBLGlDQUNHO0FBQU8scUJBQVMsOEJBQWdCQSxNQUFNLEdBQUcsT0FBSCxHQUFhLFFBQW5DLDBCQUNoQkEsTUFBTSxHQUFHLE9BQUgsR0FBYSxRQURILDRDQUFoQjtBQUUyQyxnQkFBSSxFQUFDO0FBRmhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxtQkFERjtBQTRCRixDQXRETTs7R0FBTUosVztVQWlCc0VpQix1RDs7O0tBakJ0RWpCLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmVlZHMuZWRmMWU3ZjNkMGQzOTI2NmZiOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ1JFQVRFX0JVTkRMRV9NVVRBVElPTiwgQ1JFQVRFX0ZFRURfTVVUQVRJT04gfSBmcm9tICcuLi91dGlscy9hcGkvZ3JhcGhxbC9tdXRhdGlvbnMnO1xyXG5pbXBvcnQgeyBwcmVwYXJlTmV3VXBkYXRlT2JqIH0gZnJvbSAnLi4vdXRpbHMvcHJlcGFyZVVwZGF0ZU9iaic7XHJcbmltcG9ydCB7IEJ1bmRsZU9iamVjdCwgRmVlZE9iamVjdCwgSXRlbVR5cGUsIE5ld0l0ZW1TdGF0ZSwgU2VsZWN0ZWRGZWVkU3RhdGUgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XHJcbmltcG9ydCB7IEVycm9yU2lnbiwgV2FpdGluZ0Nsb2NrIH0gZnJvbSAnLi9zdmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5ld0VkaXRJdGVtID0gKHtcclxuICAgdHlwZSxcclxuICAgc2VsZWN0ZWQsXHJcbiAgIHNldFNlbGVjdGVkLFxyXG59OiB7XHJcbiAgIHR5cGU6SXRlbVR5cGU7XHJcbiAgIHNlbGVjdGVkOiBTZWxlY3RlZEZlZWRTdGF0ZTtcclxuICAgc2V0U2VsZWN0ZWQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFNlbGVjdGVkRmVlZFN0YXRlPj5cclxuXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGlzRmVlZCA9IHR5cGUgPT09IEl0ZW1UeXBlLkZlZWRUeXBlXHJcbiAgICBjb25zdCBpbml0aWFsRmVlZDogRmVlZE9iamVjdCA9IHtuYW1lOiBcIlwiLCB1cmw6IFwiXCIsIHRhZ3M6IFtdfTtcclxuICAgIGNvbnN0IGluaXRpYWxCdW5kbGU6IEJ1bmRsZU9iamVjdCA9IHtuYW1lOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiwgdGFnczogW119O1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlOiBOZXdJdGVtU3RhdGUgPSBpc0ZlZWQgPyBpbml0aWFsRmVlZCA6IGluaXRpYWxCdW5kbGU7XHJcbiAgICBjb25zdCBbY3VycmVudEl0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGU8TmV3SXRlbVN0YXRlPihpbml0aWFsU3RhdGUpXHJcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IGlzRmVlZCA/IFsnbmFtZScsICd1cmwnXSA6IFsnbmFtZScsICdkZXNjcmlwdGlvbiddO1xyXG5cclxuICAgY29uc3QgWyBjcmVhdGVJdGVtTXV0YXRpb24sIHsgbG9hZGluZzogY3JlYXRlTG9hZGluZywgZXJyb3I6IGNyZWF0ZUVycm9yIH0gXSAgPSB1c2VNdXRhdGlvbihpc0ZlZWQgPyBDUkVBVEVfRkVFRF9NVVRBVElPTiA6IENSRUFURV9CVU5ETEVfTVVUQVRJT04pO1xyXG5cclxuICAgaWYoY3JlYXRlTG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPFdhaXRpbmdDbG9jayBjbGFzc05hbWU9XCJteS0yMCBoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG9cIi8+XHJcbiAgIH0gIFxyXG4gICBpZihjcmVhdGVFcnJvcikge1xyXG4gICAgICByZXR1cm4gPEVycm9yU2lnbiBjbGFzc05hbWU9XCJteS0yMCBoLTEwIHctMTAgdGV4dC1ncmF5LTUwMCBtLWF1dG9cIi8+XHJcbiAgIH0gXHJcbiAgIFxyXG4gICByZXR1cm4gKFxyXG4gICAgIDw+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIC8vIGNvbnN0IGRhdGEgPSBwcmVwYXJlTmV3VXBkYXRlT2JqKGN1cnJlbnRJdGVtKVxyXG4gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICB9fSA+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTQgcm91bmRlZC1tZCBib3JkZXItNCBteS00IHB5LTIgcHgtNFwiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29sLXNwYW4tMTIgdGV4dC1sZyBmb250LW1lZGl1bSBweS0yXCI+XHJcbiAgICAgICAgICAgICAgIHtpc0ZlZWQgPyBcIk5ldyBGZWVkXCIgOiBcIk5ldyBCdW5kbGVcIn1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02XCI+XHJcbiAgICAgICAgICAgICAgIHtpbnB1dEZpZWxkcy5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHAga2V5PXtuYW1lfT57bmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BweS00ICR7aXNGZWVkID8gbnVsbCA6ICdwdC0yOCd9YH0+XHJcbiAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2BweS00ICR7YGJnLSR7aXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnfS00MDAgYH0gaG92ZXI6YmctJHtcclxuICAgICAgICAgICAgICAgaXNGZWVkID8gJ2dyZWVuJyA6ICdwdXJwbGUnXHJcbiAgICAgICAgICAgICAgIH0tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB4LTEyIHJvdW5kZWRgfSB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgPC9mb3JtPlxyXG4gICAgIDwvPlxyXG4gICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==