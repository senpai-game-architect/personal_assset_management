import express from 'express';
import { getLiabilities, getSpecificLiability, addLiability, deleteLiability, updateLiability } from '../controllers/LiabilitiesController.js'

const liabrouter = express.Router();



liabrouter.route("/").get(getLiabilities).post(addLiability);
liabrouter
    .route("/:id").get(getSpecificLiability)

    .patch(updateLiability)
    .delete(deleteLiability);


export default liabrouter;