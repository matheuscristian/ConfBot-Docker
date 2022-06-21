import { Client, MessageEmbed } from "discord.js";

const config = JSON.parse(String(process.env.config));
import activities from "./readActivities";

// import hidden from "./hidden";

const client = new Client({ intents: ["DIRECT_MESSAGES", "GUILDS", "GUILD_MESSAGES", "GUILD_BANS", "GUILD_MEMBERS"] });

client.on("ready", (c) => {
    const date = new Date();
    console.log(`I'm ready at: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`); // Manda uma mensagem quando o bot estiver pronto

    let i;
    setInterval(() => {
        i = activities[Math.floor(Math.random() * activities.length)]; // Copia uma activity aleatória do array json
        c.user.setActivity(i.msg, { type: i.type /*Type pode ser: "WATCHING", "PLAYING", "STREAMING", "LISTENING", "CUSTOM", "COMPETING"*/ });
    }, 5000);
});

client.on("messageCreate", (msg) => {
    if (msg.author.bot === true) { return } // Verifica se a mensagem não é de um bot
    else if (!msg.content.startsWith(config.prefix)) { return }; // Verifica se a mensagem começa com o prefixo

    let commandName = msg.content.split(" ")[0]; // Cria uma variável que contém o comando enviado com o prefixo
    let args = msg.content.split(" "); // Cria variável que contém os parametros do comando
    commandName = commandName.substring(config.prefix.length, commandName.length).toLowerCase(); // Retira o prefixo do comando


    let notFound = true;
    config.commands.forEach((command: any) => {
        if (command.name == commandName) {
            notFound = false;
            command.functions.forEach((val: any) => {
                try {
                    let commandFunction = require(`./functions/${val.name}`).exec;
                    commandFunction(client, msg, args, val);
                } catch (err) {
                    let errembed = new MessageEmbed()
                        .setTitle("ConfBot Error")
                        .setDescription("> Ocorreu um erro durante a execução do código :disappointed_relieved:. Tente contatar o desenvolvedor deste bot saber a causa do erro. Se você for o desenvolvedor e encontrou um bug, entre na documentação do ConfBot: https://github.com/M4THEWS2/ConfBot/issues e reporte-o.\n ```" + err + "```");
                    msg.reply({ "embeds": [errembed] }); // Envia mensagem de erro

                    if (config.printErrOnTerminal) { // Se estiver ativo escreve no terminal o que aconteceu
                        console.log(err);
                    }
                }
            });
        }
    });

    notFound ? msg.reply(config.commandNotFoundMessage) : null;
});

// client.login(hidden.token);
client.login(process.env.token);