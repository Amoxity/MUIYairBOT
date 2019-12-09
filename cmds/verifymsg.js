const {RichEmbed} = require("discord.js")
module.exports.run = async(client, msg, args) => {
  let embed = new RichEmbed()
  .setTitle("Welcome")
  .setThumbnail(client.user.displayAvatarURL)
  .setDescription("Youre new here?")
  .addField("If you are", "please use y!!verify")
  .setFooter("Thank you")
  msg.channel.send(embed)
}
exports.help = {
name: "verifymsg",
aliases: ["vmsg"]
}