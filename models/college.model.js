import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }],
    walletAdd:{
        type: String,
    }
}, {timestamp: true});

const College = mongoose.model("College", collegeSchema);

export {College};