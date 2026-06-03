const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

adminRouter.post("/signup", function (req, res){
    res.json({
        message: "Signup endpoint"
    });
});

adminRouter.post("/signin", function (req, res){
    res.json({
        message: "Signin endpoint"
    })
});


adminRouter.post("/course", function (req, res){
    res.json({
        message: "Create course endpoint"
    })
});

adminRouter.put("/course", function (req, res){
    res.json({
        message: "Update course endpoint"
    })
});

adminRouter.get("/course/bulk", function (req, res){
    res.json({
        message: "Courses endpoint"
    })
});

module.exports = {
    adminRouter: adminRouter
}