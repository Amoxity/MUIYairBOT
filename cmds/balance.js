const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, ops) => {
  
  if(message.mentions.users.first() && !args[0]) {
  var user = message.mentions.users.first()
} else if(args[0] && !message.mentions.users.first()) {
  var user = client.users.get(args[0])
  if(!user) var user = message.author
} else {
  var user = message.author
}

var money = await db.fetch(`${user.id}_money`)
if(!money) var money = 0
  
  function nWC(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
  
  var embed = ops.embed
  .setAuthor(`Current Bal: \n${nWC(money)}$`, user.displayAvatarURL)
  
  message.channel.send(embed)
  
}
  

exports.help = {
    name: "balance",
    usage: "",
    description: "Show Your Balance",
    aliases: ["bal"]
}