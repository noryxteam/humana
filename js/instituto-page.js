/**
 * Instituto Humana — página premium
 */
(function () {
  'use strict';

  function init() {
    if (window.HumanaIcons && window.HumanaIcons.mount) window.HumanaIcons.mount();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
