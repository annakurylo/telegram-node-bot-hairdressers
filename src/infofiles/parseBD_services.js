const { services } = require("./../../services");

function getPrices(service) {
  return service.pool.map((p) => p.service + " -------- " + p.price + " ₴").join("\n");
}


const list = services.map((s) => {
  return `${s.group}👩🏼\n\n${getPrices(
    s
  )}\n-----------------------------------------\n`;
});

const servicesListforChat = list.join("\n")

module.exports = { servicesListforChat };
