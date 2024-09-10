import { Schema, model, models, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  fullName: string;
  username: string;
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
});

export const User = models.User || model<IUser>("User", UserSchema);
