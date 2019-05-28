const Discord = require('discord.js');
const path = require('path');
const config = require('./config');

const manager = new Discord.ShardingManager(path.join(__dirname, './src/index.js'), {
    token: config.sharding.token,
    totalShards: config.sharding.totalShards,
    mode: 'worker',
});

manager.on('shardCreate', shard => {
    console.log(`----- SHARD ${shard.id} LAUNCHED -----`);
    shard.on('death', () => console.log(`----- SHARD ${shard.id} DIED -----`))
        .on('ready', () => console.log(`----- SHARD ${shard.id} READY -----`))
        .on('disconnect', () => console.log(`----- SHARD ${shard.id} DISCONNECTED -----`))
        .on('reconnecting', () => console.log(`----- SHARD ${shard.id} RECONNECTING -----`));
});

manager.spawn().catch(console.error);
