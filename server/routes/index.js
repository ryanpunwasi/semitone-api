const router = require("express").Router();

router.get("/", (req, res) => {
  return res.send("Index");
});

module.exports = router;
