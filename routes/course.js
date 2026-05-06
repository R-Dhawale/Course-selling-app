const { Router } = require("express");

const courseRouter = Router();

    courseRouter.post("/purchases", function (req, res){
        res.json({
            message: "Purchases endpoint"
        })
    });

    courseRouter.get("/courses", function (req, res){
        res.json({
            message: "Courses endpoint"
        })
    });

module.exports = {
    courseRouter: courseRouter
}