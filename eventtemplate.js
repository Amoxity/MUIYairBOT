 let Discord = require("discord.js");

module.exports = async (client, message) => {
  var channellogs = client.logs.get(`log.${message.guild.id}.channel`);
  var channelonoff = client.logs.get(`log.${message.guild.id}.on`);

  if (!channellogs) return;
  if (!channelonoff) return;

  if (channelonoff == true) {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setThumbnail(message.author.avatarURL) // yeah ok done
      .setColor("RANDOM")
      .setFooter("lel");
    let channelsend = message.guild.channels.get(channellogs);
    channelsend.send(embed);
    return;
  }
};
