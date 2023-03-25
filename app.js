const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const product = require("./routes/api/product");

const app = express();

connectDB();

app.use(cors({origin: true, credentials: true}));

app.use(express.json({extended: false}));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/product", product);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));