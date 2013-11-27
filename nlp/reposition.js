var pos = require("pos"),
    argv = require("optimist").argv,
    fs = require("fs");

var source1 = argv.source1, source2 = argv.source2, target = argv.target;

if (!source1 || !source2 || !target) {
    console.error("source1 source2 and target must be supplied.");
    process.exit();
}

// we're assuming that the parsed files have an NN-entry
// which they probably will
// safety will come down the road....
var main = fs.readFileSync(source1, "utf8"),
    mainNouns = JSON.parse(fs.readFileSync(source1 + ".json.txt", "utf8")).NN, // this is also a horrible assumption
    nounsource = JSON.parse(fs.readFileSync(source2, "utf8")).NN;

console.log("main noun count: %d  substitution noun count: %d", mainNouns.length, nounsource.length);

var i, log = [];

for (i = 0; i < mainNouns.length; i++) {
    // NOT QUITE - must replace a complete word...
    var pattern = "\\b" + mainNouns[i] + "\\b";
    var regex = new RegExp(pattern);
    log.push(mainNouns[i] + " : " + nounsource[i]);
    main = main.replace(regex, nounsource[i]);
    debugger;
}

fs.writeFileSync("replacelog.txt", log.join("\n"));

fs.writeFileSync(target, main);

console.log("processed '%s' and '%s' to generate '%s'", source1, source2, target);
