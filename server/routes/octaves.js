const router = require("express").Router();
const octaves = require("../db/queries/octaves");

router.get("/", (req, res) => {
  octaves.getOctaves().then(data => {
    return res.json({ octaves: data });
  });
});

module.exports = router;
