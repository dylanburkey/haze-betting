/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/graphql-tag";
exports.ids = ["vendor-chunks/graphql-tag"];
exports.modules = {

/***/ "(ssr)/./node_modules/graphql-tag/lib/graphql-tag.umd.js":
/*!*********************************************************!*\
  !*** ./node_modules/graphql-tag/lib/graphql-tag.umd.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("(function (global, factory) {\n     true ? factory(exports, __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\"), __webpack_require__(/*! graphql */ \"(ssr)/./node_modules/graphql/index.js\")) :\n    0;\n}(this, (function (exports, tslib, graphql) { 'use strict';\n\n    var docCache = new Map();\n    var fragmentSourceMap = new Map();\n    var printFragmentWarnings = true;\n    var experimentalFragmentVariables = false;\n    function normalize(string) {\n        return string.replace(/[\\s,]+/g, ' ').trim();\n    }\n    function cacheKeyFromLoc(loc) {\n        return normalize(loc.source.body.substring(loc.start, loc.end));\n    }\n    function processFragments(ast) {\n        var seenKeys = new Set();\n        var definitions = [];\n        ast.definitions.forEach(function (fragmentDefinition) {\n            if (fragmentDefinition.kind === 'FragmentDefinition') {\n                var fragmentName = fragmentDefinition.name.value;\n                var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);\n                var sourceKeySet = fragmentSourceMap.get(fragmentName);\n                if (sourceKeySet && !sourceKeySet.has(sourceKey)) {\n                    if (printFragmentWarnings) {\n                        console.warn(\"Warning: fragment with name \" + fragmentName + \" already exists.\\n\"\n                            + \"graphql-tag enforces all fragment names across your application to be unique; read more about\\n\"\n                            + \"this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names\");\n                    }\n                }\n                else if (!sourceKeySet) {\n                    fragmentSourceMap.set(fragmentName, sourceKeySet = new Set);\n                }\n                sourceKeySet.add(sourceKey);\n                if (!seenKeys.has(sourceKey)) {\n                    seenKeys.add(sourceKey);\n                    definitions.push(fragmentDefinition);\n                }\n            }\n            else {\n                definitions.push(fragmentDefinition);\n            }\n        });\n        return tslib.__assign(tslib.__assign({}, ast), { definitions: definitions });\n    }\n    function stripLoc(doc) {\n        var workSet = new Set(doc.definitions);\n        workSet.forEach(function (node) {\n            if (node.loc)\n                delete node.loc;\n            Object.keys(node).forEach(function (key) {\n                var value = node[key];\n                if (value && typeof value === 'object') {\n                    workSet.add(value);\n                }\n            });\n        });\n        var loc = doc.loc;\n        if (loc) {\n            delete loc.startToken;\n            delete loc.endToken;\n        }\n        return doc;\n    }\n    function parseDocument(source) {\n        var cacheKey = normalize(source);\n        if (!docCache.has(cacheKey)) {\n            var parsed = graphql.parse(source, {\n                experimentalFragmentVariables: experimentalFragmentVariables,\n                allowLegacyFragmentVariables: experimentalFragmentVariables\n            });\n            if (!parsed || parsed.kind !== 'Document') {\n                throw new Error('Not a valid GraphQL document.');\n            }\n            docCache.set(cacheKey, stripLoc(processFragments(parsed)));\n        }\n        return docCache.get(cacheKey);\n    }\n    function gql(literals) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        if (typeof literals === 'string') {\n            literals = [literals];\n        }\n        var result = literals[0];\n        args.forEach(function (arg, i) {\n            if (arg && arg.kind === 'Document') {\n                result += arg.loc.source.body;\n            }\n            else {\n                result += arg;\n            }\n            result += literals[i + 1];\n        });\n        return parseDocument(result);\n    }\n    function resetCaches() {\n        docCache.clear();\n        fragmentSourceMap.clear();\n    }\n    function disableFragmentWarnings() {\n        printFragmentWarnings = false;\n    }\n    function enableExperimentalFragmentVariables() {\n        experimentalFragmentVariables = true;\n    }\n    function disableExperimentalFragmentVariables() {\n        experimentalFragmentVariables = false;\n    }\n    var extras = {\n        gql: gql,\n        resetCaches: resetCaches,\n        disableFragmentWarnings: disableFragmentWarnings,\n        enableExperimentalFragmentVariables: enableExperimentalFragmentVariables,\n        disableExperimentalFragmentVariables: disableExperimentalFragmentVariables\n    };\n    (function (gql_1) {\n        gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;\n    })(gql || (gql = {}));\n    gql[\"default\"] = gql;\n    var gql$1 = gql;\n\n    exports.default = gql$1;\n    exports.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;\n    exports.disableFragmentWarnings = disableFragmentWarnings;\n    exports.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;\n    exports.gql = gql;\n    exports.resetCaches = resetCaches;\n\n    Object.defineProperty(exports, '__esModule', { value: true });\n\n})));\n//# sourceMappingURL=graphql-tag.umd.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC10YWcvbGliL2dyYXBocWwtdGFnLnVtZC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUksS0FBNEQsb0JBQW9CLG1CQUFPLENBQUMsdURBQU8sR0FBRyxtQkFBTyxDQUFDLHNEQUFTO0FBQ3ZILElBQUksQ0FDNkk7QUFDakosQ0FBQyw2Q0FBNkM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZHQUE2RztBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsK0NBQStDLFVBQVUsMEJBQTBCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGtCQUFrQjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQsYUFBYTs7QUFFaEUsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXp1cm8tYmV0dGluZy1hcHAvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC10YWcvbGliL2dyYXBocWwtdGFnLnVtZC5qcz8zODIyIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCd0c2xpYicpLCByZXF1aXJlKCdncmFwaHFsJykpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJywgJ3RzbGliJywgJ2dyYXBocWwnXSwgZmFjdG9yeSkgOlxuICAgIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsWydncmFwaHFsLXRhZyddID0ge30sIGdsb2JhbC50c2xpYiwgZ2xvYmFsLmdyYXBocWwpKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzLCB0c2xpYiwgZ3JhcGhxbCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgZG9jQ2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgdmFyIGZyYWdtZW50U291cmNlTWFwID0gbmV3IE1hcCgpO1xuICAgIHZhciBwcmludEZyYWdtZW50V2FybmluZ3MgPSB0cnVlO1xuICAgIHZhciBleHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZShzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bXFxzLF0rL2csICcgJykudHJpbSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjYWNoZUtleUZyb21Mb2MobG9jKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemUobG9jLnNvdXJjZS5ib2R5LnN1YnN0cmluZyhsb2Muc3RhcnQsIGxvYy5lbmQpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJvY2Vzc0ZyYWdtZW50cyhhc3QpIHtcbiAgICAgICAgdmFyIHNlZW5LZXlzID0gbmV3IFNldCgpO1xuICAgICAgICB2YXIgZGVmaW5pdGlvbnMgPSBbXTtcbiAgICAgICAgYXN0LmRlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGZyYWdtZW50RGVmaW5pdGlvbikge1xuICAgICAgICAgICAgaWYgKGZyYWdtZW50RGVmaW5pdGlvbi5raW5kID09PSAnRnJhZ21lbnREZWZpbml0aW9uJykge1xuICAgICAgICAgICAgICAgIHZhciBmcmFnbWVudE5hbWUgPSBmcmFnbWVudERlZmluaXRpb24ubmFtZS52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlS2V5ID0gY2FjaGVLZXlGcm9tTG9jKGZyYWdtZW50RGVmaW5pdGlvbi5sb2MpO1xuICAgICAgICAgICAgICAgIHZhciBzb3VyY2VLZXlTZXQgPSBmcmFnbWVudFNvdXJjZU1hcC5nZXQoZnJhZ21lbnROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlS2V5U2V0ICYmICFzb3VyY2VLZXlTZXQuaGFzKHNvdXJjZUtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByaW50RnJhZ21lbnRXYXJuaW5ncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV2FybmluZzogZnJhZ21lbnQgd2l0aCBuYW1lIFwiICsgZnJhZ21lbnROYW1lICsgXCIgYWxyZWFkeSBleGlzdHMuXFxuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiZ3JhcGhxbC10YWcgZW5mb3JjZXMgYWxsIGZyYWdtZW50IG5hbWVzIGFjcm9zcyB5b3VyIGFwcGxpY2F0aW9uIHRvIGJlIHVuaXF1ZTsgcmVhZCBtb3JlIGFib3V0XFxuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwidGhpcyBpbiB0aGUgZG9jczogaHR0cDovL2Rldi5hcG9sbG9kYXRhLmNvbS9jb3JlL2ZyYWdtZW50cy5odG1sI3VuaXF1ZS1uYW1lc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghc291cmNlS2V5U2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50U291cmNlTWFwLnNldChmcmFnbWVudE5hbWUsIHNvdXJjZUtleVNldCA9IG5ldyBTZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzb3VyY2VLZXlTZXQuYWRkKHNvdXJjZUtleSk7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWVuS2V5cy5oYXMoc291cmNlS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBzZWVuS2V5cy5hZGQoc291cmNlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbnMucHVzaChmcmFnbWVudERlZmluaXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlZmluaXRpb25zLnB1c2goZnJhZ21lbnREZWZpbml0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgYXN0KSwgeyBkZWZpbml0aW9uczogZGVmaW5pdGlvbnMgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0cmlwTG9jKGRvYykge1xuICAgICAgICB2YXIgd29ya1NldCA9IG5ldyBTZXQoZG9jLmRlZmluaXRpb25zKTtcbiAgICAgICAgd29ya1NldC5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5sb2MpXG4gICAgICAgICAgICAgICAgZGVsZXRlIG5vZGUubG9jO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMobm9kZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gbm9kZVtrZXldO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtTZXQuYWRkKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBsb2MgPSBkb2MubG9jO1xuICAgICAgICBpZiAobG9jKSB7XG4gICAgICAgICAgICBkZWxldGUgbG9jLnN0YXJ0VG9rZW47XG4gICAgICAgICAgICBkZWxldGUgbG9jLmVuZFRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkb2M7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhcnNlRG9jdW1lbnQoc291cmNlKSB7XG4gICAgICAgIHZhciBjYWNoZUtleSA9IG5vcm1hbGl6ZShzb3VyY2UpO1xuICAgICAgICBpZiAoIWRvY0NhY2hlLmhhcyhjYWNoZUtleSkpIHtcbiAgICAgICAgICAgIHZhciBwYXJzZWQgPSBncmFwaHFsLnBhcnNlKHNvdXJjZSwge1xuICAgICAgICAgICAgICAgIGV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzOiBleHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyxcbiAgICAgICAgICAgICAgICBhbGxvd0xlZ2FjeUZyYWdtZW50VmFyaWFibGVzOiBleHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXBhcnNlZCB8fCBwYXJzZWQua2luZCAhPT0gJ0RvY3VtZW50Jykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgdmFsaWQgR3JhcGhRTCBkb2N1bWVudC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY0NhY2hlLnNldChjYWNoZUtleSwgc3RyaXBMb2MocHJvY2Vzc0ZyYWdtZW50cyhwYXJzZWQpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRvY0NhY2hlLmdldChjYWNoZUtleSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdxbChsaXRlcmFscykge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxpdGVyYWxzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbGl0ZXJhbHMgPSBbbGl0ZXJhbHNdO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSBsaXRlcmFsc1swXTtcbiAgICAgICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcsIGkpIHtcbiAgICAgICAgICAgIGlmIChhcmcgJiYgYXJnLmtpbmQgPT09ICdEb2N1bWVudCcpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gYXJnLmxvYy5zb3VyY2UuYm9keTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBhcmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgKz0gbGl0ZXJhbHNbaSArIDFdO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcnNlRG9jdW1lbnQocmVzdWx0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzZXRDYWNoZXMoKSB7XG4gICAgICAgIGRvY0NhY2hlLmNsZWFyKCk7XG4gICAgICAgIGZyYWdtZW50U291cmNlTWFwLmNsZWFyKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc2FibGVGcmFnbWVudFdhcm5pbmdzKCkge1xuICAgICAgICBwcmludEZyYWdtZW50V2FybmluZ3MgPSBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZW5hYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXMoKSB7XG4gICAgICAgIGV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzID0gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzKCkge1xuICAgICAgICBleHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZXh0cmFzID0ge1xuICAgICAgICBncWw6IGdxbCxcbiAgICAgICAgcmVzZXRDYWNoZXM6IHJlc2V0Q2FjaGVzLFxuICAgICAgICBkaXNhYmxlRnJhZ21lbnRXYXJuaW5nczogZGlzYWJsZUZyYWdtZW50V2FybmluZ3MsXG4gICAgICAgIGVuYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzOiBlbmFibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyxcbiAgICAgICAgZGlzYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzOiBkaXNhYmxlRXhwZXJpbWVudGFsRnJhZ21lbnRWYXJpYWJsZXNcbiAgICB9O1xuICAgIChmdW5jdGlvbiAoZ3FsXzEpIHtcbiAgICAgICAgZ3FsXzEuZ3FsID0gZXh0cmFzLmdxbCwgZ3FsXzEucmVzZXRDYWNoZXMgPSBleHRyYXMucmVzZXRDYWNoZXMsIGdxbF8xLmRpc2FibGVGcmFnbWVudFdhcm5pbmdzID0gZXh0cmFzLmRpc2FibGVGcmFnbWVudFdhcm5pbmdzLCBncWxfMS5lbmFibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGV4dHJhcy5lbmFibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcywgZ3FsXzEuZGlzYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzID0gZXh0cmFzLmRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcztcbiAgICB9KShncWwgfHwgKGdxbCA9IHt9KSk7XG4gICAgZ3FsW1wiZGVmYXVsdFwiXSA9IGdxbDtcbiAgICB2YXIgZ3FsJDEgPSBncWw7XG5cbiAgICBleHBvcnRzLmRlZmF1bHQgPSBncWwkMTtcbiAgICBleHBvcnRzLmRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGRpc2FibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcztcbiAgICBleHBvcnRzLmRpc2FibGVGcmFnbWVudFdhcm5pbmdzID0gZGlzYWJsZUZyYWdtZW50V2FybmluZ3M7XG4gICAgZXhwb3J0cy5lbmFibGVFeHBlcmltZW50YWxGcmFnbWVudFZhcmlhYmxlcyA9IGVuYWJsZUV4cGVyaW1lbnRhbEZyYWdtZW50VmFyaWFibGVzO1xuICAgIGV4cG9ydHMuZ3FsID0gZ3FsO1xuICAgIGV4cG9ydHMucmVzZXRDYWNoZXMgPSByZXNldENhY2hlcztcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ncmFwaHFsLXRhZy51bWQuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/graphql-tag/lib/graphql-tag.umd.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/graphql-tag/main.js":
/*!******************************************!*\
  !*** ./node_modules/graphql-tag/main.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// For backwards compatibility, make sure require(\"graphql-tag\") returns\n// the gql function, rather than an exports object.\nmodule.exports = __webpack_require__(/*! ./lib/graphql-tag.umd.js */ \"(ssr)/./node_modules/graphql-tag/lib/graphql-tag.umd.js\").gql;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC10YWcvbWFpbi5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EsbUlBQXdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXp1cm8tYmV0dGluZy1hcHAvLi9ub2RlX21vZHVsZXMvZ3JhcGhxbC10YWcvbWFpbi5qcz82Yjk1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgbWFrZSBzdXJlIHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKSByZXR1cm5zXG4vLyB0aGUgZ3FsIGZ1bmN0aW9uLCByYXRoZXIgdGhhbiBhbiBleHBvcnRzIG9iamVjdC5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvZ3JhcGhxbC10YWcudW1kLmpzJykuZ3FsO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/graphql-tag/main.js\n");

/***/ })

};
;