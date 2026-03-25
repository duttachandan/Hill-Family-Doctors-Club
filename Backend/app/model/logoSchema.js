const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const logoSchema = Schema({
    data: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
})

const LogoModel = model('logo', logoSchema);

module.exports = LogoModel;

