(function() {
var exports = {};
exports.id = "pages/api/me";
exports.ids = ["pages/api/me"];
exports.modules = {

/***/ "./pages/api/me.ts":
/*!*************************!*\
  !*** ./pages/api/me.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ me; }
/* harmony export */ });
/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth0 */ "./utils/auth0.ts");

async function me(req, res) {
  try {
    await _utils_auth0__WEBPACK_IMPORTED_MODULE_0__.default.handleProfile(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}

/***/ }),

/***/ "./utils/auth0.ts":
/*!************************!*\
  !*** ./utils/auth0.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.initAuth0)({
  baseURL: 'http://localhost:3000',
  issuerBaseURL: 'https://mensa.auth0.com',
  clientID: process.env.clientId,
  clientSecret: process.env.clientSecret,
  secret: 'some_very_long_secret_string_thats_unique',
  clockTolerance: 60,
  httpTimeout: 5000,
  authorizationParams: {
    scope: 'openid profile email'
  },
  routes: {
    callback: '/api/callback',
    postLogoutRedirect: '/'
  },
  session: {
    rollingDuration: 60 * 60 * 24,
    absoluteDuration: 60 * 60 * 24 * 7
  }
})); // import { initAuth0 } from '@auth0/nextjs-auth0'
// import getConfig from 'next/config';
// const {serverRuntimeConfig} = getConfig();
// const {auth, cookieSecret} = serverRuntimeConfig;
// console.log(serverRuntimeConfig);
// export default initAuth0({
//   ...auth,
//   session: {
//     cookieSecret,
//     cookieLifetime: 60* 60* 8,
//     storeIdToken: false,
//     storeAccessToken: false,
//     storeRefreshToken: false
//   },
//   oidcClient: {
//       httpTimeout: 25000,
//       clockTolerance: 10000,
//   }
// })

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/me.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vbmV3c3ByaXNtLy4vcGFnZXMvYXBpL21lLnRzIiwid2VicGFjazovL25ld3NwcmlzbS9uZXdzcHJpc20vLi91dGlscy9hdXRoMC50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vbmV3c3ByaXNtL2V4dGVybmFsIFwiQGF1dGgwL25leHRqcy1hdXRoMFwiIl0sIm5hbWVzIjpbIm1lIiwicmVxIiwicmVzIiwiYXV0aDAiLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXMiLCJlbmQiLCJtZXNzYWdlIiwiaW5pdEF1dGgwIiwiYmFzZVVSTCIsImlzc3VlckJhc2VVUkwiLCJjbGllbnRJRCIsInByb2Nlc3MiLCJlbnYiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsInNlY3JldCIsImNsb2NrVG9sZXJhbmNlIiwiaHR0cFRpbWVvdXQiLCJhdXRob3JpemF0aW9uUGFyYW1zIiwic2NvcGUiLCJyb3V0ZXMiLCJjYWxsYmFjayIsInBvc3RMb2dvdXRSZWRpcmVjdCIsInNlc3Npb24iLCJyb2xsaW5nRHVyYXRpb24iLCJhYnNvbHV0ZUR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdlLGVBQWVBLEVBQWYsQ0FBa0JDLEdBQWxCLEVBQXVCQyxHQUF2QixFQUE0QjtBQUN2QyxNQUFJO0FBQ0YsVUFBTUMsK0RBQUEsQ0FBb0JGLEdBQXBCLEVBQXlCQyxHQUF6QixDQUFOO0FBQ0QsR0FGRCxDQUVFLE9BQU9FLEtBQVAsRUFBYztBQUNkQyxXQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNBRixPQUFHLENBQUNJLE1BQUosQ0FBV0YsS0FBSyxDQUFDRSxNQUFOLElBQWdCLEdBQTNCLEVBQWdDQyxHQUFoQyxDQUFvQ0gsS0FBSyxDQUFDSSxPQUExQztBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7Ozs7QUNWSDtBQUdBLCtEQUFlQyw4REFBUyxDQUFDO0FBQ3JCQyxTQUFPLEVBQUUsdUJBRFk7QUFFckJDLGVBQWEsRUFBRSx5QkFGTTtBQUdyQkMsVUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFIRDtBQUlyQkMsY0FBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsWUFKTDtBQUtyQkMsUUFBTSxFQUFFLDJDQUxhO0FBTXJCQyxnQkFBYyxFQUFFLEVBTks7QUFPckJDLGFBQVcsRUFBRSxJQVBRO0FBUXJCQyxxQkFBbUIsRUFBRTtBQUNqQkMsU0FBSyxFQUFFO0FBRFUsR0FSQTtBQVdyQkMsUUFBTSxFQUFFO0FBQ0pDLFlBQVEsRUFBRSxlQUROO0FBRUpDLHNCQUFrQixFQUFFO0FBRmhCLEdBWGE7QUFlckJDLFNBQU8sRUFBRTtBQUNMQyxtQkFBZSxFQUFFLEtBQUssRUFBTCxHQUFVLEVBRHRCO0FBRUxDLG9CQUFnQixFQUFFLEtBQUssRUFBTCxHQUFVLEVBQVYsR0FBZTtBQUY1QjtBQWZZLENBQUQsQ0FBeEIsRSxDQTRCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxLOzs7Ozs7Ozs7OztBQ3BEQSxpRCIsImZpbGUiOiJwYWdlcy9hcGkvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aDAgZnJvbSAnLi4vLi4vdXRpbHMvYXV0aDAnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWUocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF1dGgwLmhhbmRsZVByb2ZpbGUocmVxLCByZXMpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICByZXMuc3RhdHVzKGVycm9yLnN0YXR1cyB8fCA1MDApLmVuZChlcnJvci5tZXNzYWdlKVxyXG4gICAgfVxyXG4gIH0iLCJpbXBvcnQgeyBpbml0QXV0aDAgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0QXV0aDAoe1xyXG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXHJcbiAgICBpc3N1ZXJCYXNlVVJMOiAnaHR0cHM6Ly9tZW5zYS5hdXRoMC5jb20nLFxyXG4gICAgY2xpZW50SUQ6IHByb2Nlc3MuZW52LmNsaWVudElkLFxyXG4gICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5jbGllbnRTZWNyZXQsXHJcbiAgICBzZWNyZXQ6ICdzb21lX3ZlcnlfbG9uZ19zZWNyZXRfc3RyaW5nX3RoYXRzX3VuaXF1ZScsXHJcbiAgICBjbG9ja1RvbGVyYW5jZTogNjAsXHJcbiAgICBodHRwVGltZW91dDogNTAwMCxcclxuICAgIGF1dGhvcml6YXRpb25QYXJhbXM6IHtcclxuICAgICAgICBzY29wZTogJ29wZW5pZCBwcm9maWxlIGVtYWlsJyxcclxuICAgIH0sXHJcbiAgICByb3V0ZXM6IHtcclxuICAgICAgICBjYWxsYmFjazogJy9hcGkvY2FsbGJhY2snLFxyXG4gICAgICAgIHBvc3RMb2dvdXRSZWRpcmVjdDogJy8nXHJcbiAgICB9LFxyXG4gICAgc2Vzc2lvbjoge1xyXG4gICAgICAgIHJvbGxpbmdEdXJhdGlvbjogNjAgKiA2MCAqIDI0LFxyXG4gICAgICAgIGFic29sdXRlRHVyYXRpb246IDYwICogNjAgKiAyNCAqIDdcclxuICAgIH0sICAgICBcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gaW1wb3J0IHsgaW5pdEF1dGgwIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCdcclxuXHJcbi8vIGltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xyXG4vLyBjb25zdCB7c2VydmVyUnVudGltZUNvbmZpZ30gPSBnZXRDb25maWcoKTtcclxuLy8gY29uc3Qge2F1dGgsIGNvb2tpZVNlY3JldH0gPSBzZXJ2ZXJSdW50aW1lQ29uZmlnO1xyXG5cclxuLy8gY29uc29sZS5sb2coc2VydmVyUnVudGltZUNvbmZpZyk7XHJcbi8vIGV4cG9ydCBkZWZhdWx0IGluaXRBdXRoMCh7XHJcbi8vICAgLi4uYXV0aCxcclxuLy8gICBzZXNzaW9uOiB7XHJcbi8vICAgICBjb29raWVTZWNyZXQsXHJcbi8vICAgICBjb29raWVMaWZldGltZTogNjAqIDYwKiA4LFxyXG4vLyAgICAgc3RvcmVJZFRva2VuOiBmYWxzZSxcclxuLy8gICAgIHN0b3JlQWNjZXNzVG9rZW46IGZhbHNlLFxyXG4vLyAgICAgc3RvcmVSZWZyZXNoVG9rZW46IGZhbHNlXHJcbi8vICAgfSxcclxuLy8gICBvaWRjQ2xpZW50OiB7XHJcbi8vICAgICAgIGh0dHBUaW1lb3V0OiAyNTAwMCxcclxuLy8gICAgICAgY2xvY2tUb2xlcmFuY2U6IDEwMDAwLFxyXG4gICAgICBcclxuLy8gICB9XHJcbi8vIH0pIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGF1dGgwL25leHRqcy1hdXRoMFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==