module.exports = async(client, guild) => {
let dm = client.users.get("509154924177653761")
dm.send(`I have been removed from: ${guild.name} (**id: ${guild.id}**)`)
}