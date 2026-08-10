(function () {
  class TabList {
    constructor(node) {
      this.tabs = [...node.querySelectorAll('[role=tab]')];
      this.panels = this.tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
      this.tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => this.setSelectedTab(i));
      });
    }
    setSelectedTab(index) {
      this.tabs.forEach((tab, i) => {
        const isTarget = i === index;
        const isAlreadySelected = tab.getAttribute('aria-selected') === 'true';
        const shouldSelect = isTarget && !isAlreadySelected;

        tab.setAttribute('aria-selected', shouldSelect);
        this.panels[i].classList.toggle('is-hidden', !shouldSelect);

        if (shouldSelect) {
          this.panels[i].setAttribute('tabindex', '0');
          this.panels[i].focus();
        }
      });
    }
  }

  document.querySelectorAll('[role=tablist].remote-tab-list').forEach(el => new TabList(el));
})();
  
