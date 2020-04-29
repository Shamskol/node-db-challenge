const express = require(`express`);

const db = require(`./projectsModel`);

const router = express.Router();

router.use(express.json());

router.get(`/`, (req, res) => {
  db.getTasks()
    .then(tasks => res.status(200).json(tasks))
    .catch(error => {
      console.error(error);
      res.status(500).json({ errorMessage: `Unable to retrieve tasks` });
    });
});

router.post(`/`, (req, res) => {
  const taskData = req.body;
  if (taskData.description) {
    db.addTask(taskData)
      .then(task => res.status(201).json(task))
      .catch(error => {
        console.error(error);
        res.status(500).json({ errorMessage: `Unable to add task` });
      });
  } else {
    res.status(400).json({ message: `Body must contain name` });
  }
});

module.exports = router;