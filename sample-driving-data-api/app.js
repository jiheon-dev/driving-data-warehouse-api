const config = require("./config/config");
const express = require("express");
const { ngsimRouter } = require("./routers/ngsim.router")
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
    res.json({ env: config.env.NODE_ENV, api: 'driving-data-api' })
})

app.use('/ngsim', ngsimRouter)

app.listen(3000, () => {
    console.log("server started")
})