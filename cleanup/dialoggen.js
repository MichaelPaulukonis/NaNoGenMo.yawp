"use strict";

var fs = require("fs"),
    path = require("path");

// http://dhtmlexamples.com/2012/04/12/parsing-text-files-using-node-js/

var charfile = process.argv[2];
var dialogfile = process.argv[3];
var output = process.argv[4];

if (!charfile || !dialogfile || !output) {
    console.error("must provide both character, dialog and output files as params!");
    process.exit(1);
}


Array.prototype.pick = function() {
    return this[Math.floor(Math.random() * this.length)];
};

var c = JSON.parse(fs.readFileSync(charfile, "ascii"));
var d = JSON.parse(fs.readFileSync(dialogfile, "ascii"));

var chars = c.characters,
    dialogs = d.dialogue,
    newlines = [], i;

for (i = 0; i < 100; i++) {
    newlines.push(chars.pick() + ": " + dialogs.pick());
}

fs.writeFile(output, newlines.join("\n"));
