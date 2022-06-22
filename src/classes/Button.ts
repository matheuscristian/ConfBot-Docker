import { MessageActionRow, MessageButton, MessageComponentInteraction, Message, MessageButtonOptions } from 'discord.js'

interface ButtonClickCallBack {
    (i: MessageComponentInteraction): void;
}

export class Button extends MessageActionRow {
    constructor() {
        super();
    }

    addButton(options: MessageButtonOptions): void {
        let new_button = new MessageButton(options);
    
        this.addComponents(new_button);
    }

    addListener(msg:Message, time:number, callback: ButtonClickCallBack): void {
        let filter = (i: MessageComponentInteraction) => i.user.id == msg.author.id && this.components.some((v) => v.customId == i.customId);
        
        let collector = msg.channel.createMessageComponentCollector({ filter: filter, time: time });
        
        collector.on("collect", (i) => {
            callback(i);
            collector.stop("collected");
        });

        collector.on("end", (c, r) => {
            if (r == "time") {
                msg.reply("O tempo para responder acabou.");
            }
        })
    }
}