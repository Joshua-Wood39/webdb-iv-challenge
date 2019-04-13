
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {name: 'Sugar', quantity: '1.5', measurement: 'Cups', recipe_id: 3},
        {name: 'Shredded Lettuce', quantity: '2', measurement: 'Handfuls', recipe_id: 2},
        {name: 'Mozzarella Cheese', quantity: '1.3', measurement: 'CrapTons', recipe_id: 1}
      ]);
};
