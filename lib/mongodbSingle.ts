import { MongoClient } from "mongodb";

const uri: string | undefined = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error("❌ Please add your Mongo URI to .env");
}

// Extend NodeJS Global type to safely use `global._mongoClientPromise`
declare global {
  // Only in Node.js environment
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // Use a cached client in development
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Always create new client in production
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
