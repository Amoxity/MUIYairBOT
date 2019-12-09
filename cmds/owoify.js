const Discord = require("discord.js")
const os = require('os');
const nclient = require('nekos.life');
const neko = new nclient();

exports.run = async(client, msg, args)=>{
  
  let text = args.join(' ')
  
  if(!text) return msg.reply(`. . .`)
  
  let response = await neko.sfw.OwOify({text: text})
  
  msg.channel.send(response.owo)
}
exports.help = {
  name: "owoify",
  aliases: ["owo"]
}