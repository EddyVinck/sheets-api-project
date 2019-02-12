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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/activity-randomizer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * JavaScript Cookie v2.2.0\n * https://github.com/js-cookie/js-cookie\n *\n * Copyright 2006, 2015 Klaus Hartl & Fagner Brack\n * Released under the MIT license\n */\n;(function (factory) {\n\tvar registeredInModuleLoader = false;\n\tif (true) {\n\t\t!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t\tregisteredInModuleLoader = true;\n\t}\n\tif (true) {\n\t\tmodule.exports = factory();\n\t\tregisteredInModuleLoader = true;\n\t}\n\tif (!registeredInModuleLoader) {\n\t\tvar OldCookies = window.Cookies;\n\t\tvar api = window.Cookies = factory();\n\t\tapi.noConflict = function () {\n\t\t\twindow.Cookies = OldCookies;\n\t\t\treturn api;\n\t\t};\n\t}\n}(function () {\n\tfunction extend () {\n\t\tvar i = 0;\n\t\tvar result = {};\n\t\tfor (; i < arguments.length; i++) {\n\t\t\tvar attributes = arguments[ i ];\n\t\t\tfor (var key in attributes) {\n\t\t\t\tresult[key] = attributes[key];\n\t\t\t}\n\t\t}\n\t\treturn result;\n\t}\n\n\tfunction init (converter) {\n\t\tfunction api (key, value, attributes) {\n\t\t\tvar result;\n\t\t\tif (typeof document === 'undefined') {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// Write\n\n\t\t\tif (arguments.length > 1) {\n\t\t\t\tattributes = extend({\n\t\t\t\t\tpath: '/'\n\t\t\t\t}, api.defaults, attributes);\n\n\t\t\t\tif (typeof attributes.expires === 'number') {\n\t\t\t\t\tvar expires = new Date();\n\t\t\t\t\texpires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);\n\t\t\t\t\tattributes.expires = expires;\n\t\t\t\t}\n\n\t\t\t\t// We're using \"expires\" because \"max-age\" is not supported by IE\n\t\t\t\tattributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';\n\n\t\t\t\ttry {\n\t\t\t\t\tresult = JSON.stringify(value);\n\t\t\t\t\tif (/^[\\{\\[]/.test(result)) {\n\t\t\t\t\t\tvalue = result;\n\t\t\t\t\t}\n\t\t\t\t} catch (e) {}\n\n\t\t\t\tif (!converter.write) {\n\t\t\t\t\tvalue = encodeURIComponent(String(value))\n\t\t\t\t\t\t.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);\n\t\t\t\t} else {\n\t\t\t\t\tvalue = converter.write(value, key);\n\t\t\t\t}\n\n\t\t\t\tkey = encodeURIComponent(String(key));\n\t\t\t\tkey = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);\n\t\t\t\tkey = key.replace(/[\\(\\)]/g, escape);\n\n\t\t\t\tvar stringifiedAttributes = '';\n\n\t\t\t\tfor (var attributeName in attributes) {\n\t\t\t\t\tif (!attributes[attributeName]) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\t\t\t\t\tstringifiedAttributes += '; ' + attributeName;\n\t\t\t\t\tif (attributes[attributeName] === true) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\t\t\t\t\tstringifiedAttributes += '=' + attributes[attributeName];\n\t\t\t\t}\n\t\t\t\treturn (document.cookie = key + '=' + value + stringifiedAttributes);\n\t\t\t}\n\n\t\t\t// Read\n\n\t\t\tif (!key) {\n\t\t\t\tresult = {};\n\t\t\t}\n\n\t\t\t// To prevent the for loop in the first place assign an empty array\n\t\t\t// in case there are no cookies at all. Also prevents odd result when\n\t\t\t// calling \"get()\"\n\t\t\tvar cookies = document.cookie ? document.cookie.split('; ') : [];\n\t\t\tvar rdecode = /(%[0-9A-Z]{2})+/g;\n\t\t\tvar i = 0;\n\n\t\t\tfor (; i < cookies.length; i++) {\n\t\t\t\tvar parts = cookies[i].split('=');\n\t\t\t\tvar cookie = parts.slice(1).join('=');\n\n\t\t\t\tif (!this.json && cookie.charAt(0) === '\"') {\n\t\t\t\t\tcookie = cookie.slice(1, -1);\n\t\t\t\t}\n\n\t\t\t\ttry {\n\t\t\t\t\tvar name = parts[0].replace(rdecode, decodeURIComponent);\n\t\t\t\t\tcookie = converter.read ?\n\t\t\t\t\t\tconverter.read(cookie, name) : converter(cookie, name) ||\n\t\t\t\t\t\tcookie.replace(rdecode, decodeURIComponent);\n\n\t\t\t\t\tif (this.json) {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\tcookie = JSON.parse(cookie);\n\t\t\t\t\t\t} catch (e) {}\n\t\t\t\t\t}\n\n\t\t\t\t\tif (key === name) {\n\t\t\t\t\t\tresult = cookie;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\n\t\t\t\t\tif (!key) {\n\t\t\t\t\t\tresult[name] = cookie;\n\t\t\t\t\t}\n\t\t\t\t} catch (e) {}\n\t\t\t}\n\n\t\t\treturn result;\n\t\t}\n\n\t\tapi.set = api;\n\t\tapi.get = function (key) {\n\t\t\treturn api.call(api, key);\n\t\t};\n\t\tapi.getJSON = function () {\n\t\t\treturn api.apply({\n\t\t\t\tjson: true\n\t\t\t}, [].slice.call(arguments));\n\t\t};\n\t\tapi.defaults = {};\n\n\t\tapi.remove = function (key, attributes) {\n\t\t\tapi(key, '', extend(attributes, {\n\t\t\t\texpires: -1\n\t\t\t}));\n\t\t};\n\n\t\tapi.withConverter = init;\n\n\t\treturn api;\n\t}\n\n\treturn init(function () {});\n}));\n\n\n//# sourceURL=webpack:///./node_modules/js-cookie/src/js.cookie.js?");

/***/ }),

/***/ "./src/js/activity-randomizer.js":
/*!***************************************!*\
  !*** ./src/js/activity-randomizer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _activityRandomizer = __webpack_require__(/*! ./modules/activity-randomizer/state/activity-randomizer */ \"./src/js/modules/activity-randomizer/state/activity-randomizer.js\");\n\nvar _activityRandomizer2 = _interopRequireDefault(_activityRandomizer);\n\nvar _filters = __webpack_require__(/*! ./modules/activity-randomizer/filters/filters */ \"./src/js/modules/activity-randomizer/filters/filters.js\");\n\nvar _dom = __webpack_require__(/*! ./modules/activity-randomizer/filters/dom */ \"./src/js/modules/activity-randomizer/filters/dom.js\");\n\nvar _dom2 = __webpack_require__(/*! ./modules/activity-randomizer/dom */ \"./src/js/modules/activity-randomizer/dom.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Lists activities in the activityListContainers or shows an error\nvar listActivities = function listActivities(documentID, sheetName) {\n  var documentLinkInput = document.getElementById('sheet-input');\n  var sheetCellRange = 'A2:D';\n\n  var sheetPrefix = sheetName ? sheetName + '!' : '';\n  (0, _dom2.setActivityContainerContent)('<div class=\"col\">Loading data...</div>');\n\n  gapi.client.sheets.spreadsheets.values.get({\n    spreadsheetId: documentID,\n    range: sheetPrefix + sheetCellRange\n  }).then(function (response) {\n    var range = response.result;\n\n    // Sometimes range.values empty and then it is not returned from the response\n    if (range.values && range.values.length > 0) {\n      var activities = [];\n      _activityRandomizer2.default.setDocumentValidity(true);\n\n      (0, _dom2.removeActivityListContainersInnerHTML)();\n      for (var i = 0; i < range.values.length; i += 1) {\n        var cellRow = range.values[i];\n\n        // Print columns A and B, which correspond to indices 0 and 1.\n        (0, _dom2.appendActivity)(cellRow[0], cellRow[1]);\n\n        activities.push({\n          name: cellRow[0],\n          time: cellRow[1],\n          rating: cellRow[2],\n          description: cellRow[3] || 'No description'\n        });\n      }\n\n      _activityRandomizer2.default.setActivities(activities);\n      (0, _dom.setTimeRangeMaxValue)();\n      documentLinkInput.classList.remove('is-invalid');\n    } else {\n      (0, _dom2.setActivityContainerContent)('<div class=\"col\">No data found. :(</div>');\n      (0, _dom.disableFilters)();\n    }\n  },\n  // Handle rejected document\n  function () {\n    documentLinkInput.classList.add('is-invalid');\n    _activityRandomizer2.default.setDocumentValidity(false);\n    (0, _dom2.removeActivityListContainersInnerHTML)();\n    (0, _dom2.appendMessage)('error: Make sure your Google Sheets document link is copied correctly.');\n    (0, _dom.disableFilters)();\n  });\n};\n\n/**\r\n * @param {array} sheetNames\r\n */\nvar insertSheetNames = function insertSheetNames(sheetNames) {\n  var sheetButtonContainer = document.querySelector('.sheet-button-container');\n  sheetButtonContainer.innerHTML = '';\n\n  sheetNames.forEach(function (sheet) {\n    var sheetName = sheet.properties.title.toLowerCase();\n\n    // Add the sheets as buttons, except for the info sheet\n    if (sheetName !== 'info') {\n      sheetButtonContainer.innerHTML += '<button class=\"btn btn-sm\" value=\"' + sheetName + '\">' + sheetName + '</button>';\n    }\n\n    var sheetButtons = sheetButtonContainer.querySelectorAll('button');\n\n    // Add the click listeners for the buttons\n    sheetButtons.forEach(function (clickedButton, index, buttons) {\n      clickedButton.addEventListener('click', function (e) {\n        // Change the active button\n        buttons.forEach(function (button) {\n          button.classList.remove('btn-primary');\n        });\n        clickedButton.classList.add('btn-primary');\n\n        var sheetToUse = e.target.value;\n        var documentID = (0, _dom2.getDocumentID)();\n        listActivities(documentID, sheetToUse);\n      });\n\n      if (index === 0) {\n        clickedButton.dispatchEvent(new Event('click'));\n        clickedButton.classList.add('btn-primary');\n      }\n    });\n  });\n};\n\nvar handleNoSheetNames = function handleNoSheetNames(error) {\n  insertSheetNames([]);\n  (0, _dom.disableFilters)();\n  _activityRandomizer2.default.setDocumentValidity(false);\n  (0, _dom2.appendMessage)('Getting sheet names failed: ' + error);\n};\n\nvar getSheetNames = function getSheetNames(documentID) {\n  return new Promise(function (resolve, reject) {\n    gapi.client.sheets.spreadsheets.get({\n      spreadsheetId: documentID\n    }).then(function (response) {\n      resolve(response.result.sheets);\n    }, function (response) {\n      reject(response.result.error.message);\n    });\n  });\n};\n\n/**\r\n *  Called when the signed in status changes, to update the UI\r\n *  appropriately. After a sign-in, the API is called.\r\n */\nvar updateGoogleAPISignInStatus = function updateGoogleAPISignInStatus(isSignedIn) {\n  var authorizeButton = document.getElementById('authorize-button');\n  var signoutButton = document.getElementById('signout-button');\n\n  if (isSignedIn) {\n    var documentID = (0, _dom2.getDocumentID)();\n\n    authorizeButton.style.display = 'none';\n    signoutButton.style.display = 'inline-block';\n\n    getSheetNames(documentID).then(insertSheetNames).catch(function (error) {\n      handleNoSheetNames(error);\n    });\n    listActivities(documentID);\n  } else {\n    authorizeButton.style.display = 'inline-block';\n    signoutButton.style.display = 'none';\n  }\n};\n\nvar handleGoogleAPIAuthClick = function handleGoogleAPIAuthClick() {\n  gapi.auth2.getAuthInstance().signIn();\n};\nvar handleGoogleAPISignoutClick = function handleGoogleAPISignoutClick() {\n  gapi.auth2.getAuthInstance().signOut();\n};\n\n// Initializes the API client library and sets up sign-in state listeners.\nvar initClientForGoogleSheetsAPI = function initClientForGoogleSheetsAPI() {\n  var authorizeButton = document.getElementById('authorize-button');\n  var signoutButton = document.getElementById('signout-button');\n\n  // Client ID and API key from the Developer Console\n  var CLIENT_ID = '855790869281-iie5tqafurs5179pmr8s236n595o4460.apps.googleusercontent.com';\n  var API_KEY = 'AIzaSyDxKJyIUDRnU7xTz6_CWAGxZkDiytZtpA4';\n\n  // Array of API discovery doc URLs for APIs used by the quickstart\n  var DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4', 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];\n\n  /* Authorization scopes required by the API; multiple scopes can be\r\n   included, separated by spaces. */\n  var SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly https://www.googleapis.com/auth/calendar.readonly';\n\n  gapi.client.init({\n    apiKey: API_KEY,\n    clientId: CLIENT_ID,\n    discoveryDocs: DISCOVERY_DOCS,\n    scope: SCOPES\n  }).then(function () {\n    // Listen for sign-in state changes.\n    gapi.auth2.getAuthInstance().isSignedIn.listen(updateGoogleAPISignInStatus);\n\n    // Handle the initial sign-in state.\n    updateGoogleAPISignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());\n    authorizeButton.onclick = handleGoogleAPIAuthClick;\n    signoutButton.onclick = handleGoogleAPISignoutClick;\n  });\n};\n\n/**\r\n *  On load, called to load the auth2 library and API client library.\r\n *  On window object for the Google Sheets script tag.\r\n */\nwindow.handleClientLoad = function () {\n  gapi.load('client:auth2', initClientForGoogleSheetsAPI);\n};\n\n/**\r\n * @description Puts an activity in the picked activity card\r\n * @param {activity} activity\r\n */\nvar insertRandomizedActivity = function insertRandomizedActivity(activity) {\n  var pickedActivity = document.getElementById('picked-activity');\n\n  pickedActivity.querySelector('.card-title h2').innerHTML = activity.name;\n  pickedActivity.querySelector('.card-text').innerHTML = activity.description + '<br>' + activity.time + ' minutes.';\n};\n\n// Elements with eventlisteners\nvar viewListButtons = document.querySelectorAll('[data-target=\"#viewCurrentActivities\"]');\nvar timeRange = document.querySelector('[time-range]');\nvar randomizeButton = document.getElementById('pick-activity');\nvar sheetSubmitButton = document.getElementById('sheet-submit');\nvar removeFiltersButton = document.getElementById('remove-filters');\n\nsheetSubmitButton.addEventListener('click', function () {\n  var documentID = (0, _dom2.getDocumentID)();\n\n  listActivities(documentID);\n  getSheetNames(documentID).then(insertSheetNames).catch(function (error) {\n    handleNoSheetNames(error);\n  });\n});\n\nrandomizeButton.addEventListener('click', function () {\n  var noActivitySelectedContainers = document.querySelectorAll('.no-activity');\n  var randomizedActivityContainers = document.querySelectorAll('.randomized-activity');\n  var activities = _activityRandomizer2.default.getActivities();\n  var filteredActivities = (0, _filters.filterActivities)(activities, (0, _filters.getFilters)());\n\n  if (filteredActivities.length > 0) {\n    var randomIndex = Math.floor(Math.random() * filteredActivities.length);\n\n    insertRandomizedActivity(filteredActivities[randomIndex]);\n\n    noActivitySelectedContainers.forEach(function (el) {\n      el.style.display = 'none';\n    });\n    randomizedActivityContainers.forEach(function (el) {\n      el.style.display = 'block';\n    });\n  } else {\n    // When there are no activities available\n    (0, _dom2.setActivityContainerContent)('<div class=\"col\">You filtered out all activities in your sheet.</div>');\n  }\n});\n\ntimeRange.addEventListener('change', function (e) {\n  var rangeValue = e.target.value;\n  var timeRangeValue = document.querySelector('[time-range-value]');\n\n  timeRangeValue.textContent = rangeValue;\n});\n\nremoveFiltersButton.addEventListener('click', function () {\n  // restore to the original state of the filters\n  var activities = _activityRandomizer2.default.getActivities();\n  (0, _dom.setTimeRangeMaxValue)(activities);\n});\n\n// Add a click event listener to every button in viewListButtons\nviewListButtons.forEach(function (btn) {\n  btn.addEventListener('click', function () {\n    var documentIsValid = _activityRandomizer2.default.getDocumentValidity();\n\n    if (documentIsValid) {\n      var activities = _activityRandomizer2.default.getActivities();\n      var filteredActivities = (0, _filters.filterActivities)(activities, (0, _filters.getFilters)());\n\n      if (filteredActivities.length > 0) {\n        // Fill the activityListContainers with the filtered activities.\n        (0, _dom2.removeActivityListContainersInnerHTML)();\n        filteredActivities.forEach(function (activity) {\n          (0, _dom2.appendActivity)(activity.name, activity.time);\n        });\n      } else {\n        (0, _dom2.setActivityContainerContent)('<div class=\"col\">You filtered out all activities in your sheet.</div>');\n      }\n    } else {\n      // sheet is invalid, do error handling\n      (0, _dom2.setActivityContainerContent)('<div class=\"col\">The currently selected sheet does not contain activities.</div>');\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/activity-randomizer.js?");

/***/ }),

/***/ "./src/js/modules/activity-randomizer/dom.js":
/*!***************************************************!*\
  !*** ./src/js/modules/activity-randomizer/dom.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setActivityContainerContent = exports.removeActivityListContainersInnerHTML = exports.appendActivity = exports.appendMessage = exports.getDocumentID = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _cookies = __webpack_require__(/*! ../cookies/cookies */ \"./src/js/modules/cookies/cookies.js\");\n\nvar _cookies2 = _interopRequireDefault(_cookies);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * @returns example document ID or the ID from the document input\r\n */\nvar getDocumentIDFromdocumentLinkInput = function getDocumentIDFromdocumentLinkInput() {\n  var documentLinkInput = document.getElementById('sheet-input');\n  var defaultDocumentID = '1hqNuYTfAguDAXDWA9L14BarfqwVOWSGsd6IpuWNX2BE';\n  var documentID = '';\n\n  // Use the regex if it is a url, otherwise take the ID\n  if (documentLinkInput.value.indexOf('docs.google.com/spreadsheets') > 0) {\n    var googleSheetsDocumentIDRegex = new RegExp(/spreadsheets\\/d\\/([a-zA-Z0-9-_]+)/);\n    // sheet link\n    var regexResult = documentLinkInput.value.match(googleSheetsDocumentIDRegex);\n\n    var _regexResult = _slicedToArray(regexResult, 2);\n\n    documentID = _regexResult[1];\n  } else {\n    documentID = documentLinkInput.value === '' ? defaultDocumentID : documentLinkInput.value;\n  }\n\n  return documentID;\n};\n\n/**\r\n * Gets the document ID associated with the users Google Sheets.\r\n * documentID is changed when the sheetSubmitButton is clicked.\r\n * It is the document ID from the google sheets URL.\r\n */\nvar getDocumentID = function getDocumentID() {\n  var cookies = (0, _cookies2.default)();\n  var documentID = '';\n\n  if (cookies.preferredSheet !== undefined) {\n    // Check the cookies for a saved document ID\n    documentID = cookies.preferredDoc;\n  } else {\n    // Check the sheet input for a document ID\n    documentID = getDocumentIDFromdocumentLinkInput();\n  }\n\n  return documentID;\n};\n\n/**\r\n * Append a pre element to the body containing the given message\r\n * as its text node. Used to display the results of the API call.\r\n *\r\n * @param {string} message Text to be placed in pre element.\r\n */\nvar appendMessage = function appendMessage(message) {\n  var activityListContainers = document.querySelectorAll('[sheet-content]');\n\n  activityListContainers.forEach(function (contentContainer) {\n    var col = document.createElement('div');\n    var textContent = document.createTextNode(message);\n    col.classList.add('col-sm-12');\n    col.appendChild(textContent);\n    contentContainer.appendChild(col);\n  });\n};\nvar appendActivity = function appendActivity(activity, time) {\n  appendMessage(activity + ', ' + time + ' minutes.\\n');\n};\nvar setActivityContainerContent = function setActivityContainerContent(content) {\n  var activityListContainers = document.querySelectorAll('[sheet-content]');\n\n  activityListContainers.forEach(function (container) {\n    container.innerHTML = content;\n  });\n};\nvar removeActivityListContainersInnerHTML = function removeActivityListContainersInnerHTML() {\n  setActivityContainerContent('');\n};\n\nexports.getDocumentID = getDocumentID;\nexports.appendMessage = appendMessage;\nexports.appendActivity = appendActivity;\nexports.removeActivityListContainersInnerHTML = removeActivityListContainersInnerHTML;\nexports.setActivityContainerContent = setActivityContainerContent;\n\n//# sourceURL=webpack:///./src/js/modules/activity-randomizer/dom.js?");

/***/ }),

/***/ "./src/js/modules/activity-randomizer/filters/dom.js":
/*!***********************************************************!*\
  !*** ./src/js/modules/activity-randomizer/filters/dom.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.disableFilters = exports.setTimeRangeMaxValue = undefined;\n\nvar _activityRandomizer = __webpack_require__(/*! ../state/activity-randomizer */ \"./src/js/modules/activity-randomizer/state/activity-randomizer.js\");\n\nvar _activityRandomizer2 = _interopRequireDefault(_activityRandomizer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar setTimeRangeMaxValue = function setTimeRangeMaxValue(activities) {\n  var timeRange = document.querySelector('[time-range]');\n  var timeRangeValue = document.querySelector('[time-range-value]');\n  var timeRangeMaxValueIndicator = document.querySelector('.max');\n\n  timeRange.disabled = true;\n  var activitiesToCheckForMaxTime = activities || _activityRandomizer2.default.getActivities();\n  var maxTime = null;\n\n  maxTime = activitiesToCheckForMaxTime.reduce(function (accumulator, currentActivity) {\n    var time = Number(currentActivity.time);\n    return time > accumulator ? time : accumulator;\n  }, null);\n\n  timeRange.max = maxTime;\n  timeRange.value = maxTime;\n  timeRangeMaxValueIndicator.innerHTML = maxTime;\n  timeRangeValue.textContent = timeRange.value;\n\n  if (timeRange.disabled === true && timeRange.max !== 'null') {\n    timeRange.disabled = false;\n  }\n};\n\nvar disableFilters = function disableFilters() {\n  var timeRange = document.querySelector('[time-range]');\n  timeRange.disabled = true;\n};\n\nexports.setTimeRangeMaxValue = setTimeRangeMaxValue;\nexports.disableFilters = disableFilters;\n\n//# sourceURL=webpack:///./src/js/modules/activity-randomizer/filters/dom.js?");

/***/ }),

/***/ "./src/js/modules/activity-randomizer/filters/filters.js":
/*!***************************************************************!*\
  !*** ./src/js/modules/activity-randomizer/filters/filters.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar getFilters = function getFilters() {\n  var timeRange = document.querySelector('[time-range]');\n\n  var filters = {\n    maxTime: timeRange.value\n  };\n  filters.maxTime = timeRange.value;\n\n  return filters;\n};\n\nvar filterActivities = function filterActivities(activities, filters) {\n  /**\r\n   * // filter based on time\r\n   * Because activity.time is a string it needs to be converted\r\n   * to a number before comparing it to the value of the time range.\r\n   */\n  var filteredActivities = activities.filter(function (activity) {\n    return Number(activity.time) <= filters.maxTime;\n  });\n  return filteredActivities;\n};\n\nvar handleCompletelyFilteredOutActivities = function handleCompletelyFilteredOutActivities() {};\n\nexports.getFilters = getFilters;\nexports.filterActivities = filterActivities;\nexports.handleCompletelyFilteredOutActivities = handleCompletelyFilteredOutActivities;\n\n//# sourceURL=webpack:///./src/js/modules/activity-randomizer/filters/filters.js?");

/***/ }),

/***/ "./src/js/modules/activity-randomizer/state/activity-randomizer.js":
/*!*************************************************************************!*\
  !*** ./src/js/modules/activity-randomizer/state/activity-randomizer.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar activityRandomizer = {\n  activitiesFromSheet: [],\n  documentValid: false,\n\n  getActivities: function getActivities() {\n    return this.activitiesFromSheet;\n  },\n  setActivities: function setActivities(newActivities) {\n    this.activitiesFromSheet = newActivities;\n    return this;\n  },\n  getDocumentValidity: function getDocumentValidity() {\n    return this.documentValid;\n  },\n  setDocumentValidity: function setDocumentValidity(validity) {\n    this.documentValid = validity;\n    return this;\n  }\n};\n\nexports.default = activityRandomizer;\n\n//# sourceURL=webpack:///./src/js/modules/activity-randomizer/state/activity-randomizer.js?");

/***/ }),

/***/ "./src/js/modules/cookies/cookies.js":
/*!*******************************************!*\
  !*** ./src/js/modules/cookies/cookies.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _jsCookie = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n\nvar _jsCookie2 = _interopRequireDefault(_jsCookie);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar getCookies = function getCookies() {\n  var cookies = {};\n\n  cookies.hasConfiguredCookies = _jsCookie2.default.get('_cookies_configured');\n  cookies.allowPreferences = _jsCookie2.default.get('_allow_preferences');\n  cookies.preferredDoc = _jsCookie2.default.get('_ra_preference_doc');\n  cookies.preferredSheet = _jsCookie2.default.get('_ra_preference_sheet');\n\n  return cookies;\n};\n\nvar fillCurrentCookieSettings = function fillCurrentCookieSettings(cookies, cookieModal) {\n  if (cookies.allowPreferences === 'true') {\n    cookieModal.querySelector('[data-cookie-preferences-checkbox]').checked = true;\n  } else {\n    cookieModal.querySelector('[data-cookie-preferences-checkbox]').checked = false;\n  }\n};\n\nvar disableScrolling = function disableScrolling() {\n  document.querySelector('body').style.overflow = 'hidden';\n};\nvar enableScrolling = function enableScrolling() {\n  document.querySelector('body').style.overflow = '';\n};\nvar setNewCookieSettings = function setNewCookieSettings(settings) {\n  _jsCookie2.default.set('_allow_preferences', settings.preferences);\n};\n\nvar checkCookieCheckboxes = function checkCookieCheckboxes(cookieModal) {\n  var cookiePreferenceCheckbox = cookieModal.querySelector('[data-cookie-preferences-checkbox]');\n  var preferencesAllowed = cookiePreferenceCheckbox.checked;\n\n  var cookieSettingsFromPopUp = {\n    preferences: preferencesAllowed\n  };\n\n  return cookieSettingsFromPopUp;\n};\n\n/**\r\n * @param {*} cookies\r\n * @description shows or hides elements based on a user's cookies\r\n */\nvar handleCookieElements = function handleCookieElements(cookies) {\n  if (cookies.hasConfiguredCookies !== undefined) {\n    /** Remove hidden class if preference cookies are allowed\r\n     *  Else add the class\r\n     */\n    if (cookies.allowPreferences === 'true') {\n      document.querySelectorAll('[data-preference-cookie]').forEach(function (element) {\n        element.classList.remove('hidden');\n      });\n    } else {\n      document.querySelectorAll('[data-preference-cookie]').forEach(function (element) {\n        element.classList.add('hidden');\n      });\n    }\n  } else {\n    // hasConfiguredCookies === undefined\n  }\n};\n\nvar addCookieModalEventListeners = function addCookieModalEventListeners(cookieModal) {\n  var cookieClose = cookieModal.querySelector('[data-cookie-modal-close]');\n  var cookieSubmit = cookieModal.querySelector('[data-cookies-submit]');\n\n  cookieClose.addEventListener('click', function () {\n    cookieModal.classList.remove('opened');\n    enableScrolling();\n  });\n  cookieSubmit.addEventListener('click', function () {\n    _jsCookie2.default.set('_cookies_configured', true);\n    var cookieSettings = checkCookieCheckboxes(cookieModal);\n    setNewCookieSettings(cookieSettings);\n    handleCookieElements(getCookies());\n    enableScrolling();\n    cookieModal.classList.remove('opened');\n  });\n};\n\nvar showCookieModal = function showCookieModal(cookies) {\n  var cookieModal = document.querySelector('.cookie-modal-wrapper');\n\n  fillCurrentCookieSettings(cookies, cookieModal);\n  disableScrolling();\n  addCookieModalEventListeners(cookieModal);\n  cookieModal.classList.add('opened');\n};\n\n/**\r\n * @param {} cookies from the getCookies function\r\n * It is called when the page loads.\r\n */\nvar handleCookies = function handleCookies(cookies) {\n  if (cookies) {\n    if (cookies.hasConfiguredCookies === undefined) {\n      if (_jsCookie2.default.get('_cookies_configured') !== 'true') {\n        showCookieModal(cookies);\n      }\n    } else if (cookies.hasConfiguredCookies === 'true') {\n      handleCookieElements(cookies);\n    } else {\n      // cookies probably edited or removed\n    }\n  }\n};\n\n/**\r\n * Event listener for every element that has the\r\n * open-cookies attribute.\r\n * It opens the cookie modal.\r\n * */\nvar openCookies = document.querySelectorAll('[open-cookies]');\n\nopenCookies.forEach(function (openCookiesButton) {\n  openCookiesButton.addEventListener('click', function () {\n    showCookieModal(getCookies());\n  });\n});\n\nhandleCookies(getCookies());\n\nexports.default = getCookies;\n\n//# sourceURL=webpack:///./src/js/modules/cookies/cookies.js?");

/***/ })

/******/ });