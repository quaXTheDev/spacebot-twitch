# Question: HOW THE FUCK ARE THERE 2 VISITS AND 4 FUCKING CLONES?
# THIS IS A SELF HOSTED BOT, MY BROKE ASS ISN'T GONNA HOST THAT SHIT FOR YOU I ALSO WROTE THIS WHILE I WAS SLEEPY SO IT'S GONNA BE FUCKED, IF YOU HAVE PROBLEMS CONTACT ME ON DISCORD

# SPACEBOT-TWITCH
This bot is a simple Twitch bot that does simple stuff like simple bots

### List Of Commands

- Hello (a fuck ton more usage things)
  - responds with hello
- !youtube
  - Sends your Youtube link to chat
- !twitter
  - Sends your Twitter link to chat
- !np
  - Sends now playing song from Spotify to chat
- !discord
  -  Sends your Discord link to chat
- !github
  - Sends your (if not set, mine) github profile to chat (If you don't have a github account, please don't edit it to give me credit)
- !commands (!komutlar)
  - Whiispers the list of commands to message author
- !rules (!kurallar)
  - Whispers chat rules to message author


## DEPENDENCIES

- Snip
- Node.js
- A text editor

## INSTALLATION

- this will be too tiring so I'll keep it simple.
- clone the repo (green button or git shell)
- install snip and node.js if you don't have them (make sure snip is one directory above the bot)
- make a new .env file on the repos root directory
- get your bot token
  - go to https://dev.twitch.tv/console/apps/create
  - give it a name
  - set the redirect link to http://localhost
  - create a new app and set the category to "Chat Bot"
- Go to https://id.twitch.tv/oauth2/authorize
    ?client_id=<your client ID>
    &redirect_uri=http://localhost
    &response_type=token
    &scope=channel:moderate+chat:edit+chat:read+whispers:read+whispers:edit
- It might not look like it worked but the link should have something like "access_token= your token&scope", copy the part that should have your token
- define the following variables on the env file
  - botname=the bot's account
  - token=oauth: followed by the bot token
  - channel=the channel this bot will be running on
- run the command "npm install" on the repos root directory
- run the command "node ." to start the bot
- configure it all you want I couldn't care less but if you do PogChamp stuff hmu on Discord: quax#6075 and if you did big stuff, just fork the repo

- twitch.tv/ps_quax
