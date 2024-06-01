const { language } = require("../../fonctions");

const { joinVoiceChannel } = require('@discordjs/voice');

const fs = require('fs').promises;

module.exports = {

    name: "joinvc",

    description: "Rejoindre un salon vocal",

    run: async (client, message, args, db, prefix) => {

        try {

            let channel = message.mentions.channels.first() || client.channels.cache.get(args[0]);

            if (!channel) {

                try {

                    channel = await client.channels.fetch(args[0]);

                } catch (error) {

                    return message.edit(await language(client, "Veuillez me donner un salon vocal valide", "Please provide a valid voice channel"));

                }

            }

            if (!channel || (channel.type !== "GUILD_VOICE" && channel.type !== "GUILD_STAGE_VOICE")) {

                return message.edit(await language(client, "Veuillez me donner un salon vocal valide", "Please provide a valid voice channel"));

            }

            // Rejoindre le salon vocal

            const connection = joinVoiceChannel({

                channelId: channel.id,

                guildId: channel.guild.id,

                adapterCreator: channel.guild.voiceAdapterCreator

            });

            // Chargement des données de l'utilisateur depuis le fichier

            const userId = message.author.id;

            const userFilePath = `./db/${userId}.json`;

            let userDb = {};

            try {

                const data = await fs.readFile(userFilePath, 'utf8');

                userDb = JSON.parse(data);

            } catch (error) {

                console.log("No existing user data found, creating new data.");

            }

            // Exemple de manipulation de données utilisateur (ajouter des données spécifiques ici)

            userDb.lastVoiceChannel = channel.id;

            // Enregistrement des données de l'utilisateur

            await fs.writeFile(userFilePath, JSON.stringify(userDb, null, 2), 'utf8');

            message.edit(await language(client, `Je suis maintenant connecté au salon vocal : ${channel.name}`, `I have now joined the voice channel: ${channel.name}`));

        } catch (error) {

            console.error(error);

            message.edit(await language(client, "Une erreur s'est produite en essayant de rejoindre le salon vocal", "An error occurred while trying to join the voice channel"));

        }

    }

};
         
