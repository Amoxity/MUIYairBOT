//if embed
const Discord = require("discord.js")
exports.run = async(client, msg, args)=>{
 
  let embed = new Discord.RichEmbed()
  .setTitle(`${msg.guild.name}'s info`)
  .setDescription("Here is the info of this server")
  .addField("Status:", `**Guild Name:** ${msg.guild.name}\n**Guild ID:** ${msg.guild.id}\n**Created At:** ${msg.guild.createdAt}\n**Member Count:** ${msg.guild.members.size} members`)
  .addField("Another Info:", `**Region:** ${msg.guild.region}\n`)
  .setThumbnail(msg.member.displayAvatarURL)
  .setFooter("Lel")
  .setTimestamp()
  msg.channel.send(embed)
}
exports.help = {
  name: "serverinfo",
  aliases: ["sinfo"]
}