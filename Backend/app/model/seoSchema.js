const mongoose = require('mongoose');

const { Schema } = mongoose;

const SeoSchema = Schema({
    dataType: {
        type: string
    },
    heading1: {
        type: string,
    },
    heading2: {
        type: string,
    },
    paragraph: {
        type: string
    }
});

const SeoModel = mongoose.model('Seo', SeoSchema)

module.exports = SeoModel;