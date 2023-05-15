const router = require("express").Router();
const authController=require("../controllers/authController")


// auth
router.post("/register", authController.signUp);



module.exports=router;