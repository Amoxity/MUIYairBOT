const Discord = require("discord.js")
const Math = require("math")
exports.run = async(client, msg, args)=>{
let mention = msg.mentions.users.first()
  let lel = args[1]
  if(args[0] == `<@${client.user.id}>`) {msg.reply("Eeeee its me")}

let slap = [
  "https://tenor.com/view/mm-emu-emu-anime-slap-strong-gif-7958720",
  "https://cdn.weeb.sh/images/H16aQJFvb.gif",
  "https://giphy.com/gifs/slap-slapping-jLeyZWgtwgr2U",
  "https://giphy.com/gifs/slap-gif-9U5J7JpaYBr68",
  "https://cdn.weeb.sh/images/Bkj-oaV0Z.gif"
  ]
   let embed = new Discord.RichEmbed()
.setDescription(`${msg.author.tag} Slapped ${mention} cuz ${lel}`)
  .setImage(slap[Math.floor(Math.random() * slap.length)])
  .setFooter("lel")
  .setTimestamp()
  msg.channel.send(embed)
}
exports.help = {
  name: "slap",
  aliases: []
}
