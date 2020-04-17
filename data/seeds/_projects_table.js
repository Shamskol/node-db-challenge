
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects_table').insert([
        { name: "Eating", description: "I'm eating a nice food!" },
        { name: "Playing soccer" },
        { name: "Exercising" }
      ]);
    });
};
