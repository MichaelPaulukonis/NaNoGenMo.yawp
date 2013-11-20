var pos = require('pos');
// NOTE: does not recognize ALL CAPS such as DOROTHY (remove the U&lc versions, and it is no longer found)
var text = "FADE OUT:  MS -- Dorothy stoops down to Toto -- speaks to him -- then runs down road to b.g. -- Toto following -- DOROTHY She isn't coming yet, Toto. Did she hurt you?  She tried to, didn't she?  Come on -- we'll go tell Uncle Henry and Auntie Em. Come on, Toto.  LS -- Farm yard -- Dorothy enters left b.g. along road -- Toto following her -- CAMERA PANS right -- she comes forward thru gate -- runs forward to Aunt Em and Uncle Henry working at Incubator -- ";
var origText = "This is some sample text. This text can contain multiple sentences.";
var words = new pos.Lexer().lex(text);
var taggedWords = new pos.Tagger().tag(words);
var tags = {};
for (var i in taggedWords) {
    var taggedWord = taggedWords[i];
    var word = taggedWord[0];
    var tag = taggedWord[1];
    if (!tags[tag]) { tags[tag] = [];}
    tags[tag].push(word);
    console.log(word + " /" + tag);
}
console.log(tags);
