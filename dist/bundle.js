/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/javascript/domDataMapper.js":
/*!*****************************************!*\
  !*** ./src/javascript/domDataMapper.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction images(data) {\n  var navProfileImage = document.querySelector('#nav_profileimage');\n  var userProfileImage = document.querySelector('#user_profileimage');\n  navProfileImage.src = data;\n  userProfileImage.src = data;\n}\n\nfunction mapFollowers(data) {\n  var followerCount = data.followers.totalCount,\n      followingCount = data.following.totalCount;\n  document.querySelector('#followers').textContent = followerCount;\n  document.querySelector('#following').textContent = followingCount;\n}\n\nfunction mapUserProfileInfor(data) {\n  var name = data.name,\n      bio = data.bio,\n      username = data.username;\n  document.querySelector('#fullname').textContent = name;\n  document.querySelector('#username').textContent = username;\n  document.querySelector('#Bio').textContent = bio;\n}\n\nfunction mapRepository(data) {\n  var totalCount = data.totalCount,\n      repos = data.nodes;\n  var repoList = document.querySelector('#repolist');\n  document.querySelector('#repocount').textContent = totalCount;\n  console.log(repos);\n  var repoMap = repos.map(function (data) {\n    return \"\\n    <li>\\n              <div class=\\\"content\\\">\\n                <p class=\\\"repo_title\\\">\".concat(data.name, \"</p>\\n                <div class=\\\"meta_info\\\">\\n               \\n               \").concat(data.primaryLanguage !== null && data.primaryLanguage.color !== null && data.primaryLanguage.color !== null ? \" <span>\\n                    <div class=\\\"color_lang\\\" style=\\\"background-color: \".concat(data.primaryLanguage.color, \"\\\"></div>\\n                    \").concat(data.primaryLanguage.name === 'null' ? '' : data.primaryLanguage.name, \"\\n                  </span>\") : '', \"\\n\\n                </div>\\n              </div>\\n              <button>\\n                <img src=\\\"./src/images/button_star.PNG\\\" alt=\\\"button_stat\\\" />\\n                Star\\n              </button>\\n            </li>\");\n  });\n  repoList.innerHTML = repoMap;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (data) {\n  var name = data.name,\n      status = data.status,\n      bio = data.bio,\n      followers = data.followers,\n      following = data.following,\n      username = data.login,\n      repositories = data.repositories,\n      avatarUrl = data.avatarUrl;\n  images(avatarUrl);\n  mapFollowers({\n    followers: followers,\n    following: following\n  });\n  mapUserProfileInfor({\n    name: name,\n    status: status,\n    bio: bio,\n    username: username\n  });\n  mapRepository(repositories);\n});\n\n//# sourceURL=webpack:///./src/javascript/domDataMapper.js?");

/***/ }),

/***/ "./src/javascript/helpers.js":
/*!***********************************!*\
  !*** ./src/javascript/helpers.js ***!
  \***********************************/
/*! exports provided: makeApiCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeApiCall\", function() { return makeApiCall; });\nvar graphqlApiCall = function graphqlApiCall(queryString) {\n  var url = 'https://api.github.com/graphql';\n  var token = '29b142b97f3989db3b3c8863bcc0eb55127bec01';\n  var headers = {\n    'Content-Type': 'application/json',\n    Authorization: 'bearer ' + token\n  };\n  return new Promise(function (resolve, reject) {\n    fetch(url, {\n      method: 'POST',\n      headers: headers,\n      body: JSON.stringify({\n        query: queryString\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      return resolve(res.data);\n    })[\"catch\"](function (err) {\n      return reject(err);\n    });\n  });\n};\n\nvar makeApiCall = function makeApiCall() {\n  var gql = \"query { \\n        viewer { \\n          name\\n               status{\\n            emojiHTML\\n          }\\n          login\\n          avatarUrl\\n          bio\\n          websiteUrl\\n               following{\\n            totalCount\\n          }\\n          followers{\\n            totalCount\\n          }\\n          repositories(first:20){\\n            totalCount\\n            nodes{\\n              name\\n              description\\n              forkCount\\n              primaryLanguage{\\n                name\\n                color\\n              }\\n            }\\n          }\\n        } \\n      }\";\n\n  try {\n    return new Promise(function (resolve, reject) {\n      graphqlApiCall(gql).then(function (res) {\n        return resolve(res);\n      })[\"catch\"](function (err) {\n        return reject(err);\n      });\n    });\n  } catch (error) {\n    console.log(error);\n  }\n};\n\n//# sourceURL=webpack:///./src/javascript/helpers.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/javascript/helpers.js\");\n/* harmony import */ var _domDataMapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domDataMapper */ \"./src/javascript/domDataMapper.js\");\n\n\n\nObject(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"makeApiCall\"])().then(function (res) {\n  return Object(_domDataMapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(res.viewer);\n})[\"catch\"](console.error);\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ })

/******/ });