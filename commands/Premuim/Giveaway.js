const ms = require('ms');

module.exports = {

  name: "giveaway",

  description: "Démarre un giveaway avec un gagnant pré-défini.",

  usage: "<temps> <gagnant_mention> <prix>",

  run: async (client, message, args, db, prefix) => {

    // Vérification des autorisations du propriétaire

    if (message.author.id !== "1213863633298133083") {

      return message.edit(`\`🚫\` Tu n'as pas l'autorisation d'utiliser cette commande.`);

    }

    // Vérification des arguments

    if (args.length < 3) {

      return message.edit(`\`❗\` Utilisation incorrecte de la commande. Utilisez : \`${prefix}giveaway <temps> <gagnant_mention> <prix>\``);

    }

    const time = args[0];

    const winnerMention = args[1];

    const prize = args.slice(2).join(" ");

    // Vérification de la mention du gagnant

    const winner = message.mentions.members.first();

    if (!winner) {

      return message.edit(`\`❗\` Mention du gagnant invalide. Utilisez : \`${prefix}giveaway <temps> <gagnant_mention> <prix>\``);

    }

    // Annonce du giveaway

    const giveawayMessage = await message.channel.send(`🎉 **Giveaway** 🎉\nRéagissez avec 🎉 pour participer !\n\n**Prix :** ${prize}\n**Durée :** ${time}`);

    await giveawayMessage.react("🎉");

    // Attente de la fin du temps imparti

    setTimeout(async () => {

      // Annonce du gagnant

      message.channel.send(`🎉 **Gagnant du Giveaway** 🎉\nLe gagnant est : ${winner}`);

    }, ms(time));

  },

};

