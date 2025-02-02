# AiDiscordBot
# How to Create a Discord Bot with Node.js, Discord.js, and OpenAI

AI is rapidly developing, and many developers are starting to incorporate it into their projects. However, training your own AI can be a challenging task for beginners in this field.

Fortunately, working with AI has become much easier in recent years, thanks to companies like OpenAI that publish APIs for interacting with pre-trained large neural networks.

In this guide, we'll create a genius Discord bot that can answer complex questions and perform required tasks. For this purpose, we'll use Node.js, Discord.js, and the OpenAI API for GPT-3, one of the largest and smartest trained neural networks.

Let's move from words to action and dive into the exciting work with AI.

### Project Requirements

To create the project, you'll need a couple of accounts and the installation of necessary software.

**Accounts**:

- OpenAI beta account (register at [this link](https://openai.com/api/))
- Discord account (download and register at [this link](https://discord.com/))

**Software Installation**:

- Node.js (download and install from [this link](https://nodejs.org/en/))
- VS Code (download and install from [this link](https://code.visualstudio.com/)), if you don't have a code editor

### Preparing Discord

### Step 1. Log into Discord and create a server

This step is for those who don't have a server. Note that you must have your own server or know someone with permission to add a bot account in later steps. Create a new server by clicking the `+` icon in the left sidebar menu.

### Step 2. Add a new developer application

Go to [`https://discord.com/developers/applications`](https://discord.com/developers/applications), click the `New Application` button in the top right corner, and create a new application.

### Step 3. Name the application

Choose the name `AiBot` and click `Create`.

### Step 4. Create a bot

Go to the `Bot` section in the left sidebar menu and click `Add Bot` on the right side of the screen.

### Step 5. Create a bot token

Click the `Reset Token` button to create a new bot token. This token is confidential information and should not be disclosed. Save it in a text file for later use, as it is only displayed once.

### Step 6. Set the bot's scope and choose permissions

In the settings menu, go to the `OAuth2` > `URL Generator` section. Set the scope to `bot` and select the following permissions: `Read messages`/`View channels`, `Send messages`. These settings will allow the bot to read and write messages in the server chat.

### Step 7. Copy the invitation URL and paste it into the browser

Scroll down and find the `Generated URL`. It looks like this:

```

https://discord.com/api/oauth2/authorize?client_id={YOUR_CLIENT_ID}&permissions=3072&scope=bot

```

Paste this URL into your browser's address bar. Choose the server where you want to authorize the bot and click `Next` or `Continue`.

Accept the necessary permissions and complete the procedure by clicking `Authorize`.

### Step 8. Meet the created bot on the server

Close the tab and return to the server. If everything is done correctly, the bot should appear among the server members.

### Activating the AI Bot

Now that the bot is visible on the server, let's bring it to life with code.

### Step 9. Initialize a new project

Choose a location on your computer, create a new folder there, and name it `aiBot`. Open VS Code and the newly created folder in `File` > `Open Folder`.

Open a new terminal in VS Code by going to `Terminal` > `New Terminal`.

In the terminal, initialize a new Node.js application with the following command:

```

npm init -y

```

### Step 10. Create a new file with code for the bot

Edit the `package.json` file so that the bot's code file is executed when launched.

Create a new Node script file named `bot.js` and write a "Hello world" type code in it, then save.

Then go to the `package.json` file and edit it, specifically changing the lines with `main` and `start`.

Now run the command:

```

npm start

```

The terminal should output the message `Hello AI bot!`.

### Step 11. Install Discord.js dependencies

We've done everything necessary to run the `bot.js` script, now let's install the Discord.js library to interact with Discord.

In the terminal, run the command:

```

npm install discord.js

```

### Step 12. Write code to activate the bot

Open the `bot.js` file and write the following code:

```jsx

// In bot.js
const token = "<YOUR_SAVED_BOT_TOKEN>";// Token saved in step 5 of this guide
const { Client, Intents } = require("discord.js");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.on("ready", () => {
    console.log("The AI bot is online");// Message when the bot is online
});
client.login(token);

```

Replace `<YOUR_SAVED_BOT_TOKEN>` with the token you saved for further work in step 5 of the guide, and enclose it in quotes. Then save the file.

### Step 13. Bot activated

In the terminal, run the following command and look at the server: the bot should appear online.

```

npm start

```

**Troubleshooting**: If you receive an error message `Error: Cannot find module 'node:events'`, make sure that your installed version of Node.js is newer than 16.6.0. You can check your current Node version with the command:

```

node -v

```

If your version is earlier than 16.6.0, go to the [Node.js website](https://nodejs.org/) and install a newer version.

Try restarting the `npm start` command and check the Discord server again. The `AiBot` should appear online!

### Step 14. Provide the bot with code to respond to messages on the server

Edit the `bot.js` file, providing it with code to respond to messages containing an exclamation mark `!` as the first character:

```jsx

// In bot.js
const token = "<YOUR_SAVED_BOT_TOKEN>";// Token saved in step 5 of this guide
const { Client, Intents } = require("discord.js");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.on("ready", () => {
    console.log("The AI bot is online");// Message when the bot is online
});
client.on("message", (message) => {
    if (message.content.substring(0, 1) === "!") {
        message.channel.send("Hello from AI bot");// Response to a message if it contains "!" as the first character
    }
});
client.login(token);

```

Save the changes. Restart the application by pressing `Ctrl + C` in the terminal and running the `npm start` command again.

Send a message on the server with an exclamation mark as the first character. In response, the `AiBot` should react with the greeting phrase `Hello from AI bot`. It will not respond to messages that don't match the specified format.

### Preparing OpenAI GPT-3

The created bot responds to messages, now let's add some intelligence to it. For this, we need to get a token from the OpenAI website.

### Step 15. Get the OpenAI API token

Go to [`https://beta.openai.com/account/api-keys`](https://beta.openai.com/account/api-keys). At the time of creating this guide, the GPT-3 service was still in beta testing. It's possible that the above URL has changed by now. In this case, you need to log into your OpenAI account, go to the `Personal` section in the upper right corner of the website, click on `Personal` and select the option to view API keys.

Click on `Reveal` and save the API key in a safe place. Do not disclose API keys or upload them to GitHub. If there is no secret key, click on `Create new secret key` to create one.

Note that a free account limits the size and possibly the number of questions you can ask the AI.

### Connecting to OpenAI GPT-3

Having obtained the required token from the OpenAI website, we proceed to write code to interact with GPT-3.

### Step 16. Install the OpenAI library

Go to VSCode. If the bot is currently running, stop it with the `Ctrl + C` command in the terminal.

Install the OpenAI library for Node.js with the following command:

```

npm install openai

```

### Step 17. Create a script to interact with GPT-3

In VSCode, create a new file `ai.js`:

Paste the following code into this file and replace `<YOUR_OPENAI_API_KEY>` with the API token obtained in step 15. Don't forget to enclose it in double quotes:

```jsx

// In ai.js
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "<YOUR_OPENAI_API_KEY>",
});
const openai = new OpenAIApi(configuration);
async function ask(prompt) {
    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    const answer = response.data.choices[0].text;
    console.log(answer);
}
// Example question: What are the names of the planets in the solar system?
ask("What are the names of the planets in the solar system?");

```

### Step 18. Check the connection to OpenAI GPT-3

Save the file and go to the terminal. Then run the command:

```

node ai.js

```

If everything worked correctly, you should see the AI's answer in the terminal.

### Let's upgrade the bot with superintelligence

Almost done! We've already done a lot of work! All that's left is to put all the pieces together and bring the bot to a super-genius level.

### Step 19. Connect the Discord bot to GPT-3

In the `ai.js` file, remove the example call to the `ask` function and export the function using `module.exports`. Also, remove the `console.log` and return the answer in the `ask` function:

```jsx

// In ai.js
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "<YOUR_OPENAI_API_KEY>",
});
const openai = new OpenAIApi(configuration);
async function ask(prompt) {
    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    const answer = response.data.choices[0].text;
    return answer;
}
// Export the "ask" function
module.exports = {
    ask,
};

```

Go to the `bot.js` file and apply the following changes:

```jsx

// In bot.js
const { ask } = require("./ai.js");// Import the "ask" function from the "ai.js" file
const token = "<YOUR_SAVED_BOT_TOKEN>";// Token saved in step 5 of the guide
const { Client, Intents } = require("discord.js");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.on("ready", () => {
    console.log("The AI bot is online");// Message when the bot is online
});
client.on("message", async (message) => {
    if (message.content.substring(0, 1) === "!") {
        const prompt = message.content.substring(1);// Remove the exclamation mark from the message
        const answer = await ask(prompt);// GPT-3 response
        message.channel.send(answer);// Reply message in Discord with the response from GPT-3
    }
});
client.login(token);

```

Save the changes. For the last time, stop the bot using `Ctrl + C` and restart it with the command:

```

npm start

```

Go to the Discord server and check if everything is working properly. Write a message in the chat with a question or task, putting an exclamation mark at the beginning.

### Congratulations!

You have created your first AI bot in Discord using Node.js, Discord.js, and the OpenAI API. Now you can show it to your friends or ask it various interesting questions!
