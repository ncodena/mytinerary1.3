const express = require('express')

const router = express.Router();

const { check, validationResult } = require('express-validator');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const config = require('../../config/keys').jwtSecret;

//Importing user model

const User = require('../../models/User')

// @route GET api/auth
// @route desc Get logged in user
// @raccess Private

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



// @route POST api/auth
// @route desc Auth user & get token
// @raccess PUBLIC

module.exports = router;