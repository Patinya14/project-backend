/**
 * main backend file
 */
const app = require('./config/express'); // call use express file
const mongoose = require('./config/mongoose'); // call use mongoose database file

// connect database
mongoose.connect(mongoose.url, { useMongoClient: true });

// app.use()

// call back port 3000
app.listen(3000, () => console.log('Example app listening on port 3000!'))