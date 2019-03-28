const router = require('express').Router();
const db = require('../data/dbConfig.js');
const Ingredients = require('./ingredients-model.js');

router.get('/', async (req, res) => {
    try {
        const ingredients = await Ingredients.find();
        res.status(200).json(ingredients);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.post('/', async (req, res) => {
    try {
        const ingredient = await Ingredients.add(req.body);
        res.status(201).json(ingredient);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;