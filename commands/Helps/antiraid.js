const Discord = require("discord.js-selfbot-v13");

const { language } = require("../../fonctions");

module.exports = {

  name: "antiraid",

  description: "Affiche les dernières commandes de modération et de sécurité",

  run: async (client, message, args, db, prefix) => {

    message.edit(await language(client, `♫︎ __**Amone - Modération et Sécurité**__ ♫︎

\`${prefix}antibot <on/off>\` ➜ **Active ou désactive la fonction antibot sur le serveur**

\`${prefix}secur <on/off>\` ➜ **Active ou désactive la fonction de sécurité pour les entiers**

\`${prefix}antispam\` ➜ **Active ou désactive la fonction antispam**

\`${prefix}automod\` ➜ **Active ou désactive la fonction d'auto-modération**
`,

`♫︎ __**Amone - Moderation and Security**__ ♫︎

\`${prefix}antibots <on/off>\` ➜ **Activate or deactivate the antibot feature on the server**

\`${prefix}securite <on/off>\` ➜ **Activate or deactivate the security feature for integers**

\`${prefix}antispam\` ➜ **Activate or deactivate the antispam feature**

\`${prefix}automoderation\` ➜ **Activate or deactivate the auto-moderation feature**

\`${prefix}nsfw <on/off>\` ➜ **Activate or deactivate the NSFW content filtering feature**

\`${prefix}antiporn <on/off>\` ➜ **Activate or deactivate the pornographic content filtering feature**

\`${prefix}antiselfbot <on/off>\` ➜ **Activate or deactivate the feature to detect selfbots**`));

  }

};