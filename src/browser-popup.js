/* global $ */

(() => {
    'use strict';

    $('div.beast').on('click', (e) => {
        const selectedBeast = $('img', e.currentTarget || e.target).attr('src');

        console.log(selectedBeast);
    });
})();
