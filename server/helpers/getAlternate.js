const getAlternate = note => {
  const naturals = ["C", "D", "E", "F", "G", "A", "B"];
  const { octave, letter, accidental } = note;

  // Edge case where note is natural
  if (accidental === "natural") {
    return note;
  }

  // Edge case where alternate would be a note in a different octave
  if (
    (letter === "C" && accidental === "flat") ||
    (letter === "B" && accidental === "sharp")
  ) {
    return false;
  }

  // Edge case where alternate is natural
  if (letter === "E" && accidental === "sharp") {
    return { octave, letter: "F", accidental: "natural" };
  } else if (letter === "F" && accidental === "flat") {
    return { octave, letter: "E", accidental: "natural" };
  }

  const position = naturals.findIndex(natural => natural === note.letter);
  if (accidental === "sharp") {
    return {
      octave,
      letter: naturals[position + 1],
      accidental: "flat",
    };
  }

  if (accidental === "flat") {
    return {
      octave,
      letter: naturals[position - 1],
      accidental: "sharp",
    };
  }
};

module.exports = getAlternate;
