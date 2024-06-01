const Discord = require("discord.js-selfbot-v13");

module.exports = {

  name: "stalk",

  description: "Recopie chaque phrase d'un utilisateur spécifié",

  run: async (client, message, args) => {

    // Vérifier si un utilisateur a été mentionné

    const user = message.mentions.users.first();

    if (!user) {

      return message.edit("Veuillez mentionner l'utilisateur que vous voulez stalker.");

    }

    // Démarrer le stalk

    message.edit(`\`✅\` Maintenant en train de stalker ${user.tag}.`);

    const stalkHandler = async (msg) => {

      if (msg.author.id === user.id && msg.channel.id === message.channel.id) {

        try {

          await message.edit(msg.content);

        } catch (error) {

          console.error(`Erreur lors de l'édition du message:`, error);

        }

      }

    };

    client.on("messageCreate", stalkHandler);

    // Attendre une commande spécifique pour arrêter le stalk

    const stopCommandFilter = (msg) => msg.content.toLowerCase() === `&stopstalk` && msg.author.id === message.author.id;

    const stopCollector = message.channel.createMessageCollector({ filter: stopCommandFilter, time: 3600000 });

    stopCollector.on('collect', (msg) => {

      client.removeListener("messageCreate", stalkHandler);

      message.edit(`\`✅\` Arrêté de stalker ${user.tag}.`);

      stopCollector.stop();

    });

    stopCollector.on('end', (collected, reason) => {

      if (reason === 'time') {

        client.removeListener("messageCreate", stalkHandler);

        message.edit(`\`⏰\` Temps écoulé, arrêté de stalker ${user.tag}.`);

      }

    });

  }

};