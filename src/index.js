const telegram_api = require("node-telegram-bot-api");
const config = require("./config");
const helpers = require("./helpers");
const menu = require("./commands/menu");
const callbackCommands = require("./commands/callback-query");
const Hairdressers = require("./models/hairderssers");
const Services = require("./models/services");
const person = require("./../hairdressers");
const service = require("./../services");

const mongoose = require("mongoose");

const bot = new telegram_api(config.TOKEN, { polling: true });
const URL =
  "mongodb+srv://annakurylo:hjrcs2403@cluster0.wvvgfrw.mongodb.net/?retryWrites=true&w=majority";

async function connectToBD() {
  try {
    await mongoose.connect(URL);
  } catch (e) {
    console.log(e);
  }
}

connectToBD();

service.services.forEach((s) => new Services(s).save());
console.log(person.hairdressers);

bot.on("message", (msg) => {
  console.log(msg);
  const ID = helpers.chatId(msg);

  menu.start(bot, msg, ID);
  menu.getHairdressers(bot, msg, ID);
  menu.getPrices(bot, msg, ID);
  menu.getLocation(bot, msg, ID);
  menu.availableCommands(bot, msg, ID);
});

bot.on("callback_query", (query) => {
  const ID = helpers.chatQueryId(query);

  callbackCommands.pressHello(bot, query, ID);
  callbackCommands.pressHelloAssistent(bot, query, ID);
  callbackCommands.pressGladToMeet(bot, query, ID);
  callbackCommands.pressClear(bot, query, ID);
  callbackCommands.pressShowInterior(bot, query, ID);
});
