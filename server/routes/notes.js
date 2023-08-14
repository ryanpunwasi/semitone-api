const router = require("express").Router();
const notes = require("../db/queries/notes");
const getAlternate = require("../helpers/getAlternate");

// Get all notes
router.get("/", (req, res) => {
  notes
    .getAllNotes()
    .then(data => {
      const notes = {};

      // Organize notes by octave
      data.forEach(note => {
        if (notes[note.octave_id]) {
          notes[note.octave_id].push(note);
        } else {
          notes[note.octave_id] = [note];
        }
      });

      return res.json({ notes });
    })
    .catch(err => console.log(err));
});

// Get all notes from a given octave
router.get("/octaves/:octave", (req, res) => {
  const { octave } = req.params;

  if (!parseInt(octave)) return res.sendStatus(404).send("Not found.");

  notes.getOctave(octave).then(data => {
    return res.json({ notes: data });
  });
});

router.get("/:octave/:letter/:accidental?", (req, res) => {
  // Extract parameters
  const { octave } = req.params;
  const letter = req.params.letter.toUpperCase();
  const accidental = req.params.accidental || "natural";

  const naturals = ["C", "D", "E", "F", "G", "A", "B"];

  // Handle invalid parameters
  if (!parseInt(octave) || !naturals.includes(letter.toUpperCase()))
    return res.sendStatus(400);

  if (
    accidental &&
    accidental !== "sharp" &&
    accidental !== "flat" &&
    accidental !== "natural"
  )
    return res.sendStatus(400);

  // Get enharmonic
  const alternate = getAlternate({ octave, letter, accidental });

  // Make queries and send response
  notes.getNote(octave, letter, accidental).then(data => {
    if (!data.length && alternate) {
      // const { octave, letter, accidental } = alternate;
      notes
        .getNote(alternate.octave, alternate.letter, alternate.accidental)
        .then(data => res.json({ note: { ...data[0], letter, accidental } }));
    } else if (!data.length && !alternate) {
      return res.sendStatus(404);
    } else {
      return res.json({ note: data[0] });
    }
  });
});

module.exports = router;
