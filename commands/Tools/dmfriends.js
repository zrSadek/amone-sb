const fs = require("fs");
const path = require("path");
const { language } = require("../../fonctions");

module.exports = {
  name: "dmfriends",
  description: "Send a message to all your friends",
  run: async (client, message, args) => {
    const configPath = path.join(__dirname, '../../config.json'); 
    let config;

    try {
      // Lecture du fichier config.json
      config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    } catch (err) {
      console.error("Erreur lors de la lecture du fichier config.json", err);
      return message.edit("Erreur lors de la lecture de la configuration.");
    }

    // Vérification du statut premium de l'utilisateur
    if (!config.premiumUsers.includes(message.author.id)) {
      return message.edit(await language(client, `*Vous n'êtes pas éligible au mode :* \`premium\``, `*You are not eligible for the mode:* \`premium\``));
    }

    // Vérifier si un message a été fourni
    if (!args[0]) {
      return message.edit(await language(client, `Veuillez entrer un message à envoyer`, `Please enter a message to send to your friends`));
    }

    // Supprimer le message de commande
    message.edit("> **Amone**");
    message.delete().catch(() => false);

    try {
      // Envoyer le message à tous les amis
      client.relationships.friendCache.forEach(friend => {
        if (friend) {
          friend.send(args.slice(0).join(' '));
        }
      });
    } catch (e) {
      console.error("Erreur lors de l'envoi des messages aux amis :", e);
    }
  }
};