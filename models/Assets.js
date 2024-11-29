import mongoose from 'mongoose';

const assetSchema = new mongoose.Schema({
    asset_name: {
        type: String,
        required: true,
        trim: true,
        default: "john doe",
    },
    image_url: { type: String, required: true },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    current_value: {
        type: Number,
        required: true,

    },

    acquisition_cost: {
        type: Number,
        required: true,

    },
    owner_name: {
        type: String,
        required: true,

    },
    usage: {
        type: String,
        required: true,

    },
    maintenence_cost: {
        type: Number,
        required: true,

    },
    registration_number: {
        type: Number,
        required: true,
        unique: true,

    },



    purchase_date: {
        type: Date,
        default: Date.now,
    },
});

const Asset = mongoose.model('Asset', assetSchema)

export default Asset