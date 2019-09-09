const { model, Schema } = require('mongoose');

const godSchema = new Schema({
    name: String,
    pantheon: String,
    role: String,
    attack: String,
    power: String,
    description: String,
    traits: [String],
    releaseNumber: Number,
    likes: [
        {
            username: String,
            createdAt: String
        }
    ]
});

module.exports = model('God', godSchema);
