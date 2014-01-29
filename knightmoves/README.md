Inpsired by [Grid Remix](https://github.com/dariusk/NaNoGenMo/issues/33), where:

> An existing text is loaded word-by-word, then organized into a 2d grid. Using a random start position in the grid, the "cursor" is moved up, down, left, or right and that word is added. The process is repeated up to 50k words. Random commas, periods, and paragraph breaks are also added along the way.


Would it be possible to do a [Knight's Tour](http://en.wikipedia.org/wiki/Knight%27s_tour) (or [Knight Graph](http://mathworld.wolfram.com/KnightGraph.html)) solution, where the algorithm can jump around the text a limited amount, but is required to visit every word one? You would end up with a novel the same size as the original (+|- punctuation).

![250px-knight s_tour_anim_2](https://dl.dropboxusercontent.com/s/h304t0zvbsujnpk/knight.tour.gif)

Continuty of words is implicit with horizontal (forward, generally) movement, but continuity is pretty much broken with vertical movement. There's nothing left for contiguous-word continuity, with knight-jumping.

For text the algorithm shouldn't be so strict -- not every jump would have to be non-contiguous. It was more the idea of using each [square|word] exactly once. A trivial solution would then be to traverse the grid from upper-left to lower-right, but that should be disallowed.

----
Interesting note:

>In the 20th century, the Oulipo group of writers used [the Knight's tour] among many others. The most notable example is the 10 × 10 Knight's Tour which sets the order of the chapters in Georges Perec's novel Life: A User's Manual. ([source](http://en.wikipedia.org/wiki/Knight%27s_tour#History))


## sidewise
I'm also interested in dumping text to a grid, so that lexical clusters (words, sentence-fragments) are in the same "region" -- not a straight line or vertical axis, but maybe something like

````
.........................
.........................
....this.is..............
.......a.cluster.........
...of..some..............
.......words.............
.........................
...X.....................
..............another....
.............cluster.....
.........................
.........................
........&^^..............
.........................
````

possible references:
* http://gamedev.stackexchange.com/questions/12272/determine-position-of-a-rotated-element-in-tetris
* https://github.com/gyoshev/jquery-tetris
* http://stackoverflow.com/questions/15263937/java-tetris-how-to-make-a-tetris-piece-move-as-4-distinct-tiles
* recent work I did on a Conway Game-of-Life implementation with grid-based thinking.
** some of the code in there has some applications

The term I come back to is `blob` (although I use `cluster`, above). A blob of text would be analagous to a Tetris-tile (without the requirement of contiguous elements). An algorithm would create a blob, then pick an area on the grid to place it, checking for existing collisions. If collsions is found, find another location. Or, just place it and overwrite existing text/transform according to rule (XOR or something). Also rule for "rotating" tiles, so that

````
........
..word..
........
````

becomes

````
...
...
.w.
.o.
.r.
.d.
...
...
````

This is on the assumption that **characters** are elements, with words, etc. being ignored. Treating words as elements would give us irregularly-sized elements. Not an impossibility, but more complicated.
