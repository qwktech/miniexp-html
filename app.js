const express = require('express');         // import router framework
const app = express();                      // enable express
const router = express.Router();

app.set('trust proxy', true);               // allow https
app.use(express.static('public'));          // load all static elements

// serve static home page
router.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
