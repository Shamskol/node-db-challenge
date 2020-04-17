
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks_table').insert([
        { description: "Get a nice pizza from the pizza shop" },
        { description: "Get a nice pasta from the pasta shop" },
        { description: "I kick" },
        { description: "I run" },
        { description: "Lift weights" }
      ]);
    });
};
