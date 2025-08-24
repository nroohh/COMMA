import mongoose, { Mongoose } from "mongoose";

interface MongooseGlobal {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseGlobal | undefined;
}

if (!globalThis.mongoose) {
  globalThis.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  try {
    if (globalThis.mongoose?.conn) {
      console.log("Connected from previous");
      return globalThis.mongoose.conn;
    }

    console.log(process.env.MONGO_URL);
    const conString: string = process.env.MONGO_URL as string;

    const promise = mongoose.connect(conString, {
      dbName: "oursweetcomma(db)",
      autoIndex: true,
    });

    globalThis.mongoose = {
      conn: await promise,
      promise,
    };

    console.log("Newly connected");
    return await promise;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error connecting to the database:", error);
      throw new Error(error.message);
    }
    throw new Error("Unknown error connecting to the database");
  }
}

export const disconnect = () => {
  if (!globalThis.mongoose?.conn) return;

  globalThis.mongoose = { conn: null, promise: null };
  mongoose.disconnect();
};
