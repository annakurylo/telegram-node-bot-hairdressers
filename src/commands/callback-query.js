const stickerPack = require("./../infofiles/sticker");
const text = require("./../infofiles/text");
const keyboard = require("./../keyboard/keyboard-layout");
const images = require("./../infofiles/image");

function pressHello(bot, msg, ID) {
  if (msg.data === "hello") {
    bot.sendSticker(ID, stickerPack.hello).then(() => {
      bot.sendMessage(ID, text.assistent_hello, {
        parse_mode: "Markdown",
        reply_markup: {
          inline_keyboard: keyboard.helloForAssistent,
        },
      });
    });
  }
}

function pressHelloAssistent(bot, msg, ID) {
  if (msg.data === "hello_assistent") {
    bot
      .sendSticker(ID, stickerPack.good)
      .then(() => {
        bot.sendMessage(ID, text.pre_menu);
      })
      .then(() => {
        bot.sendMessage(ID, text.chooseService, {
          reply_markup: {
            keyboard: keyboard.mainMenu,
            resize_keyboard: true,
          },
        });
      });
  }
}

function pressGladToMeet(bot, msg, ID) {
  if (msg.data === "all_is_clear") {
    bot.sendSticker(ID, stickerPack.girls).then(() => {
      bot.sendMessage(ID, text.gladToInrtoduceMyGirls).then(() => {
        bot.sendMessage(ID, text.chooseService, {
          reply_markup: {
            keyboard: keyboard.mainMenu,
            resize_keyboard: true,
          },
        });
      });
    });
  }
}

function pressClear(bot, msg, ID) {
    if (msg.data === "clear") {
        bot.sendSticker(ID, stickerPack.ok).then(() => {
          bot.sendMessage(ID, text.gladToIntroduceServices).then(() => {
            bot.sendMessage(ID, text.chooseService, {
              reply_markup: {
                keyboard: keyboard.mainMenu,
                resize_keyboard: true,
              },
            });
          });
        });
      }
}

function pressShowInterior( bot, msg, ID) {
    if (msg.data === "interior") {
        bot
          .sendPhoto(ID, images.interior, {
            caption: text.interior,
          })
          .then(() => {
            bot.sendMessage(ID, text.chooseService, {
              reply_markup: {
                keyboard: keyboard.mainMenu,
                resize_keyboard: true,
              },
            });
          });
      }
}

module.exports = { pressHello, pressHelloAssistent, pressGladToMeet, pressClear, pressShowInterior };
