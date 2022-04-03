import DiscordJS from 'discord.js'
import { ICommand } from "wokcommands"

export default {
    category: 'dice',
    description: 'tres to roll dubs.',
    
    slash: 'both', // false enables legacy only. both wil make it so bot work
    testOnly: false, //false will allow to be used globally

    callback: ({ interaction, message }) => {
        if (interaction) {
            interaction.reply({
                content: String(Math.floor((Math.random() *(99-10 + 1)) + 10))
            })
        }

        if (message) {
            message.reply({
                content: String(Math.floor((Math.random() *(99-10 + 1)) + 10))
            })
        }

    }
} as ICommand