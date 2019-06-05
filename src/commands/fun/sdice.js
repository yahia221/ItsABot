const { Command, } = require('discord.js-commando');

module.exports = class SexyDice extends Command {
    constructor(client) {
        super(client, {
            name: 'sdice',
            group: 'fun',
            memberName: 'sdice',
            description: 'Rolls the fetish dice.',
            examples: [
                'sdice - Rolls the fetish dice.',
                'sdice <user> - Rolls the fetish dice for you and a user.',
            ],
            args: [
                {
                    key: 'victim',
                    prompt: 'Who do you want to fetishize?',
                    type: 'user',
                    default: '',
                },
            ],
        });
    }

    run(msg, { victim, }) {

        const sexyContent = {
            primary: [
                'Lick',
                'Eat',
                'Suck',
                'Touch',
                'Spread',
                'Rub',
                'Finger',
                'Pat',
                'Kiss',
                'Whip',
                'Paddle',
                'Blow',
                'Bite',
                'Hug',
                'Tease',
                'Nibble',
                'Spank',
                'Smack',
                'Twist',
                'Smell',
                'Inhale',
                'Cum on',
                'Shit on',
                'Piss on',
                'Penetrate',
            ],
            victim: [
                'his',
                'her',
                'your',
            ],
            secondary: [
                'toes',
                'ass',
                'lips',
                'ears',
                'nose',
                'eyes',
                'chin',
                'neck',
                'back',
                'feet',
                'tongue',
                'fingers',
                'hand',
                'armpit',
                'pussy',
                'balls',
                'cock',
                'thigh',
                'body',
                'cheek',
                'nipples',
                'boobs',
                'calzone',
                'vagooter',
                'cum',
                'piss',
                'shit',
            ],
            location: [
                'kitchen',
                'bathroom',
                'bedroom',
                'living room',
                'library',
                'supermarket',
                'post office',
                'gas station bathroom',
            ],
        };

        if (victim !== '') sexyContent.victim.push(`${victim}'s`);

        const person = sexyContent.victim[Math.floor(Math.random() * sexyContent.victim.length)];
        const primary = sexyContent.primary[Math.floor(Math.random() * sexyContent.primary.length)];
        const secondary = sexyContent.secondary[Math.floor(Math.random() * sexyContent.secondary.length)];
        const location = (Math.random() >= 0.5 ? ` in the ${sexyContent.location[Math.floor(Math.random() * sexyContent.location.length)]}` : '');
        const message = `${primary} ${person} ${secondary}${location}.`;

        return msg.say(`🎲❤🎲 **${message}** 🎲❤🎲`);
    }
};
