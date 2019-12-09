exports.run = (client, message, args, ops) => {
   let fetched = ops.active.get (message.guild.id);
  
   if (!fetched) return message.channel.send ('No music is played yet');
  
   if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send ('You are not connected to a voice channel');
  
   if (fetched.dispatcher.paused) return message.channel.send ('the music is already paused');
  
   fetched.dispatcher.pause ();
  
   message.channel.send ('Music paused');




}
exports.help = {
name: "pause",
aliases: []
}