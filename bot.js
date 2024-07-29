const { ask } = require("./ai.js");
require("dotenv").config();

const token = DISCORD_BOT_TOKEN;
const {Client, Events, GatewayIntentBits,Partials,} = require("discord.js");
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
	partials: [Partials.Channel, Partials.Message,],
});
client.on("ready", () =>{
    console.log("The AI bot is online"); //Сообщение, когда бот в сети
});

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("messageCreate", async (message) => {
    if (
        
        message.content.substring(0, 1) === "!") {
        const prompt = message.content.substring(1);
		console.log(prompt);

        const answer = await ask(prompt); //Ответ GPT-3
		console.log(answer);
        message.channel.send(answer); 
		
    }
});
client.login(token);
