
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks_table').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks_table').insert([
        { description: "Literature Survey and Background Data Gathering" },
        { description: "Sample Collection and Field Investigation" },
        { description: "Laboratory Investigation" },
        { description: "Data Analysis and Interpretation" },
        { description: "Report Writing" }
      ]);
    });
};
