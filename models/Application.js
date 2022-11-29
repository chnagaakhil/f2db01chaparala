const mongoose = require("mongoose")
const applicationSchema = mongoose.Schema({
    App_Name: {
        type: String,
        required: [true, 'Name of the Application cannot be empty']
    },
    App_Company: {
        type: String,
        required: [true, 'Company of the Application cannot be empty']
    },
    App_Size: {
        type: Number,
        min: [120, 'Size of Application must be at least 120'],
        max: 3000
    },
    App_Rating: {
        type: Number,
        min: [1, 'Rating of Application must be a number in between 1 to 5'],
        max: 5
    },
    App_Category: {
        type: String,
        required: [true, 'Category of the Application cannot be empty']
    }
});
module.exports = mongoose.model("Application", applicationSchema)