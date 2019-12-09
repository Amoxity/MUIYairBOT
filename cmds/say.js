exports.run = async (client, msg, args) => {
  const say = args.join(" ");
  if (!say) return msg.reply("**Please enter a word**");
  msg.delete();
  msg.channel.send(say);
};
exports.help = {
  name: "say",
  aliases: []
};
