"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_MouseGlow_js";
exports.ids = ["components_MouseGlow_js"];
exports.modules = {

/***/ "./components/MouseGlow.js":
/*!*********************************!*\
  !*** ./components/MouseGlow.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MouseGlow)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MouseGlow() {\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handler = (e)=>{\n            if (ref.current) {\n                ref.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(59,142,255,0.02), transparent 60%)`;\n            }\n        };\n        window.addEventListener(\"mousemove\", handler, {\n            passive: true\n        });\n        return ()=>window.removeEventListener(\"mousemove\", handler);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        className: \"fixed inset-0 z-[1] pointer-events-none transition-all duration-300\"\n    }, void 0, false, {\n        fileName: \"/Users/abdullah/Desktop/abdullah-haider/components/MouseGlow.js\",\n        lineNumber: 13,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vdXNlR2xvdy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEM7QUFDM0IsU0FBU0U7SUFDdEIsTUFBTUMsTUFBTUYsNkNBQU1BLENBQUM7SUFDbkJELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUksVUFBVSxDQUFDQztZQUNmLElBQUlGLElBQUlHLE9BQU8sRUFBRTtnQkFDZkgsSUFBSUcsT0FBTyxDQUFDQyxLQUFLLENBQUNDLFVBQVUsR0FBRyxDQUFDLGdDQUFnQyxFQUFFSCxFQUFFSSxPQUFPLENBQUMsR0FBRyxFQUFFSixFQUFFSyxPQUFPLENBQUMsMkNBQTJDLENBQUM7WUFDekk7UUFDRjtRQUNBQyxPQUFPQyxnQkFBZ0IsQ0FBQyxhQUFhUixTQUFTO1lBQUVTLFNBQVM7UUFBSztRQUM5RCxPQUFPLElBQU1GLE9BQU9HLG1CQUFtQixDQUFDLGFBQWFWO0lBQ3ZELEdBQUcsRUFBRTtJQUNMLHFCQUFPLDhEQUFDVztRQUFJWixLQUFLQTtRQUFLYSxXQUFVOzs7Ozs7QUFDbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYmR1bGxhaC1oYWlkZXItcG9ydGZvbGlvLy4vY29tcG9uZW50cy9Nb3VzZUdsb3cuanM/ZDkyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW91c2VHbG93KCkge1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9IChlKSA9PiB7XG4gICAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQuc3R5bGUuYmFja2dyb3VuZCA9IGByYWRpYWwtZ3JhZGllbnQoNjAwcHggY2lyY2xlIGF0ICR7ZS5jbGllbnRYfXB4ICR7ZS5jbGllbnRZfXB4LCByZ2JhKDU5LDE0MiwyNTUsMC4wMiksIHRyYW5zcGFyZW50IDYwJSlgO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlciwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVyKTtcbiAgfSwgW10pO1xuICByZXR1cm4gPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LVsxXSBwb2ludGVyLWV2ZW50cy1ub25lIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiIC8+O1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIk1vdXNlR2xvdyIsInJlZiIsImhhbmRsZXIiLCJlIiwiY3VycmVudCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImNsaWVudFgiLCJjbGllbnRZIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MouseGlow.js\n");

/***/ })

};
;