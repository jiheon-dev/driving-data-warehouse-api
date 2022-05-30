const { Schema, model } = require("mongoose");

// TODO: set index
const NgsimSchema = new Schema({
    Vehicle_ID: Number,
    Frame_ID: Number,
    Total_Frames: Number,
    Global_Time: Number,
    Local_X: Number,
    Local_Y: Number,
    Global_X: Number,
    Global_Y: Number,
    v_length: Number,
    v_Width: Number,
    v_Class: Number,
    v_Vel: Number,
    v_Acc: Number,
    Lane_ID: Number,
    O_Zone: Number,
    D_Zone: Number,
    Int_ID: Number,
    Section_ID: Number,
    Direction: Number,
    Movement: Number,
    Preceding: Number,
    Following: Number,
    Space_Headway: Number,
    Time_Headway: Number,
    Location: String,
}, {
    collection: 'ngsim'
})

const NgsimModel = model('ngsim', NgsimSchema)

module.exports = { NgsimModel }