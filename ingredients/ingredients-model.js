const db = require('../data/dbConfig.js');

module.exports = {
    find,
    add
}

function find() {
    return db('ingredients')
}
   

function add(body) {
    return db('ingredients')
    .insert(body)
}