<h1 style="text-align: center">🎺 Semitone API</h1>

## About

Semitone API is a REST API that serves a total of sixty musical notes in five different octaves from the Western diatonic scale. This includes the notes A through G, as well as their accidentals.

Each note is represented as an object with the following properties:

<ul>
<li><code>id</code> - a unique id</li>
<li><code>octave_id</code> - the octave, which ranges from 1-5</li>
<li><code>letter</code> - the letter notation, which ranges from A-G</li>
<li><code>accidental</code> - the accidental, which can be flat, sharp, or natural</li>
<li><code>src</code> - the source, which is a hyperlink to the audio of the note</li>
</ul>

## Guide

### Endpoints

Get all notes
GET request to <code>/notes</code>

GET request to <code>/octaves</code>

Get all notes in an octave
GET request to <code>/notes/octaves/:octaveId</code>

Get a specific note
GET request to <code>/notes/{octave}/{letter}/{accidental}</code>

### How To Use

### Exceptions
