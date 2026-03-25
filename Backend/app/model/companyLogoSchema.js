const mongoose = require('mongoose');
const { model, Schema } = mongoose;


const companyLogo = Schema({
    data: {
        type: String,
        required: true
    },
    imageArray: {
        type: [String],
        required: true,
        default: []
    }
});

const companyModel = model('company-logo', companyLogo);

module.exports = companyModel;