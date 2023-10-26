const keyboardButtons = require("./keyboard-buttons");

const URL_WEBAPP_HAIRDRESSERS =
  "https://comfy-bienenstitch-732e68.netlify.app/hairdressers";
const URL_WEBAPP_SERVICES =
  "https://comfy-bienenstitch-732e68.netlify.app/services";

module.exports = {
  mainMenu: [
    [keyboardButtons.mainMenu.book_appointment],
    [
      {
        text: keyboardButtons.mainMenu.hairdressers,
        web_app: { url: URL_WEBAPP_HAIRDRESSERS },
      },
      {
        text: keyboardButtons.mainMenu.prices,
        web_app: { url: URL_WEBAPP_SERVICES },
      },
    ],
    [keyboardButtons.mainMenu.location],
  ],
  introduce: [
    [
      {
        text: keyboardButtons.introduce.hello,
        callback_data: "hello",
      },
    ],
  ],
  helloForAssistent: [
    [
      {
        text: keyboardButtons.helloForAssistent.hello,
        callback_data: "hello_assistent",
      },
    ],
  ],
  allIsClear: [
    [
      {
        text: keyboardButtons.allIsClear.clear,
        callback_data: "all_is_clear",
      },
    ],
  ],
  clear: [
    [
      {
        text: keyboardButtons.infoIsClear.clear,
        callback_data: "clear",
      },
    ],
  ],

  showInterior: [
    [
      {
        text: keyboardButtons.showInterior.interior,
        callback_data: "interior",
      },
    ],
  ],
};
