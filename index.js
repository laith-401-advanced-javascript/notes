#!/usr/bin/env node

'use strict';

const Input = require('./lib/input.js');
const Note = require('./lib/note.js');

const obj = new Input();

console.log('object', obj.note);
new Note(obj.note);