const express = require('express')

const router = express.Router()

const { check, validationResult } = require('express-validator/check')

//Importing user model

//const User = require('../../models/User')


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
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json( { errors:errors.array() } );
    }

    res.send('passed');
});

module.exports = router;


