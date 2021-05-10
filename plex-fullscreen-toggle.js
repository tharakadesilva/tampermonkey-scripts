// ==UserScript==
// @name         Plex | Fullscreen Toggle
// @namespace    https://github.com/tharakadesilva/tampermonkey-scripts
// @version      0.1
// @author       Tharaka De Silva
// @match        https://app.plex.tv/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', event => {
        if (event.key != 'f') {
            return;
        }

        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.getElementsByTagName("video")[0].requestFullscreen();
        }
    });
})();
