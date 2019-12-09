const Discord = require("discord.js")
exports.run = async(client, msg, args)=>{
  var item = "";
  var time;
  var winnerCount;
  if(!msg.member.hasPermission("MANAGE_MESSAGES"))return
  msg.channel.send("You do not have enough permissions to use this command")
  winnerCount = args[0]
  time = args[1]
  item = args.splice(2, args.length).join(' ')
  msg.delete();
  
  var date = new Date().getTime();
  var dateTime = new Date(date + (time * 1000));

  let embed = new Discord.RichEmbed()
  .setTitle(":tada:**GIVEAWAY**:tada:")
  .setDescription(item)
  .setFooter(`Time: ${dateTime}`)
  var embSend = await msg.channel.send(embed)
  
  embSend.react("🎉");
  
  setTimeout(function() {
    var randon = 0;
    var winners = [];
    var inList = false;
    
    var peopleReacted = embSend.reactions.get("🎉").users.array();
    
    for(let i = 0; i < peopleReacted.length; i++) {
    if(peopleReacted[i].id == client.user.id){
    peopleReacted.splice(i,1);
      continue;
    }
   }
    if(peopleReacted.length == 0){
      return msg.channel.send("The giveaway didnt got a winner so it ended.")
    }
    if(peopleReacted.length < winnerCount){
      return msg.channel.send("There are too few players who participated so the bot has won.")
    }
    
  }, time * 1000);
}
//Nooo this command was finished before
exports.help = {
name: "giveaway",
aliases: []
}