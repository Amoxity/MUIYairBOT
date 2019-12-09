exports.run = async (client, message, args, ops) => {
  let fetched = ops.active.get (message.guild.id);
  if (!fetched) return message.channel.send ('No music is played yet');
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send ('You are not connected to a voice channel');
  
  let userCount = message.member.voiceChannel.members.size;
  
  let required = Math.ceil (userCount / 2);
  
  if (! fetched.queue [0] .voteSkips) fetched.queue [0] .voteSkips = [];
  
  if (fetched.queue [0] .voteSkips.includes (message.member.id)) return message.channel.send (`You have already voted. $ {fetched.queue [0] .voteSkips.length} / $ {required } required for skip`);
  
  fetched.queue [0] .voteSkips.push (message.member.id);
  
  ops.active.set (message.guild.id, fetched);
  
  if (fetched.queue [0] .voteSkips.length >= required) {
    message.channel.send ('Next Music!');
    return fetched.dispatcher.emit ('end');
  }
  
  message.channel.send (`You voted for skip. $ {fetched.queue [0] .voteSkips.length} / $ {required} required for skip`)
  
  










}
exports.help = {
name: "skip",
aliases: []
}