"use strict";


class Note {
    constructor(obj) {
        this.action = obj.action;
        this.payload = obj.payload;
    }

    execute() {
        if (this.action === 'add') {
            this.add();
        }
    }

    add() {
        let note = {
            ['ID']: Math.floor(Math.random() * 10),
            ['Note']: this.payload
        };
        if (note.Note) {
            console.log('Adding Note:', note.Note);
        }
    }

}


// function Note(userInput) {
//     this.execute(userInput);
// }

// Note.prototype.execute = function(userInput) {
//     // console.log("userInput", userInput);
//     if (userInput.arg.action === "add") {
//         this.add(userInput);
//     } else {
//         console.log(userInput.arg);
//     }
// };

// Note.prototype.add = function(userInput) {
//     this.theNote = userInput.arg.payload;
//     this.id = Math.floor(Math.random() * 10);
//     console.log(`Adding Note: ${this.id} : ${this.theNote}`);
// };


module.exports = Note;