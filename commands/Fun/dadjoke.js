const fetch = require('node-fetch');

module.exports = {
    name: 'dadjoke',
    description: 'Obtenez une blague de papa aléatoire !',
    run: async (client, message, args) => {
        const res = await fetch('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' }
        });
        const joke = await res.json();
        message.edit(joke.joke);
    }
};
