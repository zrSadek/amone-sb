const Discord = require("discord.js-selfbot-v13");
const { language } = require("../../fonctions");

module.exports = {
  name: "backups",
  description: "Menu Backup",
  run: async (client, message, args, db, prefix) => {
    message.edit(await language(client, `♫︎ __**Amone - Backups**__ ♫︎
\`${prefix}backup create\` ➜ **Crée une sauvegarde**
\`${prefix}backup load\` ➜ **Charge une sauvegarde dans le serveur**
\`${prefix}backup list\` ➜ **Liste de tes sauvegardes (en dev)**`,
`♫︎ __**1774 - Moderation**__ ♫︎
\`${prefix}backup create\` ➜ **Create a backup**
\`${prefix}backup load\` ➜ **Load a backup into the server**
\`${prefix}backup list\` ➜ **List of your backups (in dev)**`))
  }
}
