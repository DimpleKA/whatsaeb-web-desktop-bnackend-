const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: { type: String, unique: true }, // Making email field unique
    name: String,
    password: String,
    dpurl: String,
    createdon: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema); // 'User' is the model name

module.exports = User;
