const Discord = require("discord.js-selfbot-v13");

const { language } = require("../../fonctions");

module.exports = {

  name: "divers",

  description: "Menu fun",

  run: async (client, message, args, db, prefix) => {

    message.edit(

      await language(

        client,

        `☆ __**Amone - divers**__ ☆

\`&doubleflip\` ➜ **┻━┻︵ (°□°)/ ︵ ┻━┻**

\`&serious\` ➜ **༼ つ ◕_◕ ༽つ**

\`&idc\` ➜ **╭∩╮（︶︿︶）╭∩╮**

\`&lenny\` ➜ **( ͡° ͜ʖ ͡°)**

\`&money\` ➜ **[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]**

\`&serious\` ➜ **(ಠ_ಠ)**

\`&tableflip\` ➜ **(╯°□°）╯︵ ┻━┻**

\`&gimme\` ➜ **┬──┬ ノ( ゜-゜ノ)**`,

        `⛧ __**SPEED**__ ⛧

\`&doubleflip\` ➜ **┻━┻︵ (°□°)/ ︵ ┻━┻**

\`&serious\` ➜ **༼ つ ◕_◕ ༽つ**

\`&idc\` ➜ **╭∩╮（︶︿︶）╭∩╮**

\`&lenny\` ➜ **( ͡° ͜ʖ ͡°)**

\`&money\` ➜ **[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]**

\`&serious\` ➜ **(ಠ_ಠ)**

\`&tableflip\` ➜ **(╯°□°）╯︵ ┻━┻**

\`&gimme\` ➜ **┬──┬ ノ( ゜-゜ノ)**`

      )

    );

  },

};