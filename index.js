#!/usr/bin/env node

'use strict';

const Input = require('./lib/input.js');
const Note = require('./lib/note.js');

const obj = new Input();

new Note(obj);
// console.log('object', obj);