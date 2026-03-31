const SeoModel = require('../model/seoSchema');
const LogoModel = require('../model/logoSchema');
const servicesModel = require('../model/servicescardSchema');
const CompanyLogo = require('../model/companyLogoSchema');
const ExpressError = require('../utils/ExpressError');

class SeoController {
    async seoModel(req, res) {
        const { name } = req.params;
        const { heading1, heading2, paragraph } = req.body;
        const path = req.file?.path;

        const data = {
            dataType: name,
            heading1: heading1,
            heading2: heading2,
            paragraph: paragraph,
            ...(path && { image: path })
        };

        const response = await SeoModel.findOneAndUpdate(
            { dataType: name },
            data,
            {
                upsert: true,
                returnDocument: "after",
                setDefaultsOnInsert: true
            }
        );
        res.json(response);
    }
    async navLogo(req, res) {
        const { path } = req?.file;
        if (!path) throw ExpressError(404, "No Image Found");
        const data = await LogoModel.findOneAndUpdate({
            data: 'logo'
        }, {
            data: "logo",
            image: path
        }, {
            upsert: true,
            returnDocument: "after"
        })
        res.json(data);
    }
    async servicesCard(req, res) {
        const { path } = req.file;
        const { cardHeader, paragraph } = req.body;
        const data = new servicesModel({
            icon: path,
            cardHeader: cardHeader,
            paragraph: paragraph
        })
        const response = await data.save();
        res.json(response);
    }
    async companyLogo(req, res) {
        const imageArray = [];
        req.files.map((elm) => {
            imageArray.push(elm.path)
        })

        const data = {
            data: 'company-logo',
            imageArray: imageArray
        };

        const response = await CompanyLogo.findOneAndUpdate(
            { data: 'company-logo' },
            data,
            {
                upsert: true,
                returnDocument: 'after'
            }
        );

        res.json({
            response
        })
    }
    async getSeoModel(req, res) {
        const { name } = req.params;
        if (!name) throw new ExpressError(404, "no content head found")
        const response = await SeoModel.findOne({ dataType: name });
        res.json(response);
    }
    async getNavLogo(req, res) {
        const response = await LogoModel.find();
        res.json(response);
    }
    async getServicesCard(req, res) {
        const servicesContent = await SeoModel.findOne({ dataType: 'services' });
        const response = await servicesModel.find();
        const data = {
            content: servicesContent,
            services: response,
        }
        res.json(data)
    }
    async companyLogo(req, res) {
        const response = await CompanyLogo.find();
        res.json(response)
    }
}

module.exports = new SeoController();