import { Schema, model } from "mongoose";
import { UserDocument } from "../interface/user.interface";

export const userSchema = new Schema({
  client_id: { type: String, required: true },
  wallet_address: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export const UserDocumentModel = model<UserDocument>("User", userSchema);
