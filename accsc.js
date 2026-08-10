(function () {
  function Accordion(groupNode) {
    this.accListNode = groupNode;
    this.buttons = [];
    this.buttons = Array.prototype.slice.call(this.accListNode.querySelectorAll('.accordion-trigger'));
    this.accPanels = [];
    this.buttons.forEach(button => {
      const accPanel = document.getElementById(button.getAttribute('aria-controls'));
      this.accPanels.push(accPanel);
      button.addEventListener('click', this.onClick.bind(this));
    })
  }
   Accordion.prototype.onClick = function (e) {
     const target = e.currentTarget;
     const toggled = target.getAttribute('aria-expanded');
     const pannelId = target.getAttribute('aria-controls');
     const pannerEl = document.getElementById(pannelId);
     if (toggled === 'true') {
       target.setAttribute('aria-expanded', 'false');
       pannerEl.setAttribute('hidden', '');
     } else {
       this.buttons.forEach(btn => {
         btn.setAttribute('aria-expanded', 'false');
       });
       this.accPanels.forEach(accPannel => {
         accPannel.setAttribute('hidden', '');
       });
       target.setAttribute('aria-expanded', 'true');
       pannerEl.removeAttribute('hidden');
       window.scrollTo({
         top: window.innerWidth > 767 ? target.offsetTop : target.offsetTop - 50,
         behavior: 'smooth',
       });
     }
   };
  const accordions = document.querySelectorAll('.cs-accordion');
  accordions.forEach(node => {
    new Accordion(node);
  });
})();
