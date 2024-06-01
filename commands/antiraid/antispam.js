const Discord = require("discord.js-selfbot-v13");

const { language, savedb } = require("../../fonctions");

module.exports = {

  name: "antispam",

  description: "Activer / Désactiver la fonction anti-spam",

  run: async (client, message, args, db) => {

    try {

      // Vérifier si l'utilisateur a spécifié "on" ou "off"

      if (!args[0] || (args[0] !== "on" && args[0] !== "off")) {

        return message.edit(await language(client, `Veuillez écrire \`on\` ou \`off\` après la commande`, `Please write \`on\` or \`off\` after the command`));

      }

      // Activer ou désactiver l'anti-spam en fonction de l'argument fourni

      if (args[0] === "on") {

        db.antispam = true;

        await savedb(client, db);

        message.edit(await language(client, "L'anti-spam a été activé", "The anti-spam has been activated"));

      } else {

        db.antispam = false;

        await savedb(client, db);

        message.edit(await language(client, "L'anti-spam a été désactivé", "The anti-spam has been deactivated"));

      }

    } catch (e) {

      console.error("Error in antispam command:", e);

    }

  }

};