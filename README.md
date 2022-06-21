![ConfBot Logo](./assets/images/ConfBotLogo.jpg)

# Info
This branch contains the necessary files to run ConfBot in Docker.

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
- [Variables](https://github.com/M4THEWS2/ConfBot#variables)
- [Activities](https://github.com/M4THEWS2/ConfBot#activities)

# How to use
## Get started
- #### 1:
    - Download and install Docker
- #### 2:
    - Run: `docker run -d -e token=<your token> -e config="$(cat <config file path>)" --name <name of your choise> matheuscristian/confbot:latest`

### Here is a configuration example:
```json
{
    # config.json
    
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
                        "title": "ConfBot Ajuda",
                        "description": ">>> Este é o ConfBot!!!\n Para ter mais detalhes sobre a configuração deste bot, acesse: https://github.com/M4THEWS2/ConfBot/"
                    }
                }
            ]
        }
    ]
}
```

## Functions & Commands
Commands are what people will type, ex: `!help`. Now functions are what will happen after people send the command, example: After typing `!help`, the bot sends a message saying something.
An example configuration:
```json
"name": "help",
"functions": [
    {
        "name": "embed",
        "embedContent": {
            "author": "",
            "title": "ConfBot Ajuda",
            "description": ">>> Este é o ConfBot!!!\n Para ter mais detalhes sobre a configuração deste bot, acesse: https://github.com/M4THEWS2/ConfBot/",
            "color": "",
            "thumnail (URL)": "",
            "image (URL)": ""
        }
    }
]
```
In the example above, the bot sends an embed message in the chat after someone dictates the `!help` command (the prefix is ​​also set), the function that sends the embed has its name: `embed`.

# Functions
## Embed
Send a MessageEmbed.
    
    - options:
        embedContent; Contains embed data, they can be:
            - title
            - description
            - thumnail
            - image
            - color
    
        reply: decides whether the embed will be sent as a reply.
## Reply
Just reply a message

    - options:
        content: The content of the message.
## Send
Send a message in the channel

    - options:
        content: The content of the message.

## Button
Send one or more button on a message

    - options:
        content: The content indexed to the button(s)

        buttons; The buttons that will be send:
            label: Text that will appears on the button
            style; The style can be: DANGER, SUCCESS, PRIMARY, SECONDARY
            onPress: The callback function (Will be executed once press the button)

Here is a example:
```json
{
    "name": "btn_test",
    "functions": [
        {
            "name": "button",
            "content": "Test content",
            "buttons": [
                {
                    "label": "test",
                    "style": "SUCCESS",
                    "onPress": {
                        "name": "send",
                        "content": "Hello world!"
                    }
                },
                {
                    "label": "testing2",
                    "style": "DANGER",
                    "onPress": {
                        "name": "embed",
                        "embedContent": {
                            "title": "OMG!",
                            "description": "A button has been pressed!"
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
            "content": "Você tem certeza que quer banir este usuário?",
            "buttons": [
                {
                    "label": "Sim",
                    "style": "DANGER",
                    "onPress": {
                        "name": "ban"
                    }
                },
                {
                    "label": "Não",
                    "style": "SUCCESS",
                    "onPress": {
                        "name": "reply",
                        "content": "Tudo bem!"
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

# Activities
You can enter what your bot is currently doing!! Or simply put custom messages below his name. To do this, go to the `activities.json` file, and simply add the messages you want. For example:
```json
[
   {
       "msg": "!help se estiver precisando de ajuda!!",
       "type": "WATCHING"
   } ,
   {
       "msg": "Este é o ConfBot!!",
       "type": "PLAYING"
   },
   {
       "msg": "Baixe o ConfBot em: https://github.com/M4THEWS2/ConfBot",
       "type": "WATCHING"
   }
]
```
There are several types of activities:

`"WATCHING", "PLAYING", "STREAMING", "LISTENING", "CUSTOM", "COMPETING"`