exports.id = "components_itemList_tsx";
exports.ids = ["components_itemList_tsx"];
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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9jb21wb25lbnRzL2l0ZW1MaXN0LnRzeCJdLCJuYW1lcyI6WyJJdGVtTGlzdCIsInR5cGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlU2VsZWN0ZWQiLCJhbGxvd0VkaXRzIiwiaXNGZWVkIiwiSXRlbVR5cGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJGRUVEU19RVUVSWSIsIkJVTkRMRVNfUVVFUlkiLCJjb25zb2xlIiwibG9nIiwiZmVlZHMiLCJidW5kbGVzIiwiaXRlbUxpc3QiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJpZCIsImZpcnN0SXRlbSIsImVkaXRNb2RlIiwibmV3TW9kZSIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUN2QkMsTUFEdUI7QUFFdkJDLFVBRnVCO0FBR3ZCQyxhQUh1QjtBQUl2QkMsYUFBVyxHQUFHLEtBSlM7QUFLdkJDO0FBTHVCLENBQUQsS0FjaEI7QUFDSixRQUFNQyxNQUFNLEdBQUdMLElBQUksS0FBS00sMkRBQXhCO0FBQ0EsUUFBTTtBQUFFQyxXQUFGO0FBQVdDLFNBQVg7QUFBa0JDO0FBQWxCLE1BQTJCQyx3REFBUSxDQUN2Q0wsTUFBTSxHQUFHTSxtRUFBSCxHQUFpQkMscUVBRGdCLENBQXpDO0FBSUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxPQUFaLEVBQXFCQyxLQUFyQixFQUE0QkMsSUFBNUI7QUFFQSxRQUFNO0FBQUVNLFNBQUY7QUFBU0M7QUFBVCxNQUFxQlAsSUFBSSxJQUFJLEVBQW5DO0FBQ0EsUUFBTVEsUUFBUSxHQUFHWixNQUFNLEdBQUdVLEtBQUgsR0FBV0MsT0FBbEM7QUFFQUUsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsS0FBQyxZQUFZO0FBQ1gsVUFBR2YsV0FBVyxJQUFJYyxRQUFmLElBQTJCQSxRQUFRLENBQUNFLE1BQVQsR0FBa0IsQ0FBN0MsSUFBa0RsQixRQUFRLENBQUNtQixFQUFULEtBQWdCLElBQXJFLEVBQTBFO0FBQ3hFLGNBQU1DLFNBQVMsR0FBR0osUUFBUSxDQUFDLENBQUQsQ0FBMUI7QUFDQSxjQUFNZixXQUFXLENBQUM7QUFDaEJrQixZQUFFLEVBQUVDLFNBQVMsQ0FBQ0QsRUFERTtBQUVoQkwsZUFBSyxFQUFFVixNQUFNLEdBQUcsQ0FBQ2dCLFNBQUQsQ0FBSCxHQUFpQkEsU0FBUyxDQUFDLE9BQUQsQ0FGdkI7QUFHaEJDLGtCQUFRLEVBQUUsS0FITTtBQUloQkMsaUJBQU8sRUFBRTtBQUpPLFNBQUQsQ0FBakI7QUFNRDtBQUNGLEtBVkQ7QUFXRCxHQVpRLENBQVQ7O0FBZ0JBLE1BQUloQixPQUFKLEVBQWE7QUFDVDtBQUFBLGtFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFSDs7QUFFRCxNQUFJQyxLQUFKLEVBQVc7QUFDVCx3QkFBTyw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSwyQkFDQTtBQUFLLGVBQVMsRUFBQywwQ0FBZjtBQUFBLGdCQUNHUyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0UsTUFBVCxHQUFrQixDQUE5QixHQUNDRixRQUFRLENBQUNPLEdBQVQsQ0FBY0MsSUFBRCxpQkFDYiw4REFBQyxxREFBRDtBQUNFLFlBQUksRUFBRXpCLElBRFI7QUFFRSxZQUFJLEVBQUV5QixJQUZSO0FBSUUsbUJBQVcsRUFBRXRCLFdBSmY7QUFLRSxrQkFBVSxFQUFFQyxVQUxkO0FBTUUsZ0JBQVEsRUFBRUgsUUFOWjtBQU9FLG1CQUFXLEVBQUVDO0FBUGYsU0FHT3VCLElBQUksQ0FBQ0wsRUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLENBREQsZ0JBWUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREY7QUFvQkMsQ0F0RUUsQyIsImZpbGUiOiJjb21wb25lbnRzX2l0ZW1MaXN0X3RzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IEJVTkRMRVNfUVVFUlksIEZFRURTX1FVRVJZIH0gZnJvbSBcIi4uL3V0aWxzL2FwaS9ncmFwaHFsL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgQnVuZGxlT2JqZWN0LCBGZWVkT2JqZWN0LCBJdGVtVHlwZSwgU2VsZWN0ZWRGZWVkU3RhdGUgfSBmcm9tIFwiLi4vdXRpbHMvdHlwZXNcIlxyXG5pbXBvcnQgeyBOb3RpZnlMb2FkaW5nIH0gZnJvbSAnLi9ub3RpZnlMb2FkaW5nJztcclxuaW1wb3J0IHsgTm90aWZ5RXJyb3IgfSBmcm9tIFwiLi9ub3RpZnlFcnJvclwiO1xyXG5pbXBvcnQgeyBPbmVMaXN0SXRlbSB9IGZyb20gXCIuL29uZUxpc3RJdGVtXCI7XHJcbmltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtTGlzdCA9ICh7XHJcbiAgdHlwZSxcclxuICBzZWxlY3RlZCxcclxuICBzZXRTZWxlY3RlZCxcclxuICB1c2VTZWxlY3RlZCA9IGZhbHNlLFxyXG4gIGFsbG93RWRpdHNcclxufSA6IHtcclxuICAgIFxyXG4gICAgdHlwZTogSXRlbVR5cGU7XHJcbiAgICBzZWxlY3RlZD8gOiBTZWxlY3RlZEZlZWRTdGF0ZTtcclxuICAgIHNldFNlbGVjdGVkPzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248U2VsZWN0ZWRGZWVkU3RhdGU+PjtcclxuICAgIHVzZVNlbGVjdGVkPzogYm9vbGVhbjtcclxuICAgIGFsbG93RWRpdHM/OiBib29sZWFuO1xyXG4gIFxyXG4gIH0pID0+IHtcclxuICAgIGNvbnN0IGlzRmVlZCA9IHR5cGUgPT09IEl0ZW1UeXBlLkZlZWRUeXBlO1xyXG4gICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoXHJcbiAgICAgIGlzRmVlZCA/IEZFRURTX1FVRVJZIDogQlVORExFU19RVUVSWSxcclxuICAgICAgKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhsb2FkaW5nLCBlcnJvciwgZGF0YSlcclxuICAgIFxyXG4gICAgY29uc3QgeyBmZWVkcywgYnVuZGxlcyB9ID0gZGF0YSB8fCB7fTtcclxuICAgIGNvbnN0IGl0ZW1MaXN0ID0gaXNGZWVkID8gZmVlZHMgOiBidW5kbGVzO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYodXNlU2VsZWN0ZWQgJiYgaXRlbUxpc3QgJiYgaXRlbUxpc3QubGVuZ3RoID4gMCAmJiBzZWxlY3RlZC5pZCA9PT0gbnVsbCl7XHJcbiAgICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSBpdGVtTGlzdFswXVxyXG4gICAgICAgICAgYXdhaXQgc2V0U2VsZWN0ZWQoe1xyXG4gICAgICAgICAgICBpZDogZmlyc3RJdGVtLmlkLFxyXG4gICAgICAgICAgICBmZWVkczogaXNGZWVkID8gW2ZpcnN0SXRlbV0gOiBmaXJzdEl0ZW1bJ2ZlZWRzJ10sXHJcbiAgICAgICAgICAgIGVkaXRNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgbmV3TW9kZTogZmFsc2UsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pICgpO1xyXG4gICAgfSk7XHJcblxyXG4gICBcclxuICAgXHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICAgIDxOb3RpZnlMb2FkaW5nIC8+XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gPE5vdGlmeUVycm9yIC8+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0zIG1kOmdyaWQtY29scy0yIGdhcC00XCI+XHJcbiAgICAgICAge2l0ZW1MaXN0ICYmIGl0ZW1MaXN0Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICBpdGVtTGlzdC5tYXAoKGl0ZW06IEZlZWRPYmplY3QgfCBCdW5kbGVPYmplY3QpID0+IChcclxuICAgICAgICAgIDxPbmVMaXN0SXRlbVxyXG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIHVzZVNlbGVjdGVkPXt1c2VTZWxlY3RlZH1cclxuICAgICAgICAgICAgYWxsb3dFZGl0cz17YWxsb3dFZGl0c31cclxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XHJcblxyXG4gICAgICAgICAgLz4pKVxyXG4gICAgICAgICkgOiAoPHA+Tm9uZSBhcmUgcHJlc2VudC4gV2h5IG5vdCBhZGQgb25lPzwvcD4pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICAgICApXHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9