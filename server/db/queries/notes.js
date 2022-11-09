const db = require("../../config/db.config");

const getAllNotes = () => {
  return db.query("SELECT * FROM notes;").then(data => data.rows);
};

const getNote = (octave, letter, accidental = "natural") => {
  return db
    .query(
      "SELECT * FROM notes WHERE octave_id = $1 AND letter = $2 AND accidental = $3;",
      [octave, letter.toUpperCase(), accidental]
    )
    .then(data => data.rows);
};

const getOctave = octave => {
  return db
    .query("SELECT * FROM notes WHERE octave_id = $1;", [octave])
    .then(data => data.rows);
};

module.exports = { getAllNotes, getOctave, getNote };
