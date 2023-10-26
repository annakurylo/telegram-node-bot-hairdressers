module.exports = {
  chatId(msg) {
    return msg.chat.id;
  },
  chatQueryId(query) {
    return query.from.id;
  },
};
