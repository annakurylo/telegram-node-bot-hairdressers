const { hairdressers } = require("./../../hairdressers");

function getServices(hairdresser) {
  return hairdresser.services.map((s) => s.toLowerCase()).join(", ") + ".";
}

function getWorkDays(hairdresser) {
  return hairdresser.workDays.map((s) => s.toLowerCase()).join(", ") + ".";
}

const list = hairdressers.map((h) => {
  return `${h.name}🌷\n\nНадає послуги💇🏼‍♀️: ${getServices(
    h
  )}\nРобочі дні📅: ${getWorkDays(
    h
  )}\n-----------------------------------------\n`;
});

hairdressersListforChat = list.join("\n")

module.exports = { hairdressersListforChat };
