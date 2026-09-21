import mongoose, { Schema } from "mongoose";
const subcriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, // The Subscribers the User
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, // One to whome "Subscriber " is Subcribing
      ref: User,
    },
  },
  { timestamps: true }
);
export const Subscription = mongoose.model("Subscription", subcriptionSchema);
