import mongoose from 'mongoose';

export default async function connDB() {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(process.env.MONGO_DB_CONN_STRING)
    .then(() => {
      console.log('connected to db');
    });
}