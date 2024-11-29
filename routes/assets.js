import express from 'express';
import { getAssets, getSpecificAsset, addAssets, deleteAsset, updateAsset } from '../controllers/assetsController.js'

const router = express.Router();



router.route("/").get(getAssets).post(addAssets);
router
    .route("/:id").get(getSpecificAsset)

    .patch(updateAsset)
    .delete(deleteAsset);


export default router;