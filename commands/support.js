const { EmbedBuilder } = require('discord.js');
const config = require("../config.js");
const musicIcons = require('../UI/icons/musicicons.js');

module.exports = {
    name: "support",
    description: "Get support server link",
    permissions: "0x0000000000000800",
    options: [],
    run: async (client, interaction, lang) => {
        try {
            const supportServerLink = "https://discord.gg/8xk9Q72dzB";
            const instragramLink = "https://www.instagram.com/siraphat.tf19";
            const facebookLink = "https://www.facebook.com/siraphatthipphawong";
            const spotifyLink = "https://open.spotify.com/user/31ki4543rfa7tlzazbfavpm5jlre?si=6QOHPpSBTOWqCXlOdq_NIg";

            const embed = new EmbedBuilder()
                .setColor('#b300ff')
                .setAuthor({
                    name: lang.support.embed.authorName,
                    iconURL: musicIcons.beats2Icon, 
                    url: config.SupportServer
                })
                .setDescription(lang.support.embed.description
                    .replace("{supportServerLink}", supportServerLink)
                    .replace("{instagramLink}", instagramLink)
                    .replace("{facebookLink}", facebookLink)
                    .replace("{spotifyLink}", spotifyLink)
                )
                .setImage('https://cdn.discordapp.com/attachments/1389027929509466254/1391776769174147232/5d465c3c06bfef37debc075ad41a04a1.gif?ex=686d209f&is=686bcf1f&hm=5126426707c010a5abf57b6096706a5cc2b674a9eaa8cc44119aba34e4e8b4d5&')
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (e) {
            console.error(e);
            const errorEmbed = new EmbedBuilder()
                .setColor('#ff0000')
                .setAuthor({
                    name: lang.support.embed.error,
                    iconURL: musicIcons.alertIcon,
                    url: config.SupportServer
                })
                .setDescription(lang.support.embed.errorDescription)
                .setFooter({ text: lang.footer, iconURL: musicIcons.heartIcon });

            await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
        }
    },
};