"use strict";

var fs = require("fs"),
    path = require("path");

// http://dhtmlexamples.com/2012/04/12/parsing-text-files-using-node-js/

var file = process.argv[2];
var outfile = process.argv[3];

if (!file || !outfile) {
    console.error("must provide both input and output files as params!");
    process.exit(1);
}


var processor = function(err, data) {

    if (err) {
	console.error(err);
	process.exit(1);
    };

    // regexes to identify flush-left text (delete) and Characters
    // also.. who knows what
    var lines = [], newlines = [], charnames = [],
	tmp = "", character = "", dialogue = [],
	flushleftRe = /^\b/, //characterRe = /([A-Z]{2,}( [A-Z0-9\.]*)?)/;
        characterRe = /^(\b[A-Z0-9\.]+ ?)*$/;

    var store = { characters: [],
                  dialogue: [],
                  chardialogue: [],
                  directions: []
                };

    lines = data.trim().split("\n");

    lines.forEach(function(line) {

	// if the line is flush-left, throw it away
	// trim whatever the lines is
	// if the line is a character name, store in charnames
	// otherwise, it's dialogue. concatenate until blank line is found.
	// blank line found
	//   emit charname: dialogue


        if (flushleftRe.exec(line) && line.length > 0) {
            dialogue.push(line);
            return;
        }

	line = line.trim().replace("\r", "");

        if (line.length == 0) {

	    // non-blank lines were captured but in the absence of a character name
	    // we'd get gibberish
	    // this seems hackish?
	    // ALSO: we are ignore "stage directions" or whatever that setup stuff is.
	    // ALSO: some things slip through (see OZ)
            var lump;
	    if (character) {
                lump = dialogue.join(" ");
                if (lump.length > 0) {
                    store.dialogue.push(lump);
                    lump = character + ": " + lump;
                    store.chardialogue.push(lump);
                    newlines.push(lump);
                }
            } else {
                // currently being discarded by flush-left directive
                lump = dialogue.join(" ");
                if (lump.length > 0) {
                    store.directions.push(lump);
                }
            }

	    character = "";
	    dialogue = [];

            return;
        }

	// save character name
        // fails for THREE TOUGH KIDS
        // needs to skip the "o.s." part of WITCH o.s.
        // DOROTHY AND SCARECROW
        // MUNCHKIN NO. 1
	var crctr = characterRe.exec(line);
	if(crctr) {
	    character = crctr[0];
            if (store.characters.indexOf(character) == -1) store.characters.push(character);
	    return;
	};

	// if not blank line, store as dialogue
	if (character) {
	    dialogue.push(line);
	    return;
	};

    });

    fs.writeFile(outfile, newlines.join("\n"));
    var json = JSON.stringify(store, null, 2).replace("\\r", "");
    fs.writeFile(outfile + ".json", json);

};

fs.readFile(file, "ascii", processor);
