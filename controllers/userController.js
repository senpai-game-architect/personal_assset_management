import mongoose from 'mongoose'
import User from './../models/Users.js'

export const getUser = (req, res) => {

    res.status(201).json({
        message: "Fill in your credentials!",
    });
};

export const createUser = async (req, res) => {
    try {
        const newRegister = await User.create(req.body);
        res.status(201).json({
            status: "Success",
            data: {
                user: newRegister
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: error.message
        })
    }

};

export const updateUser = async (req, res) => {
    try {

    } catch (error) {
        res.status(200).json({
            status: 'Failed',
            message: error.message
        })

    }
}
export const patchUpdateUser = async (req, res) => {
    try {

    } catch (error) {
        res.status(200).json({
            status: 'Failed',
            message: error.message
        })

    }
}



export const deleteUser = async (req, res) => {
    try {

    } catch (error) {
        res.status(200).json({
            status: 'Failed',
            message: error.message
        })

    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: 'Success',
            result: users.length,
            data: {
                users
            }
        })
    } catch (error) {
        res.status(404).json({
            status: 'Not found',
            message: error.message
        })
    }
}