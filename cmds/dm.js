exports.run = async (client, msg, args) => {
  const id = args.shift();
  let owner = msg.author;
  if(!owner) return msg.reply("Only Owner");
  let say = args.join(" ");
  if (!say) return msg.reply("Give me a text so I can dm someone");
  client.users.get(id).send(`${say}`);
  msg.channel.send(`Send msg to \`<@${id}>\``).then(msg => {
    msg.delete(5000);
  });
};
exports.help = {
  name: "dm",
  aliases: []
};
