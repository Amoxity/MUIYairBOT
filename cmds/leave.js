exports.run = async(client, msg, args)=> {
  if(!msg.guild.me.voiceChannel) return msg.channel.send("Rlly nigg? Im not connected to a VC")
  if(!msg.member.voiceChannel)return msg.channel.send("youre not in a vc")
  let VC = msg.member.voiceChannel
  VC.leave()
  msg.channel.send("Successfully disconnected")
  
}
exports.help = {
  name: "leave",
  aliases: ["disconnect", "lvc"]
}