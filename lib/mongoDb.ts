import mongoose from "mongoose";

let cached: {
  conn: mongoose.Mongoose | null;
  promise: Promise<mongoose.Mongoose> | null;
} = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

const connectDB = async (): Promise<mongoose.Mongoose> => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions;

    cached.promise = mongoose
      .connect(process.env.MONGODB_URI as string, opts)
      .then((mongooseInstance) => {
        console.log("MongoDB connected");
        return mongooseInstance;
      })
      .catch((error) => {
        console.error("MongoDB connection error:", error);
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectDB;
