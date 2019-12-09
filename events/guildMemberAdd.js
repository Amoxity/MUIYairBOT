let Discord = require("discord.js")
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 50;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px comic-sans`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

const Canvas = require("canvas")
const db = require("quick.db")
module.exports = async (client, member) => {
  
  var wchan = client.database.get(`welcome.${member.guild.id}.channel`);
  var wonoff = client.database.get(`welcome.${member.guild.id}.on`);
  var wmessage = client.database.get(`welcome.${member.guild.id}.message`);

  if (!wmessage || wmessage === null)
    wmessage = "Welcome {user}\n to {server}\n now we have {count} members";
  if (!wmessage || wmessage === undefined)
    wmessage = "Welcome {user}\n to {server}\n now we have {count} members";

  wmessage = wmessage.replace("{user}", member.user.tag.toString());
  wmessage = wmessage.replace("{server}", member.guild.name.toString());
  wmessage = wmessage.replace("{count}", member.guild.memberCount.toString()); // ok done :)

  if (!wchan) return;
  if (!wonoff) return;

  if (wonoff == true) {
    let welcomeChannel = member.guild.channels.get(wchan); // ok done try the command :)
const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.glitch.com/1dfb4bd0-1512-4d90-889a-c3f352443b52%2Fdecorlabyrinth01.png?v=1572214026323');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '30px comic-sans';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(wmessage, canvas.width / 2.5, canvas.height / 3.5);

	ctx.beginPath();
	ctx.arc(130, 130, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), `Welcome ${member.displayName}.png`);
let embed = new Discord.RichEmbed()
.setTitle("HEYO!")
.setDescription(`Welcome to {server}\n Hope you read the rules`)
.setImage(attachment)
.setFooter("Members now: {count}")
.setTimestamp()
.setColor("RANDOM")
    welcomeChannel.send(embed); /// use {count} is so really good!
  }
};
