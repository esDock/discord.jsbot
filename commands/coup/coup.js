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
    callback: ({ guild, message, }) => __awaiter(void 0, void 0, void 0, function* () {
        //rs id 792856600825954314
        //ts id 792867680842940459
        var _a, _b, _c, _d;
        yield ((_a = message.guild) === null || _a === void 0 ? void 0 : _a.members.fetch());
        const kingId = "792856600825954314"; //roll Id
        const kingRole = (_b = message.guild) === null || _b === void 0 ? void 0 : _b.roles.cache.get("792856600825954314"); //role object?
        const pKing = message.member; //author member object
        if (message) {
            if ((_c = message.member) === null || _c === void 0 ? void 0 : _c.roles.cache.has(kingId)) {
                message.reply({
                    content: String("You are King!")
                });
            }
            else {
                const cKingGet = kingRole === null || kingRole === void 0 ? void 0 : kingRole.members.map(m => m.user.id); // guild member object array?
                const cKing = (_d = message.guild) === null || _d === void 0 ? void 0 : _d.members.cache.get(String(cKingGet)); //actually guild member object
                const cKingNick = kingRole === null || kingRole === void 0 ? void 0 : kingRole.members.map(m => m.displayName); //to display kings Username without tagging 
                const chance = Math.random() * 100; //random math 
                if (chance < 70) {
                    message.reply({
                        content: String(pKing) + String(" attempts to stage a coup d'état! But Fails! ") + String(cKingNick) + String(" remains King!")
                    });
                }
                else {
                    cKing === null || cKing === void 0 ? void 0 : cKing.roles.remove(kingId);
                    pKing === null || pKing === void 0 ? void 0 : pKing.roles.add(kingId);
                    message.reply({
                        content: String(pKing) + String(" Stages a coup d'état! A new King is crowned!")
                    });
                }
            }
        }
    }),
};
