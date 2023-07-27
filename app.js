const express = require("express");
const cors = require("cors");

const events = require("./routes/events");
const connectDB = require("./db/connect");
const notFound = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// MIDDLEWARE
app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api/v1/events", events);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
