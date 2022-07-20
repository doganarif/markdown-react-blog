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
exports.id = "pages/blog/[slug]";
exports.ids = ["pages/blog/[slug]"];
exports.modules = {

/***/ "./pages/blog/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/blog/[slug].tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BlogDetail),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! markdown-it */ \"markdown-it\");\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function getStaticPaths() {\n    const files = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(\"blogs\");\n    const paths = files.map((fileName)=>({\n            params: {\n                slug: fileName.replace(\".md\", \"\")\n            }\n        }));\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params: { slug  }  }) {\n    const fileName = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(`blogs/${slug}.md`, \"utf-8\");\n    const { data: frontmatter , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileName);\n    return {\n        props: {\n            frontmatter,\n            content\n        }\n    };\n}\nfunction BlogDetail({ frontmatter , content  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: frontmatter.title\n            }, void 0, false, {\n                fileName: \"/Users/10lift/Desktop/tenlift_projects/markdown-react-blog/pages/blog/[slug].tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: markdown_it__WEBPACK_IMPORTED_MODULE_3___default()().render(content)\n                }\n            }, void 0, false, {\n                fileName: \"/Users/10lift/Desktop/tenlift_projects/markdown-react-blog/pages/blog/[slug].tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/10lift/Desktop/tenlift_projects/markdown-react-blog/pages/blog/[slug].tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFvQjtBQUNhO0FBQ0o7QUFFdEIsZUFBZUcsY0FBYyxHQUFHO0lBQ3JDLE1BQU1DLEtBQUssR0FBR0oscURBQWMsQ0FBQyxPQUFPLENBQUM7SUFDckMsTUFBTU0sS0FBSyxHQUFHRixLQUFLLENBQUNHLEdBQUcsQ0FBQyxDQUFDQyxRQUFRLEdBQUssQ0FBQztZQUNyQ0MsTUFBTSxFQUFFO2dCQUNOQyxJQUFJLEVBQUVGLFFBQVEsQ0FBQ0csT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7YUFDbEM7U0FDRixDQUFDLENBQUM7SUFDSCxPQUFPO1FBQ0xMLEtBQUs7UUFDTE0sUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQztDQUNIO0FBRU0sZUFBZUMsY0FBYyxDQUFDLEVBQUVKLE1BQU0sRUFBRSxFQUFFQyxJQUFJLEdBQUUsR0FBRSxFQUFFO0lBQ3pELE1BQU1GLFFBQVEsR0FBR1Isc0RBQWUsQ0FBQyxDQUFDLE1BQU0sRUFBRVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQztJQUM3RCxNQUFNLEVBQUVLLElBQUksRUFBRUMsV0FBVyxHQUFFQyxPQUFPLEdBQUUsR0FBR2hCLGtEQUFNLENBQUNPLFFBQVEsQ0FBQztJQUN2RCxPQUFPO1FBQ0xVLEtBQUssRUFBRTtZQUNMRixXQUFXO1lBQ1hDLE9BQU87U0FDUjtLQUNGLENBQUM7Q0FDSDtBQUVjLFNBQVNFLFVBQVUsQ0FBQyxFQUFFSCxXQUFXLEdBQUVDLE9BQU8sR0FBRSxFQUFFO0lBQzNELHFCQUNFLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxtQkFBbUI7OzBCQUNoQyw4REFBQ0MsSUFBRTswQkFBRU4sV0FBVyxDQUFDTyxLQUFLOzs7OztvQkFBTTswQkFDNUIsOERBQUNILEtBQUc7Z0JBQUNJLHVCQUF1QixFQUFFO29CQUFFQyxNQUFNLEVBQUV2QixrREFBRSxFQUFFLENBQUN3QixNQUFNLENBQUNULE9BQU8sQ0FBQztpQkFBRTs7Ozs7b0JBQUk7Ozs7OztZQUM5RCxDQUNOO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2dhbi1hcmlmLWJsb2cvLi9wYWdlcy9ibG9nL1tzbHVnXS50c3g/YWZiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuaW1wb3J0IG1kIGZyb20gXCJtYXJrZG93bi1pdFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMoXCJibG9nc1wiKTtcbiAgY29uc3QgcGF0aHMgPSBmaWxlcy5tYXAoKGZpbGVOYW1lKSA9PiAoe1xuICAgIHBhcmFtczoge1xuICAgICAgc2x1ZzogZmlsZU5hbWUucmVwbGFjZShcIi5tZFwiLCBcIlwiKSxcbiAgICB9LFxuICB9KSk7XG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pIHtcbiAgY29uc3QgZmlsZU5hbWUgPSBmcy5yZWFkRmlsZVN5bmMoYGJsb2dzLyR7c2x1Z30ubWRgLCBcInV0Zi04XCIpO1xuICBjb25zdCB7IGRhdGE6IGZyb250bWF0dGVyLCBjb250ZW50IH0gPSBtYXR0ZXIoZmlsZU5hbWUpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBmcm9udG1hdHRlcixcbiAgICAgIGNvbnRlbnQsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ0RldGFpbCh7IGZyb250bWF0dGVyLCBjb250ZW50IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICA8aDE+e2Zyb250bWF0dGVyLnRpdGxlfTwvaDE+XG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWQoKS5yZW5kZXIoY29udGVudCkgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuIl0sIm5hbWVzIjpbImZzIiwibWF0dGVyIiwibWQiLCJnZXRTdGF0aWNQYXRocyIsImZpbGVzIiwicmVhZGRpclN5bmMiLCJwYXRocyIsIm1hcCIsImZpbGVOYW1lIiwicGFyYW1zIiwic2x1ZyIsInJlcGxhY2UiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsImZyb250bWF0dGVyIiwiY29udGVudCIsInByb3BzIiwiQmxvZ0RldGFpbCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGl0bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[slug].tsx\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "markdown-it":
/*!******************************!*\
  !*** external "markdown-it" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("markdown-it");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[slug].tsx"));
module.exports = __webpack_exports__;

})();