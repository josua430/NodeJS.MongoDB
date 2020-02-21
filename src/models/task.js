//use mongoose, it not connected because the connection is already open in app.js file
const mongoose = require('mongoose');
//use Schema for manipulate data
const Schema = mongoose.Schema;

//detail of schema for data
const TaskSchema = new Schema(
    {
        title: String,
        description: String,
        status: {
            type: Boolean,
            default: false
        }
    }
);

//export the schema for use in other parts model('task' is for reference as task the schema created
module.exports = mongoose.model('task', TaskSchema);

