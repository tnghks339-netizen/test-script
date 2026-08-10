(function () {
  var tabs = document.querySelectorAll('[role=tab]');
  tabs.forEach(function(tab){
    tab.addEventListener('click', function() {
     alert('탭 클릭: ' + tab.textContent.trim());
    });
  });
})();
