import express from "express";
import errorHandler from './controllers/errorController.js'
const app = express();
import morgan from "morgan";
import router from './routes/assets.js'
import liabrouter from './routes/liabilites.js'
import landingPageRouter from './routes/landingPage.js'
import cors from 'cors'
import path from 'path'
import bodyParser from 'body-parser';
import userRouter from './routes/userRoutes.js';
import errorController from './controllers/errorController.js';

// MIDDLEWARES

app.use(express.json());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"));
}

const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, "../client/build")))

// ROUTES

app.use('/api/assets', router);
app.use('/api/liab', liabrouter);
app.use('/api/auth/', userRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, '../client/build', 'index.html'));
})

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})


app.use(errorHandler);


export default app