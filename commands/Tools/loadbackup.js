const fs = require("fs");
const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "load",
  description: "Charge une sauvegarde pour restaurer les données du serveur.",
  run: async (client, message, args) => {
    if (!message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) {
      return message.edit(`\`❌\` Vous n'avez pas la permission d'administrateur pour charger une sauvegarde.`);
    }

    if (args.length < 1) {
      return message.edit(`Veuillez spécifier le nom du fichier de sauvegarde à charger après la commande.`);
    }

    let fileName = args[0];
    let filePath = `./backups/${fileName}`;

    if (!fs.existsSync(filePath)) {
      return message.edit(`\`❌\` Le fichier de sauvegarde spécifié n'existe pas.`);
    }

    let data = fs.readFileSync(filePath);
    let guildData = JSON.parse(data);

    // Restaurer les rôles
    for (let roleData of guildData.roles) {
      await message.guild.roles.create({
        data: {
          name: roleData.name,
          color: roleData.color,
          permissions: roleData.permissions,
          hoist: roleData.hoist,
          mentionable: roleData.mentionable
        }
      });
    }

    // Restaurer les salons
    for (let channelData of guildData.channels) {
      await message.guild.channels.create(channelData.name, {
        type: channelData.type,
        topic: channelData.topic,
        nsfw: channelData.nsfw,
        parent: channelData.parent,
        permissionOverwrites: channelData.permissionOverwrites
      });
    }

    // Notez que la restauration des membres n'est pas incluse ici, car elle peut causer des problèmes de gestion des permissions et d'interaction avec les utilisateurs existants.

    message.edit(`\`✅\` Sauvegarde chargée avec succès : ${fileName}.`);
  }
};