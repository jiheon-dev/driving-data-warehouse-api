const { Router } = require("express");
const { getCollections, getCollectionDetails } = require('../database');
const databaseRouter = Router();

databaseRouter.get("/", async (req, res) => {
    const collecitons = await getCollections();
    res.json({ success: true, data: { name: collecitons } });
})

databaseRouter.get('/get-details', async (req, res) => {
    const { collectionName } = req.query;
    const result = await getCollectionDetails(collectionName);
    console.log(result)
    res.json({
        success: true, data: {
            name: result.modelName,
            opts: result.opts,
        }
    })
})

module.exports = { databaseRouter }