const Discord = require("discord.js-selfbot-v13");

module.exports = {

  name: "unnickall",

  description: "Supprime les surnoms de tous les membres du serveur",

  run: async (client, message, args) => {

    try {

      if (!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_NICKNAMES)) {

        return message.channel.send(`\`❌\` Vous n'avez pas les autorisations nécessaires pour supprimer les surnoms.`);

      }

      message.guild.members.cache.forEach(async (member) => {

        try {

          await member.setNickname(null);

        } catch (error) {

          console.error(`Erreur lors de la suppression du surnom de ${member.user.tag} :`, error);

        }

      });

      message.channel.send(`\`✅\` Les surnoms de tous les membres ont été supprimés.`);

    } catch (error) {

      console.error("Erreur lors de la suppression des surnoms de tous les membres :", error);

      message.channel.send(`\`❌\` Une erreur s'est produite lors de la suppression des surnoms de tous les membres.`);

    }

  },

};