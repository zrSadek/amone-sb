const Discord = require("discord.js")
const SlashCommands = require("../Handlers/slashCommands")
const config = require("../config")
const { ActivityType } = require("discord.js")

module.exports = async bot => {

await SlashCommands(bot)
    
    const userId = config.user.id || 0;
    
    function generateRandomStatus() {
  const statuses = ["Amone 👑", `Users: ${userId}`];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
}

    console.log(`${bot.user.tag} est bien en ligne`)
    console.log(`> [INVITE]: https://discord.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot%20applications.commands`)
    bot.user.setStatus('dnd');

  setInterval(() => {
    bot.user.setActivity(generateRandomStatus(), {
      type: ActivityType.Streaming,
      url: "https://twitch.tv/talmo",
    });
  }, 30000);
};