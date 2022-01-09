const express = require('express');

const router = express.Router();

const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');

//Importing user model

const User = require('../../models/User')

//Importing city model

const City = require('../../models/City')

// @route GET api/cities
// @route desc Get all items
// @raccess PUBLIC

router.get('/', auth, async (req, res) => {
    City.find({})
    .then(cities => {
        res.send(cities)
    })
    .catch(err => console.log(err));
});


// @route POST api/cities
// @route desc Post a city
// @raccess PUBLIC

router.post('/', (req, res) => {
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
});

// @route Get api/cities
// @route desc Post a city
// @raccess PUBLIC

router.get('/:name',
    (req, res) => {
        let cityRequested = req.params.name;
        City.findOne({name: cityRequested})
            .then(city => {
                res.send(city)
            })
            .catch(err => console.log(err));
});


module.exports = router;
