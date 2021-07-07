self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Roadmap/Roadmap.js":
/*!*******************************************!*\
  !*** ./src/components/Roadmap/Roadmap.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/kaliz/dev/tantranlee/binamoon/src/components/Roadmap/Roadmap.js",
    _this = undefined;



var rms = [{
  t: "Phase 1 - Birth",
  c: ["Marketing push to spread awareness", "Website launch", "5000 telegram members", "Meme development", "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.COIN_NAME, " is Born!")]
}, {
  t: "Phase 2 - Crawl",
  c: ["Influencer marketing push", "Listing on coin gecko", "Listing on coin market cap", "25,000 telegram members", "25,000 holders", "Third party audit", "Voluntary donation for community + charity partnership"]
}, {
  t: "Phase 3 - Walk",
  c: ["100,000 holders", "100,000 telegram members", "Air drop #2", "Large influencer marketing push", "Listings on major cex", "More memes from community", "Credit Card For crypto live on our website."]
}, {
  t: "Phase 4 - Run",
  c: ["150,000 holders", "increase marketing", "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.COIN_NAME, " Swap"), "Add way more memes", "Website Redesign", "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.COIN_NAME, " Paw (Paw wallet growth tracker )")]
}, {
  t: "Phase 5 - Jump",
  c: ["300,000 Holders", "Release NFT market place for ".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.COIN_NAME, " Treats. Baby shiba Treats will be available to ").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.FULL_SYM, " token holders."), "Give away Tesla to promote eco-friendliness campaign of ".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.COIN_NAME, " vs ").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.SHORT_NAME, " at $250m market cap.")]
}];
var responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {
      max: 4000,
      min: 3000
    },
    items: 5
  },
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  }
};

var Roadmap = function Roadmap() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "py-16",
    id: "roadmap",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mx-auto px-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-16 text-center text-5xl font-bold text-light",
        "data-aos": "fade-right",
        children: "Roadmap"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "py-4",
        "data-aos": "zoom-in",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default()), {
          ssr: true // means to render carousel on server-side.
          ,
          infinite: true,
          responsive: responsive // autoPlay={true}
          ,
          renderButtonGroupOutside: true,
          children: [rms.map(function (val, key) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "py-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-xl -mt-4 font-bold mb-2",
                children: val.t
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "h-1 bg-gray-400 relative mb-8",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "w-4 h-4 bg-light rounded-full absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "pr-8",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "px-4 py-4 rounded bg-dark-2 relative",
                  children: val.c.map(function (c, i) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "",
                      children: c
                    }, i, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 29
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 21
              }, _this)]
            }, key, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 19
            }, _this);
          })]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, _this);
};

_c = Roadmap;
/* harmony default export */ __webpack_exports__["default"] = (Roadmap);

var _c;

$RefreshReg$(_c, "Roadmap");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUm9hZG1hcC9Sb2FkbWFwLmpzIl0sIm5hbWVzIjpbInJtcyIsInQiLCJjIiwiQ09JTl9OQU1FIiwiRlVMTF9TWU0iLCJTSE9SVF9OQU1FIiwicmVzcG9uc2l2ZSIsInN1cGVyTGFyZ2VEZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwiZGVza3RvcCIsInRhYmxldCIsIm1vYmlsZSIsIlJvYWRtYXAiLCJtYXAiLCJ2YWwiLCJrZXkiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsR0FBRyxHQUFHLENBQ1Y7QUFDRUMsR0FBQyxFQUFFLGlCQURMO0FBRUVDLEdBQUMsRUFBRSxnSEFLRUMsaURBTEY7QUFGTCxDQURVLEVBV1Y7QUFDRUYsR0FBQyxFQUFFLGlCQURMO0FBRUVDLEdBQUMsRUFBRTtBQUZMLENBWFUsRUF1QlY7QUFDRUQsR0FBQyxFQUFFLGdCQURMO0FBRUVDLEdBQUMsRUFBRTtBQUZMLENBdkJVLEVBbUNWO0FBQ0VELEdBQUMsRUFBRSxlQURMO0FBRUVDLEdBQUMsRUFBRSxvREFHRUMsaURBSEYsZ0VBTUVBLGlEQU5GO0FBRkwsQ0FuQ1UsRUE4Q1Y7QUFDRUYsR0FBQyxFQUFFLGdCQURMO0FBRUVDLEdBQUMsRUFBRSwyREFFK0JDLGlEQUYvQiw2REFFMkZDLGdEQUYzRix3RkFHMERELGlEQUgxRCxpQkFHMEVFLGtEQUgxRTtBQUZMLENBOUNVLENBQVo7QUF1REEsSUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxtQkFBaUIsRUFBRTtBQUNqQjtBQUNBQyxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBRks7QUFHakJDLFNBQUssRUFBRTtBQUhVLEdBREY7QUFNakJDLFNBQU8sRUFBRTtBQUNQSixjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBREw7QUFFUEMsU0FBSyxFQUFFO0FBRkEsR0FOUTtBQVVqQkUsUUFBTSxFQUFFO0FBQ05MLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETjtBQUVOQyxTQUFLLEVBQUU7QUFGRCxHQVZTO0FBY2pCRyxRQUFNLEVBQUU7QUFDTk4sY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxHQUFQO0FBQVlDLFNBQUcsRUFBRTtBQUFqQixLQUROO0FBRU5DLFNBQUssRUFBRTtBQUZEO0FBZFMsQ0FBbkI7O0FBbUJBLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUF1QixNQUFFLEVBQUMsU0FBMUI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx3QkFBZjtBQUFBLDhCQUNFO0FBQ0UsaUJBQVMsRUFBQyxpREFEWjtBQUVFLG9CQUFTLFlBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQXNCLG9CQUFTLFNBQS9CO0FBQUEsK0JBQ0UsOERBQUMsNkRBQUQ7QUFDRSxhQUFHLEVBQUUsSUFEUCxDQUNhO0FBRGI7QUFFRSxrQkFBUSxFQUFFLElBRlo7QUFHRSxvQkFBVSxFQUFFVCxVQUhkLENBSUU7QUFKRjtBQUtFLGtDQUF3QixFQUFFLElBTDVCO0FBQUEsb0JBT0csQ0FDQ04sR0FBRyxDQUFDZ0IsR0FBSixDQUFRLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3BCLGdDQUNFO0FBQWUsdUJBQVMsRUFBQyxNQUF6QjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyw4QkFBZjtBQUFBLDBCQUErQ0QsR0FBRyxDQUFDaEI7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUsseUJBQVMsRUFBQywrQkFBZjtBQUFBLHVDQUNFO0FBQUssMkJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLGVBS0U7QUFBSyx5QkFBUyxFQUFDLE1BQWY7QUFBQSx1Q0FDRTtBQUFLLDJCQUFTLEVBQUMsc0NBQWY7QUFBQSw0QkFDR2dCLEdBQUcsQ0FBQ2YsQ0FBSixDQUFNYyxHQUFOLENBQVUsVUFBQ2QsQ0FBRCxFQUFJaUIsQ0FBSixFQUFVO0FBQ25CLHdDQUNFO0FBQUssK0JBQVMsRUFBQyxFQUFmO0FBQUEsZ0NBQ0dqQjtBQURILHVCQUF1QmlCLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREY7QUFLRCxtQkFOQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxGO0FBQUEsZUFBVUQsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBbUJELFdBcEJELENBREQ7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZDRCxDQTlDRDs7S0FBTUgsTztBQWdETiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iY2ViNmVlZjRiMmZkYzc3ZTQ4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiO1xuaW1wb3J0IHsgQ09JTl9OQU1FLCBGVUxMX1NZTSwgU0hPUlRfTkFNRSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmNvbnN0IHJtcyA9IFtcbiAge1xuICAgIHQ6IFwiUGhhc2UgMSAtIEJpcnRoXCIsXG4gICAgYzogW1xuICAgICAgYE1hcmtldGluZyBwdXNoIHRvIHNwcmVhZCBhd2FyZW5lc3NgLFxuICAgICAgYFdlYnNpdGUgbGF1bmNoYCxcbiAgICAgIGA1MDAwIHRlbGVncmFtIG1lbWJlcnNgLFxuICAgICAgYE1lbWUgZGV2ZWxvcG1lbnRgLFxuICAgICAgYCR7Q09JTl9OQU1FfSBpcyBCb3JuIWAsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHQ6IFwiUGhhc2UgMiAtIENyYXdsXCIsXG4gICAgYzogW1xuICAgICAgYEluZmx1ZW5jZXIgbWFya2V0aW5nIHB1c2hgLFxuICAgICAgYExpc3Rpbmcgb24gY29pbiBnZWNrb2AsXG4gICAgICBgTGlzdGluZyBvbiBjb2luIG1hcmtldCBjYXBgLFxuICAgICAgYDI1LDAwMCB0ZWxlZ3JhbSBtZW1iZXJzYCxcbiAgICAgIGAyNSwwMDAgaG9sZGVyc2AsXG4gICAgICBgVGhpcmQgcGFydHkgYXVkaXRgLFxuICAgICAgYFZvbHVudGFyeSBkb25hdGlvbiBmb3IgY29tbXVuaXR5ICsgY2hhcml0eSBwYXJ0bmVyc2hpcGAsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHQ6IFwiUGhhc2UgMyAtIFdhbGtcIixcbiAgICBjOiBbXG4gICAgICBgMTAwLDAwMCBob2xkZXJzYCxcbiAgICAgIGAxMDAsMDAwIHRlbGVncmFtIG1lbWJlcnNgLFxuICAgICAgYEFpciBkcm9wICMyYCxcbiAgICAgIGBMYXJnZSBpbmZsdWVuY2VyIG1hcmtldGluZyBwdXNoYCxcbiAgICAgIGBMaXN0aW5ncyBvbiBtYWpvciBjZXhgLFxuICAgICAgYE1vcmUgbWVtZXMgZnJvbSBjb21tdW5pdHlgLFxuICAgICAgYENyZWRpdCBDYXJkIEZvciBjcnlwdG8gbGl2ZSBvbiBvdXIgd2Vic2l0ZS5gLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0OiBcIlBoYXNlIDQgLSBSdW5cIixcbiAgICBjOiBbXG4gICAgICBgMTUwLDAwMCBob2xkZXJzYCxcbiAgICAgIGBpbmNyZWFzZSBtYXJrZXRpbmdgLFxuICAgICAgYCR7Q09JTl9OQU1FfSBTd2FwYCxcbiAgICAgIGBBZGQgd2F5IG1vcmUgbWVtZXNgLFxuICAgICAgYFdlYnNpdGUgUmVkZXNpZ25gLFxuICAgICAgYCR7Q09JTl9OQU1FfSBQYXcgKFBhdyB3YWxsZXQgZ3Jvd3RoIHRyYWNrZXIgKWAsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHQ6IFwiUGhhc2UgNSAtIEp1bXBcIixcbiAgICBjOiBbXG4gICAgICBgMzAwLDAwMCBIb2xkZXJzYCxcbiAgICAgIGBSZWxlYXNlIE5GVCBtYXJrZXQgcGxhY2UgZm9yICR7Q09JTl9OQU1FfSBUcmVhdHMuIEJhYnkgc2hpYmEgVHJlYXRzIHdpbGwgYmUgYXZhaWxhYmxlIHRvICR7RlVMTF9TWU19IHRva2VuIGhvbGRlcnMuYCxcbiAgICAgIGBHaXZlIGF3YXkgVGVzbGEgdG8gcHJvbW90ZSBlY28tZnJpZW5kbGluZXNzIGNhbXBhaWduIG9mICR7Q09JTl9OQU1FfSB2cyAke1NIT1JUX05BTUV9IGF0ICQyNTBtIG1hcmtldCBjYXAuYCxcbiAgICBdLFxuICB9LFxuXTtcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gIHN1cGVyTGFyZ2VEZXNrdG9wOiB7XG4gICAgLy8gdGhlIG5hbWluZyBjYW4gYmUgYW55LCBkZXBlbmRzIG9uIHlvdS5cbiAgICBicmVha3BvaW50OiB7IG1heDogNDAwMCwgbWluOiAzMDAwIH0sXG4gICAgaXRlbXM6IDUsXG4gIH0sXG4gIGRlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXG4gICAgaXRlbXM6IDMsXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxuICAgIGl0ZW1zOiAyLFxuICB9LFxuICBtb2JpbGU6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogNDY0LCBtaW46IDAgfSxcbiAgICBpdGVtczogMSxcbiAgfSxcbn07XG5jb25zdCBSb2FkbWFwID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTZcIiBpZD1cInJvYWRtYXBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItMTYgdGV4dC1jZW50ZXIgdGV4dC01eGwgZm9udC1ib2xkIHRleHQtbGlnaHRcIlxuICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiXG4gICAgICAgID5cbiAgICAgICAgICBSb2FkbWFwXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIiBkYXRhLWFvcz1cInpvb20taW5cIj5cbiAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgIHNzcj17dHJ1ZX0gLy8gbWVhbnMgdG8gcmVuZGVyIGNhcm91c2VsIG9uIHNlcnZlci1zaWRlLlxuICAgICAgICAgICAgaW5maW5pdGU9e3RydWV9XG4gICAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICAgICAgLy8gYXV0b1BsYXk9e3RydWV9XG4gICAgICAgICAgICByZW5kZXJCdXR0b25Hcm91cE91dHNpZGU9e3RydWV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgcm1zLm1hcCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwicHktNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgLW10LTQgZm9udC1ib2xkIG1iLTJcIj57dmFsLnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xIGJnLWdyYXktNDAwIHJlbGF0aXZlIG1iLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNCBoLTQgYmctbGlnaHQgcm91bmRlZC1mdWxsIGFic29sdXRlIGxlZnQtMS8yIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgLXRyYW5zbGF0ZS14LTFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItOFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS00IHJvdW5kZWQgYmctZGFyay0yIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsLmMubWFwKChjLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvYWRtYXA7XG4iXSwic291cmNlUm9vdCI6IiJ9