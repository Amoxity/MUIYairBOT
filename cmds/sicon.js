const Discord = require("discord.js")
module.exports.run = async(bot, msg, args) => {

  msg.channel.send("Getting... Please wait")
    .then(msg2 =>
  setTimeout(function()
             {
  let sicon = msg.guild.iconURL;
  let size = "?size=1024"
let embed = new Discord.RichEmbed ()
.setTitle(`${msg.guild.name}'s Icon`)
.setImage(sicon+size)
.setFooter("By MUI Yair | 3.8")
msg2.edit(embed)
  }, 5000)
//Ooooof
)}
module.exports.help = {
  name: "servericon",
  description: "Server icon",
  aliases: ["sicon", "servericon", "guildicon", "gicon"]
}