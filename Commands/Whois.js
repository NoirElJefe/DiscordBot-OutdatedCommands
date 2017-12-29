   /*  Outdated 12/24/2017
        userConf = guildSettings.get(message.author.id)
        guildConf = guildSettings.get(message.guild.id)

        if (message.mentions.members) {
            memberMention = message.mentions.members.first()
        }
        if (message.mentions.users) {
            userMention = message.mentions.users.first()
        }
        userMention = (!!userMention) ? userMention : client.users.get(message.author.id)
        memberMention = (!!memberMention) ? memberMention : message.guild.members.get(message.author.id)
        if (userMention) {
            userMentionConf = guildSettings.get(userMention.id)
        }
        if (userMention.bot) {
            return embedSmall(`: exclamation: ** Don't use on bots!**`)
            }
            if (args[0] && args[0].match(/^[0-9]{1,}$/g)) {
                client.fetchUser(args[0]).then(userMention => {
                    const embed = new Discord.RichEmbed()
                        .setColor(0x663399)
                        .setAuthor(`Get Fl0yd Here!`, client.user.avatarURL, 'https://discordapp.com/oauth2/authorize?client_id=349144055902633984&scope=bot&permissions=2146958591')
                        .setDescription(`:white_small_square: Discord ID:** ${userMention.id}**\n:white_small_square: Bot Account:** ${userMention.bot}**\n:white_small_square: Account Creation: **` + timeAgo(userMention.createdAt) + `**`)
                        .setThumbnail(userMention.displayAvatarURL)
                    return message.channel.send(`Requested Info On Member ${userMention.username}#${userMention.discriminator}`, {
                        embed
                    })
                    return
                })
                return

            }
            var loopArray = ''
            ArrayList = memberMention.roles.array()
            for (i = 1; i < ArrayList.length; i++) {
                loopArray += '`' + ArrayList[i].name + '` '
            }

            const embed = new Discord.RichEmbed()
                .setColor(0x663399)
                .setAuthor(`Get Fl0yd Here!`, client.user.avatarURL, 'https://discordapp.com/oauth2/authorize?client_id=349144055902633984&scope=bot&permissions=2146958591')
                .setDescription(`:white_small_square: Discord ID:** ${memberMention.id} **\n:white_small_square: Roles: ${loopArray}\n` + getJoinedUsername() + `:white_small_square: Status: ` + presenceGet() + `\n:white_small_square: Account Creation: ** ` + timeAgo(userMention.createdAt) + ` **\n:white_small_square: Joined: ** ` + timeAgo(memberMention.joinedAt) + `\n**:white_small_square: Last active: ** ` + timeAgo(userMentionConf.lastMessageTime) + `** `)
                .setThumbnail(userMention.displayAvatarURL)
            message.channel.send(`Requested Info On Member ${userMention.username}#${userMention.discriminator}`, {
                embed
            })

            function presenceGet() {
                user = memberMention.presence
                if (user.status == 'online') {
                    userStatus = 'Online'
                }
                if (user.status == 'offline') {
                    userStatus = 'Offline'
                }
                if (user.status == 'idle') {
                    userStatus = 'Away'
                }
                if (user.status == 'dnd') {
                    userStatus = 'Busy'
                }
                if (user.game) {
                    if (user.game.streaming) {
                        return `** ${userStatus} ** (Streaming[${user.game.name}](${user.game.url}) ) `
                    }
                    return `** ${userStatus}** (Playing ${user.game.name} ) `
                }
                return `** ${userStatus}** `
            }
            function timeAgo(time) {
                var timed = (Date.now() - time)
                var timeAfk = Math.round((timed / 1000) / 60)
                var timeAfkText = (timeAfk > 1 ? 'minutes!' : 'minute!')
                if (timeAfk == 0) {
                    timeAfkText = ''
                    timeAfk = 'Right now!'

                }
                if (timeAfk > 59) {
                    timeAfk = Math.round(((timed / 1000) / 60) / 60)
                    timeAfkText = (timeAfk > 1 ? 'hours!' : 'hour!')
                    if (timeAfk > 23) {
                        timeAfk = Math.round((((timed / 1000) / 60) / 60) / 24)
                        timeAfkText = (timeAfk > 1 ? 'days!' : 'day!')
                    }
                }

                return timeAfk.toString() + ' ' + timeAfkText
            }
            
