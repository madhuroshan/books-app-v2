import { model, models, Schema, Document } from "mongoose";

export interface IThought extends Document {
  user: string;
  title: string;
  author: string;
  content: string;
}

const ThoughtSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export const Thought =
  models.Thought || model<IThought>("Thought", ThoughtSchema);
