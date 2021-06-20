const express = require ("express");
const router = express ();
const adminController = require ("../controller/adminController");

router.post("/Signup",adminController.signup);

router.post("/login",adminController.login);
module.exports = router ;
