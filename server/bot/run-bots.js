const child_process = require('child_process');
require('dotenv').config()

process.env.PATH += ":node_modules/.bin";


bots = {};
bots['discord'] = child_process.exec('hubot --adapter discord');

for(const [adapter, botProc] of Object.entries(bots)){
    botProc.stdout.on('data', function(chunk){
        console.log(adapter +" Bot: "+ chunk.toString());
    });
}

const repl = require('repl');
repl.start({useGlobal:true});

for(const [adapter, botProc] of Object.entries(bots)){
    botProc.kill();
}

//process.exit(0);
