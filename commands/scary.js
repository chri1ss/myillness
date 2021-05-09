const Discord = require('discord.js')
const AmeClient = require('amethyste-api');
const AmeAPI = new AmeClient(process.env.AMEAPI);

module.exports = {
 name: "scary",
 aliases: [],
 description: "Booo!",
 category: "Image",
 usage: "scary [user mention, user id, user name]",
 run: async (client, message, args) => {
  try {
    const User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.member;
   const wait = await message.channel.send({embed: {
     color: 4779354,
     description: "✨ | Please wait... I'm generating your image",
    }})
   const buffer = await AmeAPI.generate("scary", {
    url: User.user.displayAvatarURL({
     format: "png",
     size: 2048
    })
   });
   const attachment = new Discord.MessageAttachment(buffer, "scary.png");
   message.channel.send(attachment);
  } catch (err) {
   console.log(err);
   message.channel.send({embed: {
    color: 16734039,
    description: "Something went wrong... :cry:"
   }})
  }
 }
}
