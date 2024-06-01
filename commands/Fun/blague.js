const Discord = require("discord.js-selfbot-v13");

// Liste de blagues
const jokes = [
  "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent dans le bateau !",
  "Que fait un mouton quand il a faim ? Il mange !",
  "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent dans le bateau !",
  "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent dans le bateau !",
];

module.exports = {
  name: "blague",
  description: "Affiche une blague aléatoire.",
  run: async (client, message, args) => {
    // Choisir une blague aléatoire
    const joke = jokes[Math.floor(Math.random() * jokes.length)];

    // Envoyer la blague dans le canal
    message.channel.send(joke);
  },
};