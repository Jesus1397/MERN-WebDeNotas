//----REQUIRED----//
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

//----INITIALIZATION----//
const app = express();
require("./database");

//----SETTINGS----//
// app.set("views", path.join(__dirname, "views"));

//----MIDDLEWARES----//
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

//----ROUTES----//
app.use('/api/notes',require("./routes/notes"));
app.use('/api/users',require("./routes/users"));


//----STATIC FILES----//
// app.use(express.static(path.join(__dirname, "public")));

//----SERVER STARTED----//
app.listen(process.env.PORT, () => {
  console.log("Server on http://localhost:" + process.env.PORT);
});
