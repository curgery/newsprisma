self["webpackHotUpdate_N_E"]("pages/bundles",{

/***/ "./utils/prepareUpdateObj.ts":
/*!***********************************!*\
  !*** ./utils/prepareUpdateObj.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareNewUpdateObj": function() { return /* binding */ prepareNewUpdateObj; }
/* harmony export */ });
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var genNestedItems = function genNestedItems(currentItem) {
  var tags = "tags" in currentItem ? {
    tags: {
      connect: currentItem.tags.map(function (_ref) {
        var id = _ref.id;
        return {
          id: id
        };
      }).filter(function (_ref2) {
        var id = _ref2.id;
        return id !== undefined;
      }),
      create: currentItem.tags.filter(function (_ref3) {
        var id = _ref3.id;
        return id === undefined;
      }).map(function (o) {
        return _objectSpread(_objectSpread({}, o), {}, {
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)()
        });
      })
    }
  } : {};
  var feeds = 'feeds' in currentItem ? {
    feeds: {
      connect: currentItem.feeds.map(function (_ref4) {
        var id = _ref4.id;
        return {
          id: id
        };
      }).filter(function (_ref5) {
        var id = _ref5.id;
        return id !== undefined;
      })
    }
  } : {};

  var __typename = currentItem.__typename,
      likes = currentItem.likes,
      author = currentItem.author,
      bundles = currentItem.bundles,
      cleanedItem = (0,C_UdemyStuff_PrismaStuff_newsprisma_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(currentItem, ["__typename", "likes", "author", "bundles"]); //strip unwanted from currentItem and call it 'cleanedItem' 'CleanedItem' will be all of the fields that are leftover.


  return _objectSpread(_objectSpread(_objectSpread({}, cleanedItem), tags), feeds); //add all tag and feed info to cleanedItem.
};

var prepareNewUpdateObj = function prepareNewUpdateObj(currentItem) {
  var currentData = genNestedItems(currentItem);
  return _objectSpread(_objectSpread({}, currentData), {}, {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)() // currentData (feed or tag) is returned WITHOUT an id number; thus one is added/provided.

  });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcHJlcGFyZVVwZGF0ZU9iai50cyJdLCJuYW1lcyI6WyJnZW5OZXN0ZWRJdGVtcyIsImN1cnJlbnRJdGVtIiwidGFncyIsImNvbm5lY3QiLCJtYXAiLCJpZCIsImZpbHRlciIsInVuZGVmaW5lZCIsImNyZWF0ZSIsIm8iLCJ1dWlkdjQiLCJmZWVkcyIsIl9fdHlwZW5hbWUiLCJsaWtlcyIsImF1dGhvciIsImJ1bmRsZXMiLCJjbGVhbmVkSXRlbSIsInByZXBhcmVOZXdVcGRhdGVPYmoiLCJjdXJyZW50RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBSUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxXQUFELEVBQWlCO0FBQ3BDLE1BQU1DLElBQUksR0FDVixVQUFVRCxXQUFWLEdBQXdCO0FBQ3BCQyxRQUFJLEVBQUU7QUFDRkMsYUFBTyxFQUFFRixXQUFXLENBQUNDLElBQVosQ0FBaUJFLEdBQWpCLENBQXFCO0FBQUEsWUFBR0MsRUFBSCxRQUFHQSxFQUFIO0FBQUEsZUFBWTtBQUFFQSxZQUFFLEVBQUZBO0FBQUYsU0FBWjtBQUFBLE9BQXJCLEVBQTBDQyxNQUExQyxDQUFpRDtBQUFBLFlBQUdELEVBQUgsU0FBR0EsRUFBSDtBQUFBLGVBQVlBLEVBQUUsS0FBS0UsU0FBbkI7QUFBQSxPQUFqRCxDQURQO0FBR0ZDLFlBQU0sRUFBRVAsV0FBVyxDQUFDQyxJQUFaLENBQ1BJLE1BRE8sQ0FDQTtBQUFBLFlBQUdELEVBQUgsU0FBR0EsRUFBSDtBQUFBLGVBQVlBLEVBQUUsS0FBS0UsU0FBbkI7QUFBQSxPQURBLEVBRVBILEdBRk8sQ0FFSCxVQUFDSyxDQUFEO0FBQUEsK0NBQWFBLENBQWI7QUFBZ0JKLFlBQUUsRUFBRUssd0NBQU07QUFBMUI7QUFBQSxPQUZHO0FBSE47QUFEYyxHQUF4QixHQVNHLEVBVkg7QUFZQyxNQUFNQyxLQUFLLEdBQ1gsV0FBV1YsV0FBWCxHQUNJO0FBQ0VVLFNBQUssRUFBRTtBQUNMUixhQUFPLEVBQUVGLFdBQVcsQ0FBQ1UsS0FBWixDQUNOUCxHQURNLENBQ0Y7QUFBQSxZQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxlQUFhO0FBQUVBLFlBQUUsRUFBRkE7QUFBRixTQUFiO0FBQUEsT0FERSxFQUVOQyxNQUZNLENBRUM7QUFBQSxZQUFHRCxFQUFILFNBQUdBLEVBQUg7QUFBQSxlQUFZQSxFQUFFLEtBQUtFLFNBQW5CO0FBQUEsT0FGRDtBQURKO0FBRFQsR0FESixHQVFJLEVBVEo7O0FBYm1DLE1Bd0J6QkssVUF4QnlCLEdBd0I4QlgsV0F4QjlCLENBd0J6QlcsVUF4QnlCO0FBQUEsTUF3QmJDLEtBeEJhLEdBd0I4QlosV0F4QjlCLENBd0JiWSxLQXhCYTtBQUFBLE1Bd0JOQyxNQXhCTSxHQXdCOEJiLFdBeEI5QixDQXdCTmEsTUF4Qk07QUFBQSxNQXdCRUMsT0F4QkYsR0F3QjhCZCxXQXhCOUIsQ0F3QkVjLE9BeEJGO0FBQUEsTUF3QmNDLFdBeEJkLGlLQXdCOEJmLFdBeEI5QixpREF3QjRDOzs7QUFFN0UsdURBQVllLFdBQVosR0FBNEJkLElBQTVCLEdBQXFDUyxLQUFyQyxFQTFCaUMsQ0EwQmM7QUFHckQsQ0E3QkQ7O0FBZ0NPLElBQU1NLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ2hCLFdBQUQsRUFBaUI7QUFDakQsTUFBTWlCLFdBQVcsR0FBSWxCLGNBQWMsQ0FBQ0MsV0FBRCxDQUFuQztBQUVBLHlDQUFZaUIsV0FBWjtBQUEwQmIsTUFBRSxFQUFFSyx3Q0FBTSxFQUFwQyxDQUF1Qzs7QUFBdkM7QUFFRixDQUxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1bmRsZXMuODZjM2Y5NmNkZGRmNzU0YjQyYzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5cclxuY29uc3QgZ2VuTmVzdGVkSXRlbXMgPSAoY3VycmVudEl0ZW0pID0+IHtcclxuICAgIGNvbnN0IHRhZ3MgPSBcclxuICAgIFwidGFnc1wiIGluIGN1cnJlbnRJdGVtID8ge1xyXG4gICAgICAgIHRhZ3M6IHtcclxuICAgICAgICAgICAgY29ubmVjdDogY3VycmVudEl0ZW0udGFncy5tYXAoKHsgaWQgfSkgPT4oeyBpZCB9KSkuZmlsdGVyKCh7IGlkIH0pID0+IGlkICE9PSB1bmRlZmluZWQpLFxyXG5cclxuICAgICAgICAgICAgY3JlYXRlOiBjdXJyZW50SXRlbS50YWdzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgaWQgfSkgPT4gaWQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgLm1hcCgobykgPT4gKHsgLi4ubywgaWQ6IHV1aWR2NCgpIH0pKSxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG4gICAgIDoge307XHJcblxyXG4gICAgIGNvbnN0IGZlZWRzID1cclxuICAgICAnZmVlZHMnIGluIGN1cnJlbnRJdGVtXHJcbiAgICAgICA/IHtcclxuICAgICAgICAgICBmZWVkczoge1xyXG4gICAgICAgICAgICAgY29ubmVjdDogY3VycmVudEl0ZW0uZmVlZHNcclxuICAgICAgICAgICAgICAgLm1hcCgoeyBpZCB9KSA9PiAoeyBpZCB9KSlcclxuICAgICAgICAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiBpZCAhPT0gdW5kZWZpbmVkKSxcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICB9XHJcbiAgICAgICA6IHt9O1xyXG5cclxuICAgICAgIGNvbnN0IHsgX190eXBlbmFtZSwgbGlrZXMsIGF1dGhvciwgYnVuZGxlcywgLi4uY2xlYW5lZEl0ZW0gfSA9IGN1cnJlbnRJdGVtOyAgLy9zdHJpcCB1bndhbnRlZCBmcm9tIGN1cnJlbnRJdGVtIGFuZCBjYWxsIGl0ICdjbGVhbmVkSXRlbScgJ0NsZWFuZWRJdGVtJyB3aWxsIGJlIGFsbCBvZiB0aGUgZmllbGRzIHRoYXQgYXJlIGxlZnRvdmVyLlxyXG5cclxuICAgICAgIHJldHVybiB7IC4uLmNsZWFuZWRJdGVtLCAuLi50YWdzLCAuLi5mZWVkcyB9OyAgLy9hZGQgYWxsIHRhZyBhbmQgZmVlZCBpbmZvIHRvIGNsZWFuZWRJdGVtLlxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHJlcGFyZU5ld1VwZGF0ZU9iaiA9IChjdXJyZW50SXRlbSkgPT4ge1xyXG4gICBjb25zdCBjdXJyZW50RGF0YSA9ICBnZW5OZXN0ZWRJdGVtcyhjdXJyZW50SXRlbSlcclxuXHJcbiAgIHJldHVybiB7IC4uLmN1cnJlbnREYXRhLCAgaWQ6IHV1aWR2NCgpIC8vIGN1cnJlbnREYXRhIChmZWVkIG9yIHRhZykgaXMgcmV0dXJuZWQgV0lUSE9VVCBhbiBpZCBudW1iZXI7IHRodXMgb25lIGlzIGFkZGVkL3Byb3ZpZGVkLlxyXG4gICB9IFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==