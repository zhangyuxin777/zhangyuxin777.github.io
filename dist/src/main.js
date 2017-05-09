'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _rock = require('./js/rock');

var _rock2 = _interopRequireDefault(_rock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false;
_vue2.default.use(_vueResource2.default);
_vue2.default.use(_vuex2.default);
_rock2.default.autoSize();

new _vue2.default({
  el: '#app',
  router: _router2.default,
  store: _store2.default,
  template: '<App/>',
  components: { App: _App2.default }
});
//# sourceMappingURL=main.js.map