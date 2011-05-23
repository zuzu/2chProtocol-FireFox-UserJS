// ==UserScript==
// @name            2chProtocol
// @namespace       http://rikuba.com/
// @include         *
// @version         0.1.3
// ==/UserScript==

var process = function () {
  var r = /^http:\/\/(?!(?:www|www2|info|find|be|epg|shop|watch|p2|boo)\.)\w+\.2ch\.net\/\w/;
  return function process(node) {
    var els = node.querySelectorAll('[href*="2ch.net"]'), el, i = 0;
    while (el = els[i++]) if (r.test(el.href)) el.protocol = 'nichannel:';
  };
}();
process(document);
document.addEventListener('DOMNodeInserted', function (e) {
  var node = e.target;
  if (node.nodeType === 1/*Node.ELEMENT_NODE*/) setTimeout(process, 16, node);
}, false);
