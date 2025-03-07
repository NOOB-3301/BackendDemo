// import mongoose from "mongoose";


// const studentSchema = new mongoose.Schema({
//   certificate: {
//     type: String,
//   },
//   userModel: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   collegeModel: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "College",
//   },
//   walletAdd:{
//     type: String,
//   },
//   portfolioTokenid:{
//     type: String,
//   },
// }, {timestamps: true});


// const Student = mongoose.model("Student", studentSchema);

// export {Student};


//we dont need to store the student college and all
//we just want to store his NFT token issue by the college 
//and his badges
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  portfolio_token_id: Number,
  badges: [{ badge_token_id: Number, metadata_uri: String }]
});

export const Student = mongoose.model('Student', studentSchema);