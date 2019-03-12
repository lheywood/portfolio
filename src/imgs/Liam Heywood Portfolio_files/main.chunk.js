(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/App.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/App.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Every page*/\n.pageHeader {\n  width: 100%;\n  height: 60px;\n  padding-top: 40px;\n  text-align: center;\n  color: #ffffff; }\n  .pageHeader h2 {\n    background: #A4B3B6;\n    width: 85%;\n    font-family: 'Oxygen';\n    font-size: 2.5em;\n    margin: auto; }\n\n.link:hover {\n  transition: 0.1s;\n  -webkit-transform: scale(-1);\n          transform: scale(-1); }\n\n.headerColor {\n  color: #fff;\n  background: linear-gradient(90deg, #000000, #000000, #A4B3B6, #000000, #000000);\n  background-size: 250% 250%;\n  -webkit-animation: Gradient 15s ease infinite;\n  animation: Gradient 15s ease infinite;\n  height: 5em; }\n\n@-webkit-keyframes Gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\n@keyframes Gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\n#homeLink {\n  color: inherit;\n  text-decoration: none; }\n\n/*Landing*/\n.landingContent {\n  background: #A4B3B6;\n  /* fallback for old browsers */\n  background: #A4B3B6;\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #ffffff, #ffffff);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  text-align: center;\n  height: 1%; }\n  .landingContent .homeImg {\n    height: 5%;\n    border-radius: 10%;\n    box-shadow: 3px 2px 1px 2px #000000;\n    margin: 40px 30px; }\n  .landingContent .bannerText {\n    background: linear-gradient(170deg, #000000, #A4B3B6, #000000, #000000);\n    background-size: 250% 300%;\n    -webkit-animation: Gradient 15s ease infinite;\n    animation: Gradient 15s ease infinite;\n    width: 75%;\n    margin: auto;\n    text-align: center;\n    border-radius: 10px;\n    font-family: \"Times New Roman\";\n    padding-bottom: 20px; }\n    .landingContent .bannerText hr {\n      border: 3px, #000000, solid;\n      width: 50%;\n      margin: auto; }\n    .landingContent .bannerText h1 {\n      font-size: 2em;\n      font-weight: bold;\n      color: #ffffff;\n      font-family: \"Times New Roman\";\n      padding-top: 25px;\n      line-height: 50px; }\n    .landingContent .bannerText p {\n      padding-top: 25px;\n      color: #ffffff;\n      font-size: 2em; }\n  .landingContent .socialLinks {\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    width: 20%;\n    display: -webkit-flex;\n    display: flex;\n    margin: auto; }\n    .landingContent .socialLinks i {\n      color: #ffffff;\n      font-size: 5em;\n      padding: 10px; }\n    .landingContent .socialLinks i:hover {\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1);\n      color: #A4B3B6; }\n\n/* About Me CSS */\n.aboutContent {\n  width: 100%;\n  min-height: 100%;\n  background-image: url(" + escape(__webpack_require__(/*! ./imgs/projectBanner.jpg */ "./src/imgs/projectBanner.jpg")) + ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  font-family: 'Oxygen', sans-serif; }\n  .aboutContent .contentGrid {\n    text-align: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    width: 85%;\n    min-height: 80%;\n    background: #A4B3B6;\n    color: #000000;\n    margin-top: 20px;\n    padding-right: 0px; }\n    .aboutContent .contentGrid hr {\n      width: 75%;\n      margin: auto;\n      padding-top: 15px;\n      border-top: 3px solid black; }\n    .aboutContent .contentGrid p {\n      font-size: 0.85em;\n      padding-bottom: 20px; }\n    .aboutContent .contentGrid h1 {\n      padding: 0px;\n      margin: 0px;\n      font-size: 1.4em; }\n    .aboutContent .contentGrid h2 {\n      font-size: 2.4em; }\n    .aboutContent .contentGrid ul {\n      font-size: 0.85em;\n      list-style-type: none;\n      -webkit-align-self: auto;\n              align-self: auto;\n      columns: 2;\n      -webkit-columns: 2;\n      -moz-columns: 2;\n      margin: 0px; }\n\n/*Resume*/\n.resumeContent {\n  width: 100%;\n  min-height: 100%;\n  background-image: url(" + escape(__webpack_require__(/*! ./imgs/projectBanner.jpg */ "./src/imgs/projectBanner.jpg")) + ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat; }\n  .resumeContent h2 {\n    font-family: 'Oxygen'; }\n  .resumeContent iframe {\n    margin: auto;\n    width: 85%; }\n\n/*Projects CSS */\n.projectContent {\n  width: 100%;\n  min-height: 100%;\n  background-image: url(" + escape(__webpack_require__(/*! ./imgs/projectBanner.jpg */ "./src/imgs/projectBanner.jpg")) + ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat; }\n  .projectContent .tabsContent {\n    background: #ffffff;\n    width: 85%;\n    margin: auto; }\n  .projectContent .tabBar {\n    background: #A4B3B6;\n    width: 100%;\n    margin-top: 20px; }\n    .projectContent .tabBar hr {\n      border-right: 2px solid black;\n      height: 40%; }\n    .projectContent .tabBar .tab:hover {\n      background: #ffffff;\n      color: orange; }\n  .projectContent .projectsGrid {\n    display: -webkit-inline-flex;\n    display: inline-flex;\n    -webkit-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-justify-content: left;\n            justify-content: left;\n    overflow-y: scroll; }\n    .projectContent .projectsGrid .card {\n      min-width: 300px;\n      height: 350px;\n      margin: 30px; }\n      .projectContent .projectsGrid .card .cardTitle {\n        color: #fff;\n        height: 200px;\n        background: #A4B3B6; }\n      .projectContent .projectsGrid .card .cardText {\n        height: 120px;\n        overflow-y: scroll;\n        padding: 5px 0;\n        margin: auto; }\n\n/*Contact CSS*/\n.contactContent {\n  width: 100%;\n  min-height: 100%;\n  background-image: url(" + escape(__webpack_require__(/*! ./imgs/projectBanner.jpg */ "./src/imgs/projectBanner.jpg")) + ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat; }\n  .contactContent .contactGrid {\n    position: relative;\n    width: 40%;\n    margin-top: 20px;\n    text-align: center;\n    font-family: 'Oxygen';\n    border-radius: 5px;\n    background: #ffffff;\n    color: #000000;\n    font-size: 2em; }\n    .contactContent .contactGrid h2 {\n      font-family: 'Oxygen'; }\n    .contactContent .contactGrid p {\n      font-size: 0.8em; }\n  .contactContent .contactList {\n    text-align: left; }\n    .contactContent .contactList ul {\n      list-style-type: none; }\n    .contactContent .contactList li {\n      font-size: 1.2em;\n      padding: 20px 0px; }\n    .contactContent .contactList hr {\n      width: 80%;\n      margin: auto;\n      border-top: 1px solid; }\n    .contactContent .contactList i {\n      font-size: 25px;\n      padding-right: 5px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/index.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/index.scss ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\", monospace; }\n", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_mdl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-mdl */ "./node_modules/react-mdl/lib/index.js");
/* harmony import */ var react_mdl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_mdl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main */ "./src/components/main.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");





var _jsxFileName = "/Users/lmh/React/portfolio/src/App.js";






var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "mainPage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_7__["Layout"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_7__["Header"], {
        className: "headerColor",
        title: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
          id: "homeLink",
          to: "/landing",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, "Liam Heywood /", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, " Online Portfolio"))),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_7__["Navigation"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        className: "link",
        to: "AboutMe",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "About Me"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        className: "link",
        to: "Resume",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Resume"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        className: "link",
        to: "Projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Projects"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        className: "link",
        to: "Contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_7__["Drawer"], {
        title: "Heywood Portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_7__["Navigation"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: "AboutMe",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "About Me"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: "Resume",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Resume"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: "Projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Projects"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: "Contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_7__["Content"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_main__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/App.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/App.scss", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/App.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/aboutMe.js":
/*!***********************************!*\
  !*** ./src/components/aboutMe.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_mdl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-mdl */ "./node_modules/react-mdl/lib/index.js");
/* harmony import */ var react_mdl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_mdl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _imgs_profilePhoto_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../imgs/profilePhoto.png */ "./src/imgs/profilePhoto.png");
/* harmony import */ var _imgs_profilePhoto_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_imgs_profilePhoto_png__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/lmh/React/portfolio/src/components/aboutMe.js";




var AboutMe =
/*#__PURE__*/
function (_Component) {
  Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AboutMe, _Component);

  function AboutMe() {
    Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AboutMe);

    return Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AboutMe).apply(this, arguments));
  }

  Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutMe, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "aboutContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pageHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "About Me")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        className: "contentGrid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Cell"], {
        col: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Liam Heywood"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _imgs_profilePhoto_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "ProfilePic",
        style: {
          borderRadius: '50%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          width: '75%',
          margin: 'auto',
          paddingTop: '1em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "I am a graduate of Computer Science with a minor in Mathematics. My passions include problem solving, learning new, efficient technologies and creating useful applications. I began by learning the tools of programming in Java at school. Since then I have also began teaching myself C# and web technologies including HTML/CSS/JavaScript/React.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Cell"], {
        col: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Personal Life"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "I grew up near Newcastle, England before moving to Milwaukee to study when I was 18. I have played football since I was a child and have represented Sunderland A.F.C, Durham County and Cardinal Stritch University. At school I have made the Dean's List five times and was named on the all academic team three times.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), "I currently also coach at F.C Wisconsin which involves developing and executing training session and managing on matchdays."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Goals"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        style: {
          fontWeight: 'bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Short term:"), " My goal is to get a job as a junior developer to prove my exsisting skills and continue to learn new technologies and practices under an top, experienced mentor.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        style: {
          fontWeight: 'bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Long Term:"), " My goal is to become an experienced and established developer in multiple languages and technologies. One day I would love to lead a development team for a company "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Athletic Achievments"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Captain of Cardinal Stritch 2017, 2018"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Conference Champion 2017, 2018"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Conference Tournement Champion 2017, 2018"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Conference Player of the Year 2017, 2018"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "NAIA Honorable Mention 2016"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "NAIA All-Tournement Team 2018"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "NAIA team of the Year 2018")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }));
    }
  }]);

  return AboutMe;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AboutMe);

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_mdl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-mdl */ "./node_modules/react-mdl/lib/index.js");
/* harmony import */ var react_mdl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_mdl__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/lmh/React/portfolio/src/components/contact.js";



var Contact =
/*#__PURE__*/
function (_Component) {
  Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Contact, _Component);

  function Contact() {
    Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Contact);

    return Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Contact).apply(this, arguments));
  }

  Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Contact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "contactContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pageHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        className: "contactGrid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Cell"], {
        col: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Please feel free to contact me in any of the following ways"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "contactList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fas fa-at",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), " - lmcheywood@gmail.com"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fas fa-phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), " - (414) 364 7699"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fab fa-linkedin-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), " - Available through LinkedIn"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/components/landingPage.js":
/*!***************************************!*\
  !*** ./src/components/landingPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _imgs_uk_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../imgs/uk.png */ "./src/imgs/uk.png");
/* harmony import */ var _imgs_uk_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_imgs_uk_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _imgs_usa_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../imgs/usa.png */ "./src/imgs/usa.png");
/* harmony import */ var _imgs_usa_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_imgs_usa_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_mdl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-mdl */ "./node_modules/react-mdl/lib/index.js");
/* harmony import */ var react_mdl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_mdl__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/lmh/React/portfolio/src/components/landingPage.js";





var LandingPage =
/*#__PURE__*/
function (_Component) {
  Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LandingPage, _Component);

  function LandingPage() {
    Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LandingPage);

    return Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LandingPage).apply(this, arguments));
  }

  Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LandingPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          width: '100%',
          margin: 'auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        className: "landingContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_8__["Cell"], {
        col: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _imgs_uk_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "uk",
        className: "homeImg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _imgs_usa_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "usa",
        className: "homeImg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bannerText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Bachelor's Computer Science & Mathematics minor"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Experience in:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Java | JavaScript | NodeJS | React | HTML/CSS | C# "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "socialLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "http://google.com",
        rel: "noopener noreferrer",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fab fa-linkedin",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "http://google.com",
        rel: "noopener noreferrer",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        class: "fab fa-github-square",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), "              "))))));
    }
  }]);

  return LandingPage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _landingPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landingPage */ "./src/components/landingPage.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _aboutMe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutMe */ "./src/components/aboutMe.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/components/contact.js");
/* harmony import */ var _resume__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume */ "./src/components/resume.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects */ "./src/components/projects.js");
var _jsxFileName = "/Users/lmh/React/portfolio/src/components/main.js";








var Main = function Main() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/landingPage",
    component: _landingPage__WEBPACK_IMPORTED_MODULE_1__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/contact",
    component: _contact__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/aboutMe",
    component: _aboutMe__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/Resume",
    component: _resume__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/projects",
    component: _projects__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/components/projects.js":
/*!************************************!*\
  !*** ./src/components/projects.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_mdl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-mdl */ "./node_modules/react-mdl/lib/index.js");
/* harmony import */ var react_mdl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_mdl__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/lmh/React/portfolio/src/components/projects.js";



var Projects =
/*#__PURE__*/
function (_Component) {
  Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Projects, _Component);

  function Projects(props) {
    var _this;

    Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Projects);

    _this = Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Projects).call(this, props));
    _this.state = {
      activeTab: 0
    };
    return _this;
  }

  Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Projects, [{
    key: "toggleCategories",
    value: function toggleCategories() {
      if (this.state.activeTab === 0) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "projectsGrid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Card"], {
          shadow: 5,
          className: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
          className: "cardTitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, "Finance Tracker"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
          className: "cardText",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, "This project will be a finance tracker that enables the user to keep track of what and where they spend their money on. Predicted completion date: May 2019gf gbfgthgbfgrg  thgbfvr  tygrftyhtgrf tyhtgrtyhtgrtyhtgrtytgr"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardActions"], {
          border: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          color: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, "GitHub"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          color: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, "Live Demo")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardMenu"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
          style: {
            background: '#A4B3B6'
          },
          name: "share",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }))));
      } else if (this.state.activeTab === 1) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "projectsGrid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Card"], {
          shadow: 5,
          className: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
          className: "cardTitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, "Funky Name Generator"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
          className: "cardText",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, "This is my finance tracker application. The app will be written in Java and use a database to store the data. As you can see it is still currently under development. The expected completion date is May 1st."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardActions"], {
          border: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          color: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, "GitHub"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          color: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, "Live Demo")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardMenu"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
          style: {
            background: '#A4B3B6'
          },
          name: "share",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Card"], {
          shadow: 5,
          className: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
          className: "cardTitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, "Find Longest Substring"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
          className: "cardText",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, "This simple application finds the longest common substring when given two strings."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardActions"], {
          border: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          color: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "GitHub"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          color: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, "Live Demo")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardMenu"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
          style: {
            background: '#A4B3B6'
          },
          name: "share",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Card"], {
          shadow: 5,
          className: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
          className: "cardTitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, "JavaScript Project 3"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
          className: "cardText",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, "This is my finance tracker application. The app will be written in Java and use a database to store the data. As you can see it is still currently under development. The expected completion date is May 1st."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardActions"], {
          border: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          color: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, "GitHub"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          color: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, "Live Demo")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardMenu"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
          style: {
            background: '#A4B3B6'
          },
          name: "share",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }))));
      } else if (this.state.activeTab === 2) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "projectsGrid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Card"], {
          shadow: 5,
          className: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
          className: "cardTitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, "Portfolio"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, "My personal portfolio page created with React. Here you can find out about myself and my experiences as well as my resume and how to contact."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardActions"], {
          border: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          color: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, "GitHub"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          color: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "Live Demo")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardMenu"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
          style: {
            background: '#A4B3B6'
          },
          name: "share",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }))));
      } else if (this.state.activeTab === 3) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "projectsGrid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Card"], {
          shadow: 5,
          className: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
          className: "cardTitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, "Projects Coming Soon"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardActions"], {
          border: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          color: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, "GitHub"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          color: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, "Live Demo")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["CardMenu"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
          style: {
            background: '#A4B3B6'
          },
          name: "share",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }))));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "projectContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pageHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Projects")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tabsContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Tabs"], {
        className: "tabBar",
        activeTab: this.activeTab,
        onChange: function onChange(tabId) {
          return _this2.setState({
            activeTab: tabId
          });
        },
        ripple: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Tab"], {
        className: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "JAVA"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Tab"], {
        className: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "JAVASCRIPT"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Tab"], {
        className: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "React"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Tab"], {
        className: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "C#")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Cell"], {
        col: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, this.toggleCategories())))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/components/resume.js":
/*!**********************************!*\
  !*** ./src/components/resume.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_mdl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-mdl */ "./node_modules/react-mdl/lib/index.js");
/* harmony import */ var react_mdl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_mdl__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/lmh/React/portfolio/src/components/resume.js";



var Resume =
/*#__PURE__*/
function (_Component) {
  Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Resume, _Component);

  function Resume() {
    Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Resume);

    return Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Resume).apply(this, arguments));
  }

  Object(_Users_lmh_React_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Resume, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "resumeContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "pageHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Resume")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://docs.google.com/document/d/e/2PACX-1vRfFb2S6j7nzvEhB6yNuzC24D2i_6_VxUYNg6a5sX51qouaBisoBdT_ymKUEjjkPpMwtCPCaSQtpQvo/pub",
        download: true,
        target: "/blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mdl__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        className: "downloadRes",
        raised: true,
        accent: true,
        ripple: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Open in New Tab")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("iframe", {
        title: "resume",
        src: "https://docs.google.com/document/d/e/2PACX-1vRfFb2S6j7nzvEhB6yNuzC24D2i_6_VxUYNg6a5sX51qouaBisoBdT_ymKUEjjkPpMwtCPCaSQtpQvo/pub?embedded=true",
        width: "500px",
        height: "800px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }));
    }
  }]);

  return Resume;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ }),

/***/ "./src/imgs/profilePhoto.png":
/*!***********************************!*\
  !*** ./src/imgs/profilePhoto.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/profilePhoto.596f3a94.png";

/***/ }),

/***/ "./src/imgs/projectBanner.jpg":
/*!************************************!*\
  !*** ./src/imgs/projectBanner.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/projectBanner.cb46e551.jpg";

/***/ }),

/***/ "./src/imgs/uk.png":
/*!*************************!*\
  !*** ./src/imgs/uk.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/imgs/usa.png":
/*!**************************!*\
  !*** ./src/imgs/usa.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/usa.0c476a98.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_mdl_extra_material_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-mdl/extra/material.css */ "./node_modules/react-mdl/extra/material.css");
/* harmony import */ var react_mdl_extra_material_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_mdl_extra_material_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_mdl_extra_material_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-mdl/extra/material.js */ "./node_modules/react-mdl/extra/material.js");
/* harmony import */ var react_mdl_extra_material_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_mdl_extra_material_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/Users/lmh/React/portfolio/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["HashRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./index.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./index.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/index.scss", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./index.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/index.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/lmh/React/portfolio/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/lmh/React/portfolio/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map