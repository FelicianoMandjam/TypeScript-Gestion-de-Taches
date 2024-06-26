const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const checkTasks = require('../middlewares/checkTasks');
const taskCtrl = require('../controllers/tasks.controller');

router.post('/', auth, checkTasks, taskCtrl.create);
router.get('/', auth, taskCtrl.findAll);
router.put('/:id', auth, taskCtrl.update); // Route ajoutée pour mettre à jour une tâche
router.delete('/:id', auth, taskCtrl.delete);

module.exports = router;
