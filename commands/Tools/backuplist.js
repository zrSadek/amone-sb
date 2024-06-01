const fs = require("fs");
const Discord = require("discord.js-selfbot-v13");
const { language } = require("../../fonctions");

module.exports = {
  name: "backup list",
  description: "Liste toutes les sauvegardes disponibles.",
  run: async (client, message, args, db, prefix) => {
    // Lire les fichiers de sauvegarde disponibles dans le dossier "backups"
    const backupFiles = fs.readdirSync("./backups").filter(file => file.endsWith(".json"));

    // Créer une liste des noms de fichiers avec liens
    const backupList = backupFiles.map(file => `- [${file}](${__dirname}/backups/${file})`).join("\n");

    // Envoyer le message avec la liste des sauvegardes
    message.edit(
      await language(
        client,
        `♫︎ __**Amone - Modération**__ ♫︎\n${backupList}`,
        `♫︎ __**1774 - Moderation**__ ♫︎\n${backupList}`
      )
    );
  }
};
