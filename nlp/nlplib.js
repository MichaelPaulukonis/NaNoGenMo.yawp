
var nlplib = function() {


    var mdashStandalone = function(text) {

        // TODO: handle the following:
        //       "word-- word"
        //       "word --word"
        text = text.replace(/\b--\b/g, " -- ");
        // have m-dashes on their own...

        return text;
    };

    var removepuncts = function(text) {

        // TODO: allow posessive apostrophe (plutal)
        // eg "words'"
        text = text.replace(/[\[\]\*\(\)\\\/_,;:\`\?\!]|((?!s)'(?!s))/g, "");

        return text;

    };

    return { mDashStandalone: mdashStandalone,
             removePunctuation: removepuncts
             };

}();


module.exports = nlplib;
