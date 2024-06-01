const fs = require('fs');
const Discord = require('discord.js-selfbot-v13');

module.exports = {
  name: "karma",
  description: "Oh le Karma",
  usage: "[utilisateur]",
  run: async (client, message, args) => {
    const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    
    let dbName = "Unknown";
    if (client.db && client.db.name) {
      dbName = client.db.name;
    }

    const language = "fr"; // Définissez la langue que vous souhaitez utiliser pour le message
    const karmaMessage = language === "fr" ? `Bah écoute ${user.username} tu t'es fait Karmaed dans ${dbName}` : `Well listen to ${user.username} you made Karmaed in ${dbName}`;
    
    message.edit(` __**${dbName}**__ \n**${karmaMessage}**\n\nhttps://cdn.discordapp.com/attachments/602163438390738957/603946294888759316/tumblr_mns4ojjGJb1rzkceno1_500.gif`);
  }
};
