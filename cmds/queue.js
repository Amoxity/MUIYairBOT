exports.run = async (client, message, args, ops) => {
  
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send('There isnt any music playing');
  
  let queue = fetched.queue;
  
  let nowPlaying = queue[0];
  
  let resp = `__**Now Playing**__\n**${nowPlaying.songTitle}** -- **Requested By:** *${nowPlaying.requester}*\n\n__**File d'attente**__\n`;
  
  for (var i=1; i < queue.length; i++) {
    resp += `${i}. **${queue[i].songTitle}** -- **Requested By:** *${queue[i].requester}*\n`;
  }
  message.channel.send(resp);

}
exports.help = {
name: "queue",
aliases: []
}