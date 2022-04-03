"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importStar(require("discord.js"));
const wokcommands_1 = __importDefault(require("wokcommands"));
const path_1 = __importDefault(require("path"));
require("dotenv/config");
const client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        discord_js_1.Intents.FLAGS.GUILD_MEMBERS
    ]
});
client.on('ready', () => {
    console.log('the bot is ready');
    const dbOptions = {
        // These are the default values
        keepAlive: true,
    };
    const wok = new wokcommands_1.default(client, {
        commandDir: path_1.default.join(__dirname, 'commands'),
        featureDir: path_1.default.join(__dirname, 'features'),
        typeScript: false,
        testServers: ['791848596332740608', '87173473012572160'],
        dbOptions,
        mongoUri: process.env.MONGO_URI,
        botOwners: ['91500245225070592'],
        disabledDefaultCommands: [
            'command',
            'language',
            'prefix',
            'requiredrole',
            'slash',
            'channelonly'
        ]
    });
    wok.on('databaseConnected', (connection, state) => __awaiter(void 0, void 0, void 0, function* () {
        const model = connection.models['wokcommands-languages'];
        const results = yield model.countDocuments();
        console.log(results);
    }))
        // Here is a list of all mongo models/schemas:
        // wokcommands-cooldowns
        // wokcommands-disabled-commands
        // wokcommands-languages
        // wokcommands-prefixes
        // wokcommands-required-roles
        // wokcommands-channel-commands
        // wokcommands-slash-commands
        // .setBotOwner(['91500245225070592'])//my id because i made the bot
        .setCategorySettings([
        {
            name: 'dice',
            emoji: '🎲'
        },
        {
            name: 'Coup',
            emoji: '👑'
        }
    ]);
});
client.login(process.env.TOKEN);
//This Will be info on starting bot.
// "npm run tsc" start watching and converting ts to js
//"npm install" to install dependeceis 
// pm2 start index.js - creates a new start thing
//pm2 list
//pm2 restart (id)
//pm2 stop
//pm2 start
//pm2 delete
//pm2 logs crt c to get back
