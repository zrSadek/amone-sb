// security.js

const Discord = require("discord.js-selfbot-v13");

const { language, savedb } = require("../../fonctions");

module.exports = {

  name: "secur",

  description: "Activer / Désactiver la sécurité du serveur entier",

  run: async (client, message, args, db) => {

    try {

      if (!args[0] || (args[0] !== "on" && args[0] !== "off")) {

        return message.edit(await language(client, `Veuillez écrire \`on\` ou \`off\` après la commande`, `Please write \`on\` or \`off\` after the command`));

      }

      if (args[0] === "on") {

        db.security = true;

        await savedb(client, db);

        message.edit(await language(client, "La sécurité du serveur a été activée", "Server security has been activated"));

      } else {

        db.security = false;

        await savedb(client, db);

        message.edit(await language(client, "La sécurité du serveur a été désactivée", "Server security has been deactivated"));

      }

    } catch (e) {

      console.error("Error in security command:", e);

    }

  }

};