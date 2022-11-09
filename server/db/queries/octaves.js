const db = require("../../config/db.config");

const getOctave = octave => {
  return db
    .query(
      "SELECT id, letter, accidental, src FROM notes WHERE octave_id = $1;",
      [octave]
    )
    .then(data => {
      return data.rows;
    });
};

module.exports = { getOctave };
