const Discord = require("discord.js")
const colors = require("../colors.json")
exports.run = async(client, msg, args)=> {
  if(!msg.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send("You do not have enough permissions to use this command")
  let banMember = msg.mentions.members.first() || msg.guild.members.get(args[0])
 let author = msg.author
  if(!banMember) return msg.channel.send("Please mention a user to ban")
  let reason = args.slice(1).join(" ")
  if(!reason) reason = "No reason given!"
    if(!msg.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return msg.channel.send("I dont have permissions to run this command")
  msg.delete();
  let dm = new Discord.RichEmbed()
  .setTitle("You got banned")
  .setDescription(`You got banned from ${msg.guild.name}`)
  .addField("Banned by:", author.tag)
  .addField("Reason:", reason)
  .setImage("https://cdn.discordapp.com/attachments/535027866459701268/535421974143303680/5Z30.gif")
  .setTimestamp()
  banMember.send(dm).then(() => 
  msg.guild.ban(banMember, { days: 1, reason: reason })).catch(err => console.log(err))
let chanmsg = `**${banMember.user.tag}** Has been banned`
msg.channel.send(chanmsg)
}
exports.help = {
  name: "ban", 
  aliases: []
}