'use strict';

const Note = require('../note.js');

jest.spyOn(global.console, 'log');

describe('noteee', () => {

    it('if the data and data both valid will show the output  ', () => {

        const note = new Note({
            action: 'add',
            payload: 'the note'
        });
        // let x = { action: 'add', payload: 'hello' }
        note.execute();
        expect(console.log).toHaveBeenCalled();
    });

    it('shlould return nothing to the console if there no command  ', () => {

        const note = new Note({
            action: '',
            payload: 'anything'
        });
        expect(console.log).toHaveBeenCalled();
    });



    // it('add() ', () => {
    //     const note = new Note();
    //     note.add();
    //     expect(console.log).toHaveBeenCalled();
    // });


})