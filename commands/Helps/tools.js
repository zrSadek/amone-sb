const Discord = require("discord.js-selfbot-v13");
const { language } = require("../../fonctions");

module.exports = {
  name: "tools",
  description: "Menu Help",
  run: async (client, message, args, db, prefix) => {
    message.edit(
      await language(
        client,
        `
        # Amone
- \`${prefix}backup \`
 - **faire une backup, create, load,**
- \`${prefix}statusrotator \`
 - **faire changerson status, usage : "<status1> <status2> <status3>"**
- \`${prefix}ipinfo [ip]\`
 - **Obtenir des informations sur une adresse IP**
- \`${prefix}robuser [@user]\`
 - **copié le profil d'un user**
- \`${prefix}leaveguild\`
 - **Quitte tous les serveurs discords**
- \`${prefix}dmfriends [message]\`
 - **Envoie un message priver a tous t'est amis**「premium」
- \`${prefix}username [user]\`
 - **Recherche l'user sur des réseaux sociaux**
- \`${prefix}spam [nombre]\`
 - **Spam un message**
- \`${prefix}ass [username]\`
 - **Envoie ton ass à quelqu'un**`,
        `# Crim
- \`${prefix}ipinfo\`
 - **Get information about an IP address**
- \`${prefix}leaveguild\`
 - **Exit all discord servers**
- \`${prefix}dmfriends [message]\`
 - **Send a private message to all your friends**
- \`${prefix}robuser <@user>\`
 - **Edit your profile like the user**
- \`${prefix}username [user]\`
 - **Search for the user on social networks**
- \`${prefix}spam\`
 - **Spam a message**
- \`${prefix}paypal [username]\`
 - **Send your paypal link**`
      )
    );
  },
};
