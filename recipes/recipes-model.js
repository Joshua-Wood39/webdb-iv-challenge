const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findShop,
    add
}

function find() {
    return db('recipes as r')
    .select('r.id', 'd.name as dish', 'r.name as recipe', 'r.instructions')
    .join('dishes as d', 'd.id', '=', 'r.dish_id')
}

function findShop(id) {
    return db('ingredients as i')
    .select('i.id', 'd.name as dish', 'r.name as recipe', 'i.name as shoppingList')
    .join('recipes as r', 'r.id', '=', 'i.recipe_id')
    .where('i.recipe_id', id)
    .join('dishes as d', 'd.id', '=', 'r.dish_id')
    
}

function add(body) {
    return db('recipes')
    .insert(body)
}