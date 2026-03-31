const express = require('express');
const SeoController = require('../controller/SeoController');
const wrapAsync = require('../utils/WrapAsync')
const ImageUploader = require('../utils/ImageCloudinary');
const Router = express.Router();


Router.get('/header/getcontent/navlogo', wrapAsync(SeoController.getNavLogo));
Router.get('/header/getcontent/servicescard', wrapAsync(SeoController.getServicesCard));
Router.get('/header/getcontent/companylogo', wrapAsync(SeoController.companyLogo));
Router.get('/header/getcontent/:name', wrapAsync(SeoController.getSeoModel));


Router.post('/header/logo',
    ImageUploader.single('image'),
    wrapAsync(SeoController.navLogo));

Router.post('/header/servicescard',
    ImageUploader.single('icon'),
    wrapAsync(SeoController.servicesCard));

Router.post('/header/supportlogo',
    ImageUploader.array('company'),
    wrapAsync(SeoController.companyLogo))

Router.post('/header/:name',
    ImageUploader.single('image'),
    wrapAsync(SeoController.seoModel));



module.exports = Router;


