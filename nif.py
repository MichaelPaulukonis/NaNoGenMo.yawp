#!/usr/bin/env python
# original code from https://gist.github.com/catseye/7336582

import sys
import random

def pick(l):
    return l[random.randint(0, len(l)-1)]

# expanded with palindromes from http://www.palindromelist.net/
E = (
    'Mom!',
    'Mom!  Mom!',
    'Mom, Mom, Mom!',
    'Dad!',
    'Dad!  Dad!',
    'Dad,  Dad,  Dad!',
    'Mom?',
    'Mom?  Mom.  Mom?',
    'Dad?',
    'Dad?  Dad.  Dad?',
    'Mom.',
    'Dad.',
    'Poop poop poop poop.',
    'Poop!',
    'Dog doo? Good God!',
    'Dog, no poop on God!',
    'Eep, I pee!',
    'Heh!',
    'Huh?',
    'Hah!',
    'Hah hah!',
)
P = (
    "'Rats live on no evil star!'",
    'A but tuba.',
    'A Santa at NASA.',
    'Anna!',
    'As I pee, sir, I see Pisa!',
    'Baby bab.',
    'Boob.',
    'Boobs! Boob.',
    'Camp Mac! Camp Mac!',
    'Dad - step on no pets, Dad!',
    'Dammit, I\'m mad!',
    'Dennis sinned.',
    'Don\'t nod.',
    'Dumb mud.',
    'Evil olive.',
    'Ew! Eat a ewe?',
    'Go, dog!',
    'God saw I was dog.',
    'God\'s dog.',
    'Goddamn mad dog!',
    'Harass Sarah.',
    'He did, eh?',
    'I did, did I?',
    'I\'m a pup, am I?',
    'Lion oil!',
    'Ma has a ham.',
    'Mad as Adam.',
    'Nate bit a Tibetan.',
    'No lemon, no melon.',
    'No lemons, no melon.',
    'Pa\'s a sap.',
    'Put Eliot\'s toilet up.',
    'Smart rams!',
    'Solos!',
    'Spacecaps!',
    'Test tube butt set.',
    'Tons o\' snot.',
    'Too bad I hid a boot.',
    'Was it a bat I saw?',
    'Was it a cat I saw?',
    'Was it a rat I saw?',
    'Was it Eliot\'s toilet I saw?',
    'Wet stew.',
    'Won\'t it now?',
)

print "Nif"
print "==="
print

sys.stdout.write('"Mom!  Mom!  Mom!  ')

sequence = []
for x in range(1, 3210):
    sequence.append(pick(P))
    sequence.append(pick(E))

for x in sequence:
    sys.stdout.write(x + '  ')

for x in reversed(sequence):
    sys.stdout.write(x + '  ')

print '... Mom?"'
print
print '"Mom...?"'
print
print '"MOM!!!!!!!!!"'
print
print '--fin--'
