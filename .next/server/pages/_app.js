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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/RedditContext.js":
/*!**********************************!*\
  !*** ./context/RedditContext.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RedditContext\": () => (/* binding */ RedditContext),\n/* harmony export */   \"RedditProvider\": () => (/* binding */ RedditProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_supabaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/supabaseClient */ \"./services/supabaseClient.js\");\n\n\n\nconst RedditContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst RedditProvider = ({ children  })=>{\n    const { 0: currentUser , 1: setCurrentUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: selectedPost , 1: setSelectedPost  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetcher = (...args)=>fetch(...args).then((res)=>res.json());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { user  } = _services_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.session() || {\n            user: null\n        };\n        setCurrentUser(user);\n        _services_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.onAuthStateChange((_event, authSession)=>{\n            setCurrentUser(authSession.user);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RedditContext.Provider, {\n        value: {\n            currentUser,\n            fetcher,\n            selectedPost,\n            setSelectedPost\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/shivamsharma/webdev/projects/redditClone/context/RedditContext.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1JlZGRpdENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTJEO0FBQ0w7QUFFL0MsTUFBTUksYUFBYSxpQkFBR0osb0RBQWEsRUFBRSxDQUFDO0FBRXRDLE1BQU1LLGNBQWMsR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQzlDLE1BQU0sS0FBQ0MsV0FBVyxNQUFFQyxjQUFjLE1BQUlOLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3BELE1BQU0sS0FBQ08sWUFBWSxNQUFFQyxlQUFlLE1BQUlSLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBRXRELE1BQU1TLE9BQU8sR0FBRyxDQUFJQyxHQUFBQSxJQUFJLEdBQUtDLEtBQUssSUFBSUQsSUFBSSxDQUFDLENBQUNFLElBQUksQ0FBQyxDQUFDQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7SUFFckVmLGdEQUFTLENBQUMsSUFBTTtRQUNkLE1BQU0sRUFBRWdCLElBQUksR0FBRSxHQUFHZCwyRUFBcUIsRUFBRSxJQUFJO1lBQUVjLElBQUksRUFBRSxJQUFJO1NBQUU7UUFDMURULGNBQWMsQ0FBQ1MsSUFBSSxDQUFDLENBQUM7UUFFckJkLHFGQUErQixDQUFDLENBQUNrQixNQUFNLEVBQUVDLFdBQVcsR0FBSztZQUN2RGQsY0FBYyxDQUFDYyxXQUFXLENBQUNMLElBQUksQ0FBQyxDQUFDO1NBQ2xDLENBQUMsQ0FBQztLQUNKLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ2IsYUFBYSxDQUFDbUIsUUFBUTtRQUNyQkMsS0FBSyxFQUFFO1lBQ0xqQixXQUFXO1lBQ1hJLE9BQU87WUFDUEYsWUFBWTtZQUNaQyxlQUFlO1NBQ2hCO2tCQUVBSixRQUFROzs7OztpQkFDYyxDQUN6QjtDQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9jb250ZXh0L1JlZGRpdENvbnRleHQuanM/Zjg2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdXBhYmFzZUNsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgUmVkZGl0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IFJlZGRpdFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2VsZWN0ZWRQb3N0LCBzZXRTZWxlY3RlZFBvc3RdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyB1c2VyIH0gPSBzdXBhYmFzZS5hdXRoLnNlc3Npb24oKSB8fCB7IHVzZXI6IG51bGwgfTtcbiAgICBzZXRDdXJyZW50VXNlcih1c2VyKTtcblxuICAgIHN1cGFiYXNlLmF1dGgub25BdXRoU3RhdGVDaGFuZ2UoKF9ldmVudCwgYXV0aFNlc3Npb24pID0+IHtcbiAgICAgIHNldEN1cnJlbnRVc2VyKGF1dGhTZXNzaW9uLnVzZXIpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVkZGl0Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgY3VycmVudFVzZXIsXG4gICAgICAgIGZldGNoZXIsXG4gICAgICAgIHNlbGVjdGVkUG9zdCxcbiAgICAgICAgc2V0U2VsZWN0ZWRQb3N0LFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9SZWRkaXRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdXBhYmFzZSIsIlJlZGRpdENvbnRleHQiLCJSZWRkaXRQcm92aWRlciIsImNoaWxkcmVuIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInNlbGVjdGVkUG9zdCIsInNldFNlbGVjdGVkUG9zdCIsImZldGNoZXIiLCJhcmdzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInVzZXIiLCJhdXRoIiwic2Vzc2lvbiIsIm9uQXV0aFN0YXRlQ2hhbmdlIiwiX2V2ZW50IiwiYXV0aFNlc3Npb24iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/RedditContext.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/tailwind.css */ \"./styles/tailwind.css\");\n/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_RedditContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/RedditContext */ \"./context/RedditContext.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_RedditContext__WEBPACK_IMPORTED_MODULE_2__.RedditProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/shivamsharma/webdev/projects/redditClone/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/shivamsharma/webdev/projects/redditClone/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFnQztBQUUwQjtBQUUxRCxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRSw4REFBQ0gsa0VBQWM7a0JBQ2IsNEVBQUNFLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDYixDQUNqQjtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgUmVkZGl0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9SZWRkaXRDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UmVkZGl0UHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9SZWRkaXRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmVkZGl0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./services/supabaseClient.js":
/*!************************************!*\
  !*** ./services/supabaseClient.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://sligmmwbmogeprbsylwv.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsaWdtbXdibW9nZXByYnN5bHd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEyNTIzNzgsImV4cCI6MTk3NjgyODM3OH0.HMn2nxMbLbv1APzqSRwWwUNtX2MdAOwlQslSphtNmg0\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9zdXBhYmFzZUNsaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFFbEQsTUFBTUMsV0FBVyxHQUFHQywwQ0FBb0M7QUFDeEQsTUFBTUcsZUFBZSxHQUFHSCxrTkFBeUM7QUFFMUQsTUFBTUssUUFBUSxHQUFHUCxtRUFBWSxDQUFDQyxXQUFXLEVBQUVJLGVBQWUsQ0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NlcnZpY2VzL3N1cGFiYXNlQ2xpZW50LmpzPzE2MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDbGllbnR9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcblxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkxcbmNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZXG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5IClcblxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlQW5vbktleSIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwic3VwYWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/supabaseClient.js\n");

/***/ }),

/***/ "./styles/tailwind.css":
/*!*****************************!*\
  !*** ./styles/tailwind.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();