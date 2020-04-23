
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { description: "Preliminary Investigation" },
        { description: "Laboratory Investigation" },
        { description: "Clearing and Excavation" },
        { description: "Asphalt Paving" },
        { description: "Preparing Estimates and Budget" },
        { description: "Laying of Pipes" },
        { description: "Pressure Test" },
        { description: "Obtaining Planning Permit" },
        { description: "Installation of Air Samplers" },
        { description: "Data Analysis and Interpretation" }

      ]);
    });
};
