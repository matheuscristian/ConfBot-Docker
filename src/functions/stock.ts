import { Client, Message } from "discord.js";
import { writeFileSync } from "fs";

export async function exec(client: Client, msg: Message, args: Array<string>, val: any) {
    if (!val.method) return;
    
    if (val.method == "add") {
        process.env.stock = String(Number.parseInt(process.env.stock || "0") + val.value);
    } else if (val.method == "remove") {
        process.env.stock = String(Number.parseInt(process.env.stock || "0") - val.value);
    } else if (val.method == "list") {
        msg.reply(`Total stock: ${process.env.stock}`);
    }

    writeFileSync("./.stock", process.env.stock || "-1");
}