// ==UserScript==
// @name         youtube-hide-card
// @namespace    https://github.com/kairi003/
// @version      1.1
// @description  Hide card on video at youtube.com
// @author       kairi003
// @match        *://www.youtube.com/watch?*
// @updateURL    https://github.com/kairi003/youtube-hide-card/raw/master/youtube-hide-card.user.js
// @downloadURL  https://github.com/kairi003/youtube-hide-card/raw/master/youtube-hide-card.user.js
// @grant        none
// @run-at       document-start
// @icon         https://www.youtube.com/favicon.ico
// ==/UserScript==

{
  'use strict';
  const main = () => {
    document.body.insertAdjacentHTML('afterBegin', '<style>.ytp-ce-element{display:none;}</style>');
  }
  if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', main);
  } else {
    main();
  }
}