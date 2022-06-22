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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const discord_js_1 = require("discord.js");
const Button_1 = require("../classes/Button");
const readConfig_js_1 = __importDefault(require("../readConfig.js"));
function exec(client, msg, args, val) {
    return __awaiter(this, void 0, void 0, function* () {
        const newButtons = new Button_1.Button();
        const events = [];
        val === null || val === void 0 ? void 0 : val.buttons.forEach((btn) => {
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
                    }
                    catch (err) {
                        let errembed = new discord_js_1.MessageEmbed()
                            .setTitle("ConfBot Error")
                            .setDescription("> Ocorreu um erro durante a execução do código :disappointed_relieved:. Tente contatar o desenvolvedor deste bot saber a causa do erro. Se você for o desenvolvedor e encontrou um bug, entre na documentação do ConfBot: https://github.com/M4THEWS2/ConfBot/issues e reporte-o.\n ```" + err + "```");
                        msg.reply({ "embeds": [errembed] }); // Envia mensagem de erro
                        if (readConfig_js_1.default.printErrOnTerminal) { // Se estiver ativo escreve no terminal o que aconteceu
                            console.log(err);
                        }
                    }
                }
            });
        });
        msg.channel.send({ content: val === null || val === void 0 ? void 0 : val.content, components: [newButtons] });
    });
}
exports.exec = exec;
