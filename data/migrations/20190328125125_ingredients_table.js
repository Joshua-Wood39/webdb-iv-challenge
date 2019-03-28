
exports.up = function(knex) {
    return knex.schema.createTable('ingredients', function(tbl) {
        tbl.increments();

        tbl
        .string('name', 128)
        .notNullable()
        .unique();

        tbl
        .float('quantity')
        .notNullable()

        tbl
        .string('measurement', 128)
        .notNullable()

        tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ingredients');
};
