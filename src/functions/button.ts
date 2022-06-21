import { Client, Message, MessageEmbed } from "discord.js";
import { Button } from "../classes/Button";
import config from "../readConfig";

interface event_btn_press {
    id: string;
    onPress: any;
}

export async function exec(client: Client, msg: Message, args: Array<string>, val: any) {
    const newButtons = new Button();
    
    const events: Array<event_btn_press> = [];
    val?.buttons.forEach((btn: any) => {
        const id = String(Math.floor(Math.random() * 999999));
        newButtons.addButton({ label: btn.label, style: btn.style, customId: id });
        if (btn.onPress) {
            events.push({ id: id, onPress: btn.onPress });
        }
    });

    newButtons.addListener(msg, 10000, (i) => {
        events.forEach((e) => {
            if (e.id == i.customId) {
                try {
                    let commandFunction = require(`./${e.onPress.name}`).exec;
                    commandFunction(client, msg, args, e.onPress);
                    i.update({ components: [] });
                } catch (err) {
                    let errembed = new MessageEmbed()
                        .setTitle("ConfBot Error")
                        .setDescription("> Ocorreu um erro durante a execução do código :disappointed_relieved:. Tente contatar o desenvolvedor deste bot saber a causa do erro. Se você for o desenvolvedor e encontrou um bug, entre na documentação do ConfBot: https://github.com/M4THEWS2/ConfBot/issues e reporte-o.\n ```" + err + "```");
                    msg.reply({ "embeds": [errembed] }); // Envia mensagem de erro

                    if (config.printErrOnTerminal) { // Se estiver ativo escreve no terminal o que aconteceu
                        console.log(err);
                    }
                }
            }
        });
    });

    msg.channel.send({ content: val?.content, components: [newButtons] });
}