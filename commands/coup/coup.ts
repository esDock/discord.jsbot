import DiscordJS from 'discord.js'
import { ICommand } from "wokcommands"

export default {
    category: 'Coup',
    description: 'Chance to become king',
        

    slash: false, // false enables legacy only. both wil make it so bot work
    testOnly: true, //false will allow to be used globally

callback: async ({ guild, message, interaction }) => {
        //rs id 792856600825954314
        //ts id 792867680842940459

        await message.guild?.members.fetch();
        const kingId = "792856600825954314"; //roll Id
        const kingRole = message.guild?.roles.cache.get("792856600825954314"); //role object?
        const pKing = message.member; //author member object

        if(message) {

            if(message.member?.roles.cache.has(kingId)) {
                message.reply({
                    content:String("You are King!")
                })
            }

            else {
                const cKingGet = kingRole?.members.map(m=>m.user.id); // grabs user of who has the king role!

                const cKing = message.guild?.members.cache.get(String(cKingGet)); //actually guild member object
        
                const cKingNick = kingRole?.members.map(m=>m.displayName); //to display kings Username without tagging 
        
                const chance = Math.random() * 100; //random math 

                if(chance < 70 ) {  
                    message.reply({
                        content:String(pKing) + String(" attempts to stage a coup d'état! But Fails! ")  + String(cKingNick) + String(" remains King!")
                    })

                }

                else {
                    cKing?.roles.remove(kingId)
                    pKing?.roles.add(kingId)
                    message.reply ({
                        content: String(pKing) + String(  " Stages a coup d'état! A new King is crowned!" )
                    })
                }

            }
        }
    },

} as ICommand