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
  56: "0xf7ad5b7d0e408daab2f5689103ca84d1a416ceba",
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
  56: "0xB2A8610DC60d49bB19B982B7AC9ff7CC5876828c",
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
var COUNTDOWN_DATE = 1630215744057;
var TITLE = "The Birth of ".concat(COIN_NAME, "! World's Best Community Coin");
var DESC = "".concat(COIN_NAME, " is a binary option trade let help you grow your bitcoin and earns more!");
var FULL_DESC = "".concat(COIN_NAME, " is a binary option trade let help you grow your bitcoin and earns more!. You can earns more by holding ").concat(COIN_NAME);
var ABOUT_TITLE = "";
var ABOUT_DESC = "";
var SALE_AMOUNT = "15,000,000";
var CLAIM_AMOUNT = "1,000,000";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjaGFpbklkIiwicHJvY2VzcyIsImNvbnRyYWN0QWRkcmVzcyIsImNoYXJpdHlBZGRyZXNzIiwid2JuYiIsImxwQWRkcmVzcyIsInNhbGVBZGRyZXNzIiwiQ09OVFJBQ1RfQUREUkVTUyIsIkNIQVJJVFlfQUREUkVTUyIsIldCTkJfQUREUkVTUyIsIkxQX0FERFJFU1MiLCJTQUxFX0FERFJFU1MiLCJDT0lOX05BTUUiLCJTSE9SVF9OQU1FIiwiRlVMTF9TWU0iLCJBUFBfTkFNRSIsIkNPVU5URE9XTl9EQVRFIiwiVElUTEUiLCJERVNDIiwiRlVMTF9ERVNDIiwiQUJPVVRfVElUTEUiLCJBQk9VVF9ERVNDIiwiU0FMRV9BTU9VTlQiLCJDTEFJTV9BTU9VTlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHQyxJQUFoQjtBQUNBLElBQU1DLGVBQWUsR0FBRztBQUN0QixNQUFJLDRDQURrQjtBQUV0QixNQUFJO0FBRmtCLENBQXhCO0FBSUEsSUFBTUMsY0FBYyxHQUFHO0FBQ3JCLE1BQUksNENBRGlCO0FBRXJCLE1BQUk7QUFGaUIsQ0FBdkI7QUFJQSxJQUFNQyxJQUFJLEdBQUc7QUFDWCxNQUFJLDRDQURPO0FBRVgsTUFBSTtBQUZPLENBQWI7QUFJQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEIsTUFBSSw0Q0FEWTtBQUVoQixNQUFJO0FBRlksQ0FBbEI7QUFJQSxJQUFNQyxXQUFXLEdBQUc7QUFDbEIsTUFBSSw0Q0FEYztBQUVsQixNQUFJO0FBRmMsQ0FBcEI7QUFJTyxJQUFNQyxnQkFBZ0IsR0FBR0wsZUFBZSxDQUFDRixPQUFELENBQXhDO0FBQ0EsSUFBTVEsZUFBZSxHQUFHTCxjQUFjLENBQUNILE9BQUQsQ0FBdEM7QUFDQSxJQUFNUyxZQUFZLEdBQUdMLElBQUksQ0FBQ0osT0FBRCxDQUF6QjtBQUNBLElBQU1VLFVBQVUsR0FBR0wsU0FBUyxDQUFDTCxPQUFELENBQTVCO0FBQ0EsSUFBTVcsWUFBWSxHQUFHTCxXQUFXLENBQUNOLE9BQUQsQ0FBaEM7QUFDUDtBQUVPLElBQU1ZLFNBQVMsR0FBRyxXQUFsQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxNQUFuQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxTQUFqQjtBQUNBLElBQU1DLGNBQWMsR0FBRyxhQUF2QjtBQUNBLElBQU1DLEtBQUssMEJBQW1CTCxTQUFuQixrQ0FBWDtBQUNBLElBQU1NLElBQUksYUFBTU4sU0FBTiw2RUFBVjtBQUNBLElBQU1PLFNBQVMsYUFBTVAsU0FBTixxSEFBMEhBLFNBQTFILENBQWY7QUFDQSxJQUFNUSxXQUFXLEtBQWpCO0FBQ0EsSUFBTUMsVUFBVSxLQUFoQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxZQUFwQjtBQUNBLElBQU1DLFlBQVksY0FBbEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDkzYmYzNTQzNDU4NjU0YjA5NzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNoYWluSWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DSEFJTl9JRDtcbmNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IHtcbiAgNTY6IFwiMHhmN2FkNWI3ZDBlNDA4ZGFhYjJmNTY4OTEwM2NhODRkMWE0MTZjZWJhXCIsXG4gIDk3OiBcIjB4MDVlMDFkMGUyNTJlYzBhZDAzMDBjZTE2MGQ0NWQzMDgyOGRjYjE4MVwiLFxufTtcbmNvbnN0IGNoYXJpdHlBZGRyZXNzID0ge1xuICA1NjogXCIweEFmNUZDNDAyZDlkNUVhZDk4NGFiMGI3NDI4QUQ2QkVkNTQwOGQ3MzZcIixcbiAgOTc6IFwiMHg5MmI2RTZGNjI4YjQyOGNiQjM2OGQ0MEM3QzNiMjQ3ZjczNjQzNWUyXCIsXG59O1xuY29uc3Qgd2JuYiA9IHtcbiAgNTY6IFwiMHhiYjRDZEI5Q0JkMzZCMDFiRDFjQmFFQkYyRGUwOGQ5MTczYmMwOTVjXCIsXG4gIDk3OiBcIjB4YWUxM2Q5ODlkYWMyZjBkZWJmZjQ2MGFjMTEyYTgzN2M4OWJhYTdjZFwiLFxufTtcbmNvbnN0IGxwQWRkcmVzcyA9IHtcbiAgNTY6IFwiMHg1MGFjMWRmMWU0ZTUxMGRjODc3NGFiYWE0YTRhMGJlYmZkMjcyZjJjXCIsXG4gIDk3OiBcIjB4NTNiNzUzOWVhNzQyRDE0ZENGNTExRDFhMDgzYTBBNTAzNzJlODcyQVwiLFxufTtcbmNvbnN0IHNhbGVBZGRyZXNzID0ge1xuICA1NjogXCIweEIyQTg2MTBEQzYwZDQ5YkIxOUI5ODJCN0FDOWZmN0NDNTg3NjgyOGNcIixcbiAgOTc6IFwiMHhCMkE4NjEwREM2MGQ0OWJCMTlCOTgyQjdBQzlmZjdDQzU4NzY4MjhjXCIsXG59O1xuZXhwb3J0IGNvbnN0IENPTlRSQUNUX0FERFJFU1MgPSBjb250cmFjdEFkZHJlc3NbY2hhaW5JZF07XG5leHBvcnQgY29uc3QgQ0hBUklUWV9BRERSRVNTID0gY2hhcml0eUFkZHJlc3NbY2hhaW5JZF07XG5leHBvcnQgY29uc3QgV0JOQl9BRERSRVNTID0gd2JuYltjaGFpbklkXTtcbmV4cG9ydCBjb25zdCBMUF9BRERSRVNTID0gbHBBZGRyZXNzW2NoYWluSWRdO1xuZXhwb3J0IGNvbnN0IFNBTEVfQUREUkVTUyA9IHNhbGVBZGRyZXNzW2NoYWluSWRdO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTb2NpYWxzIH0gZnJvbSBcIi4vc29jaWFsXCI7XG5cbmV4cG9ydCBjb25zdCBDT0lOX05BTUUgPSBcIkJpbmEgTW9vblwiO1xuZXhwb3J0IGNvbnN0IFNIT1JUX05BTUUgPSBcIkJpdG1cIjtcbmV4cG9ydCBjb25zdCBGVUxMX1NZTSA9IFwiQmluYU1vb25cIjtcbmV4cG9ydCBjb25zdCBBUFBfTkFNRSA9IFwiaW5hbW9vblwiO1xuZXhwb3J0IGNvbnN0IENPVU5URE9XTl9EQVRFID0gMTYzMDIxNTc0NDA1NztcbmV4cG9ydCBjb25zdCBUSVRMRSA9IGBUaGUgQmlydGggb2YgJHtDT0lOX05BTUV9ISBXb3JsZCdzIEJlc3QgQ29tbXVuaXR5IENvaW5gO1xuZXhwb3J0IGNvbnN0IERFU0MgPSBgJHtDT0lOX05BTUV9IGlzIGEgYmluYXJ5IG9wdGlvbiB0cmFkZSBsZXQgaGVscCB5b3UgZ3JvdyB5b3VyIGJpdGNvaW4gYW5kIGVhcm5zIG1vcmUhYDtcbmV4cG9ydCBjb25zdCBGVUxMX0RFU0MgPSBgJHtDT0lOX05BTUV9IGlzIGEgYmluYXJ5IG9wdGlvbiB0cmFkZSBsZXQgaGVscCB5b3UgZ3JvdyB5b3VyIGJpdGNvaW4gYW5kIGVhcm5zIG1vcmUhLiBZb3UgY2FuIGVhcm5zIG1vcmUgYnkgaG9sZGluZyAke0NPSU5fTkFNRX1gO1xuZXhwb3J0IGNvbnN0IEFCT1VUX1RJVExFID0gYGA7XG5leHBvcnQgY29uc3QgQUJPVVRfREVTQyA9IGBgO1xuZXhwb3J0IGNvbnN0IFNBTEVfQU1PVU5UID0gXCIxNSwwMDAsMDAwXCI7XG5leHBvcnQgY29uc3QgQ0xBSU1fQU1PVU5UID0gYDEsMDAwLDAwMGA7XG4iXSwic291cmNlUm9vdCI6IiJ9