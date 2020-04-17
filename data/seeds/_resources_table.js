
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources_table').insert([
       { name: `Italian restaurant` }, { name: `Gym`    } ]);
    });
};
