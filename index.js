#!/usr/bin/env node

'use strict';

const Input = require('./lib/input.js');
const Note = require('./lib/note.js');

const mongoose = require('mongoose');
// const NoteDB = require('./modul/note-schema.js');


const MONGOOSE_URL = 'mongodb://localhost:27017/NoteDB';

mongoose.connect(MONGOOSE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
console.log('connection status : ', mongoose.connection.readyState);


const obj = new Input();
console.log('object', obj);
new Note(obj.note);

// this should be in your .env file