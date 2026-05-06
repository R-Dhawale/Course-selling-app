const express = require('express')
const app = express()
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

app.listen(port);