const mongoose = require("mongoose");
const uri = process.env.CONN_STR || "mongodb://localhost:27017/shopping-cart";
mongoose.set("strictQuery", false);

module.exports = function () {
  mongoose
    .connect(uri)
    .then((conn) => console.log("connection to database success"))
    .catch((error) => console.log("connection to database fail"));
};
