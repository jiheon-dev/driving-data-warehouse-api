const mongoose = require("mongoose")
const config = require("../config/config")
const { Ngsim } = require("./models/ngsim.model")

mongoose.connect(config.env.MONGODB_URL, {
    maxPoolSize: 10,
});
const connection = mongoose.connection;

connection.on("connected", () =>
    console.log("mongodb connect success")
);
connection.on("error", (error) =>
    console.error("mongodb connect failed\n" + error)
);

const getCollections = () => {
    let collections = mongoose.connections[0].collections
    let names = [];

    Object.keys(collections).forEach((k) => {
        names.push(k);
    })
    return names;
}

const getCollectionDetails = (collectionName) => {
    let collections = mongoose.connections[0].collections;
    console.log(collections[collectionName])
    return collections[collectionName];
}

module.exports = { Ngsim, getCollections, getCollectionDetails }