#!/usr/bin/env python
# original code from https://gist.github.com/catseye/7336582

import sys
import random

def pick(l):
    return l[random.randint(0, len(l)-1)]

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
)
P = (
    "'Rats live on no evil star!'",
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
