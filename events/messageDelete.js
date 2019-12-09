let Discord = require("discord.js");

module.exports = async (client, message) => {
  var channellogs = client.logs.get(`log.${message.guild.id}.channel`);
  var channelonoff = client.logs.get(`log.${message.guild.id}.on`);
  
  if(!channellogs) return console.log(channellogs);
  if (!channelonoff) return;

  if (channelonoff == true) {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setThumbnail(message.author.avatarURL) // yeah ok done
      .setColor("RANDOM")
      .setDescription(`Message Deleted`)
      .addField("Content", `${message.content}`)
      .setFooter("lel");
    let channelsend = message.guild.channels.get(channellogs);
    channelsend.send(embed);
    return;
  }
};
