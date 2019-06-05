const { Command, } = require('discord.js-commando');
const request = require('request');
const Soup = require('jssoup').default;

module.exports = class GizoogleCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'gz',
            aliases: [
                'gizoogle',
                'snoop',
            ],
            group: 'fun',
            memberName: 'gz',
            description: 'Converts your message into a wacky SnoopDog message.',
            examples: [
                'gz How are you',
                'gizoogle How are you',
                'snoop How are you',
            ],
            args: [
                {
                    key: 'content',
                    prompt: 'What would you like the content of the message to be?',
                    type: 'string',
                },
            ],
        });
    }

    run(msg, { content, }) {
        const options = {
            method: 'POST',
            url: 'http://www.gizoogle.net/textilizer.php',
            form: { translatetext: content, }, };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            const textarea = new Soup(body).find('textarea');
            if (typeof textarea.nextElement._text === 'undefined') return msg.say('Invalid entry provided.');
            return msg.say(textarea.nextElement._text);
        });
    }
};
