const Discord = require("discord.js")
const colors = require("../colors.json")
exports.run = async(client, msg, args)=> {
  if(!msg.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send("You do not have enough permissions to use this command")
  let kickMember = msg.mentions.members.first() || msg.guild.members.get(args[0])
 let author = msg.author
  if(!kickMember) return msg.channel.send("Please mention a user to kick")
  let reason = args.slice(1).join(" ")
  if(!reason) reason = "No reason given!"
    if(!msg.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send("I dont have permissions to run this command")
  msg.delete();
  let dm = new Discord.RichEmbed()
  .setTitle("You got kicked")
  .setDescription(`You got kicked from ${msg.guild.name}`)
  .addField("Kicked by:", author.tag)
  .addField("Reason:", reason)
  .setImage("https://cdn.discordapp.com/attachments/535027866459701268/535421974143303680/5Z30.gif")
  .setTimestamp()
  .setColor(colors.blue)
  kickMember.send(dm).then(() => 
  msg.guild.kick(kickMember, { reason: reason })).catch(err => console.log(err))
let chanmsg = `**${kickMember.user.tag}** Has been banned`
msg.channel.send(chanmsg)
}
exports.help = {
  name: "kick", 
  aliases: []
}