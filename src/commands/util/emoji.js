const { Command, } = require('discord.js-commando');
const { RichEmbed, } = require('discord.js');
const emojiHelper = require('node-emoji');
const emojione = require('emojione');
const https = require('https');
const Soup = require('jssoup').default;

module.exports = class EmojiViewCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'e',
            aliases: [
                'emoji',
            ],
            group: 'util',
            memberName: 'e',
            description: 'Embeds emoji as images.',
            examples: [
                'e 🎲',
                'e :custom_emoji:',
            ],
            args: [
                {
                    key: 'emoji',
                    prompt: 'Which emoji do you want to embed?',
                    type: 'string',
                },
            ],
        });
    }

    async run(msg, { emoji, }) {
        let embedURL = '';
        let embedName = '';
        let embedSize = 0;

        if (/<:([a-zA-Z0-9_]+):([0-9]+)>/.test(emoji)) {
            // Static custom emoji
            const matches = emoji.match(/<:([a-zA-Z0-9_]+):([0-9]+)>/);
            embedURL = `https://cdn.discordapp.com/emojis/${matches[2]}.png`;
            embedName = matches[1];

            await new Promise((resolve, reject) => {
                const req = https.request({
                    method: 'HEAD',
                    host: 'cdn.discordapp.com',
                    port: 443,
                    path: `/emojis/${matches[2]}.png`,
                }, res => {
                    resolve(res.headers['content-length']);
                });
                req.end();
            // eslint-disable-next-line no-return-assign
            }).then(bytes => embedSize = bytes);

        } else if (/<a:([a-zA-Z0-9_]+):([0-9]+)>/.test(emoji)) {
            // Animated emoji
            const matches = emoji.match(/<a:([a-zA-Z0-9_]+):([0-9]+)>/);
            embedURL = `https://cdn.discordapp.com/emojis/${matches[2]}.gif`;
            embedName = matches[1];

            await new Promise((resolve, reject) => {
                const req = https.request({
                    method: 'HEAD',
                    host: 'cdn.discordapp.com',
                    port: 443,
                    path: `/emojis/${matches[2]}.gif`,
                }, res => {
                    resolve(res.headers['content-length']);
                });
                req.end();
            // eslint-disable-next-line no-return-assign
            }).then(bytes => embedSize = bytes);

        } else if (typeof emojiHelper.find(emoji) !== 'undefined') {
            // Vanilla emoji
            const htmlmao = emojione.toImage(emoji);
            const img = new Soup(htmlmao).find('img');
            embedURL = img.attrs.src.replace('/32/', '/128/');
            embedName = emojiHelper.which(emoji);
        } else {
            console.log(emoji);
            return msg.say('Invalid emoji supplied.');
        }

        const embed = new RichEmbed()
            .setImage(embedURL)
            .setAuthor(msg.author.username, msg.author.displayAvatarURL)
            .setDescription(embedName)
            .setColor(0x00AE86)
            .setTimestamp();

        if (embedSize > 0) embed.setFooter(embedSize + ' Bytes');
        return msg.embed(embed);
    }
};
