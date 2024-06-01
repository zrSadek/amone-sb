const { language } = require("../../fonctions");

module.exports = {
  name: "raid",
  description: "Expulse tous les membres, bannit tous les membres et crée plusieurs salons textuels dans le serveur.",
  run: async (client, message, args, db, prefix) => {
    message.edit(
      await language(
        client,
        `
♫︎ __**Amone**__ ♫︎
*Vaut mieux être seul que mal accompagné.*
\`${prefix}banall\` ➜ **ban all un serveur**「premium
\`${prefix}delc\` ➜ **Delete tout les salons du serveur**
\`${prefix}nickall\` ➜ **Change le surnom de tous les membres du serveur**
\`${prefix}delr\` ➜ **Delete tout les roles du serveur**「premium」
\`${prefix}unnickall\` ➜ **Supprime les surnoms de tous les membres du serveur**「premium」
\`${prefix}spam\` ➜ **Spam un message**
\`${prefix}kickall\` ➜ **Expulse tous les membres du serveur**「premium」
\`${prefix}raidtotal\` ➜ **Expulse, ban et crée des salons**「premium」
\`${prefix}dmall\` ➜ **dmall  un serveur**' 「premium」
\`${prefix}hack\` ➜ **Simule un processus de piratage**`,
        `
♫︎ __**Amone**__ ♫︎
*Better to be alone than in bad company.*
\`${prefix}banall\` ➜ **ban all a server**
\`${prefix}delc\` ➜ **Delete all channels from server**
\`${prefix}spam\` ➜ **Spam message**
\`${prefix}kickall\` ➜ **Kick all members from the server**
\`${prefix}raidtotal\` ➜ **Kick, ban, and create channels**
\`${prefix}hack\` ➜ **Simulate a fake hacking process**`
      )
    );
  },
};