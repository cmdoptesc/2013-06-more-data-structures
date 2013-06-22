var makeSet = function() {
  var set = Object.create(makeSet.setMethods);
  set._storage = [];
  return set;
};

makeSet.setMethods = {

  add: function() {},

  contains: function(value) {
    if (this.getIndex(value) < 0) {
      return false;
    }
    return true;
  },

  remove: function() {},

  getIndex: function(value) {
    for (var i = 0; i < this._storage.length; i++) {
      if (this._storage[i] === value) {
        return i;
      }
    }
    return -1;
  }

};