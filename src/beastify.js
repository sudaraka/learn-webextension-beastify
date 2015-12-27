(() => {
    'use strict';

    const handleMessage = (msg, sender /* , sendResponse */) => {
        console.log('Got Message', msg, 'from', sender);

        chrome.runtime.onMessage.removeListener(handleMessage);
    };

    chrome.runtime.onMessage.addListener(handleMessage);
})();
