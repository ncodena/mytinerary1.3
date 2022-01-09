const express = require('express')

const router = express.Router()

const { check, validationResult } = require('express-validator/check');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const config = require('../../config/keys').jwtSecret;

//Importing user model

const User = require('../../models/User')


// @route POST api/users
// @route desc Register a new user
// @raccess PUBLIC

/*router.post('/', (req, res) => {
    const newCity = new City({
        name: req.body.name,
        country: req.body.country,
        img: req.body.img
    });
    newCity.save ((err, city) => {
        if (city) {
            res.send(city);
        }else {
            res.status(500).send(err)
        }
    })
});*/

router.post('/', [
    check('userName', 'Please add an username').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with six or more characters').isLength({min: 6}),
    ], async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json( { errors:errors.array() } );
        }

        const {userName, email, password} = req.body;

        try {

            //Check if there is a user created with same data
            let user = await User.findOne({email});

            if(user){
                return res.status(400).json({msg: 'User already exists'});
            }

            user = new User({
                userName,
                email,
                password
            });

            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();

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



        }catch (err){

            console.log(err.message);
            res.status(500).send('Sever error');
        }
});

module.exports = router;


