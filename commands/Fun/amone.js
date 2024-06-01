const Discord = require("discord.js");

module.exports = {
  name: "amone",
  descriptionfr: "AMONE MOUAHAHAAAHAH",
  descriptionen: "AMONE",
  usage: "",
  run: async (client, message, args) => {
    try {
      await message.delete();
    } catch (error) {
      console.error("Erreur lors de la suppression du message:", error);
    }
    message.channel.send("AMONEEEEE MOUAHAHHAAHHAHAHHAHAHHAHAHHAHAAHAHAAHHAHAHAAHHHAHA");
  }
};