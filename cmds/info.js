const Discord = require("discord.js");
const os = require("os");
const config = require("../config.json");
const owners = config.owner;
exports.run = async (client, msg, args, ops) => {
  let botname = client.user.username;
  let discordjsversion = Discord.version;
  let nodeversion = process.version
  let embed = new Discord.RichEmbed()
    .setTitle("BOTINFO!")
    .setDescription("Here is the info of this bot")
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Info:", `**Name**: ${client.user.username}\n**Version**: 2.5.3`)
    .addField("Count Status: ", `**Servers**: ${client.guilds.size}\n**Users**: ${client.users.size}\n**Channels**: ${client.channels.size}`)
    .addField('Software Info :', `|-OS : ${os.platform}\n|-Discord.js Version : ${discordjsversion}\n|-Node.js Version : ${nodeversion}`)
    .setTimestamp()
    .setColor(`RANDOM`);


  //509154924177653761
  msg.channel.send(embed);
};
exports.help = {
  name: "info",
  aliases: ["botinfo"]
};
 