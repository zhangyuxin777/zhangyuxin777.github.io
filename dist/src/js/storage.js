'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  notZero: function notZero(val) {
    if (val != undefined && val != null && val.length != 0) {
      return true;
    } else {
      console.warn('the key is undefined or null');
      return false;
    }
  },
  hasVal: function hasVal(val) {
    if (val != undefined && val != null) {
      return true;
    } else {
      console.warn('the value is undefined or null');
      return false;
    }
  },
  setL: function setL(key, val) {
    if (this.notZero(key) && this.hasVal(val)) {
      l.setItem(key, toStr(val));
    }
  },
  getL: function getL(key) {
    if (this.notZero(key)) {
      return toJson(l.getItem(key));
    }
    return null;
  },
  cleanL: function cleanL(key) {
    if (this.notZero(key)) {
      l.removeItem(key);
    }
  },
  setS: function setS(key, val) {
    if (this.notZero(key) && this.hasVal(val)) {
      s.setItem(key, toStr(val));
    }
  },
  getS: function getS(key) {
    if (this.notZero(key)) {
      return toJson(s.getItem(key));
    }
    return null;
  },
  cleanS: function cleanS(key) {
    if (this.notZero(key)) {
      s.removeItem(key);
    }
  }
};

var l = window.localStorage;
var s = window.sessionStorage;
var toJson = JSON.parse;
var toStr = _stringify2.default;
//# sourceMappingURL=storage.js.map