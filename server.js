const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
