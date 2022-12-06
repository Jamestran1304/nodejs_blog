// gọi require nó sẽ đi thẳng vào nodemodule gọi thư viện ra

const express = require("express");

// Sau khi tạo thì gọi lại function
const app = express();

const port = 3000;

// Định nghĩa route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
