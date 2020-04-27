const db = require(`../data/dbConfig`);

// const getProjects = () => {
//   return db(`projects`).then(projects =>
//     projects.map(project => {
//       return { ...project, completed: convertCompleted(project.completed) };
//     })
//   );
// };

const getProjects = () => {
  return db("projects");
};

const getProjectById = (id) => {
  return db(`projects`)
    .where({ id: id })
    .first()
    .then((project) => {
      return { ...project, completed: project.completed };
    });
};

const getProjectTasks = (projectId) => {
  return db(`tasks as t`)
    .select(
      `t.description as task_description`,
      `t.notes`,
      `t.completed`,
      `p.id`,
      "p.name as project_name",
      "p.description as project_description"
    )
    .where({ "p.id": projectId })
    .innerJoin(`projects as p`, "p.id", " t.project_id");
};

const getProjectResources = (projectId) => {
  return db(`project_resources`)
    .select("r.name as resources_name", "r.id")
    .where({ project_id: projectId })
    .innerJoin(`resources as r`, `r.id as resource_id`, `resource_id`);
};

const getResources = () => {
  return db(`resources`);
};

const getResourceById = (id) => {
  return db(`resources`).where({ id });
};

const getTasks = () => {
  return db(`tasks`);
};

const getTaskById = (id) => {
  return db(`tasks as t`)
    .select(`t.description`, `t.notes`, `t.completed`, `t.project_id`)
    .where({ "t.id": id })
    .innerJoin(`projects as p`, `p.id`, "t.project_id");
};

const addTask = (data, projectId) => {
  return db(`tasks`)
    .insert(data)
    .then(([id]) => getTaskById(id));
};

const addProject = (data) => {
  return db(`projects`)
    .insert(data)
    .then(([id]) => getProjectById(id));
};

const addResource = (data) => {
  return db(`resources`).insert(data);
};

const addResourceToProject = (projectId, resourceId) => {
  return db(`project_resources`).insert({
    project_id: projectId,
    resource_id: resourceId,
  });
};

module.exports = {
  getProjects,
  getProjectById,
  getProjectTasks,
  getResources,
  getResourceById,
  getProjectResources,
  getTasks,
  getTaskById,
  addProject,
  addTask,
  addResource,
  addResourceToProject,
};
