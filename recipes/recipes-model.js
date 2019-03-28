const db = require('../data/dbConfig.js');

module.exports = {
    find,
    add
}

function find() {
    return db('recipes as r')
    .select('r.id', 'd.name as dish', 'r.name as recipe', 'r.instructions')
    .join('dishes as d', 'd.id', '=', 'r.dish_id')
}

function add(body) {
    return db('recipes')
    .insert(body)
}