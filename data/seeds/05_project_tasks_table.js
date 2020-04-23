
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project_tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project_tasks').insert([
        { project_id: 1, task_id: 1 },
        { project_id: 1, task_id: 2 },
        { project_id: 2, task_id: 6 },
        { project_id: 2, task_id: 7 },
        { project_id: 3, task_id: 9 },
        { project_id: 3, task_id: 10 },
        { project_id: 4, task_id: 3 },
        { project_id: 4, task_id: 4 },
        { project_id: 5, task_id: 5 },
        { project_id: 5, task_id: 8 },
      ]);
    });
};
