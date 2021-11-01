require('dotenv').config();             // allow use of .env file
const app = require('./app');           // allow app.js to launch


// start webserver (launch app.js)
const server = app.listen(8080, () => {
  console.log(`Express is running on port ${server.address().port}`);
});