var charng = require("../charng"),
    myArgs = process.argv.slice(2);

// optionally pass in seed and input text
// you can pass in both or seed but not only input
// BECUASE THIS IS A SIMPLE STUPID APP FOR TESTING
// if I feel like it, I will install optimist or something
var seed = myArgs[0] || null,
    input = myArgs[1] || "This then is the test that we are testing.";

var simpleEngine = function(input, seed) {
    var opts = { input: input,
                 model: charng.Models.markov,
                 ngramLength: 4,
                 seed: seed
               };
    var engine = charng.Create(opts);
    return engine;
};


var e = simpleEngine(input, seed);

console.log("Output: %s", e.GetWords(10).join(" "));
