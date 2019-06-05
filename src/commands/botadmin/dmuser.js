const { Command, } = require('discord.js-commando');

module.exports = class DMCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dm',
            group: 'botadmin',
            memberName: 'dm',
            description: 'DM\'s a user.',
            examples: [
                'dm @User Hi there!',
            ],
            args: [
                {
                    key: 'user',
                    prompt: 'Which user do you want to send the DM to?',
                    type: 'user',
                },
                {
                    key: 'content',
                    prompt: 'What would you like the content of the message to be?',
                    type: 'string',
                },
            ],
        });
    }

    run(msg, { user, content, }) {
        user.send(content);
        return msg.say('Done.');
    }
};
