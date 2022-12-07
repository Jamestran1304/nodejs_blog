// gọi require nó sẽ đi thẳng vào nodemodule gọi thư viện ra
const path = require("path");
const morgan = require("morgan");
const express = require("express");
const { engine } = require("express-handlebars");

// Sau khi tạo thì gọi lại function
const app = express();

const port = 3000;

// Xử lý static file
app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Định nghĩa route
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
