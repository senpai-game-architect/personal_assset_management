import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'
import validator from 'validator';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Field is mandatory
        trim: true, // Removes extra spaces
        default: "john doe",
    },
    email: {
        type: String,
        required: true,
        default: "johndoe@gmail.com",
        unique: true, // Ensures no duplicate emails
        lowercase: true, // Converts email to lowercase
        validate: [validator.isEmail, 'Please provide a valid email!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function (el) {
                return el === this.password
            }
        }, message: 'Passwords are not the same!'

    },

});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();// If password is not modified, skip hashing
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
})


userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);// Returns true if passwords match

}


const User = mongoose.model('User', userSchema)

export default User