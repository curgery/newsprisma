(function() {
var exports = {};
exports.id = "pages/api/callback";
exports.ids = ["pages/api/callback"];
exports.modules = {

/***/ "./pages/api/callback.ts":
/*!*******************************!*\
  !*** ./pages/api/callback.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ callback; }
/* harmony export */ });
/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth0 */ "./utils/auth0.ts");

async function callback(req, res) {
  try {
    await _utils_auth0__WEBPACK_IMPORTED_MODULE_0__.default.handleCallback(req, res, {
      redirectTo: '/'
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@auth0/nextjs-auth0");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["utils_auth0_ts"], function() { return __webpack_exec__("./pages/api/callback.ts"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9wYWdlcy9hcGkvY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiIl0sIm5hbWVzIjpbImNhbGxiYWNrIiwicmVxIiwicmVzIiwiYXV0aDAiLCJyZWRpcmVjdFRvIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIiwiZW5kIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxlQUFlQSxRQUFmLENBQXdCQyxHQUF4QixFQUE2QkMsR0FBN0IsRUFBa0M7QUFDL0MsTUFBSTtBQUNGLFVBQU1DLGdFQUFBLENBQXFCRixHQUFyQixFQUEwQkMsR0FBMUIsRUFBK0I7QUFBRUUsZ0JBQVUsRUFBRTtBQUFkLEtBQS9CLENBQU47QUFDRCxHQUZELENBRUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RDLFdBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0FILE9BQUcsQ0FBQ0ssTUFBSixDQUFXRixLQUFLLENBQUNFLE1BQU4sSUFBZ0IsR0FBM0IsRUFBZ0NDLEdBQWhDLENBQW9DSCxLQUFLLENBQUNJLE9BQTFDO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7OztBQ1RELGlEIiwiZmlsZSI6InBhZ2VzL2FwaS9jYWxsYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoMCBmcm9tICcuLi8uLi91dGlscy9hdXRoMCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNhbGxiYWNrKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGF1dGgwLmhhbmRsZUNhbGxiYWNrKHJlcSwgcmVzLCB7IHJlZGlyZWN0VG86ICcvJyB9KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgcmVzLnN0YXR1cyhlcnJvci5zdGF0dXMgfHwgNTAwKS5lbmQoZXJyb3IubWVzc2FnZSlcclxuICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9