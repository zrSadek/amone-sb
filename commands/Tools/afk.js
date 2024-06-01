const Discord = require("discord.js-selfbot-v13");
const { language } = require("../../fonctions");

module.exports = {
  name: "afk",
  description: "Définir votre statut comme AFK",
  run: async (client, message, args, db) => {
    try {
      const reason = args.join(" ") || await language(client, "Je suis AFK pour le moment.", "I am AFK right now.");
      const userId = message.author.id;

      // Ajout ou mise à jour du statut AFK dans la base de données
      await db.set(`afk_${userId}`, reason);

      // Notification de l'utilisateur que son statut AFK a été défini
      message.edit(`\`✅\` **${message.author.username}** est maintenant AFK : ${reason}`);
    } catch (e) {
      console.error("Erreur lors de la définition du statut AFK", e);
      message.edit(await language(client, "Une erreur s'est produite lors de la définition du statut AFK.", "An error occurred while setting AFK status."));
    }
  },
};