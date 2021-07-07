self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTRACT_ADDRESS": function() { return /* binding */ CONTRACT_ADDRESS; },
/* harmony export */   "CHARITY_ADDRESS": function() { return /* binding */ CHARITY_ADDRESS; },
/* harmony export */   "WBNB_ADDRESS": function() { return /* binding */ WBNB_ADDRESS; },
/* harmony export */   "LP_ADDRESS": function() { return /* binding */ LP_ADDRESS; },
/* harmony export */   "SALE_ADDRESS": function() { return /* binding */ SALE_ADDRESS; },
/* harmony export */   "Socials": function() { return /* reexport safe */ _social__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "COIN_NAME": function() { return /* binding */ COIN_NAME; },
/* harmony export */   "SHORT_NAME": function() { return /* binding */ SHORT_NAME; },
/* harmony export */   "FULL_SYM": function() { return /* binding */ FULL_SYM; },
/* harmony export */   "APP_NAME": function() { return /* binding */ APP_NAME; },
/* harmony export */   "COUNTDOWN_DATE": function() { return /* binding */ COUNTDOWN_DATE; },
/* harmony export */   "TITLE": function() { return /* binding */ TITLE; },
/* harmony export */   "DESC": function() { return /* binding */ DESC; },
/* harmony export */   "FULL_DESC": function() { return /* binding */ FULL_DESC; },
/* harmony export */   "ABOUT_TITLE": function() { return /* binding */ ABOUT_TITLE; },
/* harmony export */   "ABOUT_DESC": function() { return /* binding */ ABOUT_DESC; },
/* harmony export */   "SALE_AMOUNT": function() { return /* binding */ SALE_AMOUNT; },
/* harmony export */   "CLAIM_AMOUNT": function() { return /* binding */ CLAIM_AMOUNT; }
/* harmony export */ });
/* harmony import */ var _social__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social */ "./src/constants/social.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var chainId = "97";
var contractAddress = {
  56: "0xe2acca9c6dcbe2a718c4036695ed31bc116baee1",
  97: "0x05e01d0e252ec0ad0300ce160d45d30828dcb181"
};
var charityAddress = {
  56: "0xAf5FC402d9d5Ead984ab0b7428AD6BEd5408d736",
  97: "0x92b6E6F628b428cbB368d40C7C3b247f736435e2"
};
var wbnb = {
  56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  97: "0xae13d989dac2f0debff460ac112a837c89baa7cd"
};
var lpAddress = {
  56: "0x50ac1df1e4e510dc8774abaa4a4a0bebfd272f2c",
  97: "0x53b7539ea742D14dCF511D1a083a0A50372e872A"
};
var saleAddress = {
  56: "0x2faDD578E8c7F47Fbf94A7794Ae1C10fCE0068DD",
  97: "0xB2A8610DC60d49bB19B982B7AC9ff7CC5876828c"
};
var CONTRACT_ADDRESS = contractAddress[chainId];
var CHARITY_ADDRESS = charityAddress[chainId];
var WBNB_ADDRESS = wbnb[chainId];
var LP_ADDRESS = lpAddress[chainId];
var SALE_ADDRESS = saleAddress[chainId];

var COIN_NAME = "Bina Moon";
var SHORT_NAME = "Bitm";
var FULL_SYM = "BinaMoon";
var APP_NAME = "inamoon";
var COUNTDOWN_DATE = 1630823349001;
var TITLE = "The Birth of ".concat(COIN_NAME, "! World's Best Community Coin");
var DESC = "".concat(COIN_NAME, " is a binary option trade let help you grow your bitcoin and earns more!");
var FULL_DESC = "".concat(COIN_NAME, " is a binary option trade let help you grow your bitcoin and earns more!. You can earns more by holding ").concat(COIN_NAME);
var ABOUT_TITLE = "Bina Moon - Eans more by holding";
var ABOUT_DESC = "Bina Moon is very giving and is designed to reward long term holders. Community is first and foremost. Bina Moon is proud to run with his father and provide transparency and fairness to the community.";
var SALE_AMOUNT = "25,000";
var CLAIM_AMOUNT = "5,000";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjaGFpbklkIiwicHJvY2VzcyIsImNvbnRyYWN0QWRkcmVzcyIsImNoYXJpdHlBZGRyZXNzIiwid2JuYiIsImxwQWRkcmVzcyIsInNhbGVBZGRyZXNzIiwiQ09OVFJBQ1RfQUREUkVTUyIsIkNIQVJJVFlfQUREUkVTUyIsIldCTkJfQUREUkVTUyIsIkxQX0FERFJFU1MiLCJTQUxFX0FERFJFU1MiLCJDT0lOX05BTUUiLCJTSE9SVF9OQU1FIiwiRlVMTF9TWU0iLCJBUFBfTkFNRSIsIkNPVU5URE9XTl9EQVRFIiwiVElUTEUiLCJERVNDIiwiRlVMTF9ERVNDIiwiQUJPVVRfVElUTEUiLCJBQk9VVF9ERVNDIiwiU0FMRV9BTU9VTlQiLCJDTEFJTV9BTU9VTlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHQyxJQUFoQjtBQUNBLElBQU1DLGVBQWUsR0FBRztBQUN0QixNQUFJLDRDQURrQjtBQUV0QixNQUFJO0FBRmtCLENBQXhCO0FBSUEsSUFBTUMsY0FBYyxHQUFHO0FBQ3JCLE1BQUksNENBRGlCO0FBRXJCLE1BQUk7QUFGaUIsQ0FBdkI7QUFJQSxJQUFNQyxJQUFJLEdBQUc7QUFDWCxNQUFJLDRDQURPO0FBRVgsTUFBSTtBQUZPLENBQWI7QUFJQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEIsTUFBSSw0Q0FEWTtBQUVoQixNQUFJO0FBRlksQ0FBbEI7QUFJQSxJQUFNQyxXQUFXLEdBQUc7QUFDbEIsTUFBSSw0Q0FEYztBQUVsQixNQUFJO0FBRmMsQ0FBcEI7QUFJTyxJQUFNQyxnQkFBZ0IsR0FBR0wsZUFBZSxDQUFDRixPQUFELENBQXhDO0FBQ0EsSUFBTVEsZUFBZSxHQUFHTCxjQUFjLENBQUNILE9BQUQsQ0FBdEM7QUFDQSxJQUFNUyxZQUFZLEdBQUdMLElBQUksQ0FBQ0osT0FBRCxDQUF6QjtBQUNBLElBQU1VLFVBQVUsR0FBR0wsU0FBUyxDQUFDTCxPQUFELENBQTVCO0FBQ0EsSUFBTVcsWUFBWSxHQUFHTCxXQUFXLENBQUNOLE9BQUQsQ0FBaEM7QUFDUDtBQUVPLElBQU1ZLFNBQVMsR0FBRyxXQUFsQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxNQUFuQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxTQUFqQjtBQUNBLElBQU1DLGNBQWMsR0FBRyxhQUF2QjtBQUNBLElBQU1DLEtBQUssMEJBQW1CTCxTQUFuQixrQ0FBWDtBQUNBLElBQU1NLElBQUksYUFBTU4sU0FBTiw2RUFBVjtBQUNBLElBQU1PLFNBQVMsYUFBTVAsU0FBTixxSEFBMEhBLFNBQTFILENBQWY7QUFDQSxJQUFNUSxXQUFXLHFDQUFqQjtBQUNBLElBQU1DLFVBQVUsNk1BQWhCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFFBQXBCO0FBQ0EsSUFBTUMsWUFBWSxVQUFsQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hOTRhODQ1MTI4NzgzNGIwMTgxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2hhaW5JZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NIQUlOX0lEO1xuY29uc3QgY29udHJhY3RBZGRyZXNzID0ge1xuICA1NjogXCIweGUyYWNjYTljNmRjYmUyYTcxOGM0MDM2Njk1ZWQzMWJjMTE2YmFlZTFcIixcbiAgOTc6IFwiMHgwNWUwMWQwZTI1MmVjMGFkMDMwMGNlMTYwZDQ1ZDMwODI4ZGNiMTgxXCIsXG59O1xuY29uc3QgY2hhcml0eUFkZHJlc3MgPSB7XG4gIDU2OiBcIjB4QWY1RkM0MDJkOWQ1RWFkOTg0YWIwYjc0MjhBRDZCRWQ1NDA4ZDczNlwiLFxuICA5NzogXCIweDkyYjZFNkY2MjhiNDI4Y2JCMzY4ZDQwQzdDM2IyNDdmNzM2NDM1ZTJcIixcbn07XG5jb25zdCB3Ym5iID0ge1xuICA1NjogXCIweGJiNENkQjlDQmQzNkIwMWJEMWNCYUVCRjJEZTA4ZDkxNzNiYzA5NWNcIixcbiAgOTc6IFwiMHhhZTEzZDk4OWRhYzJmMGRlYmZmNDYwYWMxMTJhODM3Yzg5YmFhN2NkXCIsXG59O1xuY29uc3QgbHBBZGRyZXNzID0ge1xuICA1NjogXCIweDUwYWMxZGYxZTRlNTEwZGM4Nzc0YWJhYTRhNGEwYmViZmQyNzJmMmNcIixcbiAgOTc6IFwiMHg1M2I3NTM5ZWE3NDJEMTRkQ0Y1MTFEMWEwODNhMEE1MDM3MmU4NzJBXCIsXG59O1xuY29uc3Qgc2FsZUFkZHJlc3MgPSB7XG4gIDU2OiBcIjB4MmZhREQ1NzhFOGM3RjQ3RmJmOTRBNzc5NEFlMUMxMGZDRTAwNjhERFwiLFxuICA5NzogXCIweEIyQTg2MTBEQzYwZDQ5YkIxOUI5ODJCN0FDOWZmN0NDNTg3NjgyOGNcIixcbn07XG5leHBvcnQgY29uc3QgQ09OVFJBQ1RfQUREUkVTUyA9IGNvbnRyYWN0QWRkcmVzc1tjaGFpbklkXTtcbmV4cG9ydCBjb25zdCBDSEFSSVRZX0FERFJFU1MgPSBjaGFyaXR5QWRkcmVzc1tjaGFpbklkXTtcbmV4cG9ydCBjb25zdCBXQk5CX0FERFJFU1MgPSB3Ym5iW2NoYWluSWRdO1xuZXhwb3J0IGNvbnN0IExQX0FERFJFU1MgPSBscEFkZHJlc3NbY2hhaW5JZF07XG5leHBvcnQgY29uc3QgU0FMRV9BRERSRVNTID0gc2FsZUFkZHJlc3NbY2hhaW5JZF07XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNvY2lhbHMgfSBmcm9tIFwiLi9zb2NpYWxcIjtcblxuZXhwb3J0IGNvbnN0IENPSU5fTkFNRSA9IFwiQmluYSBNb29uXCI7XG5leHBvcnQgY29uc3QgU0hPUlRfTkFNRSA9IFwiQml0bVwiO1xuZXhwb3J0IGNvbnN0IEZVTExfU1lNID0gXCJCaW5hTW9vblwiO1xuZXhwb3J0IGNvbnN0IEFQUF9OQU1FID0gXCJpbmFtb29uXCI7XG5leHBvcnQgY29uc3QgQ09VTlRET1dOX0RBVEUgPSAxNjMwODIzMzQ5MDAxO1xuZXhwb3J0IGNvbnN0IFRJVExFID0gYFRoZSBCaXJ0aCBvZiAke0NPSU5fTkFNRX0hIFdvcmxkJ3MgQmVzdCBDb21tdW5pdHkgQ29pbmA7XG5leHBvcnQgY29uc3QgREVTQyA9IGAke0NPSU5fTkFNRX0gaXMgYSBiaW5hcnkgb3B0aW9uIHRyYWRlIGxldCBoZWxwIHlvdSBncm93IHlvdXIgYml0Y29pbiBhbmQgZWFybnMgbW9yZSFgO1xuZXhwb3J0IGNvbnN0IEZVTExfREVTQyA9IGAke0NPSU5fTkFNRX0gaXMgYSBiaW5hcnkgb3B0aW9uIHRyYWRlIGxldCBoZWxwIHlvdSBncm93IHlvdXIgYml0Y29pbiBhbmQgZWFybnMgbW9yZSEuIFlvdSBjYW4gZWFybnMgbW9yZSBieSBob2xkaW5nICR7Q09JTl9OQU1FfWA7XG5leHBvcnQgY29uc3QgQUJPVVRfVElUTEUgPSBgQmluYSBNb29uIC0gRWFucyBtb3JlIGJ5IGhvbGRpbmdgO1xuZXhwb3J0IGNvbnN0IEFCT1VUX0RFU0MgPSBgQmluYSBNb29uIGlzIHZlcnkgZ2l2aW5nIGFuZCBpcyBkZXNpZ25lZCB0byByZXdhcmQgbG9uZyB0ZXJtIGhvbGRlcnMuIENvbW11bml0eSBpcyBmaXJzdCBhbmQgZm9yZW1vc3QuIEJpbmEgTW9vbiBpcyBwcm91ZCB0byBydW4gd2l0aCBoaXMgZmF0aGVyIGFuZCBwcm92aWRlIHRyYW5zcGFyZW5jeSBhbmQgZmFpcm5lc3MgdG8gdGhlIGNvbW11bml0eS5gO1xuZXhwb3J0IGNvbnN0IFNBTEVfQU1PVU5UID0gXCIyNSwwMDBcIjtcbmV4cG9ydCBjb25zdCBDTEFJTV9BTU9VTlQgPSBgNSwwMDBgO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==