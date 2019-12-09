const Discord = require("discord.js"),
fetch = require("node-fetch")

module.exports.run = (client, message, args, options, tags) => {

if(!message.channel.nsfw) return message.channel.send('You can only use this command on NSFW channel!')
    
  if(args.join(' ').toLowerCase().includes('loli') || args.join(' ').toLowerCase().includes('shota')) return;
  
    fetch('https://r34-json-api.herokuapp.com/posts?tags=' + args.join('+').toLowerCase(), {
        method: 'GET'
    }) 
  .then(res => res.json())
      .then(ress => {
      
      if(!ress) return message.channel.send(`Can't Find Any Image With That Tag!`)
      
      var result = ress[Math.floor(Math.random()*ress.length)];
      
      if(result.tags.includes('shota') || result.tags.includes('loli')) return message.channel.send('This Picture Have \`\`loli\`\` or \`\`shota\`\` tag on it!')
      
      let defualtthingy = 'https://r34-json-api.herokuapp.com/images?url='
      
      let thelink = result.file_url.slice(defualtthingy.length)
      
      let embed = new Discord.RichEmbed()
      .setTitle("Lewdie:drooling_face:")
      .setDescription(`Picture: [Click here!](${thelink})\nCreator: [Here link](${result.creator_url})`)
      .addField(' **TAGS**: ', result.tags.join('` `, ` `'))
      .setImage(thelink)
      message.react(`:drooling_face:`)
      message.channel.send(embed)
      
        })
  
  
  
}
exports.help = {
name: "r34",
aliases: []
}
