const fs = require("fs")

module.exports = {
    hello: fs.readFileSync(__dirname + "./../../assets/img/hello.webp"),
    good: fs.readFileSync(__dirname + "./../../assets/img/good.webp"),
    girls: fs.readFileSync(__dirname + "./../../assets/img/gladToIntroduceMyGirls.webp"),
    ok: fs.readFileSync(__dirname + "./../../assets/img/ok.webp"),
}