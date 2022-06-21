"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const discord_js_1 = require("discord.js");
class Button extends discord_js_1.MessageActionRow {
    constructor() {
        super();
    }
    addButton(options) {
        let new_button = new discord_js_1.MessageButton(options);
        this.addComponents(new_button);
    }
    addListener(msg, time, callback) {
        let filter = (i) => i.user.id == msg.author.id && this.components.some((v) => v.customId == i.customId);
        let collector = msg.channel.createMessageComponentCollector({ filter: filter, time: time });
        collector.on("collect", (i) => {
            callback(i);
            collector.stop("collected");
        });
        collector.on("end", (c, r) => {
            if (r == "time") {
                msg.reply("O tempo para responder acabou.");
            }
        });
    }
}
exports.Button = Button;
