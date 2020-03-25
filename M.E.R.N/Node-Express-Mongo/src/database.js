const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(db => {
    console.log("DB Connected");
  })
  .catch(error => {
    console.log("Error: " + error);
  });
