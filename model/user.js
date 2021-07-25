// const mongoose = require('mongoose')

// const UserSchema = new mongoose.Schema ({
//     firstname: {
//         type: String,
//         required: false
//     },
//     lastname: {
//         type: String,
//         required: false
//     },
// })

// module.exports = mongoose.model('user', UserSchema)


const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    }
}
)
module.exports = mongoose.model('userT', UserSchema)



























