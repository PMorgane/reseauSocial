const UserModel = require('../models/user.model');
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select("-password");
    res.status(200).json(users);
};


module.exports.userInfo = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    try {
        const docs = await UserModel.findById(req.params.id).select("-password").exec();
        res.send(docs);
    } catch (err) {
        console.log("ID unknown : " + err);
    }
};


module.exports.updateUser = async (req, res) => {
    console.log(docs);
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      await UserModel.findOneAndUpdate(
        
        { _id: req.params.id },
        {
          $set: {
            bio: req.body.bio,
          }
        },
        { new: true, upsert: true, setDefaultsOnInsert: true },
        (err, docs) => {
          if (!err) return res.send(docs);
          if (err) return res.status(500).send({ message: err });
        }
      );
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  };