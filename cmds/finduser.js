module.exports.run = async (client, msg, args) => {
    let users = client.users;

    let searchTerm = args[0];
    if(!searchTerm) return msg.channel.send("Please type a term to search!");

    let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    msg.channel.send(`User: ${matches.map(u => u.tag)}`);

    msg.delete();

     }
    
        module.exports.help = {
            name: "finduser",
                  aliases: []

        }