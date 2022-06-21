import { Client, Message } from "discord.js";

export async function exec(client: Client, msg: Message, args: Array<string>, val: any) {
    msg.mentions.members?.first() ? msg.mentions.members?.first()?.kick(args[2] ? args[2] : undefined).then((v) => {
        msg.reply(`O membro: ${v.user.username}, foi expulso com sucesso!`);
    }).catch((r) => {
        msg.reply("Ocorreu um erro durante a execução: " + r);
    }) : msg.reply("Nenhum membro especificado!");
}