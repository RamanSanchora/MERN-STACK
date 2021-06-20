const express = require ("express");
const router = express ();
const userController = require ("../controller/userController");

router.post("/signup",userController.signup);
router.post("/login",userController.login);

router.get("/search/Email/:email",userController.getUserByEmail);
router.get("/search/ID/:id",userController.getUserByID);
router.post("/postblog",userController.postBlog);
router.get("/searchblog/userID/:userId",userController.getUserByuserId);
module.exports = router;

