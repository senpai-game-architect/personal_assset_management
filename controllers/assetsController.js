import Asset from '../models/Assets.js';


// Get all assets
export const getAssets = async (req, res) => {
    try {
        const allassets = await Asset.find();
        res.status(201).json({
            status: 'Success',
            length: allassets.length,
            date: {
                asset: allassets
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: error.message
        })
    }
};

// Get desired asset
export const getSpecificAsset = async (req, res) => {
    try {
        const asset = await Asset.findById(req.params.id);
        res.status(201).json({
            status: 'Success',
            date: {
                asset: asset
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: error.message
        })
    }
}
// Create asset
export const addAssets = async (req, res) => {
    try {
        const newasset = await Asset.create(req.body);
        res.status(201).json({
            status: 'Success',
            date: {
                asset: newasset
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: error.message
        })
    }
};



// Update asset
export const updateAsset = async (req, res) => {
    try {
        const updateasset = await Asset.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updateAsset) {
            return res.status(404).json({
                status: 'Failed',
                message: "Asset not found!"
            })
        }
        res.status(201).json({
            status: 'Success',
            date: {
                asset: updateasset
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: error.message
        })
    }
};

// Delete asset
export const deleteAsset = async (req, res) => {
    try {
        const delasset = await Asset.findByIdAndDelete(req.params.id);
        if (!deleteAsset) {
            return res.status(404).json({
                message: "Asset not found!"
            })
        }
        res.status(204).json({
            status: "Success",
            message: "Asset deleted!"
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
};
