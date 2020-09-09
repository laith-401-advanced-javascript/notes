'use strict';

// const NoteDB = require('../modul/note-schema.js');

const NoteCall = require('../modul/notes-collection');

class Note {
    constructor(obj) {
        console.log('sssssssssssssss', obj);
        this.action = obj.action;
        this.payload = obj.payload;
        this.category = obj.category;
        this.id = obj.id;

        this.execute();
    }

    execute() {
        if (this.action === 'add') {
            console.log('sss');
            this.add();
        } else if (this.action === 'list') {
            this.addList();

        } else if (this.action === 'delete') {
            this.deleteList();
        }
    }

    async add() {
        let note = {
            text: this.payload,
            category: this.category,
        };
        // const noteDB = new NoteDB(note);
        // console.log('noteDB >>', NoteCall);
        let noteItem = await NoteCall.create(note);
        console.log('noot created >>', noteItem);
        return noteItem;

    }

    async addList() {
        var allNoteItem;
        console.log('00000000000', this.category);
        if (this.category === 'allCategory') {
            allNoteItem = await NoteCall.get();
            console.log('1111111111111');
        } else {
            allNoteItem = await NoteCall.get({ category: this.category });
            console.log('222222222222222222');

        }
        console.log('allNoteItem', allNoteItem);
    }

    async deleteList() {
        let deleteItem = await NoteCall.delete({ _id: this.id });
        console.log('deleted>>>>Item', deleteItem);

    }


}

module.exports = Note;