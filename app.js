const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const db = require("quick.db");
var active = new Map();
const snekfetch = require("snekfetch");
const Canvas = require("canvas");
const client = new Discord.Client();
const config = require("./config.json");
const glob = require("glob");
const queue = new Map();
//database
client.database = new db.table("Alldatabase");
client.logs = new db.table("thedatabaselogs");
// We also  tomake sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;
client.owner = config;
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log(`INFO: Loading ${eventName} event`);
  });
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

glob("./cmds/**/*", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./` + file);
    let commandName = file.split(".")[0];
    console.log(`INFO: Loading ${props.help.name} command`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

  //dhm function
  function dhm(ms) {
    var days = Math.floor(ms / (24 * 60 * 60 * 1000));
    var daysms = ms % (24 * 60 * 60 * 1000);
    var hours = Math.floor(daysms / (60 * 60 * 1000));
    var hoursms = ms % (60 * 60 * 1000);
    var minutes = Math.floor(hoursms / (60 * 1000));
    var minutesms = ms % (60 * 1000);
    var sec = Math.floor(minutesms / 1000);

    if (sec == "0" || sec == NaN) {
      var secva = "";
      var secend = "";
    }
    if (minutes == "0" || minutes == NaN) {
      var minutesva = "";
      var minutesend = "";
    }
    if (hours == "0" || hours == NaN) {
      var hoursva = "";
      var hoursend = "";
    }
    if (days == "0" || days == NaN) {
      var daysva = "";
      var daysend = "";
    }

    if (sec == "1") {
      var secva = "1";
      var secend = " Second ";
    }
    if (minutes == "1") {
      var minutesva = "1";
      var minutesend = " Minute, ";
    }
    if (hours == "1") {
      var hoursva = "1";
      var hoursend = " Hour, ";
    }
    if (days === "1") {
      var daysva = "1";
      var daysend = " Day, ";
    }

    if (sec > "1") {
      var secva = sec;
      var secend = " Seconds ";
    }
    if (minutes > "1") {
      var minutesva = minutes;
      var minutesend = " Minutes, ";
    }
    if (hours > "1") {
      var hoursva = hours;
      var hoursend = " Hours, ";
    }
    if (days > "1") {
      var daysva = days;
      var daysend = " Days, ";
    }

    return (
      daysva +
      daysend +
      hoursva +
      hoursend +
      minutesva +
      minutesend +
      secva +
      secend
    );
  }

  client.on("message", async msg => {
    if (msg.author.bot) return;
    if (msg.channel.type === "dm") return;

    //Fetch the prefix
    var prefix = await db.fetch(`prefix_${msg.guild.id}`);
    if (prefix === null) var prefix = "y!!";

    //Mention Bot For Prefix
    if (msg == `<@${client.user.id}>` || msg == `<@!${client.user.id}>`) {
      let tagEmbed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username}'s Prefix`)
        .setThumbnail(client.user.displayAvatarURL)
        .setDescription(
          `${msg.guild.name}'s Prefix: **${prefix}**\nGlobal Prefix: **${config.prefix}**`
        )
        .setColor("RANDOM")
        .setFooter(`Help command: ${prefix}help`)
        .setTimestamp(msg.createdAt);
      msg.channel.send(tagEmbed);
    }
    if (!msg.content.startsWith(prefix)) return;
    var cont = msg.content
      .slice(prefix.length)
      .trim()
      .split(" ");
    var args = cont.slice(1);
    var messageArray = msg.content.split(" ");
    var searchString = messageArray.slice(1).join(" ");
    var url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
    console.log(searchString);
    var serverQueue = queue.get(msg.guild.id);
    var sender = msg.author;
    var cmd = cont[0].toLowerCase();
    var ownerlist = config.ownerID;

    if (cmd) {
      //Owner(owner)
      if (
        (ownerlist.length === 1 && ownerlist[0] === msg.author.id) ||
        (ownerlist.length > 1 && ownerlist.includes(msg.author.id))
      )
        var owner = true;
      else var owner = false;
    }
    let ops = {
      owner: owner,
      embed: new Discord.RichEmbed(),
      active: active,
      version: config.version,
      dhm: dhm
    };
    {
      let cmdfile =
        client.commands.get(cmd) ||
        client.commands.get(client.aliases.get(cmd));
      if (cmdfile) cmdfile.run(client, msg, args, ops);
    }
    console.log(
      `Command: ${cmd}\nGuild Name: ${msg.guild.name}\nMember: ${sender.tag}\nIn channel: ${msg.channel.name}`
    );
  });
});
//events that no wurk in event handler
client.on("userUpdate", async (oldUser, newUser) => {
  var channellogs = client.logs.get(`log.${oldUser.guild.id}.channel`);
  var channelonoff = client.logs.get(`log.${oldUser.guild.id}.on`);
  if (!channellogs) return;
  if (!channelonoff) return;
  if (channelonoff === true && oldUser.avatarURL == newUser.avatarURL) {
    let embed = new Discord.RichEmbed()
      .setAuthor(oldUser.tag, oldUser.displayAvatarURL)
      .setDescription(`Avatar from ${oldUser.tag} has changed`)
      .setTimestamp()
      .setThumbnail(oldUser.displayAvatarURL)
      .setColor("RANDOM")
      .addField(
        "Before:",
        `[Link(Original may be unavailable)](${oldUser.displayAvatarURL})`
      )
      .setImage(oldUser.displayAvatarURL);
    let chan = oldUser.guild.channels.get(channellogs);
    chan.send(embed).then;
    let emb2 = new Discord.RichEmbed()
      .setAuthor(oldUser.tag, newUser.displayAvatarURL)
      .setThumbnail(oldUser.displayAvatarURL)
      .setTimestamp()
      .setColor("RANDOM")
      .addField("After:", `[Link here](${newUser.displayAvatarURL})`)
      .setImage(newUser.displayAvatarURL);
    chan.send(embed);
  }
});
//bad words
client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.content === "nigga") {
    msg.channel.send("Hey! That word isn't allowed here");
    msg.delete();
  }
});
client.login(process.env.TOKEN);

require("./server.js");
//it cant be fixed?
//yep
