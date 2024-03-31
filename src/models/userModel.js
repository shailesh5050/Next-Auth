import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
import { type } from "os";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToke: String,
  forgotPasswordTokeExpiry: String,
  verifyToken: String,
  verifyTokenExpiry: String,
});

const User = mongoose.model.users || mongoose.model("users", userSchema);

export default User;
