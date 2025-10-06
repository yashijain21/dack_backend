import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "./models/Category.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const categories = [
  { name: "Vinterdäck", slug: "vinterdack" },
  { name: "Sommardäck", slug: "sommardack" },
  { name: "Året runt-däck", slug: "aret-runt-dack" },
  { name: "Vinterhjul", slug: "vinterhjul" },
  { name: "Sommarhjul", slug: "sommarhjul" },
  { name: "Fälg", slug: "falg" },
  { name: "Däcktjänster", slug: "dacktjanster" },
];

async function seedDB() {
  try {
    await Category.deleteMany({});
    const inserted = await Category.insertMany(categories);
    console.log("✅ Categories inserted!");

    // Print category names + IDs
    inserted.forEach((cat) => {
      console.log(`${cat.name} → ${cat._id}`);
    });

    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error seeding DB:", err);
    mongoose.connection.close();
  }
}

seedDB();
