// see http://vowsjs.org/
var vows = require("vows"),
    assert = require("assert"),
    lib = require("../nlplib");

var mdashtext = "This -- is a sentence--thing.";

vows.describe("Test standalone mdashes").addBatch({

    "mdashes ('--') in the middle of two words must be preceeded and followed by whitespace": {

        topic: function() {
            return lib.mDashStandalone(mdashtext);
        },

        "middles stands alone": function(topic) {
            assert.equal("This -- is a sentence -- thing.", topic);
        }

    },

    "mdashes ('--') at the end of a word must be preceeded and followed by whitespace": {

        topic: function() {
            return lib.mDashStandalone("word-- word");
        },

        "space after": function(topic) {
            assert.equal("word -- word", topic);
        }

    },

    "mdashes ('--') at the end of a word must be preceeded and followed by whitespace": {

        topic: function() {
            return lib.mDashStandalone("word --word");
        },

        "space after": function(topic) {
            assert.equal("word -- word", topic);
        }

    },


    "semicolon is removed": {

        topic: function() {
            return lib.removePunctuation("word;");
        },

        "semicolon removed": function(topic) {
            assert.equal(topic, "word");
        }

    },

    "leading back-tick (`) is removed": {

        topic: function() {
            return lib.removePunctuation("`word");
        },

        "leading back-tick removed": function(topic) {
            assert.equal(topic, "word");
        }

    },

    "trailing apostrophe (singular non-posessive) is removed": {

        topic: function() {
            return lib.removePunctuation("word'");
            // NOTE: no coverage/test/code for "cats'" - a plural posessive
        },

        "trailing apostrophe removed": function(topic) {
            assert.equal(topic, "word");
        }

    },

    "possessive apostrophe (singular) is NOT removed": {

        topic: function() {
            return lib.removePunctuation("word's");
        },

        "possessive apostrophe NOT removed": function(topic) {
            assert.equal(topic, "word's");
        }

    },

    "posessive apostrophe (plural) is NOT removed": {

        topic: function() {
            return lib.removePunctuation("words'");
            // NOTE: no coverage/test/code for "cats'" - a plural posessive
        },

        "posessive apostrophe (plural) is NOT removed": function(topic) {
            assert.equal(topic, "words'");
        }

    }

}).run();
