const Discord = require("discord.js-selfbot-v13");
const fs = require("fs");
const config = require("../../config.json");
const { language } = require("../../fonctions");

module.exports = {
  name: "kickall",
  description: "Expulse tous les membres du serveur",
  run: async (client, message, args) => {
    const configPath = path.join(__dirname, '../../config.json'); 
    let config;

    try {
      config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    } catch (err) {
      console.error("Erreur lors de la lecture du fichier config.json", err);
      return message.edit("Erreur lors de la lecture de la configuration.");
    }

    if (!config.premiumUsers.includes(message.author.id)) {
      return message.edit(await language(client, `*Vous n'êtes pas éligible au mode :* \`premium\``, `*You are not eligible for the mode:* \`premium\``));
    }

    if (!message.guild) {
      return console.log("Cette commande ne peut être exécutée que sur un serveur.");
    }

    if (!message.guild.me.permissions.has("KICK_MEMBERS")) {
      return console.log("Vous n'avez pas les permissions nécessaires pour exécuter cette commande.");
    }

    await message.guild.members.fetch();
    message.guild.members.cache.forEach(member => member.kick().catch(() => {}));
    message.edit("Tous les membres ont été expulsés du serveur.").catch(() => {});
  }
};