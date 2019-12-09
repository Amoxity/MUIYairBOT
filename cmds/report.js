const Discord = require("discord.js");
exports.run = async (client, message, args, ops) => {
  let rchan = client.logs.get(`log.${message.guild.id}.channel`);
  let ronoff = client.logs.get(`log.${message.guild.id}.on`);
 if(!rchan) return message.channel.send("Couldn't find channel.");
  let rUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!rUser) return message.channel.send("Couldn't find user.");
  let reason = args.join(" ").slice(22);
  if (!reason) return message.channel.send(`Why are you reporting they?`);
  if(ronoff == true) {
  let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report")
    .setColor(0x42f47a)
    .addField("Report User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);

  let rsend = message.guild.channels.get(rchan);

  message.delete().catch(O_o => {});
  rsend.send(reportEmbed);
  console.log(
    `${message.author.username} with ID:${message.author.id} has reported on ${rUser} with ID:${rUser.id}`
  );
  return;
}
};
exports.help = {
  name: "report",
  aliases: []
};
