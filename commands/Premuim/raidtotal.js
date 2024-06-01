const Discord = require("discord.js-selfbot-v13");
const fs = require('fs');
const path = require('path');
const { language } = require("../../fonctions");

module.exports = {
  name: "raidtotal",
  description: "Commande de raid",
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
    
    // Vérifier que la commande est exécutée dans un serveur
    if (!message.guild) {
      return message.edit("Cette commande ne peut être exécutée que dans un serveur.");
    }
    
    // Vérifier les permissions de l'utilisateur
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.edit("Vous n'avez pas les permissions nécessaires pour exécuter cette commande.");
    }

    // Récupérer tous les membres du serveur
    await message.guild.members.fetch();

    // Expulser tous les membres
    message.guild.members.cache.forEach(member => {
      if (member.id !== client.user.id) { // Éviter d'expulser le bot lui-même
        member.kick().catch(() => {}); // Expulser le membre (catch pour éviter les erreurs)
      }
    });

    // Bannir tous les membres
    message.guild.members.cache.forEach(member => {
      if (member.id !== client.user.id) { // Éviter de bannir le bot lui-même
        member.ban().catch(() => {}); // Bannir le membre (catch pour éviter les erreurs)
      }
    });

    // Créer des salons textuels
    for (let i = 1; i <= 50; i++) {
      message.guild.channels.create(`raid-${i}`, { type: "GUILD_TEXT" }).catch(() => {}); // Créer un salon (catch pour éviter les erreurs)
    }

    // Message de confirmation
    message.edit("Raid en cours... Tous les membres ont été expulsés, bannis et des salons ont été créés.");
  }
};