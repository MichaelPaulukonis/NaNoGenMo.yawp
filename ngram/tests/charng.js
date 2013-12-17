// see http://vowsjs.org/
var vows = require("vows"),
    assert = require("assert"),
    charng = require("../charng");


var input = "This then is the test that we are testing.";

var simpleEngine = function(input) {
    var opts = { input: input,
                 model: charng.Models.markov,
                 ngramLength: 4,
                 seed: null
               };
    var engine = charng.Create(opts);
    return engine;
};

vows.describe("Test charng things.").addBatch({

    "instantiate engine with options as expected": {

        topic: function() {
            return simpleEngine(input);
        },

        "instanted as object": function(engine) {
            assert.isObject(engine);
        },
        "provides Models object": function(engine) {
            assert.isTrue(charng["Models"] !== undefined);
            assert.isObject(charng.Models);
        },
        "provides Create function": function(engine) {
            assert.isTrue(charng["Create"] !== undefined);
            assert.isFunction(charng.Create);
        },
        "provides DefaultOpts object": function(engine) {
            assert.isTrue(charng["DefaultOpts"] !== undefined);
            assert.isFunction(charng.DefaultOpts);
        }
    },

    "Create": {

        topic: function() {
            return simpleEngine(input);
        },

        "provides GetNChars function": function(engine) {
            assert.isTrue(engine["GetNchars"] !== undefined);
            assert.isFunction(engine.GetNchars);
        },
        "provides Next function": function(engine) {
            assert.isTrue(engine["Next"] !== undefined);
            assert.isFunction(engine.Next);
        },
        "contains GetWords function": function(engine) {
            assert.isTrue(engine["GetWords"] !== undefined);
            assert.isFunction(engine.GetWords);
        },
        "contains GetText function": function(engine) {
            assert.isTrue(engine["GetText"] !== undefined);
            assert.isFunction(engine.GetText);
        }
    },

    "Text": {

        "Original Option text": {
        topic: function() {
            return simpleEngine(input).GetText();
        },
        "text returned  as expected": function(text) {
            assert.equal(input, text);
        }
        },
        "Post-instantiation text can be set": {
            topic: function() {
                var newtext = "this is new text",
                    neweng = simpleEngine(input);
                neweng.SetText(newtext);
                return { engine: neweng,
                         newtext: newtext
                       };
            },
            "newly provided text is available as expected": function(topic){
                assert.isString(topic.engine.GetText());
                assert.isTrue(topic.engine.GetText() !== input);
                assert.equal(topic.engine.GetText(), topic.newtext);
            }
        }
    },

    "The Models": {
        topic: function() {
            return charng.Models;
        },
        "includes markov": function(models) {
            assert.isTrue(models["markov"] !== undefined);
            assert.equal("markov", models.markov);
        },
        "includes cento": function(models) {
            assert.isTrue(models["cento"] !== undefined);
            assert.equal("cento", models.cento);
        },
        "includes overlap": function(models) {
            assert.isTrue(models["overlap"] !== undefined);
            assert.equal("1-char overlap", models.overlap);
        }
    },

    "GetNchars": {
        topic: function() {
            return simpleEngine(input);
        },
        "returns n chars for n > 0": function(engine) {
            var n = 5,
                output = engine.GetNchars(n);
            assert.isString(output);
            assert.lengthOf(output, n);
        },
        "returns 0 chars for n = 0": function(engine) {
            var n = 0,
                output = engine.GetNchars(0);
            assert.isString(output);
            assert.lengthOf(output, n);
        }
    },

    "GetWords": {
        topic: function() {
            return simpleEngine(input);
        },
        "Should return n words for n > 0": function(engine) {
            var n = 5,
                output = engine.GetWords(n);
            assert.isArray(output);
            assert.lengthOf(output, n);
        },
        "Should return 0 words for n = 0": function(engine) {
            var n = 0,
                output = engine.GetWords(n);
            assert.isArray(output);
            assert.lengthOf(output, 0);
        }

    },

    "No spaces in input string": {
        topic: function() {
            var stringwithnospaces = "asdflkjhasdfloawetyouiadfjklzcvxsdfgsdfgsdfg";
            return simpleEngine(stringwithnospaces);
        },
        "returns n chars for n > 0": function(engine) {
            var n = 5,
                output = engine.GetNchars(n);
            assert.isString(output);
            assert.lengthOf(output, n);
        },
        "returns 0 chars for n = 0": function(engine) {
            var n = 0,
                output = engine.GetNchars(0);
            assert.isString(output);
            assert.lengthOf(output, n);
        },
        "Should return n words for n > 0": function(engine) {
            var n = 5,
                output = engine.GetWords(n);
            assert.isArray(output);
            assert.lengthOf(output, n);
        },
        "Should return 0 words for n = 0": function(engine) {
            var n = 0,
                output = engine.GetWords(n);
            assert.isArray(output);
            assert.lengthOf(output, 0);
        }

    }

}).run();
