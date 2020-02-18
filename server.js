const express = require('express');
// const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items')

const app = express();

// bodyParser middleware
app.use(bodyParser.json());


// DB Config
const db = require('./config/keys').mongoURI

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items)

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))