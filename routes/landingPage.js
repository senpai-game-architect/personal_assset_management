import express from 'express';
import { getLandingPage } from '../controllers/landingPageController.js';
const landingPageRouter = express.Router();



landingPageRouter.get("/", getLandingPage);

export default landingPageRouter;
