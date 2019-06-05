const Discord = require('discord.js');
const path = require('path');
const config = require('./config');
const logger = require('./src/modules/logger')();

const manager = new Discord.ShardingManager(path.join(__dirname, './src/index.js'), {
    token: config.sharding.token,
    totalShards: config.sharding.totalShards,
    mode: 'worker',
});

manager.on('shardCreate', shard => {
    logger.info(`----- SHARD ${shard.id} LAUNCHED -----`);
    shard.on('death', () => logger.error(`----- SHARD ${shard.id} DIED -----`))
        .on('ready', () => logger.info(`----- SHARD ${shard.id} READY -----`))
        .on('disconnect', () => logger.warn(`----- SHARD ${shard.id} DISCONNECTED -----`))
        .on('reconnecting', () => logger.info(`----- SHARD ${shard.id} RECONNECTING -----`));
});

manager.spawn().catch(logger.error);
