import express from 'express';
import { createUser, deleteUser, getAllUsers, getUser, patchUpdateUser, updateUser } from '../controllers/userController.js'
import { Signup, Login } from '../controllers/authController.js'
const userRouter = express.Router();

userRouter.post('/signup', Signup)
userRouter.post('/login', Login)

// Set up routes on registerRouter

userRouter.route('/').get(getAllUsers).post(createUser)

userRouter.route('/:id').get(getUser).post(updateUser).delete(deleteUser).patch(patchUpdateUser)

export default userRouter;
