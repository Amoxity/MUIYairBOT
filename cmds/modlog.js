const db = require("quick.db")
const Discord = require("discord.js")
const fs = require("fs")
const ms = require("ms")
exports.run =  async(client, msg, args) => {
  let prefix = await db.fetch(`prefix_${msg.guild.id}`)
  if(!msg.member.hasPermission('MANAGE_GUILDS')) return msg.channel.send("You don't have permissions for this command!");
  
  if (!args[0]) {
    let embed = new Discord.RichEmbed() // add discord const
    .setColor('RANDOM')
    .setTitle("Edit now in here the title!")
    .setDescription(`${prefix}modlog channel #channel\n${prefix}modlog on/off\n\nExample: ${prefix}modlog channel #lalalaala`)// prefix pls
    msg.channel.send(embed)
  } else if(args[0] == 'on') {
    let channelmark = client.logs.get(`log.${msg.guild.id}.on`);
    if (channelmark == true) return msg.channel.send('The log already on!');
     client.logs.set(`log.${msg.guild.id}.on`, true)
     msg.channel.send(`Log has been enabled!`);
  } else if(args[0] == 'off') {
    let channelmark = client.logs.get(`log.${msg.guild.id}.on`);
    if (channelmark == false) return msg.channel.send('The log already off!');
     client.logs.set(`log.${msg.guild.id}.on`, false)
     msg.channel.send(`Log has been disabled!`);
  } else if(args[0] == 'channel') {
    let channelgood = client.logs.get(`log.${msg.guild.id}.channel`);
    var channel = msg.mentions.channels.first();
    if(!channel) return msg.channel.send("Please specify a mention channels!")
    client.logs.set(`log.${msg.guild.id}.channel`, channel.id)
    msg.channel.send(`Succesfully set the logs to channel ${channel}`) 
  }// its done yair can you invite me to your server discord?
  //thenk u
}
exports.help = {
  name: "modlog",
  aliases: []
}  // your bot prefix can you show ?
//its y!! but in my server and me and amar's bot test server is =
  //also why are u offline everytime?
//oh