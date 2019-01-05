(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var wx = global.wx;

  var NxWeappStorageAccessor = nx.declare('nx.WeappStorageAccessor', {
    methods: {
      init: function() {
        this.target = wx;
      },
      set: function(inKey, inValue) {
        this.target.setStorageSync(inKey, inValue);
      },
      get: function(inKey) {
        return this.target.getStorageSync(inKey);
      },
      remove: function(inKey) {
        this.target.removeStorageSync(inKey);
      },
      clear: function() {
        this.target.clearStorageSync();
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappStorageAccessor;
  }
})();
