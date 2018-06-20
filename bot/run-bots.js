const child_process = require('child_process');

process.env.PATH += ":node_modules/.bin";

if (!process.env.hasOwnProperty("HUBOT_ADAPTERS")){
    console.log("HUBOT_ADAPTERS not set, defaulting to slack");
    process.env.HUBOT_ADAPTERS='slack';
}
const adapters = process.env.HUBOT_ADAPTERS.split(":");

bots = {};
for (const adapter of adapters){
    if (adapter == "") continue;
    bots[adapter] = child_process.spawn('hubot', ['--disable-httpd', '--adapter', adapter]);
    bots[adapter].stdout.on('data', function(chunk){
        process.stdout.write(adapter +": "+ chunk.toString());
    });
    bots[adapter].stderr.on('data', function(chunk){
        console.log('Error' + adapter)
        process.stderr.write(adapter +": "+ chunk.toString());
    });
}

