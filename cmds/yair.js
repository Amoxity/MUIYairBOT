//if embed
const Discord = require("discord.js")
const Math = require("math")
exports.run = async(client, msg, args)=>{
  const yairimgs = [
    "https://cdn.discordapp.com/avatars/621078731854970890/164fbdbe35a904e4f30fbfec7e1fafda.png?size=2048",
    "https://cdn.discordapp.com/avatars/509154924177653761/37f808a980dc1dcfbb1bb73e8a45d27b.png?size=2048",
    "https://cdn.discordapp.com/attachments/622614476285280297/644945932445679636/3_sin_titulo-3.png",
    "https://cdn.discordapp.com/attachments/561720391660339210/644619371364352000/new_redesign.png"
  ]
  let embed = new Discord.RichEmbed()
  .setTitle("Take a pic from yair~~:smirk:~~")
  .setImage(yairimgs[Math.floor(Math.random() * yairimgs.length)])
  .setFooter("lel")
  .setTimestamp()
  msg.channel.send(embed)
}
exports.help = {
  name: "yair",
  aliases: []
}
