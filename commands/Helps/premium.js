const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "premium",
  description: "Affiche la liste des commandes disponibles.",
  run: async (client, message, args, db, prefix) => {
    const helpMessage = `
\`❓\` **Liste des commandes disponibles :**

\`${prefix}premium\` - Affiche cette liste de commandes.

\`${prefix}addpremium <utilisateur> <durée>\` - Ajoute un utilisateur à la liste des membres premium avec une durée spécifique (1w, 1m, lifetime).

\`${prefix}delpremium <utilisateur>\` - Supprime un utilisateur de la liste des membres premium.

\`${prefix}clearpremium\` - Efface tous les utilisateurs de la liste des membres premium.

\`${prefix}wl <utilisateur>\` - Ajoute un utilisateur à la liste des membres whitelistés pour qu'il puisse utiliser la commande addpremium.
    `;

    message.edit(helpMessage);
  },
};