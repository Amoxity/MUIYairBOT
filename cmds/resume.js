exports.run = (client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  
  if (! fetched) return message.channel.send ('No music is played yet');
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('You need to be in a VC');
  
  if (!fetched.dispatcher.paused) return message.channel.send('Music isnt paused');
  
  fetched.dispatcher.resume();
  
  message.channel.send(`Resumed music: ${fetched.queue[0].songTitle}`);




}
exports.help = {
name: "resume",
aliases: []
}