const express = require('express');
const router = express.Router();
const sopController = require('../controllers/sopControllers');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/sops', authMiddleware, sopController.createSOP);
router.get('/sops/:id', authMiddleware, sopController.getSOP);
router.post('/procedures', authMiddleware, sopController.logProcedure);

module.exports = router;
