
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_tasks_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_tasks_table').insert([
        { project_id: 1, task_id: 1 },
        { project_id: 1, task_id: 2 },
        { project_id: 2, task_id: 3 },
        { project_id: 2, task_id: 4 },
        { project_id: 3, task_id: 5 }
        
      ]);
    });
};