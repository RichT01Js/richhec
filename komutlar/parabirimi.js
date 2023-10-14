const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(4444444)
 .setAuthor(`${client.user.username} Ekonomi`)
 .setDescription(`
Sunucunun Para Birimi \n**STL** *(**S**atış **T**ürk **L**irası)*



`)
 .setFooter(` ST Ekonomi `)
 .setTimestamp()
 message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'parabirimi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};