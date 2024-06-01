const fs = require('fs');

const path = require('path');

module.exports = {

  name: "setwelcome",

  description: "Définit le message de bienvenue pour les nouveaux membres d'un serveur spécifique.",

  usage: "<server_id> <message>",

  run: async (client, message, args) => {

    const configPath = path.join(__dirname, '../../config.json');

    // Lecture du fichier config.json

    let config;

    try {

      config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

    } catch (err) {

      console.error("Erreur lors de la lecture du fichier config.json", err);

      return message.edit("Erreur lors de la lecture de la configuration.");

    }

    // Vérification si l'utilisateur est l'owner du bot

    if (!config.owner.includes(message.author.id) && !config.premiumUsers.includes(message.author.id)) {

      return message.edit(`\`🚫\` Tu n'as pas l'accès à cette commande.`);

    }

    const serverId = args[0];

    const welcomeMessage = args.slice(1).join(" ");

    if (!serverId || !welcomeMessage) {

      return message.edit("Veuillez fournir un ID de serveur et un message de bienvenue.");

    }

    if (!config.welcomeMessages) {

      config.welcomeMessages = {};

    }

    config.welcomeMessages[serverId] = welcomeMessage;

    try {

      fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');

      message.edit(`\`✅\` Le message de bienvenue pour le serveur \`${serverId}\` a été mis à jour : ${welcomeMessage}`);

    } catch (err) {

      console.error("Erreur lors de l'écriture dans le fichier config.json", err);

      message.edit("Erreur lors de la mise à jour de la configuration.");

    }

  }

};