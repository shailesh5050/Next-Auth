import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    const connection = mongoose.connection;
    connection.on("connect", () => {
      console.log("DB Is Connected...");
    });
    connection.on("error", (err) => {
      console.error("There is error while connecting to DB" + err);
      process.exit();
    });
  } catch (error) {
    console.error("DB Error -> " + error);
  }
}
