const History = require("../models/user-history");

exports.sharedByMe = async (req, res)=>{
    let senderId = req.userId
    try{
        const myHistory = await History.find({id : senderId}, {data : 1, _id : 0});

        if(!myHistory){
            return res.status(200).send({success : true, message : "no data is sent by you"});
        }

        res.status(200).send({success : true, data : myHistory});

    }
    catch(error){
        res.status(400).send({error : error});
    }
}