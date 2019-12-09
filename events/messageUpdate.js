let Discord = require("discord.js");

module.exports = async (client, oldMsg, newMsg) => {
  var channellogs = client.logs.get(`log.${oldMsg.guild.id}.channel`);
  var channelonoff = client.logs.get(`log.${oldMsg.guild.id}.on`);
  
  if(!channellogs) return console.log(channellogs);
  if (!channelonoff) return;

  if (channelonoff == true && oldMsg.content == newMsg.content) {
    let embed = new Discord.RichEmbed()
      .setAuthor(oldMsg.author.tag, oldMsg.author.avatarURL)
      .setThumbnail(oldMsg.author.avatarURL) // yeah ok done
      .setColor("RANDOM")
      .setDescription(`Message Updated`)
      .addField("Before:", oldMsg.content)
      .addField("After:", newMsg.content)
      .setFooter("lel");
    let channelsend = oldMsg.guild.channels.get(channellogs);
    channelsend.send(embed);
    return;
  }
};
