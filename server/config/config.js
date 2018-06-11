//Grabs env mode. If none set as development
const env = process.env.NODE_ENV || 'development';

// If testing or in development....
if (env === 'development' || env === 'test') {
  //Grab config object
  const config = require('./config.json');
  //Select config variables based on env
  const envConfig = config[env];

  Object.keys(envConfig).forEach(key => {
    // If the variable does not exist
    if (!process.env[key]) {
      //Set process.env to our config variable
      process.env[key] = envConfig[key];
    }
  });
}
