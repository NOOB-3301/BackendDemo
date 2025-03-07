import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
  certificate: {
    type: String,
  },
  userModel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  collegeModel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
  },
  walletAdd:{
    type: String,
  },
  portfolioTokenid:{
    type: String,
  },
}, {timestamps: true});


const Student = mongoose.model("Student", studentSchema);

export {Student};