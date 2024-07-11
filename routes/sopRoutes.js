const express = require('express');
const router = express.Router();
const sopController = require('../controllers/sopControllers');

router.post('/sops', sopController.createSOP);
router.get('/sops/:id', sopController.getSOP);
router.post('/procedures', sopController.logProcedure);

module.exports = router;
