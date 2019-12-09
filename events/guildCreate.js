module.exports = async(client, guild) => {
let dm = client.users.get("509154924177653761")
dm.send(`I have been added to: ${guild.name} (**id: ${guild.id}**)`)
}