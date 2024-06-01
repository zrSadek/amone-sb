const { Client, Intents } = require('discord.js-selfbot-v13');
const fs = require('fs');
const path = require('path');

module.exports = {
  name: "moveall",
  description: "Déplace tous les comptes listés dans le fichier config.json vers un salon vocal spécifique.",
  usage: "<mention_du_salon>",
  run: async (client, message, args) => {
    const configPath = path.join(__dirname, '../../config.json');
    const configData = fs.readFileSync(configPath, 'utf8');
    const config = JSON.parse(configData);

    // Vérifier si l'utilisateur est l'owner du bot
    if (!config.owner.includes(message.author.id)) {
      return message.edit(`\`🚫\` Tu n'as pas l'accès à cette commande.`);
    }

    // Vérifier si un salon a été mentionné
    const channelMention = message.mentions.channels.first();
    if (!channelMention) {
      return message.edit(`\`❗\` Veuillez mentionner un salon vocal valide.`);
    }

    const targetChannel = message.guild.channels.cache.get(channelMention.id);
    if (!targetChannel || targetChannel.type !== 'GUILD_VOICE') {
      return message.edit(`\`❗\` Veuillez mentionner un salon vocal valide.`);
    }

    // Fonction pour connecter un compte et le déplacer vers le salon vocal
    const connectAndMoveUser = async (token) => {
      const userClient = new Client({
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES],
        checkUpdate: false
      });

      userClient.on('ready', async () => {
        console.log(`Connecté en tant que ${userClient.user.tag}`);
        const guild = userClient.guilds.cache.get(message.guild.id);
        if (guild) {
          const member = guild.members.cache.get(userClient.user.id);
          if (member) {
            member.voice.setChannel(targetChannel.id).catch(error => {
              console.error(`Erreur lors du déplacement de ${member.user.tag} :`, error);
            });
          }
        }
      });

      await userClient.login(token).catch(console.error);
    };

    // Connecter chaque utilisateur et les déplacer vers le salon vocal
    for (const token of config.tokens) {
      await connectAndMoveUser(token);
    }

    message.edit(`\`✅\` Tous les comptes ont été déplacés vers le salon vocal ${channelMention.name}.`);
  }
};