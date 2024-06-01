const Discord = require("discord.js-selfbot-v13");

const { language } = require("../../fonctions");

module.exports = {

  name: "mod",

  description: "Menu Mod",

  run: async (client, message, args, db, prefix) => {

    message.edit(await language(client, 

      `♫︎ __**Amone - Modération**__ ♫︎

\`${prefix}kickbots\` ➜ **Expulse tout les bots du serveur**

\`${prefix}hide\` ➜ **masquer un salon**

\`${prefix}snipe\` ➜ **snipe un message supprimé**

\`${prefix}unhide\` ➜ **révéler le salon masqué précédemment**

\`${prefix}bl\` ➜ **Black list un membre**

\`${prefix}unbl\` ➜ **unbl un membre**

\`${prefix}addrole\` ➜ **ajouterun rôle à un membre**

\`${prefix}ban\` ➜ **bannir un membre**

\`${prefix}deban\` ➜ ** debanir un membre**

\`${prefix}lock\` ➜ **lock un salon**

\`${prefix}unlock\` ➜ **unlock un salon**

\`${prefix}massrole\` ➜ **mettre un rôle à tout les membres d'un serveur**

\`${prefix}derank\` ➜ **derank un membre**

\`${prefix}emoji\` ➜ **ajouter un emoji sur le serveur**

\`${prefix}clearperms\` ➜ **Désactive la totalité des permissions dangereuse présente sur le serveur (rôles, administrateur)**

\`${prefix}renew\` ➜ **Recréé le salon demandé (utilisable uniquement sur un serveur)**`,

      `♫︎ __**1774 - Moderation**__ ♫︎

\`${prefix}kickbots\` ➜ **Kick all bots from the guild**

\`${prefix}clearperms\` ➜ **Disable all dangerous permissions on the server (roles, administrator)**

\`${prefix}renew\` ➜ **Recreate a channel (usable in guild only)**`

    ));

  }

};