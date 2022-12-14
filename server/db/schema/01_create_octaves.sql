DROP TABLE IF EXISTS octaves CASCADE;
CREATE TABLE octaves (
  id SERIAL PRIMARY KEY,
  octave INTEGER NOT NULL UNIQUE CHECK (octave > 0), CHECK (octave <= 10)
);