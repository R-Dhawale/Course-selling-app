const express = require('express')
const app = express()
const port = 3000

app.post("/user/signup", function (req, res){
    res.json({
        message: "Signup endpoint"
    });
});

app.post("/user/signin", function (req, res){
    res.json({
        message: "Signin endpoint"
    })
});

app.get("/user/purchases", function (req, res){
    res.json({
        message: "Purchases endpoint"
    })
});

app.post("/course/purchases", function (req, res){

    res.json({
        message: "Purchases endpoint"
    })
});

app.get("/courses", function (req, res){
    res.json({
        message: "Courses endpoint"
    })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
