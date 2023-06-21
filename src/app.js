const express= require("express");
const cors= require("cors");

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use("/employee", require('../src/routes/employeRoutes'))


app.all("*", (_req, res) => {
    return res.status(404).json({
        success: false,
        message: "Route not found"
    })
})

module.exports= app;