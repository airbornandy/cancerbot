const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "|";
var counter;

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', msg =>{
    if(msg.content.toLowerCase() === prefix + "joinus"){
        msg.channel.send('ONE OF US');
    }
});

client.on('message', msg =>{
    if(msg.content.toLowerCase() === prefix + "hailrussia"){
        msg.channel.send(":red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::yellow_heart::red_circle::red_circle::red_circle::yellow_heart::yellow_heart::red_circle::red_circle::red_circle::red_circle:\n:red_circle::red_circle::yellow_heart::yellow_heart::yellow_heart::red_circle::red_circle::red_circle::red_circle::yellow_heart::red_circle::red_circle::red_circle:\n:red_circle::yellow_heart::yellow_heart::yellow_heart::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::yellow_heart::red_circle::red_circle:\n:red_circle::red_circle::yellow_heart::red_circle::yellow_heart::red_circle::red_circle::red_circle::red_circle::red_circle::yellow_heart::red_circle::red_circle:\n:red_circle::red_circle::red_circle::red_circle::red_circle::yellow_heart::red_circle::red_circle::red_circle::red_circle::yellow_heart::red_circle::red_circle:\n:red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::yellow_heart::red_circle::red_circle::yellow_heart::red_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::yellow_heart::yellow_heart::red_circle::red_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::yellow_heart::yellow_heart::yellow_heart::red_circle::red_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::red_circle::red_circle::yellow_heart::red_circle::red_circle::red_circle::yellow_heart::red_circle::red_circle::red_circle:\n:red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle::red_circle:");
    }
});

client.on('message', msg =>{
    if(msg.content.toLowerCase() === prefix + "sksk"){
        msg.channel.send(":regional_indicator_a: :regional_indicator_n: :regional_indicator_d:   :regional_indicator_i:   :regional_indicator_o: :regional_indicator_o: :regional_indicator_p:");
    }
});

client.on('message', msg =>{
    if(msg.content.toLowerCase() === prefix + "and i oop"){
        msg.channel.send(":regional_indicator_s: :regional_indicator_k: :regional_indicator_s: :regional_indicator_k: :regional_indicator_s: :regional_indicator_k: :regional_indicator_s: :regional_indicator_k: :regional_indicator_s: :regional_indicator_k:");
    }
});

client.on('message', msg=>{
    if(msg.content.toLowerCase() === prefix + "give @p minecraft:fireworks_rocket 1000000"){
        msg.channel.send("*Server Crash*");
    }
});

client.on('message', msg =>{
    if(msg.content.split(" ", 1) === prefix){
        command = msg.content.split(" ", 2)[1]
        if(command === "setPrefix"){
            argument = msg.slice(prefix.length + command.length + 2, msg.length)
            prefix = argument;
       }
    }
});

client.on('message', msg=>{
    if(msg.content.toLowerCase() === prefix + "myavatar"){
        msg.channel.send(msg.author.avatarURL);
    }
});

client.on('message', message => {
    if (!message.guild) return;
    if(message.member.roles.find(r => r.name === "Thanos") || message.member.roles.find(r => r.name === "The Overlord")){
        if (message.content.startsWith(prefix + 'kick')) {
        const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                if (member) {
                member.kick('Optional reason that will display in the audit logs').then(() => {
                    message.reply(`Successfully kicked ${user.tag}`);
                }).catch(err => {
                    message.reply('I was unable to kick the member');
                    console.error(err);
                });
                } else {
                message.reply('That user isn\'t in this guild!');
                }
            } else {
                message.reply('You didn\'t mention the user to kick!');
            }
        }
    }
});

client.on('message', message => {
    if (!message.guild) return;
    if(message.member.roles.find(r => r.name === "Thanos") || message.member.roles.find(r => r.name === "The Overlord")){
        if (message.content.startsWith(prefix + 'ban')) {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                if (member) {
                member.ban({
                    reason: 'They were bad!',
                }).then(() => {
                    message.reply(`Successfully banned ${user.tag}`);
                }).catch(err => {
                    message.reply('I was unable to ban the member');
                    console.error(err);
                });
                } else {
                message.reply('That user isn\'t in this server!');
                }
            } else {
                message.reply('You didn\'t mention the user to ban!');
            }
        }
    }
});

client.on('message', msg => {
    if(msg.content.startsWith(prefix + 'stab')) {
        const user = msg.mentions.users.first();
        if(user) {
            const member = msg.guild.member(user);
            if(member) {
                msg.reply(`stabbed <@${user.id}>`);
            } else {
                msg.channel.send('That user is not in the server.');
            }
        } else {
            msg.channel.send('You did not mention a user to stab');
        }
    }
});

client.on('message', msg => {
    if(msg.content.toLowerCase() === 'test') {
    const id = msg.member.id;
    msg.channel.send(id);
    }
});
  

client.login(token);