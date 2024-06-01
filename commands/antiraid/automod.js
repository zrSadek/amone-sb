// automod.js

const Discord = require("discord.js-selfbot-v13");

const { language, savedb } = require("../../fonctions");

module.exports = {

  name: "automod",

  description: "Activer / Désactiver l'auto-modération",

  run: async (client, message, args, db) => {

    try {

      if (!args[0] || (args[0] !== "on" && args[0] !== "off")) {

        return message.edit(await language(client, `Veuillez écrire \`on\` ou \`off\` après la commande`, `Please write \`on\` or \`off\` after the command`));

      }

      if (args[0] === "on") {

        db.automod = true;

        await savedb(client, db);

        message.edit(await language(client, "L'auto-modération a été activée", "Auto-moderation has been activated"));

      } else {

        db.automod = false;

        await savedb(client, db);

        message.edit(await language(client, "L'auto-modération a été désactivée", "Auto-moderation has been deactivated"));

      }

    } catch (e) {

      console.error("Error in automod command:", e);

    }

  }

};