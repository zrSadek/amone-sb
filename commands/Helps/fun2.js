const { language } = require("../../fonctions");

module.exports = {

  name: "fun2",

  description: "Menu fun",

  run: async (client, message, args, db, prefix) => {

    message.edit(

      await language(

        client,

        `♫︎ __**Amone - Fun**__ ♫︎

\`${prefix}dadjoke\` ☆ **Obtenez une blague de papa aléatoire !**

\`${prefix}mock\` ☆ **Parodie le texte que vous fournissez !**

\`${prefix}meme\` ☆ **Affiche un mème aléatoire.**

\`${prefix}caca\` ☆ **Jetez virtuellement du caca sur quelqu'un ! 💩**

\`${prefix}rizz\` ☆ **Envoyez un message séduisant avec une touche de riz ! 🍚**

\`${prefix}pizza\` ☆ **Envoie une pizza virtuelle à quelqu'un ! 🍕**

`

      )

    );

  },

};