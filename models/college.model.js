// import mongoose from "mongoose";

// const collegeSchema = new mongoose.Schema({
//     students: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Student"
//     }],
//     walletAdd:{
//         type: String,
//     },
//     userModel:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User"
//     }
// }, {timestamp: true});

// const College = mongoose.model("College", collegeSchema);

// export {College};


import mongoose from 'mongoose';

const collegeSchema = new mongoose.Schema({
  college_name: { type: String, required: true }, 
  created_at: { type: Date, default: Date.now }
});

export const College = mongoose.model('College', collegeSchema);