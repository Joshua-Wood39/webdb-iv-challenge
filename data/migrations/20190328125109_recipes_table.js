
exports.up = function(knex) {
    return knex.schema.createTable('recipes', function(tbl) {
        tbl.increments();

        tbl
        .string('name', 128)
        .notNullable()
        .unique();

        tbl
        .string('instructions')
        .notNullable();

        tbl
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipes');
};
