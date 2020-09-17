'use strict';

const Notes = require('../../modul/notes-collection');
const noteObj = new Notes();
require('@code-fellows/supergoose');

describe('Note Module', () => {

    it('test create()', () => {
        const obj = { text: 'note', category: 'school' };
        return noteObj.create(obj)
            .then((record) => {
                Object.keys(obj).forEach((key) => {
                    expect(record[key]).toEqual(obj[key]); // must bbe identical
                });
            });
    });

    it('get()', async() => {
        let note = { text: 'mesg1 ', category: 'mesg2' };
        const record = await noteObj.create(note);
        console.log('record note  : ', record);
        const noteItm = await noteObj.get(record._id);
        console.log('note Itm :', noteItm);
        Object.keys(note).forEach(key => {
            expect(noteItm[key]).toEqual(noteItm[key]);
        });

    });

    // it('delete()', async() => {
    //     let note = { text: 'mesg3 ', category: 'mesg3' };
    //     const record = await noteObj.create(note);
    //     console.log('record note  : ', record);
    //     const noteItm = await noteObj.delete(record._id);
    //     console.log('note Itm :', record._id);
    //     expect(noteItm).toBeUndefined();

    // });


});