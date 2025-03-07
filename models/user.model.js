import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  wallet_address: { type: String, unique: true } // For adding WEB3 Wallet
  ,
  password: {
    type: String,
    required: true,
  },
  role: { type: mongoose.Schema.Types.ObjectId, refPath: 'roleModel', required: true },
  roleModel:{
    type: String,
    required: true,
    enum: ["Student", "College"]
  }
}); 

const User = mongoose.model("User", userSchema);

export {User};