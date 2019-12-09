  
const Discord = require("discord.js")
exports.run = async(client, msg, args)=>{
  let embed = new Discord.RichEmbed()
msg.channel.send(embed)
  }
exports.help = {
  name: "shop",
  aliases: []
}
