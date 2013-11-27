var pos = require("pos"),
    argv = require("optimist").argv,
    fs = require("fs"),
    lib = require("./nlplib");

var source = argv.source, target = argv.target;

if (!source) {
    console.error("source must be supplied.");
    process.exit();
}

// ".txt" because my editor-highlighter freaks out on large json files...
if (!target) { target = source + ".json.txt"; }

console.log("source: %s target: %s", source, target);

var text = lib.mDashStandalone(fs.readFileSync(source, "utf8"));
// have m-dashes on their own...



var words = new pos.Lexer().lex(text),
    taggedWords = new pos.Tagger().tag(words),
    tags = {},
    interest = ["NN", "NNS", "NNP", "NNPS"]; // combine all tags of interest into one clump

for (var i in taggedWords) {
    var taggedWord = taggedWords[i];
    var word = lib.removePunctuation(taggedWord[0]);
    var tag = taggedWord[1];

    if (word.length > 0) {
        // why "King" is ALWAYS considered a VBG?
        // ANSWER: becuase it ends with "ing" (invariant transformational rule)
        // this library needs exceptions....
        // and/or a better VBG rule ....
        if (word.toLowerCase() === "king") { tag = "NN"; }
        if (word.toLowerCase() === "kings") { tag = "NNS"; }

        // do I want to do this BEFORE or after the other tag-push?
        // before mean this is the only tag
        // after mean 1) we'd have both 2) need to copy the create-if-doesn't-exist code
        if (interest.indexOf(tag) >= 0) {tag = "NOUN"; }

        if (!tags[tag]) { tags[tag] = [];}
        tags[tag].push(word);
    }
}


fs.writeFile(target, JSON.stringify(tags));

console.log("'%s' processed as '%s'", source, target);
