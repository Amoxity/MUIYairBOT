const Discord = require("discord.js");
exports.run = async (client, msg, args) => {
  let member = msg.mentions.members.first();
  if (!member || msg.author.id === member.id) {
    member = msg.guild.members.filter(m => m.id !== msg.author.id).random();
  }

  let love = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20"
  ];

  let random = Math.floor(Math.random() * love.length);

  msg.channel.send(
    `:heart:SHIP:heart:
\n\n
${msg.member.displayName}\n x \n${member.displayName}
\n\n${random}/20`
  );
};
exports.help = {
  name: "ship",
  aliases: []
};
