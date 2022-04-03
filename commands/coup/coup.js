"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Coup',
    description: 'Chance to become king',
    slash: false,
    testOnly: true,
    callback: ({ guild, message, interaction }) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        //rs id 792856600825954314
        //ts id 792867680842940459
        if (message) {
            yield ((_a = message.guild) === null || _a === void 0 ? void 0 : _a.members.fetch());
            const kingId = "792856600825954314"; //roll Id
            const kingRole = (_b = message.guild) === null || _b === void 0 ? void 0 : _b.roles.cache.get("792856600825954314"); //role object
            const pKing = message.member; //author member object
            const currentGuild = message.guild;
            const cKingGet = kingRole === null || kingRole === void 0 ? void 0 : kingRole.members.map(m => m.user.id); // User id of who currently has king role / gets current king
            const cKing = currentGuild === null || currentGuild === void 0 ? void 0 : currentGuild.members.cache.get(String(cKingGet)); //converts use ID into user Object
            const cKingNick = kingRole === null || kingRole === void 0 ? void 0 : kingRole.members.map(m => m.displayName); //to display kings Username without tagging 
            const chance = Math.random() * 100; //random math 
            if (pKing === null || pKing === void 0 ? void 0 : pKing.roles.cache.has(kingId)) {
                message.reply({
                    content: String("You are King!")
                });
                return;
            }
            else {
                if (chance < 70) {
                    message.reply({
                        content: String(pKing) + String(" attempts to stage a coup d'état! But Fails! ") + String(cKingNick) + String(" remains King!")
                    });
                    return;
                }
                else {
                    cKing === null || cKing === void 0 ? void 0 : cKing.roles.remove(kingId);
                    pKing === null || pKing === void 0 ? void 0 : pKing.roles.add(kingId);
                    message.reply({
                        content: String(pKing) + String(" Stages a coup d'état! A new King is crowned!")
                    });
                    return;
                }
            }
        }
        else {
            yield ((_c = interaction.guild) === null || _c === void 0 ? void 0 : _c.members.fetch());
            const kingId = "792856600825954314"; //roll Id
            const kingRole = (_d = interaction.guild) === null || _d === void 0 ? void 0 : _d.roles.cache.get("792856600825954314"); //role object
            const iKing = interaction.member.roles;
            const currentGuild = interaction.guild;
            const cKingGet = kingRole === null || kingRole === void 0 ? void 0 : kingRole.members.map(m => m.user.id); // User id of who currently has king role / gets current king
            const cKing = currentGuild === null || currentGuild === void 0 ? void 0 : currentGuild.members.cache.get(String(cKingGet)); //converts use ID into user Object
            const cKingNick = kingRole === null || kingRole === void 0 ? void 0 : kingRole.members.map(m => m.displayName); //to display kings Username without tagging 
            const chance = Math.random() * 100; //random math 
            const iKingTag = interaction.member;
            if (iKing.cache.has(kingId)) {
                interaction.reply({
                    content: String("You are King!")
                });
                return;
            }
            else {
                if (chance < 70) {
                    interaction.reply({
                        content: String(iKingTag) + String(" attempts to stage a coup d'état! But Fails! ") + String(cKingNick) + String(" remains King!")
                    });
                    return;
                }
                else {
                    cKing === null || cKing === void 0 ? void 0 : cKing.roles.remove(kingId);
                    iKing === null || iKing === void 0 ? void 0 : iKing.add(kingId);
                    interaction.reply({
                        content: String(iKingTag) + String(" Stages a coup d'état! A new King is crowned!")
                    });
                    return;
                }
            }
        }
    }),
};
