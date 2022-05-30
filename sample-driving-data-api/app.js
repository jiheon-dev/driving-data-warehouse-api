const config = require("./config/config");
const express = require("express");
const { ngsimRouter } = require("./routers/ngsim.router")
const { databaseRouter } = require('./routers/db.router')
const app = express()
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
    res.json({ env: config.env.NODE_ENV, api: 'driving-data-api' })
})

app.use('/apis/ngsim', ngsimRouter)
app.use('/apis/database', databaseRouter)

app.listen(3000, () => {
    console.log("server started")
})