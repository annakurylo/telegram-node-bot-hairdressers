const text = require("./../infofiles/text");
const hairdressersList = require("./../infofiles/parseBD");
const keyboard = require("./../keyboard/keyboard-layout");
const servicesList = require("./../infofiles/parseBD_services");

function getHairdressers(bot, msg, ID) {
  if (
    msg.web_app_data?.data === "hairdressers" ||
    msg.text === "/hairdressers"
  ) {
    bot.sendMessage(ID, text.hairdressers_prev).then(() => {
      bot.sendMessage(ID, hairdressersList.hairdressersListforChat, {
        reply_markup: {
          inline_keyboard: keyboard.allIsClear,
        },
      });
    });
  }
}

function start(bot, msg, ID) {
  if (msg.text === "/start") {
    bot.sendMessage(ID, text.welcome_text, {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: keyboard.introduce,
      },
    });
  }
}

function getPrices(bot, msg, ID) {
  if (msg.web_app_data?.data === "services" || msg.text === "/prices") {
    bot.sendMessage(ID, text.services_prev).then(() => {
      bot.sendMessage(ID, servicesList.servicesListforChat, {
        reply_markup: {
          inline_keyboard: keyboard.clear,
        },
      });
    });
  }
}

function getLocation(bot, msg, ID) {
  if (msg.text === "Місцезнаходження" || msg.text === "/location") {
    bot
      .sendMessage(ID, text.location)
      .then(() => {
        bot.sendLocation(ID, 50.53763, 30.26226);
      })
      .then(() => {
        bot.sendMessage(ID, text.address, {
          reply_markup: {
            inline_keyboard: keyboard.showInterior,
          },
        });
      });
  }
}

function availableCommands(bot, msg, ID) {
  if (msg.text === "/help") {
    bot.sendMessage(ID, text.availableCommands);
  }
}

module.exports = {
  getHairdressers,
  start,
  getPrices,
  getLocation,
  availableCommands,
};
