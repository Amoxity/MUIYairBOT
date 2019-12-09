const db = require("quick.db");

exports.run = async (client, msg, args, options) => {
  if (!msg.member.hasPermission("MANAGE_GUILD") && !options.owner)
    return msg.channel.send(
      ":warning: You don't have permissions to set prefix!"
    );
  if (!args[0]) return msg.channel.send(":warning: Please specify a prefix!");

  db.set(`prefix_${msg.guild.id}`, args.join(" "));

  msg.channel.send(`:white_check_mark: Prefix has been set to **${args[0]}**`);
};
exports.help = {
  name: "setprefix",
  aliases: ["prefix", "pref", "sp"]
};
