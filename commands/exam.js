const Discord = require("discord.js");
module.exports = {
    name: 'exam',
    description: 'exam',
    execute(message, args) {
        // if (args.size() >= 1) {
            
        // }
        const embed = new Discord.MessageEmbed()
            .setColor('0c6197')
            .setTitle('Exam Stats')
            .addFields(
                {name: 'Mean', value: 'test', inline: false},
                {name: 'Median', value: 'test', inline: false},
                {name: 'High', value: 'test', inline: false},
                {name: 'Low', value: 'test', inline: false},
            )
            .setTimestamp();
        return message.channel.send(embed);
    }
}