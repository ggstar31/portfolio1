/* Harsha Kalbalia — homepage behaviour
   1. The Record: continuous auto-scroll that bounces at both ends
   2. Hero H1: keep the nowrap headline inside its grid column          */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------------------------------------------------------------- 1 */
  /* ~75px/s on desktop, ~62px/s on mobile — the spec's 1.2px / 1.0px
     per 16ms tick, expressed as a time-based rAF so it runs the same
     on 120Hz displays. Does not pause on hover; pauses only while the
     visitor is actually dragging or wheeling the strip, so manual
     scrolling isn't fought.                                            */
  document.querySelectorAll('[data-autoscroll]').forEach(function (strip) {
    if (reduced.matches) return;

    var dir = 1;
    var pos = 0;
    var last = 0;
    var holdUntil = 0;

    function speed() {
      return window.matchMedia('(max-width: 767px)').matches ? 62.5 : 75;
    }

    function hold(ms) {
      holdUntil = performance.now() + ms;
      pos = strip.scrollLeft;
    }

    strip.addEventListener('pointerdown', function () { hold(400); });
    strip.addEventListener('pointerup', function () { hold(1200); });
    strip.addEventListener('wheel', function () { hold(1200); }, { passive: true });
    strip.addEventListener('keydown', function () { hold(3000); });

    function tick(now) {
      var dt = last ? Math.min(now - last, 100) : 0;
      last = now;

      var max = strip.scrollWidth - strip.clientWidth;
      if (max > 1 && now >= holdUntil) {
        // resync if something else moved the strip
        if (Math.abs(strip.scrollLeft - pos) > 2) pos = strip.scrollLeft;

        pos += dir * speed() * (dt / 1000);
        if (pos >= max) { pos = max; dir = -1; }
        if (pos <= 0) { pos = 0; dir = 1; }
        strip.scrollLeft = pos;
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });

  /* ---------------------------------------------------------------- 2 */
  /* The headline is one nowrap line by design. The CSS clamp gets close,
     but font metrics vary — this guarantees the line never grows wide
     enough to collide with the polaroid columns.                       */
  var title = document.querySelector('.hero__title');
  var content = title && title.parentElement;

  function fitTitle() {
    if (!title || !content) return;
    if (window.matchMedia('(max-width: 767px)').matches) {
      title.style.fontSize = '';           // mobile wraps to two lines
      return;
    }
    title.style.fontSize = '';
    var avail = content.clientWidth - 16;  // hero__content has 8px side padding
    if (avail <= 0) return;

    var size = parseFloat(getComputedStyle(title).fontSize);
    var needed = title.scrollWidth;
    if (needed > avail) {
      title.style.fontSize = Math.max(30, Math.floor(size * (avail / needed))) + 'px';
    }
  }

  var raf;
  function scheduleFit() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(fitTitle);
  }

  scheduleFit();
  window.addEventListener('resize', scheduleFit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(scheduleFit);
})();
