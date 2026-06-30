(function () {
  document.querySelectorAll('.historia-milestone__card--media').forEach(function (card) {
    var tabs = card.querySelectorAll('.historia-milestone__panel-tab');
    var panels = card.querySelectorAll('.historia-milestone__detail-text');
    if (!tabs.length || !panels.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var id = tab.getAttribute('data-tab');

        tabs.forEach(function (item) {
          var isActive = item === tab;
          item.classList.toggle('is-active', isActive);
          item.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        panels.forEach(function (panel) {
          var isActive = panel.getAttribute('data-tab-panel') === id;
          panel.classList.toggle('is-active', isActive);
          panel.hidden = !isActive;
        });
      });
    });
  });
})();
