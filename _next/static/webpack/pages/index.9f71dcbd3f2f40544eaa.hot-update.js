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
                className: "text-xl -mt-4 font-bold mb-2 text-gray-500",
                children: val.t
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "h-1 bg-gray-700 relative mb-8",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "w-4 h-4 bg-light rounded-full absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
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
                      lineNumber: 109,
                      columnNumber: 29
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUm9hZG1hcC9Sb2FkbWFwLmpzIl0sIm5hbWVzIjpbInJtcyIsInQiLCJjIiwiQ09JTl9OQU1FIiwiRlVMTF9TWU0iLCJTSE9SVF9OQU1FIiwicmVzcG9uc2l2ZSIsInN1cGVyTGFyZ2VEZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwiZGVza3RvcCIsInRhYmxldCIsIm1vYmlsZSIsIlJvYWRtYXAiLCJtYXAiLCJ2YWwiLCJrZXkiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsR0FBRyxHQUFHLENBQ1Y7QUFDRUMsR0FBQyxFQUFFLGlCQURMO0FBRUVDLEdBQUMsRUFBRSxnSEFLRUMsaURBTEY7QUFGTCxDQURVLEVBV1Y7QUFDRUYsR0FBQyxFQUFFLGlCQURMO0FBRUVDLEdBQUMsRUFBRTtBQUZMLENBWFUsRUF1QlY7QUFDRUQsR0FBQyxFQUFFLGdCQURMO0FBRUVDLEdBQUMsRUFBRTtBQUZMLENBdkJVLEVBbUNWO0FBQ0VELEdBQUMsRUFBRSxlQURMO0FBRUVDLEdBQUMsRUFBRSxvREFHRUMsaURBSEYsZ0VBTUVBLGlEQU5GO0FBRkwsQ0FuQ1UsRUE4Q1Y7QUFDRUYsR0FBQyxFQUFFLGdCQURMO0FBRUVDLEdBQUMsRUFBRSwyREFFK0JDLGlEQUYvQiw2REFFMkZDLGdEQUYzRix3RkFHMERELGlEQUgxRCxpQkFHMEVFLGtEQUgxRTtBQUZMLENBOUNVLENBQVo7QUF1REEsSUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxtQkFBaUIsRUFBRTtBQUNqQjtBQUNBQyxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBRks7QUFHakJDLFNBQUssRUFBRTtBQUhVLEdBREY7QUFNakJDLFNBQU8sRUFBRTtBQUNQSixjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBREw7QUFFUEMsU0FBSyxFQUFFO0FBRkEsR0FOUTtBQVVqQkUsUUFBTSxFQUFFO0FBQ05MLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETjtBQUVOQyxTQUFLLEVBQUU7QUFGRCxHQVZTO0FBY2pCRyxRQUFNLEVBQUU7QUFDTk4sY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxHQUFQO0FBQVlDLFNBQUcsRUFBRTtBQUFqQixLQUROO0FBRU5DLFNBQUssRUFBRTtBQUZEO0FBZFMsQ0FBbkI7O0FBbUJBLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUF1QixNQUFFLEVBQUMsU0FBMUI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx3QkFBZjtBQUFBLDhCQUNFO0FBQ0UsaUJBQVMsRUFBQyxpREFEWjtBQUVFLG9CQUFTLFlBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQXNCLG9CQUFTLFNBQS9CO0FBQUEsK0JBQ0UsOERBQUMsNkRBQUQ7QUFDRSxhQUFHLEVBQUUsSUFEUCxDQUNhO0FBRGI7QUFFRSxrQkFBUSxFQUFFLElBRlo7QUFHRSxvQkFBVSxFQUFFVCxVQUhkLENBSUU7QUFKRjtBQUtFLGtDQUF3QixFQUFFLElBTDVCO0FBQUEsb0JBT0csQ0FDQ04sR0FBRyxDQUFDZ0IsR0FBSixDQUFRLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3BCLGdDQUNFO0FBQWUsdUJBQVMsRUFBQyxNQUF6QjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyw0Q0FBZjtBQUFBLDBCQUNHRCxHQUFHLENBQUNoQjtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFLLHlCQUFTLEVBQUMsK0JBQWY7QUFBQSx1Q0FDRTtBQUFLLDJCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixlQU9FO0FBQUsseUJBQVMsRUFBQyxNQUFmO0FBQUEsdUNBQ0U7QUFBSywyQkFBUyxFQUFDLHNDQUFmO0FBQUEsNEJBQ0dnQixHQUFHLENBQUNmLENBQUosQ0FBTWMsR0FBTixDQUFVLFVBQUNkLENBQUQsRUFBSWlCLENBQUosRUFBVTtBQUNuQix3Q0FDRTtBQUFLLCtCQUFTLEVBQUMsRUFBZjtBQUFBLGdDQUNHakI7QUFESCx1QkFBdUJpQixDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGO0FBS0QsbUJBTkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQRjtBQUFBLGVBQVVELEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQXFCRCxXQXRCRCxDQUREO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQ0QsQ0FoREQ7O0tBQU1ILE87QUFrRE4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWY3MWRjYmQzZjJmNDA1NDRlYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIjtcbmltcG9ydCB7IENPSU5fTkFNRSwgRlVMTF9TWU0sIFNIT1JUX05BTUUgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5jb25zdCBybXMgPSBbXG4gIHtcbiAgICB0OiBcIlBoYXNlIDEgLSBCaXJ0aFwiLFxuICAgIGM6IFtcbiAgICAgIGBNYXJrZXRpbmcgcHVzaCB0byBzcHJlYWQgYXdhcmVuZXNzYCxcbiAgICAgIGBXZWJzaXRlIGxhdW5jaGAsXG4gICAgICBgNTAwMCB0ZWxlZ3JhbSBtZW1iZXJzYCxcbiAgICAgIGBNZW1lIGRldmVsb3BtZW50YCxcbiAgICAgIGAke0NPSU5fTkFNRX0gaXMgQm9ybiFgLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0OiBcIlBoYXNlIDIgLSBDcmF3bFwiLFxuICAgIGM6IFtcbiAgICAgIGBJbmZsdWVuY2VyIG1hcmtldGluZyBwdXNoYCxcbiAgICAgIGBMaXN0aW5nIG9uIGNvaW4gZ2Vja29gLFxuICAgICAgYExpc3Rpbmcgb24gY29pbiBtYXJrZXQgY2FwYCxcbiAgICAgIGAyNSwwMDAgdGVsZWdyYW0gbWVtYmVyc2AsXG4gICAgICBgMjUsMDAwIGhvbGRlcnNgLFxuICAgICAgYFRoaXJkIHBhcnR5IGF1ZGl0YCxcbiAgICAgIGBWb2x1bnRhcnkgZG9uYXRpb24gZm9yIGNvbW11bml0eSArIGNoYXJpdHkgcGFydG5lcnNoaXBgLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0OiBcIlBoYXNlIDMgLSBXYWxrXCIsXG4gICAgYzogW1xuICAgICAgYDEwMCwwMDAgaG9sZGVyc2AsXG4gICAgICBgMTAwLDAwMCB0ZWxlZ3JhbSBtZW1iZXJzYCxcbiAgICAgIGBBaXIgZHJvcCAjMmAsXG4gICAgICBgTGFyZ2UgaW5mbHVlbmNlciBtYXJrZXRpbmcgcHVzaGAsXG4gICAgICBgTGlzdGluZ3Mgb24gbWFqb3IgY2V4YCxcbiAgICAgIGBNb3JlIG1lbWVzIGZyb20gY29tbXVuaXR5YCxcbiAgICAgIGBDcmVkaXQgQ2FyZCBGb3IgY3J5cHRvIGxpdmUgb24gb3VyIHdlYnNpdGUuYCxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdDogXCJQaGFzZSA0IC0gUnVuXCIsXG4gICAgYzogW1xuICAgICAgYDE1MCwwMDAgaG9sZGVyc2AsXG4gICAgICBgaW5jcmVhc2UgbWFya2V0aW5nYCxcbiAgICAgIGAke0NPSU5fTkFNRX0gU3dhcGAsXG4gICAgICBgQWRkIHdheSBtb3JlIG1lbWVzYCxcbiAgICAgIGBXZWJzaXRlIFJlZGVzaWduYCxcbiAgICAgIGAke0NPSU5fTkFNRX0gUGF3IChQYXcgd2FsbGV0IGdyb3d0aCB0cmFja2VyIClgLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0OiBcIlBoYXNlIDUgLSBKdW1wXCIsXG4gICAgYzogW1xuICAgICAgYDMwMCwwMDAgSG9sZGVyc2AsXG4gICAgICBgUmVsZWFzZSBORlQgbWFya2V0IHBsYWNlIGZvciAke0NPSU5fTkFNRX0gVHJlYXRzLiBCYWJ5IHNoaWJhIFRyZWF0cyB3aWxsIGJlIGF2YWlsYWJsZSB0byAke0ZVTExfU1lNfSB0b2tlbiBob2xkZXJzLmAsXG4gICAgICBgR2l2ZSBhd2F5IFRlc2xhIHRvIHByb21vdGUgZWNvLWZyaWVuZGxpbmVzcyBjYW1wYWlnbiBvZiAke0NPSU5fTkFNRX0gdnMgJHtTSE9SVF9OQU1FfSBhdCAkMjUwbSBtYXJrZXQgY2FwLmAsXG4gICAgXSxcbiAgfSxcbl07XG5jb25zdCByZXNwb25zaXZlID0ge1xuICBzdXBlckxhcmdlRGVza3RvcDoge1xuICAgIC8vIHRoZSBuYW1pbmcgY2FuIGJlIGFueSwgZGVwZW5kcyBvbiB5b3UuXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDQwMDAsIG1pbjogMzAwMCB9LFxuICAgIGl0ZW1zOiA1LFxuICB9LFxuICBkZXNrdG9wOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxuICAgIGl0ZW1zOiAzLFxuICB9LFxuICB0YWJsZXQ6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA0NjQgfSxcbiAgICBpdGVtczogMixcbiAgfSxcbiAgbW9iaWxlOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDQ2NCwgbWluOiAwIH0sXG4gICAgaXRlbXM6IDEsXG4gIH0sXG59O1xuY29uc3QgUm9hZG1hcCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTE2XCIgaWQ9XCJyb2FkbWFwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTE2IHRleHQtY2VudGVyIHRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWxpZ2h0XCJcbiAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIlxuICAgICAgICA+XG4gICAgICAgICAgUm9hZG1hcFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCIgZGF0YS1hb3M9XCJ6b29tLWluXCI+XG4gICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICBzc3I9e3RydWV9IC8vIG1lYW5zIHRvIHJlbmRlciBjYXJvdXNlbCBvbiBzZXJ2ZXItc2lkZS5cbiAgICAgICAgICAgIGluZmluaXRlPXt0cnVlfVxuICAgICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgICAgIC8vIGF1dG9QbGF5PXt0cnVlfVxuICAgICAgICAgICAgcmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlPXt0cnVlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHJtcy5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cInB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIC1tdC00IGZvbnQtYm9sZCBtYi0yIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsLnR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMSBiZy1ncmF5LTcwMCByZWxhdGl2ZSBtYi04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQgaC00IGJnLWxpZ2h0IHJvdW5kZWQtZnVsbCBhYnNvbHV0ZSBsZWZ0LTEvMiB0b3AtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIC10cmFuc2xhdGUteC0xXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktNCByb3VuZGVkIGJnLWRhcmstMiByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbC5jLm1hcCgoYywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdfVxuICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb2FkbWFwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==