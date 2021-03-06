![ConfBot Logo](./assets/images/ConfBotLogo.jpg)

# Info
ConfBot is a configurable bot for Discord in order to help people who don't know how to program create their bots easily just by changing a json configuration file.

# Index
- [How to use](https://github.com/M4THEWS2/ConfBot#how-to-use)
    - [Get Started](https://github.com/M4THEWS2/ConfBot#get-started)
    - [Functions & Commands](https://github.com/M4THEWS2/ConfBot#functions--commands)
- [Functions](https://github.com/M4THEWS2/ConfBot#functions)
    - [Embed](https://github.com/M4THEWS2/ConfBot#embed)
    - [Reply](https://github.com/M4THEWS2/ConfBot#reply)
    - [Send](https://github.com/M4THEWS2/ConfBot#send)
    - [Button](https://github.com/matheuscristian/ConfBot/tree/main#button)
    - [Ban](https://github.com/M4THEWS2/ConfBot#ban)
    - [Kick](https://github.com/M4THEWS2/ConfBot#kick)
    - [Stock](https://github.com/M4THEWS2/ConfBot#stock)
- [Variables](https://github.com/M4THEWS2/ConfBot#variables)
- [Activities](https://github.com/M4THEWS2/ConfBot#activities)

# How to use
## Get started
You can start ConfBot by running this command:
```sh
docker run -d --rm -e config="$(cat <config file path>)" --name "name of your choise" matheuscristian/confbot:latest
```

### Here is a configuration example:
```json
{
    "token": "your token",   
    "prefix": "!",
    "commandNotFoundMessage": "Command not found.",
    "printErrOnTerminal": true,
    "commands": [
        {
            "name": "help",
            "functions": [
                {
                    "name": "embed",
                    "embedContent": {
                        "title": "ConfBot Help",
                        "description": "This is a help message.",
                    }
                }
            ]
        }
    ]
}
```
## Functions & Commands
Commands are what people will type, ex: `!help`. On the other hand, functions are what will happen after people send the command, example: After typing `!help`, the bot sends a message saying something.
An configuration example:
```json
"name": "help",
"functions": [
    {
        "name": "embed",
        "embedContent": {
            "title": "ConfBot Help",
            "description": "This is a help message.",
        }
    }
]
```
In the example above, the bot sends an embed message in the chat after someone dictates the `!help` command (the prefix is ​​also set), the function that sends the embed has its name: `embed`.

# Functions
## Embed
Send a MessageEmbed.
    
```json
"embedContent": {
    "title": "Your title",
    "description": "Your description",
    "thumbnail": "Your ... (I'm to lazy to write 'thumbnail' but not enough to don't write this whole message)",
    "image": "Some link",
    "color": "Some hex color code"
},
"reply": true | false (decides whether the embed will be sent as a reply.)
```

## Reply
Reply a message.
```json
"content": "Your message"
```

## Send
Send a message in a channel.
```json
"content": "Your message"
```

## Button
Send beautiful interactive buttons.
This function's body:
```json
"name": "button",
"content": "Text that will appears above the button.",
"buttons": [
    {
        "label": "This text appears on the buttons",
        "style": "SUCCESS" | "DANGER" | "SECONDARY" | "LINK" | "PRIMARY",
        "onPress": {
            [nome other function]
        }
    },
    [...]
]
```

Here is a example:
```json
{
    "name": "some_button_command",
    "functions": [
        {
            "name": "button",
            "content": "A great text comes here. What do you want?",
            "buttons": [
                {
                    "label": "A simple hello world 'cause the world is beautiful",
                    "style": "SUCCESS",
                    "onPress": {
                        "name": "send",
                        "content": "Hello world!"
                    }
                },
                {
                    "label": "An amazing message",
                    "style": "DANGER",
                    "onPress": {
                        "name": "embed",
                        "embedContent": {
                            "title": "OMG!",
                            "description": "Tell yourself that you're the best, 'cause if you don't believe it, you won't become it."
                        }
                    }
                }
            ]
        }
    ]
}
```

# Ban
When you call the function ban, the program will search for the first mention in your message. If it find it, the respective user will be banned from your server.

Here is a configuration example:
```json
{
    "name": "ban",
    "functions": [
        {
            "name": "button",
            "content": "Are you sure you wanna ban this user?",
            "buttons": [
                {
                    "label": "Yes",
                    "style": "DANGER",
                    "onPress": {
                        "name": "ban"
                    }
                },
                {
                    "label": "No",
                    "style": "SUCCESS",
                    "onPress": {
                        "name": "reply",
                        "content": "Alright!"
                    }
                }
            ]
        }
    ]
}
```

As above, the first function to be called is the button function, if you press the button with label: "Sim", the member called in the first mention will be banned.

# Kick
The kick function is equal to the ban function. The unique diference is that intead of ban a member, the kick function will kick a member. It means the member who was kicked will can enter into the server again.

# Stock
This functions adds control over any amount of items.
The body of this function is:
```json
"name": "stock",
"method": "add" | "remove" | "list"
"value": <value to be added or subtracted> 
```

# Activities
You can enter what your bot is currently doing!! Or simply put custom messages below his name. To do this, go to the `activities.json` file, and simply add the messages you want. For example:
```json
[
   {
       "msg": "The fourth season of Stranger Things is amazing!",
       "type": "WATCHING"
   } ,
   {
       "msg": "Minecraft is the best game ever.",
       "type": "PLAYING"
   },
   {
       "msg": "Fool, you know how we do it! ohhhoOhhhOhh",
       "type": "LISTENING"
   }
]
```
There are several types of activities:

`"WATCHING", "PLAYING", "STREAMING", "LISTENING", "CUSTOM", "COMPETING"`