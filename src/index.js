const Commando = require('discord.js-commando');
const logger = require('./modules/logger')();
const path = require('path');

const client = new Commando.Client({
    owner: '112368740926058496',
});

client.logger = logger;

client.registry
    .registerGroups([
        [
            'fun', 'Fun commands',
        ],
        [
            'util', 'Utility commands',
        ],
        [
            'admin', 'Guild admin commands',
        ],
        [
            'botadmin', 'Bot admin commands',
        ],
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'));

logger.info(`[Shard ${client.shard.id}] Online!`, client.shard.id); // use winston logging, add shard to log message.
client.login();
