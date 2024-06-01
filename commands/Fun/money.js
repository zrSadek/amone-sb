const Discord = require("discord.js");

module.exports = {
  name: "money",
  descriptionfr: "[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]",
  descriptionen: "[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]",
  usage: "",
  run: async (client, message, args) => {
    try {
      await message.delete();
    } catch (error) {
      console.error("Erreur lors de la suppression du message:", error);
    }
    message.channel.send("[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]");
  }
};