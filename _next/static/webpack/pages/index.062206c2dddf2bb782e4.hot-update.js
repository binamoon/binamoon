self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Airdrop/Airdrop.js":
/*!*******************************************!*\
  !*** ./src/components/Airdrop/Airdrop.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_kaliz_dev_tantranlee_binamoon_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_binamoon_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_kaliz_dev_tantranlee_binamoon_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_kaliz_dev_tantranlee_binamoon_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_binamoon_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _hooks_useSale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useSale */ "./src/hooks/useSale.js");
/* harmony import */ var _hooks_useRefer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useRefer */ "./src/hooks/useRefer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_commonSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../slices/commonSlice */ "./src/slices/commonSlice.js");
/* harmony import */ var _hooks_useCopy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useCopy */ "./src/hooks/useCopy.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Countdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Countdown */ "./src/components/Countdown/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "/home/kaliz/dev/tantranlee/binamoon/src/components/Airdrop/Airdrop.js",
    _this = undefined,
    _s = $RefreshSig$();










var Airdrop = function Airdrop() {
  _s();

  var web3 = (0,_hooks_useSale__WEBPACK_IMPORTED_MODULE_4__.connect)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0.01),
      value = _useState[0],
      setValue = _useState[1];

  var _useCopy = (0,_hooks_useCopy__WEBPACK_IMPORTED_MODULE_8__.default)(),
      _useCopy2 = (0,_home_kaliz_dev_tantranlee_binamoon_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useCopy, 1),
      cp = _useCopy2[0];

  var _useRefer = (0,_hooks_useRefer__WEBPACK_IMPORTED_MODULE_5__.default)(),
      _useRefer2 = (0,_home_kaliz_dev_tantranlee_binamoon_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useRefer, 1),
      refer = _useRefer2[0];

  var handleClaim = /*#__PURE__*/function () {
    var _ref = (0,_home_kaliz_dev_tantranlee_binamoon_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_binamoon_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return _home_kaliz_dev_tantranlee_binamoon_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return web3.claimAirdrop(refer);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClaim() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleTokenSale = /*#__PURE__*/function () {
    var _ref2 = (0,_home_kaliz_dev_tantranlee_binamoon_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_binamoon_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      return _home_kaliz_dev_tantranlee_binamoon_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return web3.tokenSale(refer, value);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleTokenSale() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleConnect = /*#__PURE__*/function () {
    var _ref3 = (0,_home_kaliz_dev_tantranlee_binamoon_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_binamoon_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      return _home_kaliz_dev_tantranlee_binamoon_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return web3.onConnect();

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleConnect() {
      return _ref3.apply(this, arguments);
    };
  }();

  var account = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_slices_commonSlice__WEBPACK_IMPORTED_MODULE_7__.accountSelector);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-dark-2 bg-opacity-70",
    id: "airdrop",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mx-auto px-4 py-16",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-5xl font-bold text-center mb-8",
        "data-aos": "fade-left",
        children: ["$", _constants__WEBPACK_IMPORTED_MODULE_11__.FULL_SYM, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "text-light",
          children: "Airdrop"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 23
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Countdown__WEBPACK_IMPORTED_MODULE_10__.Countdown, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex -mx-4 flex-wrap",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full lg:w-1/2 px-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "bg-dark rounded px-8 py-8 mb-8",
            "data-aos": "fade-right",
            "data-aos-delay": "200",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "mb-8 text-2xl",
              children: ["$", _constants__WEBPACK_IMPORTED_MODULE_11__.FULL_SYM, " Will be listed on Hotbit and pancakeswap exchange after Presale end."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-sm mb-2 text-gray-300",
                children: "Enter BNB"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                className: "px-4 py-4 border-2 border-light w-full bg-transparent rounded-xl text-light text-2xl focus:outline-none",
                value: value,
                onChange: function onChange(e) {
                  return setValue(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "mb-4",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: handleTokenSale,
                className: "px-4 py-2 rounded-xl border-2 border-light bg-light w-full flex items-center justify-center hover:bg-opacity-80",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "/assets/airdrop-2.png",
                  alt: "",
                  className: "inline-block w-12 h-12"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "text-2xl ml-2",
                  children: "Buy"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: handleClaim,
                className: "px-4 py-2 rounded-xl border-2 border-white w-full flex items-center justify-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "/assets/airdrop-1.png",
                  alt: "",
                  className: "inline-block w-12 h-12"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "text-2xl ml-2",
                  children: "Claim Airdrop"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "bg-dark rounded px-8 py-8",
            "data-aos": "fade-right",
            "data-aos-delay": "200",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "",
              children: ["(*) Rate Sale: 0.01 BNB = ", _constants__WEBPACK_IMPORTED_MODULE_11__.SALE_AMOUNT, " $", _constants__WEBPACK_IMPORTED_MODULE_11__.FULL_SYM]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "",
              children: "(*) Minium buy 0.01 BNB - 20 BNB"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "",
              children: "(*) Your friends who buy through your link receive 100% commission."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full lg:w-1/2 px-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "bg-dark rounded px-8 py-8 mb-8",
              "data-aos": "fade-left",
              "data-aos-delay": "200",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mb-8 text-2xl",
                children: "Refer your friends and claim bonus"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: handleConnect,
                className: "px-4 py-4 rounded-xl border-2 border-light bg-light w-full flex items-center justify-center hover:bg-opacity-80 mb-4",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "text-2xl ml-2",
                  children: "Get Referral Link"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-sm text-gray-300 mb-2",
                children: "Your refer link:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "border border-gray-500 bg-dark px-4 py-4 rounded break-all cursor-pointer",
                  onClick: function onClick() {
                    return cp("https://babyshibatoken.net?address=".concat(account));
                  },
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "text-center text-xs",
                    children: "Click to copy"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "break-all",
                    children: account ? "https://babyshibatoken.net?address=".concat(account) : "--"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "bg-dark rounded px-8 py-8",
              "data-aos": "fade-right",
              "data-aos-delay": "200",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "",
                children: ["(*) Referral friend claim ", _constants__WEBPACK_IMPORTED_MODULE_11__.CLAIM_AMOUNT, " $", _constants__WEBPACK_IMPORTED_MODULE_11__.FULL_SYM]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "",
                children: ["(*) You receive ", _constants__WEBPACK_IMPORTED_MODULE_11__.CLAIM_AMOUNT, " $", _constants__WEBPACK_IMPORTED_MODULE_11__.FULL_SYM]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "",
                children: "(*) Referral no limit bonus."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(Airdrop, "H4VTkterfA8TEZoUyTylYJ9kabs=", false, function () {
  return [_hooks_useCopy__WEBPACK_IMPORTED_MODULE_8__.default, _hooks_useRefer__WEBPACK_IMPORTED_MODULE_5__.default, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector];
});

_c = Airdrop;
/* harmony default export */ __webpack_exports__["default"] = (Airdrop);

var _c;

$RefreshReg$(_c, "Airdrop");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWlyZHJvcC9BaXJkcm9wLmpzIl0sIm5hbWVzIjpbIkFpcmRyb3AiLCJ3ZWIzIiwiY29ubmVjdCIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZUNvcHkiLCJjcCIsInVzZVJlZmVyIiwicmVmZXIiLCJoYW5kbGVDbGFpbSIsImNsYWltQWlyZHJvcCIsImhhbmRsZVRva2VuU2FsZSIsInRva2VuU2FsZSIsImhhbmRsZUNvbm5lY3QiLCJvbkNvbm5lY3QiLCJhY2NvdW50IiwidXNlU2VsZWN0b3IiLCJhY2NvdW50U2VsZWN0b3IiLCJGVUxMX1NZTSIsImUiLCJ0YXJnZXQiLCJTQUxFX0FNT1VOVCIsIkNMQUlNX0FNT1VOVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsSUFBSSxHQUFHQyx1REFBTyxFQUFwQjs7QUFEb0Isa0JBRU1DLCtDQUFRLENBQUMsSUFBRCxDQUZkO0FBQUEsTUFFYkMsS0FGYTtBQUFBLE1BRU5DLFFBRk07O0FBQUEsaUJBR1BDLHVEQUFPLEVBSEE7QUFBQTtBQUFBLE1BR2JDLEVBSGE7O0FBQUEsa0JBSUpDLHdEQUFRLEVBSko7QUFBQTtBQUFBLE1BSWJDLEtBSmE7O0FBS3BCLE1BQU1DLFdBQVc7QUFBQSw2VEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDWlQsSUFBSSxDQUFDVSxZQUFMLENBQWtCRixLQUFsQixDQURZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhDLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBR0EsTUFBTUUsZUFBZTtBQUFBLDhUQUFHO0FBQUE7QUFB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QUssNkJBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFORixlQU9FO0FBQUssNkJBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0dBLE9BQU8sZ0RBQ2tDQSxPQURsQyxJQUVKO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFtQ0U7QUFDRSx1QkFBUyxFQUFDLDJCQURaO0FBRUUsMEJBQVMsWUFGWDtBQUdFLGdDQUFlLEtBSGpCO0FBQUEsc0NBS0U7QUFBSyx5QkFBUyxFQUFDLEVBQWY7QUFBQSx5REFDNkJPLHFEQUQ3QixRQUM2Q0osaURBRDdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRixlQVFFO0FBQUsseUJBQVMsRUFBQyxFQUFmO0FBQUEsK0NBQ21CSSxxREFEbkIsUUFDbUNKLGlEQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUkYsZUFXRTtBQUFLLHlCQUFTLEVBQUMsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStIRCxDQTlJRDs7R0FBTW5CLE87VUFHU00sbUQsRUFDR0Usb0QsRUFVQVMsb0Q7OztLQWRaakIsTztBQWdKTiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNjIyMDZjMmRkZGYyYmI3ODJlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VTYWxlXCI7XG5pbXBvcnQgdXNlUmVmZXIgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVJlZmVyXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYWNjb3VudFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3NsaWNlcy9jb21tb25TbGljZVwiO1xuaW1wb3J0IHVzZUNvcHkgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUNvcHlcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb3VudGRvd24gfSBmcm9tIFwiLi4vQ291bnRkb3duXCI7XG5pbXBvcnQgeyBDTEFJTV9BTU9VTlQsIEZVTExfU1lNLCBTQUxFX0FNT1VOVCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmNvbnN0IEFpcmRyb3AgPSAoKSA9PiB7XG4gIGNvbnN0IHdlYjMgPSBjb25uZWN0KCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMC4wMSk7XG4gIGNvbnN0IFtjcF0gPSB1c2VDb3B5KCk7XG4gIGNvbnN0IFtyZWZlcl0gPSB1c2VSZWZlcigpO1xuICBjb25zdCBoYW5kbGVDbGFpbSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB3ZWIzLmNsYWltQWlyZHJvcChyZWZlcik7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVRva2VuU2FsZSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB3ZWIzLnRva2VuU2FsZShyZWZlciwgdmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHdlYjMub25Db25uZWN0KCk7XG4gIH07XG4gIGNvbnN0IGFjY291bnQgPSB1c2VTZWxlY3RvcihhY2NvdW50U2VsZWN0b3IpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZGFyay0yIGJnLW9wYWNpdHktNzBcIiBpZD1cImFpcmRyb3BcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS0xNlwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLThcIlxuICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1sZWZ0XCJcbiAgICAgICAgPlxuICAgICAgICAgICR7RlVMTF9TWU19IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGlnaHRcIj5BaXJkcm9wPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENvdW50ZG93biAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggLW14LTQgZmxleC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzIgcHgtNFwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1kYXJrIHJvdW5kZWQgcHgtOCBweS04IG1iLThcIlxuICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIlxuICAgICAgICAgICAgICBkYXRhLWFvcy1kZWxheT1cIjIwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOCB0ZXh0LTJ4bFwiPlxuICAgICAgICAgICAgICAgICR7RlVMTF9TWU19IFdpbGwgYmUgbGlzdGVkIG9uIEhvdGJpdCBhbmQgcGFuY2FrZXN3YXAgZXhjaGFuZ2VcbiAgICAgICAgICAgICAgICBhZnRlciBQcmVzYWxlIGVuZC5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBtYi0yIHRleHQtZ3JheS0zMDBcIj5FbnRlciBCTkI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktNCBib3JkZXItMiBib3JkZXItbGlnaHQgdy1mdWxsIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQteGwgdGV4dC1saWdodCB0ZXh0LTJ4bCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRva2VuU2FsZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkLXhsIGJvcmRlci0yIGJvcmRlci1saWdodCBiZy1saWdodCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6Ymctb3BhY2l0eS04MFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2FpcmRyb3AtMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy0xMiBoLTEyXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtbC0yXCI+QnV5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGFpbX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkLXhsIGJvcmRlci0yIGJvcmRlci13aGl0ZSB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9haXJkcm9wLTEucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctMTIgaC0xMlwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgbWwtMlwiPkNsYWltIEFpcmRyb3A8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWRhcmsgcm91bmRlZCBweC04IHB5LThcIlxuICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIlxuICAgICAgICAgICAgICBkYXRhLWFvcy1kZWxheT1cIjIwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgKCopIFJhdGUgU2FsZTogMC4wMSBCTkIgPSB7U0FMRV9BTU9VTlR9ICR7RlVMTF9TWU19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPigqKSBNaW5pdW0gYnV5IDAuMDEgQk5CIC0gMjAgQk5CPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgKCopIFlvdXIgZnJpZW5kcyB3aG8gYnV5IHRocm91Z2ggeW91ciBsaW5rIHJlY2VpdmUgMTAwJVxuICAgICAgICAgICAgICAgIGNvbW1pc3Npb24uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzIgcHgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWRhcmsgcm91bmRlZCBweC04IHB5LTggbWItOFwiXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIlxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWRlbGF5PVwiMjAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOCB0ZXh0LTJ4bFwiPlxuICAgICAgICAgICAgICAgICAgUmVmZXIgeW91ciBmcmllbmRzIGFuZCBjbGFpbSBib251c1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3R9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTQgcm91bmRlZC14bCBib3JkZXItMiBib3JkZXItbGlnaHQgYmctbGlnaHQgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLW9wYWNpdHktODAgbWItNFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgbWwtMlwiPkdldCBSZWZlcnJhbCBMaW5rPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktMzAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIFlvdXIgcmVmZXIgbGluazpcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktNTAwIGJnLWRhcmsgcHgtNCBweS00IHJvdW5kZWQgYnJlYWstYWxsIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICBjcChgaHR0cHM6Ly9iYWJ5c2hpYmF0b2tlbi5uZXQ/YWRkcmVzcz0ke2FjY291bnR9YClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQteHNcIj5DbGljayB0byBjb3B5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWstYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2FjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYGh0dHBzOi8vYmFieXNoaWJhdG9rZW4ubmV0P2FkZHJlc3M9JHthY2NvdW50fWBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCItLVwifVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZGFyayByb3VuZGVkIHB4LTggcHktOFwiXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kZWxheT1cIjIwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgKCopIFJlZmVycmFsIGZyaWVuZCBjbGFpbSB7Q0xBSU1fQU1PVU5UfSAke0ZVTExfU1lNfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAoKikgWW91IHJlY2VpdmUge0NMQUlNX0FNT1VOVH0gJHtGVUxMX1NZTX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPigqKSBSZWZlcnJhbCBubyBsaW1pdCBib251cy48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFpcmRyb3A7XG4iXSwic291cmNlUm9vdCI6IiJ9