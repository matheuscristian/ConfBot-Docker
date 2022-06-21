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
function exec(client, msg, args, val) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        ((_a = msg.mentions.members) === null || _a === void 0 ? void 0 : _a.first()) ? (_c = (_b = msg.mentions.members) === null || _b === void 0 ? void 0 : _b.first()) === null || _c === void 0 ? void 0 : _c.kick(args[2] ? args[2] : undefined).then((v) => {
            msg.reply(`O membro: ${v.user.username}, foi expulso com sucesso!`);
        }).catch((r) => {
            msg.reply("Ocorreu um erro durante a execução: " + r);
        }) : msg.reply("Nenhum membro especificado!");
    });
}
exports.exec = exec;
