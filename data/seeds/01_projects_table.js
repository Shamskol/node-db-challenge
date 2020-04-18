
exports.seed = function(knex,) {
  // Deletes ALL existing entries
  return knex('projects_table').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects_table').insert([
        { name: "Environmental Impact Assessment", description: "I'm gathering baseline data!" },
      { name: "Water Quality Studies" },
      { name: "Air Quality Survey" },
      {name: "Road Construction"},
      {name: "Housing Project"},

      ]);
    });
};
