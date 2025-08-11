import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  email: string;
}

// Define schema
const newsletterSchema = new Schema<IContact>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please provide a valid email address",
      ],
    },
   },
  {
    timestamps: true,
  }
);

const Newsletter =
  mongoose.models.Contact || mongoose.model<IContact>("Newsletter", newsletterSchema);

export default Newsletter;
