const History = require("../models/user-history");

exports.sharedToMe = async (req, res) => {
    const userId = req.userId; 

    try {
        const sharedFiles = await History.find({
            "data.receiverDetails.receiverId": userId,
        })
            .select("data")

        if (sharedFiles.length === 0) {
            return res.status(404).json({success : true, message: "No files shared with you." });
        }

        res.status(200).json({ success : true, sharedFiles });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching shared files." });
    }
};

