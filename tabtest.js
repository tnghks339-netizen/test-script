(function () {
  var tabs = document.querySelectorAll('[role=tab]');
  tabs.foreach (function(tab) { tab.style.outline = '3px solid red'; });
})();
