const express = require("express");
const connectDb = require("./config/dbConnection.js");
const cors = require("cors");
const dotenv = require("dotenv").config();



connectDb();
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
