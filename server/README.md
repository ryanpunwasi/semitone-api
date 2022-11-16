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

### How To Use

<p>Making your first REST API call is easy and can be done from your browser.</p>

REST calls are made up of:

<ul>
<li>Base URL. Example <code>https://semitone-api.fly.dev</code></li>
<li>Endpoint. Example <code>/notes</code></li>
</ul>

### List of Endpoints

<ul>
<li>Get all notes (grouped by octave)<br />
<code>/notes</code></li>

<li>Get all octaves<br />
<code>/octaves</code></li>

<li>Get all notes in a specific octave<br />
<code>/notes/octaves/{octave}</code></li>

<li>Get a specific note<br />
<code>/notes/{octave}/{letter}/{accidental}</code></li>

</ul>

## Exceptions
