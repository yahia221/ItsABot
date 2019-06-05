const { Command, } = require('discord.js-commando');
// const { RichEmbed, } = require('discord.js');
// const emojiHelper = require('node-emoji');
// const emojione = require('emojione');
// const https = require('https');
// const Soup = require('jssoup').default;

module.exports = class EmojifyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'emojify',
            group: 'fun',
            memberName: 'emojify',
            description: 'Text to emoji letters.',
            examples: [
                'emojify Hey there',
            ],
            args: [
                {
                    key: 'text',
                    prompt: 'What do you want to emojify?',
                    type: 'string',
                },
            ],
        });
    }

    async run(msg, { text, }) {
        const map = {
            a: ':regional_indicator_a:',
            b: ':regional_indicator_b:',
            c: ':regional_indicator_c:',
            d: ':regional_indicator_d:',
            e: ':regional_indicator_e:',
            f: ':regional_indicator_f:',
            g: ':regional_indicator_g:',
            h: ':regional_indicator_h:',
            i: ':regional_indicator_i:',
            j: ':regional_indicator_j:',
            k: ':regional_indicator_k:',
            l: ':regional_indicator_l:',
            m: ':regional_indicator_m:',
            n: ':regional_indicator_n:',
            o: ':regional_indicator_o:',
            p: ':regional_indicator_p:',
            q: ':regional_indicator_q:',
            r: ':regional_indicator_r:',
            s: ':regional_indicator_s:',
            t: ':regional_indicator_t:',
            u: ':regional_indicator_u:',
            v: ':regional_indicator_v:',
            w: ':regional_indicator_w:',
            x: ':regional_indicator_x:',
            y: ':regional_indicator_y:',
            z: ':regional_indicator_z:',
        };

        let emojified = '';
        for (let i = 0; i < text.length; i++) {
            const char = text.charAt(i);
            if (Object.keys(map).indexOf(char) !== -1) {
                emojified += map[char];
            } else {
                emojified += text.charAt(i);
            }
        }
        return msg.say(emojified);
    }
};
