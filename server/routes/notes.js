const router = require("express").Router();
const notes = require("../db/queries/notes");

router.get("/", (req, res) => {
  notes.getAllNotes().then(data => {
    res.json({ notes: data });
  });
});

module.exports = router;
