"use strict";
const minimist = require("minimist");

function Input() {
    //capturing the args
    const args = minimist(process.argv.slice(2));
    // console.log("process.argv", minimist(process.argv.slice(2)));
    this.arg = this.getMethod(args);
    // console.log("arg", this.arg);
}

Input.prototype.getMethod = function(arg) {
    if (Object.keys(arg)[1] === "add" || Object.keys(arg)[1] === "a") {
        this.note = this.getNote(arg.add || arg.a);
    } else {
        this.note = this.getNote("error");
    }
    return this.note;
};

Input.prototype.getNote = function(note = "") {
    if (note === "error") {
        return "Please Enter -a or --add to add a note  ";
    } else if (note !== true) {
        return { action: "add", payload: note };
    } else {
        return "Please Enter a valid message inside ' ' ";
    }
};
module.exports = Input;