const { NgsimModel } = require('../schemas/ngsim.schema')

class Ngsim extends NgsimModel {
    constructor() {
        super()
    }
}

module.exports = { Ngsim }