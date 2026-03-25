const express = require('express');
const SeoController = require('../controller/SeoController');
const wrapAsync = require('../utils/WrapAsync')
const ImageUploader = require('../utils/ImageCloudinary');

const Router = express.Router();

Router.post('/header/:name', ImageUploader.single('image'), wrapAsync(SeoController.seoModel));

module.exports = Router;