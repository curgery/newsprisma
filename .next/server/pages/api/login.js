(function() {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "./pages/api/login.ts":
/*!****************************!*\
  !*** ./pages/api/login.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ login; }
/* harmony export */ });
/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth0 */ "./utils/auth0.ts");

async function login(req, res) {
  try {
    await _utils_auth0__WEBPACK_IMPORTED_MODULE_0__.default.handleLogin(req, res);
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
var __webpack_exports__ = __webpack_require__.X(0, ["utils_auth0_ts"], function() { return __webpack_exec__("./pages/api/login.ts"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9wYWdlcy9hcGkvbG9naW4udHMiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiIl0sIm5hbWVzIjpbImxvZ2luIiwicmVxIiwicmVzIiwiYXV0aDAiLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXMiLCJlbmQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLGVBQWVBLEtBQWYsQ0FBcUJDLEdBQXJCLEVBQTBCQyxHQUExQixFQUErQjtBQUMxQyxNQUFJO0FBQ0YsVUFBTUMsNkRBQUEsQ0FBa0JGLEdBQWxCLEVBQXVCQyxHQUF2QixDQUFOO0FBQ0QsR0FGRCxDQUVFLE9BQU9FLEtBQVAsRUFBYztBQUNkQyxXQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNBRixPQUFHLENBQUNJLE1BQUosQ0FBV0YsS0FBSyxDQUFDRSxNQUFOLElBQWdCLEdBQTNCLEVBQWdDQyxHQUFoQyxDQUFvQ0gsS0FBSyxDQUFDSSxPQUExQztBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7QUNUSCxpRCIsImZpbGUiOiJwYWdlcy9hcGkvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aDAgZnJvbSAnLi4vLi4vdXRpbHMvYXV0aDAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsb2dpbihyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXV0aDAuaGFuZGxlTG9naW4ocmVxLCByZXMpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICByZXMuc3RhdHVzKGVycm9yLnN0YXR1cyB8fCA1MDApLmVuZChlcnJvci5tZXNzYWdlKVxyXG4gICAgfVxyXG4gIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9