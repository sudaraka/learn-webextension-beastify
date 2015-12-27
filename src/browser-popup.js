/* global $ */

(() => {
    'use strict';

    $('div.beast').on('click', (e) => {
        const selectedBeast = $('img', e.currentTarget || e.target).attr('src');

        chrome.tabs.executeScript(null, { 'file': '/src/beastify.js' });

        chrome.tabs.query({ 'active': true, 'currentWindow': true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { 'beast': selectedBeast });
        });
    });
})();
