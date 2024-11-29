import User from '../models/Users.js'
import jwt from 'jsonwebtoken';
import AppError from '../utils/AppError.js';

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
}

export const Signup = async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    });
    const token = signToken(newUser._id);

    try {
        res.status(201).json({
            status: 'Success',
            token,
            data: { user: newUser },

        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: error.message
        })
    }

}

export const Login = async (req, res, next) => {

    const { email, password } = req.body;
    if (!email || !password) {
        return next(new AppError('Please provide email and password', 400))
    }

    const user = await User.findOne({ email }).select('+password');


    if (!user || !await user.correctPassword(password, user.password)) {
        return next(new AppError('Incorrect email or password'), 401);
    }

    const token = signToken(user._id);

    res.status(200).json({
        status: 'Success',
        token,
    })

}