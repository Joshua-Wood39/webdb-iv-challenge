const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('dishes')
}

function findById(id) {
    return db('recipes as r')
    .select('r.id', 'd.name as dish', 'r.name as recipe')
    .join('dishes as d', 'd.id', '=', 'r.dish_id')
    .where('r.dish_id', id)
    
}
    

function add(body) {
    return db('dishes')
    .insert(body)
}