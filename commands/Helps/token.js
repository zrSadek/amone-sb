const Discord = require("discord.js-selfbot-v13");
const { language } = require("../../fonctions");

module.exports = {
  name: "token",
  description: "Menu des Tokens",
  run: async (client, message, args, db, prefix) => {
    try {
      const menuFr = `
🛡️ **Menu des Tokens** 🛡️
- \`${prefix}checktoken\`
  - Vérifie si un token est toujours valide
- \`${prefix}tokenfuck\`
  - Détruit un token
- \`${prefix}tokeninfo\`
  - Obtient des informations sur un token 「premium」
- \`${prefix}lowtoken <@user>\`
  - Obtient la moitié du token de l'utilisateur 「premium」`;

      const menuEn = `
🛡️ **Token Menu** 🛡️
- \`${prefix}checktoken\`
  - Check if a token is still valid
- \`${prefix}tokenfuck\`
  - Destroy a token
- \`${prefix}tokeninfo\`
  - Get information about a token 「premium」
- \`${prefix}lowtoken <@user>\`
  - Have half of the user's token 「premium」`;

      const response = await language(client, menuFr, menuEn);
      message.edit(response);
    } catch (error) {
      console.error("An error occurred while executing the token command:", error);
      message.edit("An error occurred while displaying the token menu.");
    }
  },
};
