## Text-Adventure games as a text-generation engine

_The Swallows_ uses NPC characters with no user intervention to explore and interact with an environment, and each other.
[Discussion on Cat's Eye's _The Swallows_](https://github.com/dariusk/NaNoGenMo/issues/39) and [the project itself](https://github.com/catseye/The-Swallows/).
The engine seems pretty hard-coded to the specific storyline, with code for the gun, etc. **as of 2013.11.11 It has been expanded beyond the early version included here.**

I'm interested in how setting up a world, actors and objects can lead to emergent behavior. Not necessarily "plot-oriented" but who knows. The existing versions of **The Swallows** are hard-coded for the "plot" (such as it is).

Notes I posted @ [the NaNoGenMo discussion on _The Swallows_](https://github.com/dariusk/NaNoGenMo/issues/39#issuecomment-28030729) and [more](https://github.com/dariusk/NaNoGenMo/issues/39#issuecomment-28066018)

> I would like to see it more modularized, so that more characters (Actors) could be introduced, or removed (say, 1 or 100 wandering about).

> grouping/avoidance behavior would be interesting - desires to be with other people (in general) or avoid them.
same too, for places.
if there was a time element, extended to that.

> then, you could have a character that wants to be outside, but avoids sunlight. game mechanics would have them go to interior rooms, basements, etc. but when night falls, go outside.

> If desire was extended to object, characters would want some things, or not want somethings. Simple trading mechanics could lead to complex interactions. A character who places great desire on a ring would try to get it back, following a person who picks it up, pester them, over-ride other avoidance behaviors they have....

>I know there has been a lot of work on Interactive Fiction as narrative, but I haven't seen anything where the "Interactive" part has been removed.

>If you know of any prior work in this area, I'd be interested in seeing it. (N.B.: I've continued to search fruitlessly. Asked a friend who has written some IF.)

>What I like about this approach is that it parallels what I've heard of the writing process from some authors -- that the plot doesn't spring full-grown from their foreheads. Rather, characters (and/or a situation) come first, and the story comes from following the characters, and "seeing" what they do.

>The "simplistic" output generated so far has great qualities, and further work might obscure it. That's not my intention.

>But I am curious about how changing elements could change how a narrative develops: hundred of Items, hundreds of Actors, Actors that want to be alone, hundreds of Locations with only a few Actors that want to cluster together, but can't find one another, all according to game mechanics.

>Simple rules, complex emergent behavior.

>I'm also fascinated for another reason - way back in the antediluvian period (the mid-1980s) I wanted to write text-adventure parsers. But never got very far. Writing these games/stories with other engines never appealed to me, and I never played with that area again. Your approach has no parser, since there's no input. What is the background on the coding-concepts for building the world and dealing with the Actors and objects?

>And, hopefully, interesting texts.

I'd like to see what would happen if the Actors/Characters could "respond" to one another's dialoge. Maybe even just a simple eliza-bot. Looks like Darius [may have done that already.](https://github.com/dariusk/NaNoGenMo/issues/39#issuecomment-28110452)

A world-editor, something to build cohesive maps (eg, rooms that lead to one-another) _on a large scale_ could be useful.
Right now, the worlds are small. 
What happens when the characters wander about, searching and discovering?

## evaluations and thoughts
[Grimm.js](https://github.com/ragekit/Grimm.js) looks interesting, although it currently requires user intervention, and is barely there. It is designed to be a core-engine for multiple games, however. Has multiple characters, however. May have potential for what I'm looking for....

I also looked at [Undum](https://github.com/idmillington/undum) - a javascript+html framework for building interactive fiction, but there were no NPC characters, which would make everything user-driven.

Nick Monfort's [Interactive Fiction page](http://www.nickm.com/if/) including links to his [Curveship system](http://curveship.com/).

[Dedalus](https://github.com/pistacchio/Dedalus) is _an authoring system for generating Choose Your Own Adventure (CYOA) narrative._

## links
Nick Montfort - [Toward a Theory of Interactive Fiction](http://nickm.com/if/toward.html) download PDF at page

[Inform](http://inform7.com/) - THE IF engine

[NPC movement in Inform](http://www.firthworks.com/roger/infact/move1.html)

http://mylifescoop.com/2013/06/12/adventures-in-text-adventures/

Quest allows for scripted "Walkthroughs" intended for testing -- would this be similar to plotting something out? It wouldn't be auto-generated, at that point, though.... http://quest5.net/wiki/Walkthroughs

[Python Adventurew Writing System](http://home.fuse.net/wolfonenet/PAWS.htm) - uh, dates to 2008?

http://www.firthworks.com/roger/cloak/

http://www.ambrosine.com/resource.html

[Creating Autonomous Non-Player Characters in Interactive Fiction](http://brasslantern.org/writers/iftheory/autonomousnpcs.html)

http://saucersofmud.wordpress.com/2011/03/27/two-stream-of-consciousness-experiments-in-interactive-fiction/

http://emshort.wordpress.com/2011/03/22/if-demo-fair-themes-procedural-generation/

http://emshort.wordpress.com/2008/02/13/emergent-puzzle-solutions/




