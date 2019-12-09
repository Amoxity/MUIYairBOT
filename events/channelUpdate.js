const { RichEmbed } = require("discord.js");
module.exports = async (client, oldChannel, newChannel) => {
  var channellogs = client.logs.get(`log.${oldChannel.guild.id}.channel`);
  var channelonoff = client.logs.get(`log.${oldChannel.guild.id}.on`);
  if(!channellogs) return console.log(channellogs);
  if (!channelonoff) return;

  if (channelonoff == true && oldChannel.name == newChannel.name) return;
  let embed = new RichEmbed()
    .setTitle("Channel Updated!")
    .setDescription("A channel has been updated")
    .setColor("RANDOM")
    .addField("Before:", oldChannel.name)
    .addField("After:", newChannel.name)
    .addField("ID:", oldChannel.id)
    .setFooter("lel");
  let channelsend = oldChannel.guild.channels.get(channellogs);
  channelsend.send(embed);
  return;
};
