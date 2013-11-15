# Cleanup utilities

Scripts for cleaning up source files, into a state that's easier to process.


## screenplay.js
In-progress.

Reduce ([properly-formatted?](http://en.wikipedia.org/wiki/Screenplay)) screenplays to a list of characters + dialogue:

```
OZ: Not so fast!  Not....
OZ: ...so fast!  I'll have to give the matter a little thought.  Go away and come back tomorrow!
DOROTHY: Tomorrow?  Oh, but I want to go home now.
TIN MAN: You've had plenty of time already!
LION: Yeah!
OZ: Do not arouse the wrath....
OZ: ...of the Great and Powerful Oz!  I said -- come back tomorrow!
```


Would be nice to save some of the directions (currently discarded). eg:

```
MS -- Aunt Em and Uncle Henry working with baby chicks in incubator --
Dorothy runs in -- speaks to them -- Dorothy picks up baby chick -- CAMERA
TRUCKS back as Aunt Em and Dorothy come forward -- Aunt Em puts chick in
coop with hen -- then TRUCKS forward as they go to b.g. to incubator --
Dorothy reacts -- Uncle Henry looks at her -- CAMERA PANS her to left
across yard --
```


* Possibly also output a list of all characters to a separate file
* optionally output dialogue w/o characters
 * Why? Becuase I could use it that way....
