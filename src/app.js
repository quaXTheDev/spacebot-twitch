require('dotenv').config()
import tmi from 'tmi.js'
import fs from 'fs'

const client = new tmi.Client({
	options: { debug: true },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: process.env.botname,
		password: process.env.token
	},
	channels: [ process.env.channel ]
});
client.connect();
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === 'hello' || message.toLowerCase() === 'merhaba' || message.toLowerCase() === 'selam' || message.toLowerCase() === 'selam' || message.toLowerCase() === 'HeyGuys') {
		client.say(channel, `slm @${tags.username}`);
    }
    if(message.toLowerCase() === '!np') {
        const np = fs.readFileSync('../snip/snip.txt', 'utf8')
        console.log(np);
        if(np == ''){
            client.say(channel, `şu anda bir şey çalmıyor`);
            return;
        }
		client.say(channel, `şu anda ${np} çalıyor!`);
	}
	if(message.toLowerCase() == `!youtube`){
		client.say(channel, "şu an youtube'da değilim ancak en kısa sürede başlmak istiyorum")
	};
	if(message.toLowerCase() == `!discord`){
		client.say(channel, "bu discord sunucusu sadece bu kanala ait olmayıp temelinde bir sohbet sunucusu, ama yayınlarım için özel kanallar var. discord.gg/WapXfXR");
	}
	if(message.toLowerCase() == `!twitter`){
		client.say(channel, "şu anda twitter kullanmıyorum ama en kısa sürede katılacağım")
	}
	if(message.toLowerCase() == `!github`){
		client.say(channel, "spaghettimi tatmak isterseniz: github.com/quaxthedev")
	}
	if(message.toLowerCase() == `!komutlar`){
		client.whisper(tags.username, "komutlar: !youtube !discord !np !twitter !komutlar !github");
	}
	if(message.toLowerCase() == `!kurallar`){
		client.whisper(tags.username, "Topluluk içinde veya dışında kimseye zarar vermeyin, moderatörleri yormayın, kendinizi komik sanıp kuralları yoksaymayın. Cezalandırmalar: İlk hatada 1 dakika t/o, ikinci hatada 5 dakika t/o, üçüncü hatada 10 dakika t/o, dördüncü hatada kalıcı ban")
	}
});