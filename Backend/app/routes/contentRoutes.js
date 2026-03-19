const express = require('express');
const SeoController = require('../controller/SeoController');
const wrapAsync = require('../utils/WrapAsync')

const Router = express.Router();

Router.post('/header/:name', wrapAsync(SeoController.seoModel));

module.exports = Router;