![Deveopment Build Status](https://travis-ci.org/chingu-voyage5/Bears-Team-6.svg?branch=development)

# Bears-Team-6

Bot that analyzes reading level.


# Environment variables

MONGO_URI= Connection Url to a mongo server.
HUBOT_ADAPTERS= ':' separated list of adapters to spawn hubot processes on. Defaults to "slack" \
HUBOT_SLACK_TOKEN= token for the slack bot, getting it by making an app at (https://api.slack.com/apps/) \
HUBOT_GOOGLE_AUTH_TOKEN= token for google hangouts app. \

# Adapter specific notes

### slack

At time to writing there isn't a way to make the bot request access to channels, so it has to be invited to channels you want it to monitor manually. [https://github.com/slackapi/node-slack-sdk/issues/26]
An easy to do this is by @mentioning the bot in the channel, which will cause slack to prompt you to invite it. 
