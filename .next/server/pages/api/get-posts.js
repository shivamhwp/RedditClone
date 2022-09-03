"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/get-posts";
exports.ids = ["pages/api/get-posts"];
exports.modules = {

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "(api)/./pages/api/get-posts.js":
/*!********************************!*\
  !*** ./pages/api/get-posts.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_supabaseClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/supabaseClient */ \"(api)/./services/supabaseClient.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { data  } = await _services_supabaseClient__WEBPACK_IMPORTED_MODULE_0__.supabase.from(\"feed\").select(\"*\").order(\"id\", {\n        ascending: false\n    });\n    res.status(200).json({\n        data: data\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0LXBvc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlEO0FBRXpELGlFQUFlLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2pDLE1BQU0sRUFBRUMsSUFBSSxHQUFFLEdBQUcsTUFBTUgsbUVBQ2hCLENBQUMsTUFBTSxDQUFDLENBQ1pLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDWEMsS0FBSyxDQUFDLElBQUksRUFBRTtRQUFFQyxTQUFTLEVBQUUsS0FBSztLQUFFLENBQUM7SUFFcENMLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRU4sSUFBSSxFQUFFQSxJQUFJO0tBQUUsQ0FBQyxDQUFDO0NBQ3RDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvZ2V0LXBvc3RzLmpzPzZkZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3VwYWJhc2VDbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcImZlZWRcIilcbiAgICAuc2VsZWN0KFwiKlwiKVxuICAgIC5vcmRlcihcImlkXCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IGRhdGEgfSk7XG59O1xuIl0sIm5hbWVzIjpbInN1cGFiYXNlIiwicmVxIiwicmVzIiwiZGF0YSIsImZyb20iLCJzZWxlY3QiLCJvcmRlciIsImFzY2VuZGluZyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/get-posts.js\n");

/***/ }),

/***/ "(api)/./services/supabaseClient.js":
/*!************************************!*\
  !*** ./services/supabaseClient.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://sligmmwbmogeprbsylwv.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsaWdtbXdibW9nZXByYnN5bHd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEyNTIzNzgsImV4cCI6MTk3NjgyODM3OH0.HMn2nxMbLbv1APzqSRwWwUNtX2MdAOwlQslSphtNmg0\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9zdXBhYmFzZUNsaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFFbEQsTUFBTUMsV0FBVyxHQUFHQywwQ0FBb0M7QUFDeEQsTUFBTUcsZUFBZSxHQUFHSCxrTkFBeUM7QUFFMUQsTUFBTUssUUFBUSxHQUFHUCxtRUFBWSxDQUFDQyxXQUFXLEVBQUVJLGVBQWUsQ0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NlcnZpY2VzL3N1cGFiYXNlQ2xpZW50LmpzPzE2MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDbGllbnR9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcblxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkxcbmNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZXG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5IClcblxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlQW5vbktleSIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwic3VwYWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./services/supabaseClient.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/get-posts.js"));
module.exports = __webpack_exports__;

})();