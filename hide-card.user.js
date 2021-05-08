// ==UserScript==
// @name         hide-card
// @namespace    https://github.com/kairi003/
// @version      1.0
// @description  Hide card on video at youtube.com
// @author       kairi003
// @match        http://https://www.youtube.com/watch?*
// @updateURL    https://raw.githubusercontent.com/kairi003/hide-card/hide-card.user.js
// @downloadURL  https://raw.githubusercontent.com/kairi003/hide-card/hide-card.user.js
// @grant        none
// @run-at       document-start
// @icon         https://www.youtube.com/favicon.ico
// ==/UserScript==

(function() {
  'use strict';
  const main = () => {
    document.body.insertAdjacentHTML('afterBegin', '<style>.ytp-ce-element{display:none;}</style>');
  }
  if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', main);
  } else {
    main();
  }
})();