const Discord = require("discord.js")
const Math = require("math")
exports.run = async(client, msg, args)=>{
const kosimgs = [
   "https://cdn.discordapp.com/avatars/289849310806409216/332144f6b2f1b9d92a1c1d11a952a6dd.png",
    "https://cdn.discordapp.com/avatars/614692307521765407/b0bc4270f49d7baaa00430cb47483dcc.png?size=2048",
    "",
  ]
  let embed = new Discord.RichEmbed()
  .setTitle("Take a pic from Mastered UI Kostas")
  .setImage(kosimgs[Math.floor(Math.random() * kosimgs.length)])
  .setFooter("lel")
  .setTimestamp()
  msg.channel.send(embed)
}
exports.help = {
  name: "muikostas",
  aliases: []
}
