"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/symbol-observable";
exports.ids = ["vendor-chunks/symbol-observable"];
exports.modules = {

/***/ "(ssr)/./node_modules/symbol-observable/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/symbol-observable/lib/index.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _ponyfill = __webpack_require__(/*! ./ponyfill.js */ \"(ssr)/./node_modules/symbol-observable/lib/ponyfill.js\");\n\nvar _ponyfill2 = _interopRequireDefault(_ponyfill);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar root; /* global window */\n\n\nif (typeof self !== 'undefined') {\n  root = self;\n} else if (typeof window !== 'undefined') {\n  root = window;\n} else if (typeof global !== 'undefined') {\n  root = global;\n} else if (true) {\n  root = module;\n} else {}\n\nvar result = (0, _ponyfill2['default'])(root);\nexports[\"default\"] = result;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7QUFBYTs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7O0FBRUYsZ0JBQWdCLG1CQUFPLENBQUMsNkVBQWU7O0FBRXZDOztBQUVBLHVDQUF1Qyx1Q0FBdUM7O0FBRTlFLFVBQVU7OztBQUdWO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFLFNBQVMsSUFBNkI7QUFDeEM7QUFDQSxFQUFFLEtBQUssRUFFTjs7QUFFRDtBQUNBLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2F6dXJvLWJldHRpbmctYXBwLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9pbmRleC5qcz82ZTRmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9wb255ZmlsbCA9IHJlcXVpcmUoJy4vcG9ueWZpbGwuanMnKTtcblxudmFyIF9wb255ZmlsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb255ZmlsbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIHJvb3Q7IC8qIGdsb2JhbCB3aW5kb3cgKi9cblxuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gbW9kdWxlO1xufSBlbHNlIHtcbiAgcm9vdCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG59XG5cbnZhciByZXN1bHQgPSAoMCwgX3BvbnlmaWxsMlsnZGVmYXVsdCddKShyb290KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJlc3VsdDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/symbol-observable/lib/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/symbol-observable/lib/ponyfill.js":
/*!********************************************************!*\
  !*** ./node_modules/symbol-observable/lib/ponyfill.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n\tvalue: true\n}));\nexports[\"default\"] = symbolObservablePonyfill;\nfunction symbolObservablePonyfill(root) {\n\tvar result;\n\tvar _Symbol = root.Symbol;\n\n\tif (typeof _Symbol === 'function') {\n\t\tif (_Symbol.observable) {\n\t\t\tresult = _Symbol.observable;\n\t\t} else {\n\n\t\t\tif (typeof _Symbol['for'] === 'function') {\n\t\t\t\t// This just needs to be something that won't trample other user's Symbol.for use\n\t\t\t\t// It also will guide people to the source of their issues, if this is problematic.\n\t\t\t\t// META: It's a resource locator!\n\t\t\t\tresult = _Symbol['for']('https://github.com/benlesh/symbol-observable');\n\t\t\t} else {\n\t\t\t\t// Symbol.for didn't exist! The best we can do at this point is a totally \n\t\t\t\t// unique symbol. Note that the string argument here is a descriptor, not\n\t\t\t\t// an identifier. This symbol is unique.\n\t\t\t\tresult = _Symbol('https://github.com/benlesh/symbol-observable');\n\t\t\t}\n\t\t\ttry {\n\t\t\t\t_Symbol.observable = result;\n\t\t\t} catch (err) {\n\t\t\t\t// Do nothing. In some environments, users have frozen `Symbol` for security reasons,\n\t\t\t\t// if it is frozen assigning to it will throw. In this case, we don't care, because\n\t\t\t\t// they will need to use the returned value from the ponyfill.\n\t\t\t}\n\t\t}\n\t} else {\n\t\tresult = '@@observable';\n\t}\n\n\treturn result;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL3BvbnlmaWxsLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXp1cm8tYmV0dGluZy1hcHAvLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL3BvbnlmaWxsLmpzPzFiZWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsO1xuZnVuY3Rpb24gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsKHJvb3QpIHtcblx0dmFyIHJlc3VsdDtcblx0dmFyIF9TeW1ib2wgPSByb290LlN5bWJvbDtcblxuXHRpZiAodHlwZW9mIF9TeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoX1N5bWJvbC5vYnNlcnZhYmxlKSB7XG5cdFx0XHRyZXN1bHQgPSBfU3ltYm9sLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0aWYgKHR5cGVvZiBfU3ltYm9sWydmb3InXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHQvLyBUaGlzIGp1c3QgbmVlZHMgdG8gYmUgc29tZXRoaW5nIHRoYXQgd29uJ3QgdHJhbXBsZSBvdGhlciB1c2VyJ3MgU3ltYm9sLmZvciB1c2Vcblx0XHRcdFx0Ly8gSXQgYWxzbyB3aWxsIGd1aWRlIHBlb3BsZSB0byB0aGUgc291cmNlIG9mIHRoZWlyIGlzc3VlcywgaWYgdGhpcyBpcyBwcm9ibGVtYXRpYy5cblx0XHRcdFx0Ly8gTUVUQTogSXQncyBhIHJlc291cmNlIGxvY2F0b3IhXG5cdFx0XHRcdHJlc3VsdCA9IF9TeW1ib2xbJ2ZvciddKCdodHRwczovL2dpdGh1Yi5jb20vYmVubGVzaC9zeW1ib2wtb2JzZXJ2YWJsZScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gU3ltYm9sLmZvciBkaWRuJ3QgZXhpc3QhIFRoZSBiZXN0IHdlIGNhbiBkbyBhdCB0aGlzIHBvaW50IGlzIGEgdG90YWxseSBcblx0XHRcdFx0Ly8gdW5pcXVlIHN5bWJvbC4gTm90ZSB0aGF0IHRoZSBzdHJpbmcgYXJndW1lbnQgaGVyZSBpcyBhIGRlc2NyaXB0b3IsIG5vdFxuXHRcdFx0XHQvLyBhbiBpZGVudGlmaWVyLiBUaGlzIHN5bWJvbCBpcyB1bmlxdWUuXG5cdFx0XHRcdHJlc3VsdCA9IF9TeW1ib2woJ2h0dHBzOi8vZ2l0aHViLmNvbS9iZW5sZXNoL3N5bWJvbC1vYnNlcnZhYmxlJyk7XG5cdFx0XHR9XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRfU3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0Ly8gRG8gbm90aGluZy4gSW4gc29tZSBlbnZpcm9ubWVudHMsIHVzZXJzIGhhdmUgZnJvemVuIGBTeW1ib2xgIGZvciBzZWN1cml0eSByZWFzb25zLFxuXHRcdFx0XHQvLyBpZiBpdCBpcyBmcm96ZW4gYXNzaWduaW5nIHRvIGl0IHdpbGwgdGhyb3cuIEluIHRoaXMgY2FzZSwgd2UgZG9uJ3QgY2FyZSwgYmVjYXVzZVxuXHRcdFx0XHQvLyB0aGV5IHdpbGwgbmVlZCB0byB1c2UgdGhlIHJldHVybmVkIHZhbHVlIGZyb20gdGhlIHBvbnlmaWxsLlxuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/symbol-observable/lib/ponyfill.js\n");

/***/ })

};
;