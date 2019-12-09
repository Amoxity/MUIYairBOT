const Discord = require("discord.js"),
      mongodb = require ("mongodb")
exports.run = async (client, msg, args, ops) => {
  if(!msg.member.hasPermission('MANAGE_GUILD') && msg.author.id !== '297130271864520705') return msg.channel.send("You cant do that")
  //?
  if (!args[0]) {
    let embed = ops.embed
    .setColor('RANDOM')
    .setDescription('you must set it !')
    msg.channel.send(embed)
  } else if(args[0] == "on") {
    let on = client.database.get(`welcome.${msg.guild.id}.on`)
    if(on == true) return msg.channel.send("Hey the welcome settings is already on!")
    client.database.set(`welcome.${msg.guild.id}.on`, true) // ` == Database don't wtf
    msg.channel.send("Now your welcome settings is on!")
  } else if(args[0] == "off") {
    let on = client.database.get(`welcome.${msg.guild.id}.on`)
    if (on == false) return msg.channel.send("Hey the welcome settings is already off!")
    client.database.set(`welcome.${msg.guild.id}.on`, false) // ` == Database don't wtf
    msg.channel.send("Now your welcome settings is off!")
  } else if(args[0] == "message") {
    let someone = `${args.slice(1).join(' ')}`
    if (!someone) return msg.channel.send('Please specify a message.')
    client.database.set(`welcome.${msg.guild.id}.message`, someone)
    msg.channel.send(`**Succesfully set welcome message to:** \n${someone}`)
  } else if(args[0] == 'channel') {
    var channel = msg.mentions.channels.first();
    if(!channel) return msg.channel.send("Please specify a mention channels!");
    client.database.set(`welcome.${msg.guild.id}.channel`, channel.id);
    msg.channel.send(`Succesfully set welcome channel, Now channel is ${channel}`); 
  } // done ! :)
  //thank
}; // you msust create the event for run this command ;) bye
exports.help = {
  name: "setwelcome",
  aliases: []
}; 
/**/