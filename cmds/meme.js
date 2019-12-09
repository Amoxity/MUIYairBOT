const Discord = require("discord.js")
const randomPuppy = require("random-puppy")
exports.run = async(client, msg, args)=>{
let chan = msg.channel;
let subReddits = ["dankmeme", "meme", "me _irl", "sonic"]
let random = subReddits[Math.floor(Math.random() * subReddits.length)];
let img = await randomPuppy(random)
let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setImage(img)
.setTimestamp()
.setTitle(`From /r/${random}`)
.setURL(`https://www.reddit.com/r/${random}`)
chan.send(embed)
}
exports.help = {
  
name: "meme",
aliases: []
}