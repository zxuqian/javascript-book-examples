const slider = (function () {
  let _data = [];
  let current = 0;

  function getCurrentInRange(current) {
    return ((current % _data.length) + _data.length) % _data.length;
  }

  return {
    init(data) {
      _data = data;
    },
    next() {
      current = getCurrentInRange(current + 1);
    },
    prev() {
      current = getCurrentInRange(current - 1);
    },
    getCurrent() {
      return current;
    },
  };
})();
