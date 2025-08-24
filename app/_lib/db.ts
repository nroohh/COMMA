import mongoose from "mongoose";

if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  try {
    if (global.mongoose && global.mongoose.conn) { // if there is already connection
      console.log("Connected from previous");
      return global.mongoose.conn;
    } else { // if the connection is being initialized
      console.log(process.env.MONGO_URL);
      const conString:string = process.env.MONGO_URL as string;

      const promise = mongoose.connect(conString, {
        dbName: "oursweetcomma(db)",
        autoIndex: true,
      });

      global.mongoose = {
        conn: await promise,
        promise,
      };

      console.log("Newly connected");
      return await promise;
    }
  } catch (error: any) {
    console.error("Error connecting to the database:", error);
    throw new Error(error.message);
  }
}

export const disconnect = () => {
  if (!(global.mongoose as any).conn) {
    return;
  }
  (global.mongoose as any) = null;
  mongoose.disconnect();
};