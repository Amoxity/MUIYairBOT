
const Discord = require("discord.js")
exports.run = async(client, msg, args)=>{
  let randomtext = [
    "MinionShadow gae",
    "be friend of MUI Yair",
    "Si tu me quieres **dame una nalgada**",
    "STEVEN UNIVERSE BEST",
    "|| || || || || || || ||"
    ]
  const random = randomtext[Math.floor(Math.random() * randomtext.length)]

msg.channel.send(random)
}
exports.help = {
  name: "random",
  aliases: []
}
