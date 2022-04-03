import DiscordJS from 'discord.js'
import { ICommand } from "wokcommands"

export default {
    category: 'dice',
    description: 'rolls a number between 1 and the given number',
    
    slash: 'both', // false enables legacy only. both wil make it so bot work
    testOnly: false, //false will allow to be used globally
    options: [
        {
            name: 'number',
            description: 'Number you want to roll through',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,

        },
        
    ],

    callback: ({ interaction, message, args }) => {
        const number = parseInt(args[0])
        if (number >= 2) {
            
            if (interaction) {
                interaction.reply({
                    content: String(Math.floor((Math.random() * number) + 1))
                })
                return
            }

            if (message) {
                message.reply({
                    content: String(Math.floor((Math.random() * number) + 1))
                })
                return
            }

        } else {
            return 'Number is not high enough to roll'
        }
    }
} as ICommand