const express = require("express");
const mongoose = require("mongoose");
const app = express();

//Bodyparser middleware
//app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

//Innit middleware

app.use(express.json({extended: false}));

//Connect to DB

mongoose.connect(db).then(() => console.log('Mongo DB connected...')).catch(err => console.log(err));

//Use routes

app.use('/api/cities', require('./routes/api/cities'));
app.use('/api/users', require('./routes/api/users'))

const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Server started on port ${port}`));

