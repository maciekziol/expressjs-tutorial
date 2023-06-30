const express = require("express");
const router = express.Router();

const ApplicationsController = require('../controllers/ApplicationsController');
const PagesController = require('../controllers/PagesController');
const errorsHandler = require('../middlewares/errors');

router.get('/', PagesController.home);

router.get('/contact',PagesController.contact);

router.post('/applications', 
  ApplicationsController.validate,
  ApplicationsController.checkValidation,
  ApplicationsController.normalizeData,
  errorsHandler.catchAsync(ApplicationsController.store)
);

module.exports = router;
