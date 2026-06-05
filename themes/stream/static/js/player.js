/* stream.wenzl.no – minimální JS bez externích závislostí */

function toggleEmbed() {
  var box = document.getElementById('embed-box');
  var btn = document.getElementById('embed-btn');
  if (!box) return;
  var isOpen = box.classList.toggle('is-open');
  btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  if (isOpen) {
    var textarea = box.querySelector('textarea');
    if (textarea) { textarea.focus(); textarea.select(); }
  }
}

function copyLink(e, el) {
  e.preventDefault();
  var url = el.dataset.url || window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(function () {
      var orig = el.innerHTML;
      el.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg> Zkopírováno!';
      setTimeout(function () { el.innerHTML = orig; }, 2000);
    });
  }
}
