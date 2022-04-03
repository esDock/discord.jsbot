import DiscordJS, { GuildMemberRoleManager } from 'discord.js'
import { ICommand } from "wokcommands"

export default {
    category: 'Coup',
    description: 'Chance to become king',
        

    slash: false, // false enables legacy only. both wil make it so bot work
    testOnly: true, //false will allow to be used globally

callback: async ({ guild, message, interaction }) => {
        //rs id 792856600825954314
        //ts id 792867680842940459
        if (message) {
            await message .guild?.members.fetch();
            const kingId = "792856600825954314"; //roll Id
            const kingRole = message.guild?.roles.cache.get("792856600825954314"); //role object
            const pKing = message.member; //author member object
            const currentGuild = message.guild;
            const cKingGet = kingRole?.members.map(m=>m.user.id); // User id of who currently has king role / gets current king
            const cKing = currentGuild?.members.cache.get(String(cKingGet)); //converts use ID into user Object
            const cKingNick = kingRole?.members.map(m=>m.displayName); //to display kings Username without tagging 
            const chance = Math.random() * 100; //random math 

            if(pKing?.roles.cache.has(kingId)) {
                message.reply({
                    content:String("You are King!")

                })
                return
            }

            else {

                if(chance < 70 ) {  
                    message.reply({
                        content:String(pKing) + String(" attempts to stage a coup d'état! But Fails! ")  + String(cKingNick) + String(" remains King!")
                    })
                    return
                }

                else {
                    cKing?.roles.remove(kingId)
                    pKing?.roles.add(kingId)
                    message.reply ({
                        content: String(pKing) + String(  " Stages a coup d'état! A new King is crowned!" )
                    })
                    return
                }

            }

        }

        else {
            await interaction.guild?.members.fetch();
            const kingId = "792856600825954314"; //roll Id
            const kingRole = interaction.guild?.roles.cache.get("792856600825954314"); //role object
            const iKing = (interaction.member.roles as GuildMemberRoleManager);
            const currentGuild = interaction.guild;
            const cKingGet = kingRole?.members.map(m=>m.user.id); // User id of who currently has king role / gets current king
            const cKing = currentGuild?.members.cache.get(String(cKingGet)); //converts use ID into user Object
            const cKingNick = kingRole?.members.map(m=>m.displayName); //to display kings Username without tagging 
            const chance = Math.random() * 100; //random math 
            const iKingTag = interaction.member

            if(iKing.cache.has(kingId)) {
                interaction.reply({
                    content:String("You are King!")

                })
                return
            }

            else {

                if(chance < 70 ) {  
                    interaction.reply({
                        content:String(iKingTag) + String(" attempts to stage a coup d'état! But Fails! ")  + String(cKingNick) + String(" remains King!")
                    })
                    return
                }

                else {
                    cKing?.roles.remove(kingId)
                    iKing?.add(kingId)
                    interaction.reply ({
                        content: String(iKingTag) + String(  " Stages a coup d'état! A new King is crowned!" )
                    })
                    return
                }

            }

        }

    },

} as ICommand