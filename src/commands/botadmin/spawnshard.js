const { Command, } = require('discord.js-commando');

module.exports = class SpawnShardCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'spawnshard',
            group: 'botadmin',
            memberName: 'spawnshard',
            description: 'Spawns shards.',
            examples: [
                'spawnshard',
                'spawnshard 4',
            ],
            args: [
                {
                    key: 'count',
                    prompt: 'Which user do you want to send the DM to?',
                    type: 'integer',
                    default: 1,
                },
            ],
        });
    }

    run(msg, { count, }) {
        
        return msg.say(`A new shard is born!`);
    }
};
