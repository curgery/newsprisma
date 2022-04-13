module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/me.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/me.ts":
/*!*************************!*\
  !*** ./pages/api/me.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return me; });
/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth0 */ "./utils/auth0.ts");

async function me(req, res) {
  try {
    await _utils_auth0__WEBPACK_IMPORTED_MODULE_0__["default"].handleProfile(req, res);
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__["initAuth0"])({
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL21lLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2F1dGgwLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIiJdLCJuYW1lcyI6WyJtZSIsInJlcSIsInJlcyIsImF1dGgwIiwiaGFuZGxlUHJvZmlsZSIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyIsImVuZCIsIm1lc3NhZ2UiLCJpbml0QXV0aDAiLCJiYXNlVVJMIiwiaXNzdWVyQmFzZVVSTCIsImNsaWVudElEIiwicHJvY2VzcyIsImVudiIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0Iiwic2VjcmV0IiwiY2xvY2tUb2xlcmFuY2UiLCJodHRwVGltZW91dCIsImF1dGhvcml6YXRpb25QYXJhbXMiLCJzY29wZSIsInJvdXRlcyIsImNhbGxiYWNrIiwicG9zdExvZ291dFJlZGlyZWN0Iiwic2Vzc2lvbiIsInJvbGxpbmdEdXJhdGlvbiIsImFic29sdXRlRHVyYXRpb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFHZSxlQUFlQSxFQUFmLENBQWtCQyxHQUFsQixFQUF1QkMsR0FBdkIsRUFBNEI7QUFDdkMsTUFBSTtBQUNGLFVBQU1DLG9EQUFLLENBQUNDLGFBQU4sQ0FBb0JILEdBQXBCLEVBQXlCQyxHQUF6QixDQUFOO0FBQ0QsR0FGRCxDQUVFLE9BQU9HLEtBQVAsRUFBYztBQUNkQyxXQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNBSCxPQUFHLENBQUNLLE1BQUosQ0FBV0YsS0FBSyxDQUFDRSxNQUFOLElBQWdCLEdBQTNCLEVBQWdDQyxHQUFoQyxDQUFvQ0gsS0FBSyxDQUFDSSxPQUExQztBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDVkg7QUFBQTtBQUFBO0FBQUE7QUFHZUMsb0lBQVMsQ0FBQztBQUNyQkMsU0FBTyxFQUFFLHVCQURZO0FBRXJCQyxlQUFhLEVBQUUseUJBRk07QUFHckJDLFVBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBSEQ7QUFJckJDLGNBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlFLFlBSkw7QUFLckJDLFFBQU0sRUFBRSwyQ0FMYTtBQU1yQkMsZ0JBQWMsRUFBRSxFQU5LO0FBT3JCQyxhQUFXLEVBQUUsSUFQUTtBQVFyQkMscUJBQW1CLEVBQUU7QUFDakJDLFNBQUssRUFBRTtBQURVLEdBUkE7QUFXckJDLFFBQU0sRUFBRTtBQUNKQyxZQUFRLEVBQUUsZUFETjtBQUVKQyxzQkFBa0IsRUFBRTtBQUZoQixHQVhhO0FBZXJCQyxTQUFPLEVBQUU7QUFDTEMsbUJBQWUsRUFBRSxLQUFLLEVBQUwsR0FBVSxFQUR0QjtBQUVMQyxvQkFBZ0IsRUFBRSxLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWU7QUFGNUI7QUFmWSxDQUFELENBQXhCLEUsQ0E0QkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsSzs7Ozs7Ozs7Ozs7QUNwREEsZ0QiLCJmaWxlIjoicGFnZXMvYXBpL21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvbWUudHNcIik7XG4iLCJpbXBvcnQgYXV0aDAgZnJvbSAnLi4vLi4vdXRpbHMvYXV0aDAnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWUocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF1dGgwLmhhbmRsZVByb2ZpbGUocmVxLCByZXMpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICByZXMuc3RhdHVzKGVycm9yLnN0YXR1cyB8fCA1MDApLmVuZChlcnJvci5tZXNzYWdlKVxyXG4gICAgfVxyXG4gIH0iLCJpbXBvcnQgeyBpbml0QXV0aDAgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0QXV0aDAoe1xyXG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXHJcbiAgICBpc3N1ZXJCYXNlVVJMOiAnaHR0cHM6Ly9tZW5zYS5hdXRoMC5jb20nLFxyXG4gICAgY2xpZW50SUQ6IHByb2Nlc3MuZW52LmNsaWVudElkLFxyXG4gICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5jbGllbnRTZWNyZXQsXHJcbiAgICBzZWNyZXQ6ICdzb21lX3ZlcnlfbG9uZ19zZWNyZXRfc3RyaW5nX3RoYXRzX3VuaXF1ZScsXHJcbiAgICBjbG9ja1RvbGVyYW5jZTogNjAsXHJcbiAgICBodHRwVGltZW91dDogNTAwMCxcclxuICAgIGF1dGhvcml6YXRpb25QYXJhbXM6IHtcclxuICAgICAgICBzY29wZTogJ29wZW5pZCBwcm9maWxlIGVtYWlsJyxcclxuICAgIH0sXHJcbiAgICByb3V0ZXM6IHtcclxuICAgICAgICBjYWxsYmFjazogJy9hcGkvY2FsbGJhY2snLFxyXG4gICAgICAgIHBvc3RMb2dvdXRSZWRpcmVjdDogJy8nXHJcbiAgICB9LFxyXG4gICAgc2Vzc2lvbjoge1xyXG4gICAgICAgIHJvbGxpbmdEdXJhdGlvbjogNjAgKiA2MCAqIDI0LFxyXG4gICAgICAgIGFic29sdXRlRHVyYXRpb246IDYwICogNjAgKiAyNCAqIDdcclxuICAgIH0sICAgICBcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gaW1wb3J0IHsgaW5pdEF1dGgwIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCdcclxuXHJcbi8vIGltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xyXG4vLyBjb25zdCB7c2VydmVyUnVudGltZUNvbmZpZ30gPSBnZXRDb25maWcoKTtcclxuLy8gY29uc3Qge2F1dGgsIGNvb2tpZVNlY3JldH0gPSBzZXJ2ZXJSdW50aW1lQ29uZmlnO1xyXG5cclxuLy8gY29uc29sZS5sb2coc2VydmVyUnVudGltZUNvbmZpZyk7XHJcbi8vIGV4cG9ydCBkZWZhdWx0IGluaXRBdXRoMCh7XHJcbi8vICAgLi4uYXV0aCxcclxuLy8gICBzZXNzaW9uOiB7XHJcbi8vICAgICBjb29raWVTZWNyZXQsXHJcbi8vICAgICBjb29raWVMaWZldGltZTogNjAqIDYwKiA4LFxyXG4vLyAgICAgc3RvcmVJZFRva2VuOiBmYWxzZSxcclxuLy8gICAgIHN0b3JlQWNjZXNzVG9rZW46IGZhbHNlLFxyXG4vLyAgICAgc3RvcmVSZWZyZXNoVG9rZW46IGZhbHNlXHJcbi8vICAgfSxcclxuLy8gICBvaWRjQ2xpZW50OiB7XHJcbi8vICAgICAgIGh0dHBUaW1lb3V0OiAyNTAwMCxcclxuLy8gICAgICAgY2xvY2tUb2xlcmFuY2U6IDEwMDAwLFxyXG4gICAgICBcclxuLy8gICB9XHJcbi8vIH0pIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGF1dGgwL25leHRqcy1hdXRoMFwiKTsiXSwic291cmNlUm9vdCI6IiJ9