"use strict";

class Note {
    constructor(userInput) {
        this.execute(userInput);

    }

    execute(userInput) {
        // console.log("userInput", userInput);
        if (userInput.arg.action === "add") {
            this.add(userInput);
        } else {
            console.log(userInput.arg);
        }
    };

    add(userInput) {
        this.theNote = userInput.arg.payload;
        this.id = Math.floor(Math.random() * 10);
        console.log(`Adding Note: ${this.id} : ${this.theNote}`);
    };
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