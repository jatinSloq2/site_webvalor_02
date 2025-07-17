import mongoose, { Schema, Document } from "mongoose";

// Interface for TypeScript type checking
export interface IContact extends Document {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define schema
const contactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
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
    company: {
      type: String,
      trim: true,
      maxlength: [100, "Company name cannot exceed 100 characters"],
      default: "",
    },
    phone: {
      type: String,
      trim: true,
      maxlength: [20, "Phone number cannot exceed 20 characters"],
      default: "",
    },
    projectType: {
      type: String,
      trim: true,
      maxlength: [100, "Project type cannot exceed 100 characters"],
      default: "",
    },
    budget: {
      type: String,
      trim: true,
      default: "Not sure",
    },
    timeline: {
      type: String,
      trim: true,
      maxlength: [100, "Timeline cannot exceed 100 characters"],
      default: "",
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [10, "Message must be at least 10 characters long"],
      maxlength: [1000, "Message cannot exceed 1000 characters"],
    },
  },
  {
    timestamps: true,
  }
);

// Export the model
const Contact =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", contactSchema);

export default Contact;
