import Liability from "../models/Liabilities.js";

// Get All Liabilities
export const getLiabilities = async (req, res) => {
    try {
        const liabilities = await Liability.find();
        res.status(200).json({
            status: "success",
            results: liabilities.length,
            data: liabilities,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

// Get Specific Liability
export const getSpecificLiability = async (req, res) => {
    try {
        const liability = await Liability.findById(req.params.id);
        if (!liability) {
            return res.status(404).json({
                status: "fail",
                message: "No liability found with this ID",
            });
        }
        res.status(200).json({
            status: "success",
            data: liability,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

// Add New Liability
export const addLiability = async (req, res) => {
    try {
        const newLiability = await Liability.create(req.body);
        res.status(201).json({
            status: "success",
            data: newLiability,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message,
        });
    }
};

// Delete Liability
export const deleteLiability = async (req, res) => {
    try {
        const liability = await Liability.findByIdAndDelete(req.params.id);
        if (!liability) {
            return res.status(404).json({
                status: "fail",
                message: "No liability found with this ID",
            });
        }
        res.status(204).json({
            status: "success",
            data: null,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};


// Update Liability (Partial Update)
export const updateLiability = async (req, res) => {
    try {
        const updatedLiability = await Liability.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedLiability) {
            return res.status(404).json({
                status: "fail",
                message: "No liability found with this ID",
            });
        }
        res.status(200).json({
            status: "success",
            data: updatedLiability,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message,
        });
    }
};
