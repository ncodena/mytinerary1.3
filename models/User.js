const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    userName: {
        type:String,
        required:true,
        unique: true
    },
    email:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        required: true
    }
    /*favourites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Itinerary'
    }],*/
});

module.exports = User = mongoose.model('user', userSchema)
