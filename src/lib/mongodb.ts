import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri && process.env.NODE_ENV === "production") {
  // We don't throw here to avoid breaking the build process
  console.warn("MONGODB_URI is missing. Database features will fail at runtime.");
}

let clientPromise: Promise<MongoClient> | undefined;

function getClientPromise(): Promise<MongoClient> {
  if (clientPromise) return clientPromise;

  if (!uri) {
    throw new Error("MONGODB_URI is missing from environment variables");
  }

  // In development, use a global variable so the MongoClient is not
  // recreated on every hot-reload (Next.js re-executes modules).
  if (process.env.NODE_ENV === "development") {
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      const client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    const client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }

  return clientPromise;
}

export default getClientPromise;

export async function getDatabase() {
  if (!uri) {
    throw new Error("MONGODB_URI is missing from environment variables");
  }
  const client = await getClientPromise();
  return client.db("travel-planner");
}

