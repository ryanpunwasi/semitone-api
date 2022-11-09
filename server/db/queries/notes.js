const db = require("../../config/db.config");

const getAllNotes = () => {
  return db.query("SELECT * FROM notes;").then(data => {
    return data.rows;
  });
};

module.exports = { getAllNotes };
