const child_process = require('child_process');
//require('dotenv').config()

process.env.PATH += ":node_modules/.bin";
const adapters = process.env.HUBOT_ADAPTERS.split(":");

bots = {};
for (const adapter of adapters){
    bots[adapter] = child_process.exec('hubot --adapter '+adapter);
    
}

for(const [adapter, botProc] of Object.entries(bots)){
    botProc.stdout.on('data', function(chunk){
        console.log(adapter +" Bot: "+ chunk.toString());
    });
}


