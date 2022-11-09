const db = require("../../config/db.config");

const getOctaves = () => {
  return db.query("SELECT octave FROM octaves;").then(data => {
    return data.rows.map(row => row.octave);
  });
};

module.exports = { getOctaves };
