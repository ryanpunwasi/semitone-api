const getAlternate = require("../helpers/getAlternate");

test("returns E natural when given F flat", () => {
  expect(
    getAlternate({ octave: 4, letter: "F", accidental: "flat" })
  ).toStrictEqual({ octave: 4, letter: "E", accidental: "natural" });
});

test("returns F natural when given E sharp", () => {
  expect(
    getAlternate({ octave: 4, letter: "E", accidental: "sharp" })
  ).toStrictEqual({ octave: 4, letter: "F", accidental: "natural" });
});

test("returns false when given C flat or B sharp", () => {
  expect(
    getAlternate({ octave: 4, letter: "C", accidental: "flat" })
  ).toStrictEqual(false);
});

test("returns false when given B sharp", () => {
  expect(
    getAlternate({ octave: 4, letter: "B", accidental: "sharp" })
  ).toStrictEqual(false);
});

test("returns G flat when given F sharp", () => {
  expect(
    getAlternate({ octave: 4, letter: "F", accidental: "sharp" })
  ).toStrictEqual({ octave: 4, letter: "G", accidental: "flat" });
});

test("returns same note if accidental is natural", () => {
  expect(
    getAlternate({ octave: 4, letter: "F", accidental: "natural" })
  ).toStrictEqual({ octave: 4, letter: "F", accidental: "natural" });
});
