import { Client, Message, MessageEmbed } from "discord.js";

export async function exec(client: Client, msg: Message, args: Array<string>, val: any) {
    const newEmbed = new MessageEmbed()
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

    val.reply ? await msg.reply({ embeds: [newEmbed] }) : await msg.channel.send({ embeds: [newEmbed] });
}