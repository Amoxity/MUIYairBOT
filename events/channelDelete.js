let Discord = require("discord.js");

module.exports = async (client, channel, message) => {
  var channellogs = client.logs.get(`log.${channel.guild.id}.channel`);
  var channelonoff = client.logs.get(`log.${channel.guild.id}.on`);

  if(!channellogs) return console.log(channellogs);
  if(!channelonoff) return;

  if (channelonoff == true) {
    let embed = new Discord.RichEmbed()
      .setAuthor("A channel has been deleted")
      .addField("Name:", channel.name)
      .addField("ID:", channel.id)
      .setFooter("lel")
      .setColor("RANDOM");
    let channelsend = channel.guild.channels.get(channellogs);
    channelsend.send(embed);
    return;
  }
};
