
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources_table').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources_table').insert([
        { name: `Human` },
         { name: `Machineries` },
         {name: "Budget"},
         {name: "Vehicles"},
         {name: "Stationeries"}

      ]);
    });
};
