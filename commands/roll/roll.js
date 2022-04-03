"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
exports.default = {
    category: 'dice',
    description: 'rolls a number between 1 and the given number',
    slash: 'both',
    testOnly: false,
    options: [
        {
            name: 'number',
            description: 'Number you want to roll through',
            required: true,
            type: discord_js_1.default.Constants.ApplicationCommandOptionTypes.NUMBER,
        },
    ],
    callback: ({ interaction, message, args }) => {
        const number = parseInt(args[0]);
        if (number >= 2) {
            if (interaction) {
                interaction.reply({
                    content: String(Math.floor((Math.random() * number) + 1))
                });
                return;
            }
            if (message) {
                message.reply({
                    content: String(Math.floor((Math.random() * number) + 1))
                });
                return;
            }
        }
        else {
            return 'Number is not high enough to roll';
        }
    }
};
