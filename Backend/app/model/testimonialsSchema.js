const mongoose = require('mongoose');

const { Schema, model } = mongoose;


const testimonialSchema = new Schema({
    clientName: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        default: 1,
    },
    clientImage: {
        type: String,
        required: true,
    },
    clientComment: {
        type: String,
        required: true,
    }
})

const testimonialModel = model('testimonials', testimonialSchema);

module.exports = testimonialModel;