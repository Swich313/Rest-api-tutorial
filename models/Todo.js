const mongoose = require('mongoose');
const {Schema} = mongoose;

const TodoSchema = new Schema({
    todo: String,
    description: String,
    state: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Todos', TodoSchema);
