const router = require("express").Router();
const notes = require("../db/queries/notes");

router.get("/", (req, res) => {
  notes.getAllNotes().then(data => {
    const notes = {};
    data.forEach(note => {
      if (notes[note.octave_id]) {
        notes[note.octave_id].push(note);
      } else {
        notes[note.octave_id] = [note];
      }
    });
    return res.json({ notes });
  });
});

router.get("/octaves/:octave", (req, res) => {
  const { octave } = req.params;
  notes.getOctave(octave).then(data => {
    return res.json({ notes: data });
  });
});

router.get("/:octave/:letter/:accidental?", (req, res) => {
  const { octave, letter, accidental } = req.params;
  notes
    .getNote(octave, letter, accidental)
    .then(data => res.json({ note: data }));
});

module.exports = router;
