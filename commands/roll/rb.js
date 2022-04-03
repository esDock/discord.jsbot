"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
exports.default = {
    category: 'dice',
    description: 'rolls a number between both the given numbers',
    slash: 'both',
    testOnly: false,
    options: [
        {
            name: 'num1',
            description: 'the lowest number you want to roll between',
            required: true,
            type: discord_js_1.default.Constants.ApplicationCommandOptionTypes.NUMBER,
        },
        {
            name: 'num2',
            description: 'the highest number you want to roll between',
            required: true,
            type: discord_js_1.default.Constants.ApplicationCommandOptionTypes.NUMBER,
        },
    ],
    callback: ({ interaction, message, args }) => {
        const num1 = parseInt(args[0]);
        const num2 = parseInt(args[1]);
        if (num1 < num2) {
            if (interaction) {
                interaction.reply({
                    content: String(Math.floor((Math.random() * (num2 - num1 + 1)) + num1))
                });
                return;
            }
            if (message) {
                message.reply({
                    content: String(Math.floor((Math.random() * (num2 - num1 + 1)) + num1))
                });
                return;
            }
        }
        else {
            return 'Invalid syntax. num1 must be lower than num2';
        }
    }
};
