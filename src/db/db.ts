import mongoose from 'mongoose';

export default async function connectDB() {
  const DATABASE_URL = process.env.DATABASE_URL || '';

  try {
    await mongoose
      .connect(DATABASE_URL)
      .then(() => {
        console.log('Database Connected');
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
}
