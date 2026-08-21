/* Case study pages, shared behaviour
   1. The full story: collapsed by default, toggled by the CTA
   2. Workstreams swipe row: pager indicator follows the scroll (mobile only) */
(function () {
  'use strict';

  /* ---------------------------------------------------------------- 1 */
  /* The article ships with the `hidden` attribute set in the markup, so the
     collapsed state is correct before any JS runs and nothing flashes. */
  var toggle = document.querySelector('[data-story-toggle]');
  var article = document.querySelector('[data-story-article]');

  if (toggle && article) {
    toggle.addEventListener('click', function () {
      var open = article.hasAttribute('hidden');
      if (open) {
        article.removeAttribute('hidden');
      } else {
        article.setAttribute('hidden', '');
      }
      toggle.textContent = open ? 'Collapse the story' : 'Read the full story';
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  /* ---------------------------------------------------------------- 2 */
  var scroller = document.querySelector('[data-ws-scroller]');
  var pager = document.querySelector('[data-ws-pager]');

  if (scroller && pager) {
    var dots = pager.querySelectorAll('span');
    var frame;

    function sync() {
      frame = 0;
      var cards = scroller.children;
      if (!cards.length) return;

      // the card whose left edge sits nearest the scroller's left edge
      var origin = scroller.getBoundingClientRect().left;
      var active = 0;
      var best = Infinity;
      for (var i = 0; i < cards.length; i++) {
        var delta = Math.abs(cards[i].getBoundingClientRect().left - origin);
        if (delta < best) { best = delta; active = i; }
      }
      for (var j = 0; j < dots.length; j++) {
        dots[j].classList.toggle('is-active', j === active);
      }
    }

    scroller.addEventListener('scroll', function () {
      if (!frame) frame = requestAnimationFrame(sync);
    }, { passive: true });
    window.addEventListener('resize', sync);
    sync();
  }
})();
