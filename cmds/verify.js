
const Discord = require("discord.js");

exports.run = async(bot, msg, args) => {

  try {
  if(msg.channel.id != '622919480686936064') { //keep in only in verified channel.
  return;
  } 
  let verified = '584794512224813157';
  let unverified = '622611965721706556';
  if(msg.member.roles.find(r => r.id === "584794512224813157")) {
    msg.delete(1000)
    await msg.channel.send(`Wait wait wait wait wait, you are already verified boi!`).then(m => m.delete(5000));
    return;
  }
msg.delete(1000)
    msg.channel.send("Verifiyng... Please stand by").then(m => setTimeout(function() {m.delete()}, 300)); //verifying process
    msg.channel.send(`<@${msg.author.id}> Verified, enjoy this server :)!`).then(message=>message.delete(5000)); //show a result success
  await setTimeout(function() {msg.member.addRole(verified).then(author => author.removeRole(unverified));}, 500) //giving a role verified and remove unverified
    return;
  }
  
  catch(e){
      console.log(e);
  }
  
}
exports.help = {
  name: "verify",
  aliases: []
}