const fs = require('fs');
const Discord = require('discord.js-selfbot-v13');

module.exports = {
  name: "branlette",
  description: "La meilleure commande",
  run: async (client, message, args) => {
    const sltcv = [
      "8=:fist:==D",
      "8==:fist:=D",
      "8===:fist:D",
      "8==:fist:=D",
      "8=:fist:==D",
      "8:fist:===D",
      "8=:fist:==D",
      "8==:fist:=D",
      "8===:fist:D",
      "8==:fist:=D:sweat_drops:",
      "8===:fist:D:sweat_drops:"
    ];

    sltcv.forEach(c => message.edit(c).catch(() => false));
  }
};
