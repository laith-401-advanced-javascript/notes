'use strict';

const Note = require('../note.js');
note = new Note();
// const newCollect = require('../../modul/')
require('@code-fellows/supergoose');

jest.spyOn(global.console, 'log');



describe('noteee', () => {

    it('if the data and data both valid will show the output  ', () => {

        const note = new Note({
            action: 'add',
            payload: 'the note',
        });
        note.execute();
        expect(console.log).toHaveBeenCalled();
    });

    it('shlould return nothing to the console if there no command  ', () => {
        expect(console.log).toHaveBeenCalled();
    });

    it('add() creat a new note ', () => {

        let textNote = { text: 'mesg0 ', category: 'mesg0' }
        return note.create(textNote).then(record => {
            Object.keys(note).forEach(key => {
                expect(record[key]).toEqual(obj[key]);
            });
        });

    });

    // it('get()', async() => {

    //     let note = { text: 'mesg1 ', category: 'mesg2' }
    //     const record = await note.create(note);
    //     console.log('record note  : ', record);
    //     const noteItm = await note.get(record._id);
    //     console.log('note Itm :', noteItm);
    //     Object.keys(note).forEach(key => {
    //         expect(noteItm[key]).toEqual(note[key]);
    //     });

    // });

});