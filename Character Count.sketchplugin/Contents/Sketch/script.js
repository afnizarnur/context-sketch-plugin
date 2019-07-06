var globalThis = this;
function __skpm_run (key, context) {
  globalThis.context = context;

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);

COScript.currentCOScript().setShouldKeepAround(true);
var pluginName = "Character Count";
var panelHeader = 44;
var panelHeight = 242;
var panelWidth = 343;
var panelGutter = 16 * 2;
var container = panelWidth - panelGutter;

function createFloatingPanel(title, frame) {
  var panel = NSPanel.alloc().init();
  panel.setTitle(title);
  panel.setFrame_display(frame, true);
  panel.setStyleMask(NSTexturedBackgroundWindowMask | NSTitledWindowMask | NSClosableWindowMask | NSFullSizeContentViewWindowMask);
  panel.setBackgroundColor(NSColor.windowBackgroundColor());
  panel.setLevel(NSFloatingWindowLevel);
  panel.makeKeyAndOrderFront(null);
  panel.center();
  return panel;
}

function createView(frame) {
  var view = NSView.alloc().initWithFrame(frame);
  view.setFlipped(1);
  return view;
}

function createBox(frame) {
  var box = NSBox.alloc().initWithFrame(frame);
  box.setTitle("");
  return box;
}

function createButton(label, frame) {
  var button = NSButton.alloc().initWithFrame(frame);
  button.setTitle(label);
  button.setBezelStyle(NSRoundedBezelStyle);
  button.setAction("callAction:");
  return button;
}

function createTextLabel(string, frame) {
  var field = NSTextField.alloc().initWithFrame(frame);
  field.setStringValue(string);
  field.setFont(NSFont.systemFontOfSize(12));
  field.setTextColor(NSColor.colorWithCalibratedRed_green_blue_alpha(0, 0, 0, 0.7));
  field.setBezeled(0);
  field.setBackgroundColor(NSColor.windowBackgroundColor());
  field.setEditable(0);
  return field;
}

function createTextDataLabel(string, frame) {
  var field = NSTextField.alloc().initWithFrame(frame);
  field.setStringValue(string);
  field.setFont(NSFont.systemFontOfSize(13));
  field.setTextColor(NSColor.colorWithCalibratedRed_green_blue_alpha(0, 0, 0, 0.3));
  field.setBezeled(0);
  field.setBackgroundColor(NSColor.colorWithCalibratedRed_green_blue_alpha(0, 0, 0, 0));
  field.setEditable(0);
  return field;
}

function createTextValueLabel(string, frame) {
  var field = NSTextField.alloc().initWithFrame(frame);
  field.setStringValue(string);
  field.setFont(NSFont.systemFontOfSize(13));
  field.setBezeled(0);
  field.setBackgroundColor(NSColor.colorWithCalibratedRed_green_blue_alpha(0, 0, 0, 0));
  field.setEditable(0);
  return field;
}

function checkPluralSigular(value) {
  if (value > 1) {
    return true;
  } else {
    return false;
  }
}

function createMainView(characters, words, paragraphs) {
  var charactersLabel, wordsLabel, paragraphsLabel;
  checkPluralSigular(characters) ? charactersLabel = "Characters" : charactersLabel = "Character";
  checkPluralSigular(words) ? wordsLabel = "Words" : wordsLabel = "Word";
  checkPluralSigular(paragraphs) ? paragraphsLabel = "Paragraphs" : paragraphsLabel = "Paragraph";
  var panel = createFloatingPanel(pluginName, NSMakeRect(0, 0, panelWidth, panelHeight));
  var panelContent = createView(NSMakeRect(0, 0, panelWidth, panelHeight - panelHeader));
  var box = createBox(NSMakeRect(16, 4, container, 145));
  var labelTotalChar = createTextDataLabel("Total Character", NSMakeRect(35, 35, 120, 15));
  var valueTotalChar = createTextValueLabel(characters, NSMakeRect(35, 55, 120, 15));
  var labelWords = createTextDataLabel(wordsLabel, NSMakeRect(35, 85, 120, 15));
  var valueWords = createTextValueLabel(words, NSMakeRect(35, 105, 120, 15));
  var labelParagraph = createTextDataLabel(paragraphsLabel, NSMakeRect(160, 85, 120, 15));
  var valueParagraph = createTextValueLabel(paragraphs, NSMakeRect(160, 105, 120, 15));
  var copyLabel = createTextLabel("Easily copy values and sent to your writer", NSMakeRect(16, 163, 250, 20));
  var copyButton = createButton("Copy", NSMakeRect(260, 162, 70, 23));
  [box, labelTotalChar, valueTotalChar, labelWords, valueWords, labelParagraph, valueParagraph, copyLabel, copyButton].forEach(function (i) {
    return panelContent.addSubview(i);
  });
  copyButton.setCOSJSTargetFunction(function () {
    var pasteBoard = NSPasteboard.generalPasteboard();
    var content = "It's " + characters + " " + charactersLabel.toLowerCase() + ", " + words + " " + wordsLabel.toLowerCase() + ", " + " and " + paragraphs + " " + paragraphsLabel.toLowerCase() + ".";
    pasteBoard.clearContents();
    pasteBoard.writeObjects([content]);
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("✅ Copied!");
    panel.close();
  });
  panel.contentView().addSubview(panelContent);
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var text = context.selection.firstObject();
  var characters = 0;
  var words = 0;
  var paragraphs = 0;

  if (!text || text.class() != "MSTextLayer" || context.selection.length > 1) {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("⚠️ Please select a text layer to count the character.");
    return;
  } else {
    var textAsLayer = text.stringValue();
    var layerToString = String(textAsLayer);
    characters = layerToString.length;
    words = layerToString.split(/\s+\b/).length;
    paragraphs = layerToString.replace(/\n$/gm, "").split(/\n/).length;
  }

  createMainView(characters, words, paragraphs);
});

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=script.js.map