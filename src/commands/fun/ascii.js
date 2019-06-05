const { Command, } = require('discord.js-commando');
const asciiEngine = require('ascii-art');

const fonts = [
    'doom',
    'rusted',
];

module.exports = class AsciiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ascii',
            group: 'fun',
            memberName: 'ascii',
            description: 'Create ascii art text.',
            examples: [
                'sdice <font> Hello',
            ],
            args: [
                {
                    key: 'font',
                    prompt: 'What font do you want?',
                    type: 'user',
                    default: 'doom',
                    validate: font => {
                        console.log(font);
                        if (fonts.indexOf(font.toLowerCase()) === -1) return `Invalid font provided. (${fonts.join(', ')})`;
                        return true;
                    },
                },
                {
                    key: 'text',
                    prompt: 'What should we make ascii?',
                    type: 'string',
                },
            ],
        });
    }

    run(msg, { font, text, }) {

        // return msg.say(`🎲❤🎲 **${message}** 🎲❤🎲`);
        const it = asciiEngine.font(text, font);
        console.log(it);
        return msg.say(`no ${font} ${text}`);
    }
};
