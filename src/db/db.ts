import mongoose from 'mongoose';

export default async function connectDB() {
  const DATABASE_URL = process.env.DATABASE_URL || '';

  await mongoose
    .connect(DATABASE_URL)
    .then(() => {
      console.log('Database Connected');
    })
    .catch((err) => {
      console.log(err);
    });
}
