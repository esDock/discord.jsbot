import DiscordJS, { Intents, Interaction } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
import 'dotenv/config'

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS
    ]
})

client.on('ready', () => {
    console.log('the bot is ready')
     
    const dbOptions = {
        // These are the default values
        keepAlive: true,
    }

    const wok = new WOKCommands(client, {
        commandDir: path.join(__dirname, 'commands'), // Commands file directory
        featureDir: path.join(__dirname, 'features'), //Features file directory 
        typeScript: false, // allows importing of .ts files
        testServers: ['791848596332740608', '87173473012572160'], //test server id , '87173473012572160' - rs id
        dbOptions,
        mongoUri: process.env.MONGO_URI,
        botOwners:['91500245225070592'],
        disabledDefaultCommands: [
            'command',
            'language',
            'prefix',
            'requiredrole',
            //'slash',
            'channelonly'

        ]
    })

    wok.on('databaseConnected', async (connection, state) => {
        const model = connection.models['wokcommands-languages']
      
        const results = await model.countDocuments()
        console.log(results)
    })

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
    ])
})

client.login(process.env.TOKEN)
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