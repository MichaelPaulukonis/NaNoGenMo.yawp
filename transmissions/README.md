## transmissions and other replacements

[TRANSMISSIONS](http://luckysoap.com/generations/transmission.html), and its javascript-source [The Two](http://nickm.com/poems/the_two.html) (I know nothing of the Python antecedent, save that it was in Python, and anteceded), are pretty simple.

They have a set of sentences (templates) that contain place-holder callouts that select a random word from a specific set.

If anything, this is a cruder version of the code seen in [jargon.js](https://github.com/MichaelPaulukonis/jargon.js) - sve that jargon generates only one sentence at a time, randomly selected from a list of sentence-templates.

Not that ''crude'' should be taken negatively -- transmission and two were written for specific purposes. Their notes indicate that the coding and recoding was part of their translation-transmission from use-to-use. I have a tendency to fetishize the code and better it, at the expense of spending more time thinking about the output. In both of these cases, the code serves the output exactly as the creators wanted it to - not the way ''I'' want it to, but I am not the creator. And the end-results certainly justify the means.

However, both _TRANSMISSIONS_ and _The Two_ could be re-written using my enhanced jargon-engine (which is inappropriately named. It's a sentence generator, with the default template and word-lists from the original use as a "Hollywood jargon generator").
Specific sentences would be rewritten as template calls, and new word-lists added.


These are not necessarily suitable for longer works -- they are geared to produce individual sentences. Trnasmission and Two having a specific sequence of sentence types. To do so at NaNoGenMo-lengths - requiring 50K words - is certainly possible, but an exercise in futility.

## others
[GORGE](http://luckysoap.com/generations/gorge.html) based on [Taroko Gorge](http://nickm.com/poems/taroko_gorge.html)

Actually, looking at the flow of output, I could almost see something lasting for 50K+ words. With the right set up inputs and setup.....

## jargon.js
I'm starting to regret placing jargon into a standalone repo. I think it more appropriately belongs in here, with other replacement-experiments.

## novelizification and novelizifiers
That is to say, the act of making something into a novel, and things that make something into a novel.

[To wit.](https://github.com/elib/NovelHarvesterBot/blob/master/make_novel.rb)

Which a) is written in ruby, which I don't speak and b) has bits specific for the project, but c) is pretty much conceptually what I'm interested in.

Extension: `novelizify` takes the following parameters:

* senctences - an array of strings. presumed to be sentences.
* chapterCount - how many chapters to divide this into

divide arrays into chapterCount-blobs, with some sort of variance (for long and short chapters).

divide each chapter into paragraphs.
How many?
Based on word-count? something else?

Title of chapters? in original, taken from first sentence of chapter.
Title of novel? in original, taken from first sentence of book.

The original is specifically formatting for PDF.
Should the output be that, or some sort of JSON, with some other bridge formatting for PDF or Web or markdown or whathaveyou?


Given a large-enough set of words/sentences, this provides a framing device such to say "yep, lookee here, this is one of them novel-things."



