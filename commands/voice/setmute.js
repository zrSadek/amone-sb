const fs = require('fs');

module.exports = {

  name: "setmute",

  description: "Active ou désactive le mute lors d'un joinvc",

  run: async (client, message, args) => {

    try {

      // Vérifier si l'utilisateur a les permissions nécessaires

      if (!message.member.permissions.has("MUTE_MEMBERS")) {

        return message.channel.send(`\`❌\` Vous n'avez pas les autorisations nécessaires pour activer ou désactiver le mute.`);

      }

      // Vérifier si le paramètre "on" ou "off" est fourni

      if (!args[0] || (args[0] !== "on" && args[0] !== "off")) {

        return message.channel.send("Paramètre manquant : `on` ou `off`");

      }

      // Activer ou désactiver le mute lors du joinvc en fonction du paramètre fourni

      if (args[0] === "on") {

        client.db.vcselfmut = true;

        client.save();

        client.refreshVoice();

        message.channel.send("Vous serez mute lors d'un joinvc");

      } else {

        client.db.vcselfmut = false;

        client.save();

        client.refreshVoice();

        message.channel.send("Vous ne serez pas mute lors d'un joinvc");

      }

    } catch (error) {

      console.error("Erreur lors de l'exécution de la commande setmute :", error);

      message.channel.send("Une erreur s'est produite lors de l'exécution de la commande setmute.");

    }

  }

};