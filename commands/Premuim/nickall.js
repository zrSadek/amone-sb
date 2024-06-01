const Discord = require("discord.js-selfbot-v13");
const fs = require("fs");
const config = require("../../config.json");
const { language } = require("../../fonctions");

module.exports = {
  name: "nickall",
  description: "Change le surnom de tous les membres du serveur",
  usage: "<nouveau_surnom>",
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

    try {
      if (!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_NICKNAMES)) {
        return message.channel.send(`\`❌\` Vous n'avez pas les autorisations nécessaires pour changer les surnoms.`);
      }

      const newNickname = args.join(" ");

      if (!newNickname) {
        return message.channel.send(`\`❌\` Veuillez spécifier un nouveau surnom.`);
      }

      message.guild.members.cache.forEach(async (member) => {
        try {
          await member.setNickname(newNickname);
        } catch (error) {
          console.error(`Erreur lors du changement du surnom de ${member.user.tag} :`, error);
        }
      });

      message.channel.send(`\`✅\` Le surnom de tous les membres a été changé en "${newNickname}".`);
    } catch (error) {
      console.error("Erreur lors du changement du surnom de tous les membres :", error);
      message.channel.send(`\`❌\` Une erreur s'est produite lors du changement du surnom de tous les membres.`);
    }
  },
};