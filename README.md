<h1 style="text-align: center">🎺 Semitone API</h1>

## About

Semitone API is a REST API that serves a total of sixty musical notes in five different octaves from the Western diatonic scale. This includes the notes A through G, as well as their accidentals.

Responses are in JSON format. Each note is represented as an object with the following properties:

<ul>
<li><code>id</code> - a unique id</li>
<li><code>octave_id</code> - the octave, which ranges from 1-5</li>
<li><code>letter</code> - the letter notation, which ranges from A-G</li>
<li><code>accidental</code> - the accidental, which can be flat, sharp, or natural</li>
<li><code>src</code> - the source, which is a hyperlink to the audio of the note</li>
</ul>

## Guide

### How To Use

<p>Making your first REST API call is easy and can be done from your browser.</p>

REST calls are made up of:

<ul>
<li>Base URL. Example <code>https://semitone-api.onrender.com</code></li>
<li>Endpoint. Example <code>/notes</code></li>
</ul>

### List of Endpoints

<ul>
<li>Get all notes (grouped by octave)<br />
<code>/notes</code></li>

<li>Get all octaves<br />
<code>/octaves</code></li>

<li>Get all notes in a specific octave<br />
<code>/notes/octaves/{octave}</code>
<p>Example: https://semitone-api.onrender.com/notes/octaves/3</p></li>

<li>Get a specific note<br />
<code>/notes/{octave}/{letter}/{accidental}</code>
<p>Example: https://semitone-api.onrender.com/notes/1/C/sharp</p></li>

</ul>

## Exceptions

<p>Requests for the notes C flat (C♭)  and B sharp (B♯) will result in a 404: Not Found. This is because these notes belong to an octave that is different from the octave specified in the request. For example, the request <code>/notes/3/C/flat</code> is requesting a note from the third octave. However, C flat in octave 3 is equivalent to B sharp in octave 2.</p>
<p>If the accidental for a note is not specified, the natural variation will be returned. For example, a request to the endpoint <code>/notes/3/C</code> will return C natural.</p>
