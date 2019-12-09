const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
  if (!ops.owner)
    return message.reply("Only the bot owner can use this command!");

  let embed = new Discord.RichEmbed()
    .setTitle(`${bot.user.username}'s Servers`)
    .setThumbnail(bot.users.displayAvatarURL)
    .addField("Servers:", bot.guilds.map(g => g.name).join("\n**"))
    .setColor("RANDOM")
    .setFooter(`Currently in ${bot.guilds.size} guilds`);
  message.channel.send(embed);
};
exports.help = {
  name: "servers",
  aliases: []
};
