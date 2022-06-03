const { Router } = require("express");
const { Ngsim } = require("../database/index")
const ngsimRouter = Router();

ngsimRouter.get("/", async (req, res) => {
    let { page, per_page } = req.query

    if (!page) page = 1
    if (!per_page) per_page = 10

    const rows = await Ngsim.find().skip((page - 1) * 20).limit(per_page);
    res.json({ data: rows })
})

ngsimRouter.post("/", async (req, res) => {
    let { query } = req.body;

    const rows = await Ngsim.find(query).lean();
    res.json({ data: rows })
})

ngsimRouter.get("/get-stats", async (req, res) => {
    const stats = await Ngsim.aggregate().group({ _id: "$Location", total_count: { $sum: 1 } });
    res.json({ stats })
})

module.exports = { ngsimRouter }