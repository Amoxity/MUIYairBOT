const Discord = require("discord.js")
const Math = require("math")
exports.run = async(client, msg, args)=>{
  const peterimgs = [
    "https://cdn.discordapp.com/attachments/509519915607261194/644952583575961600/IMG_20191010_233037.png",
    "https://cdn.discordapp.com/attachments/509519915607261194/644952554878533660/Peter.png",
    "https://cdn.discordapp.com/attachments/509519915607261194/644952532765900810/sign.png",
  ]
  let embed = new Discord.RichEmbed()
  .setTitle("Take a pic from peter~~:smirk:~~")
  .setImage(
    peterimgs[Math.floor(Math.random() * peterimgs.length)]
  )
  .setFooter("lel")
  .setTimestamp()
  msg.channel.send(embed)
}
exports.help = {
  name: "peter",
  aliases: []
}
