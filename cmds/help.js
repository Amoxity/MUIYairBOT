//here
const db = require("quick.db")
const fs = require("fs");
const { RichEmbed } = require("discord.js");
exports.run = async (client, msg, args, ops) => {
  let e = new RichEmbed()
    .setTitle(`${client.user.username}'s Commands`)
    .setThumbnail(client.user.displayAvatarURL)
    .setColor("#0099ff")
    .setURL("https://discord.gg/GwAHWXj")
    .setDescription("Take some help boi")
    .addField("🛠Admin", "`ban, clear, finduser, kick, modlog, prefix, report, setwelcome`")
    .addField(`😅Fun`, "`8ball, meme, owoify, ping, ship, spoiltext`")
    .addField(":partying_face:GIFS", "`slap`")
    .addField("🔰Miscellaneous", "`avatar, info, invite, sinfo, sicon, uinfo`")
    .addField(`:notes:Music`, "`leave, pause, play, queue, resume, skip, volume`")
    .addField("🔞NSFW", ops.nsfw ? "`r34`" : "`This will only show in nsfw channels`")
    .addField("🙄OwnerOnly", ops.owner ? "`dm, servers`" : "`Owner only`")
    .addField("🎨Pictures", "`muikostas, peter, yair`")
    .setTimestamp()
    .setFooter("Lel", client.user.displayAvatarURL);

  msg.channel.send(e);
  
};
exports.help = {
  name: "help",
  aliases: ["cmds"]
};
