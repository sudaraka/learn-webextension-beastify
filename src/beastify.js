(() => {
  'use strict';

  const
    handleMessage = (msg /* , sender, sendResponse */) => {
      const beastURL = chrome.extension.getURL(msg.beast);

      insertImage(beastURL);

      chrome.runtime.onMessage.removeListener(handleMessage);
    },

    insertImage = (url) => {
      const newImg = document.createElement('img');

      newImg.className = 'beastify-image';
      newImg.setAttribute('src', url);
      newImg.addEventListener('click', (e) => {
        e.target.remove();
      });

      Array.from(document.querySelectorAll('.beastify-image')).forEach((img) => {
        img.remove();
      });

      document.body.appendChild(newImg);
    };

  chrome.runtime.onMessage.addListener(handleMessage);

})();
