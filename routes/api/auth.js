const express = require('express')

const router = express.Router();

const { check, validationResult } = require('express-validator');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const config = require('../../config/keys').jwtSecret;

const auth = require('../../middleware/auth');

//Importing user model

const User = require('../../models/User')

// @route GET api/auth
// @route desc Get logged in user
// @raccess Private



router.get('/', auth, async (req, res) => {

    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
    /*City.find({})
    .sort({ date: -1})
    .then(cities => {res.json(cities)
    })
    .catch(err => console.log(err));*/
});



// @route POST api/auth
// @route desc Auth user & get token
// @raccess PUBLIC

router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    ], async (req, res) => {

        //Error checking

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json( { errors:errors.array() } );
        }

        const { email, password } = req.body;

        try{

            let user = await User.findOne({email});

            if(!user){
                return res.tsatus(400).json({msg: "Invalid credentials"});
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch){
                return res.status(400).json({msg: "Invalid credentials"});
            }

            const payload = {
                user: {
                id: user.id
                }
            };

            jwt.sign(payload, config, {
                expiresIn: 360000
            }, (err, token) =>{
                if(err) throw err;
                res.json({token});
            });

        }catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }


    
});




module.exports = router;