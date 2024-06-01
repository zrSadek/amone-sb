module.exports = {

  name: "support",

  description: "Server Support",

  run: async (client, message, args) => {

    try{

      message.edit(`**Voici notre server support **➜  https://discord.com/invite/mRrJEeP6pM

 au cas ou le lien du serveur est invalide envoie un message à <@1213863633298133083>`)

    }

    catch(e){console.log(e)}

  }

}