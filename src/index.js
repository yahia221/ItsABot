// const Discord = require('discord.js');
const Commando = require('discord.js-commando');
const path = require('path');

const client = new Commando.Client({
    owner: '112368740926058496',
});

client.registry
    .registerGroups([
        ['fun', 'Fun commands'],
        ['admin', 'Guild admin commands'],
        ['botadmin', 'Bot admin commands']
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'));

console.log(`[log][shard ${client.shard.id}] Online!`); // use winston logging, add shard to log message.
client.login();


// demo: https://github.com/discordjs/Commando/blob/master/test/