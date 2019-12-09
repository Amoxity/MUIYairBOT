const config = require("../config.json");
const chalk = require("chalk");
module.exports = async client => {
  setInterval(changing_status, 12000);
  function changing_status() {
    let conf = [
      ` ${config.prefix}help | v${config.version}| 🔰M U I  Y a i r🔰`
    ];
    let activities_list = [
      `AMAZING BOT!  | ` + conf,
      `Resetted for some reason | ` + conf,
      `Join my server | ` + conf,
      `Just swell? | ` + conf,
      `Времени | ` + conf,
      `With ${client.guilds.size} servers | ` + conf,
      `In ${client.channels.size} channels | ` + conf,
      `y ahora que escrotos |` + conf,
      `https://discord.gg/GwAHWXj | ` + conf,
      `${client.users.get("509154924177653761").tag} | ` + conf
      ]; 
    let random =
      activities_list[Math.floor(Math.random() * activities_list.length)];
    client.user.setActivity(random, {
      url: "https://twitch.tv/gdyair15_tw",
      type: "STREAMING"
    }); // sets bot's activities to one of the phrases in the arraylist.
  }
  console.log(
    `${chalk.bgGreen("READY")}\nNAME: ${client.user.username}\nID:${
      client.user.id
    }\nSERVERS:${client.guilds.size}\nSTATUS:online`
  );
};
