const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const servicesCard = Schema({
    icon: {
        type: String,
        required: true,
    },
    cardHeader: {
        type: String,
        required: true,
    },
    paragraph: {
        type: String,
        required: true,
    }
})

const servicesModel = model('services-card', servicesCard);

module.exports = servicesModel;