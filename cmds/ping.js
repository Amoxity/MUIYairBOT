module.exports.run = async(client, msg, args) => {
  msg.channel.send("Pong!")
}
exports.help = {
name: "ping",
aliases: []
}