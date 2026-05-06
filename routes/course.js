const { Router } = require("express");

const courseRouter = Router();

    courseRouter.post("/purchases", function (req, res){
        res.json({
            message: "Purchases endpoint"
        })
    });

    courseRouter.get("/preview", function (req, res){
        res.json({
            message: "Preview endpoint"
        })
    });

module.exports = {
    courseRouter: courseRouter
}