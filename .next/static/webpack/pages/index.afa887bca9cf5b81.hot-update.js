/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./src/components/UI/Header/styles.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./src/components/UI/Header/styles.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".styles_header__IG7mP {\\n  width: 100%;\\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\\n  padding: 15px 0;\\n}\\n.styles_header__IG7mP .styles_container__PAu02 {\\n  display: flex;\\n  align-items: center;\\n}\\n@media (max-width: 992px) {\\n  .styles_header__IG7mP .styles_container__PAu02 {\\n    padding: 20px;\\n    justify-content: space-between;\\n  }\\n}\\n.styles_header__IG7mP .styles_container__PAu02 .styles_linkLogo__HkF_P .styles_logo__X86CE {\\n  font-size: 30px;\\n}\\n.styles_header__IG7mP .styles_container__PAu02 .styles_login__iLD89 {\\n  padding: 10px 15px;\\n  font-size: calc(14px + 6 * (100vw - 360px) / 1240);\\n  font-weight: 400;\\n  color: #1e94f3;\\n  border: 2px solid transparent;\\n  border-bottom: 2px solid #1e94f3;\\n  transition: 0.3s all;\\n}\\n.styles_header__IG7mP .styles_container__PAu02 .styles_login__iLD89:hover {\\n  border-radius: 12px;\\n  border: 2px solid #1e94f3;\\n}\\n.styles_header__IG7mP .styles_container__PAu02 .styles_signUp__d_hLe {\\n  padding: 10px 15px;\\n  font-size: calc(14px + 6 * (100vw - 360px) / 1240);\\n  font-weight: 400;\\n  color: #fff;\\n  border: 2px solid transparent;\\n  background: #1e94f3;\\n  transition: 0.3s all;\\n  border-radius: 12px;\\n}\\n.styles_header__IG7mP .styles_container__PAu02 .styles_signUp__d_hLe:hover {\\n  color: #1e94f3;\\n  background: #fff;\\n  border: 2px solid #1e94f3;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/components/UI/Header/styles.module.scss\",\"webpack://src/styles/_breakpoints.scss\"],\"names\":[],\"mappings\":\"AAMA;EACC,WAAA;EACA,kDAAA;EACA,eAAA;AALD;AAMC;EACC,aAAA;EACA,mBAAA;AAJF;ACCC;EDCA;IAIE,aAAA;IACA,8BAAA;EAFD;AACF;AAIG;EACC,eAAA;AAFJ;AAKE;EACC,kBAAA;EACA,kDAAA;EACA,gBAAA;EACA,cAAA;EACA,6BAAA;EACA,gCAAA;EACA,oBAAA;AAHH;AAIG;EACC,mBAAA;EACA,yBAAA;AAFJ;AAKE;EACC,kBAAA;EACA,kDAAA;EACA,gBAAA;EACA,WAAA;EACA,6BAAA;EACF,mBAAA;EACE,oBAAA;EACA,mBAAA;AAHH;AAIG;EACC,cAAA;EACA,gBAAA;EACD,yBAAA;AAFH\",\"sourcesContent\":[\"\\n      @import \\\"./src/styles/breakpoints.scss\\\";\\n      @import \\\"./src/styles/mixins.scss\\\";\\n      @import \\\"./src/styles/unit.scss\\\";\\n      \\n@import '@/styles/breakpoints';\\n.header {\\n\\twidth: 100%;\\n\\tborder-bottom: 1px solid rgba(255, 255, 255, 0.08);\\n\\tpadding: 15px 0;\\n\\t.container {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\t@include breakpoint('lg') {\\n\\t\\t\\tpadding: 20px;\\n\\t\\t\\tjustify-content: space-between;\\n\\t\\t}\\n\\t\\t.linkLogo {\\n\\t\\t\\t.logo {\\n\\t\\t\\t\\tfont-size: 30px;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\t.login{\\n\\t\\t\\tpadding: 10px 15px;\\n\\t\\t\\tfont-size: calc(14px + 6 * ((100vw - 360px) / 1240));\\n\\t\\t\\tfont-weight: 400;\\n\\t\\t\\tcolor: #1e94f3;\\n\\t\\t\\tborder: 2px solid transparent;\\n\\t\\t\\tborder-bottom: 2px solid #1e94f3;\\n\\t\\t\\ttransition: 0.3s  all;\\n\\t\\t\\t&:hover{\\n\\t\\t\\t\\tborder-radius: 12px;\\n\\t\\t\\t\\tborder: 2px solid #1e94f3;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\t.signUp{\\n\\t\\t\\tpadding: 10px 15px;\\n\\t\\t\\tfont-size: calc(14px + 6 * ((100vw - 360px) / 1240));\\n\\t\\t\\tfont-weight: 400;\\n\\t\\t\\tcolor: #fff;\\n\\t\\t\\tborder: 2px solid transparent;\\n\\tbackground: #1e94f3;\\n\\t\\t\\ttransition: 0.3s  all;\\n\\t\\t\\tborder-radius: 12px;\\n\\t\\t\\t&:hover{\\n\\t\\t\\t\\tcolor: #1e94f3;\\n\\t\\t\\t\\tbackground: #fff;\\n\\t\\t\\tborder: 2px solid #1e94f3;\\n\\n\\t\\t\\t\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n\",\"$breakpoints: (\\n\\t'xs': '0',\\n\\t'sm': '375px',\\n\\t'md': '768px',\\n\\t'lg': '992px',\\n\\t'xl': '1440px',\\n);\\n\\n@mixin breakpoint($size) {\\n\\t@media (max-width: map-get($breakpoints, $size)) {\\n\\t\\t@content;\\n\\t}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header\": \"styles_header__IG7mP\",\n\t\"container\": \"styles_container__PAu02\",\n\t\"linkLogo\": \"styles_linkLogo__HkF_P\",\n\t\"logo\": \"styles_logo__X86CE\",\n\t\"login\": \"styles_login__iLD89\",\n\t\"signUp\": \"styles_signUp__d_hLe\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzldLnVzZVs0XSEuL3NyYy9jb21wb25lbnRzL1VJL0hlYWRlci9zdHlsZXMubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw0S0FBd0Y7QUFDbEk7QUFDQTtBQUNBLGlFQUFpRSxnQkFBZ0IsdURBQXVELG9CQUFvQixHQUFHLGtEQUFrRCxrQkFBa0Isd0JBQXdCLEdBQUcsNkJBQTZCLG9EQUFvRCxvQkFBb0IscUNBQXFDLEtBQUssR0FBRyw4RkFBOEYsb0JBQW9CLEdBQUcsdUVBQXVFLHVCQUF1Qix1REFBdUQscUJBQXFCLG1CQUFtQixrQ0FBa0MscUNBQXFDLHlCQUF5QixHQUFHLDZFQUE2RSx3QkFBd0IsOEJBQThCLEdBQUcsd0VBQXdFLHVCQUF1Qix1REFBdUQscUJBQXFCLGdCQUFnQixrQ0FBa0Msd0JBQXdCLHlCQUF5Qix3QkFBd0IsR0FBRyw4RUFBOEUsbUJBQW1CLHFCQUFxQiw4QkFBOEIsR0FBRyxPQUFPLHFKQUFxSixVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsMkVBQTJFLDZDQUE2QywyQ0FBMkMseUNBQXlDLFdBQVcsZ0JBQWdCLHVEQUF1RCxvQkFBb0IsZ0JBQWdCLG9CQUFvQiwwQkFBMEIsaUNBQWlDLHNCQUFzQix1Q0FBdUMsT0FBTyxpQkFBaUIsZUFBZSwwQkFBMEIsU0FBUyxPQUFPLGFBQWEsMkJBQTJCLDZEQUE2RCx5QkFBeUIsdUJBQXVCLHNDQUFzQyx5Q0FBeUMsOEJBQThCLGdCQUFnQiw4QkFBOEIsb0NBQW9DLFNBQVMsT0FBTyxjQUFjLDJCQUEyQiw2REFBNkQseUJBQXlCLG9CQUFvQixzQ0FBc0Msd0JBQXdCLDhCQUE4Qiw0QkFBNEIsZ0JBQWdCLHlCQUF5QiwyQkFBMkIsa0NBQWtDLG1CQUFtQixPQUFPLEtBQUssR0FBRywrR0FBK0csOEJBQThCLHNEQUFzRCxlQUFlLEtBQUssR0FBRyxxQkFBcUI7QUFDeDRHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VJL0hlYWRlci9zdHlsZXMubW9kdWxlLnNjc3M/M2NlNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlc19oZWFkZXJfX0lHN21QIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcbi5zdHlsZXNfaGVhZGVyX19JRzdtUCAuc3R5bGVzX2NvbnRhaW5lcl9fUEF1MDIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgLnN0eWxlc19oZWFkZXJfX0lHN21QIC5zdHlsZXNfY29udGFpbmVyX19QQXUwMiB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG59XFxuLnN0eWxlc19oZWFkZXJfX0lHN21QIC5zdHlsZXNfY29udGFpbmVyX19QQXUwMiAuc3R5bGVzX2xpbmtMb2dvX19Ia0ZfUCAuc3R5bGVzX2xvZ29fX1g4NkNFIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLnN0eWxlc19oZWFkZXJfX0lHN21QIC5zdHlsZXNfY29udGFpbmVyX19QQXUwMiAuc3R5bGVzX2xvZ2luX19pTEQ4OSB7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBmb250LXNpemU6IGNhbGMoMTRweCArIDYgKiAoMTAwdncgLSAzNjBweCkgLyAxMjQwKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzFlOTRmMztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxZTk0ZjM7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXG59XFxuLnN0eWxlc19oZWFkZXJfX0lHN21QIC5zdHlsZXNfY29udGFpbmVyX19QQXUwMiAuc3R5bGVzX2xvZ2luX19pTEQ4OTpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzFlOTRmMztcXG59XFxuLnN0eWxlc19oZWFkZXJfX0lHN21QIC5zdHlsZXNfY29udGFpbmVyX19QQXUwMiAuc3R5bGVzX3NpZ25VcF9fZF9oTGUge1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyA2ICogKDEwMHZ3IC0gMzYwcHgpIC8gMTI0MCk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQ6ICMxZTk0ZjM7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcbi5zdHlsZXNfaGVhZGVyX19JRzdtUCAuc3R5bGVzX2NvbnRhaW5lcl9fUEF1MDIgLnN0eWxlc19zaWduVXBfX2RfaExlOmhvdmVyIHtcXG4gIGNvbG9yOiAjMWU5NGYzO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxZTk0ZjM7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY29tcG9uZW50cy9VSS9IZWFkZXIvc3R5bGVzLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9fYnJlYWtwb2ludHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQTtFQUNDLFdBQUE7RUFDQSxrREFBQTtFQUNBLGVBQUE7QUFMRDtBQU1DO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FBSkY7QUNDQztFRENBO0lBSUUsYUFBQTtJQUNBLDhCQUFBO0VBRkQ7QUFDRjtBQUlHO0VBQ0MsZUFBQTtBQUZKO0FBS0U7RUFDQyxrQkFBQTtFQUNBLGtEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FBSEg7QUFJRztFQUNDLG1CQUFBO0VBQ0EseUJBQUE7QUFGSjtBQUtFO0VBQ0Msa0JBQUE7RUFDQSxrREFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0YsbUJBQUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBSEg7QUFJRztFQUNDLGNBQUE7RUFDQSxnQkFBQTtFQUNELHlCQUFBO0FBRkhcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuICAgICAgQGltcG9ydCBcXFwiLi9zcmMvc3R5bGVzL2JyZWFrcG9pbnRzLnNjc3NcXFwiO1xcbiAgICAgIEBpbXBvcnQgXFxcIi4vc3JjL3N0eWxlcy9taXhpbnMuc2Nzc1xcXCI7XFxuICAgICAgQGltcG9ydCBcXFwiLi9zcmMvc3R5bGVzL3VuaXQuc2Nzc1xcXCI7XFxuICAgICAgXFxuQGltcG9ydCAnQC9zdHlsZXMvYnJlYWtwb2ludHMnO1xcbi5oZWFkZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xcblxcdHBhZGRpbmc6IDE1cHggMDtcXG5cXHQuY29udGFpbmVyIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0QGluY2x1ZGUgYnJlYWtwb2ludCgnbGcnKSB7XFxuXFx0XFx0XFx0cGFkZGluZzogMjBweDtcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0fVxcblxcdFxcdC5saW5rTG9nbyB7XFxuXFx0XFx0XFx0LmxvZ28ge1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdFxcdC5sb2dpbntcXG5cXHRcXHRcXHRwYWRkaW5nOiAxMHB4IDE1cHg7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiBjYWxjKDE0cHggKyA2ICogKCgxMDB2dyAtIDM2MHB4KSAvIDEyNDApKTtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNDAwO1xcblxcdFxcdFxcdGNvbG9yOiAjMWU5NGYzO1xcblxcdFxcdFxcdGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdFxcdFxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWU5NGYzO1xcblxcdFxcdFxcdHRyYW5zaXRpb246IDAuM3MgIGFsbDtcXG5cXHRcXHRcXHQmOmhvdmVye1xcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDEycHg7XFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiAycHggc29saWQgIzFlOTRmMztcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdFxcdC5zaWduVXB7XFxuXFx0XFx0XFx0cGFkZGluZzogMTBweCAxNXB4O1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgNiAqICgoMTAwdncgLSAzNjBweCkgLyAxMjQwKSk7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRcXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRcXHRib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRiYWNrZ3JvdW5kOiAjMWU5NGYzO1xcblxcdFxcdFxcdHRyYW5zaXRpb246IDAuM3MgIGFsbDtcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiAxMnB4O1xcblxcdFxcdFxcdCY6aG92ZXJ7XFxuXFx0XFx0XFx0XFx0Y29sb3I6ICMxZTk0ZjM7XFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRcXHRcXHRib3JkZXI6IDJweCBzb2xpZCAjMWU5NGYzO1xcblxcblxcdFxcdFxcdFxcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIixcIiRicmVha3BvaW50czogKFxcblxcdCd4cyc6ICcwJyxcXG5cXHQnc20nOiAnMzc1cHgnLFxcblxcdCdtZCc6ICc3NjhweCcsXFxuXFx0J2xnJzogJzk5MnB4JyxcXG5cXHQneGwnOiAnMTQ0MHB4JyxcXG4pO1xcblxcbkBtaXhpbiBicmVha3BvaW50KCRzaXplKSB7XFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkc2l6ZSkpIHtcXG5cXHRcXHRAY29udGVudDtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhlYWRlclwiOiBcInN0eWxlc19oZWFkZXJfX0lHN21QXCIsXG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fUEF1MDJcIixcblx0XCJsaW5rTG9nb1wiOiBcInN0eWxlc19saW5rTG9nb19fSGtGX1BcIixcblx0XCJsb2dvXCI6IFwic3R5bGVzX2xvZ29fX1g4NkNFXCIsXG5cdFwibG9naW5cIjogXCJzdHlsZXNfbG9naW5fX2lMRDg5XCIsXG5cdFwic2lnblVwXCI6IFwic3R5bGVzX3NpZ25VcF9fZF9oTGVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./src/components/UI/Header/styles.module.scss\n"));

/***/ })

});