"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/(public)/sign-up/page",{

/***/ "(app-pages-browser)/./app/(app)/(public)/sign-up/page.tsx":
/*!*********************************************!*\
  !*** ./app/(app)/(public)/sign-up/page.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nasync function Page() {\n    _s();\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [displayName, setDisplayName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleEmailChange = (e)=>{\n        setEmail(e.target.value);\n    };\n    const handlePasswordChange = (e)=>{\n        setPassword(e.target.value);\n    };\n    const handleConfirmPasswordChange = (e)=>{\n        setConfirmPassword(e.target.value);\n    };\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSignIn = (e)=>{\n        router.push(\"/login\");\n    };\n    const handleSignUp = (e)=>{};\n    console.log(email, password, confirmPassword, userName, displayName);\n    // const handleSubmit = async (e: any) => {\n    //   e.preventDefault();\n    //   if (password !== confirmPassword) {\n    //     alert(\"Passwords don't match\");\n    //     return;\n    //   }\n    //   try {\n    //     const res = await fetch(\"/api/auth/signup\", {\n    //       method: \"POST\",\n    //       headers: { \"Content-Type\": \"application/json\" },\n    //       body: JSON.stringify({ email, password }),\n    //     });\n    //     if (res.status === 200) {\n    //       alert(\"You have successfully signed up!\");\n    //     } else {\n    //       alert(\"Something went wrong.\");\n    //     }\n    //   } catch (error) {\n    //     console.log(error);\n    //   }\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white rounded-lg shadow-lg p-10 w-[420px] h-[520px] flex justify-center  text-black flex-col \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold text-center\",\n                    children: \"Sign up\"\n                }, void 0, false, {\n                    fileName: \"/Users/rjaanit/Desktop/Supabase-Next.js/app/(app)/(public)/sign-up/page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rjaanit/Desktop/Supabase-Next.js/app/(app)/(public)/sign-up/page.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"border border-gray-300 rounded-lg w-[50%] h-12 px-3 mt-5 focus:outline-none focus:border-black\",\n                                placeholder: \"Display Name\",\n                                onChange: (input)=>setDisplayName(input.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/rjaanit/Desktop/Supabase-Next.js/app/(app)/(public)/sign-up/page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"border border-gray-300 rounded-lg w-[50%] h-12 px-3 mt-5 focus:outline-none focus:border-black\",\n                                placeholder: \"User Name\",\n                                onChange: (input)=>setUserName(input.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/rjaanit/Desktop/Supabase-Next.js/app/(app)/(public)/sign-up/page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rjaanit/Desktop/Supabase-Next.js/app/(app)/(public)/sign-up/page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border border-gray-300 rounded-lg w-full h-12 px-3 mt-5 focus:outline-none focus:border-black\",\n                        placeholder: \"Email\",\n                        onChange: (input)=>setEmail(input.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/rjaanit/Desktop/Supabase-Next.js/app/(app)/(public)/sign-up/page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border border-gray-300 rounded-lg w-full h-12 px-3 mt-5 focus:outline-none focus:border-black\",\n                        placeholder: \"Password\",\n                        type: \"password\",\n                        onChange: (input)=>setPassword(input.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/rjaanit/Desktop/Supabase-Next.js/app/(app)/(public)/sign-up/page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border border-gray-300 rounded-lg w-full h-12 px-3 mt-5 focus:outline-none focus:border-black\",\n                        placeholder: \"Confirm password\",\n                        type: \"password\",\n                        onChange: (input)=>setConfirmPassword(input.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/rjaanit/Desktop/Supabase-Next.js/app/(app)/(public)/sign-up/page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rjaanit/Desktop/Supabase-Next.js/app/(app)/(public)/sign-up/page.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-black text-white rounded-lg w-full h-10 px-3 mt-5\",\n                    children: \"Sign up\"\n                }, void 0, false, {\n                    fileName: \"/Users/rjaanit/Desktop/Supabase-Next.js/app/(app)/(public)/sign-up/page.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rjaanit/Desktop/Supabase-Next.js/app/(app)/(public)/sign-up/page.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-center mt-5\",\n                    children: [\n                        \"Already have an account?\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/login\",\n                            className: \"text-blue-500\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rjaanit/Desktop/Supabase-Next.js/app/(app)/(public)/sign-up/page.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rjaanit/Desktop/Supabase-Next.js/app/(app)/(public)/sign-up/page.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rjaanit/Desktop/Supabase-Next.js/app/(app)/(public)/sign-up/page.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rjaanit/Desktop/Supabase-Next.js/app/(app)/(public)/sign-up/page.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"hv+48H0loXfvcPjD+PqoyRBxwT4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oYXBwKS8ocHVibGljKS9zaWduLXVwL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFaUM7QUFDVztBQUlmO0FBRWQsZUFBZUc7O0lBQzVCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxpQkFBaUJDLG1CQUFtQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDWSxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1jLG9CQUFvQixDQUFDQztRQUN6QlIsU0FBU1EsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3pCO0lBRUEsTUFBTUMsdUJBQXVCLENBQUNIO1FBQzVCVixZQUFZVSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDNUI7SUFFQSxNQUFNRSw4QkFBOEIsQ0FBQ0o7UUFDbkNOLG1CQUFtQk0sRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQ25DO0lBRUEsTUFBTUcsU0FBU25CLDBEQUFTQTtJQUN4QixNQUFNb0IsZUFBZSxDQUFDTjtRQUNwQkssT0FBT0UsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxNQUFNQyxlQUFlLENBQUNSLEtBRXRCO0lBR0FTLFFBQVFDLEdBQUcsQ0FBQ25CLE9BQU9GLFVBQVVJLGlCQUFpQkksVUFBVUY7SUFFeEQsMkNBQTJDO0lBQzNDLHdCQUF3QjtJQUN4Qix3Q0FBd0M7SUFDeEMsc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCxNQUFNO0lBQ04sVUFBVTtJQUNWLG9EQUFvRDtJQUNwRCx3QkFBd0I7SUFDeEIseURBQXlEO0lBQ3pELG1EQUFtRDtJQUNuRCxVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLG1EQUFtRDtJQUNuRCxlQUFlO0lBQ2Ysd0NBQXdDO0lBQ3hDLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLE1BQU07SUFDTixLQUFLO0lBRUwscUJBQ0UsOERBQUNnQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7MEJBQ0MsNEVBQUNFO29CQUFHRCxXQUFVOzhCQUFpQzs7Ozs7Ozs7Ozs7MEJBRWpELDhEQUFDRDs7a0NBQ0MsOERBQUNBO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQ0NGLFdBQVU7Z0NBQ1ZHLGFBQVk7Z0NBQ1pDLFVBQVUsQ0FBQ0YsUUFBVWxCLGVBQWVrQixNQUFNYixNQUFNLENBQUNDLEtBQUs7Ozs7OzswQ0FFeEQsOERBQUNZO2dDQUNDRixXQUFVO2dDQUNWRyxhQUFZO2dDQUNaQyxVQUFVLENBQUNGLFFBQVVoQixZQUFZZ0IsTUFBTWIsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7a0NBR3ZELDhEQUFDWTt3QkFDQ0YsV0FBVTt3QkFDVkcsYUFBWTt3QkFDWkMsVUFBVSxDQUFDRixRQUFVdEIsU0FBU3NCLE1BQU1iLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7O2tDQUVsRCw4REFBQ1k7d0JBQ0NGLFdBQVU7d0JBQ1ZHLGFBQVk7d0JBQ1pFLE1BQUs7d0JBQ0xELFVBQVUsQ0FBQ0YsUUFBVXhCLFlBQVl3QixNQUFNYixNQUFNLENBQUNDLEtBQUs7Ozs7OztrQ0FFckQsOERBQUNZO3dCQUNDRixXQUFVO3dCQUNWRyxhQUFZO3dCQUNaRSxNQUFLO3dCQUNMRCxVQUFVLENBQUNGLFFBQVVwQixtQkFBbUJvQixNQUFNYixNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7OzswQkFHOUQsOERBQUNTOzBCQUNDLDRFQUFDTztvQkFBT04sV0FBVTs4QkFBdUQ7Ozs7Ozs7Ozs7OzBCQUkzRSw4REFBQ0Q7MEJBQ0MsNEVBQUNRO29CQUFFUCxXQUFVOzt3QkFBbUI7d0JBQ0w7c0NBQ3pCLDhEQUFDekIsa0RBQUlBOzRCQUFDaUMsTUFBTTs0QkFBVVIsV0FBVTtzQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzFEO0dBeEc4QnhCOztRQW1CYkYsc0RBQVNBOzs7S0FuQklFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oYXBwKS8ocHVibGljKS9zaWduLXVwL3BhZ2UudHN4PzM4NDAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmltcG9ydCB7IElucHV0IH0gZnJvbSBcInBvc3Rjc3NcIjtcbmltcG9ydCBpbnB1dCBmcm9tIFwicG9zdGNzcy9saWIvaW5wdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gUGFnZSgpIHtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvbmZpcm1QYXNzd29yZCwgc2V0Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGlzcGxheU5hbWUsIHNldERpc3BsYXlOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUVtYWlsQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQYXNzd29yZENoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29uZmlybVBhc3N3b3JkQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIHNldENvbmZpcm1QYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGhhbmRsZVNpZ25JbiA9IChlOiBhbnkpID0+IHtcbiAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaWduVXAgPSAoZTogYW55KSA9PiB7XG4gICAgXG4gIH1cblxuXG4gIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCwgY29uZmlybVBhc3N3b3JkLCB1c2VyTmFtZSwgZGlzcGxheU5hbWUpO1xuXG4gIC8vIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBhbnkpID0+IHtcbiAgLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgaWYgKHBhc3N3b3JkICE9PSBjb25maXJtUGFzc3dvcmQpIHtcbiAgLy8gICAgIGFsZXJ0KFwiUGFzc3dvcmRzIGRvbid0IG1hdGNoXCIpO1xuICAvLyAgICAgcmV0dXJuO1xuICAvLyAgIH1cbiAgLy8gICB0cnkge1xuICAvLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2F1dGgvc2lnbnVwXCIsIHtcbiAgLy8gICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgLy8gICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAvLyAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgLy8gICAgIH0pO1xuICAvLyAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAvLyAgICAgICBhbGVydChcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBzaWduZWQgdXAhXCIpO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIik7XG4gIC8vICAgICB9XG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIHAtMTAgdy1bNDIwcHhdIGgtWzUyMHB4XSBmbGV4IGp1c3RpZnktY2VudGVyICB0ZXh0LWJsYWNrIGZsZXgtY29sIFwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPlNpZ24gdXA8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGdhcC0yXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgdy1bNTAlXSBoLTEyIHB4LTMgbXQtNSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsYWNrXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlzcGxheSBOYW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoaW5wdXQpID0+IHNldERpc3BsYXlOYW1lKGlucHV0LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyB3LVs1MCVdIGgtMTIgcHgtMyBtdC01IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmxhY2tcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VyIE5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhpbnB1dCkgPT4gc2V0VXNlck5hbWUoaW5wdXQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHctZnVsbCBoLTEyIHB4LTMgbXQtNSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsYWNrXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGlucHV0KSA9PiBzZXRFbWFpbChpbnB1dC50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgdy1mdWxsIGgtMTIgcHgtMyBtdC01IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmxhY2tcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhpbnB1dCkgPT4gc2V0UGFzc3dvcmQoaW5wdXQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHctZnVsbCBoLTEyIHB4LTMgbXQtNSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsYWNrXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmRcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhpbnB1dCkgPT4gc2V0Q29uZmlybVBhc3N3b3JkKGlucHV0LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmxhY2sgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHctZnVsbCBoLTEwIHB4LTMgbXQtNVwiPlxuICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTVcIj5cbiAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD97XCIgXCJ9XG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvbG9naW5cIn0gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTGluayIsIlBhZ2UiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZW1haWwiLCJzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZCIsInNldENvbmZpcm1QYXNzd29yZCIsImRpc3BsYXlOYW1lIiwic2V0RGlzcGxheU5hbWUiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsImhhbmRsZUNvbmZpcm1QYXNzd29yZENoYW5nZSIsInJvdXRlciIsImhhbmRsZVNpZ25JbiIsInB1c2giLCJoYW5kbGVTaWduVXAiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0eXBlIiwiYnV0dG9uIiwicCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(app)/(public)/sign-up/page.tsx\n"));

/***/ })

});