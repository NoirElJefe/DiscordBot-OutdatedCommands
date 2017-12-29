        if (!args[0]) {
            return embedSmall(":exclamation: **You didn't specify what to clean!**")
        }
        if (args[1] && parseInt(args[1]) > 1 && parseInt(args[1]) < 101) {
            messageLimit = args[1]
        } else {
            messageLimit = 30
        }
        if (parseInt(args[0]) >= 2 && parseInt(args[0]) <= 100) {
            message.channel.fetchMessages({ limit: Math.round(parseInt(args[0])) }).then(messages => {
                if (messages.array().length > 0) {
                    embedSmall(`:wastebasket: **${messages.array().length} messages deleted!**`)
                    return message.channel.bulkDelete(messages)
                } else {
                    return embedSmall(`:question: **No messages found!**`)
                }
            })
            return
        }
        if (args[0].toLowerCase() == 'bots') {
            message.channel.fetchMessages({ limit: messageLimit }).then(messages => {
                messages = messages.filter(m => m.author.bot == true)
                if (messages.array().length > 1) {
                    message.delete(0)
                    embedSmall(`:wastebasket: **${messages.array().length} messages deleted!**`)
                    return message.channel.bulkDelete(messages)
                }
            })
            return
        }
        if (args[0].toLowerCase() == 'embeds') {
            message.channel.fetchMessages({ limit: messageLimit }).then(messages => {
                messages = messages.filter(m => m.embeds.length > 0 && m.createdTimestamp > Date.now() - 1209600000)
                if (messages.array().length > 1) {
                    embedSmall(`:wastebasket: **${messages.array().length} messages deleted!**`)
                    return message.channel.bulkDelete(messages)
                }
            })
            return
        }
        if (client.users.get(args[0])) {
            message.channel.fetchMessages({ limit: messageLimit }).then(messages => {
                messages = messages.filter(m => m.author.id == args[0] && m.createdTimestamp > Date.now() - 1209600000)
                messagesEmbed = messages
                if (messages.array().length > 1) {
                    embedSmall(`:wastebasket: **${messages.array().length} messages deleted!**`)
                    return message.channel.bulkDelete(messages)
                }
            })
            return
        }
        if (message.mentions.members.first()) {
            message.channel.fetchMessages({ limit: messageLimit }).then(messages => {
                messages = messages.filter(m => m.author.id == message.mentions.members.first().id && m.createdTimestamp > Date.now() - 1209600000)
                if (messages.array().length > 1) {
                    embedSmall(`:wastebasket: **${messages.array().length} messages deleted!**`)
                    return message.channel.bulkDelete(messages)
                }
            })
            return
        }
        message.channel.fetchMessages({ limit: messageLimit }).then(messages => {
            messages = messages.filter(m => m.content.toLowerCase().indexOf(args[0].toLowerCase()) != -1 && m.createdTimestamp > Date.now() - 1209600000)
            if (messages.array().length > 1) {
                embedSmall(`:wastebasket: **${messages.array().length} messages deleted!**`)
                return message.channel.bulkDelete(messages)
            } else {
                return embedSmall(`:question: **No messages found!**`)
            }
        })

        function embedSmall(str) {
            embed = new Discord.RichEmbed()
                .setColor(0x663399)
                .setDescription(str)
            message.channel.send({
                embed
            })
        }
