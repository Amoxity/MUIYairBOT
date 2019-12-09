const Discord = require('discord.js');
const os = require('os');
const nclient = require('nekos.life');
const neko = new nclient();

exports.run = async(client, msg, args)=>{
  
  let text = args.join(' ')
  
  if(!text) return msg.reply(`Give me some text.`)
  
  let response = await neko.sfw.spoiler({text: text})
  
  msg.channel.send(response.owo)
  
}
exports.help = {
  name: "spoiltext",
  usage: "[Text]",
  aliases: ["spoiler"],
  description: "Creates an individual spoiler per letter for Discord"
}