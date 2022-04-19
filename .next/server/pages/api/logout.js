(function() {
var exports = {};
exports.id = "pages/api/logout";
exports.ids = ["pages/api/logout"];
exports.modules = {

/***/ "./pages/api/logout.ts":
/*!*****************************!*\
  !*** ./pages/api/logout.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ logout; }
/* harmony export */ });
/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth0 */ "./utils/auth0.ts");

async function logout(req, res) {
  try {
    await _utils_auth0__WEBPACK_IMPORTED_MODULE_0__.default.handleLogout(req, res);
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
var __webpack_exports__ = __webpack_require__.X(0, ["utils_auth0_ts"], function() { return __webpack_exec__("./pages/api/logout.ts"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9wYWdlcy9hcGkvbG9nb3V0LnRzIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIiJdLCJuYW1lcyI6WyJsb2dvdXQiLCJyZXEiLCJyZXMiLCJhdXRoMCIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyIsImVuZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR2UsZUFBZUEsTUFBZixDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzNDLE1BQUk7QUFDRixVQUFNQyw4REFBQSxDQUFtQkYsR0FBbkIsRUFBd0JDLEdBQXhCLENBQU47QUFDRCxHQUZELENBRUUsT0FBT0UsS0FBUCxFQUFjO0FBQ2RDLFdBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0FGLE9BQUcsQ0FBQ0ksTUFBSixDQUFXRixLQUFLLENBQUNFLE1BQU4sSUFBZ0IsR0FBM0IsRUFBZ0NDLEdBQWhDLENBQW9DSCxLQUFLLENBQUNJLE9BQTFDO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7OztBQ1ZILGlEIiwiZmlsZSI6InBhZ2VzL2FwaS9sb2dvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aDAgZnJvbSAnLi4vLi4vdXRpbHMvYXV0aDAnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhdXRoMC5oYW5kbGVMb2dvdXQocmVxLCByZXMpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICByZXMuc3RhdHVzKGVycm9yLnN0YXR1cyB8fCA1MDApLmVuZChlcnJvci5tZXNzYWdlKVxyXG4gICAgfVxyXG4gIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9