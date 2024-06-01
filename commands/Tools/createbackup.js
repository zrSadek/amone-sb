const fs = require("fs");
const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "backup",
  description: "Crée une sauvegarde des données du serveur.",
  run: async (client, message, args) => {
    if (!message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) {
      return message.edit(`\`❌\` Vous n'avez pas la permission d'administrateur pour créer une sauvegarde.`);
    }

    let guildData = {
      roles: message.guild.roles.cache.array(),
      channels: message.guild.channels.cache.array(),
      members: message.guild.members.cache.array()
    };

    let date = new Date();
    let fileName = `backup_${message.guild.name}_${date.toISOString()}.json`;
    let filePath = `./backups/${fileName}`;

    fs.writeFileSync(filePath, JSON.stringify(guildData, null, 2));

    message.edit(`\`✅\` Sauvegarde créée avec succès : [${fileName}](${filePath}).`);
  }
};