const { Command, version, } = require('discord.js-commando');
const config = require('../../../config');

module.exports = class StatsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'stats',
            group: 'botadmin',
            memberName: 'stats',
            description: 'Replies with bot statistics.',
            examples: [
                'stats',
            ],
        });
    }

    run(msg) {
        return msg.say(`= STATISTICS =
• Mem Usage        :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Users            :: ${this.client.users.size.toLocaleString()}
• Servers          :: ${this.client.guilds.size.toLocaleString()}
• Your Shard       :: ${this.client.shard.id}
• Allocated Shards :: ${config.sharding.totalShards}
• Channels         :: ${this.client.channels.size.toLocaleString()}
• Discord.js       :: v${version}
• Node             :: ${process.version}`, { code: 'asciidoc', });
    }
};
