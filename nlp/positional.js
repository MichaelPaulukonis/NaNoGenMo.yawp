var pos = require("pos"),
    argv = require("optimist").argv,
    fs = require("fs");

var source = argv.source, target = argv.target;

if (!source) {
    console.error("source must be supplied.");
    process.exit();
}

// ".txt" because my editor-highlighter freaks out on large json files...
if (!target) { target = source + ".json.txt"; }

console.log("source: %s target: %s", source, target);

var text = fs.readFileSync(source, "utf8");

var words = new pos.Lexer().lex(text);
var taggedWords = new pos.Tagger().tag(words);
var tags = {};
for (var i in taggedWords) {
    var taggedWord = taggedWords[i];
    var word = taggedWord[0];
    var tag = taggedWord[1];
    if (!tags[tag]) { tags[tag] = [];}
    tags[tag].push(word);
}


fs.writeFile(target, JSON.stringify(tags));

console.log("'%s' processed as '%s'", source, target);
