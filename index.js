var exp = require("express");
var use = exp();
const port = 3000;

use.get("/", (req, res) => {
  res.json("Iam Nodejs User");
});

use.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
