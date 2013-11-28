var fs = require("fs"),
    argv = require("optimist").argv;


var titles = [],
    file = fs.readFileSync("combined.txt", "ascii"),
    lines = file.trim().split("\n"),
    capturing = false,
    blanklinecount = 0,
    curlines = [];

lines.forEach(function(line) {

    // if we've passed 3 blank lines, and this line is NOT blank, start capturing a title
    // if we are capturing a title, and this line is blank, join the title, push to list, start over
    if (line.length === 0) {
        blanklinecount ++;

        if (capturing) {
            var title = curlines.join(" ");
            titles.push(title);
            curlines = [];
            blanklinecount = 1;
            capturing = false;
        }
    } else {
        if (blanklinecount >= 3) {
            capturing = true;
        }
        blanklinecount = 0;
        if (capturing) {
            curlines.push(line);
        }
    }

});

fs.writeFileSync("titles.txt", titles.join("\n"));
