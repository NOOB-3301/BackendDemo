// This is certificate model or badge model

import mongoose from "mongoose";

const certSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  studentModel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  collegeModel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
  },
  certificate: {
    type: String,
    required: true,
  }
}, {timestamps: true}); 

const Cert = mongoose.model("Cert", certSchema);    

export {Cert};