const fs = require('fs');
const path = require('path');

module.exports = {
  name: "listpremium",
  description: "Affiche la liste des membres premium.",
  run: async (client, message, args) => {
    const configPath = path.join(__dirname, '../../config.json');
    
    fs.readFile(configPath, 'utf8', (err, data) => {
      if (err) {
        console.error("Erreur lors de la lecture du fichier config.json", err);
        return message.edit("Erreur lors de la lecture de la configuration.");
      }

      const config = JSON.parse(data);

      if (!config.premiumUsers || config.premiumUsers.length === 0) {
        return message.edit("Il n'y a aucun utilisateur dans la liste des membres premium.");
      }

      const premiumUsers = config.premiumUsers.map(id => `<@${id}>`).join('\n');
      message.edit(`Liste des membres premium :\n${premiumUsers}`);
    });
  },
};