
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources_table').insert([
        { project_id: 1, resource_id: 1 },
        { project_id: 1, resource_id: 2 },
        { project_id: 2, resource_id: 1 },
        { project_id: 3, resource_id: 2 }
      ]);
    });
};
