"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_DynamicTitle_js";
exports.ids = ["components_DynamicTitle_js"];
exports.modules = {

/***/ "./components/DynamicTitle.js":
/*!************************************!*\
  !*** ./components/DynamicTitle.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DynamicTitle)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useActiveSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useActiveSection */ \"./hooks/useActiveSection.js\");\n\n\nconst titles = {\n    about: \"About Me — Abdullah Haider\",\n    services: \"Services — Abdullah Haider\",\n    work: \"My Work — Abdullah Haider\",\n    pricing: \"Pricing — Abdullah Haider\",\n    testimonials: \"Testimonials — Abdullah Haider\",\n    process: \"Process — Abdullah Haider\",\n    faq: \"FAQ — Abdullah Haider\",\n    contact: \"Contact — Abdullah Haider\"\n};\nfunction DynamicTitle() {\n    const active = (0,_hooks_useActiveSection__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object.keys(titles));\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        document.title = titles[active] || \"Abdullah Haider — Web Designer & Developer\";\n    }, [\n        active\n    ]);\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0R5bmFtaWNUaXRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtDO0FBQ3VCO0FBQ3pELE1BQU1FLFNBQVM7SUFDYkMsT0FBTztJQUNQQyxVQUFVO0lBQ1ZDLE1BQU07SUFDTkMsU0FBUztJQUNUQyxjQUFjO0lBQ2RDLFNBQVM7SUFDVEMsS0FBSztJQUNMQyxTQUFTO0FBQ1g7QUFDZSxTQUFTQztJQUN0QixNQUFNQyxTQUFTWCxtRUFBZ0JBLENBQUNZLE9BQU9DLElBQUksQ0FBQ1o7SUFDNUNGLGdEQUFTQSxDQUFDO1FBQ1JlLFNBQVNDLEtBQUssR0FBR2QsTUFBTSxDQUFDVSxPQUFPLElBQUk7SUFDckMsR0FBRztRQUFDQTtLQUFPO0lBQ1gsT0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWJkdWxsYWgtaGFpZGVyLXBvcnRmb2xpby8uL2NvbXBvbmVudHMvRHluYW1pY1RpdGxlLmpzPzgxMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlQWN0aXZlU2VjdGlvbiBmcm9tIFwiLi4vaG9va3MvdXNlQWN0aXZlU2VjdGlvblwiO1xuY29uc3QgdGl0bGVzID0ge1xuICBhYm91dDogXCJBYm91dCBNZSDigJQgQWJkdWxsYWggSGFpZGVyXCIsXG4gIHNlcnZpY2VzOiBcIlNlcnZpY2VzIOKAlCBBYmR1bGxhaCBIYWlkZXJcIixcbiAgd29yazogXCJNeSBXb3JrIOKAlCBBYmR1bGxhaCBIYWlkZXJcIixcbiAgcHJpY2luZzogXCJQcmljaW5nIOKAlCBBYmR1bGxhaCBIYWlkZXJcIixcbiAgdGVzdGltb25pYWxzOiBcIlRlc3RpbW9uaWFscyDigJQgQWJkdWxsYWggSGFpZGVyXCIsXG4gIHByb2Nlc3M6IFwiUHJvY2VzcyDigJQgQWJkdWxsYWggSGFpZGVyXCIsXG4gIGZhcTogXCJGQVEg4oCUIEFiZHVsbGFoIEhhaWRlclwiLFxuICBjb250YWN0OiBcIkNvbnRhY3Qg4oCUIEFiZHVsbGFoIEhhaWRlclwiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER5bmFtaWNUaXRsZSgpIHtcbiAgY29uc3QgYWN0aXZlID0gdXNlQWN0aXZlU2VjdGlvbihPYmplY3Qua2V5cyh0aXRsZXMpKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlc1thY3RpdmVdIHx8IFwiQWJkdWxsYWggSGFpZGVyIOKAlCBXZWIgRGVzaWduZXIgJiBEZXZlbG9wZXJcIjtcbiAgfSwgW2FjdGl2ZV0pO1xuICByZXR1cm4gbnVsbDtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VBY3RpdmVTZWN0aW9uIiwidGl0bGVzIiwiYWJvdXQiLCJzZXJ2aWNlcyIsIndvcmsiLCJwcmljaW5nIiwidGVzdGltb25pYWxzIiwicHJvY2VzcyIsImZhcSIsImNvbnRhY3QiLCJEeW5hbWljVGl0bGUiLCJhY3RpdmUiLCJPYmplY3QiLCJrZXlzIiwiZG9jdW1lbnQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DynamicTitle.js\n");

/***/ })

};
;