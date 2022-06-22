"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const discord_js_1 = require("discord.js");
function exec(client, msg, args, val) {
    return __awaiter(this, void 0, void 0, function* () {
        const newEmbed = new discord_js_1.MessageEmbed()
            .setTitle(val.embedContent.title)
            .setDescription(val.embedContent.description);
        if (val.embedContent.color) {
            newEmbed.setColor(val.embedContent.color);
        }
        if (val.embedContent.thumbnail) {
            newEmbed.setThumbnail(val.embedContent.thumbnail);
        }
        if (val.embedContent.image) {
            newEmbed.setImage(val.embedContent.image);
        }
        val.reply ? yield msg.reply({ embeds: [newEmbed] }) : yield msg.channel.send({ embeds: [newEmbed] });
    });
}
exports.exec = exec;
