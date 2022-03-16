exports.id = "utils_auth0_ts";
exports.ids = ["utils_auth0_ts"];
exports.modules = {

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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hdXRoMC50cyJdLCJuYW1lcyI6WyJpbml0QXV0aDAiLCJiYXNlVVJMIiwiaXNzdWVyQmFzZVVSTCIsImNsaWVudElEIiwicHJvY2VzcyIsImVudiIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0Iiwic2VjcmV0IiwiY2xvY2tUb2xlcmFuY2UiLCJodHRwVGltZW91dCIsImF1dGhvcml6YXRpb25QYXJhbXMiLCJzY29wZSIsInJvdXRlcyIsImNhbGxiYWNrIiwicG9zdExvZ291dFJlZGlyZWN0Iiwic2Vzc2lvbiIsInJvbGxpbmdEdXJhdGlvbiIsImFic29sdXRlRHVyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQSwrREFBZUEsOERBQVMsQ0FBQztBQUNyQkMsU0FBTyxFQUFFLHVCQURZO0FBRXJCQyxlQUFhLEVBQUUseUJBRk07QUFHckJDLFVBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBSEQ7QUFJckJDLGNBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlFLFlBSkw7QUFLckJDLFFBQU0sRUFBRSwyQ0FMYTtBQU1yQkMsZ0JBQWMsRUFBRSxFQU5LO0FBT3JCQyxhQUFXLEVBQUUsSUFQUTtBQVFyQkMscUJBQW1CLEVBQUU7QUFDakJDLFNBQUssRUFBRTtBQURVLEdBUkE7QUFXckJDLFFBQU0sRUFBRTtBQUNKQyxZQUFRLEVBQUUsZUFETjtBQUVKQyxzQkFBa0IsRUFBRTtBQUZoQixHQVhhO0FBZXJCQyxTQUFPLEVBQUU7QUFDTEMsbUJBQWUsRUFBRSxLQUFLLEVBQUwsR0FBVSxFQUR0QjtBQUVMQyxvQkFBZ0IsRUFBRSxLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWU7QUFGNUI7QUFmWSxDQUFELENBQXhCLEUsQ0E0QkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsSyIsImZpbGUiOiJ1dGlsc19hdXRoMF90cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRBdXRoMCB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRBdXRoMCh7XHJcbiAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICAgIGlzc3VlckJhc2VVUkw6ICdodHRwczovL21lbnNhLmF1dGgwLmNvbScsXHJcbiAgICBjbGllbnRJRDogcHJvY2Vzcy5lbnYuY2xpZW50SWQsXHJcbiAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LmNsaWVudFNlY3JldCxcclxuICAgIHNlY3JldDogJ3NvbWVfdmVyeV9sb25nX3NlY3JldF9zdHJpbmdfdGhhdHNfdW5pcXVlJyxcclxuICAgIGNsb2NrVG9sZXJhbmNlOiA2MCxcclxuICAgIGh0dHBUaW1lb3V0OiA1MDAwLFxyXG4gICAgYXV0aG9yaXphdGlvblBhcmFtczoge1xyXG4gICAgICAgIHNjb3BlOiAnb3BlbmlkIHByb2ZpbGUgZW1haWwnLFxyXG4gICAgfSxcclxuICAgIHJvdXRlczoge1xyXG4gICAgICAgIGNhbGxiYWNrOiAnL2FwaS9jYWxsYmFjaycsXHJcbiAgICAgICAgcG9zdExvZ291dFJlZGlyZWN0OiAnLydcclxuICAgIH0sXHJcbiAgICBzZXNzaW9uOiB7XHJcbiAgICAgICAgcm9sbGluZ0R1cmF0aW9uOiA2MCAqIDYwICogMjQsXHJcbiAgICAgICAgYWJzb2x1dGVEdXJhdGlvbjogNjAgKiA2MCAqIDI0ICogN1xyXG4gICAgfSwgICAgIFxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBpbXBvcnQgeyBpbml0QXV0aDAgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJ1xyXG5cclxuLy8gaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZyc7XHJcbi8vIGNvbnN0IHtzZXJ2ZXJSdW50aW1lQ29uZmlnfSA9IGdldENvbmZpZygpO1xyXG4vLyBjb25zdCB7YXV0aCwgY29va2llU2VjcmV0fSA9IHNlcnZlclJ1bnRpbWVDb25maWc7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhzZXJ2ZXJSdW50aW1lQ29uZmlnKTtcclxuLy8gZXhwb3J0IGRlZmF1bHQgaW5pdEF1dGgwKHtcclxuLy8gICAuLi5hdXRoLFxyXG4vLyAgIHNlc3Npb246IHtcclxuLy8gICAgIGNvb2tpZVNlY3JldCxcclxuLy8gICAgIGNvb2tpZUxpZmV0aW1lOiA2MCogNjAqIDgsXHJcbi8vICAgICBzdG9yZUlkVG9rZW46IGZhbHNlLFxyXG4vLyAgICAgc3RvcmVBY2Nlc3NUb2tlbjogZmFsc2UsXHJcbi8vICAgICBzdG9yZVJlZnJlc2hUb2tlbjogZmFsc2VcclxuLy8gICB9LFxyXG4vLyAgIG9pZGNDbGllbnQ6IHtcclxuLy8gICAgICAgaHR0cFRpbWVvdXQ6IDI1MDAwLFxyXG4vLyAgICAgICBjbG9ja1RvbGVyYW5jZTogMTAwMDAsXHJcbiAgICAgIFxyXG4vLyAgIH1cclxuLy8gfSkiXSwic291cmNlUm9vdCI6IiJ9