(function() {
  var setClass;

  setClass = function(elementId, newClass) {
    var element;
    element = document.getElementById(elementId);
    return element.className = newClass;
  };

  window.onmousemove = function(event) {
    if (event.clientX < 200) {
      setClass('menu', 'menu revealed');
      return setClass('content', 'content revealed');
    } else {
      setClass('menu', 'menu');
      return setClass('content', 'content');
    }
  };

}).call(this);
