const ytdl = require("ytdl-core")
const Discord = require("discord.js")
exports.run = async(client, msg, args, ops)=>{
if(!msg.member.voiceChannel)return msg.channel.send("You need to be in a vc")
  if(!args[0])return msg.channel.send("Please enter a url link")
  let validate = await ytdl.validateURL(args[0])
  if(!validate) return msg.channel.send("Please enter a valid url")
let info = await ytdl.getInfo(args[0]);
  let data = ops.active.get(msg.guild.id) || {};
  if(!data.connection) data.connection = await msg.member.voiceChannel.join();
  if(!data.queue) data.queue = [];
  data.guildID = msg.guild.id;
  data.queue.push({
    songTitle: info.title,
    requester: msg.author.id,
    url: args[0],
    announceChannel: msg.channel.id
  });
  if(!data.dispatcher) play(client, ops, data)
  else{
    msg.channel.send(`Added to queue: ${info.title} | Requested by: ${msg.author.id}`)
  }
  ops.active.set(msg.guild.id, data)
}
async function play(client, ops, data) {
  client.channels.get(data.queue[0].announceChannel).send(`Now playing: ${data.queue[0].songTitle} | Requested by ${data.queue[0].requester}`)
  data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, {filter: 'audioonly'}));
data.dispatcher.guildID = data.guildID;
  
  //End
  data.dispatcher.once('end', function() {
 end(client, ops, data);
  });
  }
function end(client, ops, dispatcher) {
  let fetched = ops.active.get(dispatcher.guildID);
  fetched.queue.shift();
  if(fetched.queue.length > 0) {
ops.active.set(dispatcher.guildID, fetched);
    
  play(client, ops, fetched)
  } else {
    ops.active.delete(dispatcher.guildID);
    let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;
    if(vc) vc.leave()
  }
  
  
}
exports.help = {
  name: "play",
  aliases: ["playtube", "playmusic"]
}