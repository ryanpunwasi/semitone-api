DROP TABLE IF EXISTS notes CASCADE;
DROP TYPE IF EXISTS accidentals CASCADE;
CREATE TYPE accidentals AS ENUM ('sharp', 'flat', 'natural');
CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  octave_id INTEGER REFERENCES octaves(id) ON DELETE CASCADE,
  letter CHAR(1),
  accidental accidentals,
  src VARCHAR(500)
);