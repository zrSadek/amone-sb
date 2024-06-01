const Discord = require("discord.js-selfbot-v13");

module.exports = {

  name: "stalker",

  description: "Affiche la liste des commandes disponibles",

  run: async (client, message, args) => {

    const helpMessage = `

\`\`\`

Liste des commandes disponibles :

   Description : Affiche la liste des commandes disponibles.

   Utilisation : &stalk

2. &stalk @utilisateur

   Description : Recopie chaque phrase d'un utilisateur spécifié dans le même canal.

   Utilisation : &stalk @utilisateur

   Exemple : &stalk @JohnDoe

   Pour arrêter de stalker, utilisez la commande suivante dans le même canal :

   &stopstalk

\`\`\`

`;

    message.channel.send(helpMessage);

  }

};