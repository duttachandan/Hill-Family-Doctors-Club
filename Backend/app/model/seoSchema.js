const mongoose = require('mongoose');

const { Schema } = mongoose;

const SeoSchema = Schema({
    dataType: {
        type: String,
        unique: true,
        lowercase: true,
    },
    heading1: {
        type: String,
    },
    heading2: {
        type: String,
    },
    paragraph: {
        type: String,
    },
    image: {
        type: String
    }
});

const SeoModel = mongoose.model('Seo', SeoSchema)

module.exports = SeoModel;