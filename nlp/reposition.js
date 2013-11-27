var argv = require("optimist").default("tag", "NN").argv, // assume that parsed files have an "NN" entry unless otherwsie supplied
    fs = require("fs");

var source1 = argv.source1, source2 = argv.source2, target = argv.target, tag = argv.tag;

if (!source1 || !source2 || !target) {
    console.error("source1 source2 and target must be supplied.");
    process.exit();
}

// check if string has a leading cap
String.prototype.isCapitalized = function() {
    return (this.charAt(0) === this.charAt(0).toUpperCase());
};

String.prototype.initCap = function() {
    return (this.charAt(0).toUpperCase() + this.slice(1));
};

var main = fs.readFileSync(source1, "utf8"),
    mainNouns = JSON.parse(fs.readFileSync(source1 + ".json.txt", "utf8"))[tag], // this is also a horrible assumption
    sourceNouns = JSON.parse(fs.readFileSync(source2, "utf8"))[tag],
    i, log = [],
    ignore = "xxIGNORExx";

console.log("main noun count: %d  substitution noun count: %d", mainNouns.length, sourceNouns.length);

for (i = 0; i < mainNouns.length; i++) {
    // must replace only a COMPLETE word (to avoid a clbuttic mistake)
    var pattern = "\\b" + mainNouns[i] + "\\b",
        regex = new RegExp(pattern),
        replacenoun = mainNouns[i].isCapitalized() ? sourceNouns[i].initCap() : sourceNouns[i];

    main = main.replace(regex, ignore + replacenoun + ignore); // mark replacements to avoid re-replacing

    log.push(mainNouns[i] + " : " + replacenoun);
}

var igre = new RegExp(ignore, "g");
main = main.replace(igre, ""); // remove markers

fs.writeFileSync("replacelog2.txt", log.join("\n"));

fs.writeFileSync(target, main);

console.log("processed '%s' and '%s' to generate '%s'", source1, source2, target);
