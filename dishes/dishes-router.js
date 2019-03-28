const router = require('express').Router();
const db = require('../data/dbConfig.js');
const Dishes = require('./dishes-model.js');

router.get('/', async (req, res) => {
    try {
        const dishes = await Dishes.find();
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const dish = await Dishes.findById(req.params.id);
        res.status(200).json(dish);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const dish = await Dishes.add(req.body);
        res.status(201).json(dish);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;