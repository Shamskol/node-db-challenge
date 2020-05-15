
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { description: "Preliminary Investigation", project_id:1 },
        { description: "Laboratory Investigation", project_id: 1 },
        { description: "Clearing and Excavation", project_id: 4 },
        { description: "Asphalt Paving", project_id: 4 },
        { description: "Preparing Estimates and Budget", project_id: 5 },
        { description: "Laying of Pipes", project_id: 2 },
        { description: "Pressure Test", project_id: 2 },
        { description: "Obtaining Planning Permit", project_id: 5 },
        { description: "Installation of Air Samplers", project_id: 3 },
        { description: "Data Analysis and Interpretation", project_id: 3 },
        {description: "Social distancing and distribution of PPE", project_id: 6}
        
      ]);
    });
};
