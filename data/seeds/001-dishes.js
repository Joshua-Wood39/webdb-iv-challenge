
exports.seed = function(knex) {
      return knex('dishes').insert([
        {name: 'Pizza'},
        {name: 'Tacos'},
        {name: 'Brownies'}
      ]);
};
