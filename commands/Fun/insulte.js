const Discord = require("discord.js-selfbot-v13");

const insults = [
  "Espèce de tête de lard !",
  "T'es aussi utile qu'une boussole dans une forêt de bonbons.",
  "Va donc jouer au trafic avec un escargot.",
  "Ton cerveau est aussi petit qu'une cacahuète !",
  "T'as l'air d'avoir été élevé par des poneys sauvages."
];

module.exports = {
  name: "insulte",
  description: "Génère une insulte aléatoire.",
  run: async (client, message, args) => {
    const randomInsult = insults[Math.floor(Math.random() * insults.length)];
    message.channel.send(randomInsult);
  }
};