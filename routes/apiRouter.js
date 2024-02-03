const express = require ('express');
const apiController = require('../controllers/apiController.js');
const apiRouter = express.Router();

apiRouter.get('/', apiController.index);

module.exports = apiRouter;