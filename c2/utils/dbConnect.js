import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnect) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGO_UR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connect.isConnect = db.connection[0].readyState;
  console.log(connection.isConnect);
}

export default dbConnect;
