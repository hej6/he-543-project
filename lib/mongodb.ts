import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "portfolio";

if (!uri) throw new Error("Missing MONGODB_URI. Add it to your environment variables.");

const globalForMongo = globalThis as unknown as { mongoClientPromise?: Promise<MongoClient> };
const client = new MongoClient(uri);
const clientPromise = globalForMongo.mongoClientPromise ?? client.connect();

if (process.env.NODE_ENV !== "production") globalForMongo.mongoClientPromise = clientPromise;

export async function getDb() {
  const connectedClient = await clientPromise;
  return connectedClient.db(dbName);
}
