const express = require("express");
const clientRoute = require("./routes/clientRoutes");
const cors = require("cors");
const {connectToDB} = require("./connection");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use("/api", clientRoute);
connectToDB("mongodb://127.0.0.1:27017/client_api").then(() => {
  console.log("MongoDB connected...");
});
app.listen(5000, () => console.log("Port started..."));
