
exports.seed = function(knex) {
      return knex('recipes').insert([
        {name: 'Pepperoni', instructions: 'Make stuff', dish_id: 1},
        {name: "Granny's Tacos", instructions: 'Make it like granny', dish_id: 2},
        {name: 'Dark Fudge', instructions: 'Bake it', dish_id: 3}
      ]);
};
