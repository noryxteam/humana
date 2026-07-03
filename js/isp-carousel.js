(function () {
  const track = document.getElementById('isp-logo-track');
  if (!track) return;

  const viewport = track.parentElement;
  const prevBtn = document.querySelector('[data-isp-carousel-prev]');
  const nextBtn = document.querySelector('[data-isp-carousel-next]');
  const gap = 12;
  let index = 0;

  function visibleSlides() {
    const w = window.innerWidth;
    if (w <= 576) return 1;
    if (w <= 768) return 2;
    if (w <= 980) return 3;
    if (w <= 1200) return 4;
    return 5;
  }

  function slideStep() {
    const count = visibleSlides();
    return (viewport.clientWidth + gap) / count;
  }

  function maxIndex() {
    return Math.max(0, track.children.length - visibleSlides());
  }

  function applySlideWidths() {
    const step = slideStep();
    Array.from(track.children).forEach(function (slide) {
      slide.style.flex = '0 0 ' + (step - gap) + 'px';
      slide.style.width = (step - gap) + 'px';
    });
  }

  function update() {
    applySlideWidths();
    const offset = index * slideStep();
    track.style.transform = 'translateX(' + (-offset) + 'px)';
  }

  function go(delta) {
    index = Math.min(maxIndex(), Math.max(0, index + delta));
    update();
  }

  prevBtn?.addEventListener('click', function () { go(-1); });
  nextBtn?.addEventListener('click', function () { go(1); });
  window.addEventListener('resize', function () {
    index = Math.min(index, maxIndex());
    update();
  });

  update();
})();
