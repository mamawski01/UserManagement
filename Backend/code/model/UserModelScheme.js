import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: false
    },
    middle_initial: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    birth_date: {
        type: String,
        required: false
    },
    city_address: {
        type: String,
        required: false
    },
    contact_number: {
        type: String,
        required: false
    },
    other_information: {
        type: String,
        required: false
    },
}, {
    timestamps: true,
    collection: 'Users',
});

const UserSchema = mongoose.model('UserSchema', userSchema);

export default UserSchema;