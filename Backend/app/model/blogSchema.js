const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blogSchema = new Schema({
    blogImage: {
        type: String,
        required: true,
    },
    blogContent: {
        type: String,
        required: true,
    },
    blogTitle: {
        type: String,
        required: true
    }
})

const blogModel = model('blog', blogSchema);

module.exports = blogModel;