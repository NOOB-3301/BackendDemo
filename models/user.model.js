import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type: mongoose.Schema.Types.ObjectId,
    refpath: "roleModel",
    required: true
  },
  roleModel:{
    type: String,
    required: true,
    enum: ["Student", "College"]
  }
}); 

const User = mongoose.model("User", userSchema);

export {User};