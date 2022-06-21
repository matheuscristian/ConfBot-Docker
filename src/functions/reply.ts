import { Client, Message } from "discord.js";

export async function exec(client: Client, msg: Message, args: Array<string>, val: any) {
    await msg.reply(val.content);
}