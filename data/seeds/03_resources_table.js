exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { name: `Human` },
        { name: `Machineries` },
        { name: "Vehicles" },
        {name: "Personal Protective Equipment"},
        {name: "Health Professionals-doctors, nurses and social workers"},
        {name: "Computers"}
      ]);
    });
};
