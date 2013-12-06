// see http://vowsjs.org/
var vows = require("vows"),
    assert = require("assert"),
    charng = require("../charng");


var input = "This then is the test that we are testing.";

var simpleEngine = function(input) {
    var opts = { input: input,
                 model: "markov",
                 ngramLength: 4
               };
    var engine = new charng(opts);
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
            assert.isTrue(engine["Models"] !== undefined);
            assert.isObject(engine.Models);
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
        "contains Text (string)": function(engine) {
            assert.isTrue(engine["Text"] !== undefined);
            assert.equal(typeof engine.Text, "string");
        }

    },

    "Text": {

        "Original Option text": {
        topic: function() {
            return simpleEngine(input).Text;
        },
        "text returned  as expected": function(text) {
            assert.equal(input, text);
        }
        },
        "Post-instantiation text can be set": {
            topic: function() {
                var newtext = "this is new text";
                return { engine: simpleEngine(input).Text = newtext,
                         newtext: newtext
                       };
            },
            "newly provided text is available as expected": function(topic){
                assert.isTrue(topic.engine.Text !== input);
                assert.equal(topic.engine.Text, topic.engine.newtext);
            }
        }
    },

    "The Models": {
        topic: function() {
            return new charng({}).Models; // all that's necessary to get the models
            // NOTE: do NOT try to execute "GetNChars(n)" on an textless engine
            // bad error.
            //
            // NOTE: would like to provide these models without having to instantiate anything
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
        "returns n chars": function(engine) {
            var n = 5;
            assert.equal(engine.GetNchars(n).length, n);
        }
    }



}).run();
