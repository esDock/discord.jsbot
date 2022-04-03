"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'dice',
    description: 'tres to roll dubs.',
    slash: 'both',
    testOnly: true,
    callback: ({ interaction, message }) => {
        if (interaction) {
            interaction.reply({
                content: String(Math.floor((Math.random() * (99 - 10 + 1)) + 10))
            });
        }
        if (message) {
            message.reply({
                content: String(Math.floor((Math.random() * (99 - 10 + 1)) + 10))
            });
        }
    }
};
