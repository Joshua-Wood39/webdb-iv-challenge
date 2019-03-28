
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {name: 'Sugar', amount: '1 cup', recipe_id: 3},
        {name: 'Shredded Lettuce', amount: '2 Handfuls', recipe_id: 2},
        {name: 'Mozzarella Cheese', amount: '1 CrapTon', recipe_id: 1}
      ]);
};
